import { reviews, categories } from '@/lib/site';
import ReviewsBrowser from '@/components/ReviewsBrowser';

export const metadata = {
  title: 'All Reviews',
  description: 'Every unit The Isaac Standard has tested — filter by category, sort by score.',
};

// Instrument reviews index: title block explains the composite, then the filter bar + rows
// (all inside ReviewsBrowser — filtering is client state mirrored to the URL).
export default function Page() {
  return (
    <section>
      <div className="px-5 md:px-9 py-10 border-b border-rule">
        <div className="eyebrow mb-3">Every unit</div>
        <h1 className="text-[32px] md:text-[46px] font-bold leading-[1.05] tracking-[-0.03em] max-w-[22ch]">
          Every unit we&apos;ve tested
        </h1>
        <p className="mt-4 text-[15px] leading-[1.55] text-text-muted max-w-[70ch]">
          The score is a composite of build, performance, endurance, software and value — the same
          rubric on every unit, weighted per category. The verdict word is derived from the score,
          never hand-picked.
        </p>
      </div>
      <ReviewsBrowser reviews={reviews} categories={categories} />
    </section>
  );
}
