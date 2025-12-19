"use client";
import React from "react";
import SafeLink from "../../components/ui/SafeLink";

const GlobalEngagementCTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Main CTA Section */}
      <div className="bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-3xl p-12 lg:p-16 shadow-2xl relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00B894]/20 to-[#00C4FF]/20 opacity-50"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
        
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">Ready to Get Started?</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Start Your Global Engagement with SyncOps
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-10">
            Join the growing list of global businesses that trust SyncOps for their software development needs. Let's discuss how we can help you achieve your goals with world-class solutions, security, and support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <SafeLink href="/contact">
              <button className="group w-full sm:w-auto bg-white text-[#00B894] font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                  </svg>
                  Schedule a Consultation
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00B894] to-[#00C4FF] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </SafeLink>
            
            <SafeLink href="/case-studies">
              <button className="group w-full sm:w-auto border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#00B894] transition-all duration-300">
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                  View Case Studies
                </span>
              </button>
            </SafeLink>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <p className="text-sm text-white/80">Global Projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">7+</div>
              <p className="text-sm text-white/80">Regions Served</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <p className="text-sm text-white/80">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <p className="text-sm text-white/80">Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#00B894]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Free Consultation</h3>
          <p className="text-gray-600">Schedule a free consultation to discuss your project requirements and how we can help.</p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#00C4FF]/20 to-[#00B894]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#00C4FF]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">NDA Protection</h3>
          <p className="text-gray-600">We sign comprehensive NDAs before any project discussion to protect your ideas and information.</p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#00B894]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Flexible Engagement</h3>
          <p className="text-gray-600">Choose from dedicated teams, project-based, or time & materials engagement models.</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalEngagementCTA;

