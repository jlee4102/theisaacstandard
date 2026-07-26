import Link from 'next/link';

// Instrument breadcrumb: a mono back-link trail. Keeps the BreadcrumbList JSON-LD.
export default function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.label,
      ...(it.href ? { item: it.href } : {}),
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className="not-prose mb-5 font-mono text-[10px] uppercase tracking-[0.14em] text-text-dim">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {it.href ? (
              <Link href={it.href} className="hover:text-accent transition-colors">
                {it.label}
              </Link>
            ) : (
              <span className="text-text-muted">{it.label}</span>
            )}
            {i < items.length - 1 && <span className="text-rule-strong">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
