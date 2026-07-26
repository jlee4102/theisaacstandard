import Link from 'next/link';

import Logo from '@/components/Logo';

// VISUAL AUDIT (2026-07-26, seen in a browser): the bar wrapped to a ragged second line at normal
// desktop width, with "Comparisons" and "About" orphaned below and aligned to nothing. The cause
// was structural, not cosmetic — the nav rendered EVERY category, so it was an unbounded list in a
// fixed-width bar and was guaranteed to break again with the next category added. Top level is now
// three stable destinations; categories are one click away via /reviews, the homepage cards, and
// breadcrumbs, and they remain in the sitemap. Adding a category can no longer break the header.
export default function Header() {
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
        <nav className="flex gap-x-7 text-sm text-ink-soft">
          <Link href="/reviews" className="py-2.5 -my-2.5 inline-flex items-center hover:text-accent-deep transition">Reviews</Link>
          <Link href="/compare" className="py-2.5 -my-2.5 inline-flex items-center hover:text-accent-deep transition">Comparisons</Link>
          <Link href="/about" className="py-2.5 -my-2.5 inline-flex items-center hover:text-accent-deep transition">About</Link>
        </nav>
      </div>
    </header>
  );
}
