"use client";

import { CheckCircle2 } from "lucide-react";
import { StaggerWrapper } from "../../../components/InViewWrapper";
import InViewWrapper from "../../../components/InViewWrapper";

const ProductBenefits = ({ benefits, color }) => {
  if (!benefits || benefits.length === 0) return null;

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden" aria-labelledby="benefits-heading">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <InViewWrapper animation="fadeUp" className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 id="benefits-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-3 sm:mb-4">
            Key Benefits
          </h2>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-brand mx-auto rounded-full"></div>
        </InViewWrapper>

        <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto" stagger={0.1}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-3 sm:gap-4 bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className={`bg-gradient-to-r ${color} rounded-lg p-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium leading-relaxed group-hover:text-brand-navy transition-colors pt-1">
                {benefit}
              </p>
            </div>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
};

export default ProductBenefits;

