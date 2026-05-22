import Link from 'next/link';

export default function Byline({ author = 'Isaac', authorSlug = 'isaac', date, readTime }: { author?: string; authorSlug?: string; date: string; readTime?: string }) {
  return (
    <p className="text-ink/50 text-sm not-prose">
      By <Link href={`/authors/${authorSlug}`} className="text-ink/80 hover:text-accent underline underline-offset-2">{author}</Link>
      {' · '}
      <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
      {readTime && ` · ${readTime}`}
    </p>
  );
}
