import Link from 'next/link';
import { categories, reviews } from '@/lib/site';
import ReviewCard from '@/components/ReviewCard';

// Instrument category template — shared by all /category/<slug> pages (they were seven copies of
// the same markup, each with its own hardcoded Unsplash stock hero; the stock art is gone).
// Layout: `1fr 380px` intro (name + description | stat panel on surface) → rule-divided rows →
// buying-guide link. Every stat is DERIVED from the site's own review data — the handoff's
// "battery claims met" style stats are omitted because no measured-bench data exists to back them.
export default function CategoryPage({ slug }: { slug: string }) {
  const cat = categories.find((c) => c.slug === slug)!;
  const list = reviews.filter((r) => r.category === slug);
  const rated = list.filter((r) => r.rating !== undefined) as { rating: number }[];
  const avg = rated.length ? rated.reduce((s, r) => s + r.rating, 0) / rated.length : null;
  const hi = rated.length ? Math.max(...rated.map((r) => r.rating)) : null;
  const lo = rated.length ? Math.min(...rated.map((r) => r.rating)) : null;

  const stats: [string, string][] = [
    ['Units tested', String(list.length)],
    ...(avg !== null ? ([['Average score', avg.toFixed(1)]] as [string, string][]) : []),
    ...(hi !== null ? ([['Highest', hi.toFixed(1)]] as [string, string][]) : []),
    ...(lo !== null ? ([['Lowest', lo.toFixed(1)]] as [string, string][]) : []),
    ...(list.length ? ([['Last tested', list[0].date]] as [string, string][]) : []),
  ];

  return (
    <>
      <div className="grid lg:grid-cols-[1fr_380px] border-b border-rule">
        <div className="px-5 md:px-9 py-10 md:py-12 lg:border-r border-rule">
          <div className="eyebrow mb-3">Category</div>
          <h1 className="text-[32px] md:text-[46px] font-bold leading-[1.05] tracking-[-0.03em]">
            {cat.name}
          </h1>
          <p className="mt-4 text-[16px] leading-[1.55] text-text-muted max-w-[60ch]">{cat.blurb}</p>
        </div>
        <div className="bg-surface border-t lg:border-t-0 border-rule">
          {stats.map(([k, v]) => (
            <div key={k} className="flex items-center justify-between px-6 md:px-8 py-3.5 border-b border-rule last:border-b-0">
              <span className="label-dim">{k}</span>
              <span className="font-mono text-[13px] text-text">{v}</span>
            </div>
          ))}
        </div>
      </div>

      {list.length === 0 ? (
        <p className="px-5 md:px-9 py-10 font-mono text-[11px] uppercase tracking-[0.14em] text-text-dim">
          No units tested in this category yet.
        </p>
      ) : (
        <section>
          {list.map((r) => (
            <ReviewCard
              key={r.slug}
              slug={r.slug}
              title={r.title}
              excerpt={r.excerpt}
              date={r.date}
              rating={r.rating}
              category={cat.name}
            />
          ))}
        </section>
      )}

      {list.length >= 2 && (
        <div className="px-5 md:px-9 py-6 border-b border-rule flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="label-dim mb-1">Buying guide</div>
            <p className="text-[17px] font-semibold">Our ranked pick of the best {cat.name.toLowerCase()}</p>
          </div>
          <Link
            href={`/best/${slug}`}
            className="shrink-0 bg-accent hover:bg-accent-hover text-bg px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors"
          >
            See the ranking →
          </Link>
        </div>
      )}
    </>
  );
}
