import './globals.css';
import type { Metadata } from 'next';

export const metadata = {
  title: 'Aleron Systems LLC',
  description:
    'CRM consulting, cloud solutions, workflow automation, security, infrastructure, and government contracting support.',
  icons: {
    icon: '/logos/favicon-32x32.png',
    apple: '/logos/apple-touch-icon.png',
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
