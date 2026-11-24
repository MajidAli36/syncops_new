import { notFound } from "next/navigation";
import ProductHero from "./_components/ProductHero";
import ProductFeatures from "./_components/ProductFeatures";
import ProductUseCases from "./_components/ProductUseCases";
import ProductIntegrations from "./_components/ProductIntegrations";
import ProductBenefits from "./_components/ProductBenefits";
import RelatedProducts from "./_components/RelatedProducts";
import { productsData, getProductBySlug, getRelatedProducts } from "../_data/products";

// Generate SEO metadata for each product
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | SyncOps",
      description: "The requested product could not be found.",
    };
  }

  // Generate keywords based on product content
  const keywords = [
    product.title.toLowerCase(),
    product.category.toLowerCase(),
    "SaaS product",
    "AI-powered solution",
    "SyncOps",
    ...product.features.map(f => f.toLowerCase()),
  ].filter(Boolean);

  // Generate description
  const description = `${product.description} ${product.tagline}. Discover features, use cases, integrations, and pricing for ${product.title}.`;

  const url = `https://syncops.tech/products/${slug}`;
  const imageUrl = product.image?.startsWith('http') 
    ? product.image 
    : `https://syncops.tech${product.image}`;

  return {
    title: `${product.title} - ${product.tagline} | SyncOps`,
    description: description,
    keywords: keywords.join(", "),
    authors: [{ name: "SyncOps" }],
    openGraph: {
      title: `${product.title} - ${product.tagline} | SyncOps`,
      description: description,
      type: "website",
      url: url,
      siteName: "SyncOps",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${product.title} - ${product.tagline}`,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} - ${product.tagline} | SyncOps`,
      description: description,
      images: [imageUrl],
      creator: "@SyncOps",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
  };
}

function parseOfferPrice(startingAt) {
  if (!startingAt || typeof startingAt !== 'string') return null;
  const match = startingAt.replace(/,/g, '').match(/(\d+(?:\.\d+)?)/);
  return match ? match[1] : null;
}

// Generate structured data (JSON-LD) for SEO
function generateStructuredData(product, slug) {
  const numericPrice = parseOfferPrice(product.pricing?.startingAt);
  const ratingRaw = product.stats.find((s) => s.label === 'Rating')?.value || '4.5/5';
  const [ratingValue, bestRating = '5'] = String(ratingRaw).split('/');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.title,
    "description": product.description,
    "url": `https://syncops.tech/products/${slug}`,
    "image": product.image?.startsWith('http') 
      ? product.image 
      : `https://syncops.tech${product.image}`,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      ...(numericPrice
        ? { price: numericPrice, priceCurrency: "USD" }
        : { priceCurrency: "USD", description: product.pricing?.description || "Contact for pricing" }),
      "availability": "https://schema.org/InStock",
      "url": `https://syncops.tech/products/${slug}`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue || "4.5",
      "bestRating": bestRating || "5",
      "worstRating": "1"
    },
    "featureList": product.features,
    "screenshot": product.image,
    "provider": {
      "@type": "Organization",
      "name": "SyncOps",
      "url": "https://syncops.tech",
    },
    "publisher": {
      "@type": "Organization",
      "name": "SyncOps",
      "url": "https://syncops.tech",
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-US",
    "isAccessibleForFree": false,
  };

  // Add software requirements if available
  if (product.technicalSpecs) {
    structuredData.softwareRequirements = {
      "@type": "SoftwareApplication",
      "operatingSystem": "Web Browser",
      "browserRequirements": "Modern web browser with JavaScript enabled"
    };
  }

  return structuredData;
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(slug, 3);
  const structuredData = generateStructuredData(product, slug);

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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.title,
        "item": `https://syncops.tech/products/${slug}`
      }
    ]
  };

  return (
    <>
      {/* Structured Data (JSON-LD) for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <article className="bg-white min-h-screen relative" itemScope itemType="https://schema.org/SoftwareApplication" style={{ paddingTop: '0', marginTop: '0' }}>
        <ProductHero product={product} />
        <ProductFeatures features={product.features} color={product.color} />
        <ProductBenefits benefits={product.benefits} color={product.color} />
        <ProductUseCases useCases={product.useCases} color={product.color} />
        <ProductIntegrations integrations={product.integrations} color={product.color} />
        <RelatedProducts relatedProducts={relatedProducts} />
      </article>
    </>
  );
}

