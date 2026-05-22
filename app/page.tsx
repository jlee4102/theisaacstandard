import { categories, reviews } from '@/lib/site';
import Hero from '@/components/Hero';
import ReviewCard from '@/components/ReviewCard';
import CategoryCard from '@/components/CategoryCard';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  const reviewsByCategory: Record<string, number> = {};
  reviews.forEach((r) => {
    reviewsByCategory[r.category] = (reviewsByCategory[r.category] || 0) + 1;
  });

  const [featured, ...rest] = reviews;
  const categoryName = (slug: string) => categories.find((c) => c.slug === slug)?.name || slug;

  return (
    <>
      <Hero />

      <section id="latest" className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="eyebrow mb-2">Latest</div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Most recent review</h2>
          </div>
        </div>
        {featured && (
          <ReviewCard
            slug={featured.slug}
            title={featured.title}
            excerpt={featured.excerpt}
            date={featured.date}
            rating={featured.rating}
            category={categoryName(featured.category)}
            featured
          />
        )}

        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {rest.map((r) => (
              <ReviewCard
                key={r.slug}
                slug={r.slug}
                title={r.title}
                excerpt={r.excerpt}
                date={r.date}
                rating={r.rating}
                category={categoryName(r.category)}
              />
            ))}
          </div>
        )}
      </section>

      <section className="bg-card border-y border-line">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <div className="eyebrow mb-2">The Standard</div>
              <h2 className="font-serif text-3xl tracking-tight">How we test</h2>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-serif text-2xl text-accent-deep mb-1">01</div>
                <p className="font-medium text-ink mb-1">We buy it</p>
                <p className="text-ink-soft">No paid placements. No retailer-supplied units used without explicit disclosure.</p>
              </div>
              <div>
                <div className="font-serif text-2xl text-accent-deep mb-1">02</div>
                <p className="font-medium text-ink mb-1">We use it</p>
                <p className="text-ink-soft">A week minimum of real-conditions testing, with measured numbers — not vibes.</p>
              </div>
              <div>
                <div className="font-serif text-2xl text-accent-deep mb-1">03</div>
                <p className="font-medium text-ink mb-1">We say it</p>
                <p className="text-ink-soft">If it doesn&apos;t earn the recommendation, we say so. Even when it pays us not to.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="mb-8">
          <div className="eyebrow mb-2">Categories</div>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">What we cover</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <CategoryCard
              key={c.slug}
              slug={c.slug}
              name={c.name}
              blurb={c.blurb}
              count={reviewsByCategory[c.slug] || 0}
            />
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 md:px-10 pb-20">
        <Newsletter />
      </section>
    </>
  );
}
