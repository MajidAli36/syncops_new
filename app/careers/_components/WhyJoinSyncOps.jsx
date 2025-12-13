"use client";
import React from "react";
import { Rocket, Globe, BookOpen, Lightbulb, Handshake, Award, Star, Quote } from 'lucide-react';

const WhyJoinSyncOps = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Cutting-Edge Projects",
      description:
        "Work on the latest AI and machine learning technologies that are shaping the future of software development.",
      gradient: "from-[#00B894] to-[#00C4FF]",
      metricLabel: "Innovation exposure",
      metricScore: 98
    },
    {
      icon: Globe,
      title: "Remote-First Culture",
      description:
        "Work from anywhere in the world with flexible hours and a supportive team that values work-life balance.",
      gradient: "from-[#00C4FF] to-[#00B894]",
      metricLabel: "Work–life balance",
      metricScore: 96
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description:
        "Access to courses, conferences, and mentorship programs to help you grow both personally and professionally.",
      gradient: "from-[#00B894] to-[#00C4FF]",
      metricLabel: "Learning support",
      metricScore: 97
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description:
        "Be part of a team that encourages creative thinking and rewards innovative solutions to complex problems.",
      gradient: "from-[#00C4FF] to-[#00B894]",
      metricLabel: "Creative freedom",
      metricScore: 95
    },
    {
      icon: Handshake,
      title: "Collaborative Environment",
      description:
        "Join a diverse team where every voice matters and collaboration leads to breakthrough solutions.",
      gradient: "from-[#00B894] to-[#00C4FF]",
      metricLabel: "Team collaboration",
      metricScore: 99
    },
    {
      icon: Award,
      title: "Competitive Benefits",
      description:
        "Comprehensive health coverage, generous PTO, and performance-based bonuses that recognize your contributions.",
      gradient: "from-[#00C4FF] to-[#00B894]",
      metricLabel: "Total rewards",
      metricScore: 94
    }
  ];

  return (
    <div id="why-join-syncops" className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1F3A56] mb-6">
          Why Join SyncOps?
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Discover what makes SyncOps the perfect place to grow your career and make a real impact in the world of AI-powered software.
        </p>
      </div>

      {/* Benefits Grid with graph-style details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 relative overflow-hidden"
          >
            {/* Glowing background effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
            />

            <div className="relative z-10 flex flex-col h-full">
              {/* Icon + metric label */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                >
                  <benefit.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <div className="ml-4 px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-[11px] font-medium text-gray-600 whitespace-nowrap">
                  {benefit.metricLabel}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#1F3A56] mb-3 group-hover:text-[#00B894] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {benefit.description}
                </p>
              </div>

              {/* Metric bar (graph look) */}
              <div className="mt-2">
                <div className="flex items-center justify-between text-[11px] text-gray-500 mb-1">
                  <span>Team rating</span>
                  <span className="font-semibold text-[#00B894]">
                    {benefit.metricScore}%
                  </span>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${benefit.gradient} rounded-full`}
                    style={{ width: `${benefit.metricScore}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Employee Quote Card - Highlighted */}
      <div className="relative max-w-4xl mx-auto">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-3xl blur-3xl"></div>
        
        {/* Quote Card */}
        <div className="relative bg-gradient-to-br from-white to-[#F9FCFE] rounded-3xl p-12 lg:p-16 shadow-2xl border border-gray-100">
          {/* Quote Icon */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-full flex items-center justify-center shadow-lg mx-auto">
              <Quote className="w-8 h-8 text-white" aria-hidden="true" />
            </div>
          </div>

          {/* Quote Text */}
          <blockquote className="text-2xl lg:text-3xl font-medium text-[#1F3A56] mb-8 leading-relaxed text-center">
            "At SyncOps, I've found the perfect balance of challenging work and supportive culture. Every day feels like I'm contributing to something meaningful that will shape the future of technology."
          </blockquote>

          {/* Author */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">SM</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-[#1F3A56]">Sarah Mitchell</p>
                <p className="text-gray-600">Senior AI Engineer</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#00B894]" aria-hidden="true" />
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-6 -left-6 w-4 h-4 bg-[#00B894] rounded-full animate-pulse opacity-60"></div>
        <div className="absolute -bottom-6 -right-6 w-6 h-6 bg-[#00C4FF] rounded-full animate-bounce opacity-50"></div>
      </div>
    </div>
  );
};

export default WhyJoinSyncOps; 