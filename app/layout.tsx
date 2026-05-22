import './globals.css';
import type { Metadata } from 'next';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
