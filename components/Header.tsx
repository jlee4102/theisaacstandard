import Link from 'next/link';
import { categories, reviews, site } from '@/lib/site';

export default function Header() {
  // Only show categories that have at least one review — hides "empty" sections
  const activeCategorySlugs = new Set(reviews.map((r) => r.category));
  const activeCategories = categories.filter((c) => activeCategorySlugs.has(c.slug));

  return (
    <header className="border-b border-line bg-paper relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <Link href="/" className="group">
          <div className="eyebrow mb-1">The Standard</div>
          <div className="font-serif text-3xl md:text-4xl tracking-tight leading-none group-hover:text-accent-deep transition">
            Isaac <em className="text-accent not-italic font-medium">Standard</em>
          </div>
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-soft">
          {activeCategories.map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}`} className="hover:text-accent-deep transition">
              {c.name}
            </Link>
          ))}
          <Link href="/about" className="hover:text-accent-deep transition">About</Link>
        </nav>
      </div>
    </header>
  );
}
