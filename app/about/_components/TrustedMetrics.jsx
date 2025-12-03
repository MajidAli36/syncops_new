"use client";
import React, { useState, useEffect } from "react";

const TrustedMetrics = () => {
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
          // Animate counts when component comes into view
          const duration = 2000; // 2 seconds
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
    });

    const element = document.getElementById('metrics-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      number: counts.projects,
      suffix: "+",
      title: "Projects Delivered",
      description: "Successfully completed projects across various industries"
    },
    {
      number: counts.satisfaction,
      suffix: "%",
      title: "Client Satisfaction",
      description: "Consistently high satisfaction rates from our clients"
    },
    {
      number: counts.support,
      suffix: "/7",
      title: "Support Available",
      description: "Round-the-clock support for all our solutions"
    }
  ];

  return (
    <div id="metrics-section" className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
          Trusted by Industry Leaders
        </h2>
        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Our track record speaks for itself. Here are the numbers that define our success.
        </p>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="text-center group"
          >
            {/* Number in Rounded Square */}
            <div className="mb-8 flex justify-center">
              <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl w-28 h-28 lg:w-32 lg:h-32 flex items-center justify-center shadow-sm border border-teal-200/50 transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                <span className="text-4xl lg:text-5xl font-bold text-gray-800">
                  {metric.number}
                  {metric.suffix}
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 tracking-tight">
              {metric.title}
            </h3>

            {/* Description */}
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedMetrics; 