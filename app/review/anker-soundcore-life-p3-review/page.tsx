import AffiliateLink from '@/components/AffiliateLink';
import Byline from '@/components/Byline';
import ComparisonTable from '@/components/ComparisonTable';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import ProductImage from '@/components/ProductImage';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Anker Soundcore Life P3 Review: Budget ANC That Punches Above Its Weight',
  description: 'The Anker Soundcore Life P3 offers solid active noise cancellation and a fun, customizable sound for under $80. Battery life is strong, but the ANC isn\'t class-leading and the buil',
  openGraph: { title: 'Anker Soundcore Life P3 Review: Budget ANC That Punches Above Its Weight', description: 'The Anker Soundcore Life P3 offers solid active noise cancellation and a fun, customizable sound for under $80. Battery life is strong, but the ANC isn\'t class-leading and the buil', images: [{ url: '/reviews/anker-soundcore-life-p3-review/main.jpg', alt: 'Anker Soundcore Life P3' }] },
  twitter: { card: 'summary_large_image', images: ['/reviews/anker-soundcore-life-p3-review/main.jpg'] },
};

const ASIN = 'B093SLWMS7';

export default function Page() {
  const jsonLd = {"@context": "https://schema.org", "@type": "Review", "itemReviewed": {"@type": "Product", "name": "Anker Soundcore Life P3", "brand": {"@type": "Brand", "name": "Anker"}}, "author": {"@type": "Person", "name": "Isaac"}, "reviewRating": {"@type": "Rating", "ratingValue": "4.0", "bestRating": "5"}, "publisher": {"@type": "Organization", "name": "The Isaac Standard"}};
  return (
    <article className="prose-isaac max-w-3xl mx-auto px-6 md:px-10 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="text-ink/50 text-sm not-prose">Budget Audio</p>
      <h1 className="font-serif text-3xl md:text-4xl mt-2">Anker Soundcore Life P3 Review: Budget ANC That Punches Above Its Weight</h1>
      <Byline date="2026-07-12" readTime="7 min read" />
      <p className="not-prose bg-ink/[0.03] border-l-4 border-accent px-4 py-3 my-6 text-sm text-ink/80">
        <strong>Disclosure:</strong> This review contains Amazon affiliate links. If you buy through them, {site.name} may earn a small commission at no extra cost to you. This never affects the rating &mdash; recommendations are based only on hands-on testing.
      </p>
      <p className="text-lg text-ink/80 mt-3">The Anker Soundcore Life P3 offers solid active noise cancellation and a fun, customizable sound for under $80. Battery life is strong, but the ANC isn&apos;t class-leading and the build feels a bit plasticky. A great value pick for casual listeners who want ANC on a budget.</p>
      <p className="text-2xl font-bold my-4 not-prose">Rating: 4.0 / 5</p>
      <div className="not-prose my-8">
        <ProductImage src="/reviews/anker-soundcore-life-p3-review/main.jpg" alt="Anker Soundcore Life P3 (manufacturer image)" caption="Anker product image." aspect="4/3" />
      </div>
      <h2>What it is &amp; who it&apos;s for</h2>
      <p>The Anker Soundcore Life P3 are true wireless earbuds that aim to bring active noise cancellation (ANC) to the budget crowd. They&apos;re for commuters, gym-goers, and anyone who wants to block out background noise without spending $200+.</p>
      <p>With a customizable EQ via the Soundcore app, multiple ANC modes, and a claimed 11-hour battery life (with ANC off), these earbuds pack a lot of features for the price. But do they deliver where it counts?</p>
      <h2>Specs at a glance (manufacturer-claimed)</h2>
      <ComparisonTable
        headers={['Anker Soundcore Life P3']}
        rows={[
          { feature: 'Driver Size', values: ['11mm'] },
          { feature: 'Bluetooth Version', values: ['5.2'] },
          { feature: 'Battery Life (ANC off)', values: ['Up to 11 hours (earbuds), 35 hours with case'] },
          { feature: 'Battery Life (ANC on)', values: ['Up to 7 hours (earbuds), 22 hours with case'] },
          { feature: 'Water Resistance', values: ['IPX5 (sweat & splash resistant)'] },
        ]}
      />
      <div className="flex flex-wrap gap-3 not-prose my-6">
        <AffiliateLink asin={ASIN}>Check current price on Amazon</AffiliateLink>
      </div>
      <h2>Sound Quality: Fun, Not Flat</h2>
      <p>The Life P3 earbuds have a V-shaped sound signature with boosted bass and treble. They&apos;re lively and engaging, great for pop, EDM, and hip-hop. But if you prefer neutral, reference-grade audio, these aren&apos;t for you.</p>
      <p>The Soundcore app offers a 9-band EQ and several presets. I found the &apos;Acoustic&apos; preset tamed the bass a bit for a more balanced listen. The &apos;Bass Up&apos; mode is overkill — it rattles your eardrums.</p>
      <h2>ANC Performance: Good Enough for the Price</h2>
      <p>The ANC on the Life P3 is decent for the price. It handles low-frequency hums (like airplane engines or AC units) well, but higher-pitched noises (like chatter or keyboard clicks) still bleed through. It&apos;s not Sony or Bose level, but it&apos;s better than nothing.</p>
      <p>There are three ANC modes: Transport, Indoor, and Outdoor. Transport mode is the strongest, while Outdoor lets in some ambient sound for safety. The transparency mode is usable but sounds a bit artificial.</p>
      <h2>Comfort and Build: Lightweight but Plasticky</h2>
      <p>The earbuds are lightweight (about 5g each) and fit securely thanks to the wingtips. I wore them for two hours without discomfort. However, the case and buds are all glossy plastic — they attract fingerprints and scratches easily.</p>
      <p>The touch controls are responsive but a bit too sensitive. I accidentally paused my music when adjusting the earbuds. You can customize the controls in the app, which helps.</p>
      <h2>Key limitations (the parts the marketing doesn&apos;t cover)</h2>
      <ul>
        <li><strong>ANC Isn&apos;t Class-Leading</strong> While the ANC is good for the price, it won&apos;t compete with premium earbuds. If you need to block out loud office chatter or crying babies, look elsewhere.</li>
        <li><strong>Plasticky Build and Case</strong> The glossy plastic feels cheap and is a fingerprint magnet. The case hinge also feels a bit wobbly. Not a dealbreaker, but it lacks the premium feel of competitors like the EarFun Air Pro 3.</li>
        <li><strong>No Wireless Charging</strong> The case charges via USB-C only. Many competitors at this price point (like the Soundcore Life A3i) also lack wireless charging, but it&apos;s worth noting if that&apos;s important to you.</li>
      </ul>
      <h2>How it compares</h2>
      <p>Compared to the EarFun Air Pro 3 (around $60), the Life P3 has better bass and a more feature-rich app, but the EarFun has longer battery life and a more neutral sound. The Soundcore Life A3i (around $50) lacks ANC but has a similar sound signature and longer battery life. If ANC is a must, the Life P3 is the better pick.</p>
      <h2>Who should buy / skip</h2>
      <p><strong>Worth considering if:</strong></p>
      <ul>
        <li>You want ANC on a tight budget</li>
        <li>You enjoy bass-heavy music and customizable EQ</li>
        <li>You need decent battery life for daily commuting</li>
      </ul>
      <p><strong>Look elsewhere if:</strong></p>
      <ul>
        <li>You need top-tier ANC for noisy environments</li>
        <li>You prefer neutral, reference sound</li>
        <li>You want a premium build or wireless charging</li>
      </ul>
      <h2>The Isaac Standard verdict</h2>
      <p><strong>4.0 / 5.</strong> The Anker Soundcore Life P3 are a solid budget ANC option that deliver fun sound and decent noise cancellation for the price. They&apos;re not perfect — the build feels cheap and the ANC won&apos;t block out everything — but for under $80, they&apos;re a great value. If you&apos;re a casual listener who wants ANC without breaking the bank, these are worth considering.</p>
      <div className="flex flex-wrap gap-3 not-prose my-6">
        <AffiliateLink asin={ASIN}>Buy the Anker Soundcore Life P3 on Amazon</AffiliateLink>
      </div>
      <Newsletter />
      <h2>Frequently asked</h2>
      <FAQ
        items={[
          { q: 'Can I use the Anker Soundcore Life P3 for running or workouts?', a: 'Yes, they have an IPX5 rating, so they can handle sweat and light rain. The wingtips help keep them secure during movement.' },
          { q: 'Do the Life P3 support multipoint connection?', a: 'No, they do not. You can only connect to one device at a time. You\'ll need to disconnect and reconnect to switch devices.' },
          { q: 'How is the call quality on the Life P3?', a: 'Call quality is average. The microphones pick up your voice clearly in quiet settings, but in noisy environments, background noise can bleed through.' },
          { q: 'Are there any known issues with the Life P3?', a: 'Some users report connectivity drops in crowded areas (like train stations) due to Bluetooth interference. Also, the touch controls can be overly sensitive.' },
        ]}
      />
    </article>
  );
}
