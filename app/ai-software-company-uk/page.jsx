import AISoftwareCompanyUKClient from "./_components/AISoftwareCompanyUKClient";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const generateMetadata = () => {
  return generateSEO({
    title: "AI Software Company UK | AI Development Services for United Kingdom | SyncOps",
    description: "Expert AI software development company serving UK businesses. Custom AI solutions, machine learning, and intelligent automation delivered from Pakistan to United Kingdom. Enterprise-grade AI software for British companies.",
    keywords: [
      "ai software company uk",
      "ai software development uk",
      "ai development company united kingdom",
      "ai software services uk",
      "custom ai solutions uk",
      "ai automation uk",
      "machine learning services uk",
      "ai consulting uk",
      "enterprise ai solutions uk",
      "ai software development company uk",
      "ai development services uk",
      "artificial intelligence uk"
    ],
    url: "/ai-software-company-uk",
    type: "website"
  });
};

export default function AISoftwareCompanyUKPage() {
  return <AISoftwareCompanyUKClient />;
}

