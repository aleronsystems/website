import './globals.css';
import type { Metadata } from 'next';
import { PostHogProvider } from './providers';

/**
 * Site-wide metadata defaults.
 *
 * Per-page metadata is defined in each route's layout.tsx and overrides
 * these values where present. The title.template lets per-page layouts
 * supply just the page name (e.g. "About") and have it composed into
 * the full title automatically.
 *
 * Pages using 'use client' cannot export metadata directly, so each
 * route folder has a server layout.tsx that owns its metadata while
 * the client page.tsx renders the UI.
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://aleronsystems.com'),
  title: {
    default: 'Aleron Systems | Enterprise Salesforce Operations & CRM Governance',
    template: '%s | Aleron Systems',
  },
  description:
    'Enterprise Salesforce operations, CRM governance, workflow automation, release coordination, and government-ready platform support.',
  applicationName: 'Aleron Systems',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Aleron Systems',
    locale: 'en_US',
    url: 'https://aleronsystems.com',
    title: 'Aleron Systems | Enterprise Salesforce Operations & CRM Governance',
    description:
      'Enterprise Salesforce operations, CRM governance, workflow automation, release coordination, and government-ready platform support.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aleron Systems | Enterprise Salesforce Operations & CRM Governance',
    description:
      'Enterprise Salesforce operations, CRM governance, workflow automation, release coordination, and government-ready platform support.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
};

/**
 * Site-wide JSON-LD structured data.
 *
 * Two schemas described on every page: Organization (the company entity)
 * and ProfessionalService (the business as a service provider). Both
 * describe the same entity from different angles, which search engines
 * handle correctly. The ProfessionalService schema lives at root because
 * app/page.tsx is a client component and cannot cleanly own a server-only
 * JSON-LD script tag; rendering it from the root layout means it appears
 * on subpages too, which is semantically harmless and saves a per-route
 * edit to existing client page files.
 *
 * Logo path uses the verified deployed asset at /logos/navbar-logo-dark.png
 * (referenced by SiteNav). Update if a dedicated /logo.png asset is added
 * to /public.
 */
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aleron Systems LLC',
  alternateName: 'Aleron Systems',
  url: 'https://aleronsystems.com',
  logo: 'https://aleronsystems.com/logos/navbar-logo-dark.png',
  description:
    'Enterprise Salesforce operations, CRM governance, workflow automation, release coordination, and government-ready platform support.',
  areaServed: 'US',
  foundingLocation: {
    '@type': 'Place',
    name: 'Pennsylvania, United States',
  },
  sameAs: [],
};

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Aleron Systems LLC',
  url: 'https://aleronsystems.com',
  image: 'https://aleronsystems.com/logos/navbar-logo-dark.png',
  description:
    'Enterprise Salesforce operations, CRM governance, workflow automation, release coordination, and government-ready platform support.',
  areaServed: 'US',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Salesforce Consulting Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Salesforce Administration',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'CRM Governance',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Workflow Automation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Release Coordination',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Enterprise Platform Support',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Government CRM Capabilities',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
