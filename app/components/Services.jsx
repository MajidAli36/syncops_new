"use client";
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CheckCircle, ArrowRight, ArrowDownCircle, TrendingUp, Zap, Rocket, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { stagger, fadeUp, springSoft, slideFromLeft, slideFromRight } from '../../lib/motionConfig';

const serviceGroups = [
  {
    step: "01",
    title: "Build",
    description: "Custom software development from concept to deployment with cutting-edge technologies",
    outcome: "Production-ready MVP in 4-6 weeks",
    badge: "2-4 Weeks",
    services: [
      {
        title: "Custom Development",
        description: "Tailored software solutions built with modern technologies",
        icon: CheckCircle
      },
      {
        title: "MVP Development",
        description: "Rapid prototyping and minimum viable product creation",
        icon: CheckCircle
      },
      {
        title: "API Development",
        description: "Robust backend APIs and microservices architecture",
        icon: CheckCircle
      }
    ]
  },
  {
    step: "02",
    title: "Automate",
    description: "Streamline operations with intelligent automation and advanced AI solutions",
    outcome: "80% reduction in manual processes",
    badge: "SOC2 Ready",
    services: [
      {
        title: "Process Automation",
        description: "Workflow automation and business process optimization",
        icon: CheckCircle
      },
      {
        title: "AI Integration",
        description: "Machine learning and AI-powered automation solutions",
        icon: CheckCircle
      },
      {
        title: "DevOps Automation",
        description: "CI/CD pipelines and infrastructure automation",
        icon: CheckCircle
      }
    ]
  },
  {
    step: "03",
    title: "Scale",
    description: "Grow your infrastructure and applications seamlessly with cloud-native solutions",
    outcome: "99.9% uptime with auto-scaling",
    badge: "99.9% Uptime",
    services: [
      {
        title: "Cloud Migration",
        description: "Seamless migration to cloud-native architectures",
        icon: CheckCircle
      },
      {
        title: "Performance Optimization",
        description: "Application and database performance tuning",
        icon: CheckCircle
      },
      {
        title: "Monitoring & Analytics",
        description: "Real-time monitoring and actionable insights",
        icon: CheckCircle
      }
    ]
  }
];

const mobileFirstViewport = { once: true, amount: 0.1 };

// Detailed service information
const serviceDetails = {
  "Custom Development": {
    title: "Custom Development",
    description: "Tailored software solutions built with modern technologies",
    fullDescription: "We create bespoke software solutions designed specifically for your business needs. Our custom development services leverage cutting-edge technologies to build scalable, maintainable, and high-performance applications.",
    features: [
      "Full-stack web and mobile applications",
      "Modern tech stack (React, Next.js, Node.js, Python)",
      "Scalable architecture design",
      "API development and integration",
      "Database design and optimization",
      "Code quality and best practices"
    ],
    benefits: [
      "Tailored to your specific requirements",
      "Future-proof technology choices",
      "Scalable and maintainable codebase",
      "Comprehensive documentation"
    ],
    timeline: "4-12 weeks",
    technologies: ["React", "Next.js", "Node.js", "Python", "TypeScript", "PostgreSQL"]
  },
  "MVP Development": {
    title: "MVP Development",
    description: "Rapid prototyping and minimum viable product creation",
    fullDescription: "Get your product to market faster with our MVP development services. We focus on building core features that validate your business idea while maintaining high code quality.",
    features: [
      "Rapid prototyping and validation",
      "Core feature development",
      "User feedback integration",
      "Iterative development approach",
      "Cost-effective solutions",
      "Quick time-to-market"
    ],
    benefits: [
      "Validate ideas quickly",
      "Reduce development costs",
      "Faster market entry",
      "User-driven improvements"
    ],
    timeline: "4-6 weeks",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "AWS"]
  },
  "API Development": {
    title: "API Development",
    description: "Robust backend APIs and microservices architecture",
    fullDescription: "Build powerful, secure, and scalable APIs that power your applications. We design RESTful and GraphQL APIs with microservices architecture for optimal performance.",
    features: [
      "RESTful and GraphQL APIs",
      "Microservices architecture",
      "API documentation and testing",
      "Authentication and authorization",
      "Rate limiting and security",
      "Performance optimization"
    ],
    benefits: [
      "Scalable architecture",
      "Secure and reliable",
      "Well-documented APIs",
      "Easy integration"
    ],
    timeline: "2-6 weeks",
    technologies: ["Node.js", "Express", "FastAPI", "GraphQL", "PostgreSQL", "Redis"]
  },
  "Process Automation": {
    title: "Process Automation",
    description: "Workflow automation and business process optimization",
    fullDescription: "Streamline your business operations with intelligent automation solutions. We identify repetitive tasks and automate them to improve efficiency and reduce errors.",
    features: [
      "Workflow automation",
      "Business process optimization",
      "Integration with existing systems",
      "Error reduction and consistency",
      "Time and cost savings",
      "Custom automation scripts"
    ],
    benefits: [
      "Increased efficiency",
      "Reduced manual errors",
      "Cost savings",
      "Improved productivity"
    ],
    timeline: "2-4 weeks",
    technologies: ["Python", "Node.js", "Zapier", "Microsoft Power Automate"]
  },
  "AI Integration": {
    title: "AI Integration",
    description: "Machine learning and AI-powered automation solutions",
    fullDescription: "Leverage the power of artificial intelligence to enhance your applications. We integrate machine learning models, natural language processing, and AI automation into your existing systems.",
    features: [
      "Machine learning model integration",
      "Natural language processing",
      "Computer vision solutions",
      "Predictive analytics",
      "Chatbot and virtual assistants",
      "AI-powered automation"
    ],
    benefits: [
      "Enhanced user experience",
      "Data-driven insights",
      "Automated decision making",
      "Competitive advantage"
    ],
    timeline: "4-8 weeks",
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain", "AWS SageMaker"]
  },
  "DevOps Automation": {
    title: "DevOps Automation",
    description: "CI/CD pipelines and infrastructure automation",
    fullDescription: "Implement DevOps best practices with automated CI/CD pipelines, infrastructure as code, and comprehensive monitoring solutions for seamless deployments.",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as Code (IaC)",
      "Automated testing and deployment",
      "Container orchestration",
      "Monitoring and logging",
      "Security scanning"
    ],
    benefits: [
      "Faster deployments",
      "Reduced errors",
      "Improved reliability",
      "Better collaboration"
    ],
    timeline: "2-4 weeks",
    technologies: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "AWS", "Jenkins"]
  },
  "Cloud Migration": {
    title: "Cloud Migration",
    description: "Seamless migration to cloud-native architectures",
    fullDescription: "Move your applications to the cloud with minimal downtime. We handle the entire migration process, from planning to execution, ensuring a smooth transition.",
    features: [
      "Cloud architecture design",
      "Data migration strategies",
      "Application refactoring",
      "Security and compliance",
      "Performance optimization",
      "Cost optimization"
    ],
    benefits: [
      "Scalability and flexibility",
      "Reduced infrastructure costs",
      "Improved reliability",
      "Enhanced security"
    ],
    timeline: "4-12 weeks",
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
  },
  "Performance Optimization": {
    title: "Performance Optimization",
    description: "Application and database performance tuning",
    fullDescription: "Optimize your applications and databases for peak performance. We analyze bottlenecks, implement caching strategies, and fine-tune queries for maximum efficiency.",
    features: [
      "Application performance analysis",
      "Database query optimization",
      "Caching strategies",
      "Code optimization",
      "Load testing and tuning",
      "Performance monitoring"
    ],
    benefits: [
      "Faster response times",
      "Better user experience",
      "Reduced server costs",
      "Improved scalability"
    ],
    timeline: "2-6 weeks",
    technologies: ["Redis", "PostgreSQL", "MongoDB", "CDN", "Load Balancers"]
  },
  "Monitoring & Analytics": {
    title: "Monitoring & Analytics",
    description: "Real-time monitoring and actionable insights",
    fullDescription: "Gain visibility into your applications with comprehensive monitoring and analytics solutions. Track performance, errors, and user behavior in real-time.",
    features: [
      "Real-time application monitoring",
      "Error tracking and alerting",
      "Performance metrics",
      "User analytics",
      "Custom dashboards",
      "Automated reporting"
    ],
    benefits: [
      "Proactive issue detection",
      "Data-driven decisions",
      "Improved reliability",
      "Better user insights"
    ],
    timeline: "2-4 weeks",
    technologies: ["Datadog", "New Relic", "Sentry", "Google Analytics", "Mixpanel"]
  }
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent background scroll when this drawer is open
  useEffect(() => {
    if (!isMounted) return;

    const originalOverflow = document.body.style.overflow;

    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow || "";
    }

    return () => {
      document.body.style.overflow = originalOverflow || "";
    };
  }, [isDrawerOpen, isMounted]);

  const handleServiceClick = (serviceTitle) => {
    setSelectedService(serviceDetails[serviceTitle] || null);
    setIsDrawerOpen(true);
    // Dispatch event to hide "Let's Talk Business" button
    window.dispatchEvent(new CustomEvent('serviceDrawerOpen'));
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    // Dispatch event to show "Let's Talk Business" button
    window.dispatchEvent(new CustomEvent('serviceDrawerClose'));
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={mobileFirstViewport}
          variants={stagger.container(0.06)}
        >
        <motion.h2 className="text-display-sm font-bold text-gray-900 mb-6" variants={fadeUp(16)}>
          From <span className="gradient-text">Build</span> to <span className="gradient-text-reverse">Scale</span>
        </motion.h2>
        <motion.p className="text-body-xl text-gray-600 max-w-3xl mx-auto" variants={fadeUp(20)}>
          We handle every stage of your digital transformation journey with proven expertise and cutting-edge technology.
        </motion.p>
      </motion.div>
      
      {/* Graph/Diagram Style Flow */}
      <div className="relative">
        {/* Main Flow Diagram */}
        <div className="relative">
          {/* Desktop SVG connectors */}
          <div className="hidden lg:block absolute inset-x-8 top-[240px] h-24 pointer-events-none z-0">
            <svg viewBox="0 0 1000 120" className="w-full h-full" fill="none">
              <defs>
                <linearGradient id="flowLineA" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00B894" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#00C4FF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00B894" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="flowLineB" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00C4FF" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#00B894" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00C4FF" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <motion.line
                x1="166"
                y1="60"
                x2="500"
                y2="60"
                stroke="url(#flowLineA)"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
              <motion.line
                x1="500"
                y1="60"
                x2="834"
                y2="60"
                stroke="url(#flowLineB)"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
            
            </svg>
          </div>

          {/* Flow Nodes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-20">
            {serviceGroups.map((group, groupIndex) => {
              const icons = [Rocket, Zap, TrendingUp];
              const IconComponent = icons[groupIndex];
              
              return (
                <motion.div
                  key={group.title}
                  className="relative"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
                >
                  {/* Node Circle */}
                  <div className="relative mb-8">
                    <motion.div
                      className="mx-auto w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-full flex items-center justify-center shadow-2xl relative z-10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-full flex items-center justify-center">
                        <IconComponent className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
                      </div>
                    </motion.div>
                    
                    {/* Pulse Animation */}
                    <motion.div
                      className="absolute inset-0 mx-auto w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-full opacity-20"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0, 0.2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: groupIndex * 0.3,
                      }}
                    />
                  </div>

                  {/* Node Content */}
                  <div className="text-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                      {group.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm lg:text-base">
                      {group.description}
                    </p>
                    
                    {/* Outcome Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-200 mb-6">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-xs lg:text-sm font-medium text-green-700">{group.outcome}</span>
                    </div>

                    {/* Time Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full border border-[#00B894]/20 mb-6">
                      <span className="text-xs lg:text-sm font-semibold text-[#00B894]">{group.badge}</span>
                    </div>

                    {/* Mobile vertical connector */}
                    {groupIndex < serviceGroups.length - 1 && (
                      <div className="lg:hidden flex flex-col items-center mb-6">
                        <div className="w-1 h-10 bg-gradient-to-b from-[#00B894] to-transparent opacity-70"></div>
                        <ArrowDownCircle className="w-8 h-8 text-[#00C4FF] bg-white rounded-full shadow-md" />
                        <div className="w-1 h-10 bg-gradient-to-b from-transparent to-[#00C4FF] opacity-70"></div>
                      </div>
                    )}

                    {/* Services List */}
                    <div
                      className={`space-y-3 ${
                        groupIndex === 1 ? "mt-12 lg:mt-12" : "mt-8 lg:mt-12"
                      }`}
                    >
                      {group.services.map((service, serviceIndex) => (
                        <motion.div
                          key={service.title}
                          className="group"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: groupIndex * 0.2 + serviceIndex * 0.1 }}
                        >
                          <div 
                            onClick={() => handleServiceClick(service.title)}
                            className="p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-[#00B894] hover:shadow-lg transition-all duration-300 group-hover:scale-105 cursor-pointer"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                                <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1 text-left">
                                <h4 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-[#00B894] transition-colors">
                                  {service.title}
                                </h4>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                  {service.description}
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-[#00B894] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      </div>

      {/* Side Drawer rendered via portal to <body>, completely outside this section */}
      {isMounted &&
        createPortal(
          <AnimatePresence>
            {isDrawerOpen && selectedService && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeDrawer}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                />

                {/* Drawer */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  className="fixed right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl z-50"
                >
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="sticky top-0 bg-white border-b border-gray-200 z-10 p-6 flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-gray-900">{selectedService.title}</h2>
                      <button
                        onClick={closeDrawer}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Close drawer"
                      >
                        <X className="w-6 h-6 text-gray-600" />
                      </button>
                    </div>

                    {/* Scrollable content */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {/* Description */}
                    <div>
                      <p className="text-gray-700 leading-relaxed">{selectedService.fullDescription}</p>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {selectedService.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#00B894] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedService.benefits.map((benefit, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 p-3 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-lg"
                          >
                            <div className="w-2 h-2 bg-[#00B894] rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Timeline & Technologies */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="text-sm font-semibold text-gray-600 mb-2">Timeline</h4>
                        <p className="text-xl font-bold text-[#00B894]">{selectedService.timeline}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="text-sm font-semibold text-gray-600 mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white text-sm font-medium rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    </div>

                    {/* Fixed bottom CTA Button */}
                    <div className="border-t border-gray-200 p-6">
                      <button
                    onClick={() => {
                      // Close the service drawer
                      closeDrawer();
                      // Dispatch custom event to open FloatingCTA with service pre-filled
                      window.dispatchEvent(new CustomEvent('openContactForm', {
                        detail: { service: selectedService.title }
                      }));
                    }}
                    className="w-full py-3 px-6 bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Started with {selectedService.title}
                  </button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
