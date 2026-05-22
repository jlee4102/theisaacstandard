import Image from 'next/image';
import Link from 'next/link';

const categoryImages: Record<string, string> = {
  'budget-audio': 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&q=80&auto=format&fit=crop',
  'smart-home': 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80&auto=format&fit=crop',
  'trackers': 'https://images.unsplash.com/photo-1633934542430-0905ccb5f050?w=800&q=80&auto=format&fit=crop',
  'mini-pcs': 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&q=80&auto=format&fit=crop',
  'outdoor-robots': 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80&auto=format&fit=crop',
};

export default function CategoryCard({
  slug,
  name,
  blurb,
  count,
}: {
  slug: string;
  name: string;
  blurb: string;
  count: number;
}) {
  const isEmpty = count === 0;
  return (
    <Link
      href={`/category/${slug}`}
      className="group relative block rounded-xl overflow-hidden border border-line bg-card hover:shadow-lift transition-shadow"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={categoryImages[slug] || categoryImages['budget-audio']}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${isEmpty ? 'grayscale opacity-60' : ''}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        {isEmpty && (
          <span className="absolute top-3 right-3 bg-paper/95 text-ink-soft text-[0.62rem] font-mono uppercase tracking-widest px-2 py-1 rounded">
            Coming soon
          </span>
        )}
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="font-serif text-xl text-paper drop-shadow-md">{name}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm text-ink-soft leading-relaxed">{blurb}</p>
        <p className="mt-3 text-xs font-mono uppercase tracking-wider text-accent-deep">
          {count === 0 ? 'No reviews yet' : `${count} review${count > 1 ? 's' : ''}`}
        </p>
      </div>
    </Link>
  );
}
