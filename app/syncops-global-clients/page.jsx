import React from "react";
import GlobalClientsHero from "./_components/GlobalClientsHero";
import ServingGlobalClients from "./_components/ServingGlobalClients";
import RegionsServed from "./_components/RegionsServed";
import GlobalTeamsModel from "./_components/GlobalTeamsModel";
import TimezoneCommunication from "./_components/TimezoneCommunication";
import SecurityNDA from "./_components/SecurityNDA";
import ComplianceAwareness from "./_components/ComplianceAwareness";
import CulturalAlignment from "./_components/CulturalAlignment";
import WhyChooseSyncOps from "./_components/WhyChooseSyncOps";
import GlobalEngagementCTA from "./_components/GlobalEngagementCTA";

export const metadata = {
  title: "SyncOps Global Clients & Delivery Model - Trusted Global Software Development Partner",
  description: "Discover how SyncOps serves global clients from Pakistan with world-class security, GDPR compliance, and seamless communication. Trusted by businesses in USA, UK, EU, Canada, Australia, Singapore, and UAE.",
  keywords: [
    "global software development",
    "offshore development Pakistan",
    "global clients Pakistan",
    "GDPR compliant development",
    "international software team",
    "timezone communication",
    "NDA IP protection",
    "global delivery model",
    "offshore development services",
    "international tech partner",
    "USA software development",
    "UK software development",
    "EU software development",
    "Canada software development",
    "Australia software development",
    "Singapore software development",
    "UAE software development"
  ],
  authors: [{ name: "SyncOps Team" }],
  creator: "SyncOps Technologies",
  publisher: "SyncOps Technologies",
  metadataBase: new URL("https://syncops.tech"),
  alternates: {
    canonical: "https://syncops.tech/syncops-global-clients",
  },
  openGraph: {
    title: "SyncOps Global Clients & Delivery Model - Trusted Global Software Development Partner",
    description: "Discover how SyncOps serves global clients from Pakistan with world-class security, GDPR compliance, and seamless communication.",
    type: "website",
    url: "https://syncops.tech/syncops-global-clients",
    siteName: "SyncOps",
    locale: "en_US",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "SyncOps Global Clients & Delivery Model",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SyncOps Global Clients & Delivery Model - Trusted Global Software Development Partner",
    description: "Discover how SyncOps serves global clients from Pakistan with world-class security and seamless communication.",
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

const GlobalClientsPage = () => {
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
        "name": "Global Clients",
        "item": "https://syncops.tech/syncops-global-clients"
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
        <section data-gsap-section className="bg-[#0B0A1C] text-white" id="global-hero">
          <div data-gsap-stagger>
            <GlobalClientsHero />
          </div>
        </section>
        
        {/* 2. Serving Global Clients - Light */}
        <section data-gsap-section className="bg-gradient-to-br from-[#FAFAFF] to-white py-20" id="serving-global">
          <div data-gsap-stagger>
            <ServingGlobalClients />
          </div>
        </section>
        
        {/* 3. Regions Served - Dark */}
        <section data-gsap-section className="bg-[#0B0A1C] text-white py-20" id="regions-served">
          <div data-gsap-stagger>
            <RegionsServed />
          </div>
        </section>
        
        {/* 4. How SyncOps Works with Global Teams - Light */}
        <section data-gsap-section className="bg-gradient-to-br from-white to-[#FAFAFF] py-20" id="global-teams">
          <div data-gsap-stagger>
            <GlobalTeamsModel />
          </div>
        </section>
        
        {/* 5. Timezone & Communication - Dark */}
        <section data-gsap-section className="bg-[#0B0A1C] text-white py-20" id="timezone-communication">
          <div data-gsap-stagger>
            <TimezoneCommunication />
          </div>
        </section>
        
        {/* 6. Security, NDA & IP Protection - Light */}
        <section data-gsap-section className="bg-gradient-to-br from-[#FAFAFF] to-white py-20" id="security-nda">
          <div data-gsap-stagger>
            <SecurityNDA />
          </div>
        </section>
        
        {/* 7. Compliance Awareness - Dark */}
        <section data-gsap-section className="bg-[#0B0A1C] text-white py-20" id="compliance">
          <div data-gsap-stagger>
            <ComplianceAwareness />
          </div>
        </section>
        
        {/* 8. Cultural & Business Alignment - Light */}
        <section data-gsap-section className="bg-gradient-to-br from-white to-[#FAFAFF] py-20" id="cultural-alignment">
          <div data-gsap-stagger>
            <CulturalAlignment />
          </div>
        </section>
        
        {/* 9. Why Global Clients Choose SyncOps - Dark */}
        <section data-gsap-section className="bg-[#0B0A1C] text-white py-20" id="why-choose">
          <div data-gsap-stagger>
            <WhyChooseSyncOps />
          </div>
        </section>
        
        {/* 10. CTA: Start a Global Engagement - Light */}
        <section data-gsap-section className="bg-gradient-to-br from-[#FAFAFF] to-white py-20" id="global-engagement-cta">
          <div data-gsap-stagger>
            <GlobalEngagementCTA />
          </div>
        </section>
      </main>
    </>
  );
};

export default GlobalClientsPage;

