import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
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
        <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lift">
          <Image
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80&auto=format&fit=crop"
            alt="Studio headphones on a desk"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-ink/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm border border-line rounded-lg p-4 text-sm">
            <div className="eyebrow mb-1 text-[0.66rem]">Currently testing</div>
            <p className="font-medium text-ink">Budget over-ear ANC headphones under $60</p>
          </div>
        </div>
      </div>
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 35% 35%, #c2562a 0%, #8f3d1c 55%, transparent 72%)', filter: 'blur(8px)' }}
      />
    </section>
  );
}
