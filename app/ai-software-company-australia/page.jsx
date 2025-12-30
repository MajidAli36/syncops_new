import AISoftwareCompanyAustraliaClient from "./_components/AISoftwareCompanyAustraliaClient";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const generateMetadata = () => {
  return generateSEO({
    title: "AI Software Company Australia | AI Development Services for Australia | SyncOps",
    description: "Expert AI software development company serving Australian businesses. Custom AI solutions, machine learning, and intelligent automation delivered from Pakistan to Australia. Enterprise-grade AI software for Australian companies.",
    keywords: [
      "ai software company australia",
      "ai software development australia",
      "ai development company australia",
      "ai software services australia",
      "custom ai solutions australia",
      "ai automation australia",
      "machine learning services australia",
      "ai consulting australia",
      "enterprise ai solutions australia",
      "ai software development company australia",
      "ai development services australia",
      "artificial intelligence australia"
    ],
    url: "/ai-software-company-australia",
    type: "website"
  });
};

export default function AISoftwareCompanyAustraliaPage() {
  return <AISoftwareCompanyAustraliaClient />;
}

