"use client";
import React, { useState, useEffect } from "react";

const QuoteHighlight = () => {
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

  return (
    <section 
      className="py-20 bg-gradient-to-br from-[#FAFAFF] to-white relative overflow-hidden"
      aria-label="Mission Statement Quote"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00B894]/3 to-[#00C4FF]/3" aria-hidden="true"></div>
      <div 
        className={`absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full filter blur-2xl opacity-20 ${prefersReducedMotion ? '' : 'animate-pulse'}`}
        aria-hidden="true"
      ></div>
      <div 
        className={`absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-[#00C4FF] to-[#00B894] rounded-full filter blur-2xl opacity-20 ${prefersReducedMotion ? '' : 'animate-pulse'}`}
        aria-hidden="true"
      ></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Quote Block */}
        <div className="relative">
          {/* Main Quote Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 lg:p-16 border border-white/20 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5"></div>
            
            {/* Glowing border effect */}
            <div 
              className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00B894] to-[#00C4FF] opacity-10 ${prefersReducedMotion ? 'blur-lg' : 'blur-xl'}`}
              aria-hidden="true"
            ></div>
            
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-[#00B894]/20" aria-hidden="true">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>
            
            <div className="relative z-10 text-center">
              {/* Quote Text */}
              <blockquote className="text-2xl lg:text-4xl font-bold text-[#1a1a1a] leading-tight mb-8 italic">
                "Our mission is to <span className="text-[#006B6B] font-bold">lead with innovation</span>, integrity, and a relentless focus on delivering solutions that shape the future of business."
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full flex items-center justify-center" aria-hidden="true">
                  <span className="text-white font-bold text-lg">MA</span>
                </div>
                <div className="text-left">
                  <div className="text-lg font-semibold text-[#1a1a1a]">Majid Ali</div>
                  <div className="text-[#006B6B] font-medium">Founder & CEO, SyncOps</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div 
            className={`absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full shadow-[0_0_10px_rgba(0,184,148,0.3)] ${prefersReducedMotion ? '' : 'animate-bounce'}`}
            aria-hidden="true"
          ></div>
          <div 
            className={`absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-[#00C4FF] to-[#00B894] rounded-full shadow-[0_0_8px_rgba(0,196,255,0.3)] ${prefersReducedMotion ? '' : 'animate-pulse'}`}
            aria-hidden="true"
          ></div>
          <div 
            className={`absolute top-1/2 -left-6 transform -translate-y-1/2 w-4 h-4 bg-[#00B894] rounded-full shadow-[0_0_6px_rgba(0,184,148,0.4)] ${prefersReducedMotion ? '' : 'animate-pulse'}`}
            aria-hidden="true"
          ></div>
          <div 
            className={`absolute top-1/2 -right-6 transform -translate-y-1/2 w-3 h-3 bg-[#00C4FF] rounded-full shadow-[0_0_5px_rgba(0,196,255,0.4)] ${prefersReducedMotion ? '' : 'animate-pulse'}`}
            aria-hidden="true"
          ></div>
        </div>
        
          {/* Additional Context */}
          <div className="mt-16 text-center">
            <p className="text-lg text-[#2d3748] max-w-[70ch] mx-auto leading-relaxed">
              This vision drives every decision we make, every solution we build, and every relationship we foster. 
              We believe that technology should empower, not complicate — and that's exactly what we deliver.
            </p>
          </div>
      </div>
    </section>
  );
};

export default QuoteHighlight; 