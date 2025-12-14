import ProductsClient from './_components/ProductsClient';
import { generateMetadata as generateSEO } from '../utils/seoUtils';

export const generateMetadata = () => {
  return generateSEO({
    title: "Products - AI-Powered SaaS Solutions for Modern Businesses | SyncOps",
    description: "Discover SyncOps productized SaaS solutions: Warehouse SyncOps, SyncPeople HR, MedMindi Healthcare, SyncIQ Intelligence, GeoPluse Location, FitResume Builder, StudyMate Education, and SmartProperty Real Estate. Production-ready AI-powered platforms with 99.9% uptime, enterprise-grade security, and seamless integrations.",
    keywords: [
      "SaaS products",
      "AI-powered solutions",
      "warehouse management",
      "HR management software",
      "healthcare management",
      "operational intelligence",
      "location intelligence",
      "resume builder",
      "education platform",
      "real estate software",
      "enterprise software",
      "API integration",
      "Warehouse SyncOps",
      "SyncPeople",
      "MedMindi",
      "SyncIQ",
      "GeoPluse",
      "FitResume",
      "StudyMate",
      "SmartProperty",
      "SaaS building blocks",
      "productized solutions"
    ],
    url: "/products",
    type: "website"
  });
};

export default function ProductsPage() {
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
        "name": "Products",
        "item": "https://syncops.tech/products"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "SyncOps Products",
            "description": "Productized SaaS building blocks for modern teams",
            "url": "https://syncops.tech/products",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "SoftwareApplication",
                  "name": "Warehouse SyncOps",
                  "description": "AI-powered warehouse management and visualization platform",
                  "applicationCategory": "BusinessApplication",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "SyncPeople",
                  "description": "AI-powered HR management platform with payroll and analytics",
                  "applicationCategory": "BusinessApplication",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "MedMindi",
                  "description": "Comprehensive healthcare management system with patient records",
                  "applicationCategory": "HealthApplication",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "SyncIQ",
                  "description": "AI-powered operational intelligence platform with audit automation",
                  "applicationCategory": "BusinessApplication",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "GeoPluse",
                  "description": "Advanced geospatial analytics and location-based services platform",
                  "applicationCategory": "BusinessApplication",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "FitResume",
                  "description": "AI-powered resume builder with ATS optimization",
                  "applicationCategory": "BusinessApplication",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "StudyMate",
                  "description": "AI-powered educational platform for homework help and learning",
                  "applicationCategory": "EducationalApplication",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "SmartProperty",
                  "description": "AI-powered real estate platform with property valuation and blockchain verification",
                  "applicationCategory": "BusinessApplication",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock"
                  }
                }
              ]
            }
          })
        }}
      />
      <ProductsClient />
    </>
  );
}

