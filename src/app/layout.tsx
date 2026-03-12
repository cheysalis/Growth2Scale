import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Growth2Scale | We Help Med Spas Add $500K+ in Revenue',
  description:
    'Growth2Scale installs brand authority, sales conversion systems, and growth analytics into med spas and longevity clinics. Founded by operators who have built and scaled real clinics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
