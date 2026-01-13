import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GsapScrollProvider from './components/GsapScrollProvider';
import { inter, sora } from './fonts';

export const metadata = {
  title: 'SyncOps | AI-Powered Software Solutions & Enterprise Development',
  description: 'SyncOps delivers enterprise-grade AI-powered software solutions, development, and consulting. 50+ launches, 99.5% uptime. Specializing in AI, cybersecurity, cloud, and custom software development.',
  keywords: ['SyncOps', 'AI software development', 'enterprise software', 'custom software development', 'AI solutions', 'cybersecurity', 'cloud development', 'software consulting', 'Majid Ali', 'Rimsha Imran'],
  authors: [{ name: 'SyncOps Team' }],
  creator: 'SyncOps Technologies',
  publisher: 'SyncOps Technologies',
  metadataBase: new URL('https://syncops.tech'),
  alternates: {
    canonical: 'https://syncops.tech',
    languages: {
      'en-US': 'https://syncops.tech',
      'en': 'https://syncops.tech',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_CA', 'en_AU'],
    url: 'https://syncops.tech',
    siteName: 'SyncOps',
    title: 'SyncOps | AI-Powered Software Solutions & Enterprise Development',
    description: 'Enterprise-grade AI-powered software solutions, development, and consulting. 50+ launches, 99.5% uptime.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'SyncOps - AI-Powered Software Solutions',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SyncOps | AI-Powered Software Solutions',
    description: 'Enterprise-grade AI-powered software solutions, development, and consulting.',
    images: ['/images/logo.png'],
    creator: '@SyncOps',
    site: '@SyncOps',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
    // other: {
    //   'facebook-domain-verification': 'your-facebook-verification-code',
    // },
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'SyncOps',
    'format-detection': 'telephone=no',
    'theme-color': '#00B894',
    'msapplication-TileColor': '#00B894',
    'msapplication-config': '/browserconfig.xml',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  category: 'technology',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

// Organization structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SyncOps",
  "alternateName": "SyncOps Technologies",
  "url": "https://syncops.tech",
  "logo": "https://syncops.tech/images/logo.png",
  "description": "Enterprise-grade AI-powered software solutions, development, and consulting. Specializing in AI, cybersecurity, cloud, and custom software development.",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Gujranwala",
    "addressRegion": "Punjab",
    "addressCountry": "PK",
    "streetAddress": "Mumtaz Market"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+92-301-8678-319",
    "contactType": "Customer Service",
    "email": "info@syncops.tech",
    "areaServed": "Worldwide",
    "availableLanguage": ["en"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/syncops",
    "https://twitter.com/syncops",
    "https://github.com/syncopstech",
    "https://clutch.co/profile/syncops",
    "https://techbehemoths.com/company/syncops",
    "https://rocketreach.co/syncops-profile_b6e4db2fc708a182",
    "https://www.trustpilot.com/review/syncops.tech",
    "https://tracxn.com/d/companies/syncops/__vXEaZ6f2kBDQ2cqCCZmYfSCy6Wqxpu2TXiTaJmWn-IA",
    "https://www.crunchbase.com/organization/syncops",
    "https://themanifest.com/company/syncops",
    "https://goodfirms.co/company/syncops"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "50",
    "bestRating": "5",
    "worstRating": "1"
  },
  "founder": {
    "@type": "Person",
    "name": "Majid Ali",
    "jobTitle": "Chief Executive Officer",
    "url": "https://majidali.tech",
    "sameAs": [
      "https://www.linkedin.com/in/majidali-syncops/",
      "https://majidali.tech"
    ]
  },
  "employee": [
    {
      "@type": "Person",
      "name": "Majid Ali",
      "jobTitle": "Chief Executive Officer",
      "url": "https://majidali.tech",
      "sameAs": [
        "https://www.linkedin.com/in/majidali-syncops/",
        "https://majidali.tech"
      ]
    },
    {
      "@type": "Person",
      "name": "Rimsha Imran",
        "jobTitle": "Chief Technology Officer",
        "url": "https://www.rimshaimran.tech/",
        "sameAs": [
          "https://www.linkedin.com/in/rimshaimran-syncops/",
          "https://www.rimshaimran.tech/"
        ]
    },
    {
      "@type": "Person",
      "name": "Nida Naeem",
      "jobTitle": "Chief Business Development Officer",
      "sameAs": [
        "https://www.linkedin.com/in/nidanaeem-syncops/"
      ]
    }
  ],
  "offers": {
    "@type": "Offer",
    "category": "Software Development Services",
    "description": "AI-powered software solutions, enterprise development, and consulting"
  },
  "knowsAbout": [
    "Artificial Intelligence",
    "Machine Learning",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Cloud Computing",
    "Cybersecurity",
    "Data Analytics",
    "Enterprise Software",
    "SaaS Development"
  ],
  "award": "Top Software Development Company",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "50+"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`} data-scroll-behavior="smooth">
      <head>
        {/* Performance & SEO: Preconnect to external domains - Optimized for faster response */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <link rel="dns-prefetch" href="https://twitter.com" />
        
        {/* Permissions Policy - Allow unload event for browser extensions like Grammarly */}
        <meta
          httpEquiv="Permissions-Policy"
          content="unload=*, geolocation=(), microphone=(), camera=()"
        />
        
        {/* Security Headers - Note: These are set via HTTP headers in next.config.mjs, not meta tags */}
        
        {/* Mobile Optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="SyncOps" />
        
        {/* Theme & Colors */}
        <meta name="theme-color" content="#00B894" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0B1020" media="(prefers-color-scheme: dark)" />
        <meta name="msapplication-TileColor" content="#00B894" />
        <meta name="msapplication-navbutton-color" content="#00B894" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Gujranwala" />
        <meta name="geo.position" content="32.1617;74.1883" />
        <meta name="ICBM" content="32.1617, 74.1883" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        
      
        
      
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileImage" content="/images/logo.png" />
        <meta name="msapplication-square70x70logo" content="/images/logo.png" />
        <meta name="msapplication-square150x150logo" content="/images/logo.png" />
        <meta name="msapplication-wide310x150logo" content="/images/logo.png" />
        <meta name="msapplication-square310x310logo" content="/images/logo.png" />
        {/* Suppress console warnings for browser extension violations - Non-blocking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                'use strict';
                if (typeof console === 'undefined') return;
                const orig = { warn: console.warn, error: console.error, log: console.log, info: console.info };
                const suppress = (m) => {
                  if (!m) return false;
                  const s = String(m).toLowerCase();
                  return s.includes('permissions policy') || s.includes('unload') || s.includes('runtime.lasterror') || s.includes('receiving end') || s.includes('grammarly') || s.includes('slow network') || s.includes('intervention') || s.includes('fallback font') || s.includes('preload') && s.includes('not used');
                };
                ['warn', 'error', 'log', 'info'].forEach(m => {
                  console[m] = function(...args) {
                    if (!suppress(args.join(' '))) orig[m].apply(console, args);
                  };
                });
                if (typeof ReportingObserver !== 'undefined') {
                  try {
                    new ReportingObserver((r) => r.forEach(report => {
                      if (report.body && (report.body.violationType === 'unload' || String(report.body.message || '').toLowerCase().includes('unload'))) return;
                    }), { types: ['violation'], buffered: true }).observe();
                  } catch(e) {}
                }
              })();
            `,
          }}
          defer
        />
        {/* Organization Structured Data - Non-blocking */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          defer
        />
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        {/* Console suppression script - Non-blocking, runs after page load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                'use strict';
                if (typeof console === 'undefined') return;
                const orig = { warn: console.warn, error: console.error, log: console.log };
                const suppress = (m) => {
                  if (!m) return false;
                  const s = String(m).toLowerCase();
                  return s.includes('permissions policy') || s.includes('unload') || s.includes('runtime.lasterror') || s.includes('receiving end') || (s.includes('preload') && s.includes('not used'));
                };
                ['warn', 'error', 'log'].forEach(m => {
                  console[m] = function(...args) {
                    if (!suppress(args.join(' '))) orig[m].apply(console, args);
                  };
                });
              })();
            `,
          }}
          defer
        />
        <GsapScrollProvider />
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#00B894] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#00B894] focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


