'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

// Persistent "Check price" bar that slides up once the reader is past the intro. The single
// biggest affiliate CTR lever — the buy action is always one tap away, not just mid-article.
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
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!asin) return null;
  const href = `https://www.amazon.com/dp/${asin}?tag=${site.affiliateTag}`;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!show}
    >
      <div className="mx-auto max-w-3xl m-3 rounded-lg border border-line bg-card/95 backdrop-blur shadow-lift px-4 py-3 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="text-sm font-medium text-ink truncate">{product}</div>
          {rating !== undefined && (
            <div className="text-xs text-ink-faint">Our rating: {rating.toFixed(1)} / 5</div>
          )}
        </div>
        <a
          href={href}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="shrink-0 bg-ink text-paper hover:bg-accent-deep transition px-4 py-2 rounded-md text-sm font-medium"
        >
          Check price on Amazon
        </a>
      </div>
    </div>
  );
}
