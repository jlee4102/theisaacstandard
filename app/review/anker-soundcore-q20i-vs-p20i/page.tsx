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
        These are two different form factors at overlapping price points. The Q20i is an over-ear Bluetooth 5.0 headphone with hybrid active noise cancellation — Soundcore says it uses four microphones (two outside the cup, two inside) and a 40mm dynamic driver. They list 245 g, multipoint pairing, 22 EQ presets via the Soundcore app, and 40 hours of battery with ANC on (60 hours without). The P20i is a true-wireless earbud set built on Bluetooth 5.3 with a 10mm driver per side, IPX4 sweat/splash resistance (per Soundcore's product page; some listings cite IPX5), and a manufacturer-claimed 30 hours total with the case (10 hours per bud). Codec support on both is SBC and AAC — no aptX, no LDAC. Both charge over USB-C.
      </p>
      <p>
        Most buyers comparing these are choosing between &quot;one pair on my head all day&quot; (Q20i) and &quot;something I can pocket and forget&quot; (P20i). They're not direct competitors so much as the same brand's answer to two different questions. Sits in the [INSERT CURRENT PRICE TIER — verify at publish] tier; main alternatives at this price include [COMPARABLE PRODUCT 1 — TESTED?] and [COMPARABLE PRODUCT 2 — TESTED?].
      </p>

      <h2>Specs at a glance (manufacturer-claimed)</h2>
      <ComparisonTable
        headers={['Soundcore Q20i', 'Soundcore P20i']}
        rows={[
          { feature: 'Form factor', values: ['Over-ear, on-cup mic', 'True wireless earbuds, lanyard'] },
          { feature: 'Driver size', values: ['40mm dynamic', '10mm dynamic'] },
          { feature: 'Active noise cancellation', values: ['Yes — hybrid (4 mics)', 'No — passive isolation only'] },
          { feature: 'Bluetooth version', values: ['5.0', '5.3'] },
          { feature: 'Codecs (Anker)', values: ['SBC, AAC (Hi-Res via 3.5mm cable)', 'SBC, AAC'] },
          { feature: 'Battery — Anker claim', values: ['40h ANC on / 60h ANC off', '10h/bud + 20h from case = 30h total'] },
          { feature: 'Fast charge', values: ['5 min → 4h playback', '10 min → 2h playback'] },
          { feature: 'Weight', values: ['245 g', '4.3 g per bud · 47.6 g case'] },
          { feature: 'Water resistance', values: ['Not rated', 'IPX4 (per Soundcore page; some listings cite IPX5)'] },
          { feature: 'Multipoint', values: ['Yes (Anker spec)', 'Not advertised'] },
          { feature: 'EQ presets in app', values: ['22', '22'] },
          { feature: 'Charging port', values: ['USB-C', 'USB-C'] },
          { feature: 'Typical street price', values: ['[VERIFY AT PUBLISH]', '[VERIFY AT PUBLISH]'] },
        ]}
      />
      <p className="text-xs text-ink-faint italic mt-2 not-prose">
        Specs cited from Soundcore product pages and Anker listings as of May 2026. The P20i&apos;s water-resistance figure is contradictory between Soundcore&apos;s own product page (IPX4) and several retailer listings (IPX5) — at the lower IPX4 it&apos;s protected against splashes only, not water jets; we recommend treating it as IPX4 until tested.
      </p>

      <div className="flex flex-wrap gap-3 not-prose my-6">
        <AffiliateLink asin={Q20I_ASIN}>Check Q20i price on Amazon</AffiliateLink>
        <AffiliateLink asin={P20I_ASIN}>Check P20i price on Amazon</AffiliateLink>
      </div>

      <h2>What other reviewers found (pre-testing research)</h2>
      <p>
        Before we put our own hands on the Q20i and P20i, here&apos;s what published reviews establish — useful as a baseline for what we&apos;ll be measuring against. <strong>None of these findings are ours.</strong> They&apos;re external work, attributed and cited at the end of this section.
      </p>

      <h3>Q20i — what the existing reviews say</h3>
      <ul>
        <li><strong>Sound profile is V-shaped and polarizing.</strong> TechGearLab characterizes the tuning as &quot;bass-heavy, unbalanced, and muddy,&quot; with the 22 in-app EQ presets unable to fully correct the imbalance. Robb Sutton&apos;s hands-on takes a more positive view, calling the bass &quot;punchy and well-defined.&quot; Both agree the tuning favors bass-forward genres over acoustic or classical material.</li>
        <li><strong>ANC is meaningfully effective at this price.</strong> Reviewers report roughly 25 dB of attenuation, with the hybrid ANC handling steady low-frequency noise (HVAC, plane and bus hum) well. It does not match flagship-tier ANC like the Sony XM5 or Bose QC.</li>
        <li><strong>Battery life is real.</strong> Hands-on testing has landed near 49 hours of mixed use, against the 60-hour ANC-off manufacturer claim.</li>
        <li><strong>Notable flaw: wired-mode ANC is disabled.</strong> Plugging in the included 3.5mm aux cable turns ANC off entirely — limiting the headphones&apos; usefulness on flights where you want to plug into seat-back audio.</li>
        <li><strong>Call quality.</strong> Acceptable in quiet rooms; degrades sharply in noisy environments.</li>
      </ul>

      <h3>P20i — what the existing reviews say</h3>
      <ul>
        <li><strong>Treble rolloff.</strong> Multiple reviewers note recessed highs — micro-detail in strings, cymbals, and other treble-rich material doesn&apos;t come through cleanly. Sits in V-shape territory like the Q20i but more rolled off at the top.</li>
        <li><strong>Battery is close to claim.</strong> Hands-on testing has put per-bud playback near 8.5 hours against the 10-hour figure.</li>
        <li><strong>Documented macOS connectivity issue.</strong> Multiple sources flag random audio dropouts when paired with Macs — appears to be a recurring firmware-level bug, not user error. Worth confirming on current firmware before publishing a verdict.</li>
        <li><strong>Fit is inconsistent.</strong> Most reviewers find the included tips comfortable for long sessions; some report fatigue in smaller ear canals.</li>
        <li><strong>Mic quality.</strong> Average for the price.</li>
        <li><strong>Market reception.</strong> Over 7,500 five-star Amazon reviews — these clearly sell well at their price tier.</li>
      </ul>

      <p className="text-xs text-ink-faint italic not-prose mt-3">
        Sources: <a href="https://www.techgearlab.com/reviews/audio/budget-headphones/soundcore-q20i" target="_blank" rel="noopener">TechGearLab Q20i</a>, <a href="https://robbsutton.com/soundcore-by-anker-q20i-hybrid-active-review/" target="_blank" rel="noopener">Robb Sutton Q20i</a>, <a href="https://www.techgearlab.com/reviews/audio/wireless-earbuds/soundcore-p20i" target="_blank" rel="noopener">TechGearLab P20i</a>, <a href="https://www.rtings.com/headphones/reviews/anker/soundcore-p25i-p20i-true-wireless" target="_blank" rel="noopener">RTINGS Soundcore P20i/P25i</a>, <a href="https://www.cnn.com/cnn-underscored/reviews/anker-soundcore-p20i-true-wireless-earbuds" target="_blank" rel="noopener">CNN Underscored P20i</a>.
      </p>

      <p>
        <strong>Where our testing will focus:</strong> we&apos;re specifically targeting (a) whether the Q20i&apos;s V-shaped tuning can be salvaged with EQ for non-bass genres, (b) whether the P20i&apos;s macOS dropout issue persists on current firmware, (c) ANC measurements against three named noise types at fixed dB references, (d) call quality across quiet, café, and street conditions, and (e) whether either earns the recommendation at current street prices. The bracketed [NEEDS TESTING] notes below mark the specific data points we&apos;ll capture.
      </p>

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
            a: "Soundcore does not publish a water-resistance rating for the Q20i. Treat it as not waterproof — safe for indoor use and dry commutes, but not for sweat, rain, or gym sessions. If you need water resistance at this price, the P20i is the better choice (Soundcore's product page lists IPX4 — splash-resistant, not fully waterproof).",
          },
          {
            q: 'How long does the P20i battery actually last per charge?',
            a: 'Anker claims roughly 10 hours per bud and 30 hours total including the case. [NEEDS TESTING: real continuous-playback time at 60% volume, plus case top-up count from one full case charge.]',
          },
          {
            q: 'Can the Q20i connect to two devices at once (multipoint)?',
            a: "Soundcore's official Q20i product page advertises multipoint pairing — the headphones can stay connected to two devices at once and switch between them. The P20i does not advertise multipoint. [NEEDS TESTING: verify multipoint reliability on the Q20i — budget Soundcore firmware has historically been inconsistent on this feature.]",
          },
          {
            q: 'Is either model good for gaming?',
            a: 'Neither is purpose-built for gaming. Bluetooth introduces audio latency that you will notice in fast-paced or rhythm games. For gaming on a budget, look at wired headphones or low-latency 2.4GHz dongle headsets instead.',
          },
          {
            q: 'Do these support hi-res audio codecs like LDAC?',
            a: "No. Both the Q20i and P20i support SBC and AAC only — neither lists aptX or LDAC. The Q20i is marketed as Hi-Res Audio compatible, but only via its included 3.5mm aux cable (wired); wireless playback is capped at AAC. If you need high-bitrate wireless audio, look at a different price tier.",
          },
        ]}
      />

      <p className="text-xs text-ink/50 mt-10">
        Specs cited from Anker manufacturer listings; pricing and availability vary — verify at publish time. Experiential claims pending hands-on testing.
      </p>
    </article>
  );
}
