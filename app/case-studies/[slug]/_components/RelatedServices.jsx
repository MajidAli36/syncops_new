"use client";
import SafeLink from "../../../components/ui/SafeLink";
import { servicesData } from "../../../utils/servicesUtils";
import { ArrowRight } from "lucide-react";

export default function RelatedServices({ industry }) {
  // Get services related to this industry (or show top 4)
  const related = Object.entries(servicesData)
    .slice(0, 4)
    .map(([slug, service]) => ({ slug, ...service }));

  if (related.length === 0) return null;

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" aria-labelledby="related-services-heading">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5 rounded-full blur-3xl" aria-hidden="true"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full border border-[#00B894]/20 mb-6">
            <div className="w-2 h-2 bg-[#00B894] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-[#00B894]">Our Services</span>
          </div>
          <h2 id="related-services-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            Related Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-balance leading-relaxed">
            Explore our services that can help transform your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {related.map((service) => (
            <SafeLink
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#00B894]/30"
              aria-label={`Learn more about ${service.title}`}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#00B894] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
                {service.description.substring(0, 120)}...
              </p>
              <div className="flex items-center text-[#00B894] font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </SafeLink>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <SafeLink
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            aria-label="View all services"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </SafeLink>
        </div>
      </div>
    </section>
  );
}

