"use client";
import React from "react";

const SecurityNDA = () => {
  const securityMeasures = [
    {
      title: "Non-Disclosure Agreements (NDA)",
      description: "We sign comprehensive NDAs before any project discussion, ensuring your ideas, business plans, and proprietary information remain confidential. Our NDAs are legally binding and cover all team members involved in your project.",
      icon: "🔒"
    },
    {
      title: "Intellectual Property Protection",
      description: "All code, designs, and deliverables created for your project belong to you. We transfer full IP rights upon project completion, with clear documentation and legal agreements protecting your ownership.",
      icon: "⚖️"
    },
    {
      title: "Secure Development Environment",
      description: "Our development infrastructure uses enterprise-grade security measures including encrypted communications, secure code repositories, and restricted access controls to protect your project assets.",
      icon: "🛡️"
    },
    {
      title: "Data Protection",
      description: "We implement strict data protection protocols, ensuring that sensitive information is handled according to international standards. All data is encrypted in transit and at rest.",
      icon: "🔐"
    },
    {
      title: "Access Controls",
      description: "Role-based access controls ensure that only authorized team members can access specific project resources. We maintain detailed audit logs of all access and modifications.",
      icon: "👥"
    },
    {
      title: "Regular Security Audits",
      description: "We conduct regular security audits and vulnerability assessments to identify and address potential security risks before they become issues. Our security practices are continuously improved.",
      icon: "🔍"
    }
  ];

  const ipProtection = [
    {
      aspect: "Code Ownership",
      description: "100% ownership of all source code, documentation, and deliverables transferred to you upon project completion."
    },
    {
      aspect: "Work-for-Hire Agreement",
      description: "Clear legal framework ensuring all work performed is considered work-for-hire, with you as the rightful owner."
    },
    {
      aspect: "Third-Party Components",
      description: "Transparent documentation of any third-party libraries or components used, with appropriate licensing information."
    },
    {
      aspect: "Confidentiality",
      description: "Strict confidentiality clauses protecting your business ideas, strategies, and proprietary information."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full px-6 py-2 mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-[#00B894]">Security First</span>
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold text-[#2D2D2D] mb-6">
          Security, NDA & IP Protection
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Your intellectual property and sensitive data are protected by industry-leading security measures and comprehensive legal agreements. We take security and confidentiality seriously.
        </p>
      </div>

      {/* Security Measures Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {securityMeasures.map((measure, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="text-5xl mb-6">{measure.icon}</div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4 group-hover:text-[#00B894] transition-colors duration-500">
                {measure.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {measure.description}
              </p>
            </div>

            {/* Floating Accent Elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-[#00B894] rounded-full animate-pulse opacity-60"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-[#00C4FF] rounded-full animate-bounce opacity-50"></div>
          </div>
        ))}
      </div>

      {/* IP Protection Section */}
      <div className="bg-gradient-to-r from-[#00B894]/5 to-[#00C4FF]/5 rounded-3xl p-12 border border-[#00B894]/20 mb-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-3xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold text-[#2D2D2D] mb-4">
            Intellectual Property Protection
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We believe that what we build for you belongs to you. Our IP protection framework ensures complete ownership and control of all deliverables.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {ipProtection.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h4 className="text-xl font-bold text-[#2D2D2D] mb-3">{item.aspect}</h4>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Security Certifications & Standards */}
      <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#2D2D2D] mb-4">
            Security Standards & Practices
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow industry best practices and maintain security standards that meet or exceed international requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#00B894]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h4 className="font-semibold text-[#2D2D2D] mb-2">Encryption</h4>
            <p className="text-sm text-gray-600">End-to-end encryption</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00C4FF]/20 to-[#00B894]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#00C4FF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h4 className="font-semibold text-[#2D2D2D] mb-2">Secure Repos</h4>
            <p className="text-sm text-gray-600">Private repositories</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#00B894]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <h4 className="font-semibold text-[#2D2D2D] mb-2">Access Control</h4>
            <p className="text-sm text-gray-600">Role-based access</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00C4FF]/20 to-[#00B894]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#00C4FF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h4 className="font-semibold text-[#2D2D2D] mb-2">Audit Logs</h4>
            <p className="text-sm text-gray-600">Complete audit trail</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityNDA;

