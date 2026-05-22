import { site } from '@/lib/site';

export const metadata = {
  title: 'Isaac — Author',
  description: `Founder and lead reviewer at ${site.name}.`,
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Isaac',
    url: `${site.url}/authors/isaac`,
    jobTitle: 'Founder & Lead Reviewer',
    worksFor: { '@type': 'Organization', name: site.name },
    sameAs: [
      // Add real social URLs once you have them
      // 'https://twitter.com/yourhandle',
      // 'https://youtube.com/@yourchannel',
    ],
  };

  return (
    <article className="prose-isaac">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="font-serif text-3xl">Isaac</h1>
      <p className="text-ink/60">Founder &amp; Lead Reviewer, {site.name}</p>

      <h2>Background</h2>
      <p>
        I've been buying, breaking, and obsessing over consumer tech for over a decade. {site.name} started because I
        was tired of review sites that recommend whatever pays the highest commission. Every product I write about, I
        either own, have used hands-on, or have spent serious time researching from owners who do.
      </p>

      <h2>How I review</h2>
      <ul>
        <li>I buy the product (or borrow it from someone who does) — never paid placement.</li>
        <li>I use it for at least a week in real conditions before publishing.</li>
        <li>I compare it against the obvious competitors at the same price point.</li>
        <li>If a product doesn't earn a recommendation, I say so — even when it would pay me to lie.</li>
      </ul>

      <h2>What I cover</h2>
      <p>
        Budget audio, smart home gear, trackers, mini PCs, and outdoor robots. Categories I genuinely use, not whatever
        ranks easiest.
      </p>

      <h2>Get in touch</h2>
      <p>
        Email: <a href="mailto:hello@theisaacstandard.com">hello@theisaacstandard.com</a>
      </p>
    </article>
  );
}
