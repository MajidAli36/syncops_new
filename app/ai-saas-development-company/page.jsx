import AISaaSDevelopmentClient from "./_components/AISaaSDevelopmentClient";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const generateMetadata = () => {
  return generateSEO({
    title: "AI SaaS Development Company | Build Scalable AI SaaS Platforms | SyncOps",
    description: "Expert AI SaaS development company delivering intelligent SaaS platforms to USA, UK, Europe, Canada, Australia, Singapore, and UAE. AI-powered SaaS development services from Pakistan.",
    keywords: [
      "ai saas development company",
      "ai saas development services",
      "ai saas development pakistan",
      "saas development with ai",
      "ai-powered saas platform",
      "intelligent saas solutions",
      "custom saas development",
      "saas platform development",
      "ai saas software",
      "machine learning saas",
      "saas automation",
      "enterprise saas development",
      "SyncOps",
      "saas development services",
      "ai saas development pakistan"
    ],
    url: "/ai-saas-development-company",
    type: "website"
  });
};

export default function AISaaSDevelopmentPage() {
  return <AISaaSDevelopmentClient />;
}

