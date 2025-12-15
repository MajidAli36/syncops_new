import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const metadata = generateSEO({
  title: "Case Studies - Success Stories & Portfolio | SyncOps Software Development",
  description:
    "Explore SyncOps case studies showcasing successful AI-powered software solutions across healthcare, HR management, real estate, warehouse management, and more. See how we've helped businesses transform their operations with cutting-edge technology. 50+ successful projects, 99.5% uptime.",
  keywords: [
    "case studies",
    "software development case studies",
    "AI solutions case studies",
    "healthcare software",
    "HR management software",
    "real estate technology",
    "SyncOps success stories",
    "software development portfolio",
    "enterprise software solutions",
    "digital transformation",
    "project portfolio",
    "client success stories",
    "software projects",
    "AI projects",
    "enterprise solutions"
  ],
  url: "/case-studies",
  type: "website",
  image: "https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017876/geopluse-syncops_v05qbs.png"
});

export default function CaseStudiesLayout({ children }) {
  return <>{children}</>;
}

