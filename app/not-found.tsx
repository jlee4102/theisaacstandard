import Link from 'next/link';
import { LogoMark } from '@/components/Logo';
import { site } from '@/lib/site';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-10 py-20 text-center">
      <LogoMark size={64} className="mx-auto mb-6" />
      <div className="eyebrow mb-2">404</div>
      <h1 className="font-serif text-4xl md:text-5xl tracking-tight">This page isn&apos;t in our notebook.</h1>
      <p className="text-ink-soft mt-4 text-lg leading-relaxed">
        The page you tried to open doesn&apos;t exist — maybe a typo, maybe a moved review,
        maybe a draft that hasn&apos;t shipped yet.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="bg-ink text-paper px-6 py-3 rounded-md font-medium hover:bg-accent-deep transition"
        >
          Back to the homepage
        </Link>
        <Link
          href="/category/budget-audio"
          className="border border-ink/20 px-6 py-3 rounded-md font-medium hover:border-accent-deep hover:text-accent-deep transition"
        >
          Browse reviews
        </Link>
      </div>
      <p className="text-xs text-ink-faint mt-12">
        Think this page should exist? Let us know — hello@theisaacstandard.com
      </p>
    </div>
  );
}
