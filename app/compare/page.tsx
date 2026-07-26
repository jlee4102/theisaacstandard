import Link from 'next/link';
import fs from 'node:fs';
import path from 'node:path';

// ORPHAN FIX (2026-07-26): comparison pages were being published with NOTHING linking to them and
// no sitemap entry — so neither a reader nor Google could find the site's highest-purchase-intent
// format ("X vs Y" is what someone searches right before buying). This hub lists every comparison
// and is itself linked from the nav, so each new one published by the autonomous lane is reachable
// the moment it deploys. Read from the filesystem at build time (these are committed files), so
// there is no registry to keep in sync.
export const metadata = {
  title: 'Comparisons',
  description: 'Head-to-head comparisons — which one should you actually buy, and why.',
};

type Cmp = { slug: string; title: string };

function comparisons(): Cmp[] {
  try {
    const dir = path.join(process.cwd(), 'app', 'compare');
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith('[') && !d.name.startsWith('_'))
      .map((d) => {
        // Prefer the page's real <h1>/title; fall back to a readable form of the slug.
        let title = d.name.replace(/-/g, ' ').replace(/\bvs\b/i, 'vs');
        try {
          const src = fs.readFileSync(path.join(dir, d.name, 'page.tsx'), 'utf8');
          const m = src.match(/title:\s*'([^']+)'/);
          if (m) title = m[1];
        } catch {
          /* keep the slug-derived title */
        }
        return { slug: d.name, title };
      })
      .sort((a, b) => a.title.localeCompare(b.title));
  } catch {
    return [];
  }
}

export default function Page() {
  const list = comparisons();
  // Instrument: rule-divided rows, whole row is the link.
  return (
    <section>
      <div className="px-5 md:px-9 py-10 border-b border-rule">
        <div className="eyebrow mb-3">Head to head</div>
        <h1 className="text-[32px] md:text-[46px] font-bold leading-[1.05] tracking-[-0.03em]">
          Comparisons
        </h1>
        <p className="mt-4 text-[15px] leading-[1.55] text-text-muted max-w-[70ch]">
          Two units, one call. Each comparison is built from our own full reviews of both
          products — same testing, same standard, no fence-sitting.
        </p>
      </div>
      {list.length === 0 ? (
        <p className="px-5 md:px-9 py-10 font-mono text-[11px] uppercase tracking-[0.14em] text-text-dim">
          Comparisons coming soon.
        </p>
      ) : (
        <div>
          {list.map((c) => (
            <Link
              key={c.slug}
              href={`/compare/${c.slug}`}
              className="group flex items-center justify-between gap-6 px-5 md:px-9 py-5 border-b border-rule hover:bg-raised transition-colors"
            >
              <h2 className="text-[17px] font-bold tracking-[-0.01em] leading-snug group-hover:text-accent transition-colors">
                {c.title}
              </h2>
              <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-info">
                Read →
              </span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
