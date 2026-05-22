import Link from 'next/link';

export default function ReviewCard({
  slug, title, excerpt, rating, date,
}: { slug: string; title: string; excerpt: string; rating?: number; date: string }) {
  return (
    <Link href={`/review/${slug}`} className="block border border-ink/10 rounded-lg p-5 hover:border-accent transition">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-xl">{title}</h3>
        {rating !== undefined && <span className="text-accent font-medium shrink-0">★ {rating.toFixed(1)}</span>}
      </div>
      <p className="text-ink/70 mt-2 text-sm">{excerpt}</p>
      <p className="text-ink/40 text-xs mt-3">{date}</p>
    </Link>
  );
}
