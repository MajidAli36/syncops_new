import NidaNaeemProfile from "./_components/NidaNaeemProfile";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const metadata = generateSEO({
  title: "Nida Naeem – Chief Business Development Officer, SyncOps Tech | Business Leadership",
  description: "Nida Naeem is the Chief Business Development Officer of SyncOps Tech, responsible for global client partnerships, strategic growth, and building long-term relationships with enterprises across USA, UK, Europe, Canada, Australia, Singapore, and UAE.",
  keywords: [
    "Nida Naeem",
    "SyncOps CBDO",
    "Chief Business Development Officer",
    "business development",
    "client partnerships",
    "global business strategy",
    "enterprise partnerships",
    "business development leader",
    "SyncOps leadership"
  ],
  url: "/cbdo",
  type: "website",
  noindex: false
});

const NidaNaeemProfilePage = () => {
  // Structured data for CBDO Profile
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nida Naeem",
    "jobTitle": "Chief Business Development Officer",
    "worksFor": {
      "@type": "Organization",
      "name": "SyncOps Tech",
      "url": "https://syncops.tech"
    },
    "description": "Chief Business Development Officer of SyncOps Tech, responsible for global client partnerships, strategic growth, and business development.",
    "url": "https://syncops.tech/cbdo",
    "sameAs": [
      "https://www.linkedin.com/in/nidanaeem-syncops/"
    ],
    "image": "https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948234/nidanaeem-cbdo-syncops_kcaaml.jpg"
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
        "name": "Nida Naeem - Chief Business Development Officer",
        "item": "https://syncops.tech/cbdo"
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
        <NidaNaeemProfile />
      </main>
    </>
  );
};

export default NidaNaeemProfilePage;

