"use client";
import React, { useEffect } from "react";
import SafeLink from "../../components/ui/SafeLink";
import { ArrowRight, Brain, Code, Zap, Database, Cloud, Shield, Rocket, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../../lib/motionConfig";

export default function AISoftwareCompanyCanadaClient() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "AI Software Development",
      "name": "AI Software Company Canada - SyncOps",
      "description": "Expert AI software development services for Canadian businesses. Custom AI solutions, machine learning, and intelligent automation delivered from Pakistan.",
      "provider": {
        "@type": "Organization",
        "name": "SyncOps",
        "url": "https://syncops.tech"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Canada"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://syncops.tech/ai-software-company-canada",
        "serviceType": "Online"
      }
    };

    const structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.text = JSON.stringify(structuredData);
    structuredDataScript.id = 'ai-software-canada-structured-data';
    
    if (!document.getElementById('ai-software-canada-structured-data')) {
      document.head.appendChild(structuredDataScript);
    }

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://syncops.tech"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "AI Software Company Canada",
          "item": "https://syncops.tech/ai-software-company-canada"
        }
      ]
    };
    
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
    breadcrumbScript.id = 'ai-software-canada-breadcrumb-data';
    
    if (!document.getElementById('ai-software-canada-breadcrumb-data')) {
      document.head.appendChild(breadcrumbScript);
    }
    
    return () => {
      const existingStructured = document.getElementById('ai-software-canada-structured-data');
      if (existingStructured) existingStructured.remove();
      const existingBreadcrumb = document.getElementById('ai-software-canada-breadcrumb-data');
      if (existingBreadcrumb) existingBreadcrumb.remove();
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-brand-navy via-brand-card to-brand-navy min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-gray-900" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" aria-hidden="true"></div>

        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-10 left-1/4 w-64 h-64 bg-brand-aqua/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-1/3 right-1/5 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl animate-float-slower" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <motion.div className="text-center text-white" {...stagger.container(0.08)}>
            <motion.h1 
              id="hero-heading"
              className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6" 
              variants={fadeUp(22)}
            >
              AI Software Company{" "}
              <span className="gradient-text">Canada 🇨🇦</span>
            </motion.h1>

            <motion.p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-medium" variants={fadeUp(24)}>
              Building intelligent software systems for Canadian businesses. Delivered from Pakistan to Canada with seamless collaboration and world-class quality.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" variants={fadeUp(28)}>
              <SafeLink
                href="/contact"
                className="btn-primary inline-flex items-center justify-center group"
                aria-label="Get started with SyncOps"
              >
                <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </SafeLink>

              <SafeLink
                href="/case-studies"
                className="btn-secondary inline-flex items-center justify-center group"
                aria-label="View our case studies"
              >
                View Case Studies
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </SafeLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hero Introduction */}
      <section className="relative py-16 bg-white" aria-labelledby="introduction-heading">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                SyncOps is an AI software development company serving businesses across Canada. While our development center is based in Pakistan, we've structured our operations specifically to work seamlessly with Canadian companies, ensuring that geographic distance doesn't become a barrier to effective partnership. Our team specializes in building AI-driven software systems that combine machine learning capabilities, intelligent automation, and scalable architecture to solve complex business problems for Canadian clients.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Working with Canadian companies requires more than technical expertise—it demands clear communication, reliable processes, and understanding of Canadian business culture. Our delivery model is specifically designed to bridge the gap between Pakistan and Canada, with timezone overlap that enables real-time collaboration, communication protocols that ensure transparency, and development processes that align with how Canadian companies work. We've built successful partnerships with startups, scale-ups, and enterprises across Canada, delivering AI software solutions that compete with work done anywhere in the world.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                For Canadian CTOs, founders, and product leaders considering an AI development partner, we understand the importance of trust, quality, and reliable delivery. Our development processes are designed to work seamlessly across time zones, with clear communication protocols, regular progress reporting, and agile methodologies that ensure your project stays on track. We maintain strict security standards, comprehensive NDAs, and full intellectual property protection, ensuring your sensitive data and proprietary algorithms remain secure throughout our engagement. Our track record with Canadian clients demonstrates that geographic location doesn't limit our ability to deliver enterprise-grade AI software solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose SyncOps for Canada */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="why-choose-heading">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.h2
            id="why-choose-heading"
            className="text-3xl lg:text-4xl font-bold text-brand-navy mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Canadian Companies Choose SyncOps
          </motion.h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <motion.div
              className="bg-white p-8 rounded-2xl border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                <Globe className="w-8 h-8 text-brand-aqua" />
                Seamless Canada-Pakistan Collaboration
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Pakistan's timezone provides convenient overlap with Canadian business hours, especially for Eastern and Central time zones. This overlap enables real-time collaboration during critical phases of development, regular standup meetings that work for both teams, and the ability to address urgent issues without significant delays. We structure our work schedules to maximize this overlap, ensuring that your team can reach us during your business hours and that we can participate in important discussions and decision-making processes in real-time.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                <Brain className="w-8 h-8 text-brand-aqua" />
                AI-First Engineering Excellence
              </h3>
              <p className="text-gray-700 leading-relaxed">
                SyncOps operates as an AI-first engineering company, not a generic outsourcing agency. This distinction matters because it means we approach every project with engineering rigor, architectural thinking, and a deep understanding of what it takes to build AI software that succeeds in production. We don't just implement algorithms—we think about data quality, model performance, system reliability, and long-term maintainability. This engineering-first mindset ensures that the AI software we build is designed to perform reliably, scale efficiently, and evolve over time.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                <Shield className="w-8 h-8 text-brand-aqua" />
                PIPEDA Compliance & Data Protection
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Security, confidentiality, and intellectual property protection are non-negotiable foundations of our client relationships. We operate under comprehensive NDAs, maintain strict access controls, and follow security best practices including encrypted communications, secure development environments, and regular security audits. We understand Canadian PIPEDA requirements and ensure all data handling meets Canadian privacy standards, making us a trusted partner for Canadian businesses handling sensitive information.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services for Canada */}
      <section className="relative py-20 bg-white" aria-labelledby="services-heading">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.h2
            id="services-heading"
            className="text-3xl lg:text-4xl font-bold text-brand-navy mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            AI Software Services for Canadian Businesses
          </motion.h2>

          <div className="max-w-5xl mx-auto space-y-16">
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                <Code className="w-8 h-8 text-brand-aqua" />
                Custom AI Software Development
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We build custom AI-powered software systems tailored to your specific business needs. From machine learning models to intelligent automation platforms, our solutions are designed to integrate seamlessly with your existing infrastructure and scale with your business growth.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                <Cloud className="w-8 h-8 text-brand-aqua" />
                AI SaaS Platform Development
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Building AI-powered SaaS platforms requires specialized expertise in multi-tenancy, scalability, and cost optimization. We architect and develop SaaS solutions with AI capabilities embedded throughout, ensuring your platform can scale to thousands of users while maintaining performance and cost efficiency.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                <Zap className="w-8 h-8 text-brand-aqua" />
                Intelligent Automation Solutions
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our intelligent automation services go beyond simple rule-based workflows. We build systems that understand context, make decisions, learn from patterns, and adapt to changing conditions—helping Canadian businesses reduce manual effort while improving accuracy and consistency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-gradient-to-br from-brand-navy via-brand-card to-brand-navy" aria-labelledby="cta-heading">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              id="cta-heading"
              className="text-3xl lg:text-4xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to Build AI Software for Your Canadian Business?
            </motion.h2>
            
            <motion.div
              className="space-y-6 text-gray-300 leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg">
                If you're a Canadian company considering how AI software can transform your business operations, we'd welcome the opportunity to discuss your specific needs and explore potential solutions. Our experience working with Canadian companies has taught us how to bridge geographic and cultural differences to deliver exceptional results.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <SafeLink
                href="/contact"
                className="btn-primary inline-flex items-center justify-center group"
                aria-label="Contact SyncOps to discuss your AI software project"
              >
                Discuss Your AI Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </SafeLink>

              <SafeLink
                href="/case-studies"
                className="btn-secondary inline-flex items-center justify-center group"
                aria-label="View our case studies"
              >
                View Our Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </SafeLink>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

