"use client";
import React from "react";

const TimezoneCommunication = () => {
  const communicationChannels = [
    {
      name: "Daily Standups",
      description: "Scheduled daily meetings aligned with your timezone to discuss progress, blockers, and priorities.",
      icon: "📅"
    },
    {
      name: "Slack/Teams",
      description: "Real-time communication channels for instant messaging, quick questions, and team collaboration.",
      icon: "💬"
    },
    {
      name: "Video Calls",
      description: "Regular video conferences for sprint planning, reviews, retrospectives, and important discussions.",
      icon: "📹"
    },
    {
      name: "Email Updates",
      description: "Comprehensive email reports with project status, milestones achieved, and upcoming deliverables.",
      icon: "📧"
    },
    {
      name: "Project Management Tools",
      description: "Integration with Jira, Trello, Asana, or your preferred PM tool for transparent task tracking.",
      icon: "📊"
    },
    {
      name: "Documentation",
      description: "Comprehensive documentation, wikis, and knowledge bases to ensure nothing is lost in translation.",
      icon: "📚"
    }
  ];

  const timezoneOverlaps = [
    {
      region: "USA (EST)",
      overlap: "2-4 hours",
      description: "Significant overlap during US business hours, enabling real-time collaboration."
    },
    {
      region: "UK (GMT)",
      overlap: "3-5 hours",
      description: "Excellent overlap with UK business hours, perfect for daily standups and meetings."
    },
    {
      region: "EU (CET)",
      overlap: "2-4 hours",
      description: "Good overlap with Central European time, ensuring responsive communication."
    },
    {
      region: "Australia (AEST)",
      overlap: "Limited",
      description: "Structured communication protocols ensure effective collaboration despite time difference."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B894]/20 to-[#00C4FF]/20 rounded-full px-6 py-2 mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-[#00B894]">Always Connected</span>
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
          Timezone & Communication Model
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          Effective communication is the foundation of successful global partnerships. We've developed proven strategies to bridge time zones and ensure seamless collaboration.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        {/* Left: Communication Channels */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8">Communication Channels</h3>
          <div className="space-y-6">
            {communicationChannels.map((channel, index) => (
              <div
                key={index}
                className="group bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#00B894]/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{channel.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#00B894] transition-colors duration-300">
                      {channel.name}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {channel.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Timezone Strategy */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8">Timezone Strategy</h3>
          <div className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Flexible Scheduling</h4>
            <p className="text-gray-300 leading-relaxed mb-6">
              We understand that time zones can be challenging. Our team is flexible and willing to adjust schedules to ensure optimal overlap with your business hours. For regions with limited overlap, we've established structured communication protocols that ensure nothing falls through the cracks.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our project managers and team leads are available during your business hours for critical discussions, while our development teams work during their optimal hours to maximize productivity.
            </p>
          </div>

          {/* Timezone Overlaps */}
          <div className="space-y-4">
            {timezoneOverlaps.map((overlap, index) => (
              <div
                key={index}
                className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center justify-between mb-2">
                  <h5 className="text-lg font-bold text-white">{overlap.region}</h5>
                  <span className="text-[#00B894] font-semibold">{overlap.overlap}</span>
                </div>
                <p className="text-sm text-gray-400">{overlap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Communication Best Practices */}
      <div className="bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-3xl p-12 border border-[#00B894]/20">
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Communication Best Practices
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We follow industry best practices to ensure clear, effective, and timely communication.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
              <svg className="w-10 h-10 text-[#00B894]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Response Time SLA</h4>
            <p className="text-gray-300">Guaranteed response times based on priority levels, ensuring urgent matters are addressed immediately.</p>
          </div>
          
          <div className="group text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00C4FF]/20 to-[#00B894]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
              <svg className="w-10 h-10 text-[#00C4FF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Transparent Reporting</h4>
            <p className="text-gray-300">Regular status updates, progress reports, and comprehensive documentation keep you informed at all times.</p>
          </div>
          
          <div className="group text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
              <svg className="w-10 h-10 text-[#00B894]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Cultural Sensitivity</h4>
            <p className="text-gray-300">Understanding of different business cultures, communication styles, and professional expectations across regions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimezoneCommunication;

