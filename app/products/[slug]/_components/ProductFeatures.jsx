"use client";

import { CheckCircle2, Zap } from "lucide-react";
import { StaggerWrapper } from "../../../components/InViewWrapper";
import InViewWrapper from "../../../components/InViewWrapper";

const ProductFeatures = ({ features, color }) => {
  if (!features || features.length === 0) return null;

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden" aria-labelledby="features-heading">
      {/* Background decoration */}
      <div className={`absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-bl ${color} opacity-5 rounded-full blur-3xl`}></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <InViewWrapper animation="fadeUp" className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 id="features-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-3 sm:mb-4">
            Key Features
          </h2>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-brand mx-auto rounded-full"></div>
        </InViewWrapper>

        <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" stagger={0.1}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className={`bg-gradient-to-r ${color} rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium leading-relaxed group-hover:text-brand-navy transition-colors">
                  {feature}
                </p>
              </div>
            </div>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
};

export default ProductFeatures;

