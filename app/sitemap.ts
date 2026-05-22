import type { MetadataRoute } from 'next';

/**
 * Sitemap generation for Aleron Systems.
 *
 * Next.js App Router serves this file at /sitemap.xml automatically.
 * No additional configuration needed.
 *
 * lastModified is computed at build time. Each deploy refreshes the
 * timestamps, which is the correct signal for a site updated through
 * code commits rather than CMS edits.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aleronsystems.com';
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/government`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
