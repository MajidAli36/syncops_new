"use client";
import React, { useState, useEffect, useRef } from "react";

const QuoteHighlight = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef(null);

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
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-12px) rotate(2deg);
      }
    }
    
    @keyframes gradient-shift {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }
    
    @keyframes spin-slow {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    
    @keyframes pulse-glow {
      0%, 100% {
        opacity: 0.3;
        transform: scale(1);
      }
      50% {
        opacity: 0.6;
        transform: scale(1.05);
      }
    }
    
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
    }
    
    .animate-float {
      animation: float 4s ease-in-out infinite;
    }
    
    .animate-gradient-shift {
      background-size: 200% 200%;
      animation: gradient-shift 3s ease infinite;
    }
    
    .animate-spin-slow {
      animation: spin-slow 3s linear infinite;
    }
    
    .animate-pulse-glow {
      animation: pulse-glow 3s ease-in-out infinite;
    }
  `;

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
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-br from-[#0B0A1C] via-[#1A1A2E] to-[#0B0A1C] relative overflow-hidden"
      aria-label="Vision Statement"
    >
      {/* Premium Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00B894]/5 to-[#00C4FF]/5" aria-hidden="true"></div>
      <div 
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full filter blur-3xl opacity-15 ${!prefersReducedMotion ? 'animate-pulse' : ''}`}
        style={{ animationDuration: '4s' }}
        aria-hidden="true"
      ></div>
      
      {/* Floating orbs with premium styling */}
      {!prefersReducedMotion && (
        <>
          <div className="absolute top-20 left-20 w-3 h-3 bg-[#00B894] rounded-full opacity-40 animate-bounce shadow-lg shadow-[#00B894]/50" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-[#00C4FF] rounded-full opacity-40 animate-bounce shadow-lg shadow-[#00C4FF]/50" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        </>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Quote Card with Enhanced Glow */}
        <div 
          className={`bg-[#1A1A2E]/95 backdrop-blur-xl rounded-3xl p-10 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden group hover:border-[#00B894]/50 hover:shadow-[0_0_60px_rgba(0,184,148,0.3)] transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          {/* Premium Gradient Glow Behind Quote */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#00B894]/30 to-[#00C4FF]/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5 rounded-3xl"></div>
          
          {/* Premium Floating Quote Icon */}
          <div 
            className={`absolute top-8 right-8 text-[#00B894]/15 group-hover:text-[#00B894]/25 transition-all duration-500 ${!prefersReducedMotion && isVisible ? 'animate-float' : ''}`}
            aria-hidden="true"
          >
            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
            </svg>
            {/* Pulsing glow around icon */}
            {!prefersReducedMotion && (
              <div className="absolute inset-0 bg-[#00B894] rounded-full blur-xl opacity-20 animate-pulse-glow"></div>
            )}
          </div>
          
          <div className="relative z-10">
            {/* Premium Quote Text with Enhanced Typography */}
            <blockquote 
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-8 text-center tracking-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s', letterSpacing: '-0.02em', lineHeight: '1.3' }}
            >
              "Our mission is to{" "}
              <span 
                className={`bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent inline-block font-extrabold ${isVisible && !prefersReducedMotion ? 'animate-gradient-shift' : ''}`}
                style={{ letterSpacing: '-0.01em' }}
              >
                lead with innovation
              </span>
              , integrity, and a relentless focus on delivering solutions that shape the future of business."
            </blockquote>
            
            {/* Premium Author Section */}
            <div 
              className={`flex items-center justify-center gap-5 pt-8 border-t border-white/10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.4s' }}
            >
              <div 
                className={`w-14 h-14 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 relative ${!prefersReducedMotion ? 'group-hover:animate-spin-slow' : ''}`}
              >
                {/* Glow ring around avatar */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full blur opacity-50"></div>
                <span className="text-white font-bold text-base relative z-10 tracking-tight">MA</span>
              </div>
              <div className="text-left">
                <div className="text-xl font-bold text-white group-hover:text-[#00B894] transition-colors duration-300 tracking-tight">
                  Majid Ali
                </div>
                <div className="text-[#00B894] font-semibold text-sm tracking-wide">
                  Founder & CEO, SyncOps
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Premium Vision Statement */}
        <div 
          className={`mt-12 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.6s' }}
        >
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-base lg:text-lg" style={{ letterSpacing: '0.01em', lineHeight: '1.8' }}>
            This vision drives every decision we make, every solution we build, and every relationship we foster. 
            We believe that technology should{" "}
            <span className="text-[#00B894] font-bold relative inline-block">
              <span className="relative z-10">empower, not complicate</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00B894] to-[#00C4FF] opacity-60 rounded-full"></span>
            </span>
            {" "}— and that's exactly what we deliver.
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
    </section>
  );
};

export default QuoteHighlight;
