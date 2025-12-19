"use client";
import React from "react";
import { motion } from "framer-motion";
import SafeLink from "../../components/ui/SafeLink";

const GlobalClientsHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0A1C] py-8 lg:py-12">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 opacity-30"></div>
      <div className="absolute top-10 left-5 sm:top-16 sm:left-10 md:top-20 md:left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-5 sm:bottom-16 sm:right-10 md:bottom-20 md:right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#00C4FF] to-[#00B894] rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-1">
            <motion.h1 className="text-4xl lg:text-6xl font-bold leading-snug mb-4">
              <span className="text-white bg-clip-text text-transparent">
                SyncOps Global Clients{" "}
              </span>
              <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">
                & Delivery Model
              </span>
            </motion.h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
              Trusted by global businesses across 7+ regions. World-class security, GDPR compliance, and seamless communication—all from our Pakistan-based delivery center.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0">
              <SafeLink href="#regions-served">
                <button className="group w-full sm:w-auto bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden text-sm sm:text-base">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Explore Regions
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00C4FF] to-[#00B894] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </SafeLink>
              
              <SafeLink href="#global-engagement-cta">
                <button className="group w-full sm:w-auto border-2 border-[#00B894] text-[#00B894] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#00B894] hover:text-white transition-all duration-300 relative overflow-hidden text-sm sm:text-base">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                    </svg>
                    Start Engagement
                  </span>
                </button>
              </SafeLink>
            </div>
          </div>
          
          {/* Right Side - Global Map Visualization */}
          <div className="relative order-2">
            <div className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-2xl max-h-[400px] sm:max-h-[450px] md:max-h-[500px] w-full">
              {/* Global Regions Grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {/* USA */}
                <div className="group bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-[#00B894]/30 hover:border-[#00B894]/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">USA</h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs">North America</p>
                </div>

                {/* UK */}
                <div className="group bg-gradient-to-br from-[#00C4FF]/20 to-[#00B894]/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-[#00C4FF]/30 hover:border-[#00C4FF]/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#00C4FF] to-[#00B894] rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">UK</h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs">Europe</p>
                </div>

                {/* EU */}
                <div className="group bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-[#00B894]/30 hover:border-[#00B894]/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">EU</h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs">Europe</p>
                </div>

                {/* Canada */}
                <div className="group bg-gradient-to-br from-[#00C4FF]/20 to-[#00B894]/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-[#00C4FF]/30 hover:border-[#00C4FF]/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#00C4FF] to-[#00B894] rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">Canada</h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs">North America</p>
                </div>

                {/* Australia */}
                <div className="group bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-[#00B894]/30 hover:border-[#00B894]/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">Australia</h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs">Asia Pacific</p>
                </div>

                {/* Singapore */}
                <div className="group bg-gradient-to-br from-[#00C4FF]/20 to-[#00B894]/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-[#00C4FF]/30 hover:border-[#00C4FF]/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#00C4FF] to-[#00B894] rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">Singapore</h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs">Asia Pacific</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-[#00C4FF] to-[#00B894] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalClientsHero;

