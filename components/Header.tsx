import Link from 'next/link';
import Logo from '@/components/Logo';

// Instrument header: 20px × 36px, bottom rule, mono nav muted → amber on hover.
// Three destinations + the trust page — the category-per-link nav that wrapped to a ragged
// second line stays dead (it was structurally unbounded).
const NAV = [
  { href: '/reviews', label: 'Reviews' },
  { href: '/compare', label: 'Compare' },
  { href: '/how-we-test', label: 'Test lab' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  return (
    <header className="border-b border-rule bg-bg relative z-10">
      <div className="px-5 md:px-9 py-5 flex items-center justify-between gap-4">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="flex gap-5 md:gap-7">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="py-2.5 -my-2.5 inline-flex items-center font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted hover:text-accent transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
