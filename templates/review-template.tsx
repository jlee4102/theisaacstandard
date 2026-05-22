/* ============================================================================
   THE ISAAC STANDARD — CANONICAL REVIEW TEMPLATE
   ============================================================================

   USE THIS for every new product review (single-product or head-to-head).
   The biweekly cron at automation/weekly-reviews.ps1 generates new pages in
   this exact shape. Hand-written reviews should match.

   STEPS to use:
   1. Copy this whole file to app/review/<your-product-slug>/page.tsx
   2. Replace every [BRACKET] marker with verified content or real testing notes
   3. Update lib/site.ts: add an entry to the `reviews` array at the top
   4. Add product image(s) to public/reviews/<slug>/ and reference via ProductImage
   5. DELETE the yellow [DRAFT — NEEDS HANDS-ON TESTING] banner before publishing
   6. DELETE all [NEEDS TESTING] markers — every one is a tested observation
      or gets removed
   7. Verify rating in lib/site.ts only AFTER actually testing the product

   CHANNEL RULES enforced by this template:
   - No experiential claim without testing notes
   - Every manufacturer-claimed spec is attributed ("Anker rates...", "Per
     Soundcore's product page...", "the listing claims...")
   - Mechanism / how-it-works explanations are fine WITHOUT testing
   - Specific prices are bracketed — they shift, verify at publish
   - Competitor mentions require either real testing OR cited public specs
   - The yellow banner stays until every bracket is gone

   STRUCTURE (mandatory):
   1. DRAFT banner (delete before publishing)
   2. Category eyebrow + H1
   3. Byline
   4. Affiliate disclosure callout
   5. Hook + verdict paragraph (intro)
   6. Product image(s)
   7. What it is & who it's for
   8. Specs at a glance (comparison table)
   9. Affiliate buy buttons (first set)
   10. Primary performance dimension (mechanism + testing notes)
   11. Second performance dimension
   12. Third performance dimension
   13. How it compares
   14. Who should buy / skip
   15. The Isaac Standard verdict
   16. Affiliate buy buttons (second set)
   17. Newsletter
   18. FAQ (4-5 buyer-intent questions)
   19. Disclaimer

   LENGTH:
   - Single-product: 1,000-1,400 words finished
   - Head-to-head: 1,200-1,600 words finished
   ============================================================================ */

import AffiliateLink from '@/components/AffiliateLink';
import Byline from '@/components/Byline';
import ComparisonTable from '@/components/ComparisonTable';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import ProductImage from '@/components/ProductImage';
import { site } from '@/lib/site';

export const metadata = {
  title: '[FULL TITLE UNDER 70 CHARS — clear product name + angle, no clickbait]',
  description:
    '[ONE-SENTENCE DESCRIPTION ~150 chars — what the review covers, no overclaim, used by Google in SERPs]',
};

// Real Amazon ASIN — verify on amazon.com/dp/XXXXXXXXXX before saving
const ASIN = 'BXXXXXXXX';
// const ASIN_B = 'BXXXXXXXX';  // uncomment for head-to-head

// Today's publish date in ISO format
const DATE_PUBLISHED = '[YYYY-MM-DD]';

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@type': 'Product', name: '[PRODUCT NAME]' },
    // Add reviewRating ONLY after testing:
    // reviewRating: { '@type': 'Rating', ratingValue: '[X.X]', bestRating: '5' },
    author: { '@type': 'Person', name: 'Isaac', url: `${site.url}/authors/isaac` },
    publisher: { '@type': 'Organization', name: site.name },
    datePublished: DATE_PUBLISHED,
  };

  return (
    <article className="prose-isaac max-w-3xl mx-auto px-6 md:px-10 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* DELETE THIS BANNER BEFORE PUBLISHING */}
      <div className="not-prose bg-yellow-50 border-l-4 border-yellow-600 px-4 py-3 my-4 text-sm text-ink/80">
        <strong>DRAFT — NEEDS HANDS-ON TESTING.</strong> This scaffold contains only verifiable manufacturer specs and general technical explanation. All experiential claims are bracketed and must be filled in from real testing notes before publishing.
      </div>

      <p className="text-ink/50 text-sm not-prose">[CATEGORY DISPLAY NAME, e.g., &quot;Budget Audio&quot;]</p>
      <h1 className="font-serif text-3xl md:text-4xl mt-2">[REVIEW TITLE]</h1>
      <Byline date={DATE_PUBLISHED} readTime="[X] min read" />

      <p className="not-prose bg-ink/[0.03] border-l-4 border-accent px-4 py-3 my-6 text-sm text-ink/80">
        <strong>Disclosure:</strong> This article contains Amazon affiliate links. If you buy through them, {site.name} may earn a small commission at no extra cost to you. This never affects the rating — recommendations are based only on hands-on testing.
      </p>

      {/* ============= HOOK + VERDICT — 2-3 sentences ============= */}
      <p className="text-lg text-ink/80 mt-3">
        [HOOK + VERDICT. Lead with the takeaway. Who is this for, who is it not for, does it deliver? Don&apos;t hedge. ~50-80 words.]
      </p>

      {/* ============= PRODUCT IMAGE(S) ============= */}
      <div className="not-prose my-8">
        <ProductImage
          alt="[Describe the photo you'd take: e.g., 'Product on a neutral background, front view']"
          aspect="4/3"
          // src="/reviews/<slug>/hero.jpg"  ← uncomment when you have the photo
        />
      </div>

      {/* ============= WHAT IT IS & WHO IT'S FOR ============= */}
      <h2>What it is &amp; who it&apos;s for</h2>
      <p>
        [1-2 paragraphs. Describe the product objectively using manufacturer-attributed specs. List the 4-6 most bullet-worthy verified specs inline, with attribution ("Anker rates the driver at 40mm; Bluetooth 5.3; manufacturer claims 30 hours total playback with the case; IPX5 water resistance"). Name the price tier. Name 1-2 direct competitors that the buyer is realistically comparing against.]
      </p>

      {/* ============= SPECS TABLE ============= */}
      <h2>Specs at a glance (manufacturer-claimed)</h2>
      <ComparisonTable
        headers={['[PRODUCT NAME]']}
        // For head-to-head: headers={['[PRODUCT A]', '[PRODUCT B]']}
        rows={[
          { feature: '[Feature 1, e.g. Form factor]', values: ['[Manufacturer-attributed value]'] },
          { feature: '[Feature 2, e.g. Driver / chip / sensor]', values: ['[Manufacturer-attributed value]'] },
          { feature: '[Feature 3, e.g. Connectivity / Bluetooth]', values: ['[Manufacturer-attributed value]'] },
          { feature: '[Feature 4, e.g. Battery / consumables]', values: ['[Manufacturer-attributed value]'] },
          { feature: '[Feature 5, e.g. Weight / dimensions]', values: ['[Manufacturer-attributed value]'] },
          { feature: '[Feature 6, e.g. Water/dust rating]', values: ['[Manufacturer-attributed value]'] },
          { feature: '[Feature 7, e.g. Charging port / power]', values: ['[Manufacturer-attributed value]'] },
          { feature: 'Typical street price', values: ['[VERIFY AT PUBLISH]'] },
        ]}
      />
      <p className="text-xs text-ink-faint italic mt-2 not-prose">
        Specs cited from [SOURCE — e.g., the manufacturer&apos;s product page] as of [MONTH YEAR]. [FLAG ANY CONTRADICTIONS YOU FOUND BETWEEN SOURCES.]
      </p>

      {/* ============= FIRST BUY-NOW BUTTON ROW ============= */}
      <div className="flex flex-wrap gap-3 not-prose my-6">
        <AffiliateLink asin={ASIN}>Check current price on Amazon</AffiliateLink>
      </div>

      {/* ============= OPTIONAL: WHAT OTHER REVIEWERS FOUND =============
          Use this section ONLY in scaffold drafts before hands-on testing.
          Every claim must be attributed to a named source with a working link.
          DELETE this section once your own testing is complete (or rewrite it
          as "How we compare to other reviews" once you have data to contrast).
          ================================================================= */}
      <h2>What other reviewers found (pre-testing research)</h2>
      <p>
        Before we put our own hands on the [PRODUCT], here&apos;s what published reviews establish — useful as a baseline for what we&apos;ll measure against. <strong>None of these findings are ours.</strong> They&apos;re external work, attributed and cited at the end of this section.
      </p>
      <ul>
        <li><strong>[Theme 1, e.g. Sound profile].</strong> [What reviewer X / reviewer Y found, with attribution. Note disagreements if reviewers contradict each other — that's signal.]</li>
        <li><strong>[Theme 2].</strong> [...]</li>
        <li><strong>[Theme 3].</strong> [...]</li>
        <li><strong>[Notable flaw multiple reviewers agree on].</strong> [...]</li>
      </ul>
      <p className="text-xs text-ink-faint italic not-prose mt-3">
        Sources: <a href="[URL]" target="_blank" rel="noopener">[Reviewer Name]</a>, <a href="[URL]" target="_blank" rel="noopener">[Reviewer Name]</a>, <a href="[URL]" target="_blank" rel="noopener">[Reviewer Name]</a>.
      </p>
      <p>
        <strong>Where our testing will focus:</strong> [Spell out the specific data points your own testing will capture — conditions, measurements, named tests. This tells readers what to expect when the bracketed [NEEDS TESTING] notes below get filled in.]
      </p>

      {/* ============= PRIMARY PERFORMANCE DIMENSION ============= */}
      <h2>[PRIMARY DIMENSION — pick the dimension that matters MOST for this product type]</h2>
      <p>
        <strong>Mechanism (no testing required):</strong> [Explain how the relevant technology works at a technical level. 3-5 sentences. Examples: how hybrid ANC differs from feedforward-only; why a 10nm process node runs cooler than 14nm at the same power; what IPX4 protects against vs. IPX7. This section is fine to write without testing because it&apos;s general technical knowledge.]
      </p>
      <p>
        <strong>[NEEDS TESTING]:</strong> [List 2-3 specific things to measure or observe in testing. Be specific: not "test battery life" but "battery hours at 60% volume with ANC on, looped playlist." Not "test ANC" but "ANC effectiveness against three noise types: HVAC hum, traffic, cafe chatter, measured by phone dB app at constant distance."]
      </p>
      <p>
        <strong>[FILL FROM TESTING NOTES once you have them]:</strong> [Your actual observations. Specific numbers from your tests. What worked, what didn&apos;t. Mechanism + observation = the channel&apos;s signature voice.]
      </p>

      {/* ============= SECOND DIMENSION ============= */}
      <h2>[SECOND DIMENSION — usually ergonomics / build / daily use]</h2>
      <p>
        <strong>What the specs tell us:</strong> [Cite verified specs with attribution that bear on this dimension. E.g., "Anker lists the weight at 245 grams" or "The maker&apos;s spec sheet shows IPX4, meaning protected against splashes but not water jets."]
      </p>
      <p>
        <strong>[NEEDS TESTING]:</strong> [Specific observations to make. Comfort over X hours, button placement intuition, fit with glasses, stability during X activity.]
      </p>
      <p>
        <strong>[FILL FROM TESTING NOTES]:</strong> [Your hands-on observations.]
      </p>

      {/* ============= THIRD DIMENSION ============= */}
      <h2>[THIRD DIMENSION — usually software / longevity / connectivity]</h2>
      <p>
        <strong>What the specs tell us:</strong> [Verified specs.]
      </p>
      <p>
        <strong>[NEEDS TESTING]:</strong> [Specific things to test.]
      </p>
      <p>
        <strong>[FILL FROM TESTING NOTES]:</strong> [Real observations.]
      </p>

      {/* ============= MORE PRODUCT IMAGES (optional) ============= */}
      <div className="not-prose grid grid-cols-2 gap-4 my-8">
        <ProductImage alt="[E.g., 'Detail shot of the port layout']" aspect="1/1" />
        <ProductImage alt="[E.g., 'Top-down view of the product on a desk']" aspect="1/1" />
      </div>

      {/* ============= COMPARISON ============= */}
      <h2>How it compares</h2>
      <p>
        [Name 1-2 direct competitors in same price tier. Use either products YOU&apos;VE TESTED or products with well-documented public specs you cite with attribution. Don&apos;t name unverifiable comparisons. Be specific about what the competitor does better/worse and whether the price difference is justified. ~150-200 words.]
      </p>

      {/* ============= WHO SHOULD BUY / SKIP ============= */}
      <h2>Who should buy / skip</h2>
      <h3>Worth considering if:</h3>
      <ul>
        <li>[Use case 1 — derived from your testing or verified specs]</li>
        <li>[Use case 2]</li>
        <li>[Use case 3]</li>
      </ul>
      <h3>Look elsewhere if:</h3>
      <ul>
        <li>[Honest constraint, named specifically, not generic. E.g., "you need IP67+ water resistance (this is IPX4, splash only)" — not "you have specific needs"]</li>
        <li>[Constraint 2]</li>
      </ul>

      {/* ============= VERDICT ============= */}
      <h2>The Isaac Standard verdict</h2>
      <p>
        [VERDICT — fill in only after testing. Clear, specific recommendation with named caveats. State who it&apos;s for in one short sentence and back it with 2-3 reasons rooted in your actual testing. No "great for some people" hedging. If it doesn&apos;t earn the recommendation, say so plainly.]
      </p>

      {/* ============= SECOND BUY-NOW BUTTON ROW ============= */}
      <div className="flex flex-wrap gap-3 not-prose mt-6">
        <AffiliateLink asin={ASIN}>Buy on Amazon →</AffiliateLink>
      </div>

      {/* ============= NEWSLETTER ============= */}
      <Newsletter />

      {/* ============= FAQ ============= */}
      <FAQ
        items={[
          {
            q: '[BUYER-INTENT QUESTION 1 — based on verifiable specs, e.g. "Is it waterproof?"]',
            a: '[Answer using attributed manufacturer specs. If it requires hands-on confirmation, say "NEEDS TESTING" until you&apos;ve tested.]',
          },
          {
            q: '[BUYER-INTENT QUESTION 2]',
            a: '[...]',
          },
          {
            q: '[BUYER-INTENT QUESTION 3 — codec / connectivity / compatibility]',
            a: '[...]',
          },
          {
            q: '[BUYER-INTENT QUESTION 4 — battery / longevity / repairability]',
            a: '[...]',
          },
          {
            q: '[BUYER-INTENT QUESTION 5 — gaming / pro use / edge case]',
            a: '[...]',
          },
        ]}
      />

      {/* ============= DISCLAIMER ============= */}
      <p className="text-xs text-ink/50 mt-10">
        Specs cited from manufacturer listings; pricing and availability vary — verify at publish time.
        Experiential claims based on hands-on testing by {site.name}.
      </p>
    </article>
  );
}
