import { site } from '@/lib/site';

export default function AffiliateLink({ asin, children }: { asin: string; children: React.ReactNode }) {
  const href = `https://www.amazon.com/dp/${asin}?tag=${site.affiliateTag}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="inline-block bg-accent !text-paper !no-underline px-5 py-2 rounded font-medium hover:opacity-90"
    >
      {children}
    </a>
  );
}
