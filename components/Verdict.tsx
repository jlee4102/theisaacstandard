// Instrument verdict system: a numeral + a worded verdict replaces stars everywhere.
// The verdict is DERIVED from the rating so page, chip and schema can never disagree —
// the handoff is explicit: "derive it, don't hand-author the color."
export type VerdictWord = 'BUY' | 'BUY WITH CAVEATS' | 'SKIP';

export function verdictFor(rating: number): VerdictWord {
  if (rating >= 4.0) return 'BUY';
  if (rating >= 3.5) return 'BUY WITH CAVEATS';
  return 'SKIP';
}

// Color always pairs with the word — never color alone (accessibility rule in the handoff).
export function verdictColor(rating: number): string {
  const v = verdictFor(rating);
  return v === 'BUY' ? 'text-positive' : v === 'SKIP' ? 'text-negative' : 'text-accent';
}

export function VerdictChip({ rating }: { rating: number }) {
  const v = verdictFor(rating);
  const border =
    v === 'BUY' ? 'border-positive text-positive'
    : v === 'SKIP' ? 'border-negative text-negative'
    : 'border-accent text-accent';
  return (
    <span className={`inline-block border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] ${border}`}>
      {v}
    </span>
  );
}
