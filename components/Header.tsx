import Link from 'next/link';
import { categories, reviews } from '@/lib/site';
import Logo from '@/components/Logo';

export default function Header() {
  const activeCategorySlugs = new Set(reviews.map((r) => r.category));
  const activeCategories = categories.filter((c) => activeCategorySlugs.has(c.slug));

  return (
    <header className="border-b border-line bg-paper relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Link href="/" className="group">
          <Logo markSize={44} />
        </Link>
        {/* UX AUDIT P2 (2026-07-26): every nav link measured 20px tall on a 375px viewport — below
            both Apple's and Google's 44px minimum, so the PRIMARY navigation was a mis-tap risk on
            the device most shoppers arrive on. `py-2.5 -my-2.5` grows the touch area to ~44px
            without changing the visual rhythm of the bar. */}
        <nav className="flex flex-wrap gap-x-5 gap-y-0 text-sm text-ink-soft">
          {activeCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="py-2.5 -my-2.5 inline-flex items-center hover:text-accent-deep transition"
            >
              {c.name}
            </Link>
          ))}
          <Link href="/reviews" className="py-2.5 -my-2.5 inline-flex items-center hover:text-accent-deep transition">All reviews</Link>
          <Link href="/compare" className="py-2.5 -my-2.5 inline-flex items-center hover:text-accent-deep transition">Comparisons</Link>
          <Link href="/about" className="py-2.5 -my-2.5 inline-flex items-center hover:text-accent-deep transition">About</Link>
        </nav>
      </div>
    </header>
  );
}
