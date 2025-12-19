"use client";
import React, { useEffect } from "react";
import SafeLink from "../../components/ui/SafeLink";
import { ArrowRight, Globe, Target, Code, Building2, Shield, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../../lib/motionConfig";

export default function AboutSyncOpsClient() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SyncOps",
      "description": "Pakistan-based AI software company building intelligent systems for global clients",
      "url": "https://syncops.tech/about-syncops",
      "logo": "https://syncops.tech/images/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gujranwala",
        "addressRegion": "Punjab",
        "addressCountry": "PK"
      },
      "sameAs": [
        "https://www.linkedin.com/company/syncops",
        "https://clutch.co/profile/syncops"
      ]
    };

    const structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.text = JSON.stringify(structuredData);
    structuredDataScript.id = 'about-syncops-structured-data';
    
    if (!document.getElementById('about-syncops-structured-data')) {
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
          "name": "About SyncOps",
          "item": "https://syncops.tech/about-syncops"
        }
      ]
    };
    
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
    breadcrumbScript.id = 'about-syncops-breadcrumb-data';
    
    if (!document.getElementById('about-syncops-breadcrumb-data')) {
      document.head.appendChild(breadcrumbScript);
    }
    
    return () => {
      const existingStructured = document.getElementById('about-syncops-structured-data');
      if (existingStructured) existingStructured.remove();
      const existingBreadcrumb = document.getElementById('about-syncops-breadcrumb-data');
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
              About{" "}
              <span className="gradient-text">SyncOps</span>
            </motion.h1>

            <motion.p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-medium" variants={fadeUp(24)}>
              Building AI software solutions for global enterprises from Pakistan
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who SyncOps Is */}
      <section className="relative py-20 bg-white" aria-labelledby="who-we-are-heading">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              id="who-we-are-heading"
              className="text-3xl lg:text-4xl font-bold text-brand-navy mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Who SyncOps Is
            </motion.h2>
            
            <motion.div
              className="space-y-6 text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg">
                SyncOps is an AI software development company based in Pakistan, serving clients across the United States, United Kingdom, Europe, Canada, Australia, Singapore, and the United Arab Emirates. We specialize in building artificial intelligence systems, intelligent SaaS platforms, and enterprise automation solutions that help global businesses operate more efficiently and compete more effectively.
              </p>
              <p className="text-lg">
                Our location in Pakistan provides us with access to exceptional engineering talent, competitive cost structures, and timezone advantages that enable productive collaboration with clients in both European and American markets. But more importantly, it reflects our commitment to building a world-class technology company that demonstrates the quality and capability of Pakistani engineering talent on the global stage.
              </p>
              <p className="text-lg">
                What defines SyncOps isn't just our location or our technical capabilities—it's our approach to building software. We're product-driven, meaning we think about software from the perspective of the people who will use it and the businesses it will serve. We're AI-first, meaning we don't treat artificial intelligence as an add-on feature but as a fundamental capability that should be architected into systems from the ground up. And we're partnership-oriented, meaning we build long-term relationships with clients rather than treating projects as one-time transactions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why SyncOps Exists */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="why-we-exist-heading">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              id="why-we-exist-heading"
              className="text-3xl lg:text-4xl font-bold text-brand-navy mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why SyncOps Exists
            </motion.h2>
            
            <motion.div
              className="space-y-6 text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg">
                The problem SyncOps exists to solve is straightforward: many businesses struggle to build AI capabilities that actually deliver value. They invest in AI initiatives that promise transformation but deliver disappointment. They work with vendors who treat AI as a checkbox rather than a strategic capability. They end up with systems that are technically impressive but practically useless, or systems that work in demos but fail in production.
              </p>
              <p className="text-lg">
                We believe the solution requires a fundamentally different approach. AI shouldn't be bolted onto existing systems as an afterthought—it should be designed into software from the beginning, with careful consideration of how it will be used, how it will scale, and how it will evolve. This requires an AI-first mindset that prioritizes intelligent capabilities over traditional features, and a system-driven approach that thinks about software as integrated platforms rather than isolated applications.
              </p>
              <p className="text-lg">
                Our mission is to help businesses build AI capabilities that create genuine value—systems that automate real work, provide real insights, and deliver real results. We do this by combining deep technical expertise with product thinking, ensuring the AI systems we build solve actual business problems rather than just demonstrating technical capability. We focus on building systems that work reliably in production, scale efficiently as usage grows, and evolve gracefully as requirements change.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What SyncOps Builds */}
      <section className="relative py-20 bg-white" aria-labelledby="what-we-build-heading">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              id="what-we-build-heading"
              className="text-3xl lg:text-4xl font-bold text-brand-navy mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What SyncOps Builds
            </motion.h2>
            
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                  <Code className="w-6 h-6 text-brand-aqua" />
                  AI Software
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We build custom AI software solutions that solve specific business problems. This includes machine learning models for predictive analytics, natural language processing systems for understanding and generating text, computer vision applications for image and video analysis, and intelligent automation systems that make decisions and take actions. Our AI software is designed to integrate seamlessly with existing systems while providing new capabilities that weren't possible before.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-brand-aqua" />
                  AI SaaS Platforms
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  SaaS platforms with AI capabilities require careful architecture to handle scale, multi-tenancy, and computational workloads. We build SaaS platforms that embed AI throughout the user experience—from intelligent search and recommendations to automated content generation and predictive analytics. These platforms are designed to serve thousands of users efficiently while maintaining high performance and reasonable costs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-brand-aqua" />
                  Automation & Enterprise Systems
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Enterprise automation systems need to be reliable, secure, and maintainable. We build intelligent automation that goes beyond simple rule-based workflows, incorporating AI capabilities that can understand context, make decisions, and adapt to changing conditions. These systems help enterprises operate more efficiently while maintaining the control and oversight that large organizations require.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product-Driven DNA */}
      <section className="relative py-20 bg-gradient-to-br from-brand-navy via-brand-card to-brand-navy" aria-labelledby="product-dna-heading">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              id="product-dna-heading"
              className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Product-Driven DNA
            </motion.h2>
            
            <motion.div
              className="space-y-6 text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg">
                What distinguishes SyncOps from many software development companies is that we build and operate our own AI-powered products and platforms. This isn't a marketing claim—it's a fundamental part of how we work. We maintain a portfolio of SaaS products that serve real users, process real data, and face real challenges. This experience directly informs how we approach client work.
              </p>
              <p className="text-lg">
                Building our own products teaches us lessons that are difficult to learn any other way. We understand what it means to maintain AI models in production, handle edge cases at scale, manage costs as usage grows, and iterate based on real user feedback. We've faced the challenges of model drift, data quality issues, and performance optimization under real-world conditions. This practical experience means we can anticipate problems before they become issues and architect solutions that are both sophisticated and maintainable.
              </p>
              <p className="text-lg">
                Our product-driven approach also reflects a long-term engineering mindset. We think about software as systems that will evolve over years, not just projects that need to be completed. This perspective influences everything from how we architect solutions to how we write code to how we document our work. We build for maintainability, scalability, and evolution—because we know from experience that software that works today needs to continue working and improving tomorrow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Delivery Philosophy */}
      <section className="relative py-20 bg-white" aria-labelledby="delivery-heading">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              id="delivery-heading"
              className="text-3xl lg:text-4xl font-bold text-brand-navy mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Global Delivery Philosophy
            </motion.h2>
            
            <motion.div
              className="space-y-6 text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg">
                SyncOps operates as a remote-first company, designed from the ground up to work effectively with clients regardless of geographic location. This isn't a pandemic-era adaptation—it's how we've always worked. Our processes, tools, and culture are built around the assumption that the best talent and the best clients might be anywhere in the world, and that great work can happen when teams collaborate across distances.
              </p>
              <p className="text-lg">
                Security and transparency form the foundation of how we work with global clients. We maintain strict security standards, comprehensive NDAs, and clear intellectual property protections. We're transparent about our processes, our progress, and our decisions—ensuring clients always understand what's happening with their projects and why. This transparency builds trust and enables productive collaboration even when teams are separated by thousands of miles.
              </p>
              <p className="text-lg">
                Our approach is fundamentally partnership-oriented. We don't view client relationships as transactions but as long-term collaborations. This means we invest in understanding your business, your industry, and your strategic objectives. We think about how the work we do today fits into your broader goals, and we're committed to building solutions that continue to deliver value as your business evolves. We're not just building software for you—we're building capabilities with you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="values-heading">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              id="values-heading"
              className="text-3xl lg:text-4xl font-bold text-brand-navy mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Values & Principles
            </motion.h2>
            
            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                  <Code className="w-6 h-6 text-brand-aqua" />
                  Engineering Excellence
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We believe in doing work that we're proud of. This means writing clean, maintainable code. It means building systems that are well-architected and thoughtfully designed. It means solving problems properly rather than taking shortcuts. Engineering excellence isn't about perfectionism—it's about building software that works reliably, scales efficiently, and can be maintained and evolved over time. This commitment to quality benefits our clients in the long run, even if it sometimes means taking a bit more time upfront.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-brand-aqua" />
                  Transparency
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We believe in being transparent about our work, our processes, and our decisions. This means clear communication about project status, honest assessments of challenges and risks, and straightforward explanations of technical choices. We don't hide problems or oversell capabilities. This transparency builds trust and enables productive collaboration. When clients understand what's happening and why, they can make informed decisions and provide valuable feedback that improves outcomes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-brand-aqua" />
                  Responsibility
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We take responsibility for the work we do and the impact it has. This means thinking carefully about how AI systems will be used, what biases they might introduce, and what consequences they might have. It means building systems that are secure, reliable, and respectful of user privacy. It means standing behind our work and being accountable when things don't go as planned. Responsibility isn't just about delivering on commitments—it's about considering the broader implications of the technology we build.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
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
              Explore Collaboration with SyncOps
            </motion.h2>
            
            <motion.div
              className="space-y-6 text-gray-300 leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg">
                If you're interested in learning more about how SyncOps approaches AI software development, or if you'd like to explore how we might work together, we'd welcome the opportunity to connect. We're always open to discussing potential projects, sharing our perspective on AI development challenges, or simply learning about the problems you're trying to solve.
              </p>
              <p className="text-lg">
                Whether you're considering a specific AI project, looking for a long-term development partner, or just curious about how a Pakistan-based team might fit into your technology strategy, we're happy to have a conversation. We believe the best partnerships start with understanding—understanding your business, your challenges, and your goals—and we're always interested in learning about new opportunities to create value through intelligent software.
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
                aria-label="Contact SyncOps to explore collaboration"
              >
                Start a Conversation
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

