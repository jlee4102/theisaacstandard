import Link from 'next/link';
import { site, socials } from '@/lib/site';
import { LogoMark } from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="border-t border-line mt-24 bg-card/40 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 text-sm text-ink-soft space-y-5">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <LogoMark size={48} className="mb-3" />
            <p className="text-ink font-serif text-lg">Honest gear, held to a higher bar.</p>
            <div className="mt-3 flex gap-3 text-xs font-mono uppercase tracking-wider">
              <a href={socials.x.url} target="_blank" rel="noopener" className="text-ink-soft hover:text-accent-deep">
                X / {socials.x.handle}
              </a>
            </div>
          </div>
          <div>
            <p className="font-medium text-ink mb-2">Site</p>
            <nav className="flex flex-col gap-1">
              <Link href="/about" className="hover:text-accent-deep">About</Link>
              <Link href="/how-we-test" className="hover:text-accent-deep">How we test</Link>
              <Link href="/contact" className="hover:text-accent-deep">Contact</Link>
              <Link href="/authors/isaac" className="hover:text-accent-deep">Author</Link>
              <Link href="/press.html" className="hover:text-accent-deep">Press kit</Link>
            </nav>
          </div>
          <div>
            <p className="font-medium text-ink mb-2">Legal</p>
            <nav className="flex flex-col gap-1">
              <Link href="/disclosure" className="hover:text-accent-deep">Affiliate Disclosure</Link>
              <Link href="/privacy" className="hover:text-accent-deep">Privacy</Link>
              <Link href="/terms" className="hover:text-accent-deep">Terms</Link>
            </nav>
          </div>
        </div>
        <p className="border-t border-line pt-5 text-xs">
          As an Amazon Associate, {site.name} earns from qualifying purchases. © {new Date().getFullYear()} {site.name}.
        </p>
      </div>
    </footer>
  );
}
