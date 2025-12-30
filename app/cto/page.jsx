import RimshaImranProfile from "./_components/RimshaImranProfile";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const metadata = generateSEO({
  title: "Rimsha Imran – Chief Technology Officer, SyncOps Tech | Technical Leadership",
  description: "Rimsha Imran is the Chief Technology Officer of SyncOps Tech, responsible for AI architecture, scalable engineering systems, and technical excellence in delivering enterprise solutions to global markets.",
  keywords: [
    "Rimsha Imran",
    "SyncOps CTO",
    "Chief Technology Officer",
    "AI architecture",
    "technical leadership",
    "engineering leader",
    "SaaS architecture",
    "enterprise AI systems",
    "technology CTO"
  ],
  url: "/cto",
  type: "website",
  noindex: false
});

const RimshaImranProfilePage = () => {
  // Structured data for CTO Profile
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rimsha Imran",
    "jobTitle": "Chief Technology Officer",
    "worksFor": {
      "@type": "Organization",
      "name": "SyncOps Tech",
      "url": "https://syncops.tech"
    },
    "description": "Chief Technology Officer of SyncOps Tech, responsible for AI architecture, scalable engineering systems, and technical excellence.",
    "url": "https://syncops.tech/cto",
    "sameAs": [
      "https://www.linkedin.com/in/rimshaimran-syncops/",
      "https://www.rimshaimran.tech/"
    ],
    "image": "https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948234/rimshaimran-cto-syncops_lvs2eb.jpg"
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
        "name": "Rimsha Imran - Chief Technology Officer",
        "item": "https://syncops.tech/cto"
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
        <RimshaImranProfile />
      </main>
    </>
  );
};

export default RimshaImranProfilePage;

