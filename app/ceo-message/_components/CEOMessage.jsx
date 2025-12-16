"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SafeLink from "../../components/ui/SafeLink";

const CEOMessage = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({});
  const sectionRef = useRef(null);

  const coreValues = [
    { label: "Trust", value: 98, color: "from-[#00B894] to-[#00C4FF]" },
    { label: "Innovation", value: 99, color: "from-[#00C4FF] to-[#00B894]" },
    { label: "Excellence", value: 97, color: "from-[#00B894] to-[#00C4FF]" },
    { label: "Growth", value: 98, color: "from-[#00C4FF] to-[#00B894]" }
  ];

  const serviceCategories = {
    "AI & Advanced Solutions": {
      services: ["AI Solutions", "Data Analytics", "Blockchain Solutions"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    "Development Services": {
      services: ["Custom Software Development", "Web Development", "Mobile App Development", "E-commerce Solutions"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    "Infrastructure & Operations": {
      services: ["Cloud Solutions", "DevOps", "System Integration", "Legacy System Modernization"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    "Security & Quality": {
      services: ["Cybersecurity", "Quality Assurance & Testing"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    "Strategy & Transformation": {
      services: ["Digital Transformation", "Consulting & Strategy"],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    "Managed Services & Support": {
      services: [
        "24/7 Monitoring & Support",
        "SLA-Backed Maintenance",
        "Incident & Problem Management"
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 13V7a6 6 0 10-12 0v6m1 4h10a2 2 0 002-2v-2H5v2a2 2 0 002 2zm3 0v1a2 2 0 004 0v-1"
          />
        </svg>
      )
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
      const handleChange = (e) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (!prefersReducedMotion) {
              coreValues.forEach((item, index) => {
                setTimeout(() => {
                  setAnimatedValues((prev) => ({
                    ...prev,
                    [item.label]: item.value
                  }));
                }, index * 200);
              });
            } else {
              setAnimatedValues(
                coreValues.reduce((acc, item) => {
                  acc[item.label] = item.value;
                  return acc;
                }, {})
              );
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [prefersReducedMotion]);

  const animationStyles = `
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fade-in-left {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes fade-in-right {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes scale-in {
      from {
        opacity: 0;
        transform: scaleX(0);
      }
      to {
        opacity: 1;
        transform: scaleX(1);
      }
    }
    
    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
    
    @keyframes pulse-slow {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.9;
        transform: scale(1.02);
      }
    }
    
    @keyframes glow-pulse {
      0%, 100% {
        opacity: 0.3;
      }
      50% {
        opacity: 0.6;
      }
    }
    
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
    }
    
    .animate-fade-in-left {
      animation: fade-in-left 0.8s ease-out forwards;
    }
    
    .animate-fade-in-right {
      animation: fade-in-right 0.8s ease-out forwards;
    }
    
    .animate-scale-in {
      animation: scale-in 0.6s ease-out forwards;
    }
    
    .animate-shimmer {
      animation: shimmer 2s infinite;
    }
    
    .animate-pulse-slow {
      animation: pulse-slow 3s ease-in-out infinite;
    }
    
    .animate-glow-pulse {
      animation: glow-pulse 3s ease-in-out infinite;
    }
  `;

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B0A1C] py-16 lg:py-24"
      aria-label="CEO Message Section"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00B894]/5 to-[#00C4FF]/5" aria-hidden="true"></div>
      <div 
        className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full filter blur-3xl opacity-10 ${!prefersReducedMotion ? 'animate-pulse' : ''}`}
        style={{ animationDuration: '4s' }}
        aria-hidden="true"
      ></div>
      <div 
        className={`absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-[#00C4FF] to-[#00B894] rounded-full filter blur-3xl opacity-10 ${!prefersReducedMotion ? 'animate-pulse' : ''}`}
        style={{ animationDuration: '5s', animationDelay: '1s' }}
        aria-hidden="true"
      ></div>
      
      {/* Floating particles */}
      {!prefersReducedMotion && (
        <>
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#00B894] rounded-full opacity-60 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-[#00C4FF] rounded-full opacity-60 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#00B894] rounded-full opacity-60 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '2s' }}></div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Header with Enhanced Typography */}
        <div 
          className={`text-center mb-12 lg:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
            <span className="text-white ">A Message from</span>
            <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent ">
            {" "} Our CEO
            </span>
          </h1>
          <div 
            className={`w-32 h-1 bg-gradient-to-r from-[#00B894] to-[#00C4FF] mx-auto rounded-full shadow-lg shadow-[#00B894]/30 ${isVisible && !prefersReducedMotion ? 'animate-scale-in' : ''}`}
            style={{ animationDelay: '0.3s' }}
          ></div>
        </div>

        {/* Main Content Grid - Premium Spacing */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12 items-stretch">
          {/* Left: CEO Profile Card with Glow */}
          <div 
            className={`lg:col-span-1 flex ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="bg-[#1A1A2E]/95 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10 shadow-2xl hover:border-[#00B894]/50 hover:shadow-[0_0_40px_rgba(0,184,148,0.2)] transition-all duration-500 group relative overflow-hidden w-full flex flex-col">
              {/* Premium Gradient Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00B894]/20 to-[#00C4FF]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B894]/0 to-[#00C4FF]/0 group-hover:from-[#00B894]/10 group-hover:to-[#00C4FF]/10 transition-all duration-500 rounded-3xl"></div>
              
              {/* CEO Image with Premium Glow Border */}
              <div className="text-center mb-6 relative z-10">
                <div className="relative inline-block">
                  {/* Outer Glow Ring */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#00B894] via-[#00C4FF] to-[#00B894] rounded-full opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500 animate-glow-pulse"></div>
                  
                  <div className="relative w-44 h-44 lg:w-48 lg:h-48 mx-auto bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full p-1.5 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full bg-[#0B0A1C] rounded-full overflow-hidden ring-2 ring-[#00B894]/30">
                      <Image
                        src="https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948234/majid-ali-ceo-syncops_c6y6ay.jpg"
                        alt="Majid Ali - CEO of SyncOps"
                        width={192}
                        height={192}
                        priority
                        className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  <div 
                    className={`absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full border-3 border-[#0B0A1C] shadow-lg ${!prefersReducedMotion ? 'animate-pulse' : ''}`}
                    style={{ animationDuration: '2s' }}
                  ></div>
                </div>
              </div>
              
              {/* Premium Typography Hierarchy */}
              <div className="text-center relative z-10 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-[#00B894] transition-colors duration-300 tracking-tight leading-tight">
                      Majid Ali
                    </h2>
                    <p className="text-[#00B894] font-semibold text-base lg:text-lg mb-4 tracking-wide">
                      Founder & CEO, SyncOps
                    </p>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed px-3 tracking-normal" style={{ letterSpacing: '0.01em', lineHeight: '1.7' }}>
                    Driving innovation through cutting-edge technology solutions that transform businesses and accelerate digital growth.
                  </p>
                </div>
                
                {/* Premium Badge Section */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-6 mt-4">
                  <div className="px-4 py-2 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full border border-[#00B894]/30 backdrop-blur-sm">
                    <span className="text-xs font-semibold text-[#00B894] tracking-wide">Vision & Leadership</span>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-[#00C4FF]/10 to-[#00B894]/10 rounded-full border border-[#00C4FF]/30 backdrop-blur-sm">
                    <span className="text-xs font-semibold text-[#00C4FF] tracking-wide">Founder & Visionary</span>
                  </div>
                </div>
                
                {/* Social Links with Premium Hover */}
                <nav className="flex items-center justify-center gap-3 pt-6 mt-auto" aria-label="CEO Social Media Links">
                  <a
                    href="https://www.linkedin.com/in/majidali-syncops/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with Majid Ali on LinkedIn"
                    className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:bg-[#0077B5] hover:text-white hover:scale-110 hover:rotate-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#0077B5]/50 border border-white/5 hover:border-[#0077B5]/50"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://majidali.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Majid Ali's portfolio website"
                    className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:bg-[#00C4FF] hover:text-white hover:scale-110 hover:-rotate-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#00C4FF]/50 border border-white/5 hover:border-[#00C4FF]/50"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3a9 9 0 100 18 9 9 0 000-18z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12h18M12 3c2.5 2.5 3.75 5.5 3.75 9S14.5 17.5 12 21m0-18C9.5 5.5 8.25 8.5 8.25 12S9.5 17.5 12 21"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/MajidAli36"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Majid Ali's GitHub"
                    className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:bg-[#333] hover:text-white hover:scale-110 hover:rotate-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#333]/50 border border-white/5 hover:border-[#333]/50"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>

          {/* Center: Core Message with Premium Styling */}
          <div 
            className={`lg:col-span-1 flex ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="bg-[#1A1A2E]/95 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10 shadow-2xl w-full flex flex-col hover:border-[#00C4FF]/50 hover:shadow-[0_0_40px_rgba(0,196,255,0.2)] transition-all duration-500 group relative overflow-hidden">
              {/* Premium Gradient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00C4FF]/20 to-[#00B894]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#00C4FF]/0 to-[#00B894]/0 group-hover:from-[#00C4FF]/10 group-hover:to-[#00B894]/10 transition-all duration-500 rounded-3xl"></div>
              
              <div className="flex-1 flex flex-col justify-between relative z-10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00C4FF] transition-colors duration-300 tracking-tight leading-tight">
                      Welcome to SyncOps
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed tracking-normal" style={{ letterSpacing: '0.01em', lineHeight: '1.75' }}>
                      We're passionate about building technology that <span className="text-[#00B894] font-bold">inspires trust</span>, 
                      drives <span className="text-[#00C4FF] font-bold">innovation</span>, and delivers real value.
                    </p>
                  </div>
                  
                  {/* Premium Mission Quote Box with Glow */}
                  <div className="relative bg-gradient-to-r from-[#00B894]/15 to-[#00C4FF]/15 rounded-2xl p-6 border-l-4 border-[#00B894] group-hover:border-[#00C4FF] group-hover:from-[#00B894]/25 group-hover:to-[#00C4FF]/25 transition-all duration-300 shadow-lg shadow-[#00B894]/10">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00B894]/20 to-[#00C4FF]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    <blockquote className="text-sm font-bold text-white italic leading-relaxed relative z-10" style={{ letterSpacing: '0.01em', lineHeight: '1.8' }}>
                      "Our mission is to lead with innovation, integrity, and a relentless focus on delivering solutions that shape the future of business."
                    </blockquote>
                  </div>

                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed tracking-normal" style={{ letterSpacing: '0.01em', lineHeight: '1.75' }}>
                      SyncOps was founded with a vision to <span className="text-[#00B894] font-bold">empower organizations</span> through digital transformation. 
                      Our commitment includes unwavering dedication to excellence, relentless focus on client success, and continuous growth.
                    </p>
                  </div>
                </div>

                {/* Premium Signature */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="text-2xl font-bold text-white mb-2 group-hover:text-[#00C4FF] transition-colors duration-300 tracking-tight" style={{ fontFamily: 'cursive' }}>
                    Majid Ali
                  </div>
                  <div className="text-xs text-gray-400 tracking-wide">Founder & CEO, SyncOps</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Core Values with Premium Gradient Background */}
          <div 
            className={`lg:col-span-1 flex ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.6s' }}
          >
            <div className="bg-gradient-to-br from-[#1A1A2E]/95 via-[#1A1A2E]/90 to-[#1A1A2E]/95 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10 shadow-2xl w-full flex flex-col hover:border-[#00B894]/50 hover:shadow-[0_0_40px_rgba(0,184,148,0.2)] transition-all duration-500 group relative overflow-hidden">
              {/* Premium Gradient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00B894]/20 to-[#00C4FF]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5 rounded-3xl opacity-50"></div>
              
              <div className="relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-[#00B894] transition-colors duration-300 tracking-tight">
                    Our Core Values
                  </h3>
                  
                  {/* Premium Stats Banner */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-[#00B894] mb-1">50+</div>
                      <div className="text-xs text-gray-400 tracking-wide">Projects Delivered</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-[#00C4FF] mb-1">98%</div>
                      <div className="text-xs text-gray-400 tracking-wide">Client Satisfaction</div>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    {coreValues.map((item, index) => {
                      const currentValue = animatedValues[item.label] || 0;
                      return (
                        <div key={index} className="space-y-3">
                          <div className="flex justify-between items-baseline">
                            <span className="text-sm font-semibold text-gray-200 tracking-wide">{item.label}</span>
                            <span 
                              className={`text-base font-bold text-[#00B894] transition-all duration-500 tabular-nums ${isVisible ? 'scale-110' : ''}`}
                            >
                              {currentValue}%
                            </span>
                          </div>
                          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden relative shadow-inner">
                            <div 
                              className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden shadow-lg`}
                              style={{ width: `${currentValue}%` }}
                            >
                              {/* Premium Shimmer Effect */}
                              {!prefersReducedMotion && currentValue > 0 && (
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Premium CTA Button */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <SafeLink href="/about#team">
                    <button className="w-full bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-semibold px-6 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#00B894]/50 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 group/btn relative overflow-hidden border border-transparent hover:border-white/20">
                      <span className="relative z-10 flex items-center gap-2 tracking-wide">
                        <svg className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.28c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
                        </svg>
                        Meet Our Team
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00C4FF] to-[#00B894] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </SafeLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Services Section - Redesigned */}
        <div 
          className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.8s' }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Our Core Services
            </h3>
            <p className="text-gray-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business and drive digital excellence
            </p>
          </div>

          {/* Premium Service Cards Grid - Modern Layout */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Object.entries(serviceCategories).map(([category, data], index) => (
              <div 
                key={category}
                className={`group relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.9 + index * 0.1}s` }}
              >
                {/* Premium Card with Enhanced Styling */}
                <div className="bg-[#1A1A2E]/95 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:border-[#00B894]/50 hover:shadow-[0_0_40px_rgba(0,184,148,0.25)] transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                  {/* Premium Gradient Glow on Hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00B894]/20 to-[#00C4FF]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  {/* Background Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Icon Section */}
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 flex items-center justify-center text-[#00B894] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-[#00B894]/30 shadow-lg shadow-[#00B894]/20 mb-4">
                        <div className="w-10 h-10">
                          {data.icon}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-white group-hover:text-[#00B894] transition-colors duration-300 tracking-tight leading-tight">
                        {category}
                      </h4>
                    </div>
                    
                    {/* Services List */}
                    <div className="flex-1 space-y-3">
                      {data.services.map((service, serviceIndex) => (
                        <div 
                          key={service} 
                          className="flex items-center gap-3 group/item"
                          style={{ transitionDelay: `${serviceIndex * 50}ms` }}
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 flex items-center justify-center border border-[#00B894]/30 group-hover/item:scale-110 transition-transform duration-300">
                            <svg className="w-3 h-3 text-[#00B894]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors duration-300 tracking-wide leading-relaxed">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Decorative Bottom Accent */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-[#00B894] transition-colors duration-300">
                        <span className="font-semibold">{data.services.length} Services</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Premium CTA Section */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-2xl border border-[#00B894]/30 backdrop-blur-sm">
              <svg className="w-5 h-5 text-[#00B894]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-semibold text-white tracking-wide">
                Ready to transform your business? Let's discuss your project
              </span>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
    </section>
  );
};

export default CEOMessage;
