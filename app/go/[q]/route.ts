import { NextRequest, NextResponse } from 'next/server';
import { site } from '@/lib/site';
import affiliateLinks from '@/lib/affiliate-links.json';

// Branded affiliate redirect. Two modes (2026-07-19):
//  1. A known AFFILIATE-TOOL slug (elevenlabs, jasper, pictory, titan-fitness, …) -> 307 to that
//     program's referral URL, with ?v=<video> passed through as the merchant sub-id for per-video
//     revenue attribution. This is the pre-YPP money lever for the AI-tools + fitness channels.
//  2. Anything else -> the original Amazon search redirect with the tag applied server-side.
// Owner fills their real referral ids in ARU config/affiliate_links.json (mirrored to lib/); until
// then a link still resolves to the tool's homepage (no commission, never broken).
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ q: string }> }
) {
  const { q } = await params;
  const slug = decodeURIComponent(q || '').trim().toLowerCase();
  const v = req.nextUrl.searchParams.get('v') || '';

  // Mode 1: known affiliate tool
  const links = affiliateLinks as Record<string, string>;
  if (links[slug]) {
    let dest = links[slug];
    if (v) {
      const sep = dest.includes('?') ? '&' : '?';
      dest = `${dest}${sep}sub_id=${encodeURIComponent(v)}`; // merchant/PartnerStack sub-id attribution
    }
    return NextResponse.redirect(dest, 307); // 307 preserves method if a program's tracking needs it
  }

  // Mode 2: Amazon search fallback (unchanged behavior)
  const query = slug.replace(/-/g, ' ').slice(0, 150);
  const target = query
    ? `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${site.affiliateTag}`
    : `https://www.amazon.com/?tag=${site.affiliateTag}`;
  return NextResponse.redirect(target, 302);
}
