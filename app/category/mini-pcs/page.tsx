import Link from 'next/link';
import Image from 'next/image';
import { categories, reviews } from '@/lib/site';
import ReviewCard from '@/components/ReviewCard';

const SLUG = 'mini-pcs';
const cat = categories.find((c) => c.slug === SLUG)!;
export const metadata = { title: cat.name, description: cat.blurb };
const HERO_IMAGE = 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=1600&q=80&auto=format&fit=crop';

export default function Page() {
  const list = reviews.filter((r) => r.category === SLUG);
  return (
    <>
      <header className="relative h-56 md:h-72 overflow-hidden border-b border-line">
        <Image src={HERO_IMAGE} alt={cat.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 w-full">
            <div className="eyebrow text-paper/80 mb-1">Category</div>
            <h1 className="font-serif text-3xl md:text-5xl text-paper tracking-tight">{cat.name}</h1>
            <p className="text-paper/85 mt-2 max-w-2xl text-sm md:text-base">{cat.blurb}</p>
          </div>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-12">
        {list.length === 0 ? (
          <p className="text-ink-faint italic">Reviews coming soon.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((r) => (
              <ReviewCard key={r.slug} {...r} category={cat.name} />
            ))}
          </div>
        )}
              {list.length >= 2 && (
          <div className="mt-12 rounded-xl border border-line bg-card p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="eyebrow mb-1">Buying guide</div>
              <p className="font-serif text-xl">Our ranked pick of the best {cat.name.toLowerCase()}</p>
            </div>
            <Link href={`/best/${SLUG}`} className="shrink-0 bg-ink text-paper px-5 py-3 rounded-md font-medium hover:bg-accent-deep transition">See the ranking →</Link>
          </div>
        )}
      </section>
    </>
  );
}
