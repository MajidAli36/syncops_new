"use client";
import { generateFAQSchema } from "../../../utils/seoUtils";
import { useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQSection({ service, faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  // Default FAQs if none provided
  const defaultFaqs = [
    {
      question: `What is ${service}?`,
      answer: `${service} is a comprehensive solution designed to help businesses optimize their operations, improve efficiency, and achieve their strategic goals. Our ${service} services are tailored to meet your specific needs and industry requirements.`
    },
    {
      question: `How long does ${service} implementation take?`,
      answer: `Implementation timelines vary based on project scope and complexity. Typically, ${service} projects take 4-8 weeks for standard implementations, while more complex projects may require 12-16 weeks. We provide detailed timelines during the initial consultation phase.`
    },
    {
      question: `What industries benefit from ${service}?`,
      answer: `${service} is suitable for various industries including healthcare, finance, retail, manufacturing, and technology. Our solutions are adaptable and can be customized to meet the unique requirements of your industry and business model.`
    },
    {
      question: `Do you provide ongoing support after ${service} implementation?`,
      answer: `Yes, we offer comprehensive ongoing support and maintenance services. This includes regular updates, performance monitoring, technical support, and continuous optimization to ensure your ${service} solution continues to deliver value as your business evolves.`
    },
    {
      question: `What is the cost of ${service}?`,
      answer: `Pricing for ${service} depends on your specific requirements, project scope, and customization needs. We provide detailed quotes after understanding your business needs. Contact us for a free consultation and customized pricing based on your requirements.`
    }
  ];

  const displayFaqs = faqs.length > 0 ? faqs : defaultFaqs;
  
  useEffect(() => {
    // Add FAQ schema to page
    const faqSchema = generateFAQSchema(displayFaqs);
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    script.id = `faq-schema-${service.replace(/\s+/g, '-').toLowerCase()}`;
    
    if (!document.getElementById(script.id)) {
      document.head.appendChild(script);
    }
    
    return () => {
      const existing = document.getElementById(script.id);
      if (existing) existing.remove();
    };
  }, [displayFaqs, service]);

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" aria-labelledby="faq-heading">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5 rounded-full blur-3xl" aria-hidden="true"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full border border-[#00B894]/20 mb-6">
            <div className="w-2 h-2 bg-[#00B894] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-[#00B894]">Common Questions</span>
          </div>
          <h2 id="faq-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-balance leading-relaxed">
            Find answers to common questions about our {service} services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {displayFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#00B894]/50 rounded-xl"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#00B894] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            aria-label="Contact us for more information"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

