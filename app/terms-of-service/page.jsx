import TermsOfServiceContent from "./_components/TermsOfServiceContent";

import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const metadata = generateSEO({
  title: "Terms of Service - Legal Terms & Conditions | SyncOps",
  description: "Read SyncOps' Terms of Service to understand the terms and conditions governing your use of our website and services. User agreement, service terms, and legal conditions.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "legal terms",
    "SyncOps terms",
    "user agreement",
    "service agreement",
    "terms of use",
    "website terms",
    "legal conditions",
    "user terms",
    "service terms",
    "legal agreement"
  ],
  url: "/terms-of-service",
  type: "website",
  noindex: false
});

const TermsOfServicePage = () => {
  // Structured data for Terms of Service
  const termsOfServiceSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - SyncOps",
    "description": "SyncOps Terms of Service outlining the terms and conditions governing the use of our website and services.",
    "url": "https://syncops.tech/terms-of-service",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "SyncOps",
      "url": "https://syncops.tech"
    },
    "about": {
      "@type": "Thing",
      "name": "Terms of Service",
      "description": "Legal terms and conditions for website and service usage"
    }
  };

  // Generate breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://syncops.tech"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Terms of Service",
        "item": "https://syncops.tech/terms-of-service"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsOfServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-[#0B0A1C]">
        <TermsOfServiceContent />
      </main>
    </>
  );
};

export default TermsOfServicePage;

