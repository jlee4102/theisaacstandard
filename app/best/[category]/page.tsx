import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, reviews } from '@/lib/site';
import StarRating from '@/components/StarRating';

// "Best X" roundup — the top affiliate traffic format. One dynamic route generates a ranked
// roundup per category from the existing reviews (sorted by rating). No per-roundup files.
const YEAR = 2026;

// Only categories with at least two reviews make a real roundup.
function roundupCategories() {
  return categories.filter((c) => reviews.filter((r) => r.category === c.slug).length >= 2);
}

export function generateStaticParams() {
  return roundupCategories().map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) return {};
  return {
    title: `Best ${cat.name} (${YEAR}): Tested & Ranked`,
    description: `Our honest, hands-on ranking of the best ${cat.name.toLowerCase()} we've tested — with the trade-offs nobody else mentions.`,
  };
}

export default function Page({ params }: { params: { category: string } }) {
  const cat = categories.find((c) => c.slug === params.category);
  if (!cat) return notFound();
  const ranked = reviews
    .filter((r) => r.category === cat.slug)
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
  if (ranked.length < 2) return notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Best ${cat.name} (${YEAR})`,
    itemListElement: ranked.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `/review/${r.slug}`,
      name: r.title,
    })),
  };

  return (
    <article className="max-w-3xl mx-auto px-6 md:px-10 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="text-xs text-ink-faint mb-4">
        <Link href="/" className="hover:text-accent-deep transition">Home</Link>
        <span className="text-line mx-1.5">›</span>
        <Link href={`/category/${cat.slug}`} className="hover:text-accent-deep transition">{cat.name}</Link>
        <span className="text-line mx-1.5">›</span>
        <span className="text-ink-soft">Best of</span>
      </nav>

      <div className="eyebrow mb-2">Buying guide · {YEAR}</div>
      <h1 className="font-serif text-3xl md:text-4xl tracking-tight">Best {cat.name}</h1>
      <p className="text-lg text-ink-soft mt-3 leading-relaxed">
        Every pick below is one we bought and tested — ranked honestly, trade-offs and all.
        {cat.blurb ? ` ${cat.blurb}` : ''}
      </p>

      <ol className="mt-10 space-y-6 list-none pl-0">
        {ranked.map((r, i) => (
          <li
            key={r.slug}
            className="relative rounded-xl border border-line bg-card overflow-hidden hover:shadow-lift transition-shadow"
          >
            {i === 0 && (
              <div className="absolute top-0 left-0 z-10 bg-accent text-paper text-xs font-medium px-3 py-1 rounded-br-lg">
                Top pick
              </div>
            )}
            <div className="grid sm:grid-cols-3">
              <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-[160px] bg-highlight">
                {(r as { image?: string }).image ? (
                  <Image
                    src={(r as { image?: string }).image as string}
                    alt={r.title}
                    fill
                    sizes="(min-width: 640px) 220px, 100vw"
                    className="object-cover"
                  />
                ) : null}
              </div>
              <div className="sm:col-span-2 p-5">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-serif text-2xl text-ink-faint">#{i + 1}</span>
                  <StarRating rating={r.rating ?? 0} className="text-base" />
                  <span className="text-accent-deep text-sm font-medium">{(r.rating ?? 0).toFixed(1)}</span>
                </div>
                <h2 className="font-serif text-xl leading-snug">
                  <Link href={`/review/${r.slug}`} className="hover:text-accent-deep transition">
                    {r.title}
                  </Link>
                </h2>
                <p className="text-ink-soft text-sm mt-2 leading-relaxed">{r.excerpt}</p>
                <Link
                  href={`/review/${r.slug}`}
                  className="inline-block mt-4 text-sm font-medium text-accent-deep hover:text-accent transition"
                >
                  Read the full review →
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}
