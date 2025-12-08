"use client";
import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { 
  Rocket, 
  Heart, 
  Clock,
  CheckCircle2
} from "lucide-react";

const TrustedMetrics = () => {
  const prefersReducedMotion = useReducedMotion();
  const [counts, setCounts] = useState({
    projects: 0,
    satisfaction: 0,
    support: "24"
  });

  const targetCounts = {
    projects: 50,
    satisfaction: 98,
    support: "24"
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const duration = prefersReducedMotion ? 500 : 2000;
          const steps = 60;
          const stepValue = {
            projects: targetCounts.projects / steps,
            satisfaction: targetCounts.satisfaction / steps
          };

          let currentStep = 0;
          const interval = setInterval(() => {
            currentStep++;
            setCounts({
              projects: Math.min(Math.floor(stepValue.projects * currentStep), targetCounts.projects),
              satisfaction: Math.min(Math.floor(stepValue.satisfaction * currentStep), targetCounts.satisfaction),
              support: targetCounts.support
            });

            if (currentStep >= steps) {
              clearInterval(interval);
            }
          }, duration / steps);

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const element = document.getElementById('metrics-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const metrics = [
    {
      number: counts.projects,
      suffix: "+",
      title: "Projects Delivered",
      description: "Successfully completed projects across various industries",
      icon: Rocket,
      gradient: "from-[#00B894] to-[#00C4FF]",
      bgColor: "bg-[#00B894]/5",
      borderColor: "border-[#00B894]/20",
      iconBg: "bg-[#00B894]/10"
    },
    {
      number: counts.satisfaction,
      suffix: "%",
      title: "Client Satisfaction",
      description: "Consistently high satisfaction rates from our clients",
      icon: Heart,
      gradient: "from-[#00C4FF] to-[#00B894]",
      bgColor: "bg-[#00C4FF]/5",
      borderColor: "border-[#00C4FF]/20",
      iconBg: "bg-[#00C4FF]/10"
    },
    {
      number: counts.support,
      suffix: "/7",
      title: "Support Available",
      description: "Round-the-clock support for all our solutions",
      icon: Clock,
      gradient: "from-[#00B894] via-[#00C4FF] to-[#00B894]",
      bgColor: "bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5",
      borderColor: "border-[#00B894]/20",
      iconBg: "bg-gradient-to-br from-[#00B894]/10 to-[#00C4FF]/10"
    }
  ];

  return (
    <section 
      id="metrics-section" 
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #00B894 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0.3 : 0.8 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00B894]/10 border border-[#00B894]/20 text-sm font-medium text-[#00B894] mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
            Proven Track Record
          </motion.span>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="text-gray-900">Trusted by </span>
            <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
            Our track record speaks for itself. Here are the numbers that define our success.
          </p>
        </motion.div>

        {/* Individual Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: prefersReducedMotion ? 0.3 : 0.7,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {/* Card Container */}
                <div className={`relative h-full ${metric.bgColor} rounded-2xl lg:rounded-3xl p-8 lg:p-10 border-2 ${metric.borderColor} transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#00B894]/10 group-hover:-translate-y-2 group-hover:border-[#00B894]/40 overflow-hidden`}>
                  
                  {/* Animated Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Number Row */}
                    <div className="flex items-start justify-between mb-6">
                      {/* Icon */}
                      <motion.div
                        className={`${metric.iconBg} rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/50 group-hover:border-[#00B894]/30 transition-all duration-300`}
                        whileHover={prefersReducedMotion ? {} : { 
                          scale: 1.1,
                          rotate: 5
                        }}
                      >
                        <div className={`w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r ${metric.gradient} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-4 h-4 lg:w-5 lg:h-5 text-white" aria-hidden="true" />
                        </div>
                      </motion.div>
                      
                      {/* Large Number */}
                      <div className="text-right">
                        <div className={`text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent leading-none mb-1`}>
                          {metric.number}
                        </div>
                        <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent`}>
                          {metric.suffix}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#00B894] transition-colors duration-300">
                      {metric.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                      {metric.description}
                    </p>

                    {/* Bottom Accent Bar */}
                    <div className={`mt-6 h-1 w-full bg-gradient-to-r ${metric.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-x-100 scale-x-0 origin-left`}></div>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00B894] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#00C4FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 animate-pulse"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedMetrics;
