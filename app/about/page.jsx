import React from "react";
import AboutHero from "./_components/AboutHero";
import MissionVision from "./_components/MissionVision";
import WhatWeStandFor from "./_components/WhatWeStandFor";
import LeadershipTeam from "./_components/LeadershipTeam";
import WhatDrivesUs from "./_components/WhatDrivesUs";
import HowWeWork from "./_components/HowWeWork";

export const metadata = {
  title: "About SyncOps - Empowering the Future with Purpose-Driven Innovation",
  description: "Discover SyncOps' mission to transform businesses through technology, people, and purpose. Meet our team of innovators including CEO Majid Ali, CTO Rimsha Imran, and learn about our values, culture, and 50+ successful projects.",
  keywords: [
    "about SyncOps",
    "SyncOps team",
    "Majid Ali CEO",
    "Rimsha Imran CTO",
    "software development company",
    "AI company Pakistan",
    "mission vision",
    "team values",
    "innovation technology",
    "leadership team",
    "company culture"
  ],
  authors: [{ name: "SyncOps Team" }],
  creator: "SyncOps Technologies",
  publisher: "SyncOps Technologies",
  metadataBase: new URL("https://syncops.tech"),
  alternates: {
    canonical: "https://syncops.tech/about",
  },
  openGraph: {
    title: "About SyncOps - Empowering the Future with Purpose-Driven Innovation",
    description: "Discover SyncOps' mission to transform businesses through technology, people, and purpose. Meet our leadership team and learn about our values.",
    type: "website",
    url: "https://syncops.tech/about",
    siteName: "SyncOps",
    locale: "en_US",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "About SyncOps - Leadership Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About SyncOps - Empowering the Future with Purpose-Driven Innovation",
    description: "Discover SyncOps' mission to transform businesses through technology, people, and purpose.",
    images: ["/images/logo.png"],
    creator: "@SyncOps",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const AboutPage = () => {
  // Generate breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://syncops.tech"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://syncops.tech/about"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen">
      {/* 1. Hero Section - Dark */}
      <section data-gsap-section className="bg-[#0B0A1C] text-white" id="about-hero">
        <div data-gsap-stagger>
          <AboutHero />
        </div>
      </section>
      
      {/* 2. Mission & Vision - Light */}
      <section data-gsap-section className="bg-gradient-to-br from-[#FAFAFF] to-white py-20" id="mission-vision">
        <div data-gsap-stagger>
          <MissionVision />
        </div>
      </section>
      
      {/* 3. What We Stand For - Light */}
      <section data-gsap-section className="bg-gradient-to-br from-white to-[#FAFAFF] py-20" id="what-we-stand-for">
        <div data-gsap-stagger>
          <WhatWeStandFor />
        </div>
      </section>
      
      {/* 4. Leadership Team - Dark */}
      <section data-gsap-section className="bg-[#0B0A1C] text-white py-20" id="leadership-team">
        <div data-gsap-stagger>
          <LeadershipTeam />
        </div>
      </section>
      
     
      <section data-gsap-section className="bg-gradient-to-br from-[#FAFAFF] to-white py-20" id="trusted-metrics">
        <div data-gsap-stagger>
          <HowWeWork />
        </div>
      </section>
      
      {/* 6. What Drives Us - Light */}
      <section data-gsap-section className="bg-gradient-to-br from-white to-[#FAFAFF] py-20" id="what-drives-us">
        <div data-gsap-stagger>
          <WhatDrivesUs />
        </div>
      </section>
      
    </main>
    </>
  );
};

export default AboutPage;
