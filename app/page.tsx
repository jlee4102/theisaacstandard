import Link from 'next/link';
import { categories, reviews, site } from '@/lib/site';
import ReviewCard from '@/components/ReviewCard';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-10">
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight">{site.tagline}</h1>
        <p className="text-ink/70 mt-4 max-w-2xl mx-auto">
          We buy it, test it, and tell you whether it's worth your money. No sponsored fluff.
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl mb-5">Latest Reviews</h2>
        <div className="grid gap-4">
          {reviews.map((r) => <ReviewCard key={r.slug} {...r} />)}
        </div>
      </section>

      <Newsletter />

      <section>
        <h2 className="font-serif text-2xl mb-5">Browse by Category</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {categories.map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}`} className="border border-ink/10 rounded-lg p-5 hover:border-accent transition">
              <h3 className="font-serif text-lg">{c.name}</h3>
              <p className="text-ink/70 text-sm mt-1">{c.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
