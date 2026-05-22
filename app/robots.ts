import type { MetadataRoute } from 'next';

/**
 * Robots configuration for Aleron Systems.
 *
 * Next.js App Router serves this file at /robots.txt automatically.
 * No additional configuration needed.
 *
 * Policy: all crawlers allowed on all public routes. The API route
 * (/api/contact) is implicitly excluded from indexing because Next.js
 * API routes return JSON and have no crawlable content; no explicit
 * disallow needed.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://aleronsystems.com/sitemap.xml',
    host: 'https://aleronsystems.com',
  };
}
