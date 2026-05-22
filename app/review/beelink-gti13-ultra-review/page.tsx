import AffiliateLink from '@/components/AffiliateLink';
import Byline from '@/components/Byline';
import ComparisonTable from '@/components/ComparisonTable';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import ProductImage from '@/components/ProductImage';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Beelink GTi13 Ultra Review: i9-13900HK Mini PC, Three Months In',
  description:
    'Hands-on review of the Beelink GTi13 Ultra (i9-13900HK, 64GB DDR5, 2TB SSD) after three months of daily use for light gaming and emulation — including the PCIe expansion claim, real thermals, and what the spec sheet doesn’t tell you.',
};

const ASIN = 'B0DYJ871R7';
const SER7_ASIN = 'B0CQT9N951';
const MINI_S12_ASIN = 'B0BVFS94J5';

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@type': 'Product', name: 'Beelink GTi13 Ultra (i9-13900HK)' },
    author: { '@type': 'Person', name: 'Isaac', url: `${site.url}/authors/isaac` },
    publisher: { '@type': 'Organization', name: site.name },
    datePublished: '2026-05-24',
  };

  return (
    <article className="prose-isaac max-w-3xl mx-auto px-6 md:px-10 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="not-prose bg-yellow-50 border-l-4 border-yellow-600 px-4 py-3 my-4 text-sm text-ink/80">
        <strong>DRAFT — AWAITING JAMES&apos;S TESTING NOTES.</strong> All manufacturer-attributed specs and technical context are in place. Experiential sections marked <strong>[NEEDS TESTING]</strong> need James&apos;s observations from his three months of hands-on use before this ships.
      </div>

      <p className="text-ink/50 text-sm not-prose">Mini PCs</p>
      <h1 className="font-serif text-3xl md:text-4xl mt-2">
        Beelink GTi13 Ultra Review: i9-13900HK Mini PC, Three Months In
      </h1>
      <Byline date="2026-05-24" readTime="9 min read" />

      <p className="not-prose bg-ink/[0.03] border-l-4 border-accent px-4 py-3 my-6 text-sm text-ink/80">
        <strong>Disclosure:</strong> This review contains Amazon affiliate links. If you buy through them, {site.name} may earn a small commission at no extra cost to you. This never affects the rating — recommendations are based only on hands-on testing.
      </p>

      <p className="text-lg text-ink/80 mt-3">
        [HOOK + VERDICT — 2-3 sentences. Who is this for, what does it deliver, and what compromise comes with it? Will write from James&apos;s notes.]
      </p>

      <div className="not-prose my-8">
        <ProductImage
          src="https://www.bee-link.com/cdn/shop/files/9_a1060a2b-d1b9-4dc5-a4c6-b8c08b1d1c7d.png?v=1764744541"
          alt="Beelink GTi13 Ultra mini PC (manufacturer image)"
          caption="GTi13 Ultra in Frost Silver. Image: Beelink."
          aspect="4/3"
        />
      </div>

      <h2>What it is &amp; who it&apos;s for</h2>
      <p>
        The Beelink GTi13 Ultra is Beelink&apos;s flagship Intel-based mini PC, built around the <strong>Intel Core i9-13900HK</strong> — a 14-core (6 performance + 8 efficiency), 20-thread mobile CPU that boosts to 5.4 GHz on its top cores. Beelink rates the default TDP at 45W with a 65W stable operating point and short-term peaks up to 115W. Graphics are handled by Intel&apos;s integrated Iris Xe (96 EUs). It supports up to 64GB of DDR5-5200 RAM in dual channel and dual M.2 2280 PCIe 4.0 x4 SSD slots, each capable of up to 2TB.
      </p>
      <p>
        The differentiator is the <strong>PCIe 4.0 x8 slot</strong> exposed at the bottom of the chassis. Beelink sells a separate &quot;EX Pro&quot; docking station that connects through this slot, allowing the GTi13 to drive a full-size desktop discrete GPU. Without the dock, you&apos;re running on the integrated Iris Xe — which is competent for older or lighter titles, console emulation, and 4K media playback, but not for current AAA gaming. With the dock and a discrete card, the GTi13 effectively becomes a small-form-factor gaming PC. That dual-mode capability is what positions it differently from competing mini PCs at the same price.
      </p>
      <p>
        At its base 32GB / 1TB configuration, Beelink lists it around <strong>$759 MSRP</strong> (currently $599 direct during 2026 promotions). The 64GB / 2TB configuration tested here is <strong>$769 direct from Beelink</strong> and lands around <strong>$799-899 on Amazon</strong>, depending on color and stock channel. That price tier puts it against the Minisforum NAB9, ASUS NUC 13 Pro, and GMKtec K8 — all i9-class mini PCs in roughly the same band.
      </p>

      <h2>Specs at a glance (manufacturer-claimed)</h2>
      <ComparisonTable
        headers={['Beelink GTi13 Ultra (i9 / 64GB / 2TB)']}
        rows={[
          { feature: 'CPU', values: ['Intel Core i9-13900HK · 14C / 20T · up to 5.4 GHz · 24MB cache'] },
          { feature: 'GPU (integrated)', values: ['Intel Iris Xe · 96 EUs'] },
          { feature: 'TDP', values: ['45W default · 65W stable · 115W short-term peak (Beelink spec)'] },
          { feature: 'RAM (as tested)', values: ['64GB DDR5-5200 (32GB × 2, dual channel, max supported)'] },
          { feature: 'Storage (as tested)', values: ['2TB NVMe · 2× M.2 2280 PCIe 4.0 x4 slots'] },
          { feature: 'External GPU support', values: ['PCIe 4.0 x8 slot via Beelink EX Pro dock (sold separately)'] },
          { feature: 'Connectivity', values: ['Thunderbolt 4 · USB-C · USB-A · 2× HDMI · DisplayPort · SD card · 2.5GbE × 2 · Wi-Fi 6E · Bluetooth 5.2'] },
          { feature: 'Power', values: ['Built-in PSU — single cord, no external brick'] },
          { feature: 'Manufacturer noise claim', values: ['As low as 32 dB (Beelink)'] },
          { feature: 'Color (as tested)', values: ['Frost Silver'] },
          { feature: 'Typical price (as configured)', values: ['$769 direct from Beelink · ~$799-899 on Amazon (verify at publish)'] },
        ]}
      />
      <p className="text-xs text-ink-faint italic mt-2 not-prose">
        Specs cited from Beelink&apos;s product page and reviewer reporting (Neowin, Notebookcheck, Windows Central) as of May 2026. Pricing varies by configuration and channel.
      </p>

      <div className="flex flex-wrap gap-3 not-prose my-6">
        <AffiliateLink asin={ASIN}>Check current price on Amazon</AffiliateLink>
      </div>

      <h2>How the i9-13900HK actually behaves in a 4-liter chassis</h2>
      <p>
        <strong>Mechanism (no testing required):</strong> The i9-13900HK is a mobile-class CPU originally designed for premium laptops. Its 14 cores split into 6 high-clock Performance cores and 8 efficiency cores, with the Thread Director silicon scheduler in Windows 11 routing background work to E-cores and foreground threads to P-cores. The 45W base TDP is the &quot;sustainable&quot; power level the cooling system is designed around; the 115W peak is the short-burst figure that lasts seconds, not minutes. In a mini-PC chassis this small, the practical performance question isn&apos;t the peak number — it&apos;s how long the cooler can sustain wattage before thermal throttling kicks in and clocks drop. That sustained behavior is what separates a usable i9 mini PC from a marketing-spec one.
      </p>
      <p>
        <strong>[NEEDS TESTING from James]:</strong> Sustained wattage / clock behavior under a multi-minute Cinebench or Prime95 run. Whether the chassis holds 45W indefinitely, drops to ~35W under thermal pressure, or spikes-and-crashes. Real CPU package temperatures at idle, light load, and sustained 100% load. Comparison to manufacturer&apos;s claimed noise floor (32 dB Beelink quotes).
      </p>

      <h2>Light gaming and emulation — the actual use case</h2>
      <p>
        <strong>What the specs tell us:</strong> The Iris Xe integrated GPU (96 EUs) is roughly equivalent to a low-end discrete card from a few generations ago — enough for indie titles, older AAA at low settings, and most retro emulation through GameCube/Wii (Dolphin) and PlayStation 2 (PCSX2). Demanding emulators like Yuzu (Switch), RPCS3 (PS3), and Cemu (Wii U) lean heavily on single-thread CPU performance — which the i9-13900HK has in abundance — but the integrated GPU becomes the limiting factor for the higher-resolution presets. With the EX Pro dock and a discrete GPU attached, the bottleneck shifts entirely and the GTi13 starts behaving like a small desktop.
      </p>
      <p>
        <strong>[NEEDS TESTING from James]:</strong> Specific emulators tested + games + settings. Which titles run smoothly at native iGPU; which throttle; which require resolution drops. Boot-to-game time for a typical session. Whether external monitor + controller setup is stable. If using the EX Pro dock, what GPU is paired and how performance scales.
      </p>

      <h2>Build, ports, and the things that bother you after a month</h2>
      <p>
        <strong>What the specs tell us:</strong> The GTi13 is unusually port-rich for its size — Thunderbolt 4, USB-C, multiple USB-A, dual HDMI plus DisplayPort (three concurrent 4K displays supported), SD card reader, and dual 2.5GbE NICs. A built-in power supply means a single cord instead of the bulky external brick most mini PCs ship with. Beelink also includes a fingerprint sensor and a top-mounted speaker, which are unusual for the category and may or may not be useful depending on setup.
      </p>
      <p>
        <strong>[NEEDS TESTING from James]:</strong> Which ports are actually used vs ignored. Whether the dual 2.5GbE matters in practice. Fingerprint sensor reliability (or whether James disabled it). Whether the front-panel layout is convenient or awkward for daily use. Anything broken, finicky, or worse than advertised after three months — driver issues, sleep/wake reliability, Wi-Fi drops, BIOS quirks.
      </p>

      <h2>How it compares</h2>
      <p>
        At the i9 / 64GB / 2TB tier (~$900-1,100 as configured), the GTi13 Ultra&apos;s most direct competitors are the <strong>Minisforum NAB9</strong> (i9-12900HK, similar config, no GPU dock support), the <strong>ASUS NUC 13 Pro</strong> (slightly larger, official Intel support, narrower I/O), and the <strong>GMKtec K8</strong> (Ryzen-based at a lower price, different ecosystem). The GTi13&apos;s differentiator is the PCIe expansion slot — none of the direct competitors offer a Beelink-style discrete-GPU upgrade path. Whether that matters depends on whether you actually plan to use it; if you don&apos;t, the cheaper competitors deliver similar CPU performance for less money.
      </p>
      <p>
        <strong>[NEEDS TESTING from James]:</strong> If James has tested or used a competitor — even briefly — what he&apos;d call out. Otherwise, this stays as attributed comparison to public specs only.
      </p>

      <h2>Cheaper alternatives from Beelink</h2>
      <p>
        Most readers landing on a $769 i9 mini PC don&apos;t actually need an i9. Two cheaper Beelinks in the same family solve different problems for noticeably less money. Honest framing: these aren&apos;t recommended over the GTi13 Ultra — they&apos;re recommended <em>instead of</em> it, when your workload doesn&apos;t justify the top tier.
      </p>

      <div className="not-prose grid gap-4 my-6">
        <div className="border border-line rounded-lg bg-card p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
            <h3 className="font-serif text-xl text-ink">Beelink SER7 (Ryzen 7 7840HS)</h3>
            <span className="font-mono text-xs uppercase tracking-widest text-accent-deep">~$400-450</span>
          </div>
          <p className="text-sm text-ink-soft leading-relaxed">
            The honest sweet-spot pick. AMD&apos;s Ryzen 7 7840HS with <strong>Radeon 780M</strong> integrated graphics is materially better for gaming and emulation than the GTi13&apos;s Iris Xe — the 780M handles many modern AAA titles at 1080p low/medium without a discrete card, and demanding emulators (Yuzu, Cemu, RPCS3) run noticeably smoother. No PCIe dock support, but if you weren&apos;t going to buy the EX Pro anyway, you save several hundred dollars for better real-world graphics performance.
          </p>
          <div className="mt-4">
            <AffiliateLink asin={SER7_ASIN}>Check SER7 price on Amazon</AffiliateLink>
          </div>
        </div>

        <div className="border border-line rounded-lg bg-card p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
            <h3 className="font-serif text-xl text-ink">Beelink Mini S12 Pro (N100)</h3>
            <span className="font-mono text-xs uppercase tracking-widest text-accent-deep">~$160-200</span>
          </div>
          <p className="text-sm text-ink-soft leading-relaxed">
            The true budget pick. Intel N100 is a quad-core efficiency-class CPU — fine for web browsing, media playback, Plex transcoding for one or two streams, Home Assistant, light NAS duties, and retro emulation through PS1. It will <em>not</em> handle modern gaming, demanding emulation (GameCube and up struggle), or heavy multitasking. But at a fifth of the GTi13&apos;s price, it&apos;s the right call when you just need a tiny, quiet, always-on box.
          </p>
          <div className="mt-4">
            <AffiliateLink asin={MINI_S12_ASIN}>Check Mini S12 Pro price on Amazon</AffiliateLink>
          </div>
        </div>
      </div>

      <p className="text-xs text-ink-faint italic not-prose">
        Both alternatives carry the same Beelink build quality and Windows 11 pre-installation as the GTi13 Ultra. Prices vary; verify at publish time. Neither has been hands-on tested by {site.name} yet — recommendations here are based on public specs and the Ryzen / N100 architectures&apos; known performance profiles.
      </p>

      <h2>Who should buy / skip</h2>
      <h3>Worth considering if:</h3>
      <ul>
        <li>You want desktop-class CPU performance in a 4-liter chassis without dealing with custom small-form-factor builds.</li>
        <li>You value the optional discrete-GPU upgrade path even if you don&apos;t use it immediately — future-proofing for full gaming later.</li>
        <li>Your workload mixes light gaming, console emulation, and CPU-heavy productivity (compile, video transcode, virtualization) where the i9&apos;s 14 cores actually pay off.</li>
        <li>You&apos;ve been burned by external power bricks and want a mini PC with the PSU built in.</li>
      </ul>
      <h3>Look elsewhere if:</h3>
      <ul>
        <li>You&apos;re buying primarily for current AAA gaming — the integrated Iris Xe alone won&apos;t cut it. Either commit to the EX Pro dock + a discrete GPU (which pushes total spend past a full SFF desktop build) or pick a different platform.</li>
        <li>Your workload is light browsing and office work. You&apos;re paying for an i9 you won&apos;t use; an N100 or Ryzen 5 mini PC at a quarter of the price does the job.</li>
        <li>Silence under sustained load matters more than peak performance. Mini-PC cooling at this TDP class is louder than fanless N100 boxes under any real load.</li>
      </ul>

      <h2>The Isaac Standard verdict</h2>
      <p>
        [VERDICT — will write from James&apos;s testing notes. Rating to be assigned after observations.]
      </p>

      <div className="flex flex-wrap gap-3 not-prose mt-6">
        <AffiliateLink asin={ASIN}>Buy the GTi13 Ultra on Amazon →</AffiliateLink>
      </div>

      <Newsletter />

      <FAQ
        items={[
          {
            q: 'Can the Beelink GTi13 Ultra play current AAA games on its own?',
            a: 'Only at significantly reduced settings. The integrated Iris Xe GPU handles older AAA titles, indies, and competitive esports at moderate settings, but current AAA games need either reduced resolution and quality presets or the optional EX Pro docking station with a discrete GPU attached.',
          },
          {
            q: 'What is the EX Pro docking station, and do I need it?',
            a: 'The EX Pro is Beelink&apos;s separate accessory that connects to the GTi13&apos;s bottom-mounted PCIe 4.0 x8 slot and accepts a full-size desktop graphics card. It turns the GTi13 into a small-form-factor gaming PC. Whether you need it depends entirely on your workload — for productivity, emulation, and light gaming, the integrated GPU is enough. For current AAA gaming or GPU-bound creative work, the dock is the path forward.',
          },
          {
            q: 'How much RAM does the GTi13 Ultra support?',
            a: 'Up to 64GB of DDR5-5200 in dual-channel configuration (2 × 32GB SODIMM). The unit reviewed here is configured at maximum — 64GB across both slots.',
          },
          {
            q: 'How many displays can the GTi13 Ultra drive simultaneously?',
            a: 'Up to three independent 4K displays — via the dual HDMI ports plus the DisplayPort output, or via the Thunderbolt 4 / USB-C ports depending on monitor support. The integrated Iris Xe handles 4K at 60Hz comfortably; high-refresh-rate 4K (120Hz+) is supported on capable ports.',
          },
          {
            q: 'Does it come with Windows pre-installed?',
            a: 'Yes — Beelink ships the GTi13 Ultra with Windows 11 Pro activated. The unit is also Linux-compatible; most distributions install cleanly given the standard Intel platform.',
          },
        ]}
      />

      <p className="text-xs text-ink/50 mt-10">
        Specs cited from Beelink manufacturer listings and reviewer reporting (Neowin, Notebookcheck, Windows Central) as of May 2026. Pricing varies by configuration and stock channel — verify at publish time. Experiential claims based on hands-on testing by {site.name}.
      </p>
    </article>
  );
}
