"use client";

import { ArrowRight, Calendar, MessageSquare } from "lucide-react";
import SafeLink from "../../../components/ui/SafeLink";
import InViewWrapper from "../../../components/InViewWrapper";

const ProductCTA = ({ product, color }) => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <InViewWrapper animation="fadeUp" className="max-w-4xl mx-auto text-center">
          <div className={`bg-gradient-to-r ${color} rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl`}>
            <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Experience the power of {product.title} and transform your operations today. Get a personalized demo or request a custom quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <SafeLink
                href={product.demoLink || "/contact?type=demo&source=product"}
                className="inline-flex items-center justify-center bg-white text-brand-navy px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:shadow-xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                View Demo
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </SafeLink>
              <SafeLink
                href="/contact?type=quote&source=product"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-white/20 hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get a Quote
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </SafeLink>
            </div>
            
            {product.pricing && (
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/20">
                <p className="text-white/80 text-sm sm:text-base">
                  <span className="font-semibold">Starting at:</span> {product.pricing.startingAt}
                </p>
                <p className="text-white/60 text-xs sm:text-sm mt-2">
                  {product.pricing.description}
                </p>
              </div>
            )}
          </div>
        </InViewWrapper>
      </div>
    </section>
  );
};

export default ProductCTA;

