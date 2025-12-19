import BestAISoftwareHouseClient from "./_components/BestAISoftwareHouseClient";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const generateMetadata = () => {
  return generateSEO({
    title: "Best AI Software House in Pakistan | SyncOps - #1 AI Development Company",
    description: "SyncOps is Pakistan's leading AI software house. Expert AI development, custom software solutions, and enterprise automation. 50+ projects, 99.5% satisfaction. Best AI software company in Pakistan.",
    keywords: [
      "best ai software house in pakistan",
      "ai software development pakistan",
      "ai development company pakistan",
      "artificial intelligence pakistan",
      "machine learning services pakistan",
      "custom ai solutions pakistan",
      "ai automation pakistan",
      "software development company pakistan",
      "ai consulting pakistan",
      "enterprise ai solutions",
      "SyncOps",
      "ai software company",
      "pakistan ai developers"
    ],
    url: "/best-ai-software-house-in-pakistan",
    type: "website"
  });
};

export default function BestAISoftwareHousePage() {
  return <BestAISoftwareHouseClient />;
}

