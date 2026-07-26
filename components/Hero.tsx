import Link from 'next/link';
import { reviews, categories } from '@/lib/site';
import { VerdictChip } from '@/components/Verdict';

// Instrument hero: 1fr / 380px. Left — amber unit line, big product headline, deck, CTAs.
// Right — the composite score panel on `surface`. Sub-score bars from the handoff are omitted:
// we have one real number per review (the composite); inventing five sub-scores to fill a panel
// would fabricate data on the most-seen module of the site.
export default function Hero() {
  const latest = reviews[0];
  if (!latest) return null;
  const catName = categories.find((c) => c.slug === latest.category)?.name || '';
  const unitNo = String(reviews.length).padStart(3, '0');

  return (
    <section className="border-b border-rule grid lg:grid-cols-[1fr_380px]">
      <div className="px-5 md:px-9 py-10 md:py-12 lg:border-r border-rule">
        <div className="eyebrow mb-5">
          Unit {unitNo} · {catName} · {latest.date}
        </div>
        <h1 className="text-[32px] md:text-[52px] font-bold leading-[1.05] tracking-[-0.03em] max-w-[22ch]">
          {latest.title}
        </h1>
        <p className="mt-5 text-[17px] md:text-[19px] leading-[1.5] text-text-muted max-w-[44ch]">
          {latest.excerpt}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={`/review/${latest.slug}`}
            className="bg-accent hover:bg-accent-hover text-bg px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors"
          >
            Read the review
          </Link>
          <Link
            href="/how-we-test"
            className="border border-rule-strong hover:border-accent hover:text-accent px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-text-secondary transition-colors"
          >
            How we test
          </Link>
        </div>
      </div>

      <div className="bg-surface px-6 md:px-8 py-8 border-t lg:border-t-0 border-rule">
        <div className="label-dim mb-4">Composite score</div>
        {latest.rating !== undefined && (
          <>
            <div className="flex items-baseline gap-2">
              <span className="text-[58px] font-bold leading-[0.9] tracking-[-0.04em] text-text">
                {latest.rating.toFixed(1)}
              </span>
              <span className="font-mono text-[12px] text-text-dim">/5</span>
            </div>
            <div className="mt-4">
              <VerdictChip rating={latest.rating} />
            </div>
            <div className="mt-5 h-[3px] bg-rule" aria-hidden>
              <div
                className="score-bar h-full bg-info"
                style={{ width: `${(latest.rating / 5) * 100}%` }}
              />
            </div>
          </>
        )}
        <p className="mt-6 text-[13px] leading-[1.55] text-text-muted">
          Composite of build, performance, endurance, software and value — the method is public.
        </p>
        <Link
          href="/how-we-test"
          className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-info hover:text-text transition-colors"
        >
          See the method →
        </Link>
      </div>
    </section>
  );
}
