"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SafeLink from "../../components/ui/SafeLink";

const CEOMessage = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // Group services into categories for better organization
  const serviceCategories = {
    "AI & Advanced Solutions": [
      "AI Solutions",
      "Data Analytics",
      "Blockchain Solutions"
    ],
    "Development Services": [
      "Custom Software Development",
      "Web Development",
      "Mobile App Development",
      "E-commerce Solutions"
    ],
    "Infrastructure & Operations": [
      "Cloud Solutions",
      "DevOps",
      "System Integration",
      "Legacy System Modernization"
    ],
    "Security & Quality": [
      "Cybersecurity",
      "Quality Assurance & Testing"
    ],
    "Strategy & Transformation": [
      "Digital Transformation",
      "Consulting & Strategy"
    ]
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#FAFAFF] to-white py-20"
      aria-label="CEO Message Section"
    >
      {/* Background Effects - Optimized for performance */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00B894]/5 to-[#00C4FF]/5" aria-hidden="true"></div>
      <div 
        className={`absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full filter ${prefersReducedMotion ? 'blur-2xl' : 'blur-3xl'} opacity-10`}
        aria-hidden="true"
      ></div>
      <div 
        className={`absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-[#00C4FF] to-[#00B894] rounded-full filter ${prefersReducedMotion ? 'blur-2xl' : 'blur-3xl'} opacity-10`}
        aria-hidden="true"
      ></div>
      <div 
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#00B894]/3 to-[#00C4FF]/3 rounded-full filter ${prefersReducedMotion ? 'blur-2xl' : 'blur-3xl'} opacity-20`}
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title with Animated Underline */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 relative">
              A Message from Our CEO
              <div 
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full shadow-[0_0_10px_rgba(0,184,148,0.5)] ${prefersReducedMotion ? '' : 'transition-all duration-300'}`}
                aria-hidden="true"
              ></div>
              <div 
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full ${prefersReducedMotion ? '' : 'transition-all duration-300'}`}
                aria-hidden="true"
              ></div>
            </h1>
          </div>

          {/* Main CEO Message Card */}
          <article 
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 hover:shadow-[0_0_40px_rgba(0,184,148,0.15)] transition-all duration-500 relative overflow-hidden"
            aria-label="CEO Message Card"
          >
            {/* Background gradient on hover */}
            <div 
              className={`absolute inset-0 bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5 opacity-0 hover:opacity-100 ${prefersReducedMotion ? '' : 'transition-opacity duration-500'}`}
              aria-hidden="true"
            ></div>
            
            {/* Glowing border effect - Reduced blur for performance */}
            <div 
              className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00B894] to-[#00C4FF] opacity-0 hover:opacity-20 ${prefersReducedMotion ? '' : 'transition-opacity duration-500'} ${prefersReducedMotion ? 'blur-lg' : 'blur-xl'}`}
              aria-hidden="true"
            ></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - CEO Profile */}
              <div className="text-center space-y-6 ">
                {/* CEO Image - Centered */}
                <div className="relative">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full p-[6px] shadow-2xl">
                    <div className="w-full h-full bg-white rounded-full overflow-hidden border-2 border-white shadow-inner">
                      <Image
                        src="https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948234/majid-ali-ceo-syncops_c6y6ay.jpg"
                        alt="Majid Ali - CEO of SyncOps"
                        width={192}
                        height={192}
                        priority
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  
                  {/* Additional floating elements around image */}
                  <div 
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full opacity-60"
                    aria-hidden="true"
                  ></div>
                  <div 
                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-[#00C4FF] to-[#00B894] rounded-full opacity-70"
                    aria-hidden="true"
                  ></div>
                  <div 
                    className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-3 h-3 bg-[#00B894] rounded-full"
                    aria-hidden="true"
                  ></div>
                </div>

                {/* Badge - Centered under avatar */}
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#E6F7F5] to-[#F0FDFA] rounded-full border border-[#007E7A]/20 shadow-sm">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full mr-2"></div>
                  <span className="text-[#007E7A] font-bold text-sm">Vision & Leadership</span>
                </div>

                {/* CEO Info */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {/* Background gradient */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5 opacity-0 hover:opacity-100 ${prefersReducedMotion ? '' : 'transition-opacity duration-300'}`}
                    aria-hidden="true"
                  ></div>
                  
                  {/* Glowing border effect */}
                  <div 
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00B894] to-[#00C4FF] opacity-0 hover:opacity-10 ${prefersReducedMotion ? '' : 'transition-opacity duration-300'} blur-sm`}
                    aria-hidden="true"
                  ></div>
                  
                  <div className="relative z-10 space-y-4">
                    {/* Name */}
                    <h2 className="text-3xl font-semibold text-[#1a1a1a] leading-tight">Majid Ali</h2>
                    
                    {/* Title */}
                    <p className="text-[#006B6B] font-medium text-lg">Founder & CEO, SyncOps</p>
                    
                    {/* Bio paragraph */}
                    <p className="text-[#2d3748] text-base leading-relaxed max-w-xs mx-auto text-center">
                      Driving innovation through cutting-edge technology solutions that transform businesses and accelerate digital growth.
                    </p>
                    
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#E6F7F5] to-[#F0FDFA] rounded-full border border-[#00B894]/20">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full mr-2"></div>
                      <span className="text-[#007E7A] font-semibold text-sm">Founder & Visionary</span>
                    </div>
                  </div>
                </div>

                {/* Social Icons - Centered with platform-specific colors */}
                <nav className="flex items-center justify-center gap-4" aria-label="CEO Social Media Links">
                  <a
                    href="https://www.linkedin.com/in/majidali-syncops/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with Majid Ali on LinkedIn (opens in new tab)"
                    title="Connect on LinkedIn"
                    className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#0077B5] hover:text-white ${prefersReducedMotion ? '' : 'transition-all duration-300 hover:scale-110'} hover:shadow-[0_0_20px_rgba(0,119,181,0.5)] group focus:outline-none focus:ring-2 focus:ring-[#0077B5] focus:ring-offset-2`}
                  >
                    <svg className={`w-5 h-5 ${prefersReducedMotion ? '' : 'transition-transform duration-300 group-hover:scale-110'}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/majidali"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Majid Ali on X (Twitter) (opens in new tab)"
                    title="Follow on X (Twitter)"
                    className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#1DA1F2] hover:text-white ${prefersReducedMotion ? '' : 'transition-all duration-300 hover:scale-110'} hover:shadow-[0_0_20px_rgba(29,161,242,0.5)] group focus:outline-none focus:ring-2 focus:ring-[#1DA1F2] focus:ring-offset-2`}
                  >
                    <svg className={`w-5 h-5 ${prefersReducedMotion ? '' : 'transition-transform duration-300 group-hover:scale-110'}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/MajidAli36"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Majid Ali's GitHub profile (opens in new tab)"
                    title="View GitHub Profile"
                    className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#333] hover:text-white ${prefersReducedMotion ? '' : 'transition-all duration-300 hover:scale-110'} hover:shadow-[0_0_20px_rgba(51,51,51,0.5)] group focus:outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-2`}
                  >
                    <svg className={`w-5 h-5 ${prefersReducedMotion ? '' : 'transition-transform duration-300 group-hover:scale-110'}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </nav>
              </div>

              {/* Right Side - Message */}
              <div className="flex flex-col justify-center">
                <div className="space-y-8 text-[#1a1a1a] leading-relaxed max-w-[70ch]">
                  <div>
                    <p className="text-lg text-[#2d3748] mb-4">
                      Welcome to <span className="font-bold text-[#006B6B]">SyncOps</span>! We're passionate about building technology that:
                    </p>
                    <ul className="list-disc list-inside space-y-2.5 text-lg text-[#2d3748] ml-4">
                      <li>Inspires <span className="font-semibold text-[#006B6B]">trust</span></li>
                      <li>Drives <span className="font-semibold text-[#006B6B]">innovation</span></li>
                      <li>Delivers real value for our clients and partners</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-lg text-[#2d3748] mb-4">
                      SyncOps was founded with a vision to <span className="font-semibold text-[#006B6B]">empower organizations</span> through digital transformation. Our commitment includes:
                    </p>
                    <ul className="list-disc list-inside space-y-2.5 text-lg text-[#2d3748] ml-4">
                      <li>Unwavering dedication to <span className="font-semibold text-[#006B6B]">excellence</span></li>
                      <li>Relentless focus on <span className="font-semibold text-[#006B6B]">client success</span></li>
                      <li>Continuous growth and innovation from our early days to today</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-xl p-6 border-l-4 border-[#00B894] backdrop-blur-sm relative">
                    {/* Accent dot in top-left corner */}
                    <div 
                      className="absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full"
                      aria-hidden="true"
                    ></div>
                    <blockquote className="text-lg font-semibold italic text-[#1a1a1a] leading-relaxed">
                      "Our mission is to <span className="text-[#006B6B] font-bold">lead with innovation</span>, integrity, and a relentless focus on delivering solutions that shape the future of business."
                    </blockquote>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-4">Our core services:</h3>
                    <div className="space-y-4">
                      {Object.entries(serviceCategories).map(([category, services]) => (
                        <div key={category} className="bg-gray-50/50 rounded-lg p-4 border border-gray-100">
                          <h4 className="text-base font-semibold text-[#1a1a1a] mb-3">{category}</h4>
                          <ul className="space-y-2 text-base text-[#2d3748]">
                            {services.map((service) => (
                              <li key={service} className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#006B6B] mt-2 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold text-[#006B6B] flex-1">{service}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-lg text-[#2d3748]">
                    Thank you for choosing SyncOps as your <span className="font-semibold text-[#006B6B]">technology partner</span>. We look forward to achieving <span className="font-semibold text-[#006B6B]">great things</span> together.
                  </p>
                </div>

                {/* Signature */}
                <div className="mt-16 pt-8 border-t border-gray-200 relative">
                  {/* Floating accent dot near signature */}
                  <div 
                    className="absolute -top-2 -left-2 w-3 h-3 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full opacity-70"
                    aria-hidden="true"
                  ></div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="text-3xl font-bold text-[#1a1a1a] mb-2" style={{ fontFamily: 'cursive' }}>
                        Majid Ali
                      </div>
                      <div className="text-sm text-[#4a5568]">Founder & CEO, SyncOps</div>
                    </div>
                    <div 
                      className="w-16 h-0.5 bg-gradient-to-r from-[#00C4FF] to-[#00B894] rounded-full shadow-[0_0_5px_rgba(0,196,255,0.3)]"
                      aria-hidden="true"
                    ></div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-16 relative">
                  {/* Floating accent dot near CTA */}
                  <div 
                    className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full opacity-60"
                    aria-hidden="true"
                  ></div>
                  <SafeLink href="/about#team">
                    <button 
                      className={`group bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(0,184,148,0.4)] ${prefersReducedMotion ? '' : 'hover:scale-105 transition-all duration-300'} relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#00B894] focus:ring-offset-2`}
                      aria-label="Meet Our Team - Navigate to team section"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.28c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
                        </svg>
                        Meet Our Team
                      </span>
                      <div 
                        className={`absolute inset-0 bg-gradient-to-r from-[#00C4FF] to-[#00B894] opacity-0 group-hover:opacity-100 ${prefersReducedMotion ? '' : 'transition-opacity duration-300'}`}
                        aria-hidden="true"
                      ></div>
                    </button>
                  </SafeLink>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage; 