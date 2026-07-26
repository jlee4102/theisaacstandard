import { reviews, categories } from '@/lib/site';
import ReviewCard from '@/components/ReviewCard';

// Instrument "Next in <category>": a rule-divided row list (cards are gone from the system).
// Same-category first, newest fallback, so readers go deeper and the reviews cross-link.
export default function RelatedReviews({ slug, category }: { slug: string; category: string }) {
  const sameCat = reviews.filter((r) => r.slug !== slug && r.category === category);
  const pool = (sameCat.length ? sameCat : reviews.filter((r) => r.slug !== slug)).slice(0, 3);
  if (pool.length === 0) return null;
  const catName = (s: string) => categories.find((c) => c.slug === s)?.name || s;
  const label = sameCat.length ? `Next in ${catName(category)}` : 'Next on the bench';
  return (
    <section className="not-prose mt-16">
      <div className="label-dim mb-4">{label}</div>
      <div className="border border-rule border-b-0">
        {pool.map((r) => (
          <ReviewCard
            key={r.slug}
            slug={r.slug}
            title={r.title}
            excerpt={r.excerpt}
            date={r.date}
            rating={r.rating}
            category={catName(r.category)}
          />
        ))}
      </div>
    </section>
  );
}
