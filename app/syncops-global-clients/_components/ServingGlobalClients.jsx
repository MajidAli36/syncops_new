"use client";
import React from "react";

const ServingGlobalClients = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full px-6 py-2 mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-[#00B894]">Global Excellence</span>
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold text-[#2D2D2D] mb-6">
          Serving Global Clients from Pakistan
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
          SyncOps has established itself as a trusted global software development partner, delivering world-class solutions to international clients while maintaining the highest standards of quality, security, and communication.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        {/* Left Content */}
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
                Global Reach, Local Excellence
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Based in Pakistan, SyncOps leverages the country's strong technical talent pool and cost-effective delivery model to serve clients across North America, Europe, Asia Pacific, and the Middle East.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our strategic location allows us to provide exceptional value while maintaining the quality and professionalism that global businesses expect. We've built our reputation on delivering projects that meet international standards, regardless of where our clients are located.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00C4FF]/5 to-[#00B894]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00C4FF] to-[#00B894] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#2D2D2D] mb-4 group-hover:text-[#00C4FF] transition-colors duration-500">
                Proven Track Record
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                With successful projects delivered to clients in over 7 regions worldwide, SyncOps has demonstrated its ability to work seamlessly across time zones, cultures, and business environments.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our global client base includes startups, mid-size companies, and enterprises who trust us with their critical software development needs. We've built long-term partnerships by consistently delivering on time, within budget, and exceeding expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Differentiators */}
      <div className="bg-gradient-to-r from-[#00B894]/5 to-[#00C4FF]/5 rounded-3xl p-12 border border-[#00B894]/20">
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#2D2D2D] mb-4">
            Why Choose Pakistan-Based Development?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pakistan has emerged as a premier destination for global software development, offering unique advantages that benefit international clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
              <svg className="w-10 h-10 text-[#00B894]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-[#2D2D2D] mb-3">Cost Efficiency</h4>
            <p className="text-gray-600">Significant cost savings without compromising quality, allowing you to maximize your development budget.</p>
          </div>
          
          <div className="group text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00C4FF]/20 to-[#00B894]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
              <svg className="w-10 h-10 text-[#00C4FF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-[#2D2D2D] mb-3">Technical Talent</h4>
            <p className="text-gray-600">Access to a large pool of highly skilled engineers proficient in modern technologies and best practices.</p>
          </div>
          
          <div className="group text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
              <svg className="w-10 h-10 text-[#00B894]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-[#2D2D2D] mb-3">English Proficiency</h4>
            <p className="text-gray-600">Strong English communication skills ensure seamless collaboration and clear understanding of requirements.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServingGlobalClients;

