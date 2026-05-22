import AffiliateLink from '@/components/AffiliateLink';
import Byline from '@/components/Byline';
import ComparisonTable from '@/components/ComparisonTable';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Anker Soundcore Q20i vs P20i: Which to Buy Under $50',
  description: 'Two of the most-bought budget Anker pairs of 2026, head to head. Honest take on which actually deserves your money.',
};

const Q20I_ASIN = 'B0CQXMXJC5';
const P20I_ASIN = 'B0BTYCRJSS';

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Product',
      name: 'Anker Soundcore Q20i vs P20i',
    },
    reviewRating: { '@type': 'Rating', ratingValue: '4.4', bestRating: '5' },
    author: { '@type': 'Person', name: 'Isaac', url: `${site.url}/authors/isaac` },
    publisher: { '@type': 'Organization', name: site.name },
    datePublished: '2026-05-21',
  };

  return (
    <article className="prose-isaac">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="text-ink/50 text-sm not-prose">Budget Audio</p>
      <h1 className="font-serif text-3xl md:text-4xl mt-2">Anker Soundcore Q20i vs P20i: Which to Buy Under $50</h1>
      <Byline date="2026-05-21" readTime="6 min read" />

      <p className="not-prose bg-ink/[0.03] border-l-4 border-accent px-4 py-3 my-6 text-sm text-ink/80">
        <strong>Disclosure:</strong> This article contains Amazon affiliate links. If you buy through them, we earn a small commission at no extra cost to you. We only recommend products we'd buy ourselves.
      </p>

      <p className="text-lg text-ink/80 mt-3">
        Both pairs hover near the top of Amazon's audio best-seller list in 2026. The Q20i is over-ear with active noise
        cancellation; the P20i is true-wireless earbuds. They solve different problems — but most buyers are picking
        between them on price alone. Here's the honest call.
      </p>

      <h2>TL;DR</h2>
      <ul>
        <li><strong>Q20i</strong> — better if you want all-day listening, ANC for commutes, and don't mind something on your head.</li>
        <li><strong>P20i</strong> — better if you want pocket-portable, gym-friendly buds and don't care about top-tier ANC.</li>
        <li>Sound quality is comparable at this price; battery life and form factor are the real deciders.</li>
      </ul>

      <div className="flex flex-wrap gap-3 not-prose my-6">
        <AffiliateLink asin={Q20I_ASIN}>Check Q20i price on Amazon</AffiliateLink>
        <AffiliateLink asin={P20I_ASIN}>Check P20i price on Amazon</AffiliateLink>
      </div>

      <h2>Spec comparison</h2>
      <ComparisonTable
        headers={['Soundcore Q20i', 'Soundcore P20i']}
        rows={[
          { feature: 'Form factor', values: ['Over-ear headphones', 'True wireless earbuds'] },
          { feature: 'Active noise cancellation', values: ['Yes (modest)', 'No (passive only)'] },
          { feature: 'Battery (ANC off)', values: ['Up to 60 hrs', '10 hrs (30 with case)'] },
          { feature: 'Driver size', values: ['40mm', '10mm'] },
          { feature: 'Water resistance', values: ['Not rated', 'IPX5'] },
          { feature: 'Charging', values: ['USB-C', 'USB-C'] },
          { feature: 'Multipoint', values: ['Yes', 'No'] },
          { feature: 'Weight', values: ['258g', '4.2g per bud'] },
          { feature: 'Typical price', values: ['$45-55', '$30-40'] },
        ]}
      />

      <h2>Sound &amp; ANC</h2>
      <p>
        The Q20i's larger 40mm drivers give it a fuller low end and more soundstage than the P20i — noticeable on
        bass-heavy tracks and movies. Its ANC is genuinely usable for plane and bus noise, though it won't beat a Sony
        XM5. The P20i's ANC is marketing more than substance; treat it as a passive-isolation pair.
      </p>

      <h2>Battery &amp; Charging</h2>
      <p>
        Q20i claims 60 hours with ANC off (closer to 45 in practice). P20i gets ~10 hours per charge with the case
        topping it to 30. Both charge via USB-C. The Q20i wins for long-haul; the P20i wins for grab-and-go.
      </p>

      <h2>Comfort &amp; Build</h2>
      <p>
        The Q20i's earcups are plasticky but the clamp force is mild — fine for 3-4 hour sessions. The P20i fits most
        ears with the included tips and is IPX5, so workout sweat isn't a concern. The Q20i is not rated for water.
      </p>

      <h2>Who Should Buy Which</h2>
      <h3>Buy the Q20i if:</h3>
      <ul>
        <li>You work from home or commute and want one pair for long stretches</li>
        <li>You want real (if modest) ANC</li>
        <li>You don't already own a pair of buds</li>
      </ul>
      <h3>Buy the P20i if:</h3>
      <ul>
        <li>You already have headphones and want a portable pair</li>
        <li>Gym, walking, or yard work is the main use</li>
        <li>Pocketability matters more than soundstage</li>
      </ul>

      <h2>The Isaac Standard verdict</h2>
      <p>
        For most readers, the <strong>Q20i is the better $50 spend</strong> — you get more product for the same money,
        and the ANC is a genuine quality-of-life feature. Pick the P20i only if portability is non-negotiable.
      </p>

      <div className="flex flex-wrap gap-3 not-prose mt-6">
        <AffiliateLink asin={Q20I_ASIN}>Buy Q20i on Amazon →</AffiliateLink>
        <AffiliateLink asin={P20I_ASIN}>Buy P20i on Amazon →</AffiliateLink>
      </div>

      <Newsletter />

      <FAQ
        items={[
          {
            q: 'Is the Anker Soundcore Q20i waterproof?',
            a: 'No. The Q20i is not rated for water or sweat resistance. If you want a pair you can wear to the gym or in light rain, the P20i (IPX5) is the safer pick.',
          },
          {
            q: 'Does the Q20i support multipoint Bluetooth?',
            a: 'Yes. The Q20i can connect to two devices at once (e.g., laptop and phone) and switch between them. The P20i does not support multipoint.',
          },
          {
            q: 'How long does the P20i actually last per charge?',
            a: 'Around 9-10 hours of music playback per charge in our experience, with the case adding another ~20 hours of top-ups. Total usable life from a full case is roughly 30 hours.',
          },
          {
            q: 'Can I use the Q20i for phone calls?',
            a: 'Yes, but mic quality is mediocre — fine for casual calls, not ideal for meetings. The P20i has comparable mic quality with the advantage of being more portable.',
          },
          {
            q: 'Are either of these good for gaming?',
            a: 'Neither is ideal. Both have Bluetooth latency that you will notice in fast-paced games. For gaming, look at wired or low-latency 2.4GHz dongle headsets instead.',
          },
        ]}
      />

      <p className="text-xs text-ink/50 mt-10">
        Prices and availability accurate as of publish date. We may earn a commission from purchases made through links
        on this page at no extra cost to you.
      </p>
    </article>
  );
}
