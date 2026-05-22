import { site } from '@/lib/site';

export default function AffiliateLink({ asin, children }: { asin: string; children: React.ReactNode }) {
  const href = `https://www.amazon.com/dp/${asin}?tag=${site.affiliateTag}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="inline-flex items-center gap-2 bg-ink !text-paper !no-underline px-5 py-3 rounded-md font-medium hover:bg-accent-deep transition shadow-card"
    >
      {children}
    </a>
  );
}
