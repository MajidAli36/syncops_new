import AISoftwareDevelopmentClient from "./_components/AISoftwareDevelopmentClient";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const generateMetadata = () => {
  return generateSEO({
    title: "AI Software Development Pakistan | Expert AI Solutions | SyncOps",
    description: "Expert AI software development services in Pakistan delivering to USA, UK, Europe, Canada, Australia, Singapore, and UAE. Custom AI solutions, machine learning, and intelligent automation.",
    keywords: [
      "ai software development pakistan",
      "ai development company in pakistan",
      "ai software company pakistan",
      "ai development pakistan",
      "machine learning pakistan",
      "deep learning pakistan",
      "custom ai solutions pakistan",
      "ai consulting pakistan",
      "artificial intelligence development",
      "ml development pakistan",
      "intelligent automation pakistan",
      "SyncOps",
      "ai developers pakistan"
    ],
    url: "/ai-software-development-pakistan",
    type: "website"
  });
};

export default function AISoftwareDevelopmentPage() {
  return <AISoftwareDevelopmentClient />;
}

