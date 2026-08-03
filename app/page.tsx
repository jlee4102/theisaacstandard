import Link from 'next/link';
import { categories, reviews } from '@/lib/site';
import Hero from '@/components/Hero';
import ReviewCard from '@/components/ReviewCard';
import Newsletter from '@/components/Newsletter';

// INSTRUMENT homepage: hero + score panel, then `1fr 380px` — recent-unit rows on the left,
// a stacked rail (head-to-head / method / categories / email) on the right. Full-bleed grid
// divided by 1px rules; no cards, no gaps, no max-width container with floating boxes.
// Omitted vs the handoff, deliberately: the price-watch ticker (no real price data) and the
// lab stat numbers (no measured-bench data — nothing on this site fabricates numbers).
export default function Home() {
  const recent = reviews.slice(0, 8);
  const categoryName = (slug: string) => categories.find((c) => c.slug === slug)?.name || slug;
  const activeCats = categories
    .map((c) => ({ ...c, count: reviews.filter((r) => r.category === c.slug).length }))
    .filter((c) => c.count > 0);

  return (
    <>
      <Hero />

      <div className="grid lg:grid-cols-[1fr_380px]">
        {/* Recent units */}
        <section className="lg:border-r border-rule">
          <div className="flex items-center justify-between px-5 md:px-9 py-4 border-b border-rule">
            <span className="label-dim">Recent units</span>
            <span className="label-dim hidden md:inline">Sorted by test date</span>
          </div>
          {recent.map((r) => (
            <ReviewCard
              key={r.slug}
              slug={r.slug}
              title={r.title}
              excerpt={r.excerpt}
              date={r.date}
              rating={r.rating}
              image={(r as { image?: string }).image}
              category={categoryName(r.category)}
            />
          ))}
          <Link
            href="/reviews"
            className="block px-5 md:px-9 py-5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-info hover:bg-raised transition-colors"
          >
            Load all {reviews.length} units →
          </Link>
        </section>

        {/* Rail */}
        <aside className="border-t lg:border-t-0 border-rule">
          <div className="p-6 md:p-8 border-b border-rule">
            <div className="label-dim mb-3">Head to head</div>
            <p className="text-[14px] leading-[1.55] text-text-secondary max-w-[40ch]">
              Two units, one call — every comparison re-reads both reviews and says which one to buy.
            </p>
            <Link
              href="/compare"
              className="mt-4 inline-block border border-info text-info hover:bg-info hover:text-bg px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors"
            >
              Compare units
            </Link>
          </div>

          <div className="p-6 md:p-8 border-b border-rule">
            <div className="label-dim mb-3">The method</div>
            <ul className="space-y-3">
              {[
                ['01', 'We buy it', 'No paid placements, no supplied units without disclosure.'],
                ['02', 'We use it', 'A week minimum in real conditions before a word is written.'],
                ['03', 'We say it', "If it doesn't earn the recommendation, we say so."],
              ].map(([n, h, b]) => (
                <li key={n} className="flex gap-4">
                  <span className="font-mono text-[11px] text-accent pt-0.5 shrink-0">{n}</span>
                  <span className="text-[14px] leading-[1.5] text-text-secondary">
                    <strong className="text-text font-semibold">{h}.</strong> {b}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/how-we-test"
              className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-info hover:text-text transition-colors"
            >
              See the method →
            </Link>
          </div>

          <div className="p-6 md:p-8 border-b border-rule">
            <div className="label-dim mb-4">Categories</div>
            <div className="flex flex-wrap gap-2">
              {activeCats.map((c) => (
                <Link
                  key={c.slug}
                  href={`/category/${c.slug}`}
                  className="border border-rule-strong px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-text-secondary hover:border-accent hover:text-accent transition-colors"
                >
                  {c.name} · {c.count}
                </Link>
              ))}
            </div>
          </div>

          <div className="[&>aside]:border-0 [&>aside]:my-0">
            <Newsletter />
          </div>
        </aside>
      </div>
    </>
  );
}
