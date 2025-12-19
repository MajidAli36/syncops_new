"use client";
import React from "react";

const GlobalTeamsModel = () => {
  const practices = [
    {
      title: "Agile Development Methodology",
      description: "We follow industry-standard Agile practices including Scrum and Kanban, ensuring transparency, regular deliverables, and continuous improvement throughout the development lifecycle.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      title: "Dedicated Team Model",
      description: "We offer flexible engagement models including dedicated teams that work exclusively on your projects, ensuring deep domain knowledge and consistent delivery.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.28c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
        </svg>
      )
    },
    {
      title: "Transparent Reporting",
      description: "Regular status updates, sprint reviews, and comprehensive reporting keep you informed about project progress, milestones, and any challenges we encounter.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing processes including unit testing, integration testing, and user acceptance testing ensure that deliverables meet the highest quality standards.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full px-6 py-2 mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-[#00B894]">Our Approach</span>
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold text-[#2D2D2D] mb-6">
          How SyncOps Works with Global Teams
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Our proven delivery model is designed to bridge distances, time zones, and cultural differences, ensuring seamless collaboration with international clients.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        {/* Left: Overview */}
        <div className="space-y-8">
          <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#2D2D2D] mb-4 group-hover:text-[#00B894] transition-colors duration-500">
                Seamless Integration
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We don't just work for you—we work with you. Our teams integrate seamlessly into your workflow, adopting your tools, processes, and communication preferences to ensure a unified experience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you need a dedicated development team, project-based support, or ongoing maintenance, we adapt our engagement model to fit your specific requirements and organizational structure.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Key Practices */}
        <div className="space-y-6">
          {practices.map((practice, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#00B894]/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 text-[#00B894]">
                  {practice.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-[#2D2D2D] mb-2 group-hover:text-[#00B894] transition-colors duration-300">
                    {practice.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {practice.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Engagement Models */}
      <div className="bg-gradient-to-r from-[#00B894]/5 to-[#00C4FF]/5 rounded-3xl p-12 border border-[#00B894]/20">
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#2D2D2D] mb-4">
            Flexible Engagement Models
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the engagement model that best fits your needs and scale as your requirements evolve.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-[#00B894]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.28c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-[#2D2D2D] mb-3 text-center">Dedicated Team</h4>
            <p className="text-gray-600 text-center">A dedicated team exclusively working on your projects with full integration into your workflow.</p>
          </div>
          
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00C4FF]/20 to-[#00B894]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-[#00C4FF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-[#2D2D2D] mb-3 text-center">Project-Based</h4>
            <p className="text-gray-600 text-center">Fixed-scope projects with defined timelines and deliverables, perfect for specific initiatives.</p>
          </div>
          
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-[#00B894]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-[#2D2D2D] mb-3 text-center">Time & Materials</h4>
            <p className="text-gray-600 text-center">Flexible hourly or monthly billing for ongoing support, maintenance, and evolving requirements.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalTeamsModel;

