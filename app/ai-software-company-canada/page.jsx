import AISoftwareCompanyCanadaClient from "./_components/AISoftwareCompanyCanadaClient";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const generateMetadata = () => {
  return generateSEO({
    title: "AI Software Company Canada | AI Development Services for Canada | SyncOps",
    description: "Expert AI software development company serving Canadian businesses. Custom AI solutions, machine learning, and intelligent automation delivered from Pakistan to Canada. Enterprise-grade AI software for Canadian companies.",
    keywords: [
      "ai software company canada",
      "ai software development canada",
      "ai development company canada",
      "ai software services canada",
      "custom ai solutions canada",
      "ai automation canada",
      "machine learning services canada",
      "ai consulting canada",
      "enterprise ai solutions canada",
      "ai software development company canada",
      "ai development services canada",
      "artificial intelligence canada"
    ],
    url: "/ai-software-company-canada",
    type: "website"
  });
};

export default function AISoftwareCompanyCanadaPage() {
  return <AISoftwareCompanyCanadaClient />;
}

