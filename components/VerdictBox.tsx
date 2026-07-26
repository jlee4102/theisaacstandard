import AffiliateLink from '@/components/AffiliateLink';
import { VerdictChip, verdictFor } from '@/components/Verdict';

// Instrument verdict band — the reader who never scrolls still gets the call and a way to act.
// Grid: 300px score panel (surface) | strengths | weaknesses, divided by 1px rules, no cards,
// no shadows, radius 0. Verdict word + color are DERIVED from the rating (never hand-authored).
export default function VerdictBox({
  asin,
  rating,
  verdict,
  pros = [],
  cons = [],
}: {
  asin: string;
  rating: number;
  verdict: string;
  pros?: string[];
  cons?: string[];
}) {
  return (
    <aside className="not-prose my-9 border border-rule">
      <div className="grid md:grid-cols-[300px_1fr]">
        {/* Score panel */}
        <div className="bg-surface border-b md:border-b-0 md:border-r border-rule p-6">
          <div className="label-dim mb-3">Composite</div>
          <div className="flex items-baseline gap-2">
            <span className="text-[64px] font-bold leading-[0.9] tracking-[-0.04em] text-text">
              {rating.toFixed(1)}
            </span>
            <span className="font-mono text-[12px] text-text-dim">/5</span>
          </div>
          <div className="mt-4">
            <VerdictChip rating={rating} />
          </div>
          {/* 3px composite bar — decorative; the numeral above is the accessible value. */}
          <div className="mt-5 h-[3px] bg-rule" aria-hidden>
            <div
              className={`score-bar h-full ${verdictFor(rating) === 'SKIP' ? 'bg-negative' : 'bg-info'}`}
              style={{ width: `${Math.max(0, Math.min(100, (rating / 5) * 100))}%` }}
            />
          </div>
          {asin && (
            <div className="mt-6">
              <AffiliateLink asin={asin}>Check price</AffiliateLink>
              <p className="mt-3 font-mono text-[10px] leading-relaxed tracking-[0.04em] text-text-dim uppercase">
                Affiliate link. Never affects the score.
              </p>
            </div>
          )}
        </div>
        {/* Strengths / weaknesses */}
        <div className="grid sm:grid-cols-2">
          <div className="p-6 border-b sm:border-b-0 sm:border-r border-rule">
            <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-positive mb-4">
              Strengths
            </div>
            <ul className="space-y-3">
              {pros.map((p, i) => (
                <li key={i} className="flex gap-3 text-[14px] leading-[1.55] text-text-secondary">
                  <span className="text-positive font-mono shrink-0">+</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6">
            <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-negative mb-4">
              Weaknesses
            </div>
            <ul className="space-y-3">
              {cons.map((c, i) => (
                <li key={i} className="flex gap-3 text-[14px] leading-[1.55] text-text-secondary">
                  <span className="text-negative font-mono shrink-0">−</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {verdict && (
        <p className="border-t border-rule px-6 py-4 text-[15px] leading-relaxed text-text-secondary max-w-[70ch]">
          {verdict}
        </p>
      )}
    </aside>
  );
}
