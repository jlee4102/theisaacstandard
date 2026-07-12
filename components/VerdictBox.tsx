import AffiliateLink from '@/components/AffiliateLink';
import StarRating from '@/components/StarRating';

// Top-of-article summary card: rating + one-line verdict + pros/cons + a Buy CTA. The reader who
// never scrolls to the bottom still sees the call and a way to act on it.
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
    <aside className="not-prose my-8 rounded-xl border border-line bg-card shadow-card overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-line px-6 py-5">
        <div>
          <div className="eyebrow mb-1">The verdict</div>
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-3xl font-semibold text-ink">{rating.toFixed(1)}</span>
            <span className="text-ink-faint text-sm">/ 5</span>
            <StarRating rating={rating} className="text-lg" />
          </div>
        </div>
        {asin && (
          <AffiliateLink asin={asin}>Check price on Amazon</AffiliateLink>
        )}
      </div>
      {verdict && <p className="px-6 py-4 text-ink-soft leading-relaxed">{verdict}</p>}
      {(pros.length > 0 || cons.length > 0) && (
        <div className="grid sm:grid-cols-2 border-t border-line">
          <div className="px-6 py-4 sm:border-r border-line">
            <div className="font-medium text-ink mb-2 flex items-center gap-2">
              <span className="text-accent-deep">✓</span> Pros
            </div>
            <ul className="space-y-1.5 text-sm text-ink-soft">
              {pros.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="px-6 py-4">
            <div className="font-medium text-ink mb-2 flex items-center gap-2">
              <span className="text-accent">✕</span> Cons
            </div>
            <ul className="space-y-1.5 text-sm text-ink-soft">
              {cons.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </aside>
  );
}
