import type { Metadata } from 'next';

/**
 * Government page metadata.
 *
 * Co-located server layout because app/government/page.tsx is a client
 * component and cannot export metadata directly.
 */
export const metadata: Metadata = {
  title: 'Government Capabilities',
  description:
    'Government-ready Salesforce operations, CRM modernization, workflow governance, and enterprise platform support for public sector organizations.',
  alternates: {
    canonical: '/government',
  },
  openGraph: {
    type: 'website',
    siteName: 'Aleron Systems',
    url: 'https://aleronsystems.com/government',
    title: 'Government Capabilities | Aleron Systems',
    description:
      'Government-ready Salesforce operations, CRM modernization, workflow governance, and enterprise platform support for public sector organizations.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Government Capabilities | Aleron Systems',
    description:
      'Government-ready Salesforce operations, CRM modernization, workflow governance, and enterprise platform support for public sector organizations.',
  },
};

/**
 * Government page schema.
 *
 * Uses WebPage rather than GovernmentService. The schema.org
 * GovernmentService type means "a service provided BY a government
 * entity to constituents" (e.g. license renewal). It does NOT mean
 * "services offered to governments." Using it here would mis-categorize
 * Aleron as a public-sector body. WebPage with audience targeting is
 * the correct semantic match.
 */
const governmentPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://aleronsystems.com/government',
  name: 'Government Capabilities | Aleron Systems',
  description:
    'Government-ready Salesforce operations, CRM modernization, workflow governance, and enterprise platform support for public sector organizations.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Aleron Systems',
    url: 'https://aleronsystems.com',
  },
  audience: {
    '@type': 'GovernmentAudience',
    name: 'Public sector organizations and government agencies',
  },
  about: {
    '@type': 'Organization',
    name: 'Aleron Systems LLC',
    url: 'https://aleronsystems.com',
  },
};

export default function GovernmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(governmentPageSchema) }}
      />
      {children}
    </>
  );
}
