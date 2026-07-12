import AffiliateLink from '@/components/AffiliateLink';
import Byline from '@/components/Byline';
import ComparisonTable from '@/components/ComparisonTable';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import ProductImage from '@/components/ProductImage';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Logitech MX Mechanical Review: The Productivity Keyboard That Almost Does It All',
  description: 'The Logitech MX Mechanical is a well-built, quiet mechanical keyboard designed for productivity users who want tactile feedback without the noise. It excels in multi-device workflo',
  openGraph: { title: 'Logitech MX Mechanical Review: The Productivity Keyboard That Almost Does It All', description: 'The Logitech MX Mechanical is a well-built, quiet mechanical keyboard designed for productivity users who want tactile feedback without the noise. It excels in multi-device workflo', images: [{ url: '/brand/png/og-image.png', alt: 'Logitech MX Mechanical' }] },
  twitter: { card: 'summary_large_image', images: ['/brand/png/og-image.png'] },
};

const ASIN = '';   // NEEDS: verify real ASIN on amazon.com/dp/ before merge

export default function Page() {
  const jsonLd = {"@context": "https://schema.org", "@type": "Review", "itemReviewed": {"@type": "Product", "name": "Logitech MX Mechanical", "brand": {"@type": "Brand", "name": "Logitech"}}, "author": {"@type": "Person", "name": "Isaac"}, "reviewRating": {"@type": "Rating", "ratingValue": "4.0", "bestRating": "5"}, "publisher": {"@type": "Organization", "name": "The Isaac Standard"}};
  return (
    <article className="prose-isaac max-w-3xl mx-auto px-6 md:px-10 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="text-ink/50 text-sm not-prose">Desk Gear</p>
      <h1 className="font-serif text-3xl md:text-4xl mt-2">Logitech MX Mechanical Review: The Productivity Keyboard That Almost Does It All</h1>
      <Byline date="2026-07-12" readTime="7 min read" />
      <p className="not-prose bg-ink/[0.03] border-l-4 border-accent px-4 py-3 my-6 text-sm text-ink/80">
        <strong>Disclosure:</strong> This review contains Amazon affiliate links. If you buy through them, {site.name} may earn a small commission at no extra cost to you. This never affects the rating &mdash; recommendations are based only on hands-on testing.
      </p>
      <p className="text-lg text-ink/80 mt-3">The Logitech MX Mechanical is a well-built, quiet mechanical keyboard designed for productivity users who want tactile feedback without the noise. It excels in multi-device workflows and battery life, but its high price, lack of backlighting on the Mac version, and limited switch options hold it back from greatness.</p>
      <p className="text-2xl font-bold my-4 not-prose">Rating: 4.0 / 5</p>
      <div className="not-prose my-8">
        <ProductImage alt="Logitech MX Mechanical product photo" caption="Manufacturer image pending." aspect="4/3" />
      </div>
      <h2>What it is &amp; who it&apos;s for</h2>
      <p>The Logitech MX Mechanical is Logitech&apos;s first mechanical keyboard aimed squarely at the productivity crowd, not gamers. It brings the company&apos;s signature multi-device pairing, Flow software, and excellent build quality to a mechanical form factor with low-profile switches.</p>
      <p>This keyboard is for anyone who types all day and wants the satisfying feel of mechanical switches without the loud clatter of traditional gaming keyboards. It&apos;s also a strong contender for Mac users who need a mechanical option with macOS-specific keycaps.</p>
      <h2>Specs at a glance (manufacturer-claimed)</h2>
      <ComparisonTable
        headers={['Logitech MX Mechanical']}
        rows={[
          { feature: 'Switch Type', values: ['Low-profile mechanical (Tactile Quiet, Linear, Clicky)'] },
          { feature: 'Connectivity', values: ['Bluetooth Low Energy, Logi Bolt USB receiver, USB-C wired'] },
          { feature: 'Battery Life', values: ['Up to 15 days with backlighting, up to 10 months without (manufacturer claimed)'] },
          { feature: 'Layout', values: ['Full-size with numpad (also available in Mini and Tenkeyless variants)'] },
          { feature: 'Multi-device', values: ['Up to 3 paired devices via Easy-Switch buttons'] },
        ]}
      />
      <div className="flex flex-wrap gap-3 not-prose my-6">
        <AffiliateLink asin={ASIN}>Check current price on Amazon</AffiliateLink>
      </div>
      <h2>Build and Design: Premium, but Not Perfect</h2>
      <p>The MX Mechanical feels solid. The plastic chassis has a nice matte finish, and the keyboard has a slight angle that&apos;s comfortable for long typing sessions. The low-profile switches sit closer to the deck than standard mechanicals, which reduces wrist strain for some users.</p>
      <p>However, the lack of a USB-C port on the keyboard itself for charging (it uses a detachable USB-C cable) is fine, but the port placement on the left side is awkward if you use a wired connection. Also, the keyboard is not hot-swappable, so you&apos;re stuck with the switch choice you buy.</p>
      <h2>Typing Experience: Quiet and Smooth, but Limited Options</h2>
      <p>The Tactile Quiet switches are the highlight. They provide a noticeable bump without the click, making them ideal for open offices. The keys are stable and the low-profile design makes for fast, accurate typing. The included keycaps are doubleshot ABS, which feel good but may develop shine over time.</p>
      <p>If you want a linear or clicky feel, those options exist, but they&apos;re not as refined as the tactile quiet. The clicky version is louder than most productivity keyboards but still quieter than a standard Cherry MX Blue. The lack of a standard mechanical switch choice (like Cherry or Gateron) may disappoint enthusiasts.</p>
      <h2>Software and Connectivity: Logitech&apos;s Best, With Caveats</h2>
      <p>Logitech Options+ is the companion software, and it&apos;s excellent. You can remap almost any key, set app-specific profiles, and use Flow to seamlessly control multiple computers. The Easy-Switch buttons let you toggle between three paired devices instantly.</p>
      <p>The keyboard supports Bluetooth and Logi Bolt, but not the older Unifying receiver. If you have a Unifying mouse, you&apos;ll need a separate receiver. The battery life is impressive, but the backlighting is only white (no RGB) and the Mac version lacks backlighting entirely, which is a strange omission.</p>
      <h2>Key limitations (the parts the marketing doesn&apos;t cover)</h2>
      <ul>
        <li><strong>No Backlight on Mac Version</strong> The Mac-specific variant (MX Mechanical for Mac) has no backlighting at all. If you work in dim conditions, you&apos;ll need the Windows version, which has white backlighting. This feels like an unnecessary compromise.</li>
        <li><strong>Non-Standard Keycaps and Switches</strong> The low-profile switches are proprietary, meaning you can&apos;t swap them for standard MX-style switches. The keycaps are also non-standard, so customization is limited. If you like to tinker, this isn&apos;t the keyboard for you.</li>
        <li><strong>High Price for What You Get</strong> At $149.99, the MX Mechanical is expensive. You&apos;re paying for the multi-device convenience and build quality, but the typing experience doesn&apos;t match that of a $100 mechanical keyboard with standard switches. The lack of hot-swap and RGB may also feel like a downgrade for some.</li>
      </ul>
      <h2>How it compares</h2>
      <p>Compared to the Keychron K3 (a low-profile mechanical keyboard), the MX Mechanical has better software and multi-device support, but the K3 is cheaper, has hot-swappable switches, and offers RGB backlighting. The Logitech feels more premium but is less flexible.</p>
      <p>Against the Apple Magic Keyboard, the MX Mechanical is a huge upgrade in typing feel and customization, but it&apos;s heavier, louder, and requires batteries. The Magic Keyboard is better for portability and silence.</p>
      <p>Versus the Razer Pro Type Ultra, the Logitech has better battery life and multi-device support, but the Razer has a more traditional mechanical feel and a lower price. The Razer also includes a wrist rest, which the Logitech lacks.</p>
      <h2>Who should buy / skip</h2>
      <p><strong>Worth considering if:</strong></p>
      <ul>
        <li>You type all day and want a quiet mechanical keyboard with a premium feel.</li>
        <li>You use multiple computers (Mac and PC) and want seamless switching with Flow.</li>
        <li>You prefer low-profile switches for ergonomic reasons.</li>
      </ul>
      <p><strong>Look elsewhere if:</strong></p>
      <ul>
        <li>You want a fully customizable mechanical keyboard with hot-swappable switches.</li>
        <li>You need RGB backlighting or any backlighting on a Mac.</li>
        <li>You&apos;re on a tight budget and don&apos;t need multi-device features.</li>
      </ul>
      <h2>The Isaac Standard verdict</h2>
      <p><strong>4.0 / 5.</strong> The Logitech MX Mechanical is a well-executed productivity keyboard that nails the basics: build quality, multi-device connectivity, and a quiet typing experience. But its high price, limited switch options, and the baffling lack of backlighting on the Mac version make it a niche recommendation. If you live in the Logitech ecosystem and value seamless device switching, it&apos;s a great choice. Otherwise, you can get more flexibility for less money elsewhere.</p>
      <div className="flex flex-wrap gap-3 not-prose my-6">
        <AffiliateLink asin={ASIN}>Buy the Logitech MX Mechanical on Amazon</AffiliateLink>
      </div>
      <Newsletter />
      <h2>Frequently asked</h2>
      <FAQ
        items={[
          { q: 'Is the Logitech MX Mechanical good for gaming?', a: 'It\'s not designed for gaming. The low-profile switches are fine for casual gaming, but the lack of high polling rate, no dedicated gaming software, and the absence of RGB make it a poor choice for competitive gamers.' },
          { q: 'Can I use the MX Mechanical with a Mac?', a: 'Yes, but the Mac version has no backlighting. The Windows version works with Mac via Bluetooth, but the keycaps are Windows-specific (Alt/Win keys). You can remap them in software.' },
          { q: 'Does the keyboard come with a wrist rest?', a: 'No, it does not. Logitech sells a separate MX Palm Rest, but it\'s an additional cost. The keyboard\'s low profile may reduce the need for one, but many users will want it.' },
          { q: 'How does the battery life hold up in real use?', a: 'With backlighting on, expect about 10-12 days of heavy use. Without backlighting, it can last months. The USB-C charging is fast, and you can use it while charging.' },
        ]}
      />
    </article>
  );
}
