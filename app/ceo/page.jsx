import MajidAliProfile from "./_components/MajidAliProfile";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const metadata = generateSEO({
  title: "Majid Ali – Founder & CEO, SyncOps Tech | Leadership Profile",
  description: "Majid Ali is the Founder & CEO of SyncOps Tech, leading an AI-first technology company from Pakistan that delivers enterprise solutions to global markets including USA, UK, Europe, Canada, Australia, Singapore, and UAE.",
  keywords: [
    "Majid Ali",
    "SyncOps CEO",
    "Founder CEO",
    "technology leader",
    "AI company founder",
    "Pakistan tech entrepreneur",
    "SyncOps leadership",
    "enterprise technology CEO",
    "AI software company founder"
  ],
  url: "/ceo",
  type: "website",
  noindex: false
});

const MajidAliProfilePage = () => {
  // Structured data for CEO Profile
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Majid Ali",
    "jobTitle": "Founder & Chief Executive Officer",
    "worksFor": {
      "@type": "Organization",
      "name": "SyncOps Tech",
      "url": "https://syncops.tech"
    },
    "description": "Founder & CEO of SyncOps Tech, leading an AI-first technology company that delivers enterprise solutions to global markets.",
    "url": "https://syncops.tech/ceo",
    "sameAs": [
      "https://www.linkedin.com/in/majidali-syncops/",
      "https://majidali.tech",
      "https://github.com/MajidAli36"
    ],
    "image": "https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948234/majid-ali-ceo-syncops_c6y6ay.jpg"
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
        "name": "Majid Ali - Founder & CEO",
        "item": "https://syncops.tech/ceo"
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
        <MajidAliProfile />
      </main>
    </>
  );
};

export default MajidAliProfilePage;

