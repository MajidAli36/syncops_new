"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle, Lightbulb, Zap, ArrowRight } from "lucide-react";
import ImageModal from "./ImageModal";
import { StaggerWrapper } from "../../components/InViewWrapper";
import InViewWrapper from "../../components/InViewWrapper";

const SolutionSection = ({ solutions }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Return null if solutions is undefined or empty
  if (!solutions || !Array.isArray(solutions) || solutions.length === 0) {
    return null;
  }

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden" aria-labelledby="solutions-heading">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-bl from-brand-teal/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <InViewWrapper animation="fadeUp" className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 id="solutions-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-3 sm:mb-4">
            Our Solutions
          </h2>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-brand mx-auto rounded-full"></div>
        </InViewWrapper>

        {/* Two Images Side by Side */}
        <StaggerWrapper className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10" stagger={0.2}>
          {solutions.map((solution, index) => (
            <article 
              key={index} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 group" 
              itemScope 
              itemType="https://schema.org/Thing"
            >
              {/* Image */}
              <div 
                className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[320px] overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage({
                  src: solution.image,
                  alt: `${solution.title} - ${solution.description.substring(0, 100)}`,
                  title: solution.title
                })}
              >
                <Image
                  src={solution.image}
                  alt={`${solution.title} - ${solution.description.substring(0, 100)}`}
                  width={600}
                  height={320}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                  style={{ objectPosition: 'center 20%' }}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
                {/* Enhanced overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4 sm:pb-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-white font-semibold text-xs sm:text-sm bg-white/20 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 rounded-lg border border-white/30 flex items-center gap-2">
                    Click to enlarge
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-gradient-brand rounded-lg sm:rounded-xl p-2 sm:p-3 mr-3 sm:mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg flex-shrink-0">
                    {index === 0 ? <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" /> : <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />}
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-navy group-hover:text-brand-teal transition-colors" itemProp="name">
                    {solution.title}
                  </h3>
                </div>
                
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed" itemProp="description">
                  {solution.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 sm:space-y-3" aria-label={`Features of ${solution.title}`}>
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start group/item">
                      <CheckCircle className="text-brand-teal w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3 flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" aria-hidden="true" />
                      <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-brand-navy transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </StaggerWrapper>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          title={selectedImage.title}
        />
      )}
    </section>
  );
};

export default SolutionSection;
