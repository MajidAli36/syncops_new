"use client";
import React, { useEffect } from "react";
import SafeLink from "../../components/ui/SafeLink";
import { ArrowRight, Brain, Code, Building2, Shield, Users, Globe, Target, CheckCircle, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../../lib/motionConfig";

export default function WhySyncOpsClient() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Why SyncOps - Choosing the Right AI Development Partner",
      "description": "Understanding why SyncOps is the right choice for AI software development. AI-first approach, product-driven mindset, and engineering excellence.",
      "url": "https://syncops.tech/why-syncops",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "name": "SyncOps",
        "url": "https://syncops.tech"
      }
    };

    const structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.text = JSON.stringify(structuredData);
    structuredDataScript.id = 'why-syncops-structured-data';
    
    if (!document.getElementById('why-syncops-structured-data')) {
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
          "name": "Why SyncOps",
          "item": "https://syncops.tech/why-syncops"
        }
      ]
    };
    
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
    breadcrumbScript.id = 'why-syncops-breadcrumb-data';
    
    if (!document.getElementById('why-syncops-breadcrumb-data')) {
      document.head.appendChild(breadcrumbScript);
    }
    
    return () => {
      const existingStructured = document.getElementById('why-syncops-structured-data');
      if (existingStructured) existingStructured.remove();
      const existingBreadcrumb = document.getElementById('why-syncops-breadcrumb-data');
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
              Why{" "}
              <span className="gradient-text">SyncOps</span>
            </motion.h1>

            <motion.p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-medium" variants={fadeUp(24)}>
              Choosing the right AI development partner is a strategic decision that shapes your technology capabilities for years to come
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Intro: Choosing an AI Partner Is a Strategic Decision */}
      <section className="relative py-20 bg-white" aria-labelledby="intro-heading">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              id="intro-heading"
              className="text-3xl lg:text-4xl font-bold text-brand-navy mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Choosing an AI Partner Is a Strategic Decision
            </motion.h2>
            
            <motion.div
              className="space-y-6 text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg">
                When you're evaluating AI development partners, you're not just choosing a vendor—you're selecting a team that will shape your technology capabilities, influence your product strategy, and impact your competitive position. This decision has long-term implications that extend far beyond the initial project scope. The right partner becomes a strategic asset; the wrong one becomes a costly mistake.
              </p>
              <p className="text-lg">
                The challenge is that many AI development companies look similar on the surface. They all claim expertise in machine learning, promise cutting-edge solutions, and showcase impressive case studies. But the differences that matter—how they think about AI, how they approach product development, how they handle complexity and scale—these aren't always visible in marketing materials or initial conversations.
              </p>
              <p className="text-lg">
                This page is designed to help you understand what makes SyncOps different, and more importantly, whether those differences align with what you need. We believe in transparency about our approach, our capabilities, and our limitations. Our goal isn't to convince everyone to work with us—it's to help the right companies make informed decisions about whether we're the right fit for their needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI-First, Not AI-After */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="ai-first-heading">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              id="ai-first-heading"
              className="text-3xl lg:text-4xl font-bold text-brand-navy mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              AI-First, Not AI-After
            </motion.h2>
            
            <motion.div
              className="space-y-6 text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg">
                Most software development companies treat AI as an add-on capability. They build traditional software first, then look for places to insert AI features. This approach often results in systems where AI feels bolted on rather than integrated, where intelligent capabilities are limited by architectural constraints, and where the full potential of AI is never realized.
              </p>
              <p className="text-lg">
                SyncOps takes a fundamentally different approach: we think AI-first. This means we consider how artificial intelligence can solve problems from the very beginning of the design process. We architect systems with AI capabilities as core functionality, not as optional enhancements. We design data pipelines, model training processes, and inference systems as integral parts of the software architecture, not as afterthoughts.
              </p>
              <p className="text-lg">
                This AI-first mindset produces different outcomes. Systems are more scalable because they're designed to handle AI workloads efficiently. They're more maintainable because AI components are properly integrated rather than awkwardly attached. They're more capable because AI isn't constrained by architectures that weren't designed for it. If you're building software where AI is central to the value proposition, working with a team that thinks AI-first from day one makes a significant difference.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Builders, Not Just Service Providers */}
      <section className="relative py-20 bg-white" aria-labelledby="product-builders-heading">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              id="product-builders-heading"
              className="text-3xl lg:text-4xl font-bold text-brand-navy mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Product Builders, Not Just Service Providers
            </motion.h2>
            
            <motion.div
              className="space-y-6 text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg">
                There's a significant difference between companies that build software for clients and companies that build software products. Service providers focus on delivering what's requested, completing projects, and moving on to the next engagement. Product builders think about software from the perspective of the people who will use it, the businesses it will serve, and the problems it will solve over time.
              </p>
              <p className="text-lg">
                SyncOps operates as product builders. We maintain our own portfolio of AI-powered SaaS products that serve real users, process real data, and face real challenges. This experience fundamentally changes how we approach client work. We understand what it means to maintain software in production, iterate based on user feedback, scale systems as usage grows, and evolve products as requirements change. We've faced the same challenges our clients face, and this practical experience directly benefits the work we do.
              </p>
              <p className="text-lg">
                When you work with product builders, you get more than code—you get perspective. We think about user experience, product-market fit, and long-term viability. We consider how features will be used, how systems will scale, and how software will evolve. We ask questions about business objectives, user needs, and strategic goals. This product mindset ensures the software we build doesn't just meet technical requirements—it creates genuine value for your business and your users.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engineering-Led Culture */}
      <section className="relative py-20 bg-gradient-to-br from-brand-navy via-brand-card to-brand-navy" aria-labelledby="engineering-heading">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              id="engineering-heading"
              className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Engineering-Led Culture
            </motion.h2>
            
            <motion.div
              className="space-y-6 text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg">
                Engineering excellence isn't just a value at SyncOps—it's the foundation of how we work. We're led by engineers who understand both the technical and business sides of software development. This means technical decisions are made by people who understand the implications, architectural choices are informed by real-world experience, and quality standards are set by those who will maintain the code.
              </p>
              <p className="text-lg">
                Our engineering culture prioritizes doing things right over doing things quickly. We write clean, maintainable code. We build well-architected systems. We solve problems properly rather than taking shortcuts. This approach sometimes means taking a bit more time upfront, but it pays dividends in reliability, maintainability, and long-term cost. Systems that are built well are easier to extend, easier to debug, and easier to evolve as requirements change.
              </p>
              <p className="text-lg">
                This engineering focus also means we're honest about technical challenges. We don't oversell capabilities or underestimate complexity. We provide realistic assessments of what's possible, what's difficult, and what's not feasible. This transparency helps you make informed decisions and set appropriate expectations. When you work with an engineering-led team, you get technical honesty and practical expertise, not sales promises.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global-Ready Delivery Model */}
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
              Global-Ready Delivery Model
            </motion.h2>
            
            <motion.div
              className="space-y-6 text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg">
                SyncOps is designed from the ground up to work effectively with global clients. Our processes, tools, and culture are built around the assumption that great work can happen when teams collaborate across distances. We've invested in the infrastructure, practices, and experience needed to make remote collaboration seamless and productive.
              </p>
              <p className="text-lg">
                Pakistan's timezone provides significant overlap with European business hours and convenient scheduling windows for clients in the United States. This overlap enables real-time collaboration during critical phases, regular meetings that work for both teams, and the ability to address urgent issues without significant delays. We structure our work schedules to maximize this overlap, ensuring your team can reach us when you need us most.
              </p>
              <p className="text-lg">
                Our communication practices are specifically designed for distributed teams. We maintain clear documentation, use transparent project management tools, conduct regular check-ins, and ensure you always have visibility into project status. We've learned that successful remote collaboration requires more than just good technology—it requires intentional processes, clear expectations, and a commitment to keeping everyone aligned.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security, IP & Compliance Focus */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="security-heading">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              id="security-heading"
              className="text-3xl lg:text-4xl font-bold text-brand-navy mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Security, IP & Compliance Focus
            </motion.h2>
            
            <motion.div
              className="space-y-6 text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg">
                When you're working with a development partner, especially one in a different country, security and intellectual property protection are legitimate concerns. We take these concerns seriously and have built our practices around protecting your data, your algorithms, and your intellectual property.
              </p>
              <p className="text-lg">
                We operate under comprehensive NDAs, maintain strict access controls, and follow security best practices including encrypted communications, secure development environments, and regular security audits. We understand that your AI models, training data, and proprietary algorithms are valuable assets, and we treat them with the same care we would our own. Our security practices are designed to meet enterprise standards, and we're happy to discuss specific security requirements for your industry or use case.
              </p>
              <p className="text-lg">
                Compliance is another area where we're proactive. We're aware of GDPR requirements for European clients, HIPAA considerations for healthcare applications, and other regulatory frameworks that may apply. We build compliance considerations into our development process from the beginning rather than trying to add them later. If you have specific compliance requirements, we'll work with you to ensure they're met throughout the development process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Long-Term Partnership Mindset */}
      <section className="relative py-20 bg-white" aria-labelledby="partnership-heading">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              id="partnership-heading"
              className="text-3xl lg:text-4xl font-bold text-brand-navy mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Long-Term Partnership Mindset
            </motion.h2>
            
            <motion.div
              className="space-y-6 text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg">
                Many development companies treat client relationships as transactions. They focus on completing projects, delivering deliverables, and moving on. This approach works fine for simple, one-off projects, but it falls short when you're building capabilities that need to evolve over time.
              </p>
              <p className="text-lg">
                SyncOps operates with a partnership mindset. We invest in understanding your business, your industry, and your strategic objectives. We think about how the work we do today fits into your broader goals, and we're committed to building solutions that continue to deliver value as your business evolves. We're not just building software for you—we're building capabilities with you.
              </p>
              <p className="text-lg">
                This partnership approach means we're invested in your success. We provide honest feedback about technical decisions, suggest improvements based on our experience, and think proactively about challenges you might face. We maintain relationships beyond project completion, ensuring we can support you as your needs evolve. When you work with SyncOps, you're not just hiring a vendor—you're gaining a technology partner who's committed to your long-term success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who SyncOps Is Best For */}
      <section className="relative py-20 bg-gradient-to-br from-brand-navy via-brand-card to-brand-navy" aria-labelledby="best-for-heading">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              id="best-for-heading"
              className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Who SyncOps Is Best For
            </motion.h2>
            
            <motion.div
              className="space-y-6 text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg">
                SyncOps isn't the right fit for every company or every project. We're most effective when working with organizations that share our values and approach. Understanding who we work best with helps you determine whether we're a good match for your needs.
              </p>
              <p className="text-lg">
                We work best with companies that view AI as a strategic capability rather than a tactical feature. If you're building software where AI is central to your value proposition, where intelligent capabilities differentiate your product, or where automation creates significant competitive advantage, our AI-first approach will serve you well. We're less suited for projects where AI is an afterthought or a nice-to-have enhancement.
              </p>
              <p className="text-lg">
                We work best with companies that value quality and long-term thinking over speed and shortcuts. If you're building software that needs to scale, evolve, and maintain reliability over years, our engineering-led approach aligns with your needs. We're less suited for projects that prioritize rapid delivery over proper architecture or that don't require long-term maintainability.
              </p>
              <p className="text-lg">
                We work best with companies that want a partnership, not just a vendor. If you value collaboration, transparency, and long-term relationships, we'll be a good fit. If you prefer transactional relationships, fixed-scope projects, and minimal engagement, there are other companies better suited to that approach. We believe the best outcomes come from working together as partners, and we're most effective when clients share that philosophy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="relative py-20 bg-white" aria-labelledby="cta-heading">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              id="cta-heading"
              className="text-3xl lg:text-4xl font-bold text-brand-navy mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Explore Whether SyncOps Is Right for You
            </motion.h2>
            
            <motion.div
              className="space-y-6 text-gray-700 leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg">
                If what you've read here resonates with your approach to technology and your needs for AI development, we'd welcome the opportunity to explore how we might work together. The best way to determine fit is through conversation—discussing your specific challenges, understanding your strategic objectives, and exploring how our approach might align with your needs.
              </p>
              <p className="text-lg">
                Many of our most successful partnerships began with a small proof-of-concept project—a focused AI implementation that demonstrated value quickly and built confidence for larger initiatives. Starting small allows both sides to assess fit, establish working relationships, and validate approaches before committing to larger engagements. We're happy to begin with a strategic discussion or a targeted project, whichever makes more sense for your situation.
              </p>
              <p className="text-lg">
                Whether you're ready to start a project, exploring options, or simply want to learn more about our approach, we're available for conversations. We believe the best partnerships are built on mutual understanding and shared values, and we're always interested in connecting with companies that might be a good fit.
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

