import React from "react";
import { notFound } from "next/navigation";
import KeyFeatures from "../_components/KeyFeatures";
import Process from "../_components/Process";
import RelatedServices from "./_components/RelatedServices";
import RelatedCaseStudies from "./_components/RelatedCaseStudies";
import FAQSection from "./_components/FAQSection";
import SafeLink from "../../components/ui/SafeLink";
import { servicesData } from "../../utils/servicesUtils";
import Image from "next/image";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

import { generateMetadata as generateSEO, generateServiceSchema } from "../../utils/seoUtils";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) {
    return {
      title: "Service Not Found | SyncOps",
      description: "The requested service could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  // Generate keywords from service features and title
  const keywords = [
    service.title.toLowerCase(),
    "software development",
    "SyncOps services",
    "custom software",
    "enterprise solutions",
    ...(service.features?.slice(0, 5).map(f => f.title.toLowerCase()) || []),
  ].filter(Boolean);

  return generateSEO({
    title: `${service.title} - Professional Software Development Services | SyncOps`,
    description: `${service.description.substring(0, 150)}... Professional ${service.title} services by SyncOps. 50+ successful projects, 99.5% uptime.`,
    keywords,
    url: `/services/${slug}`,
    type: "website"
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  // Generate structured data for the service
  const serviceSchema = generateServiceSchema({
    name: service.title,
    description: service.description,
    slug: slug
  });

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
        "name": "Services",
        "item": "https://syncops.tech/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://syncops.tech/services/${slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen">
      <section className="py-12 lg:py-16 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')]"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-2/3 w-full">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full border border-[#00B894]/20 mb-6">
                <div className="w-2 h-2 bg-[#00B894] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-[#00B894]">Service Overview</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl text-balance leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Quick Stats with contextual links */}
              <div className="grid grid-cols-3 gap-4 max-w-2xl">
                <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                  <div className="text-2xl font-bold text-[#00B894] mb-1">95%</div>
                  <div className="text-xs font-semibold text-gray-600">Success Rate</div>
                </div>
                <SafeLink
                  href="/case-studies"
                  className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:border-[#00C4FF]/30 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-[#00C4FF] mb-1">50+</div>
                  <div className="text-xs font-semibold text-gray-600">Projects</div>
                </SafeLink>
                <SafeLink
                  href="/about"
                  className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:border-[#00B894]/30 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-[#00B894] mb-1">99.5%</div>
                  <div className="text-xs font-semibold text-gray-600">Uptime</div>
                </SafeLink>
              </div>
              
              {/* CTA with link */}
              <div className="mt-8">
                <SafeLink
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                  aria-label="Get started with our services"
                >
                  Get Started Today
                </SafeLink>
              </div>
            </div>
            
            <div className="lg:w-1/3 w-full mt-8 lg:mt-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-3xl p-2 shadow-2xl border border-gray-100">
                  <Image
                    src={service.image}
                    alt={`${service.title} illustration`}
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-2xl object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full border border-[#00B894]/20 mb-6">
              <div className="w-2 h-2 bg-[#00B894] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#00B894]">Implementation Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
              {service.processTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-balance leading-relaxed">
              {service.processDescription}
            </p>
          </div>
          
          <Process
            process={service.process}
            accentColor={service.accentColor}
          />
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#00C4FF]/5 to-[#00B894]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full border border-[#00B894]/20 mb-6">
              <div className="w-2 h-2 bg-[#00B894] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#00B894]">Key Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-balance leading-relaxed">
              Discover the powerful features that make our solutions stand out
            </p>
          </div>
          
          <KeyFeatures
            features={service.features}
            accentColor={service.accentColor}
          />
        </div>
      </section>

      {/* Related Services Section */}
      <RelatedServices currentSlug={slug} />

      {/* Related Case Studies Section */}
      <RelatedCaseStudies service={service.title} />

      {/* FAQ Section */}
      <FAQSection service={service.title} />
    </div>
    </> 
  );
}
