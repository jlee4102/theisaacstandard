// Visual 5-star rating. Overlay technique: a muted full row, with an accent row clipped to the
// score's percentage — renders precise half/quarter stars without extra glyph logic.
export default function StarRating({ rating, className = '' }: { rating: number; className?: string }) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  return (
    <span
      className={`relative inline-block align-middle leading-none ${className}`}
      aria-label={`${rating} out of 5 stars`}
      role="img"
    >
      <span className="text-line tracking-[0.12em]">★★★★★</span>
      <span
        className="absolute inset-0 overflow-hidden text-accent tracking-[0.12em] whitespace-nowrap"
        style={{ width: `${pct}%` }}
      >
        ★★★★★
      </span>
    </span>
  );
}
