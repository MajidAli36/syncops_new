import WhySyncOpsClient from "./_components/WhySyncOpsClient";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const generateMetadata = () => {
  return generateSEO({
    title: "Why SyncOps - Choosing the Right AI Development Partner | SyncOps",
    description: "Why choose SyncOps for AI software development? AI-first approach, product-driven mindset, engineering excellence, and global delivery model. Built for CTOs and enterprise decision-makers.",
    keywords: [
      "why choose SyncOps",
      "AI development partner",
      "AI software company",
      "enterprise AI solutions",
      "CTO decision making",
      "AI development services",
      "SyncOps advantages",
      "AI-first development",
      "product-driven AI",
      "engineering excellence"
    ],
    url: "/why-syncops",
    type: "website"
  });
};

export default function WhySyncOpsPage() {
  return <WhySyncOpsClient />;
}

