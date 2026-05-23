import type { Metadata } from 'next';

/**
 * Contact page metadata.
 *
 * Co-located server layout because app/contact/page.tsx is a client
 * component and cannot export metadata directly.
 */
export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Connect with Aleron Systems regarding Salesforce operations, CRM governance, workflow optimization, and enterprise support engagements.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    siteName: 'Aleron Systems',
    url: 'https://aleronsystems.com/contact',
    title: 'Contact | Aleron Systems',
    description:
      'Connect with Aleron Systems regarding Salesforce operations, CRM governance, workflow optimization, and enterprise support engagements.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Aleron Systems',
    description:
      'Connect with Aleron Systems regarding Salesforce operations, CRM governance, workflow optimization, and enterprise support engagements.',
  },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: 'https://aleronsystems.com/contact',
  name: 'Contact | Aleron Systems',
  description:
    'Connect with Aleron Systems regarding Salesforce operations, CRM governance, workflow optimization, and enterprise support engagements.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Aleron Systems',
    url: 'https://aleronsystems.com',
  },
  about: {
    '@type': 'Organization',
    name: 'Aleron Systems LLC',
    url: 'https://aleronsystems.com',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {children}
    </>
  );
}
