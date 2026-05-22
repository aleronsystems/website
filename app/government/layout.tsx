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

export default function GovernmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
