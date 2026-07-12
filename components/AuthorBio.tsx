import Link from 'next/link';

// E-E-A-T signal at the end of every review: who wrote it and why it's trustworthy. Monogram, not a
// stock face — honest to the brand (no fabricated photo).
export default function AuthorBio() {
  return (
    <aside className="not-prose mt-14 rounded-xl border border-line bg-card p-6 flex gap-4 items-start">
      <div className="shrink-0 w-14 h-14 rounded-full bg-highlight border border-line flex items-center justify-center font-serif text-2xl text-accent-deep">
        I
      </div>
      <div>
        <div className="eyebrow mb-1">About the author</div>
        <p className="font-medium text-ink">Isaac</p>
        <p className="text-sm text-ink-soft mt-1 leading-relaxed">
          Founder of The Isaac Standard. Every review here is based on a product I bought and lived with —
          measured numbers, honest trade-offs, and no paid placements.{' '}
          <Link href="/authors/isaac" className="text-accent-deep hover:text-accent underline underline-offset-2">
            How I test →
          </Link>
        </p>
      </div>
    </aside>
  );
}
