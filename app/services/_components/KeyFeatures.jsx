"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, TrendingUp, Zap, Shield, Star } from "lucide-react";

const fallbackColor = "#00B894";

// Progress Bar Component
const ProgressBar = ({ percentage, isInView }) => {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-[#00B894] to-[#00C4FF]"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      />
    </div>
  );
};

// Icon mapping for different feature types
const getFeatureIcon = (title) => {
  const titleLower = title?.toLowerCase() || "";
  if (titleLower.includes("security") || titleLower.includes("safe")) return Shield;
  if (titleLower.includes("performance") || titleLower.includes("speed") || titleLower.includes("fast")) return Zap;
  if (titleLower.includes("quality") || titleLower.includes("excellence")) return Star;
  if (titleLower.includes("growth") || titleLower.includes("scale") || titleLower.includes("trend")) return TrendingUp;
  return CheckCircle;
};

const KeyFeatures = ({ features = [], accentColor = fallbackColor }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  if (!Array.isArray(features) || features.length === 0) {
    return null;
  }

  // Generate metrics for each feature
  const featuresWithMetrics = features.map((feature, index) => {
    const basePercentage = 85 + (index % 3) * 5; // Vary between 85-95%
    const metricValue = basePercentage;
    const metricLabel = index % 3 === 0 ? "Efficiency" : index % 3 === 1 ? "Performance" : "Quality";
    
    return {
      ...feature,
      percentage: basePercentage,
      metricValue,
      metricLabel,
    };
  });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
    >
      {featuresWithMetrics.map((feature, index) => {
        const IconComponent = getFeatureIcon(feature.title);
        
        return (
          <motion.div
            key={`${feature?.title ?? "feature"}-${index}`}
            className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100 hover:border-[#00B894]/30 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Icon and Title */}
            <div className="flex items-start mb-4 relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-xl flex items-center justify-center shadow-md flex-shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 pr-20">
                <h3 className="text-xl font-bold text-gray-800 leading-tight">
                  {feature?.title}
                </h3>
              </div>
              {/* Metric Badge - Positioned to not overlap */}
              <div className="absolute top-0 right-4 inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full border border-[#00B894]/20 z-10">
                <span className="text-xs font-semibold text-[#00B894]">{feature.metricLabel}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 flex-grow text-balance leading-relaxed mb-5">
              {feature?.description}
            </p>

            {/* Metrics Section */}
            <div className="border-t border-gray-100 pt-4 mt-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-gray-600">{feature.metricLabel} Score</span>
                <span className="text-sm font-bold text-[#00B894]">{feature.metricValue}%</span>
              </div>
              <ProgressBar percentage={feature.percentage} isInView={isInView} />
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00B894] rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500">Active</span>
                </div>
                <span className="text-xs font-semibold text-gray-700">Optimized</span>
              </div>
            </div>

            {/* Hover Effect Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default KeyFeatures;

