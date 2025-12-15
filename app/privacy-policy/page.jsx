import PrivacyPolicyContent from "./_components/PrivacyPolicyContent";

import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const metadata = generateSEO({
  title: "Privacy Policy - Data Protection & Privacy | SyncOps",
  description: "Read SyncOps' Privacy Policy to understand how we collect, use, and protect your personal information and data. GDPR compliant, transparent data practices, and commitment to user privacy.",
  keywords: [
    "privacy policy",
    "data protection",
    "privacy",
    "SyncOps privacy",
    "GDPR",
    "data security",
    "personal information",
    "data privacy",
    "user privacy",
    "data collection",
    "data usage",
    "privacy rights",
    "cookie policy"
  ],
  url: "/privacy-policy",
  type: "website",
  noindex: false
});

const PrivacyPolicyPage = () => {
  // Structured data for Privacy Policy
  const privacyPolicySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - SyncOps",
    "description": "SyncOps Privacy Policy outlining how we collect, use, and protect personal information and data.",
    "url": "https://syncops.tech/privacy-policy",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "SyncOps",
      "url": "https://syncops.tech"
    },
    "about": {
      "@type": "Thing",
      "name": "Privacy Policy",
      "description": "Data protection and privacy practices"
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
        "name": "Privacy Policy",
        "item": "https://syncops.tech/privacy-policy"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyPolicySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-[#0B0A1C]">
        <PrivacyPolicyContent />
      </main>
    </>
  );
};

export default PrivacyPolicyPage;

