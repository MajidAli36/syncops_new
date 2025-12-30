import AISoftwareCompanyUSAClient from "./_components/AISoftwareCompanyUSAClient";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const generateMetadata = () => {
  return generateSEO({
    title: "AI Software Company USA | AI Development Services for United States | SyncOps",
    description: "Expert AI software development company serving USA businesses. Custom AI solutions, machine learning, and intelligent automation delivered from Pakistan to United States. Enterprise-grade AI software for American companies.",
    keywords: [
      "ai software company usa",
      "ai software development usa",
      "ai development company united states",
      "ai software services usa",
      "custom ai solutions usa",
      "ai automation usa",
      "machine learning services usa",
      "ai consulting usa",
      "enterprise ai solutions usa",
      "ai software development company usa",
      "ai development services usa",
      "artificial intelligence usa"
    ],
    url: "/ai-software-company-usa",
    type: "website"
  });
};

export default function AISoftwareCompanyUSAPage() {
  return <AISoftwareCompanyUSAClient />;
}

