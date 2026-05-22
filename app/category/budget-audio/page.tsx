import { categories, reviews } from '@/lib/site';
import ReviewCard from '@/components/ReviewCard';

const SLUG = 'budget-audio';
const cat = categories.find((c) => c.slug === SLUG)!;
export const metadata = { title: cat.name, description: cat.blurb };

export default function Page() {
  const list = reviews.filter((r) => r.category === SLUG);
  return (
    <div>
      <h1 className="font-serif text-3xl">{cat.name}</h1>
      <p className="text-ink/70 mt-2">{cat.blurb}</p>
      <div className="grid gap-4 mt-8">
        {list.length === 0 ? <p className="text-ink/50">Reviews coming soon.</p> : list.map((r) => <ReviewCard key={r.slug} {...r} />)}
      </div>
    </div>
  );
}
