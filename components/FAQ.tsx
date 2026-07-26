type QA = { q: string; a: string };

// Instrument FAQ: rule-underlined rows, mono ＋ that rotates open, first item open by default.
// Native <details name="faq"> gives single-open behavior without JS; content stays in the HTML
// (the handoff's SEO note: keep unique content out from behind JS).
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
    <section className="not-prose my-12">
      {/* First-party JSON-LD; < escape prevents a </script> breakout if content ever carries markup. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <div className="label-dim mb-2">Questions</div>
      <h2 className="text-[26px] md:text-[28px] font-bold tracking-[-0.02em] mb-4">Frequently asked</h2>
      <div className="border-t border-rule">
        {items.map((i, idx) => (
          <details
            key={idx}
            name="faq"
            open={idx === 0}
            className="group border-b border-rule [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="cursor-pointer py-4 flex justify-between items-center gap-4 text-[16px] font-semibold text-text hover:text-accent transition-colors">
              <span>{i.q}</span>
              <span className="font-mono text-accent shrink-0 group-open:rotate-45 transition-transform" aria-hidden>
                ＋
              </span>
            </summary>
            <p className="pb-5 text-[15px] leading-relaxed text-text-muted max-w-[66ch]">{i.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
