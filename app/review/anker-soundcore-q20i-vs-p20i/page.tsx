import AffiliateLink from '@/components/AffiliateLink';
import Byline from '@/components/Byline';
import ComparisonTable from '@/components/ComparisonTable';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import ProductImage from '@/components/ProductImage';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Anker Soundcore Q20i vs P20i: Scaffold (Needs Testing)',
  description: 'A spec-only scaffold comparing two budget Anker pairs. Experiential claims pending hands-on testing — do not publish as-is.',
};

const Q20I_ASIN = 'B0CQXMXJC5';
const P20I_ASIN = 'B0BTYCRJSS';

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@type': 'Product', name: 'Anker Soundcore Q20i vs P20i' },
    author: { '@type': 'Person', name: 'Isaac', url: `${site.url}/authors/isaac` },
    publisher: { '@type': 'Organization', name: site.name },
    datePublished: '2026-05-22',
  };

  return (
    <article className="prose-isaac max-w-3xl mx-auto px-6 md:px-10 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="not-prose bg-yellow-50 border-l-4 border-yellow-600 px-4 py-3 my-4 text-sm text-ink/80">
        <strong>DRAFT — NEEDS HANDS-ON TESTING.</strong> This scaffold contains only manufacturer-attributed specs and general technical explanation. Every experiential claim is bracketed and must be filled in (or replaced) from real testing notes before publishing. The full structure, schema, and affiliate links are wired and ready — the writing just needs your ears, hands, and stopwatch.
      </div>

      <p className="text-ink/50 text-sm not-prose">Budget Audio</p>
      <h1 className="font-serif text-3xl md:text-4xl mt-2">Anker Soundcore Q20i vs P20i: Which to Buy Under $50</h1>
      <Byline date="2026-05-22" readTime="[X] min read" />

      <p className="not-prose bg-ink/[0.03] border-l-4 border-accent px-4 py-3 my-6 text-sm text-ink/80">
        <strong>Disclosure:</strong> This article contains Amazon affiliate links. If you buy through them, The Isaac Standard may earn a small commission at no extra cost to you. This never affects the rating — recommendations are based only on hands-on testing.
      </p>

      <p className="text-lg text-ink/80 mt-3">
        [HOOK + VERDICT — 2-3 sentences after testing both pairs. State plainly: which one earns the $50, in what use case, and what each gets concretely wrong. Don't hedge.]
      </p>

      <div className="not-prose grid grid-cols-2 gap-4 my-8">
        <ProductImage alt="Soundcore Q20i — full headphones shot on a neutral background" aspect="1/1" />
        <ProductImage alt="Soundcore P20i — earbuds in case, lid open, on a neutral background" aspect="1/1" />
      </div>

      <h2>What they are &amp; who they're for</h2>
      <p>
        These are two different form factors at overlapping price points. The Q20i is an over-ear Bluetooth headphone with hybrid active noise cancellation. Anker rates the driver at 40mm and claims up to 60 hours of playback with ANC off and around 40 hours with ANC on. The P20i is a true-wireless earbud set with a smaller 10mm driver per side; Anker claims a total of 30 hours of playback when including the charging case (around 10 hours per charge plus case top-ups). Both list USB-C charging.
      </p>
      <p>
        Most buyers comparing these are choosing between &quot;one pair on my head all day&quot; (Q20i) and &quot;something I can pocket and forget&quot; (P20i). They're not direct competitors so much as the same brand's answer to two different questions. Sits in the [INSERT CURRENT PRICE TIER — verify at publish] tier; main alternatives at this price include [COMPARABLE PRODUCT 1 — TESTED?] and [COMPARABLE PRODUCT 2 — TESTED?].
      </p>

      <h2>Specs at a glance (manufacturer-claimed)</h2>
      <ComparisonTable
        headers={['Soundcore Q20i', 'Soundcore P20i']}
        rows={[
          { feature: 'Form factor', values: ['Over-ear headphones', 'True wireless earbuds'] },
          { feature: 'Driver size', values: ['40mm (Anker spec)', '10mm (Anker spec)'] },
          { feature: 'Active noise cancellation', values: ['Yes — hybrid (Anker)', 'No active ANC (passive only)'] },
          { feature: 'Battery — manufacturer claim', values: ['Up to 60h ANC off / 40h ANC on', '~10h/bud + ~20h from case = 30h total'] },
          { feature: 'Water resistance', values: ['Not rated', 'IPX5 (Anker spec)'] },
          { feature: 'Charging', values: ['USB-C', 'USB-C'] },
          { feature: 'Typical street price', values: ['[INSERT — check at publish]', '[INSERT — check at publish]'] },
        ]}
      />

      <div className="flex flex-wrap gap-3 not-prose my-6">
        <AffiliateLink asin={Q20I_ASIN}>Check Q20i price on Amazon</AffiliateLink>
        <AffiliateLink asin={P20I_ASIN}>Check P20i price on Amazon</AffiliateLink>
      </div>

      <h2>Sound &amp; ANC</h2>
      <p>
        <strong>Mechanism (no testing required):</strong> Driver size influences low-end response — bigger drivers have more cone area to move air, which generally helps perceived bass extension and dynamic range, especially in open form factors like over-ear cups. The Q20i's 40mm driver in a sealed earcup is going to behave very differently from a 10mm driver pressed into an ear canal, even before you account for tuning. Hybrid ANC uses two microphones per ear: a feedforward mic outside the cup that hears noise <em>before</em> it reaches you, and a feedback mic inside that hears what leaks past the seal. The chip applies an inverse waveform in real time. ANC works best on steady low-frequency noise (HVAC, plane hum, car cabin rumble); it does little against sudden transients (people talking, dishes clinking).
      </p>
      <p>
        <strong>[NEEDS TESTING — Q20i]:</strong> Bass extension and midrange clarity on bass-heavy track + a vocal-forward track + an acoustic track. EQ default tuning impression. ANC effectiveness measured against: (a) HVAC hum, (b) road noise from a car or bus, (c) cafe chatter. Battery time at 60% volume with ANC on, continuous loop. Whether the &quot;up to 60h&quot; claim holds.
      </p>
      <p>
        <strong>[NEEDS TESTING — P20i]:</strong> Sound character at the same three test tracks (note the size difference — don't expect the same bass profile). Passive isolation effectiveness (no ANC to lean on). Battery time per bud at 60% volume continuous, and case top-up count from one full case charge.
      </p>

      <h2>Comfort, fit, and daily wear</h2>
      <p>
        <strong>What the specs tell us:</strong> Anker doesn't publish the Q20i clamp force; weight is listed at [INSERT — verify from listing] grams. The P20i ships with multiple silicone tip sizes per Anker's product page. The Q20i is not rated for water; the P20i is IPX5 (Anker spec), meaning it's rated against low-pressure water jets — fine for sweat or rain, not for submersion.
      </p>
      <p>
        <strong>[NEEDS TESTING — Q20i]:</strong> Clamp force after 30 min, 90 min, and 3 hr sessions. Glasses compatibility. Whether the earcups push hair painfully against ears. Does the headband adjust enough for [your head size]? Heat buildup in summer indoor conditions.
      </p>
      <p>
        <strong>[NEEDS TESTING — P20i]:</strong> Which tip size fits and seals best. Stability during walking, jogging, and head-turning. Whether they fall out during yard work or workouts. Ear fatigue after 2+ hour sessions.
      </p>

      <h2>Connection, controls, and software</h2>
      <p>
        <strong>What the specs tell us:</strong> Both use Bluetooth (the P20i listing cites 5.3; verify Q20i version from current packaging since older listings vary). Both are configurable via the Soundcore app per Anker's product pages. Multipoint support — the ability to be paired to two source devices at once — is sometimes added or removed in firmware, so [VERIFY MULTIPOINT STATUS AT TEST TIME] for both models.
      </p>
      <p>
        <strong>[NEEDS TESTING — both]:</strong> Pairing time on first connect and on reconnect. Dropout frequency at typical phone-in-pocket range. Latency on video playback (lip sync) with and without app-side codec choices. App stability and whether firmware updates apply cleanly. Touch / button control reliability (false triggers).
      </p>

      <h2>How they compare to each other</h2>
      <p>
        The Q20i is fundamentally answering &quot;give me a long-haul listening pair under $50 with some ANC&quot;; the P20i is answering &quot;give me pocketable, water-resistant buds under $40.&quot; The driver-size and form-factor differences make a head-to-head sound comparison mostly an apples-to-oranges exercise — the real question is which problem you're solving, not which sounds better in absolute terms.
      </p>
      <p>
        That said, after testing, fill in the call: [WHICH ONE GIVES MORE PRODUCT PER DOLLAR — Q20i (more driver, ANC, multipoint, battery) typically wins on raw value, but only if the over-ear form factor matches the buyer's use case.]
      </p>
      <p>
        Direct competitors at this price tier to consider when [TESTED]: [COMPARABLE BUDGET ANC OVER-EAR — e.g., 1More SonoFlow, Soundpeats Space, etc., assuming tested].
      </p>

      <h2>Who should buy / skip</h2>
      <h3>Q20i is worth a look if:</h3>
      <ul>
        <li>You want a single pair for long work-from-home or commuting stretches and don't already own ANC headphones.</li>
        <li>You'd benefit from real (if modest) noise cancellation on steady noise.</li>
        <li>You don't need water resistance and don't plan to use them at the gym.</li>
      </ul>
      <h3>P20i is worth a look if:</h3>
      <ul>
        <li>You already own headphones and need a pocketable second pair.</li>
        <li>Gym, walking, yard work, or light rain is the main use case (IPX5 covers all of those).</li>
        <li>You value form factor over soundstage and don't need ANC.</li>
      </ul>
      <h3>Look elsewhere if:</h3>
      <ul>
        <li>You need <em>strong</em> ANC for commuter rail or air travel — neither of these is in that class; budget under $50 doesn't buy XM5-grade cancellation.</li>
        <li>You need waterproof (full submersion, IPX7+) rather than splash-resistant — the P20i's IPX5 is rated for water jets, not soaking.</li>
        <li>Latency matters (gaming) — Bluetooth on either will introduce noticeable lag.</li>
      </ul>

      <h2>The Isaac Standard verdict</h2>
      <p>
        [VERDICT — fill after testing both. Should be a clear call: which one earns the spend, in what use case, with named caveats. If neither earns the recommendation, say so. No &quot;great for some people&quot; hedging.]
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
            a: 'Anker does not publish a water-resistance rating for the Q20i. Treat it as not waterproof — fine for indoor use and dry commutes, not safe for sweat or rain. If you need water resistance at this price, the P20i (rated IPX5 by Anker) is the safer pick.',
          },
          {
            q: 'How long does the P20i battery actually last per charge?',
            a: 'Anker claims roughly 10 hours per bud and 30 hours total including the case. [NEEDS TESTING: real continuous-playback time at 60% volume, plus case top-up count from one full case charge.]',
          },
          {
            q: 'Can the Q20i connect to two devices at once (multipoint)?',
            a: '[NEEDS TESTING: verify current firmware behavior. Multipoint support has shifted between firmware versions on budget Soundcore models. Check whether the version you receive supports simultaneous phone + laptop pairing.]',
          },
          {
            q: 'Is either model good for gaming?',
            a: 'Neither is purpose-built for gaming. Bluetooth introduces audio latency that you will notice in fast-paced or rhythm games. For gaming on a budget, look at wired headphones or low-latency 2.4GHz dongle headsets instead.',
          },
          {
            q: 'Do these support hi-res audio codecs like LDAC?',
            a: '[NEEDS TESTING: check the current Anker product page for codec support — historically Soundcore at this price tier supports SBC and AAC only, but newer firmware can add codecs. Verify before claiming.]',
          },
        ]}
      />

      <p className="text-xs text-ink/50 mt-10">
        Specs cited from Anker manufacturer listings; pricing and availability vary — verify at publish time. Experiential claims pending hands-on testing.
      </p>
    </article>
  );
}
