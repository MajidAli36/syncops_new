"use client";
import React from "react";
import SafeLink from "../../components/ui/SafeLink";
import { Star } from 'lucide-react';

const TalentPool = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      {/* Section Header */}
      <div className="mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1F3A56] mb-6">
          Didn't Find Your Perfect Fit?
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          We're always looking for exceptional talent. Join our talent pool and be the first to know about new opportunities.
        </p>
      </div>

      {/* Central Card */}
      <div className="relative">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-3xl blur-3xl"></div>
        
        {/* Main Card */}
        <div className="relative bg-white rounded-3xl p-12 lg:p-16 shadow-2xl border border-gray-100 max-w-2xl mx-auto">
          {/* Central Star Icon */}
          <div className="mb-8">
            <div className="relative inline-block">
                <div className="w-24 h-24 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-full flex items-center justify-center shadow-lg mx-auto mb-6">
                <Star className="w-12 h-12 text-white" aria-hidden="true" />
              </div>
              {/* Glowing ring effect */}
              <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full opacity-30 animate-pulse blur-sm"></div>
            </div>
          </div>

          {/* Content */}
          <h3 className="text-3xl font-bold text-[#1F3A56] mb-4">
            Join Our Talent Pool
          </h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Stay connected with SyncOps and be notified when positions that match your skills and interests become available.
          </p>

          {/* Benefits List */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-sm text-gray-600 text-center">
              <div className="w-2 h-2 bg-[#00B894] rounded-full flex-shrink-0"></div>
              <span>Early access to new roles</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 text-center">
              <div className="w-2 h-2 bg-[#00C4FF] rounded-full flex-shrink-0"></div>
              <span>Personalized job alerts</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 text-center">
              <div className="w-2 h-2 bg-[#00B894] rounded-full flex-shrink-0"></div>
              <span>Direct team contact</span>
            </div>
          </div>

          {/* CTA Button */}
          <SafeLink href="/contact">
            <button className="group border-2 border-[#00B894] text-[#00B894] font-semibold px-8 py-4 rounded-lg hover:bg-[#00B894] hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,184,148,0.4)]">
              <span className="flex items-center gap-2">
                <Star className="w-5 h-5" aria-hidden="true" />
                Join Our Talent Pool
              </span>
            </button>
          </SafeLink>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-6 -left-6 w-4 h-4 bg-[#00B894] rounded-full animate-pulse opacity-60"></div>
        <div className="absolute -bottom-6 -right-6 w-6 h-6 bg-[#00C4FF] rounded-full animate-bounce opacity-50"></div>
        <div className="absolute top-1/2 -left-8 w-3 h-3 bg-[#00B894] rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/2 -right-8 w-4 h-4 bg-[#00C4FF] rounded-full animate-bounce delay-500"></div>
      </div>
    </div>
  );
};

export default TalentPool; 