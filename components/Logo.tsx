// Instrument monogram: a square amber-outlined S (radius 0 — the only round thing on the site is
// the author avatar). The handoff marks this as a placeholder for a future real logotype.
export function LogoMark({ size = 34, className = '' }: { size?: number; className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center border border-accent text-accent font-mono font-semibold select-none ${className}`}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.5) }}
      role="img"
      aria-label="The Isaac Standard mark"
    >
      S
    </span>
  );
}

export default function Logo({ markSize = 34 }: { markSize?: number }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark size={markSize} />
      <span className="leading-none">
        <span className="block text-[16px] font-bold uppercase tracking-[0.02em] text-text">
          The Isaac Standard
        </span>
        <span className="block mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
          Measured gear reviews
        </span>
      </span>
    </span>
  );
}
