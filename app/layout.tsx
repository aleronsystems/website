import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aleron Systems LLC',
  description:
    'CRM consulting, cloud solutions, workflow automation, security, infrastructure, and government contracting support.',
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
