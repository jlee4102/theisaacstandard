import { site } from '@/lib/site';

export const metadata = { title: 'Terms of Service' };

export default function Page() {
  return (
    <article className="prose-isaac">
      <h1 className="font-serif text-3xl">Terms of Service</h1>
      <p className="text-ink/50 text-sm">Last updated: May 21, 2026</p>

      <h2>Use of this site</h2>
      <p>
        By using {site.name}, you agree to these terms. Content is provided for informational purposes only and does not
        constitute professional advice. We make reasonable efforts to keep information accurate but cannot guarantee
        prices, availability, or specifications, which change frequently.
      </p>

      <h2>Affiliate relationships</h2>
      <p>
        {site.name} participates in affiliate programs, including Amazon Associates. We may earn a commission when you
        purchase through our links. See our <a href="/disclosure">Affiliate Disclosure</a> for details.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on {site.name} — text, images, reviews — is our property unless otherwise noted. You may share short
        excerpts with attribution and a link back. You may not republish full articles without permission.
      </p>

      <h2>No warranty</h2>
      <p>
        Reviews reflect our opinion based on our testing experience. Your experience may differ. We are not liable for
        decisions made based on content on this site.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms. Continued use after changes means you accept the updated terms.
      </p>

      <h2>Contact</h2>
      <p>Questions: hello@theisaacstandard.com</p>
    </article>
  );
}
