"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhatWeStandFor = () => {
  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology and creative solutions that drive real change.",
      percentage: 95,
      metric: "95%",
      metricLabel: "Innovation Rate"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Transparency",
      description: "Building trust through open communication, clear processes, and honest relationships with our clients.",
      percentage: 98,
      metric: "98%",
      metricLabel: "Client Trust"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.28c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
        </svg>
      ),
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering solutions that exceed expectations.",
      percentage: 99,
      metric: "99%",
      metricLabel: "Success Rate"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Quality",
      description: "Excellence in every line of code, every design decision, and every client interaction.",
      percentage: 97,
      metric: "97%",
      metricLabel: "Quality Score"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      ),
      title: "Growth",
      description: "Continuous learning and adaptation to stay ahead of technology trends and market demands.",
      percentage: 92,
      metric: "92%",
      metricLabel: "Growth Rate"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.28c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
        </svg>
      ),
      title: "Collaboration",
      description: "Working together with clients and team members to achieve extraordinary results.",
      percentage: 96,
      metric: "96%",
      metricLabel: "Team Synergy"
    }
  ];

  // Circular Progress Component
  const CircularProgress = ({ percentage, size = 120, strokeWidth = 8, color = "#00B894" }) => {
    const [animatedPercentage, setAnimatedPercentage] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
      if (isInView) {
        const duration = 2000;
        const steps = 60;
        const increment = percentage / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= percentage) {
            setAnimatedPercentage(percentage);
            clearInterval(timer);
          } else {
            setAnimatedPercentage(current);
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }
    }, [isInView, percentage]);

    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (animatedPercentage / 100) * circumference;

    return (
      <div ref={ref} className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-gray-200"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="text-[#00B894] transition-all duration-1000 ease-out"
            style={{
              filter: "drop-shadow(0 0 8px rgba(0, 184, 148, 0.5))"
            }}
          />
        </svg>
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-[#2D2D2D]">
            {Math.round(animatedPercentage)}%
          </span>
        </div>
      </div>
    );
  };

  // Bar Chart Component
  const BarChart = ({ percentage, color = "#00B894" }) => {
    const [animatedWidth, setAnimatedWidth] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

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
      <div ref={ref} className="w-full">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-600">{percentage}%</span>
          <span className="text-xs text-gray-500">Target: 100%</span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${color} 0%, #00C4FF 100%)`,
              width: `${animatedWidth}%`,
              boxShadow: `0 0 10px rgba(0, 184, 148, 0.4)`
            }}
            initial={{ width: 0 }}
            animate={{ width: `${animatedWidth}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
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
          What We Stand For
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Our core values guide everything we do, from the technology we build to the relationships we nurture.
        </p>
      </motion.div>

      {/* Values Grid with Graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden hover:scale-[1.02]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B894]/5 via-[#00C4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              {/* Top Section: Icon and Circular Progress */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-4">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2 group-hover:text-[#00B894] transition-colors duration-300">
                    {value.title}
                  </h3>
                </div>
                {/* Circular Progress Chart */}
                <div className="flex-shrink-0">
                  <CircularProgress 
                    percentage={value.percentage} 
                    size={100}
                    strokeWidth={6}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                {value.description}
              </p>

              {/* Bar Chart */}
              <div className="mb-4">
                <BarChart percentage={value.percentage} />
              </div>

              {/* Metric Display */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    {value.metricLabel}
                  </p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">
                    {value.metric}
                  </p>
                </div>
                {/* Mini graph icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#00B894]/10 to-[#00C4FF]/10 rounded-lg flex items-center justify-center group-hover:from-[#00B894]/20 group-hover:to-[#00C4FF]/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-[#00B894]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-[#00B894] rounded-full animate-pulse opacity-60"></div>
            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-[#00C4FF] rounded-full animate-bounce opacity-50"></div>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats Section */}
      <motion.div
        className="mt-16 bg-gradient-to-r from-[#00B894]/10 via-[#00C4FF]/10 to-[#00B894]/10 rounded-3xl p-8 border border-[#00B894]/20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent mb-2">
              96.2%
            </p>
            <p className="text-sm text-gray-600">Average Score</p>
          </div>
          <div>
            <p className="text-3xl font-bold bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent mb-2">
              6
            </p>
            <p className="text-sm text-gray-600">Core Values</p>
          </div>
          <div>
            <p className="text-3xl font-bold bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent mb-2">
              100%
            </p>
            <p className="text-sm text-gray-600">Commitment</p>
          </div>
          <div>
            <p className="text-3xl font-bold bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent mb-2">
              ∞
            </p>
            <p className="text-sm text-gray-600">Continuous Improvement</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhatWeStandFor;
