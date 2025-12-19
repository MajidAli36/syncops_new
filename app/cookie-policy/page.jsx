import CookiePolicyContent from "./_components/CookiePolicyContent";

import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const metadata = generateSEO({
  title: "Cookie Policy - Cookie Usage & Management | SyncOps",
  description: "Read SyncOps' Cookie Policy to understand how we use cookies and similar tracking technologies on our website. Learn about cookie types, purposes, and how to manage your preferences.",
  keywords: [
    "cookie policy",
    "cookies",
    "tracking technologies",
    "SyncOps cookies",
    "cookie usage",
    "cookie management",
    "privacy cookies",
    "analytics cookies",
    "cookie preferences",
    "web cookies",
    "browser cookies",
    "cookie consent"
  ],
  url: "/cookie-policy",
  type: "website",
  noindex: false
});

const CookiePolicyPage = () => {
  // Structured data for Cookie Policy
  const cookiePolicySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cookie Policy - SyncOps",
    "description": "SyncOps Cookie Policy outlining how we use cookies and similar tracking technologies on our website.",
    "url": "https://syncops.tech/cookie-policy",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "SyncOps",
      "url": "https://syncops.tech"
    },
    "about": {
      "@type": "Thing",
      "name": "Cookie Policy",
      "description": "Cookie usage and tracking technologies policy"
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
        "name": "Cookie Policy",
        "item": "https://syncops.tech/cookie-policy"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cookiePolicySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-[#0B0A1C]">
        <CookiePolicyContent />
      </main>
    </>
  );
};

export default CookiePolicyPage;

