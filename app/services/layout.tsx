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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
