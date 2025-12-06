import ProductsClient from './_components/ProductsClient';

export const generateMetadata = () => ({
  title: "Products - SyncOps | AI-Powered SaaS Solutions for Modern Businesses",
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
    "SmartProperty"
  ],
  openGraph: {
    title: "Products - SyncOps | SaaS Building Blocks",
    description: "Production-ready modules for workflows, data sync, and cloud security. Launch faster with our prebuilt SaaS building blocks.",
    type: "website",
    url: "https://syncops.tech/products",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products - SyncOps | SaaS Building Blocks",
    description: "Production-ready modules for workflows, data sync, and cloud security.",
  },
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://syncops.tech/products",
  },
});

export default function ProductsPage() {
  return (
    <>
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

