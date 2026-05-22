import type { MetadataRoute } from 'next';
import { categories, reviews, site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now },
    { url: `${site.url}/about`, lastModified: now },
    { url: `${site.url}/contact`, lastModified: now },
    { url: `${site.url}/disclosure`, lastModified: now },
    { url: `${site.url}/privacy`, lastModified: now },
    { url: `${site.url}/terms`, lastModified: now },
    { url: `${site.url}/authors/isaac`, lastModified: now },
    ...categories.map((c) => ({ url: `${site.url}/category/${c.slug}`, lastModified: now })),
    ...reviews.map((r) => ({ url: `${site.url}/review/${r.slug}`, lastModified: new Date(r.date) })),
  ];
}
