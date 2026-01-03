import AhmerMairajProfile from "./_components/AhmerMairajProfile";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const metadata = generateSEO({
  title: "Ahmer Mairaj – Chief Operating Officer, SyncOps Tech | Leadership Profile",
  description: "Ahmer Mairaj is the Chief Operating Officer of SyncOps Tech, overseeing daily operations, resource management, and execution of business strategies for an AI-first technology company serving global markets.",
  keywords: [
    "Ahmer Mairaj",
    "SyncOps COO",
    "Chief Operating Officer",
    "operations leadership",
    "business operations",
    "resource management",
    "SyncOps leadership",
    "enterprise operations"
  ],
  url: "/coo",
  type: "website",
  noindex: false
});

const AhmerMairajProfilePage = () => {
  // Structured data for COO Profile
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ahmer Mairaj",
    "jobTitle": "Chief Operating Officer",
    "worksFor": {
      "@type": "Organization",
      "name": "SyncOps Tech",
      "url": "https://syncops.tech"
    },
    "description": "Chief Operating Officer of SyncOps Tech, overseeing daily operations, resource management, and execution of business strategies. With over 10 years of experience in operations and business management.",
    "url": "https://syncops.tech/coo",
    "sameAs": [],
    "image": "https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948234/ahmer-mairaj-coo-syncops_olgqbf.jpg",
    "knowsAbout": [
      "Operations Management",
      "Resource Management",
      "Business Strategy Execution",
      "Process Optimization",
      "Team Coordination"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Experience",
      "recognizedBy": {
        "@type": "Organization",
        "name": "SyncOps Tech"
      }
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
        "name": "Ahmer Mairaj - Chief Operating Officer",
        "item": "https://syncops.tech/coo"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-[#0B0A1C]">
        <AhmerMairajProfile />
      </main>
    </>
  );
};

export default AhmerMairajProfilePage;

