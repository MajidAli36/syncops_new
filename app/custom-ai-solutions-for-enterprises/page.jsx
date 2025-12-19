import CustomAISolutionsClient from "./_components/CustomAISolutionsClient";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const generateMetadata = () => {
  return generateSEO({
    title: "Custom AI Solutions for Enterprises | Enterprise AI Development | SyncOps",
    description: "Enterprise-grade custom AI solutions delivered from Pakistan to USA, UK, Europe, Canada, Australia, Singapore, and UAE. Scalable AI platforms, machine learning systems, and intelligent automation for large organizations.",
    keywords: [
      "custom ai solutions for enterprises",
      "enterprise ai solutions company",
      "enterprise ai development services",
      "enterprise ai solutions",
      "enterprise ai development",
      "large scale ai systems",
      "enterprise machine learning",
      "corporate ai solutions",
      "enterprise ai platform",
      "ai for large organizations",
      "enterprise ai consulting",
      "SyncOps",
      "enterprise artificial intelligence"
    ],
    url: "/custom-ai-solutions-for-enterprises",
    type: "website"
  });
};

export default function CustomAISolutionsPage() {
  return <CustomAISolutionsClient />;
}

