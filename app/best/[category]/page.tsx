import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, reviews, site } from '@/lib/site';
import StarRating from '@/components/StarRating';
import AffiliateLink from '@/components/AffiliateLink';

// "Best X" roundup — the top affiliate traffic format. One dynamic route generates a ranked
// roundup per category from the existing reviews (sorted by rating). No per-roundup files.
const YEAR = 2026;

// UX AUDIT P1 (2026-07-26): this page — the highest purchase-intent page on the site ("best X" is
// what someone types when they are ready to buy) — shipped with ZERO buy links and no at-a-glance
// comparison. A visitor had to click into a full review before they could act. ASINs live in each
// review's page.tsx (not in site.ts), so they are read from disk at BUILD time: no duplicated data,
// nothing to keep in sync, and a review published later is picked up on its next deploy.
function asinFor(slug: string): string {
  try {
    const src = fs.readFileSync(path.join(process.cwd(), 'app', 'review', slug, 'page.tsx'), 'utf8');
    const m = src.match(/const \w*ASIN\w* = '([A-Z0-9]{10})'/);
    return m ? m[1] : '';
  } catch {
    return ''; // no ASIN -> render no button rather than a dead one
  }
}

// First sentence of the excerpt doubles as a "best for" line — enough to choose on without
// scrolling into the prose.
function bestFor(excerpt: string): string {
  const s = (excerpt || '').split(/(?<=[.!?])\s/)[0] || excerpt || '';
  return s.length > 100 ? s.slice(0, 97).trimEnd() + '…' : s;
}

// Only categories with at least two reviews make a real roundup.
function roundupCategories() {
  return categories.filter((c) => reviews.filter((r) => r.category === c.slug).length >= 2);
}

export function generateStaticParams() {
  return roundupCategories().map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) return {};
  return {
    title: `Best ${cat.name} (${YEAR}): Tested & Ranked`,
    description: `Our honest, hands-on ranking of the best ${cat.name.toLowerCase()} we've tested — with the trade-offs nobody else mentions.`,
  };
}

export default function Page({ params }: { params: { category: string } }) {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) return notFound();
  const ranked = reviews
    .filter((r) => r.category === cat.slug)
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
  if (ranked.length < 2) return notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Best ${cat.name} (${YEAR})`,
    itemListElement: ranked.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `/review/${r.slug}`,
      name: r.title,
    })),
  };

  return (
    <article className="max-w-3xl mx-auto px-6 md:px-10 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="text-xs text-ink-faint mb-4">
        <Link href="/" className="hover:text-accent-deep transition">Home</Link>
        <span className="text-line mx-1.5">›</span>
        <Link href={`/category/${cat.slug}`} className="hover:text-accent-deep transition">{cat.name}</Link>
        <span className="text-line mx-1.5">›</span>
        <span className="text-ink-soft">Best of</span>
      </nav>

      <div className="eyebrow mb-2">Buying guide · {YEAR}</div>
      <h1 className="font-serif text-3xl md:text-4xl tracking-tight">Best {cat.name}</h1>
      <p className="text-lg text-ink-soft mt-3 leading-relaxed">
        Every pick below is one we bought and tested — ranked honestly, trade-offs and all.
        {cat.blurb ? ` ${cat.blurb}` : ''}
      </p>

      {/* AT A GLANCE — decide without reading the page. Horizontally scrollable on mobile so the
          table never forces the body to scroll sideways. */}
      <div className="not-prose mt-8 overflow-x-auto rounded-xl border border-line">
        <table className="w-full text-sm border-collapse min-w-[520px]">
          <thead>
            <tr className="bg-highlight text-left">
              <th className="p-3 font-medium">#</th>
              <th className="p-3 font-medium">Pick</th>
              <th className="p-3 font-medium">Rating</th>
              <th className="p-3 font-medium">Best for</th>
              <th className="p-3 font-medium sr-only">Buy</th>
            </tr>
          </thead>
          <tbody>
            {ranked.map((r, i) => {
              const asin = asinFor(r.slug);
              return (
                <tr key={r.slug} className="border-t border-line align-top">
                  <td className="p-3 font-serif text-ink-faint">{i + 1}</td>
                  <td className="p-3">
                    <Link href={`/review/${r.slug}`} className="hover:text-accent-deep transition">
                      {r.title.split(':')[0]}
                    </Link>
                  </td>
                  <td className="p-3 whitespace-nowrap text-accent-deep font-medium">
                    {r.rating ? r.rating.toFixed(1) : '—'}
                  </td>
                  <td className="p-3 text-ink-soft">{bestFor(r.excerpt)}</td>
                  <td className="p-3 whitespace-nowrap">
                    {asin ? (
                      <a
                        href={`https://www.amazon.com/dp/${asin}?tag=${site.affiliateTag}`}
                        target="_blank"
                        rel="nofollow sponsored noopener"
                        className="text-accent-deep font-medium hover:text-accent transition"
                      >
                        Check price →
                      </a>
                    ) : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <ol className="mt-10 space-y-6 list-none pl-0">
        {ranked.map((r, i) => (
          <li
            key={r.slug}
            className="relative rounded-xl border border-line bg-card overflow-hidden hover:shadow-lift transition-shadow"
          >
            {i === 0 && (
              <div className="absolute top-0 left-0 z-10 bg-accent text-paper text-xs font-medium px-3 py-1 rounded-br-lg">
                Top pick
              </div>
            )}
            <div className="grid sm:grid-cols-3">
              <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-[160px] bg-highlight">
                {(r as { image?: string }).image ? (
                  <Image
                    src={(r as { image?: string }).image as string}
                    alt={r.title}
                    fill
                    sizes="(min-width: 640px) 220px, 100vw"
                    className="object-cover"
                  />
                ) : null}
              </div>
              <div className="sm:col-span-2 p-5">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-serif text-2xl text-ink-faint">#{i + 1}</span>
                  <StarRating rating={r.rating ?? 0} className="text-base" />
                  <span className="text-accent-deep text-sm font-medium">{(r.rating ?? 0).toFixed(1)}</span>
                </div>
                <h2 className="font-serif text-xl leading-snug">
                  <Link href={`/review/${r.slug}`} className="hover:text-accent-deep transition">
                    {r.title}
                  </Link>
                </h2>
                <p className="text-ink-soft text-sm mt-2 leading-relaxed">{r.excerpt}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {asinFor(r.slug) ? (
                    <AffiliateLink asin={asinFor(r.slug)}>Check price on Amazon</AffiliateLink>
                  ) : null}
                  <Link
                    href={`/review/${r.slug}`}
                    className="text-sm font-medium text-accent-deep hover:text-accent transition"
                  >
                    Read the full review →
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}
