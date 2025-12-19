"use client";
import React from "react";

const WhyChooseSyncOps = () => {
  const reasons = [
    {
      title: "Proven Global Track Record",
      description: "With 50+ successful projects delivered to clients across 7+ regions, we have a proven track record of delivering quality solutions to international clients. Our experience spans various industries, technologies, and business models.",
      icon: "🏆",
      stats: "50+ Global Projects"
    },
    {
      title: "World-Class Security & Compliance",
      description: "We take security and compliance seriously. Our comprehensive security measures, GDPR compliance, and IP protection frameworks ensure that your data and intellectual property are always protected.",
      icon: "🔒",
      stats: "100% IP Protection"
    },
    {
      title: "Seamless Communication",
      description: "Our flexible communication model bridges time zones and distances. With multiple communication channels, flexible scheduling, and responsive teams, you'll always feel connected to your project.",
      icon: "💬",
      stats: "24/7 Support Available"
    },
    {
      title: "Cost-Effective Excellence",
      description: "Get world-class development at a fraction of the cost. Our Pakistan-based delivery model provides exceptional value without compromising on quality, security, or professionalism.",
      icon: "💰",
      stats: "Up to 60% Cost Savings"
    },
    {
      title: "Cultural & Business Alignment",
      description: "We understand that successful partnerships require more than technical expertise. Our team is trained in cross-cultural communication and business alignment to ensure seamless collaboration.",
      icon: "🤝",
      stats: "98% Client Satisfaction"
    },
    {
      title: "Flexible Engagement Models",
      description: "Whether you need a dedicated team, project-based support, or ongoing maintenance, we offer flexible engagement models that adapt to your specific needs and scale as you grow.",
      icon: "🔄",
      stats: "3 Engagement Models"
    }
  ];

  const differentiators = [
    {
      point: "English Proficiency",
      description: "Strong English communication skills across all team members ensure clear, effective collaboration."
    },
    {
      point: "Agile Methodology",
      description: "Industry-standard Agile practices ensure transparency, regular deliverables, and continuous improvement."
    },
    {
      point: "Quality Assurance",
      description: "Rigorous testing and quality assurance processes ensure deliverables meet the highest standards."
    },
    {
      point: "Scalable Teams",
      description: "Ability to scale teams up or down based on project requirements and business needs."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B894]/20 to-[#00C4FF]/20 rounded-full px-6 py-2 mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-[#00B894]">Why Choose Us</span>
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
          Why Global Clients Choose SyncOps
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          When you choose SyncOps, you're choosing a partner committed to your success. Here's what sets us apart in the global software development landscape.
        </p>
      </div>

      {/* Reasons Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="group bg-[#1A1A2E]/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-[#00B894]/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B894]/10 to-[#00C4FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="text-5xl mb-6">{reason.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00B894] transition-colors duration-500">
                {reason.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {reason.description}
              </p>
              <div className="inline-flex items-center gap-2 bg-[#00B894]/20 rounded-full px-4 py-2 border border-[#00B894]/30">
                <span className="text-sm font-semibold text-[#00B894]">{reason.stats}</span>
              </div>
            </div>

            {/* Floating Accent Elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-[#00B894] rounded-full animate-pulse opacity-60"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-[#00C4FF] rounded-full animate-bounce opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Key Differentiators */}
      <div className="bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-3xl p-12 border border-[#00B894]/20 mb-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Key Differentiators
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            What makes SyncOps the right choice for your global software development needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#00B894]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">{item.point}</h4>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Trusted by Global Businesses
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our commitment to excellence, security, and client success has earned us the trust of businesses worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <p className="text-gray-300 text-sm">Global Projects</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">7+</div>
            <p className="text-gray-300 text-sm">Regions Served</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <p className="text-gray-300 text-sm">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <p className="text-gray-300 text-sm">Support Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSyncOps;

