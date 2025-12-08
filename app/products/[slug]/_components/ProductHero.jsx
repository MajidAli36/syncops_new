"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, CheckCircle2, TrendingUp, Clock, Star, Zap, Sparkles, Shield, RefreshCw } from "lucide-react";
import SafeLink from "../../../components/ui/SafeLink";
import ImageModal from "../../../case-studies/_components/ImageModal";
import InViewWrapper from "../../../components/InViewWrapper";

const iconMap = {
  Zap,
  RefreshCw,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Clock,
  CheckCircle2
};

const ProductHero = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const IconComponent = iconMap[product.icon] || Zap;

  return (
    <section className="relative pt-4 pb-8 sm:pb-12 lg:pt-6 lg:pb-16 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden" style={{ marginTop: '0', zIndex: 1, scrollMarginTop: '120px' }}>
      {/* Decorative background elements */}
      <div className={`absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br ${product.color} opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none`}></div>
      <div className={`absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr ${product.color} opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none`}></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <InViewWrapper animation="fadeUp" delay={0.1}>
              {/* Category Badge */}
              <div className={`inline-flex items-center bg-gradient-to-r ${product.color} px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white text-xs sm:text-sm font-medium mb-3 sm:mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                {product.category}
              </div>
            </InViewWrapper>
            
            <InViewWrapper animation="fadeUp" delay={0.2}>
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-brand-navy mb-3 sm:mb-4">
                {product.title}
              </h1>
            </InViewWrapper>
            
            <InViewWrapper animation="fadeUp" delay={0.3}>
              {/* Tagline */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-2 sm:mb-3 font-medium">
                {product.tagline}
              </p>
              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {product.description}
              </p>
            </InViewWrapper>
            
            <InViewWrapper animation="fadeUp" delay={0.4}>
              {/* Product Stats */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6">
                {product.stats.map((stat, index) => {
                  const StatIcon = iconMap[stat.icon] || TrendingUp;
                  return (
                    <div key={index} className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 sm:px-6 sm:py-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                      <div className={`bg-gradient-to-r ${product.color} rounded-lg p-1.5 sm:p-2 flex-shrink-0`}>
                        <StatIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-brand-navy">{stat.value}</div>
                        <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </InViewWrapper>

            <InViewWrapper animation="fadeUp" delay={0.5}>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <SafeLink
                  href={product.demoLink || "/contact?type=demo&source=product"}
                  className={`inline-flex items-center justify-center bg-gradient-to-r ${product.color} text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:shadow-glow transition-all duration-300 hover:scale-105 group w-full sm:w-auto`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  <span className="hidden sm:inline">View Demo</span>
                  <span className="sm:hidden">Demo</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </SafeLink>
                <SafeLink
                  href="/contact?type=quote&source=product"
                  className="inline-flex items-center justify-center bg-white text-brand-navy border-2 border-brand-navy px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-brand-navy hover:text-white hover:shadow-lg transition-all duration-300 group w-full sm:w-auto"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </SafeLink>
              </div>
            </InViewWrapper>
          </div>
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 pt-14">
            <InViewWrapper animation="scaleIn" delay={0.3}>
              <div 
                className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl cursor-pointer group relative bg-gray-900 flex items-center justify-center p-0 w-full"
                onClick={() => setIsModalOpen(true)}
              >
                <Image
                  src={product.image}
                  alt={`${product.title} - ${product.tagline}`}
                  width={600}
                  height={400}
                  className="w-full h-auto max-h-[250px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[400px] xl:max-h-[450px] object-contain transition-transform duration-500 group-hover:scale-105"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
                {/* Enhanced overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4 sm:pb-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white font-semibold text-xs sm:text-sm bg-white/20 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 rounded-lg border border-white/30">
                    Click to enlarge
                  </div>
                </div>
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
            </InViewWrapper>
          </div>

          {/* Image Modal */}
          <ImageModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            imageSrc={product.image}
            imageAlt={`${product.title} - ${product.tagline}`}
            title={product.title}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductHero;

