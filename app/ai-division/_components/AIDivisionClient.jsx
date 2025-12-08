"use client";
import { ParallaxProvider } from 'react-scroll-parallax';
import AIHero from './AIHero';
import AIOfferings from './AIOfferings';
import AITechnologies from './AITechnologies';
import AICapabilities from './AICapabilities';
import AICaseStudies from './AICaseStudies';
import AIProcess from './AIProcess';
import AICTA from './AICTA';

export default function AIDivisionClient() {
  return (
    <ParallaxProvider>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section data-gsap-section className="bg-brand-navy text-white">
          <div data-gsap-stagger>
            <AIHero />
          </div>
        </section>

        {/* AI Offerings Section */}
        <section data-gsap-section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12 md:py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-aqua/20 to-transparent"></div>
          <div data-gsap-stagger>
            <AIOfferings />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent"></div>
        </section>

        {/* AI Capabilities Section */}
        <section data-gsap-section className="bg-brand-navy text-white py-12 md:py-20">
          <div data-gsap-stagger>
            <AICapabilities />
          </div>
        </section>

        {/* AI Technologies Section */}
        <section data-gsap-section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12 md:py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-aqua/20 to-transparent"></div>
          <div data-gsap-stagger>
            <AITechnologies />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent"></div>
        </section>

        {/* AI Process Section */}
        <section data-gsap-section className="bg-brand-navy text-white py-12 md:py-20">
          <div data-gsap-stagger>
            <AIProcess />
          </div>
        </section>

        {/* AI Case Studies Section */}
        <section data-gsap-section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 md:py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent"></div>
          <div data-gsap-stagger>
            <AICaseStudies />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-aqua/20 to-transparent"></div>
        </section>

        {/* Final CTA Section */}
        <section data-gsap-section className="bg-gradient-to-br from-brand-navy via-gray-900 to-brand-navy py-12 md:py-20">
          <div data-gsap-stagger>
            <AICTA />
          </div>
        </section>
      </main>
    </ParallaxProvider>
  );
}


