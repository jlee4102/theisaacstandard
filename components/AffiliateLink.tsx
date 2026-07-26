import { site } from '@/lib/site';

// Instrument primary CTA: amber block, near-black text (~9:1), mono uppercase, radius 0.
export default function AffiliateLink({ asin, children }: { asin: string; children: React.ReactNode }) {
  const href = `https://www.amazon.com/dp/${asin}?tag=${site.affiliateTag}`;

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
