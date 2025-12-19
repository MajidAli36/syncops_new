"use client";
import React from "react";

const CulturalAlignment = () => {
  const culturalAspects = [
    {
      title: "Business Communication Style",
      description: "We understand that different regions have different communication styles. Whether you prefer direct, straightforward communication or a more relationship-oriented approach, we adapt to your preferences. Our team is trained in cross-cultural communication to ensure effective collaboration.",
      icon: "💬"
    },
    {
      title: "Work Ethic & Professionalism",
      description: "We maintain the highest standards of professionalism, punctuality, and work ethic that global clients expect. Our team understands the importance of deadlines, quality deliverables, and going the extra mile to ensure client satisfaction.",
      icon: "⭐"
    },
    {
      title: "Understanding Business Context",
      description: "We take time to understand your business context, industry dynamics, and market requirements. This deep understanding allows us to provide solutions that are not just technically sound but also aligned with your business goals and market expectations.",
      icon: "🎯"
    },
    {
      title: "Flexibility & Adaptability",
      description: "We're flexible and adaptable to different working styles, time zones, and business practices. Whether you follow Agile, Waterfall, or a hybrid approach, we can adapt our processes to align with your preferred methodology.",
      icon: "🔄"
    }
  ];

  const alignmentPractices = [
    {
      practice: "Cultural Training",
      description: "Our team receives training on different business cultures and communication styles to ensure effective collaboration with international clients."
    },
    {
      practice: "Regular Check-ins",
      description: "Frequent communication and check-ins ensure we stay aligned with your expectations and can quickly address any concerns or adjustments needed."
    },
    {
      practice: "Feedback Loops",
      description: "We actively seek feedback and incorporate it into our processes, ensuring continuous improvement and alignment with your preferences."
    },
    {
      practice: "Documentation Standards",
      description: "We follow documentation standards that match your expectations, ensuring clarity, consistency, and ease of handover."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full px-6 py-2 mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-[#00B894]">Cultural Bridge</span>
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold text-[#2D2D2D] mb-6">
          Cultural & Business Alignment
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Successful global partnerships require more than just technical expertise—they require cultural understanding and business alignment. We bridge the gap between different business cultures to ensure seamless collaboration.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        {/* Left: Cultural Aspects */}
        <div className="space-y-8">
          {culturalAspects.map((aspect, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl flex-shrink-0">{aspect.icon}</div>
                  <h3 className="text-2xl font-bold text-[#2D2D2D] group-hover:text-[#00B894] transition-colors duration-500">
                    {aspect.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {aspect.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Alignment Practices */}
        <div>
          <div className="bg-gradient-to-br from-[#00B894]/10 to-[#00C4FF]/10 rounded-3xl p-8 border border-[#00B894]/20 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-[#2D2D2D] mb-4">
              Building Strong Partnerships
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We believe that strong partnerships are built on understanding, respect, and alignment. Our approach goes beyond just delivering code—we become an extension of your team, understanding your business, your challenges, and your goals.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This deep alignment allows us to provide proactive suggestions, anticipate needs, and deliver solutions that truly make a difference to your business.
            </p>
          </div>

          <div className="space-y-6">
            {alignmentPractices.map((practice, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#00B894]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#2D2D2D] mb-2">
                      {practice.practice}
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
      </div>

      {/* Success Stories */}
      <div className="bg-gradient-to-r from-[#00B894]/5 to-[#00C4FF]/5 rounded-3xl p-12 border border-[#00B894]/20">
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#2D2D2D] mb-4">
            What Our Global Clients Say
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to cultural alignment and business understanding has helped us build lasting partnerships with clients worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-4xl mb-4">"</div>
            <p className="text-gray-600 leading-relaxed mb-4 italic">
              "SyncOps understands our business culture and works seamlessly with our team. It feels like they're working in the same office, not halfway across the world."
            </p>
            <p className="text-sm font-semibold text-[#2D2D2D]">— US-Based SaaS Company</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-4xl mb-4">"</div>
            <p className="text-gray-600 leading-relaxed mb-4 italic">
              "The team's professionalism and understanding of European business practices made our collaboration smooth and effective from day one."
            </p>
            <p className="text-sm font-semibold text-[#2D2D2D]">— UK Financial Services Firm</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-4xl mb-4">"</div>
            <p className="text-gray-600 leading-relaxed mb-4 italic">
              "They've become an integral part of our team. Their flexibility and adaptability to our working style is impressive."
            </p>
            <p className="text-sm font-semibold text-[#2D2D2D]">— Australian Tech Startup</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalAlignment;

