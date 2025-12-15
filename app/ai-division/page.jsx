import AIDivisionClient from './_components/AIDivisionClient';
import { generateMetadata as generateSEO } from '../utils/seoUtils';

export const generateMetadata = () => {
  return generateSEO({
    title: "AI Division - Machine Learning & AI Solutions | SyncOps",
    description:
      "Transform your business with SyncOps AI Division. Cutting-edge machine learning solutions, predictive analytics, and intelligent automation. Custom ML models, AI strategy, and end-to-end AI implementation. 98% forecast accuracy, $2M+ fraud prevented.",
    keywords: [
      "AI solutions",
      "machine learning",
      "predictive analytics",
      "AI automation",
      "ML models",
      "deep learning",
      "NLP",
      "computer vision",
      "AI consulting",
      "MLOps",
      "TensorFlow",
      "PyTorch",
      "AI strategy",
      "business intelligence AI",
      "artificial intelligence",
      "AI implementation",
      "ML consulting"
    ],
    url: "/ai-division",
    type: "website"
  });
};

export default function AIDivisionPage() {
  // Generate breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://syncops.tech"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "AI Division",
        "item": "https://syncops.tech/ai-division"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AIDivisionClient />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SyncOps AI Division",
            "url": "https://syncops.tech/ai-division",
            "description": "Cutting-edge machine learning solutions, predictive analytics, and intelligent automation",
            "serviceType": "AI Solutions",
            "areaServed": "Worldwide",
            "offers": [
              {
                "@type": "Offer",
                "name": "Machine Learning Solutions",
                "description": "Custom ML models and algorithms tailored to your business needs"
              },
              {
                "@type": "Offer",
                "name": "AI Automation",
                "description": "Intelligent workflow automation powered by AI and RPA"
              },
              {
                "@type": "Offer",
                "name": "Predictive Analytics",
                "description": "Data-driven insights and forecasting for informed decisions"
              },
              {
                "@type": "Offer",
                "name": "AI Strategy & Consulting",
                "description": "Comprehensive AI readiness assessment and strategic roadmap development"
              }
            ]
          })
        }}
      />
    </>
  );
}