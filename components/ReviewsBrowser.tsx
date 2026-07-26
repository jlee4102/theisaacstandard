'use client';

import { useState, useMemo, useEffect } from 'react';
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

// Instrument index browser: category chips (single-select incl. All) + NEWEST / HIGHEST SCORE
// sort + rule-divided rows + the honesty footer line. State is local, mirrored to ?category= and
// ?sort= so filtered views are shareable; initial state reads the URL.
export default function ReviewsBrowser({
  reviews,
  categories,
}: {
  reviews: Review[];
  categories: Category[];
}) {
  const [cat, setCat] = useState('all');
  const [sort, setSort] = useState<'date' | 'score'>('date');
  const catName = (s: string) => categories.find((c) => c.slug === s)?.name || s;
  const activeCats = categories.filter((c) => reviews.some((r) => r.category === c.slug));

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const c = p.get('category');
    if (c && (c === 'all' || categories.some((x) => x.slug === c))) setCat(c);
    if (p.get('sort') === 'score') setSort('score');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const p = new URLSearchParams();
    if (cat !== 'all') p.set('category', cat);
    if (sort !== 'date') p.set('sort', sort);
    const qs = p.toString();
    window.history.replaceState(null, '', qs ? `?${qs}` : window.location.pathname);
  }, [cat, sort]);

  const filtered = useMemo(() => {
    const list = reviews.filter((r) => cat === 'all' || r.category === cat);
    return [...list].sort((a, b) =>
      sort === 'score' ? (b.rating ?? 0) - (a.rating ?? 0) : b.date.localeCompare(a.date),
    );
  }, [cat, sort, reviews]);

  const chip = (active: boolean) =>
    `px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] border transition-colors ${
      active
        ? 'bg-accent border-accent text-bg'
        : 'border-rule-strong text-text-secondary hover:border-accent hover:text-accent'
    }`;

  return (
    <div>
      {/* Filter bar */}
      <div className="bg-surface border-b border-rule px-5 md:px-9 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Filter by category">
          <button className={chip(cat === 'all')} onClick={() => setCat('all')} role="radio" aria-checked={cat === 'all'}>
            All
          </button>
          {activeCats.map((c) => (
            <button
              key={c.slug}
              className={chip(cat === c.slug)}
              onClick={() => setCat(c.slug)}
              role="radio"
              aria-checked={cat === c.slug}
            >
              {c.name}
            </button>
          ))}
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.14em]">
          <span className="text-text-dim mr-3">Sort:</span>
          <button
            onClick={() => setSort('date')}
            className={`mr-3 transition-colors ${sort === 'date' ? 'text-accent' : 'text-text-dim hover:text-text-muted'}`}
          >
            Newest
          </button>
          <button
            onClick={() => setSort('score')}
            className={`transition-colors ${sort === 'score' ? 'text-accent' : 'text-text-dim hover:text-text-muted'}`}
          >
            Highest score
          </button>
        </div>
      </div>

      {/* Column headers (desktop) */}
      <div className="hidden md:grid grid-cols-[64px_1fr_150px_100px] gap-x-5 px-9 py-3 border-b border-rule-strong">
        <span className="label-dim">Score</span>
        <span className="label-dim">Unit</span>
        <span className="label-dim">Category</span>
        <span className="label-dim text-right">Date</span>
      </div>

      {filtered.map((r) => (
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
      {filtered.length === 0 && (
        <p className="px-5 md:px-9 py-10 font-mono text-[11px] uppercase tracking-[0.14em] text-text-dim">
          No units in this category yet.
        </p>
      )}

      <div className="px-5 md:px-9 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <span className="label-dim">Showing {filtered.length} unit{filtered.length === 1 ? '' : 's'}</span>
        <span className="label-dim">Honest reviews · affiliate links never affect the score</span>
      </div>
    </div>
  );
}
