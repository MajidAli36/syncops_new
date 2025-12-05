"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import * as LucideIcons from "lucide-react";

const fallbackColor = "#00B894";

// Circular Progress Component
const CircularProgress = ({ percentage, isInView, size = 80 }) => {
  const circumference = 2 * Math.PI * (size / 2 - 5);
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 5}
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          className="text-gray-200"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 5}
          stroke="url(#gradient)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B894" />
            <stop offset="100%" stopColor="#00C4FF" />
          </linearGradient>
        </defs>
      </svg>
      {/* Percentage text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          className="text-lg font-bold bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {percentage}%
        </motion.span>
      </div>
    </div>
  );
};

// Enhanced Progress Bar with multiple indicators
const EnhancedProgressBar = ({ percentage, isInView }) => {
  return (
    <div className="w-full space-y-2">
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#00B894] via-[#00C4FF] to-[#00B894] relative overflow-hidden"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          {/* Animated shimmer */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.5,
              ease: "linear",
            }}
          />
          {/* Glowing particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full"
              style={{ left: `${20 + i * 30}%` }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Desktop Process Step Card - Completely Redesigned
const ProcessStep = ({ step, index, accentColor, isInView, isLast }) => {
  const Icon = (step?.icon && LucideIcons[step.icon]) || LucideIcons.CheckCircle;
  const percentage = Math.min(85 + (index * 3), 100);
  const duration = `${2 + index * 0.5} weeks`;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative mb-16 last:mb-0 group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-8">
        {/* Left Side - Icon with Circular Progress */}
        <div className="relative flex-shrink-0">
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-3xl blur-xl opacity-30"
            animate={isHovered ? {
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Main icon container */}
          <motion.div
            className="relative w-32 h-32 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-3xl flex flex-col items-center justify-center shadow-2xl cursor-pointer z-10"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ 
              scale: { duration: 0.5, delay: index * 0.2 + 0.2, type: "spring", stiffness: 150 },
              rotate: { duration: 0.6, delay: index * 0.2 + 0.2 }
            }}
          >
            {/* Rotating background pattern */}
            <motion.div
              className="absolute inset-2 rounded-2xl bg-gradient-to-br from-white/10 to-transparent"
              animate={isHovered ? { rotate: 360 } : {}}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Icon */}
            <motion.div
              animate={isHovered ? { 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              } : {}}
              transition={{ duration: 0.6 }}
            >
              {Icon && <Icon className="w-12 h-12 text-white mb-2 relative z-10" />}
            </motion.div>
            
            {/* Step number badge */}
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#00B894]"
              animate={isHovered ? { 
                scale: [1, 1.2, 1],
                rotate: [0, 360]
              } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-bold text-[#00B894]">{index + 1}</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Enhanced Content Card */}
        <motion.div 
          className="flex-1 bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden group/card"
          whileHover={{ 
            scale: 1.03,
            boxShadow: "0 25px 50px rgba(0, 184, 148, 0.2)"
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated background pattern */}
          <motion.div
            className="absolute inset-0 opacity-5"
            animate={isHovered ? {
              backgroundPosition: ["0% 0%", "100% 100%"],
            } : {}}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: "radial-gradient(circle, #00B894 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          
          {/* Gradient overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#00B894]/5 via-[#00C4FF]/5 to-[#00B894]/5 opacity-0"
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          
          <div className="relative z-10">
            {/* Header with metrics */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <motion.div
                  className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full border border-[#00B894]/20 mb-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 h-2 bg-[#00B894] rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-[#00B894]">Phase {index + 1}</span>
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold text-gray-800 mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {step?.title}
                </motion.h3>
                <p className="text-gray-600 text-balance leading-relaxed text-lg">
                  {step?.description}
                </p>
              </div>
              
              {/* Circular Progress Indicator */}
              <motion.div
                className="ml-6 flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <CircularProgress percentage={percentage} isInView={isInView} size={100} />
              </motion.div>
            </div>

            {/* Enhanced Metrics Dashboard */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Completion Progress */}
              <motion.div 
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100"
                whileHover={{ backgroundColor: "rgba(0, 184, 148, 0.03)", scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-600">Progress</span>
                  <motion.span 
                    className="text-lg font-bold bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent"
                    animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {percentage}%
                  </motion.span>
                </div>
                <EnhancedProgressBar percentage={percentage} isInView={isInView} />
              </motion.div>

              {/* Duration Card */}
              <motion.div 
                className="bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5 rounded-xl p-4 border border-[#00B894]/20"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 184, 148, 0.08)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-xs font-semibold text-gray-600 mb-1">Duration</div>
                <div className="text-xl font-bold text-[#00B894]">{duration}</div>
                <div className="text-xs text-gray-500 mt-1">Estimated</div>
              </motion.div>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 bg-[#00B894] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-semibold text-gray-700">Active Phase</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Mobile Process Step Card - Enhanced
const MobileProcessStep = ({ step, index, accentColor, isInView, isLast }) => {
  const Icon = (step?.icon && LucideIcons[step.icon]) || LucideIcons.CheckCircle;
  const percentage = Math.min(85 + (index * 3), 100);
  const duration = `${2 + index * 0.5} weeks`;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative pl-20 mb-10 last:mb-0"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Timeline Node */}
      <motion.div
        className="absolute left-8 top-6 w-16 h-16 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white z-10"
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ 
          scale: { duration: 0.5, delay: index * 0.15 + 0.2, type: "spring" },
          rotate: { duration: 0.6, delay: index * 0.15 + 0.2 }
        }}
      >
        {/* Pulsing rings */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          animate={isHovered ? { rotate: 360 } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          {Icon && <Icon className="w-8 h-8 text-white relative z-10" />}
        </motion.div>
        {/* Step number */}
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center border-2 border-[#00B894]">
          <span className="text-xs font-bold text-[#00B894]">{index + 1}</span>
        </div>
      </motion.div>

      {/* Enhanced Content Card */}
      <motion.div 
        className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#00B894]/5 to-[#00C4FF]/5 opacity-0"
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <motion.h3 
              className="text-xl font-bold text-gray-800 flex-1"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              {step?.title}
            </motion.h3>
            <CircularProgress percentage={percentage} isInView={isInView} size={60} />
          </div>
          
          <p className="text-gray-600 text-sm mb-5 leading-relaxed">
            {step?.description}
          </p>

          {/* Enhanced Progress Section */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-semibold text-gray-600">Completion</span>
              <motion.span 
                className="text-sm font-bold bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent"
                animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                {percentage}%
              </motion.span>
            </div>
            <EnhancedProgressBar percentage={percentage} isInView={isInView} />
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-gray-500">Duration</span>
              <span className="text-xs font-semibold text-gray-700">{duration}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Process = ({ process = [], accentColor = fallbackColor }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  if (!Array.isArray(process) || process.length === 0) {
    return null;
  }

  return (
    <div ref={ref} className="relative py-12">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#00B894]/10 to-[#00C4FF]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#00C4FF]/10 to-[#00B894]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-full opacity-20"
            style={{
              left: `${15 + i * 12}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block relative z-10">
        {process.map((step, index) => (
          <ProcessStep
            key={`${step?.title ?? "step"}-${index}`}
            step={step}
            index={index}
            accentColor={accentColor}
            isInView={isInView}
            isLast={index === process.length - 1}
          />
        ))}
      </div>

      {/* Mobile View */}
      <div className="lg:hidden relative z-10">
        {process.map((step, index) => (
          <MobileProcessStep
            key={`${step?.title ?? "step"}-${index}`}
            step={step}
            index={index}
            accentColor={accentColor}
            isInView={isInView}
            isLast={index === process.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Process;
