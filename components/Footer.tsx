import Link from 'next/link';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 mt-16">
      <div className="max-w-4xl mx-auto px-4 py-8 text-sm text-ink/70 space-y-4">
        <p>
          <strong>Affiliate disclosure:</strong> As an Amazon Associate, {site.name} earns from qualifying purchases.
          We only recommend products we'd buy ourselves. <Link href="/disclosure" className="underline">Full disclosure</Link>.
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/about" className="hover:text-accent">About</Link>
          <Link href="/contact" className="hover:text-accent">Contact</Link>
          <Link href="/disclosure" className="hover:text-accent">Affiliate Disclosure</Link>
          <Link href="/privacy" className="hover:text-accent">Privacy</Link>
          <Link href="/terms" className="hover:text-accent">Terms</Link>
        </nav>
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
