import Image from 'next/image';
import Link from 'next/link';

// VISUAL AUDIT (2026-07-26, looked at in a real browser): these cards used hardcoded Unsplash
// stock that did not match the category — "Mini PCs" showed a graphics card, "Outdoor Robots" a
// CAD schematic, and any category missing from the map (Desk Gear, Home Gym) fell back to the
// headphones photo. Four of seven cards illustrated the wrong thing, which reads as auto-generated.
// The site already owns a correct image for every category: the newest review in it. Using that
// removes the map, the mismatch, and an external image host in one go.
export default function CategoryCard({
  slug,
  name,
  blurb,
  count,
  image,
}: {
  slug: string;
  name: string;
  blurb: string;
  count: number;
  image?: string;
}) {
  if (!image) return null;   // a category with no review has no honest image — don't render a card
  return (
    <Link
      href={`/category/${slug}`}
      className="group relative block rounded-xl overflow-hidden border border-line bg-card hover:shadow-lift transition-shadow"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* The old stock art was dark, so a light scrim held the white label. Real product shots are
            mostly white-background, so the label needs a stronger, deeper scrim to stay legible. */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/5" />
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
