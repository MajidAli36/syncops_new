"use client";

import { Database, Server, Package, Box, DollarSign, Mail, Calendar, Beaker, Pill, Briefcase, Linkedin, Cloud, Chrome, StickyNote, CreditCard, Link, Map, Navigation, Clipboard, BarChart, GraduationCap } from "lucide-react";
import { StaggerWrapper } from "../../../components/InViewWrapper";
import InViewWrapper from "../../../components/InViewWrapper";

const iconMap = {
  Database,
  Server,
  Package,
  Box,
  DollarSign,
  Mail,
  Calendar,
  Beaker,
  Pill,
  Briefcase,
  Linkedin,
  Cloud,
  Chrome,
  StickyNote,
  CreditCard,
  Link,
  Map,
  Navigation,
  Clipboard,
  BarChart,
  GraduationCap
};

const ProductIntegrations = ({ integrations, color }) => {
  if (!integrations || integrations.length === 0) return null;

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden" aria-labelledby="integrations-heading">
      {/* Background decoration */}
      <div className={`absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr ${color} opacity-5 rounded-full blur-3xl`}></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <InViewWrapper animation="fadeUp" className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 id="integrations-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-3 sm:mb-4">
            Integrations
          </h2>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-brand mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Seamlessly connect with your existing tools and workflows
          </p>
        </InViewWrapper>

        <StaggerWrapper className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" stagger={0.1}>
          {integrations.map((integration, index) => {
            const IconComponent = iconMap[integration.icon] || Database;
            return (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group text-center"
              >
                <div className={`bg-gradient-to-r ${color} rounded-lg sm:rounded-xl p-3 sm:p-4 mx-auto mb-3 sm:mb-4 w-fit group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <p className="text-sm sm:text-base font-medium text-gray-700 group-hover:text-brand-navy transition-colors">
                  {integration.name}
                </p>
              </div>
            );
          })}
        </StaggerWrapper>
      </div>
    </section>
  );
};

export default ProductIntegrations;

