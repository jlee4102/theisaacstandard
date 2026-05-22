import Image from 'next/image';
import Link from 'next/link';

export default function ReviewCard({
  slug,
  title,
  excerpt,
  rating,
  date,
  category,
  image,
  featured = false,
}: {
  slug: string;
  title: string;
  excerpt: string;
  rating?: number;
  date: string;
  category?: string;
  image?: string;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <Link
        href={`/review/${slug}`}
        className="group block rounded-xl overflow-hidden border border-line bg-card hover:shadow-lift transition-shadow"
      >
        <div className="grid md:grid-cols-5">
          <div className="md:col-span-3 relative aspect-[16/10] md:aspect-auto md:min-h-[320px] overflow-hidden">
            {image ? (
              <Image src={image} alt={title} fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-highlight via-card to-line flex items-center justify-center">
                <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">Cover photo pending</span>
              </div>
            )}
          </div>
          <div className="md:col-span-2 p-6 md:p-8 flex flex-col">
            {category && <div className="eyebrow mb-3">{category}</div>}
            <h2 className="font-serif text-2xl md:text-3xl leading-tight tracking-tight group-hover:text-accent-deep transition">
              {title}
            </h2>
            <p className="text-ink-soft mt-3 text-[0.95rem] leading-relaxed flex-1">{excerpt}</p>
            <div className="mt-5 flex items-center justify-between text-xs text-ink-faint">
              <span className="font-mono">{date}</span>
              {rating !== undefined ? (
                <span className="text-accent-deep font-medium">★ {rating.toFixed(1)}</span>
              ) : (
                <span className="font-mono uppercase tracking-wider text-ink-faint/80">Pending test</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/review/${slug}`}
      className="group block rounded-xl overflow-hidden border border-line bg-card hover:shadow-lift transition-shadow"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {image ? (
          <Image src={image} alt={title} fill sizes="(min-width: 768px) 400px, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-highlight via-card to-line flex items-center justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">Cover photo pending</span>
          </div>
        )}
      </div>
      <div className="p-5">
        {category && <div className="eyebrow mb-2 text-[0.66rem]">{category}</div>}
        <h3 className="font-serif text-lg leading-snug group-hover:text-accent-deep transition">{title}</h3>
        <p className="text-ink-soft mt-2 text-sm leading-relaxed line-clamp-2">{excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-ink-faint">
          <span className="font-mono">{date}</span>
          {rating !== undefined ? (
            <span className="text-accent-deep font-medium">★ {rating.toFixed(1)}</span>
          ) : (
            <span className="font-mono uppercase tracking-wider text-ink-faint/80">Pending test</span>
          )}
        </div>
      </div>
    </Link>
  );
}
