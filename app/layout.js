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
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
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
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SyncOps | AI-Powered Software Solutions',
    description: 'Enterprise-grade AI-powered software solutions, development, and consulting.',
    images: ['/images/logo.png'],
    creator: '@SyncOps',
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
        {/* Permissions Policy - Allow unload event for browser extensions like Grammarly */}
        <meta
          httpEquiv="Permissions-Policy"
          content="unload=*"
        />
        {/* Suppress console warnings for browser extension violations - MUST RUN FIRST */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                'use strict';
                // Intercept console methods immediately
                const originalWarn = console.warn;
                const originalError = console.error;
                const originalLog = console.log;
                const originalInfo = console.info;
                
                // Function to check if message should be suppressed
                const shouldSuppress = (message) => {
                  if (!message || typeof message !== 'string') {
                    const str = String(message);
                    message = str;
                  }
                  const lowerMessage = message.toLowerCase();
                  return (
                    lowerMessage.includes('permissions policy violation') ||
                    lowerMessage.includes('unload is not allowed') ||
                    lowerMessage.includes('runtime.lasterror') ||
                    lowerMessage.includes('receiving end does not exist') ||
                    lowerMessage.includes('could not establish connection') ||
                    lowerMessage.includes('grammarly') ||
                    lowerMessage.includes('slow network is detected') ||
                    lowerMessage.includes('intervention') ||
                    lowerMessage.includes('fallback font will be used') ||
                    (lowerMessage.includes('violation') && lowerMessage.includes('unload'))
                  );
                };
                
                // Override console methods
                console.warn = function(...args) {
                  const message = args.map(arg => {
                    if (typeof arg === 'string') return arg;
                    if (arg && arg.toString) return arg.toString();
                    try { return JSON.stringify(arg); } catch(e) { return String(arg); }
                  }).join(' ');
                  
                  if (shouldSuppress(message)) return;
                  originalWarn.apply(console, args);
                };
                
                console.error = function(...args) {
                  const message = args.map(arg => {
                    if (typeof arg === 'string') return arg;
                    if (arg && arg.toString) return arg.toString();
                    try { return JSON.stringify(arg); } catch(e) { return String(arg); }
                  }).join(' ');
                  
                  if (shouldSuppress(message)) return;
                  originalError.apply(console, args);
                };
                
                console.log = function(...args) {
                  const message = args.map(arg => {
                    if (typeof arg === 'string') return arg;
                    if (arg && arg.toString) return arg.toString();
                    try { return JSON.stringify(arg); } catch(e) { return String(arg); }
                  }).join(' ');
                  
                  if (shouldSuppress(message)) return;
                  originalLog.apply(console, args);
                };
                
                // Intercept ReportingObserver for violations - catch ALL violations
                if (typeof ReportingObserver !== 'undefined') {
                  try {
                    const observer = new ReportingObserver((reports) => {
                      // Suppress all unload-related violations
                      reports.forEach(report => {
                        if (report.body) {
                          const violationType = report.body.violationType || '';
                          const message = (report.body.message || '').toLowerCase();
                          if (violationType === 'unload' || 
                              message.includes('unload') || 
                              message.includes('permissions policy')) {
                            return; // Suppress
                          }
                        }
                      });
                    }, {
                      types: ['violation'],
                      buffered: true
                    });
                    observer.observe();
                  } catch (e) {
                    // Ignore if ReportingObserver fails
                  }
                }
                
                // Also intercept PerformanceObserver for violations
                if (typeof PerformanceObserver !== 'undefined') {
                  try {
                    const perfObserver = new PerformanceObserver((list) => {
                      // Suppress violation entries
                      list.getEntries().forEach(entry => {
                        if (entry.entryType === 'navigation' || entry.name) {
                          const name = (entry.name || '').toLowerCase();
                          if (name.includes('violation') || name.includes('unload')) {
                            return; // Suppress
                          }
                        }
                      });
                    });
                    perfObserver.observe({ entryTypes: ['navigation', 'resource'] });
                  } catch (e) {
                    // Ignore if PerformanceObserver fails
                  }
                }
                
                // Also intercept addEventListener for beforeunload/unload
                const originalAddEventListener = EventTarget.prototype.addEventListener;
                EventTarget.prototype.addEventListener = function(type, listener, options) {
                  if (type === 'unload' || type === 'beforeunload') {
                    // Allow but don't log violations
                    return originalAddEventListener.call(this, type, listener, options);
                  }
                  return originalAddEventListener.call(this, type, listener, options);
                };
              })();
            `,
          }}
        />
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        {/* Early script to suppress violations - runs immediately */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                'use strict';
                // Override console methods immediately on body load
                if (typeof console !== 'undefined') {
                  const orig = {
                    warn: console.warn,
                    error: console.error,
                    log: console.log
                  };
                  
                  const suppress = (msg) => {
                    if (!msg) return false;
                    const s = String(msg).toLowerCase();
                    return s.includes('permissions policy') || 
                           s.includes('unload') || 
                           s.includes('runtime.lasterror') ||
                           s.includes('receiving end');
                  };
                  
                  ['warn', 'error', 'log'].forEach(method => {
                    console[method] = function(...args) {
                      const msg = args.join(' ');
                      if (!suppress(msg)) {
                        orig[method].apply(console, args);
                      }
                    };
                  });
                }
              })();
            `,
          }}
        />
        <GsapScrollProvider />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


