import Link from 'next/link';

// Instrument meta row: mono, uppercase, literal. ISO date (the system's date format everywhere).
export default function Byline({ author = 'Isaac', authorSlug = 'isaac', date, readTime }: { author?: string; authorSlug?: string; date: string; readTime?: string }) {
  return (
    <p className="not-prose font-mono text-[11px] uppercase tracking-[0.12em] text-text-dim">
      By{' '}
      <Link href={`/authors/${authorSlug}`} className="text-text-muted hover:text-accent transition-colors">
        {author}
      </Link>
      {' · '}
      <time dateTime={date}>{date}</time>
      {readTime && ` · ${readTime.replace('read', '').trim()}`}
    </p>
  );
}
