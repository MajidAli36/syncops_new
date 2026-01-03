import FaizanZiaProfile from "./_components/FaizanZiaProfile";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const metadata = generateSEO({
  title: "Faizan Zia – Business Development Manager, SyncOps Tech | Leadership Profile",
  description: "Faizan Zia is the Business Development Manager of SyncOps Tech, driving sales pipeline growth, nurturing client partnerships, and supporting revenue-focused initiatives for an AI-first technology company.",
  keywords: [
    "Faizan Zia",
    "SyncOps BDM",
    "Business Development Manager",
    "sales leadership",
    "client partnerships",
    "business development",
    "SyncOps leadership",
    "enterprise sales"
  ],
  url: "/bdm",
  type: "website",
  noindex: false
});

const FaizanZiaProfilePage = () => {
  // Structured data for BDM Profile
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Faizan Zia",
    "jobTitle": "Business Development Manager",
    "worksFor": {
      "@type": "Organization",
      "name": "SyncOps Tech",
      "url": "https://syncops.tech"
    },
    "description": "Business Development Manager of SyncOps Tech, driving sales pipeline growth, nurturing client partnerships, and supporting revenue-focused initiatives.",
    "url": "https://syncops.tech/bdm",
    "sameAs": [
      "https://www.linkedin.com/in/faizanzia-syncops/"
    ],
    "image": "https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948375/faizan-zia-bdm-syncops_uacwlv.jpg",
    "knowsAbout": [
      "Business Development",
      "Sales Pipeline Management",
      "Client Relationship Management",
      "Revenue Growth",
      "Partnership Development",
      "Enterprise Sales"
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
        "name": "Faizan Zia - Business Development Manager",
        "item": "https://syncops.tech/bdm"
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
        <FaizanZiaProfile />
      </main>
    </>
  );
};

export default FaizanZiaProfilePage;

