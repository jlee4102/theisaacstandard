import Image from 'next/image';
import Link from 'next/link';
import { reviews, categories } from '@/lib/site';

export default function Hero() {
  const latest = reviews[0];
  const catName = categories.find((c) => c.slug === latest?.category)?.name || '';
  const img = (latest as { image?: string })?.image;

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="eyebrow mb-4">Independent reviews · est. 2026</div>
          <h1 className="font-serif font-black text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            Honest gear, <em className="text-accent not-italic font-medium">held</em> to a higher bar.
          </h1>
          <p className="mt-6 text-lg text-ink-soft max-w-md leading-relaxed">
            We buy it, test it, and tell you whether it&apos;s worth your money. No sponsored fluff. No
            five-star everything. Just the call.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#latest"
              className="bg-ink text-paper px-6 py-3 rounded-md font-medium hover:bg-accent-deep transition"
            >
              Read the latest review
            </Link>
            <Link
              href="/how-we-test"
              className="border border-ink/20 px-6 py-3 rounded-md font-medium hover:border-accent-deep hover:text-accent-deep transition"
            >
              How we test
            </Link>
          </div>
        </div>

        {latest && (
          <Link
            href={`/review/${latest.slug}`}
            className="group relative z-10 block rounded-xl border border-line bg-card shadow-lift overflow-hidden"
          >
            <div className="aspect-[4/3] bg-highlight flex items-center justify-center overflow-hidden">
              {img ? (
                <Image
                  src={img}
                  alt={latest.title}
                  width={640}
                  height={480}
                  priority
                  className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">The Isaac Standard</span>
              )}
            </div>
            <div className="p-5 border-t border-line">
              <div className="eyebrow mb-1 text-[0.66rem]">Latest review{catName ? ` · ${catName}` : ''}</div>
              <p className="font-serif text-lg leading-snug group-hover:text-accent-deep transition">
                {latest.title}
              </p>
              {latest.rating !== undefined && (
                <div className="mt-2 text-accent-deep text-sm font-medium">★ {latest.rating.toFixed(1)} / 5</div>
              )}
            </div>
          </Link>
        )}
      </div>
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 35% 35%, #c2562a 0%, #8f3d1c 55%, transparent 72%)', filter: 'blur(8px)' }}
      />
    </section>
  );
}
