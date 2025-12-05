"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Step Card Component for Desktop
const StepCard = ({ step, index, isLast, ProgressBar }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Step Node */}
      <div className="relative z-10 flex flex-col items-center">
        <div className={`w-44 h-44 bg-gradient-to-br ${step.gradient} rounded-2xl flex flex-col items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 mx-auto mb-4`}>
          <div className="text-4xl font-bold text-white mb-2">{index + 1}</div>
          <div className="text-sm font-semibold text-white/90 text-center px-3">
            {step.title}
          </div>
        </div>
        
        {/* Progress + Details Card */}
        <div className="bg-white rounded-xl p-4 shadow-md mt-2 max-w-xs">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-gray-600">Phase progress</span>
            <span className="text-xs font-bold text-[#00B894]">{step.percentage}%</span>
          </div>
          <ProgressBar percentage={step.percentage} isInView={isInView} />
          <p className="text-xs text-gray-500 mt-2 text-center">{step.duration}</p>

          {/* Detailed copy so full view has context */}
          <p className="mt-3 text-[11px] leading-relaxed text-gray-600 text-center">
            {step.description}
          </p>
        </div>
      </div>

      {/* Subtle connector dot on the main line for a cleaner, professional look */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-sm border border-teal-200" />
    </motion.div>
  );
};

// Mobile Step Card Component
const MobileStepCard = ({ step, index, ProgressBar }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative pl-20"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline Node */}
      <div className={`absolute left-6 top-2 w-6 h-6 bg-gradient-to-br ${step.gradient} rounded-full border-4 border-white shadow-lg z-10`}></div>
      
      {/* Card */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center shadow-md`}>
                <span className="text-xl font-bold text-white">{index + 1}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2D2D2D]">{step.title}</h3>
                <p className="text-xs text-gray-500">{step.duration}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">{step.description}</p>
          </div>
        </div>
        
        {/* Progress Graph */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-gray-600">Completion Rate</span>
            <span className="text-sm font-bold text-[#00B894]">{step.percentage}%</span>
          </div>
          <ProgressBar percentage={step.percentage} isInView={isInView} />
        </div>
      </div>
    </motion.div>
  );
};

const HowWeWork = () => {
  const steps = [
    {
      title: "Discovery",
      description: "Understanding your business needs and objectives",
      percentage: 100,
      duration: "1-2 weeks",
      gradient: "from-[#00B894] to-[#00C4FF]"
    },
    {
      title: "Design",
      description: "Creating intuitive and scalable architecture",
      percentage: 100,
      duration: "2-3 weeks",
      gradient: "from-[#00C4FF] to-[#00B894]"
    },
    {
      title: "Develop",
      description: "Building robust and efficient solutions",
      percentage: 95,
      duration: "4-8 weeks",
      gradient: "from-[#00B894] to-[#00C4FF]"
    },
    {
      title: "Test",
      description: "Ensuring quality and reliability",
      percentage: 100,
      duration: "1-2 weeks",
      gradient: "from-[#00C4FF] to-[#00B894]"
    },
    {
      title: "Deliver",
      description: "Deploying and launching your solution",
      percentage: 100,
      duration: "1 week",
      gradient: "from-[#00B894] to-[#00C4FF]"
    },
    {
      title: "Iterate",
      description: "Continuous improvement and optimization",
      percentage: 95,
      duration: "Ongoing",
      gradient: "from-[#00C4FF] to-[#00B894]"
    }
  ];

  // Animated Progress Bar Component
  const ProgressBar = ({ percentage, isInView }) => {
    const [animatedWidth, setAnimatedWidth] = useState(0);

    useEffect(() => {
      if (isInView) {
        const duration = 1500;
        const steps = 60;
        const increment = percentage / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= percentage) {
            setAnimatedWidth(percentage);
            clearInterval(timer);
          } else {
            setAnimatedWidth(current);
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }
    }, [isInView, percentage]);

    return (
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #00B894 0%, #00C4FF 100%)",
            width: `${animatedWidth}%`
          }}
          initial={{ width: 0 }}
          animate={{ width: `${animatedWidth}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-6">
          How We Work
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Our proven development process ensures quality, transparency, and successful delivery of every project.
        </p>
      </motion.div>

      {/* Desktop: Horizontal Flowchart Diagram */}
      <div className="hidden lg:block mb-16">
        <div className="relative">
          {/* Main Flow Line - softer, more professional */}
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00B894] via-[#00C4FF] to-[#00B894] opacity-20"></div>
          
          {/* Steps in Flowchart */}
          <div className="relative grid grid-cols-6 gap-4">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={step}
                index={index}
                isLast={index === steps.length - 1}
                ProgressBar={ProgressBar}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet: Vertical Timeline with Graphs */}
      <div className="lg:hidden">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00B894] via-[#00C4FF] to-[#00B894] opacity-30"></div>
          
          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <MobileStepCard
                key={index}
                step={step}
                index={index}
                ProgressBar={ProgressBar}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Process Metrics Dashboard */}
      <motion.div
        className="mt-16 bg-gradient-to-r from-[#00B894]/10 via-[#00C4FF]/10 to-[#00B894]/10 rounded-3xl p-8 border border-[#00B894]/20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">
            Process Performance Metrics
          </h3>
          <p className="text-gray-600">
            Real-time tracking of our development workflow efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-600">Average Cycle Time</span>
              <svg className="w-5 h-5 text-[#00B894]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <p className="text-3xl font-bold bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">
              3-4 weeks
            </p>
            <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-600">Success Rate</span>
              <svg className="w-5 h-5 text-[#00C4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-3xl font-bold bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">
              98.5%
            </p>
            <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full" style={{ width: '98.5%' }}></div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-600">Client Satisfaction</span>
              <svg className="w-5 h-5 text-[#00B894]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <p className="text-3xl font-bold bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">
              9.8/10
            </p>
            <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full" style={{ width: '98%' }}></div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00B894] rounded-full"></div>
              Weekly Updates
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00C4FF] rounded-full"></div>
              Real-time Collaboration
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00B894] rounded-full"></div>
              Quality Assurance
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00C4FF] rounded-full"></div>
              Agile Methodology
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HowWeWork;
