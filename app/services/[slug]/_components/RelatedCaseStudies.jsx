"use client";
import SafeLink from "../../../components/ui/SafeLink";
import { caseStudiesData } from "../../../case-studies/_data/caseStudies";
import { ArrowRight, Briefcase } from "lucide-react";
import Image from "next/image";

export default function RelatedCaseStudies({ service }) {
  // Get case studies related to this service (or show top 3)
  const related = Object.entries(caseStudiesData)
    .slice(0, 3)
    .map(([slug, data]) => ({ slug, ...data }));

  if (related.length === 0) return null;

  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden" aria-labelledby="success-stories-heading">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#00C4FF]/5 to-[#00B894]/5 rounded-full blur-3xl" aria-hidden="true"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full border border-[#00B894]/20 mb-6">
            <Briefcase className="w-4 h-4 text-[#00B894]" />
            <span className="text-sm font-semibold text-[#00B894]">Success Stories</span>
          </div>
          <h2 id="success-stories-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-balance leading-relaxed">
            See how we've helped businesses achieve remarkable results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {related.map((study) => (
            <SafeLink
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group block bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#00B894]/30"
              aria-label={`Read case study: ${study.title}`}
            >
              <div className="relative h-48 bg-gray-200 overflow-hidden">
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
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800 rounded-full">
                    {study.industry}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#00B894] transition-colors duration-300 line-clamp-2">
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
        
        <div className="mt-12 text-center">
          <SafeLink
            href="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            aria-label="View all case studies"
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5" />
          </SafeLink>
        </div>
      </div>
    </section>
  );
}

