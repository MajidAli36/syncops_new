import AIAutomationServicesClient from "./_components/AIAutomationServicesClient";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const generateMetadata = () => {
  return generateSEO({
    title: "AI Automation Services Pakistan | Intelligent Automation Solutions | SyncOps",
    description: "Expert AI automation services in Pakistan delivering to USA, UK, Europe, Canada, Australia, Singapore, and UAE. Intelligent process automation, workflow automation, and AI-powered business optimization.",
    keywords: [
      "ai automation services pakistan",
      "ai automation company in pakistan",
      "ai process automation services",
      "intelligent automation pakistan",
      "rpa pakistan",
      "workflow automation pakistan",
      "business process automation",
      "ai-powered automation",
      "process automation pakistan",
      "intelligent process automation",
      "automation services pakistan",
      "ai workflow automation",
      "SyncOps",
      "robotic process automation"
    ],
    url: "/ai-automation-services-pakistan",
    type: "website"
  });
};

export default function AIAutomationServicesPage() {
  return <AIAutomationServicesClient />;
}

