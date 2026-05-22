import { site } from '@/lib/site';

export const metadata = { title: 'Privacy Policy' };

export default function Page() {
  return (
    <article className="prose-isaac max-w-3xl mx-auto px-6 md:px-10 py-10">
      <h1 className="font-serif text-3xl">Privacy Policy</h1>
      <p className="text-ink/50 text-sm">Last updated: May 21, 2026</p>

      <h2>What we collect</h2>
      <p>
        {site.name} collects minimal data. When you visit the site, our hosting provider (Vercel) logs your IP address,
        browser type, and pages visited for security and performance. We do not sell or share this data.
      </p>

      <h2>Analytics</h2>
      <p>
        We use privacy-respecting analytics (Plausible or Google Analytics 4) to understand which articles are useful.
        These tools may set anonymous cookies. You can opt out via the cookie banner.
      </p>

      <h2>Affiliate cookies</h2>
      <p>
        When you click an Amazon affiliate link, Amazon sets cookies in your browser to track the referral. These are
        controlled by Amazon, not us. See Amazon's privacy notice for details.
      </p>

      <h2>Email</h2>
      <p>
        If you subscribe to our newsletter, we store your email address with our email provider (e.g., Beehiiv,
        ConvertKit) solely to send you updates. You can unsubscribe at any time via the link in every email.
      </p>

      <h2>Your rights</h2>
      <p>
        Under GDPR and CCPA, you have the right to access, correct, or delete personal data we hold about you. Email
        privacy@theisaacstandard.com and we'll respond within 30 days.
      </p>

      <h2>Contact</h2>
      <p>
        Questions: privacy@theisaacstandard.com
      </p>
    </article>
  );
}
