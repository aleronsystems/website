import type { Metadata } from 'next';

/**
 * Services page metadata.
 *
 * Co-located server layout because app/services/page.tsx is a client
 * component and cannot export metadata directly.
 */
export const metadata: Metadata = {
  title: 'Services',
  description:
    'Salesforce operations, workflow governance, DevOps coordination, CRM optimization, integrations, and enterprise platform support.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    type: 'website',
    siteName: 'Aleron Systems',
    url: 'https://aleronsystems.com/services',
    title: 'Services | Aleron Systems',
    description:
      'Salesforce operations, workflow governance, DevOps coordination, CRM optimization, integrations, and enterprise platform support.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Aleron Systems',
    description:
      'Salesforce operations, workflow governance, DevOps coordination, CRM optimization, integrations, and enterprise platform support.',
  },
};

/**
 * Services collection schema.
 *
 * Modeled as a CollectionPage that contains an ItemList of individual
 * Service items. This is the schema.org pattern for "a page listing
 * multiple services" and gives search engines per-service structure.
 *
 * The eight service items mirror the live Service cards on the page.
 * Keep this list in sync if services are renamed or added/removed.
 */
const provider = {
  '@type': 'Organization',
  name: 'Aleron Systems LLC',
  url: 'https://aleronsystems.com',
};

const services = [
  'Salesforce Administration',
  'Workflow Governance & Automation',
  'Release Governance & DevOps Coordination',
  'Experience Cloud Support',
  'Enterprise System Integration Support',
  'CRM Operational Support',
  'Sandbox & UAT Coordination',
  'Operational Reporting & Platform Visibility',
];

const servicesCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  url: 'https://aleronsystems.com/services',
  name: 'Services | Aleron Systems',
  description:
    'Salesforce operations, workflow governance, DevOps coordination, CRM optimization, integrations, and enterprise platform support.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Aleron Systems',
    url: 'https://aleronsystems.com',
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: services.map((name, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Service',
        name,
        provider,
        areaServed: 'US',
      },
    })),
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesCollectionSchema) }}
      />
      {children}
    </>
  );
}
