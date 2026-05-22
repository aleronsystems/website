import type { Metadata } from 'next';

/**
 * About page metadata.
 *
 * Co-located server layout because app/about/page.tsx is a client component
 * ('use client') and cannot export metadata directly. This layout owns SEO;
 * page.tsx owns the UI.
 *
 * Title uses just "About" because the root layout's title.template
 * composes it into "About | Aleron Systems" automatically.
 */
export const metadata: Metadata = {
  title: 'About',
  description:
    'Operational Salesforce leadership with enterprise platform support, governance, release coordination, and production environment experience.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'website',
    siteName: 'Aleron Systems',
    url: 'https://aleronsystems.com/about',
    title: 'About | Aleron Systems',
    description:
      'Operational Salesforce leadership with enterprise platform support, governance, release coordination, and production environment experience.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Aleron Systems',
    description:
      'Operational Salesforce leadership with enterprise platform support, governance, release coordination, and production environment experience.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
