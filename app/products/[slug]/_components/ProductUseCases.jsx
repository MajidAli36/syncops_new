"use client";

import { Lightbulb, TrendingUp, Zap, Shield, DollarSign, Clock, FileText, Users, Database, FileCheck, AlertTriangle, Search, Map, Globe, BookOpen, GraduationCap, Target, Palette, Package, Box } from "lucide-react";
import { StaggerWrapper } from "../../../components/InViewWrapper";
import InViewWrapper from "../../../components/InViewWrapper";

const iconMap = {
  TrendingUp,
  Zap,
  Shield,
  DollarSign,
  Clock,
  FileText,
  Users,
  Database,
  FileCheck,
  AlertTriangle,
  Search,
  Map,
  Globe,
  BookOpen,
  GraduationCap,
  Target,
  Palette,
  Lightbulb,
  Package,
  Box
};

const ProductUseCases = ({ useCases, color }) => {
  if (!useCases || useCases.length === 0) return null;

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden" aria-labelledby="use-cases-heading">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <InViewWrapper animation="fadeUp" className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 id="use-cases-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-3 sm:mb-4">
            Use Cases
          </h2>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-brand mx-auto rounded-full"></div>
        </InViewWrapper>
        
        <StaggerWrapper className="max-w-5xl mx-auto space-y-4 sm:space-y-6" stagger={0.15}>
          {useCases.map((useCase, index) => {
            const IconComponent = iconMap[useCase.icon] || Lightbulb;
            return (
              <article
                key={index}
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg border-l-4 border-brand-teal hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                  <div className={`bg-gradient-to-r ${color} rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-navy mb-2 sm:mb-3 group-hover:text-brand-teal transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </StaggerWrapper>
      </div>
    </section>
  );
};

export default ProductUseCases;

