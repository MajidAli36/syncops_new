"use client";
import React from "react";

const ComplianceAwareness = () => {
  const complianceAreas = [
    {
      title: "GDPR Compliance",
      description: "We understand and comply with the General Data Protection Regulation (GDPR) requirements for EU clients. Our data handling practices ensure that personal data is processed lawfully, transparently, and securely, with appropriate technical and organizational measures in place.",
      icon: "🇪🇺",
      details: [
        "Data minimization and purpose limitation",
        "Right to access, rectification, and erasure",
        "Data breach notification procedures",
        "Privacy by design and default"
      ]
    },
    {
      title: "Data Privacy Regulations",
      description: "We're well-versed in various data privacy regulations including CCPA (California), PIPEDA (Canada), and other regional requirements. Our team stays updated on evolving privacy laws to ensure ongoing compliance.",
      icon: "🔒",
      details: [
        "CCPA compliance for California clients",
        "PIPEDA compliance for Canadian clients",
        "Regional privacy law awareness",
        "Regular compliance audits"
      ]
    },
    {
      title: "Industry-Specific Compliance",
      description: "We understand industry-specific compliance requirements including HIPAA for healthcare, PCI-DSS for payment processing, and SOC 2 for cloud services. Our team can help ensure your solution meets relevant industry standards.",
      icon: "🏥",
      details: [
        "HIPAA for healthcare applications",
        "PCI-DSS for payment systems",
        "SOC 2 for cloud services",
        "Industry-specific standards"
      ]
    }
  ];

  const dataProtectionMeasures = [
    {
      measure: "Data Encryption",
      description: "All sensitive data is encrypted both in transit and at rest using industry-standard encryption algorithms."
    },
    {
      measure: "Data Residency",
      description: "We can accommodate data residency requirements, ensuring data is stored in specific geographic regions as required by regulations."
    },
    {
      measure: "Data Retention Policies",
      description: "Clear data retention and deletion policies ensure compliance with regulatory requirements and your business needs."
    },
    {
      measure: "Privacy Impact Assessments",
      description: "We conduct privacy impact assessments for projects involving personal data to identify and mitigate privacy risks."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B894]/20 to-[#00C4FF]/20 rounded-full px-6 py-2 mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-[#00B894]">Compliance First</span>
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
          Compliance Awareness
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          We understand that compliance is not optional—it's essential. Our team is well-versed in international data protection regulations and industry-specific compliance requirements.
        </p>
      </div>

      {/* Compliance Areas */}
      <div className="space-y-12 mb-20">
        {complianceAreas.map((area, index) => (
          <div
            key={index}
            className="group bg-[#1A1A2E]/90 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10 hover:border-[#00B894]/50 shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="text-6xl mb-4">{area.icon}</div>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#00B894] transition-colors duration-500">
                  {area.title}
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  {area.description}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {area.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10"
                    >
                      <svg className="w-5 h-5 text-[#00B894] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <p className="text-gray-300 text-sm">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Data Protection Measures */}
      <div className="bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-3xl p-12 border border-[#00B894]/20 mb-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-3xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Data Protection Measures
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We implement comprehensive data protection measures to ensure compliance with international regulations and protect your users' privacy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {dataProtectionMeasures.map((item, index) => (
            <div
              key={index}
              className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
            >
              <h4 className="text-xl font-bold text-white mb-3">{item.measure}</h4>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Commitment */}
      <div className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
        <div className="text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Our Compliance Commitment
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Compliance is not a one-time checkbox—it's an ongoing commitment. We continuously monitor regulatory changes, update our practices, and ensure that our team is trained on the latest compliance requirements. When you work with SyncOps, you can be confident that your project will meet the highest standards of data protection and regulatory compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/10 rounded-xl px-6 py-3 border border-white/20">
              <span className="text-white font-semibold">GDPR Ready</span>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-3 border border-white/20">
              <span className="text-white font-semibold">CCPA Compliant</span>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-3 border border-white/20">
              <span className="text-white font-semibold">Privacy by Design</span>
            </div>
            <div className="bg-white/10 rounded-xl px-6 py-3 border border-white/20">
              <span className="text-white font-semibold">Regular Audits</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceAwareness;

