"use client";

import Image from "next/image";
import SafeLink from "../../../components/ui/SafeLink";
import { ArrowRight } from "lucide-react";
import { StaggerWrapper } from "../../../components/InViewWrapper";
import InViewWrapper from "../../../components/InViewWrapper";

const RelatedProducts = ({ relatedProducts }) => {
  if (!relatedProducts || relatedProducts.length === 0) return null;

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden" aria-labelledby="related-products-heading">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <InViewWrapper animation="fadeUp" className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 id="related-products-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-3 sm:mb-4">
            Related Products
          </h2>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-brand mx-auto rounded-full"></div>
        </InViewWrapper>

        <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10" stagger={0.15}>
          {relatedProducts.map((product, index) => (
            <SafeLink
              key={index}
              href={`/products/${product.slug}`}
              className="block group h-full"
              aria-label={`View ${product.title} product details`}
            >
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-900 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={`${product.title} - ${product.tagline}`}
                    width={400}
                    height={224}
                    className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-teal transition-colors duration-300 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 font-medium">{product.tagline}</p>
                  
                  {/* CTA */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="inline-flex items-center text-brand-teal group-hover:text-brand-aqua transition-colors duration-300 font-semibold text-sm">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </article>
            </SafeLink>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
};

export default RelatedProducts;

