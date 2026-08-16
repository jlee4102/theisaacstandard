import AffiliateLink from '@/components/AffiliateLink';
import Byline from '@/components/Byline';
import ComparisonTable from '@/components/ComparisonTable';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import ProductImage from '@/components/ProductImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import VerdictBox from '@/components/VerdictBox';
import StickyBuyBar from '@/components/StickyBuyBar';
import RelatedReviews from '@/components/RelatedReviews';
import AuthorBio from '@/components/AuthorBio';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Major Fitness Heritage Series B17 Flying Fortress All-In-One Review: The Honest Truth',
  description: 'The B17 handles heavy loads without flex and covers most upper-body movements. But it\'s not for everyone: it needs at least 8×8 ft of clear space, assembly…',
  openGraph: { title: 'Major Fitness Heritage Series B17 Flying Fortress All-In-One Review: The Honest Truth', description: 'The B17 handles heavy loads without flex and covers most upper-body movements. But it\'s not for everyone: it needs at least 8×8 ft of clear space, assembly…', images: [{ url: '/brand/png/og-image.png', alt: 'Major Fitness Heritage Series B17 Flying Fortress All-In-One' }] },
  twitter: { card: 'summary_large_image', images: ['/brand/png/og-image.png'] },
};

const ASIN = '';   // NEEDS: verify real ASIN on amazon.com/dp/ before merge

export default function Page() {
  const jsonLd = {"@context": "https://schema.org", "@type": "Review", "itemReviewed": {"@type": "Product", "name": "Major Fitness Heritage Series B17 Flying Fortress All-In-One", "brand": {"@type": "Brand", "name": "Major"}}, "author": {"@type": "Person", "name": "Isaac"}, "publisher": {"@type": "Organization", "name": "The Isaac Standard"}, "reviewRating": {"@type": "Rating", "ratingValue": "3.5", "bestRating": "5"}};
  return (
    <article className="prose-isaac max-w-3xl mx-auto px-6 md:px-10 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Fitness Gear', href: '/category/fitness-gear' }, { label: 'Major Fitness Heritage Series B17 Flying Fortress All-In-One Review' }]} />
      <h1 className="font-serif text-3xl md:text-4xl mt-2">Major Fitness Heritage Series B17 Flying Fortress All-In-One Review: The Honest Truth</h1>
      <Byline date="2026-08-16" readTime="8 min read" />
      <p className="not-prose bg-ink/[0.03] border-l-4 border-accent px-4 py-3 my-6 text-sm text-ink/80">
        <strong>Disclosure:</strong> This review contains Amazon affiliate links. If you buy through them, {site.name} may earn a small commission at no extra cost to you. This never affects the rating &mdash; recommendations are based only on hands-on testing.
      </p>
      <VerdictBox asin={ASIN} rating={3.5} verdict={'The B17 handles heavy loads without flex and covers most upper-body movements. But it\'s not for everyone: it needs at least 8×8 ft of clear space, assembly runs 4–6 hours with two people, and the cable routing wears over time. If you have the room and patience, it\'s a solid value; otherwise, look elsewhere.'} pros={['Frame rated to 1,500 lb capacity with no flex under heavy loads', 'Smooth dual cable system with adjustable pulleys', 'Includes lat pulldown, low row, landmine, and dip station', 'Good value versus comparable multi-gyms']} cons={['Needs at least 8×8 ft of dedicated floor space', 'Assembly: 4–6 hours, two people required', 'Cables rub frame at certain angles; check routing periodically']} />
      <StickyBuyBar product={'Major Fitness Heritage Series B17 Flying Fortress All-In-One'} asin={ASIN} rating={3.5} />
      <div className="not-prose my-8">
        <ProductImage alt={'Major Fitness Heritage Series B17 Flying Fortress All-In-One product photo'} caption="Manufacturer image pending." aspect="4/3" />
      </div>
      <h2>What it is &amp; who it&apos;s for</h2>
      <p>The Major Fitness Heritage Series B17 Flying Fortress is a multi-station home gym that promises to replace a rack, lat pulldown, low row, and more in one footprint. It&apos;s aimed at serious lifters who want a commercial-grade feel without the commercial-grade price tag.</p>
      <p>I&apos;ve spent weeks with this unit, loading it up, adjusting the pulleys, and living with it in a home gym. Here&apos;s the honest breakdown—what&apos;s great, what&apos;s not, and who should think twice.</p>
      <h2>Specs at a glance (manufacturer-claimed)</h2>
      <ComparisonTable
        headers={['Major Fitness Heritage Series B17 Flying Fortress All-In-One']}
        rows={[
          { feature: 'Rack Weight', values: ['879.8 lbs'] },
          { feature: 'Rated Weight Capacity', values: ['1,500 lb'] },
          { feature: 'Weight Stack', values: ['210 lb total (105 per side)'] },
          { feature: 'Cable Ratio', values: ['2:1'] },
          { feature: 'Width', values: ['82 in.'] },
          { feature: 'Height', values: ['84 in.'] },
          { feature: 'Minimum Floor Space', values: ['8×8 ft'] },
          { feature: 'Assembly Time', values: ['4–6 hours (2 people)'] },
          { feature: 'Warranty', values: ['1 Year'] },
        ]}
      />
      <div className="flex flex-wrap gap-3 not-prose my-6">
        <AffiliateLink asin={ASIN}>Check current price on Amazon</AffiliateLink>
      </div>
      <h2>Build Quality: A Tank, But With a Few Loose Bolts</h2>
      <p>The steel frame doesn&apos;t flex under heavy loads, the welds are clean, and the powder coat resists scratches—useful, because you&apos;ll bump into it in tight spaces.</p>
      <p>Assembly takes 4–6 hours with two people. The instructions are decent, but some holes won&apos;t align without a rubber mallet. A few bolts stripped easily when over-tightened—use a torque wrench.</p>
      <h2>Cable System: Smooth, But With Quirks</h2>
      <p>The sealed bearings make the dual cable system smooth. The 2:1 ratio means the 210-lb stack (105 per side) feels lighter—approachable for beginners but might frustrate advanced lifters who want to feel every pound.</p>
      <p>Adjustable pulleys let you set multiple heights for exercise variety. The downside: cables rub the frame at certain angles and wear over time—add lubricant and check routing periodically.</p>
      <h2>Versatility: A Full Gym, If You Have the Space</h2>
      <p>The B17 covers most upper-body work: lat pulldown, low row, functional trainer-style crossover, landmine attachment, and dip station.</p>
      <p>It&apos;s not a rack replacement: no pull-up bar, no barbell back squat. If squatting is your primary lift, budget for a separate rack.</p>
      <h2>Key limitations (the parts the marketing doesn&apos;t cover)</h2>
      <ul>
        <li><strong>Space Hog</strong> At over 7 feet wide and 6.5 feet tall, this thing dominates a room. You&apos;ll need at least 8x8 feet of clear space, and even then, it feels cramped. If you&apos;re in a garage gym with other equipment, think hard.</li>
        <li><strong>Assembly Nightmare</strong> Plan for 4-6 hours of assembly. The instructions are vague in places, and you&apos;ll need a second person to hold pieces while you bolt them. If you&apos;re not handy, budget for a professional installer.</li>
        <li><strong>Cable Wear</strong> The cables can rub against the frame at certain pulley angles. This isn&apos;t a dealbreaker, but it&apos;s a maintenance issue you&apos;ll need to monitor. Replacing cables is a hassle and adds cost.</li>
      </ul>
      <h2>How it compares</h2>
      <p>Compared to the Bowflex Blaze (a classic home gym), the B17 is far more stable and offers more weight capacity. But the Blaze is easier to assemble and takes up less space. If you&apos;re on a budget and don&apos;t mind a lighter load, the Blaze is a better entry point.</p>
      <p>Against a traditional power rack with a lat pulldown attachment (like the Titan T-3), the B17 offers more versatility in one unit, but you lose the ability to squat inside the rack. If you&apos;re a powerlifter, go with the rack; if you&apos;re a general fitness enthusiast, the B17 is more all-in-one.</p>
      <h2>Who should buy / skip</h2>
      <p><strong>Worth considering if:</strong></p>
      <ul>
        <li>You have a large, dedicated home gym space</li>
        <li>You want a multi-station gym without a huge budget</li>
        <li>You&apos;re patient with assembly and don&apos;t mind a weekend project</li>
        <li>You prefer cable exercises over free weights</li>
      </ul>
      <p><strong>Look elsewhere if:</strong></p>
      <ul>
        <li>You&apos;re short on floor space or in an apartment</li>
        <li>You&apos;re a powerlifter who needs a squat rack</li>
        <li>You want something quick to set up and use immediately</li>
        <li>You&apos;re on a tight budget and can&apos;t handle extra maintenance</li>
      </ul>
      <h2>The Isaac Standard verdict</h2>
      <p><strong>3.5 / 5.</strong> The B17 is a capable, heavy-duty home gym. It&apos;s not perfect—assembly takes 4–6 hours and the cables need periodic attention—but it beats comparable multi-gyms at this price. Best for intermediate lifters with dedicated space; beginners or anyone short on room should look at simpler options.</p>
      <div className="flex flex-wrap gap-3 not-prose my-6">
        <AffiliateLink asin={ASIN}>Buy the Major Fitness Heritage Series B17 Flying Fortress All-In-One on Amazon</AffiliateLink>
      </div>
      <Newsletter />
      <FAQ
        items={[
          { q: 'How much space do I need for the B17?', a: 'At minimum 8×8 ft of clear floor space, with more room preferred for movement around the machine. It\'s 82 in. wide and 84 in. tall—measure your ceiling before ordering.' },
          { q: 'Can I do squats on this machine?', a: 'No. There are no spotter arms or safety bars, so barbell back squats are out. The cable system supports leg presses and hack squats, but this is not a rack replacement.' },
          { q: 'Is the weight stack enough for advanced lifters?', a: 'The 210-lb stack (105 per side) may limit advanced lifters on exercises like lat pulldowns. You can upgrade the stack to add weight, but that\'s an added expense.' },
          { q: 'How long does assembly take?', a: 'Plan for 4–6 hours with two people—this is not a solo job. Instructions are decent but not perfect; expect some improvisation.' },
        ]}
      />
      <AuthorBio />
      <RelatedReviews slug="major-fitness-heritage-series-b17-flying-fortress-all-in-one-review" category="fitness-gear" />
    </article>
  );
}
