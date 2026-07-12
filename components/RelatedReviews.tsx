import { reviews, categories } from '@/lib/site';
import ReviewCard from '@/components/ReviewCard';

// Internal linking at the end of every review: same-category reviews first (falls back to newest),
// so readers go deeper and search engines see the reviews cross-link.
export default function RelatedReviews({ slug, category }: { slug: string; category: string }) {
  const sameCat = reviews.filter((r) => r.slug !== slug && r.category === category);
  const pool = (sameCat.length ? sameCat : reviews.filter((r) => r.slug !== slug)).slice(0, 3);
  if (pool.length === 0) return null;
  const catName = (s: string) => categories.find((c) => c.slug === s)?.name || s;
  return (
    <section className="not-prose mt-16 border-t border-line pt-10">
      <div className="eyebrow mb-6">Keep reading</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pool.map((r) => (
          <ReviewCard
            key={r.slug}
            slug={r.slug}
            title={r.title}
            excerpt={r.excerpt}
            date={r.date}
            rating={r.rating}
            category={catName(r.category)}
            image={(r as { image?: string }).image}
          />
        ))}
      </div>
    </section>
  );
}
