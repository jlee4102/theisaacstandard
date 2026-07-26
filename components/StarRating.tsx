// Instrument rule: "Never write ★★★★☆." The star row is replaced by a mono numeral — the
// component name and API survive so every existing call site restyles without edits.
export default function StarRating({ rating, className = '' }: { rating: number; className?: string }) {
  return (
    <span
      className={`font-mono text-[12px] uppercase tracking-[0.1em] text-text-muted ${className}`}
      aria-label={`Scored ${rating} out of 5`}
    >
      {rating.toFixed(1)}<span className="text-text-dim"> / 5</span>
    </span>
  );
}
