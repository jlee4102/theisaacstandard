'use client';

import { useState, useMemo } from 'react';
import ReviewCard from '@/components/ReviewCard';

type Review = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  rating?: number;
  image?: string;
};
type Category = { slug: string; name: string };

// Client-side search + category filter over the static review list — no backend, instant.
export default function ReviewsBrowser({
  reviews,
  categories,
}: {
  reviews: Review[];
  categories: Category[];
}) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('all');
  const catName = (s: string) => categories.find((c) => c.slug === s)?.name || s;
  const activeCats = categories.filter((c) => reviews.some((r) => r.category === c.slug));

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return reviews.filter((r) => {
      if (cat !== 'all' && r.category !== cat) return false;
      if (needle && !`${r.title} ${r.excerpt}`.toLowerCase().includes(needle)) return false;
      return true;
    });
  }, [q, cat, reviews]);

  const chip = (active: boolean) =>
    `px-3 py-1.5 rounded-full text-sm border transition ${
      active
        ? 'bg-ink text-paper border-ink'
        : 'bg-card text-ink-soft border-line hover:border-accent-deep hover:text-accent-deep'
    }`;

  return (
    <>
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search reviews…"
        aria-label="Search reviews"
        className="w-full rounded-lg border border-line bg-card px-4 py-3 text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent-deep transition mb-4"
      />
      <div className="flex flex-wrap gap-2 mb-8">
        <button onClick={() => setCat('all')} className={chip(cat === 'all')}>
          All
        </button>
        {activeCats.map((c) => (
          <button key={c.slug} onClick={() => setCat(c.slug)} className={chip(cat === c.slug)}>
            {c.name}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-ink-faint italic py-12 text-center">No reviews match “{q}”.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r) => (
            <ReviewCard
              key={r.slug}
              slug={r.slug}
              title={r.title}
              excerpt={r.excerpt}
              date={r.date}
              rating={r.rating}
              category={catName(r.category)}
              image={r.image}
            />
          ))}
        </div>
      )}
    </>
  );
}
