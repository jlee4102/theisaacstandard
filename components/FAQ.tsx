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
    <section className="not-prose my-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h2 className="font-serif text-2xl mb-4">Frequently asked questions</h2>
      <div className="space-y-3">
        {items.map((i, idx) => (
          <details key={idx} className="border border-ink/10 rounded p-4 [&_summary::-webkit-details-marker]:hidden">
            <summary className="font-medium cursor-pointer flex justify-between items-center">
              {i.q}
              <span className="text-accent ml-4">+</span>
            </summary>
            <p className="text-ink/80 mt-3 leading-7">{i.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
