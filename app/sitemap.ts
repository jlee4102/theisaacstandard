import type { MetadataRoute } from 'next';
import fs from 'node:fs';
import path from 'node:path';
import { categories, reviews, site } from '@/lib/site';

// SEO GAP FIX (2026-07-26): the sitemap listed only static pages, categories and reviews — so the
// site's TWO highest-purchase-intent page types were invisible to search:
//   * /best/<category>  — buying guides (4 already live, auto-generated from reviews)
//   * /compare/<slug>   — head-to-head comparisons (the format a buyer searches right before buying)
// Both are exactly the pages that convert affiliate traffic, and Google had no way to discover them.
// Comparisons are read from the filesystem at BUILD time (sitemap.ts runs during the build, and the
// pages are committed files) so a newly published comparison is indexed automatically with no
// registry to keep in sync.
function comparisonSlugs(): string[] {
  try {
    const dir = path.join(process.cwd(), 'app', 'compare');
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith('[') && !d.name.startsWith('_'))
      .map((d) => d.name);
  } catch {
    return []; // no comparisons yet — not an error
  }
}

// Mirrors the /best/[category] route's own rule: a roundup only exists with 2+ reviews.
function guideCategories(): string[] {
  return categories
    .filter((c) => reviews.filter((r) => r.category === c.slug).length >= 2)
    .map((c) => c.slug);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now },
    { url: `${site.url}/reviews`, lastModified: now },
    { url: `${site.url}/about`, lastModified: now },
    { url: `${site.url}/how-we-test`, lastModified: now },
    { url: `${site.url}/contact`, lastModified: now },
    { url: `${site.url}/disclosure`, lastModified: now },
    { url: `${site.url}/privacy`, lastModified: now },
    { url: `${site.url}/terms`, lastModified: now },
    { url: `${site.url}/authors/isaac`, lastModified: now },
    ...categories.map((c) => ({ url: `${site.url}/category/${c.slug}`, lastModified: now })),
    ...guideCategories().map((slug) => ({ url: `${site.url}/best/${slug}`, lastModified: now })),
    ...comparisonSlugs().map((slug) => ({ url: `${site.url}/compare/${slug}`, lastModified: now })),
    ...reviews.map((r) => ({ url: `${site.url}/review/${r.slug}`, lastModified: new Date(r.date) })),
  ];
}
