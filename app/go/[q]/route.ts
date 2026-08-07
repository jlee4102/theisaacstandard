import { NextRequest, NextResponse } from 'next/server';
import { track } from '@vercel/analytics/server';
import { site } from '@/lib/site';
import affiliateLinks from '@/lib/affiliate-links.json';

// Branded affiliate redirect. Two modes (2026-07-19):
//  1. A known AFFILIATE-TOOL slug (elevenlabs, jasper, pictory, titan-fitness, …) -> 307 to that
//     program's referral URL, with ?v=<video> passed through as the merchant sub-id for per-video
//     revenue attribution. This is the pre-YPP money lever for the AI-tools + fitness channels.
//  2. Anything else -> the original Amazon search redirect with the tag applied server-side.
// Owner fills their real referral ids in ARU config/affiliate_links.json (mirrored to lib/); until
// then a link still resolves to the tool's homepage (no commission, never broken).
//
// CLICK TRACKING (2026-07-26): this route was a BLIND FUNNEL — 19,512 YouTube views across four
// channels, every video carrying a working tagged link, and no way to tell whether 1 person
// clicked or 1,000. Every downstream revenue decision (which channel converts, whether the Amazon
// 3-qualifying-sale deadline is reachable, whether affiliate is worth continuing at all) was
// unmeasurable. Each redirect now emits a custom event via @vercel/analytics — ALREADY a
// dependency here, so no new package and nothing to provision. Amazon's own `ascsubtag` was
// evaluated first and rejected: Amazon grants it only to select publishers, not to new Associates.
// Strictly fail-soft — any tracking error is swallowed so an analytics hiccup can never break a
// revenue link. No personal data: only the slug, the video id we generated, and the dest host.
// READABLE CLICK COUNTERS (2026-07-26). track() above records to Vercel Analytics, but that is a
// DASHBOARD — ARU cannot query it without a Vercel token and a plan tier exposing custom events, so
// the fleet still could not see a single click. It was tuning thumbnails and topics against VIEWS
// (measurable) while the step that actually pays stayed invisible: steering on the wrong signal.
//
// These INCR counters in a Redis-compatible REST store that BOTH sides can reach — this route
// writes, ARU's scripts/funnel.py reads. Chosen over Vercel KV/Postgres because it is a plain HTTP
// call: no SDK, no new package, no plan gating.
//
// Fully optional: with the env vars unset this is a no-op and the redirect behaves exactly as
// before. Swallowed and non-blocking — a counter must never delay or break a revenue link.
// Counts only: slug, video id, mode, day. No IPs, no user identifiers, nothing personal.
async function bumpCounters(slug: string, video: string, mode: string, page: string) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const tok = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !tok) return;
  const day = new Date().toISOString().slice(0, 10);
  // one pipelined round trip so the redirect never waits on several calls
  const cmds: string[][] = [
    ['INCR', 'clicks:total'],
    ['INCR', `clicks:day:${day}`],
    ['INCR', `clicks:slug:${slug}`],
    ['INCR', `clicks:mode:${mode}`],
  ];
  if (video) cmds.push(['INCR', `clicks:video:${video}`]);
  if (page) cmds.push(['INCR', `clicks:page:${page}`]);
  try {
    await fetch(`${url}/pipeline`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${tok}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(cmds),
      cache: 'no-store',
    });
  } catch {
    /* a counter must never break a redirect */
  }
}

async function logClick(slug: string, video: string, mode: 'tool' | 'amazon', destHost: string,
                        page = '') {
  const payload = { slug, video: video || '(none)', mode, dest: destHost, page: page || '(none)' };
  try {
    await track('affiliate_click', payload);
  } catch {
    /* analytics must never break a redirect */
  }
  await bumpCounters(slug, video, mode, page);
  // Redundant record in the function log — independent of the analytics pipeline, greppable in the
  // Vercel dashboard, and useful if a click ever needs to be reconstructed.
  try {
    console.log(`[affiliate_click] ${JSON.stringify(payload)}`);
  } catch {
    /* ignore */
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ q: string }> }
) {
  const { q } = await params;
  const slug = decodeURIComponent(q || '').trim().toLowerCase();
  const v = req.nextUrl.searchParams.get('v') || '';
  // PER-PAGE ATTRIBUTION (Layer 5, 2026-08-07): review-page CTAs now route through /go, and the
  // page that sent the click is derived from the same-origin Referer — no per-page prop threading,
  // so every already-published page participates. Cross-origin/absent referers count as '(none)'.
  // No personal data: a path on our own site, nothing else.
  let page = '';
  try {
    const ref = req.headers.get('referer') || '';
    const u = new URL(ref);
    if (u.host === req.nextUrl.host) {
      page = u.pathname.replace(/^\/+|\/+$/g, '').slice(0, 120); // e.g. review/sony-wh1000xm5-review
    }
  } catch {
    /* no referer is normal (direct hits, some privacy modes) — attribution stays blank */
  }

  // Mode 1: known affiliate tool
  const links = affiliateLinks as Record<string, string>;
  if (links[slug]) {
    let dest = links[slug];
    if (v) {
      const sep = dest.includes('?') ? '&' : '?';
      dest = `${dest}${sep}sub_id=${encodeURIComponent(v)}`; // merchant/PartnerStack sub-id attribution
    }
    let host = 'unknown';
    try {
      host = new URL(dest).host;
    } catch {
      /* malformed dest still redirects; just log the host as unknown */
    }
    await logClick(slug, v, 'tool', host, page);
    return NextResponse.redirect(dest, 307); // 307 preserves method if a program's tracking needs it
  }

  // Mode 1.5: DIRECT PRODUCT redirect — the slug IS an ASIN (2026-08-03). The Associates
  // dashboard finally gave ground truth: 798 clicks in 30 days, 0 orders, 0.00% conversion.
  // Every click was landing on a SEARCH-RESULTS page (mode 2 below) — a wall of products the
  // viewer must dig through, which converts near zero. ARU now resolves a specific, identity-
  // checked ASIN per linked product where it can (reviewer._resolve_asin + the ratings-count
  // demand gate) and links /go/<ASIN>; this sends that click to the actual product page, the
  // highest-converting landing Amazon has. Search stays as the fallback for unresolvable names.
  // Two ASIN shapes exist: B0-prefixed for most products, and ISBN-10 (9 digits + digit/X) for
  // books — the history/context channels link books, so both must route to /dp/.
  if (/^b0[a-z0-9]{8}$/.test(slug) || /^[0-9]{9}[0-9x]$/.test(slug)) {
    const asin = slug.toUpperCase();
    await logClick(slug, v, 'amazon', 'www.amazon.com/dp', page);
    return NextResponse.redirect(
      `https://www.amazon.com/dp/${asin}?tag=${site.affiliateTag}`, 302);
  }

  // Mode 2: Amazon search fallback (unchanged behavior)
  const query = slug.replace(/-/g, ' ').slice(0, 150);
  const target = query
    ? `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${site.affiliateTag}`
    : `https://www.amazon.com/?tag=${site.affiliateTag}`;
  await logClick(slug, v, 'amazon', 'www.amazon.com', page);
  return NextResponse.redirect(target, 302);
}
