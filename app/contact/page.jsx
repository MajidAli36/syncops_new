import React from "react";
import ContactForm from "./_components/ContactForm";
import ContactHero from "./_components/ContactHero";
import Testimonial from "../components/Testimonial";
import FinalCTA from "../components/FinalCTA";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const generateMetadata = () => {
  return generateSEO({
    title: "Contact Us - Get in Touch with SyncOps | Software Development Experts",
    description: "Contact SyncOps for AI-powered software solutions, custom development, and consulting. Email: info@syncops.tech | Phone: +92-301-8678-319 | Located in Gujranwala, Pakistan. Get a free consultation today.",
    keywords: [
      "contact SyncOps",
      "software development contact",
      "AI solutions contact",
      "SyncOps email",
      "SyncOps phone",
      "software consulting contact",
      "get quote",
      "free consultation"
    ],
    url: "/contact",
    type: "website"
  });
};

const page = () => {
  // Contact page structured data
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact SyncOps",
    "description": "Contact SyncOps for AI-powered software solutions and consulting",
    "url": "https://syncops.tech/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "SyncOps",
      "url": "https://syncops.tech",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+92-301-8678-319",
        "contactType": "Customer Service",
        "email": "info@syncops.tech",
        "areaServed": "Worldwide",
        "availableLanguage": ["en"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gujranwala",
        "addressRegion": "Punjab",
        "addressCountry": "PK",
        "streetAddress": "Mumtaz Market"
      }
    }
  };

  // LocalBusiness structured data for better local SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SyncOps",
    "alternateName": "SyncOps Technologies",
    "description": "Enterprise-grade AI-powered software solutions, development, and consulting. Specializing in AI, cybersecurity, cloud, and custom software development.",
    "url": "https://syncops.tech",
    "telephone": "+92-301-8678-319",
    "email": "info@syncops.tech",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gujranwala",
      "addressRegion": "Punjab",
      "addressCountry": "PK",
      "streetAddress": "Mumtaz Market"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.1617",
      "longitude": "74.1883"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "areaServed": "Worldwide",
    "sameAs": [
      "https://www.linkedin.com/company/syncops",
      "https://clutch.co/profile/syncops",
      "https://techbehemoths.com/company/syncops"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div>
        <ContactHero />
        <ContactForm />
        <Testimonial />
        <FinalCTA/>
      </div>
    </>
  );
};

export default page;
