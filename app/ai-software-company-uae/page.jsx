import AISoftwareCompanyUAEClient from "./_components/AISoftwareCompanyUAEClient";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const generateMetadata = () => {
  return generateSEO({
    title: "AI Software Company UAE | AI Development Services for United Arab Emirates | SyncOps",
    description: "Expert AI software development company serving UAE businesses. Custom AI solutions, machine learning, and intelligent automation delivered from Pakistan to United Arab Emirates. Enterprise-grade AI software for UAE companies.",
    keywords: [
      "ai software company uae",
      "ai software development uae",
      "ai development company united arab emirates",
      "ai software services uae",
      "custom ai solutions uae",
      "ai automation uae",
      "machine learning services uae",
      "ai consulting uae",
      "enterprise ai solutions uae",
      "ai software development company uae",
      "ai development services uae",
      "artificial intelligence uae"
    ],
    url: "/ai-software-company-uae",
    type: "website"
  });
};

export default function AISoftwareCompanyUAEPage() {
  return <AISoftwareCompanyUAEClient />;
}

