// app/layout.js
import './globals.css';
import { headers } from 'next/headers';
import Header from './components/Header';
import Footer from './components/Footer';
import GsapScrollProvider from './components/GsapScrollProvider';
import { inter, sora } from './fonts';

export const metadata = {
  title: 'SyncOps | AI-Powered Software Solutions & Enterprise Development',
  description: 'SyncOps delivers enterprise-grade AI-powered software solutions, development, and consulting. 50+ launches, 99.5% uptime.',
  keywords: ['SyncOps', 'AI software development', 'enterprise software', 'custom software development'],
  authors: [{ name: 'SyncOps Team' }],
  creator: 'SyncOps Technologies',
  publisher: 'SyncOps Technologies',
  metadataBase: new URL('https://syncops.tech'),
  alternates: {
    canonical: 'https://syncops.tech',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://syncops.tech',
    siteName: 'SyncOps',
    title: 'SyncOps | AI-Powered Software Solutions',
    description: 'Enterprise-grade AI-powered software solutions.',
    images: [{ url: '/images/logo.png', width: 1200, height: 630, alt: 'SyncOps' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SyncOps | AI-Powered Software Solutions',
    description: 'Enterprise-grade AI-powered software solutions.',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'theme-color': '#00B894',
    'msapplication-TileColor': '#00B894',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default async function RootLayout({ children }) {
  const pathname = (await headers()).get('x-pathname') || '';
  const isAdmin = pathname.startsWith('/admin');

  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        {!isAdmin && <GsapScrollProvider />}
        {!isAdmin && <Header />}
        <main>{children}</main>
        {!isAdmin && <Footer />}
      </body>
    </html>
  );
}
