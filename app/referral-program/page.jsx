import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const generateMetadata = () => {
  return generateSEO({
    title: "Referral Program - Earn Rewards by Referring Clients & Talent | SyncOps",
    description:
      "Join SyncOps Referral Program and earn rewards by referring clients and talent. Transparent rewards, simple steps, fast payouts. Multiple referral paths including client referrals and talent referrals. Start earning today!",
    keywords: [
      "referral program",
      "referral rewards",
      "client referral",
      "talent referral",
      "referral bonus",
      "earn rewards",
      "referral commission",
      "referral program SyncOps",
      "refer clients",
      "refer talent",
      "referral incentives",
      "affiliate program"
    ],
    url: "/referral-program",
    type: "website"
  });
};

import FAQ from "../components/FAQ";
import ReferralHero from "./_components/ReferralHero";
import HowItWorks from "./_components/HowItWorks";
import BenefitsSection from "./_components/BenefitsSection";
import ProgramTiers from "./_components/ProgramTiers";
import RewardsSection from "./_components/RewardsSection";
import EligibilityGuidelines from "./_components/EligibilityGuidelines";
import ReferralSocialProof from "./_components/ReferralSocialProof";
import FinalCTA from "../components/FinalCTA";
export default function ReferralProgramPage() {
  return (
    <div className="py-0">
      <section data-gsap-section>
        <div data-gsap-stagger>
          <ReferralHero />
        </div>
      </section>
      <section data-gsap-section>
        <div data-gsap-stagger>
          <HowItWorks />
        </div>
      </section>
      <section data-gsap-section>
        <div data-gsap-stagger>
          <BenefitsSection />
        </div>
      </section>
      <section data-gsap-section>
        <div data-gsap-stagger>
          <ProgramTiers />
        </div>
      </section>
      <section data-gsap-section>
        <div data-gsap-stagger>
          <RewardsSection />
        </div>
      </section>
      <section data-gsap-section>
        <div data-gsap-stagger>
          <EligibilityGuidelines />
        </div>
      </section>
      <section data-gsap-section>
        <div data-gsap-stagger>
          <ReferralSocialProof />
        </div>
      </section>

      {/* FAQs - Dark Background */}
      <section data-gsap-section className="relative bg-gradient-to-br from-[#0B0A1C] via-[#0F1E2E] to-[#0B0A1C] py-16 overflow-hidden mt-0">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#00B894]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#00C4FF]/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10" data-gsap-stagger>
          <FAQ />
        </div>
      </section>

      {/* CTA - site component */}
      <section data-gsap-section className="mt-0">
        <div data-gsap-stagger>
          <FinalCTA />
        </div>
      </section>

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                "name": "Referral Program",
                "item": "https://syncops.tech/referral-program"
              }
            ]
          })
        }}
      />
      {/* JSON-LD Schema for Program */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProgramMembership",
            "name": "SyncOps Referral Program",
            "url": "https://syncops.tech/referral-program",
            "programName": "SyncOps Referral Program",
            "description": "Earn rewards by referring clients and talent to SyncOps. Transparent rewards, simple steps, and fast payouts.",
            "provider": {
              "@type": "Organization",
              "name": "SyncOps",
              "url": "https://syncops.tech"
            },
            "memberBenefits": [
              "Transparent rewards",
              "Fast qualification",
              "Multiple referral paths",
              "Client referral rewards",
              "Talent referral rewards",
              "Fast payouts"
            ],
            "offers": {
              "@type": "Offer",
              "description": "Referral program with rewards for successful client and talent referrals"
            }
          })
        }}
      />
    </div>
  );
}


