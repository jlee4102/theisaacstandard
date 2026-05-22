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
