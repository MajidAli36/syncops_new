"use client";
import React from "react";

const RegionsServed = () => {
  const regions = [
    {
      name: "USA",
      description: "Serving clients across all US time zones with dedicated support and seamless communication. Our team understands American business culture and works closely with US-based companies to deliver solutions that meet their specific needs.",
      timezone: "EST/PST Overlap",
      industries: "SaaS, FinTech, Healthcare, E-commerce",
      icon: "🇺🇸"
    },
    {
      name: "UK",
      description: "Strong presence in the United Kingdom with experience working with British businesses. We understand UK compliance requirements, business practices, and cultural nuances that matter in professional relationships.",
      timezone: "GMT Overlap",
      industries: "Financial Services, Retail, Technology",
      icon: "🇬🇧"
    },
    {
      name: "EU",
      description: "Extensive experience serving clients across European Union countries. We're well-versed in GDPR compliance, European data protection standards, and the diverse business cultures across EU member states.",
      timezone: "CET Overlap",
      industries: "Manufacturing, Healthcare, Education, Tech",
      icon: "🇪🇺"
    },
    {
      name: "Canada",
      description: "Trusted partner for Canadian businesses seeking quality software development. Our team works effectively across Canadian time zones and understands the unique requirements of the Canadian market.",
      timezone: "EST/PST Overlap",
      industries: "Technology, Finance, Healthcare, Retail",
      icon: "🇨🇦"
    },
    {
      name: "Australia",
      description: "Serving Australian clients with dedicated support during their business hours. Despite the time zone difference, we've established effective communication protocols that ensure smooth collaboration.",
      timezone: "AEST Overlap",
      industries: "Mining, Finance, Healthcare, Education",
      icon: "🇦🇺"
    },
    {
      name: "Singapore",
      description: "Strong presence in Singapore and Southeast Asia. We understand the fast-paced business environment and high standards expected in this region, delivering solutions that meet Singapore's rigorous quality expectations.",
      timezone: "SGT Overlap",
      industries: "Finance, Logistics, Technology, E-commerce",
      icon: "🇸🇬"
    },
    {
      name: "UAE",
      description: "Serving clients in the United Arab Emirates and broader Middle East region. We understand the business culture, compliance requirements, and the growing tech ecosystem in this dynamic market.",
      timezone: "GST Overlap",
      industries: "Real Estate, Finance, Retail, Technology",
      icon: "🇦🇪"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B894]/20 to-[#00C4FF]/20 rounded-full px-6 py-2 mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-[#00B894]">Global Presence</span>
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
          Regions We Serve
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          SyncOps proudly serves clients across 7 major regions worldwide, each with its unique business culture, compliance requirements, and market dynamics.
        </p>
      </div>

      {/* Regions Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {regions.map((region, index) => (
          <div
            key={region.name}
            className="group bg-[#1A1A2E]/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-[#00B894]/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B894]/10 to-[#00C4FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              {/* Region Icon & Name */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">{region.icon}</div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#00B894] transition-colors duration-500">
                  {region.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {region.description}
              </p>

              {/* Details */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#00B894] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm-1 12h-2v-2h2v2zm0-4h-2V7h2v3z"/>
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-white">Timezone</p>
                    <p className="text-sm text-gray-400">{region.timezone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#00C4FF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-white">Industries</p>
                    <p className="text-sm text-gray-400">{region.industries}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Accent Elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-[#00B894] rounded-full animate-pulse opacity-60"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-[#00C4FF] rounded-full animate-bounce opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Global Coverage Stats */}
      <div className="bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-3xl p-12 border border-[#00B894]/20 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="group transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-[#00B894] transition-colors duration-300">7+</div>
            <p className="text-gray-300">Regions Served</p>
          </div>
          <div className="group transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-[#00C4FF] transition-colors duration-300">24/7</div>
            <p className="text-gray-300">Support Coverage</p>
          </div>
          <div className="group transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-[#00B894] transition-colors duration-300">50+</div>
            <p className="text-gray-300">Global Projects</p>
          </div>
          <div className="group transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-[#00C4FF] transition-colors duration-300">98%</div>
            <p className="text-gray-300">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionsServed;

