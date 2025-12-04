"use client";
import React from "react";
import { AlertTriangle, Clock, TrendingDown, Users, Shield } from "lucide-react";
import { StaggerWrapper } from "../../components/InViewWrapper";

const ChallengeSection = ({ challenges }) => {
  const iconMap = {
    AlertTriangle: AlertTriangle,
    Clock: Clock,
    TrendingDown: TrendingDown,
    Users: Users,
    Shield: Shield,
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50" aria-labelledby="challenges-heading">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 id="challenges-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-3 sm:mb-4">
            Challenges
          </h2>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-brand mx-auto rounded-full"></div>
        </div>
        
        <StaggerWrapper className="max-w-5xl mx-auto space-y-4 sm:space-y-6" stagger={0.15}>
          {challenges.map((challenge, index) => {
            const IconComponent = iconMap[challenge.icon] || AlertTriangle;
            return (
              <article
                key={index}
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg border-l-4 border-brand-teal hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
                itemScope
                itemType="https://schema.org/Thing"
              >
                <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                  <div className="bg-gradient-brand rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg" aria-hidden="true">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-navy mb-2 sm:mb-3 group-hover:text-brand-teal transition-colors" itemProp="name">
                      {challenge.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed" itemProp="description">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </StaggerWrapper>
      </div>
    </section>
  );
};

export default ChallengeSection;
