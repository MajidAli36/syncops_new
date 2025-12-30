"use client";
import SafeLink from "../../../components/ui/SafeLink";
import { servicesData } from "../../../utils/servicesUtils";
import { ArrowRight } from "lucide-react";

export default function RelatedServices({ category }) {
  const related = Object.entries(servicesData)
    .slice(0, 3)
    .map(([slug, service]) => ({ slug, ...service }));

  if (related.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-gray-200" aria-labelledby="related-services-heading">
      <h2 id="related-services-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
        Related Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((service) => (
          <SafeLink
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group block p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#00B894]/30"
            aria-label={`Learn more about ${service.title}`}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#00B894] transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
              {service.description.substring(0, 100)}...
            </p>
            <div className="flex items-center text-[#00B894] font-semibold text-sm group-hover:gap-2 transition-all duration-300">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </SafeLink>
        ))}
      </div>
      <div className="mt-8 text-center">
        <SafeLink
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          aria-label="View all services"
        >
          View All Services
          <ArrowRight className="w-5 h-5" />
        </SafeLink>
      </div>
    </section>
  );
}

