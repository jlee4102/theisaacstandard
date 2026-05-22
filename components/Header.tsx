import Link from 'next/link';
import { categories, site } from '@/lib/site';

export default function Header() {
  return (
    <header className="border-b border-ink/10 bg-paper">
      <div className="max-w-4xl mx-auto px-4 py-5 flex flex-col gap-3">
        <Link href="/" className="font-serif text-2xl tracking-tight">
          {site.name}
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink/70">
          {categories.map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}`} className="hover:text-accent">
              {c.name}
            </Link>
          ))}
          <Link href="/about" className="hover:text-accent ml-auto">About</Link>
        </nav>
      </div>
    </header>
  );
}
