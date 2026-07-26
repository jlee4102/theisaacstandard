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
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-12">
      <div className="eyebrow mb-2">Head to head</div>
      <h1 className="font-serif text-3xl md:text-4xl tracking-tight mb-3">Comparisons</h1>
      <p className="text-ink-soft mb-8 max-w-2xl">
        Two products, one verdict. Each comparison is built from our own full reviews of both
        products — same testing, same standard, no fence-sitting.
      </p>
      {list.length === 0 ? (
        <p className="text-ink-faint italic">Comparisons coming soon.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          {list.map((c) => (
            <Link
              key={c.slug}
              href={`/compare/${c.slug}`}
              className="group block rounded-xl border border-line bg-card p-6 hover:shadow-lift transition-shadow"
            >
              <h2 className="font-serif text-xl leading-snug group-hover:text-accent-deep transition">
                {c.title}
              </h2>
              <span className="text-sm text-ink-faint mt-2 inline-block">Read the comparison →</span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
