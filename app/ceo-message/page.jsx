import CEOMessage from "./_components/CEOMessage";
import QuoteHighlight from "./_components/QuoteHighlight";
import ScrollToTop from "../components/ScrollToTop";
import { ChevronRight, Home } from "lucide-react";
import SafeLink from "../components/ui/SafeLink";

export const generateMetadata = () => {
  return {
    title: "Message from CEO - Majid Ali | SyncOps Leadership Vision",
    description:
      "Read a personal message from SyncOps CEO Majid Ali about our vision, mission, and commitment to empowering businesses with AI-powered software solutions.",
    keywords: [
      "SyncOps CEO",
      "Majid Ali",
      "leadership message",
      "company vision",
      "AI software company",
      "tech leadership",
      "business transformation",
      "software development vision",
      "CEO message",
      "company mission"
    ],
    openGraph: {
      title: "Message from CEO - Majid Ali | SyncOps Leadership Vision",
      description: "Read a personal message from SyncOps CEO Majid Ali about our vision, mission, and commitment to empowering businesses with AI-powered software solutions.",
      type: "website",
      url: "https://syncops.tech/ceo-message",
      siteName: "SyncOps",
      images: [
        {
          url: "/images/logo.png",
          width: 1200,
          height: 630,
          alt: "SyncOps CEO Message - Majid Ali"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
  title: "Message from CEO - Majid Ali | SyncOps",
      description: "Read a personal message from SyncOps CEO about our vision and mission.",
      images: ["/images/logo.png"]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    alternates: {
      canonical: "https://syncops.tech/ceo-message"
    }
  };
};

const CEOMessagePage = () => {
  // Structured data for CEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Majid Ali",
    "jobTitle": "Chief Executive Officer",
    "worksFor": {
      "@type": "Organization",
      "name": "SyncOps",
      "url": "https://syncops.tech"
    },
    "description": "CEO of SyncOps, leading the company's vision to empower businesses with AI-powered software solutions.",
    "url": "https://syncops.tech/ceo-message",
    "sameAs": [
      "https://www.linkedin.com/in/majidali-syncops/",
      "https://majidali.tech",
      "https://twitter.com/majidali",
      "https://github.com/majidali"
    ],
    "image": "https://syncops.tech/images/ceo-majid-ali.jpg"
  };

  return (
    <main className="min-h-screen bg-white" id="main-content">
      {/* Skip to Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#00B894] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#00B894] focus:ring-offset-2"
      >
        Skip to main content
      </a>
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Breadcrumbs Navigation */}
      <nav 
        className="bg-white border-b border-gray-100 py-4"
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <SafeLink
                href="/"
                className="hover:text-[#00B894] transition-colors flex items-center gap-1"
                aria-label="Home"
              >
                <Home size={16} className="flex-shrink-0" />
                <span>Home</span>
              </SafeLink>
            </li>
            <li>
              <ChevronRight size={14} className="text-gray-400 flex-shrink-0" aria-hidden="true" />
            </li>
            <li>
              <span className="text-gray-900 font-medium" aria-current="page">
                CEO Message
              </span>
            </li>
          </ol>
        </div>
      </nav>
      
      {/* Hero Section - CEO Message */}
      <CEOMessage />
      
      {/* Quote Highlight */}
      <QuoteHighlight />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
};

export default CEOMessagePage;
