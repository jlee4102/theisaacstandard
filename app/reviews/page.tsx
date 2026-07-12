import { reviews, categories } from '@/lib/site';
import ReviewsBrowser from '@/components/ReviewsBrowser';

export const metadata = {
  title: 'All Reviews',
  description: 'Browse and search every honest, hands-on review from The Isaac Standard.',
};

export default function Page() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-12">
      <div className="eyebrow mb-2">Every review</div>
      <h1 className="font-serif text-3xl md:text-4xl tracking-tight mb-8">All reviews</h1>
      <ReviewsBrowser reviews={reviews} categories={categories} />
    </section>
  );
}
