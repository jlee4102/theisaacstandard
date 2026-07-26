import Link from 'next/link';
import { site, socials } from '@/lib/site';

// Instrument footer: one 10px mono strip, top rule, copyright left / legal right.
export default function Footer() {
  return (
    <footer className="border-t border-rule mt-20">
      <div className="px-5 md:px-9 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-text-dim">
        <p>
          © {new Date().getFullYear()} {site.name} · As an Amazon Associate we earn from qualifying purchases
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
          <Link href="/how-we-test" className="hover:text-accent transition-colors">Test lab</Link>
          <Link href="/disclosure" className="hover:text-accent transition-colors">Affiliate disclosure</Link>
          <Link href="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-accent transition-colors">Terms</Link>
          <a href={socials.x.url} target="_blank" rel="noopener" className="hover:text-accent transition-colors">
            X
          </a>
        </nav>
      </div>
    </footer>
  );
}
