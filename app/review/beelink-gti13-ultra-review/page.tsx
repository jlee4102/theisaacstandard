import AffiliateLink from '@/components/AffiliateLink';
import Byline from '@/components/Byline';
import ComparisonTable from '@/components/ComparisonTable';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import ProductImage from '@/components/ProductImage';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Beelink GTi13 Ultra Review: A Quiet i9 Mini PC With a Real GPU Escape Hatch',
  description:
    "Three months with the Beelink GTi13 Ultra. The CPU is good, just not 2025-good. The cooling is the quiet flex. And the PCIe x8 dock is the whole story — it turns this fist-sized box into a real gaming rig.",
  openGraph: {
    title: 'Beelink GTi13 Ultra Review',
    description: 'A quiet i9 mini PC with a real GPU escape hatch — honest review.',
    images: [{ url: '/brand/png/beelink-x-card.png', width: 1600, height: 900, alt: 'Beelink GTi13 Ultra' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/brand/png/beelink-x-card.png'],
  },
};

const ASIN = 'B0DYJ871R7';
const SER7_ASIN = 'B0CQT9N951';
const MINI_S12_ASIN = 'B0BVFS94J5';

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@type': 'Product', name: 'Beelink GTi13 Ultra (i9-13900HK)' },
    reviewRating: { '@type': 'Rating', ratingValue: '4.2', bestRating: '5' },
    author: { '@type': 'Person', name: 'Isaac', url: `${site.url}/authors/isaac` },
    publisher: { '@type': 'Organization', name: site.name },
    datePublished: '2026-05-24',
  };

  return (
    <article className="prose-isaac max-w-3xl mx-auto px-6 md:px-10 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p className="text-ink/50 text-sm not-prose">Mini PCs</p>
      <h1 className="font-serif text-3xl md:text-4xl mt-2">
        Beelink GTi13 Ultra Review: A Quiet i9 Mini PC With a Real GPU Escape Hatch
      </h1>
      <Byline date="2026-05-24" readTime="9 min read" />

      <p className="not-prose bg-ink/[0.03] border-l-4 border-accent px-4 py-3 my-6 text-sm text-ink/80">
        <strong>Disclosure:</strong> This review contains Amazon affiliate links. If you buy through them, {site.name} may earn a small commission at no extra cost to you. It never affects the rating. This review is based on three months of daily use, with benchmarks and stress-test numbers cross-referenced to named outside reviewers (cited inline) for tests we didn&apos;t run ourselves.
      </p>

      <p className="text-lg text-ink/80 mt-3">
        It&apos;s a fist-sized box running an Intel Core i9-13900HK that, with the right accessory, will happily drive a desktop RTX-class GPU. That accessory is the whole story. Don&apos;t buy the GTi13 Ultra for the CPU benchmarks — buy it for the silent operation and the PCIe x8 escape hatch that lets it moonlight as a real gaming or workstation rig the moment you bolt on a graphics card. Just know you&apos;re starting on slightly older silicon, and the dock is a separate purchase.
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
        The Beelink GTi13 Ultra is the flagship of Beelink&apos;s Intel mini-PC line: an i9-13900HK in a 4-liter chassis, dual M.2 PCIe 4.0 x4 slots, dual-channel DDR5-5200 RAM (up to 64GB), Thunderbolt 4, dual HDMI plus DisplayPort, dual 2.5GbE NICs, Wi-Fi 6E, a fingerprint reader, and a built-in power supply so there&apos;s only one cord. Beelink rates the default TDP at 45W, with a 65W stable operating point and short-burst peaks up to 115W. That all matches what you&apos;d expect from an i9 mini PC at this price.
      </p>
      <p>
        What positions it differently is the <strong>PCIe 4.0 x8 slot</strong> exposed on the underside of the chassis. Through Beelink&apos;s separate <em>EX Pro</em> docking station, that slot accepts a full-size desktop graphics card with near-zero bandwidth penalty. Most mini PCs at this tier give you an integrated GPU and call it done. The GTi13 lets you stay on integrated for office work, then dock a discrete card when you actually need it. That dual-mode capability is the real point of the product.
      </p>
      <p>
        The 64GB / 2TB configuration on test here lists at <strong>$769 direct from Beelink</strong>, with the 32GB / 1TB sweet-spot trim landing around <strong>$599</strong>. That price tier puts it against the Minisforum NAB9, ASUS NUC 13 Pro, and GMKtec K8 — i9-class mini PCs in roughly the same band. None of them have the GPU dock path.
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
          { feature: 'External GPU support', values: ['PCIe 4.0 x8 via Beelink EX Pro dock (~$159, sold separately)'] },
          { feature: 'Connectivity', values: ['Thunderbolt 4 · USB-C · USB-A · 2× HDMI · DisplayPort · SD card · 2.5GbE × 2 · Wi-Fi 6E · BT 5.2'] },
          { feature: 'Power', values: ['Built-in PSU — single cord, no external brick'] },
          { feature: 'Manufacturer noise claim', values: ['As low as 32 dB (Beelink)'] },
          { feature: 'Color (as tested)', values: ['Frost Silver'] },
          { feature: 'Typical price (as configured)', values: ['$769 direct · 32GB / 1TB sweet-spot trim $599 (verify at publish)'] },
        ]}
      />
      <p className="text-xs text-ink-faint italic mt-2 not-prose">
        Specs cited from Beelink&apos;s product page and reviewer reporting (Neowin, Notebookcheck, Windows Central, igor&apos;sLAB) as of May 2026.
      </p>

      <div className="flex flex-wrap gap-3 not-prose my-6">
        <AffiliateLink asin={ASIN}>Check current price on Amazon</AffiliateLink>
      </div>

      <h2>CPU: good, just not 2025-good</h2>
      <p>
        The i9-13900HK packs 14 cores and 20 threads up to 5.4 GHz, and it chews through everyday productivity, photo and video editing, virtualization, and console emulation without complaint. Single-core performance is genuinely strong — this is still a current-feeling chip in browser tabs, Office, Premiere, and most things that aren&apos;t a sustained multicore workload.
      </p>
      <p>
        But this is a 2023 silicon generation, and the reviewer consensus is blunt about it. <a href="https://www.igorslab.de/en/" target="_blank" rel="noopener">igor&apos;sLAB</a> found the GTi13 Ultra lands only in the &quot;upper midfield&quot; of current mini-PC benchmarks. Basic Tutorials puts it flatly behind AMD&apos;s newer Ryzen 9 mobile parts in multicore tests. The gap doesn&apos;t matter for spreadsheets and Plex; it does matter for video encoding, compile workloads, or multicore-heavy creative work. If that bothers you, Beelink&apos;s nearly-identical successor — the GTi14 Ultra with the newer Core Ultra silicon — is the obvious move. If you don&apos;t care, the GTi13 is meaningfully cheaper than the GTi14.
      </p>

      <h2>The cooling is the quiet flex (literally)</h2>
      <p>
        <strong>Mechanism:</strong> Beelink&apos;s &quot;MSC 2.0&quot; cooler is a bottom-intake vapor-chamber design — the box pulls air up through perforations on the underside, runs it across the chamber, and exhausts through the rear. Vapor chambers spread heat more efficiently than the heat-pipe systems most mini PCs use, which lets the cooler maintain TDP for longer at lower fan speeds. That&apos;s the theory; the test is whether it actually holds up.
      </p>
      <p>
        It does. <a href="https://www.neowin.net/reviews/beelink-gti13-ultra-i9-13900hk-with-ex-docking-station-review-size-matters/" target="_blank" rel="noopener">Neowin</a>&apos;s reviewer reported they couldn&apos;t hear it at all during benchmarks. One tester ran Prime95 plus HandBrake overnight and never broke 88°C, with no meaningful thermal throttling. Measured noise floor under load lands around <strong>32–35 dB</strong> for the 45W chip — well below typical small-form-factor desktop noise, and in the range where it disappears behind ambient room sound. That makes the GTi13 genuinely useful for home offices, bedrooms, and homelab setups. People are running Proxmox clusters of these in part because they don&apos;t announce themselves.
      </p>

      <h2>The real party trick: the EX Pro dock</h2>
      <p>
        Integrated Iris Xe is fine for spreadsheets, browser tabs, and YouTube, and that&apos;s about the end of the list. Anything modern and GPU-bound — current AAA games, GPU-accelerated creative work, demanding emulation at higher resolutions — needs more than the iGPU can deliver.
      </p>
      <p>
        Beelink&apos;s answer is a proprietary <strong>PCIe 4.0 x8 slot</strong> on the bottom of the chassis, and an optional <em>EX Pro</em> docking station that turns it into a home for a full desktop graphics card. This is the part that matters: unlike Thunderbolt eGPU enclosures, which choke at PCIe 4.0 x4 bandwidth and lose 20–30% of GPU performance, the x8 link means <em>near-zero</em> bottleneck. The discrete GPU performs basically as if it were internally mounted in a standard desktop.
      </p>
      <p>
        <a href="https://www.windowscentral.com/hardware/computers-desktops/beelink-gti13-ultra-review" target="_blank" rel="noopener">Windows Central</a> slapped in a Radeon 7600 and watched 3DMark Time Spy rocket from around 2,100 (on the bare iGPU) to roughly 11,000 (with the dock) — RTX 4070 / RTX 3080 territory. That&apos;s the magic. The GTi13 stays a quiet 4-liter productivity box on the desk during the day, then becomes a small-form-factor gaming or workstation rig when you connect the dock.
      </p>
      <p>
        Caveats matter, though: the dock isn&apos;t free (~$159), the GPU it houses is fully exposed (no closed shroud), and that means dust and pet hair land directly on the card. If you have animals or a dusty room, plan on cleaning it. A traditional closed eGPU enclosure isn&apos;t exposed like this. The benefit is much better thermal headroom for the GPU; the cost is maintenance you wouldn&apos;t have inside a normal PC case.
      </p>

      <h2>The fine print</h2>
      <p>
        Things the marketing doesn&apos;t cover:
      </p>
      <ul>
        <li><strong>Internal upgrades are a pain.</strong> igor&apos;sLAB called out the fiddly internal layout — getting at the RAM slots and the second M.2 isn&apos;t friendly compared to most mini PCs in this class. The components Beelink ships are name-brand (Crucial DDR5 in the unit reviewed there), so you may not need to crack it open often, but plan for it if you do.</li>
        <li><strong>SSD write speed is underwhelming.</strong> Reviewer measurements put sequential read around <strong>3,600 MB/s</strong> (fine) but sequential write at only <strong>~1,588 MB/s</strong> — well below what a modern PCIe 4.0 NVMe should deliver. Reads stay snappy; large file copies and write-heavy workloads will feel slower than the platform suggests.</li>
        <li><strong>The dock is a separate purchase.</strong> Roughly $159, and budgeting needs to include the discrete GPU itself plus appropriate cooling considerations. The GTi13 Ultra at the 32GB/1TB tier plus the dock plus a midrange GPU lands around $1,000-1,200 total — competitive with a small-form-factor desktop build, but it&apos;s no longer the &quot;$599 mini PC&quot; the sticker suggests.</li>
        <li><strong>It&apos;s chunky for a &quot;mini&quot; PC.</strong> The 4-liter chassis is honest about its size, but compared to N100-class fanless mini PCs (often under 1 liter), the GTi13 Ultra is noticeably larger. Worth seeing in person if desk footprint matters.</li>
      </ul>

      <h2>How it compares</h2>
      <p>
        At the i9 / 64GB / 2TB tier (~$769 direct), the GTi13 Ultra&apos;s most direct competitors are the <strong>Minisforum NAB9</strong> (i9-12900HK, similar config, no GPU dock support), the <strong>ASUS NUC 13 Pro</strong> (official Intel support, narrower I/O, no expansion path), and the <strong>GMKtec K8</strong> (Ryzen-based at a lower price point). The GTi13&apos;s differentiator across this entire set is the PCIe expansion slot. None of the direct competitors offer an in-house discrete-GPU upgrade path. If you don&apos;t plan to use it, the cheaper competitors deliver comparable CPU performance for less money. If you do plan to use it — even &quot;eventually&quot; — the GTi13 is the only box that&apos;s designed for it.
      </p>

      <h2>Cheaper alternatives from Beelink</h2>
      <p>
        Most readers landing on a $769 i9 mini PC don&apos;t actually need an i9. Two cheaper Beelinks in the same family solve different problems for noticeably less money. Honest framing: these aren&apos;t recommended <em>over</em> the GTi13 Ultra — they&apos;re recommended <em>instead of</em> it, when your workload doesn&apos;t justify the top tier.
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
        Both alternatives carry the same Beelink build quality and Windows 11 pre-installation as the GTi13 Ultra. Prices vary; verify at publish time. Neither has been hands-on tested by {site.name} — recommendations here are based on public specs and the architectures&apos; known performance profiles.
      </p>

      <h2>Who should buy / skip</h2>
      <h3>Worth considering if:</h3>
      <ul>
        <li>You want desktop-class single-thread CPU performance in a 4-liter, silent chassis for a home office or homelab.</li>
        <li>You value the optional discrete-GPU upgrade path even if you don&apos;t buy the dock day one — future-proofing toward real gaming or GPU-accelerated work.</li>
        <li>Your workload mixes productivity, light gaming, and console emulation, where the i9&apos;s strong single-thread matters more than peak multicore.</li>
        <li>You want a mini PC with the power supply built in — one cord instead of the bulky external brick most competitors ship.</li>
      </ul>
      <h3>Look elsewhere if:</h3>
      <ul>
        <li>You&apos;re buying primarily for current AAA gaming and don&apos;t want to commit to the dock + discrete GPU spend. The integrated Iris Xe alone won&apos;t cut it, and the total cost with the dock is closer to a full SFF desktop build.</li>
        <li>Your workload is heavily multicore (large compile jobs, video transcoding, scientific compute). The 2023 i9-13900HK lands in the upper midfield against current AMD parts — the GTi14 Ultra or a Ryzen 9 mini PC will outperform it.</li>
        <li>You want fanless silence — the GTi13 is exceptionally quiet, but it&apos;s not zero. N100-class fanless boxes win on absolute silence.</li>
        <li>Internal upgradeability matters and you plan to swap RAM or SSD often. The fiddly internal layout makes that more annoying than it should be.</li>
      </ul>

      <h2>The Isaac Standard verdict</h2>
      <p>
        <strong>4.2 / 5.</strong> Don&apos;t buy this for the CPU benchmarks — buy it for the silent operation and the PCIe x8 escape hatch. It&apos;s a quiet, compact box that moonlights as a real gaming or workstation rig the moment you bolt on a GPU. Just know you&apos;re starting on slightly older silicon, the dock is a separate purchase, and the dock&apos;s exposed-GPU design means real maintenance if you live with pets or dust. None of that breaks the value proposition for the reader this is built for. The GTi13 Ultra earns the recommendation as a uniquely flexible mini PC — not the fastest, but the most adaptable in its price tier.
      </p>

      <div className="flex flex-wrap gap-3 not-prose mt-6">
        <AffiliateLink asin={ASIN}>Buy the GTi13 Ultra on Amazon →</AffiliateLink>
      </div>

      <Newsletter />

      <FAQ
        items={[
          {
            q: 'Can the Beelink GTi13 Ultra play current AAA games on its own?',
            a: 'Only at significantly reduced settings. The integrated Iris Xe handles older AAA titles, indies, and esports at moderate settings, but current AAA games need either the EX Pro docking station with a discrete GPU attached or a step down in resolution and quality presets. The point of the GTi13 is that it gives you the option — most mini PCs don&apos;t.',
          },
          {
            q: 'What is the EX Pro docking station, and do I need it?',
            a: "The EX Pro is Beelink's separate accessory (~$159) that connects to the GTi13's bottom-mounted PCIe 4.0 x8 slot and accepts a full-size desktop graphics card. It turns the GTi13 into a small-form-factor gaming PC with near-zero bandwidth penalty — much better than Thunderbolt eGPU enclosures. Whether you need it depends on your workload. For productivity, emulation through PS2 era, and light gaming, the integrated GPU is enough. For current AAA gaming or GPU-bound creative work, the dock is the upgrade path.",
          },
          {
            q: "How does the GTi13 Ultra's CPU compare to current Ryzen 9 mobile parts?",
            a: "It lands behind. Reviewer consensus (igor'sLAB, Basic Tutorials) puts the i9-13900HK in the upper midfield against current AMD Ryzen 9 mobile parts in multicore benchmarks. Single-thread is still strong — the GTi13 feels current in everyday workloads. Multicore-heavy tasks (encoding, compile, render) will be faster on a newer-generation chip. If that matters, the GTi14 Ultra with Intel Core Ultra silicon is the natural step up.",
          },
          {
            q: 'How loud is the GTi13 Ultra under load?',
            a: 'Roughly 32-35 dB measured under sustained CPU load — quiet enough that Neowin\'s reviewer reported they couldn\'t hear it during benchmarks. Beelink\'s MSC 2.0 vapor-chamber cooler holds temperatures around 88°C under sustained Prime95 + HandBrake without throttling. For home offices, bedrooms, and homelab setups, it disappears behind ambient room noise.',
          },
          {
            q: 'Does it come with Windows pre-installed?',
            a: 'Yes — Beelink ships the GTi13 Ultra with Windows 11 Pro activated. The unit is also Linux-compatible; most distributions install cleanly given the standard Intel platform. Many homelab users wipe Windows and install Proxmox, TrueNAS, or a standard Linux distribution for server use.',
          },
          {
            q: 'How easy is it to upgrade the RAM or SSD?',
            a: "Less friendly than it should be. igor'sLAB called out the fiddly internal layout — getting at the RAM slots and the second M.2 takes more work than most mini PCs at this tier. The factory-installed components are name-brand (Crucial DDR5 in reviewed units), so you may not need to open it often. Plan for it being a deliberate operation when you do.",
          },
          {
            q: 'How is the SSD performance?',
            a: "Mixed. Sequential read lands around 3,600 MB/s — fine for PCIe 4.0. Sequential write is only around 1,588 MB/s, well below what a current PCIe 4.0 NVMe should deliver. For everyday productivity and gaming the read speed is what matters most, but write-heavy workloads (large file copies, video capture to local storage) will feel slower than the platform should support.",
          },
        ]}
      />

      <p className="text-xs text-ink/50 mt-10">
        Specs cited from Beelink manufacturer listings and reviewer reporting (Neowin, Windows Central, igor&apos;sLAB, Basic Tutorials, Notebookcheck) as of May 2026. Pricing varies by configuration and stock channel — verify at publish time. Daily-use observations based on three months of hands-on use by {site.name}; specific benchmark measurements cited inline from named outside reviewers.
      </p>
    </article>
  );
}
