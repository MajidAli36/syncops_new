import React from "react";
import Button from "../components/ui/button";
import {
  CheckCircle,
  Briefcase,
  Settings,
  Server,
  Globe,
  CpuIcon,
} from "lucide-react";

import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const generateMetadata = () => {
  return generateSEO({
    title: "Free Software Consultancy - 15 Days Free Consultation | SyncOps",
    description:
      "Get 15 days of free software consultancy from SyncOps. Expert analysis of your current software, improvement recommendations, scaling strategies, security audits, system integration guidance, and architecture advice. Transform your business with professional software consulting.",
    keywords: [
      "free software consultancy",
      "software consulting",
      "free consultation",
      "software analysis",
      "system integration consulting",
      "software architecture consulting",
      "scaling strategies",
      "security audit",
      "software optimization",
      "IT consulting",
      "technology consulting",
      "software improvement",
      "15 day free consultancy",
      "SyncOps consultancy"
    ],
    url: "/consultancy",
    type: "website"
  });
};

const services = [
  {
    icon: CheckCircle,
    title: "Analyze your current software solution",
    description:
      "Our experts will dive deep into your existing software to identify areas for improvement and optimization.",
  },
  {
    icon: Briefcase,
    title: "Identify areas for improvement",
    description:
      "We'll work with you to pinpoint the bottlenecks and opportunities in your software system.",
  },
  {
    icon: Settings,
    title: "Provide recommendations for scaling and security",
    description:
      "Get expert advice on how to scale your software securely and reliably.",
  },
  {
    icon: Server,
    title: "Help with system integration and deployment",
    description:
      "We'll guide you through best practices for system integration, automation, and deployment strategies.",
  },
  {
    icon: Globe,
    title: "Advice on software architecture",
    description:
      "Get expert advice on designing a scalable and maintainable software architecture.",
  },
  {
    icon: CpuIcon,
    title: "Optimize performance and efficiency",
    description:
      "Our experts will help you identify and address performance bottlenecks to ensure your software runs at its best.",
  },
];

export default function ConsultancyPage() {
  // Structured data for consultancy service
  const consultancySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Consultancy",
    "name": "Free Software Consultancy - 15 Days",
    "description": "Get 15 days of free software consultancy from SyncOps. Expert analysis, improvement recommendations, scaling strategies, and architecture advice.",
    "provider": {
      "@type": "Organization",
      "name": "SyncOps",
      "url": "https://syncops.tech"
    },
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://syncops.tech/consultancy",
      "serviceType": "Online"
    },
    "offers": {
      "@type": "Offer",
      "name": "15-Day Free Consultancy",
      "description": "Free software consultancy for 15 days including analysis, recommendations, and expert guidance",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

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
        "name": "Consultancy",
        "item": "https://syncops.tech/consultancy"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consultancySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen text-[#042638] flex flex-col items-center justify-center px-8 py-12">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-balance">
          Get Free Software Consultancy for 15 Days!
        </h1>
        <p className="text-lg md:text-xl mb-12 text-center text-balance leading-relaxed">
          Are you struggling with your current software system, or do you need
          expert advice for your next big project? We offer a{" "}
          <strong>15-day free consultancy</strong> to help you tackle any
          challenges, optimize your software, and ensure that you're on the
          right track to success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-start">
              <service.icon className="w-10 h-10 mr-4 text-[#0fbab1]" />
              <div>
                <h3 className="text-xl font-semibold mb-2 ">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg md:text-xl mb-6 text-balance leading-relaxed">
            Whether you're a startup, an established business, or simply need
            guidance, we're here to help! Our goal is to ensure you have the
            tools and knowledge to make informed decisions and get the most out
            of your software investment.
          </p>
          <Button text="Claim Your Free Consultation" href="/contact" />
        </div>
      </div>
    </div>
    </>
  );
}
