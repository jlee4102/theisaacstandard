import Link from 'next/link';

// Home › Category › Title. Navigation + SEO (emits BreadcrumbList JSON-LD).
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
    <nav aria-label="Breadcrumb" className="not-prose mb-4 text-xs text-ink-faint">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {it.href ? (
              <Link href={it.href} className="hover:text-accent-deep transition">
                {it.label}
              </Link>
            ) : (
              <span className="text-ink-soft">{it.label}</span>
            )}
            {i < items.length - 1 && <span className="text-line">›</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
