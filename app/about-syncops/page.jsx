import AboutSyncOpsClient from "./_components/AboutSyncOpsClient";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const generateMetadata = () => {
  return generateSEO({
    title: "About SyncOps - Pakistan-Based AI Software Company Serving Global Markets",
    description: "Learn about SyncOps, a Pakistan-based AI software company building intelligent systems for clients across USA, UK, EU, Canada, Australia, Singapore, and UAE. Our product-driven approach and engineering excellence.",
    keywords: [
      "about SyncOps",
      "SyncOps company",
      "AI software company Pakistan",
      "Pakistan software development",
      "global AI development",
      "SyncOps team",
      "AI software house",
      "enterprise AI solutions",
      "SyncOps values",
      "engineering excellence"
    ],
    url: "/about-syncops",
    type: "website"
  });
};

export default function AboutSyncOpsPage() {
  return <AboutSyncOpsClient />;
}

