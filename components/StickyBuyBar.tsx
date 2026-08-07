'use client';

import { useEffect, useState } from 'react';
import { verdictFor, verdictColor } from '@/components/Verdict';

// Instrument sticky product bar. Desktop: sticks to the viewport TOP once the reader is past the
// title block (name · score · verdict | CHECK PRICE). Mobile: a fixed BOTTOM buy bar (the design's
// mobile pattern) — body padding for it is handled here via a spacer so the last focusable element
// is never overlaid. No prices shown: we have no real price data, and fabricating "$129 · 30-DAY
// LOW" would be exactly the kind of decorative lie the brand exists to avoid.
export default function StickyBuyBar({
  product,
  asin,
  rating,
}: {
  product: string;
  asin: string;
  rating?: number;
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!asin) return null;
  // Routed through /go for per-page click attribution (Layer 5, 2026-08-07) — tag applied
  // server-side by the route; see AffiliateLink.tsx for the rationale.
  const href = `/go/${asin}`;

  const cta = (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="shrink-0 bg-accent hover:bg-accent-hover text-bg px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors"
    >
      Check price
    </a>
  );

  return (
    <>
      {/* Desktop: top bar */}
      <div
        className={`hidden md:block fixed inset-x-0 top-0 z-40 transition-transform duration-200 ${
          show ? 'translate-y-0' : '-translate-y-full'
        }`}
        aria-hidden={!show}
      >
        <div className="bg-raised border-b border-rule px-9 py-2.5 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4 min-w-0 font-mono text-[11px] uppercase tracking-[0.1em]">
            <span className="text-text truncate">{product}</span>
            {rating !== undefined && (
              <>
                <span className="text-rule-strong">|</span>
                <span className="text-text-muted">Score {rating.toFixed(1)}</span>
                <span className="text-rule-strong">|</span>
                <span className={verdictColor(rating)}>{verdictFor(rating)}</span>
              </>
            )}
          </div>
          {cta}
        </div>
      </div>
      {/* Mobile: fixed bottom buy bar + spacer so it never overlays the footer/last element */}
      <div className="md:hidden h-[72px]" aria-hidden />
      <div className="md:hidden fixed inset-x-0 bottom-0 z-40 bg-raised border-t border-rule px-5 py-3 flex items-center justify-between gap-4">
        <div className="min-w-0 font-mono text-[11px] uppercase tracking-[0.08em]">
          <div className="text-text truncate">{product}</div>
          {rating !== undefined && (
            <div className={`mt-0.5 ${verdictColor(rating)}`}>
              {rating.toFixed(1)} · {verdictFor(rating)}
            </div>
          )}
        </div>
        {cta}
      </div>
    </>
  );
}
