import { site } from '@/lib/site';

export const metadata = {
  title: 'How we test',
  description: `Methodology behind every review at ${site.name} — what we test, how we measure, and what we refuse to do.`,
};

export default function Page() {
  return (
    <article className="prose-isaac max-w-3xl mx-auto px-6 md:px-10 py-10">
      <div className="eyebrow mb-2">Methodology</div>
      <h1 className="font-serif text-3xl md:text-4xl tracking-tight">How we test</h1>
      <p className="text-lg text-ink/80 mt-3 not-prose">
        Every review on {site.name} follows the same process. This page exists so you can audit it.
      </p>

      <h2>The short version</h2>
      <ul>
        <li>We buy the product (or borrow one from someone who did). No paid placements.</li>
        <li>We test it for at least a week under real conditions before publishing.</li>
        <li>We compare against the obvious competitors at the same price.</li>
        <li>If it doesn&apos;t earn the recommendation, we say so — even when it pays not to.</li>
      </ul>

      <h2>How we source products</h2>
      <p>
        We buy most products outright. Occasionally a manufacturer offers a review unit; we accept these only when (a) the brand has no editorial input, (b) the unit doesn&apos;t need to be returned in a way that biases our timeline, and (c) we disclose it clearly at the top of the review. We&apos;ve never published a paid placement and never will.
      </p>
      <p>
        We refuse any arrangement where a brand sees the review before publication.
      </p>

      <h2>How long we test</h2>
      <p>
        <strong>One week minimum</strong> for most products — enough time for novelty bias to wear off and real-use annoyances to emerge.
      </p>
      <p>
        For categories where longevity matters more than first impressions — outdoor robots, battery-powered tools, anything with consumables — we hold the review until we&apos;ve hit a meaningful usage threshold (~30 hours of operation, one full consumable cycle, one full season for outdoor gear). Where we publish early, we say so and revisit.
      </p>

      <h2>What we measure (and how)</h2>
      <p>
        The dimensions we test depend on the product category, but the rule is the same: <strong>capture conditions, not just outcomes</strong>. &quot;Battery was decent&quot; is useless. &quot;9 hours 12 minutes at 60% volume, AAC codec, ANC on, indoor temperature 22°C&quot; is testable, comparable, and honest.
      </p>
      <ul>
        <li><strong>Audio:</strong> battery time under defined conditions, ANC effectiveness against named noise sources (HVAC hum, road noise, café chatter), codec support, multipoint reliability, latency on video. We don&apos;t publish a graph we didn&apos;t actually capture.</li>
        <li><strong>Smart home:</strong> setup time end-to-end, app stability over the test period, update behavior, integration with Apple Home / Alexa / Google Home where applicable, real network conditions (not a lab).</li>
        <li><strong>Trackers:</strong> ping accuracy at known distances, network density required (Apple Find My vs. Tile vs. Samsung), battery life, replacement cost and difficulty.</li>
        <li><strong>Mini PCs:</strong> sustained CPU/GPU performance (not just bursts), thermals at idle and load, fan noise in dB at one meter, I/O speeds with named drives, real-world use cases (not synthetic benchmarks alone).</li>
        <li><strong>Outdoor robots:</strong> coverage time, missed-area count, charging behavior, weather resilience over the test period.</li>
      </ul>

      <h2>What we won&apos;t do</h2>
      <ul>
        <li>We won&apos;t copy specs from a press release and call it a review.</li>
        <li>We won&apos;t invent test results we didn&apos;t actually run.</li>
        <li>We won&apos;t claim &quot;hands-on&quot; when we haven&apos;t had hands on it.</li>
        <li>We won&apos;t use AI-generated experiential claims. Drafts may come from AI; lived observations come only from us.</li>
        <li>We won&apos;t hide a paid relationship. Sponsored reviews, when they happen, are labeled at the top of the post and in the first 15 seconds of the video.</li>
      </ul>

      <h2>How ratings work</h2>
      <p>
        A review only gets a star rating after the testing is complete. Reviews still in draft state — research, scaffolding, awaiting hands-on time — show <em>Pending test</em> instead of a rating, and they&apos;re flagged at the top of the page.
      </p>
      <p>
        Ratings are on a 5-point scale and reference the product&apos;s price tier, not the absolute market. A 4.5★ budget item doesn&apos;t mean it beats a 4.5★ flagship — it means it&apos;s exceptional <em>at its price</em>.
      </p>

      <h2>Updates and corrections</h2>
      <p>
        Reviews get a &quot;last updated&quot; date when we revisit them. If a firmware update materially changes behavior, we update the review and note the change. If we got something wrong, we fix it and say what changed. Corrections aren&apos;t buried — they&apos;re flagged at the top of the affected post for the first 30 days.
      </p>

      <h2>Conflicts of interest</h2>
      <p>
        We participate in the Amazon Associates program — we earn a small commission when you buy through our links. We disclose this on every page that contains affiliate links. Affiliate relationships never determine which products we recommend or how we rate them. We&apos;ve never been paid to remove a critical review, and we have a written policy against doing so.
      </p>

      <h2>Questions</h2>
      <p>
        If something about our methodology seems off — or you spot a claim we can&apos;t back up — email <a href="mailto:hello@theisaacstandard.com">hello@theisaacstandard.com</a>. We read every message and we&apos;ll correct anything we got wrong.
      </p>
    </article>
  );
}
