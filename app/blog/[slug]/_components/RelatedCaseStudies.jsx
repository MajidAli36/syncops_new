"use client";
import SafeLink from "../../../components/ui/SafeLink";
import { caseStudiesData } from "../../../case-studies/_data/caseStudies";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function RelatedCaseStudies({ tags = [] }) {
  const related = Object.entries(caseStudiesData)
    .slice(0, 3)
    .map(([slug, data]) => ({ slug, ...data }));

  if (related.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-gray-200" aria-labelledby="related-case-studies-heading">
      <h2 id="related-case-studies-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
        Related Case Studies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((study) => (
          <SafeLink
            key={study.slug}
            href={`/case-studies/${study.slug}`}
            className="group block bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#00B894]/30"
            aria-label={`Read case study: ${study.title}`}
          >
            <div className="relative h-40 bg-gray-200 overflow-hidden">
              {study.image && (
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" aria-hidden="true"></div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#00B894] transition-colors duration-300 line-clamp-2">
                {study.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">
                {study.subtitle || study.description?.substring(0, 100)}...
              </p>
              <div className="flex items-center text-[#00B894] font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                <span>Read Case Study</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </SafeLink>
        ))}
      </div>
      <div className="mt-8 text-center">
        <SafeLink
          href="/case-studies"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          aria-label="View all case studies"
        >
          View All Case Studies
          <ArrowRight className="w-5 h-5" />
        </SafeLink>
      </div>
    </section>
  );
}

