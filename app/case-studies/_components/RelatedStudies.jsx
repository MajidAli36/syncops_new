"use client";

import React from "react";
import SafeLink from "../../components/ui/SafeLink";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { StaggerWrapper } from "../../components/InViewWrapper";
import InViewWrapper from "../../components/InViewWrapper";

const RelatedCaseStudies = ({ caseStudies }) => {
  if (!caseStudies || caseStudies.length === 0) return null;

  return (
    <section className="bg-gradient-to-b from-white via-gray-50/50 to-white py-12 sm:py-16 lg:py-24 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-80 sm:h-80 bg-brand-aqua/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <InViewWrapper animation="fadeUp" className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-3 sm:mb-4">
            Explore More Success Stories
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover how we've helped other businesses achieve their goals and
            transform their digital presence.
          </p>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-brand mx-auto mt-4 sm:mt-6 rounded-full"></div>
        </InViewWrapper>
        
        <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch" stagger={0.15}>
          {caseStudies.map((study, index) => (
            <div key={index} className="flex h-full">
              <SafeLink href={study.link || "#"} className="group w-full flex flex-col">
                <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-brand-teal hover:shadow-2xl transition-all duration-500 flex flex-col h-full hover:scale-[1.03] relative">
                  {/* Industry badge */}
                  {study.industry && (
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-gradient-brand text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg">
                      {study.industry}
                    </div>
                  )}
                  
                  <div 
                    className="relative overflow-hidden"
                  >
                    <Image
                      src={study.image}
                      alt={`${study.title} - ${study.industry} case study by SyncOps. ${study.description}`}
                      width={400}
                      height={250}
                      className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ objectPosition: 'center 20%' }}
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-navy mb-2 sm:mb-3 group-hover:text-brand-teal transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-grow leading-relaxed">{study.description}</p>
                    <div className="flex items-center text-brand-teal font-semibold text-sm sm:text-base mt-auto group-hover:text-brand-aqua transition-colors">
                      Read Case Study
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </SafeLink>
            </div>
          ))}
        </StaggerWrapper>
      </div>

    </section>
  );
};

export default RelatedCaseStudies;
