import AbuSufianProfile from "./_components/AbuSufianProfile";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const metadata = generateSEO({
  title: "Abu Sufian – Chief Marketing Officer, SyncOps Tech | Leadership Profile",
  description: "Abu Sufian is the Chief Marketing Officer of SyncOps Tech, managing brand strategy, marketing campaigns, and global visibility for an AI-first technology company serving global markets.",
  keywords: [
    "Abu Sufian",
    "SyncOps CMO",
    "Chief Marketing Officer",
    "marketing leadership",
    "brand strategy",
    "marketing campaigns",
    "SyncOps leadership",
    "enterprise marketing"
  ],
  url: "/cmo",
  type: "website",
  noindex: false
});

const AbuSufianProfilePage = () => {
  // Structured data for CMO Profile
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Abu Sufian",
    "jobTitle": "Chief Marketing Officer",
    "worksFor": {
      "@type": "Organization",
      "name": "SyncOps Tech",
      "url": "https://syncops.tech"
    },
    "description": "Chief Marketing Officer of SyncOps Tech, managing brand strategy, marketing campaigns, and global visibility.",
    "url": "https://syncops.tech/cmo",
    "sameAs": [],
    "image": "https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948233/abu-sufian-cmo-syncops_h7xki9.jpg",
    "knowsAbout": [
      "Brand Strategy",
      "Digital Marketing",
      "Marketing Campaigns",
      "Global Marketing",
      "Content Marketing",
      "Marketing Analytics"
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
        "name": "Abu Sufian - Chief Marketing Officer",
        "item": "https://syncops.tech/cmo"
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
        <AbuSufianProfile />
      </main>
    </>
  );
};

export default AbuSufianProfilePage;

