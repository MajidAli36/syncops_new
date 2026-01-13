 "use client";
import { ParallaxProvider } from 'react-scroll-parallax';
import { useEffect } from 'react';
import ClientFloatingCTA from './components/ClientFloatingCTA';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import Services from './components/Services';
import IndustriesWeServe from './components/IndustriesWeServe';
import WhyChooseUs from './components/WhyChooseUs';
import TrackRecord from './components/TrackRecord';
import Testimonial from './components/Testimonial';
import LeadershipSection from './components/LeadershipSection';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import CaseStudies from './components/CaseStudies';
import MobileStickyCTA from './components/MobileStickyCTA';
import ScrollToTop from './components/ScrollToTop';
import TechnologyStackCards from './components/TechnologyStackCards';
import PartnerLogos from './components/PartnerLogos';

// Homepage structured data for SEO
const homepageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SyncOps",
  "alternateName": "SyncOps Technologies",
  "url": "https://syncops.tech",
  "description": "Enterprise-grade AI-powered software solutions, development, and consulting. 50+ launches, 99.5% uptime.",
  "publisher": {
    "@type": "Organization",
    "name": "SyncOps",
    "url": "https://syncops.tech",
    "logo": {
      "@type": "ImageObject",
      "url": "https://syncops.tech/images/logo.png"
    },
    "founder": {
      "@type": "Person",
      "name": "Majid Ali",
      "jobTitle": "Chief Executive Officer",
      "url": "https://majidali.tech",
      "sameAs": [
        "https://www.linkedin.com/in/majidali-syncops/",
        "https://majidali.tech"
      ]
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Majid Ali",
        "jobTitle": "Chief Executive Officer",
        "url": "https://majidali.tech",
        "sameAs": [
          "https://www.linkedin.com/in/majidali-syncops/",
          "https://majidali.tech"
        ]
      },
      {
        "@type": "Person",
        "name": "Rimsha Imran",
        "jobTitle": "Chief Technology Officer",
        "url": "https://www.rimshaimran.tech/",
        "sameAs": [
          "https://www.linkedin.com/in/rimshaimran-syncops/",
          "https://www.rimshaimran.tech/"
        ]
      },
      {
        "@type": "Person",
        "name": "Nida Naeem",
        "jobTitle": "Chief Business Development Officer",
        "sameAs": [
          "https://www.linkedin.com/in/nidanaeem-syncops/"
        ]
      }
    ]
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://syncops.tech/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "mainEntity": {
    "@type": "ItemList",
    "name": "SyncOps Projects & Case Studies",
    "description": "Our portfolio of successful AI-powered software solutions and case studies",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "CreativeWork",
          "name": "GeoPulse: Community Data Intelligence Platform",
          "url": "https://syncops.tech/case-studies/geopulse"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "CreativeWork",
          "name": "SyncPeople: AI-Powered HR Management Platform",
          "url": "https://syncops.tech/case-studies/syncpeople"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "CreativeWork",
          "name": "MediMind AI: AI-Powered Medical Assistant",
          "url": "https://syncops.tech/case-studies/medimind"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "CreativeWork",
          "name": "SyncIQ: AI-Powered Operational Intelligence",
          "url": "https://syncops.tech/case-studies/synciq"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "CreativeWork",
          "name": "SmartProperty AI: Real Estate Intelligence Platform",
          "url": "https://syncops.tech/case-studies/smartproperty"
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "CreativeWork",
          "name": "FitResume AI: Intelligent Resume Builder",
          "url": "https://syncops.tech/case-studies/resume-ai"
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "CreativeWork",
          "name": "Warehouse Visualization Dashboard",
          "url": "https://syncops.tech/case-studies/wvd"
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "CreativeWork",
          "name": "StudyMate AI: Homework Help Platform",
          "url": "https://syncops.tech/case-studies/studymoto"
        }
      }
    ]
  },
  "about": {
    "@type": "Organization",
    "name": "SyncOps",
    "url": "https://syncops.tech",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
};

export default function Home() {
  // Inject structured data client-side to avoid hydration issues
  useEffect(() => {
    // Check if script already exists
    if (document.getElementById('homepage-structured-data')) {
      return;
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'homepage-structured-data';
    script.text = JSON.stringify(homepageStructuredData);
    document.head.appendChild(script);
  }, []);

  return (
    <ParallaxProvider>
      <>
        <ClientFloatingCTA />
        <section className="bg-brand-navy text-white" aria-label="Hero section">
          <Hero />
        </section>

        <section data-gsap-section className="bg-white py-8" aria-label="Partner logos">
          <div data-gsap-stagger className="max-w-6xl mx-auto">
            <PartnerLogos />
          </div>
        </section>

        <section data-gsap-section className="bg-white py-8" aria-label="Key metrics">
          <div data-gsap-stagger className="max-w-6xl mx-auto">
            <MetricsBar />
          </div>
        </section>

        <section data-gsap-section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12 relative" aria-label="Company introduction">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-aqua/20 to-transparent"></div>
          <div data-gsap-stagger className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-body-xl text-gray-800 font-semibold leading-relaxed">
              We partner with startups, enterprises, and visionary founders to turn bold ideas into resilient, scalable
              digital products—backed by <a href="/case-studies" className="text-brand-aqua hover:underline focus:outline-none focus:ring-2 focus:ring-brand-aqua focus:ring-offset-2 rounded">50+ launches</a> and <a href="/about" className="text-brand-aqua hover:underline focus:outline-none focus:ring-2 focus:ring-brand-aqua focus:ring-offset-2 rounded">99.5% uptime</a>.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-aqua/5 to-transparent"></div>
        </section>

        <section data-gsap-section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent"></div>
          <div data-gsap-stagger>
            <Services />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-aqua/20 to-transparent"></div>
        </section>

        <section data-gsap-section>
          <div data-gsap-stagger>
            <CaseStudies />
          </div>
        </section>

        <section data-gsap-section className="bg-white py-20">
          <div data-gsap-stagger>
            <IndustriesWeServe />
          </div>
        </section>

        <section data-gsap-section className=" text-white">
          <div data-gsap-stagger>
            <WhyChooseUs />
          </div>
        </section>

        <section data-gsap-section className="bg-white py-20">
          <div data-gsap-stagger>
            <TrackRecord />
          </div>
        </section>

        <section data-gsap-section className=" text-white">
          <div data-gsap-stagger>
            <Testimonial />
          </div>
        </section>

        <section data-gsap-section className="bg-gray-50">
          <div data-gsap-stagger>
            <TechnologyStackCards />
          </div>
        </section>

        <section data-gsap-section>
          <div data-gsap-stagger>
            <LeadershipSection />
          </div>
        </section>

        <section data-gsap-section className="bg-gradient-to-br from-brand-navy via-gray-900 to-brand-navy py-20">
          <div data-gsap-stagger>
            <FAQ />
          </div>
        </section>

        <section data-gsap-section>
          <FinalCTA />
        </section>

        <MobileStickyCTA />
        <ScrollToTop />
      </>
    </ParallaxProvider>
  );
}
