type QA = { q: string; a: string };

export default function FAQ({ items }: { items: QA[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };

  return (
    <section className="not-prose my-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="eyebrow mb-2">Questions</div>
      <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-5">Frequently asked</h2>
      <div className="space-y-2">
        {items.map((i, idx) => (
          <details
            key={idx}
            className="group border border-line rounded-lg bg-card overflow-hidden [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="cursor-pointer p-5 flex justify-between items-center gap-4 font-medium text-ink hover:text-accent-deep transition">
              <span>{i.q}</span>
              <span className="text-accent shrink-0 text-xl group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="px-5 pb-5 text-ink-soft leading-7">{i.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
