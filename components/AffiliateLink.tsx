// Instrument primary CTA: amber block, near-black text (~9:1), mono uppercase, radius 0.
// Routed through /go (Layer 5, 2026-08-07): the direct amazon.com/dp href made review-page clicks
// invisible to the /go counters — the pages carrying the buying intent were the one surface with
// zero attribution. The route applies the same site.affiliateTag server-side and derives the
// sending page from the Referer, so every live page participates without a prop change.
export default function AffiliateLink({ asin, children }: { asin: string; children: React.ReactNode }) {
  const href = `/go/${asin}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover !text-bg !no-underline px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors"
    >
      {children}
    </a>
  );
}
