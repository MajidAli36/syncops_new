"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "../../../lib/motionConfig";
import SafeLink from "../../components/ui/SafeLink";
import { Linkedin, ArrowRight } from "lucide-react";

const NidaNaeemProfile = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0B0A1C] text-white py-20 lg:py-24 border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5 opacity-30" aria-hidden="true"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full filter blur-3xl opacity-10 animate-pulse" aria-hidden="true"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#00C4FF] to-[#00B894] rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000" aria-hidden="true"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full opacity-20 blur-xl"></div>
                <div className="relative w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full p-1.5">
                  <div className="w-full h-full bg-[#0B0A1C] rounded-full overflow-hidden">
                    <Image
                      src="https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948234/nidanaeem-cbdo-syncops_kcaaml.jpg"
                      alt="Nida Naeem - Chief Business Development Officer, SyncOps Tech"
                      width={160}
                      height={160}
                      priority
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Nida Naeem</span>
              <span className="block mt-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">
                Chief Business Development Officer, SyncOps Tech
              </span>
            </h1>
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/nidanaeem-syncops/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Nida Naeem on LinkedIn"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#0077B5] hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Leadership Introduction */}
      <section className="bg-gradient-to-br from-[#FAFAFF] to-white py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            {...fadeUp(0)}
          >
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Nida Naeem serves as Chief Business Development Officer at SyncOps Tech, responsible for building and maintaining relationships with enterprise clients, strategic partners, and prospects across global markets. In this role, Nida oversees business development activities that connect SyncOps's technical capabilities with organizations seeking AI-powered technology solutions in the United States, United Kingdom, Europe, Canada, Australia, Singapore, and the United Arab Emirates.
              </p>
              <p className="text-lg">
                The responsibility for global business development encompasses understanding market needs, identifying opportunities where SyncOps can deliver value, and building relationships that enable long-term partnerships. This involves engaging with enterprise decision-makers, understanding their business challenges and objectives, and aligning SyncOps's capabilities with client needs. The focus is on creating connections that lead to mutually beneficial partnerships rather than one-time transactions.
              </p>
              <p className="text-lg">
                Building long-term partnerships, not transactions, means investing time to understand client businesses, their strategic objectives, and how technology can support their goals. This approach recognizes that the most valuable client relationships are those that evolve over time, where SyncOps becomes a trusted technology partner that supports client success as businesses grow and requirements change. This partnership focus ensures that engagements are structured for long-term value creation rather than short-term revenue.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Philosophy */}
      <section className="bg-[#0B0A1C] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            {...fadeUp(0)}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              <span className="text-white">Business </span>
              <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">Philosophy</span>
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Relationship-driven growth recognizes that sustainable business development comes from building trust, understanding client needs deeply, and delivering value consistently over time. This approach prioritizes quality relationships over quantity of engagements, investing in understanding client businesses and building partnerships that create value for both parties. Relationship-driven growth means that business development activities focus on creating connections that lead to long-term partnerships rather than pursuing every possible opportunity.
              </p>
              <p className="text-lg">
                Understanding client needs before solutions means investing significant time in discovery, asking questions, and listening carefully to understand business challenges, objectives, and constraints. This understanding enables SyncOps to propose solutions that address real business problems rather than pushing technology for its own sake. This client-first approach ensures that engagements are structured around delivering value that matters to clients, building trust through demonstrated understanding and alignment with client objectives.
              </p>
              <p className="text-lg">
                Ethical, transparent business practices form the foundation of how SyncOps engages with clients and partners. This means honest communication about capabilities and limitations, fair pricing that reflects value delivered, and transparent processes that enable clients to make informed decisions. Ethical business practices also mean respecting client time, being responsive and reliable, and operating with integrity in all interactions. This ethical foundation enables SyncOps to build trust with clients and maintain credibility in competitive markets.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Role at SyncOps Tech */}
      <section className="bg-gradient-to-br from-white to-[#FAFAFF] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            {...fadeUp(0)}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              <span>Role at </span>
              <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">SyncOps Tech</span>
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Client Engagement</h3>
                <p className="text-lg">
                  Global client engagement involves building relationships with enterprise decision-makers across different markets, understanding their business contexts, and identifying opportunities where SyncOps can deliver value. This includes initial outreach, discovery conversations, proposal development, and ongoing relationship management. The goal is to create connections that lead to partnerships where SyncOps becomes a trusted technology partner supporting client success.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Partnerships</h3>
                <p className="text-lg">
                  Strategic partnerships involve building relationships with other technology companies, service providers, and organizations that can complement SyncOps's capabilities or expand market reach. These partnerships might include technology integrations, referral relationships, or joint go-to-market initiatives. The focus is on creating partnerships that create value for all parties and enable SyncOps to serve clients more effectively or reach new markets.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Positioning</h3>
                <p className="text-lg">
                  Market positioning involves understanding how SyncOps is perceived in different markets, identifying opportunities to strengthen positioning, and communicating value propositions that resonate with target clients. This includes understanding competitive landscapes, identifying differentiation opportunities, and ensuring that SyncOps's messaging and positioning align with the company's capabilities and strategic objectives. Effective market positioning enables SyncOps to compete effectively and attract clients who value what the company offers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Aligning Business Goals with Engineering Execution</h3>
                <p className="text-lg">
                  Aligning business goals with engineering execution ensures that client engagements are structured in ways that enable technical teams to deliver value effectively. This involves translating business requirements into technical scopes, setting realistic expectations about timelines and capabilities, and ensuring that business commitments align with what engineering teams can deliver. This alignment prevents overcommitment, ensures client satisfaction, and enables SyncOps to maintain quality standards while growing the business.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Working with Global Clients */}
      <section className="bg-[#0B0A1C] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            {...fadeUp(0)}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              <span className="text-white">Working with </span>
              <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">Global Clients</span>
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Experience working with clients in the United States, United Kingdom, and Europe has provided insights into how different markets approach technology partnerships, what they value in service providers, and how business relationships are built and maintained. These markets often have sophisticated procurement processes, high standards for vendor relationships, and expectations for transparency and accountability. Understanding these market characteristics enables SyncOps to engage effectively with clients in these regions and build relationships that meet their expectations.
              </p>
              <p className="text-lg">
                Communication and trust-building are essential for working with global clients, especially when geographic distance and cultural differences are factors. This involves clear, regular communication that keeps clients informed about progress, responsive handling of questions and concerns, and proactive engagement that demonstrates commitment to client success. Trust-building also means delivering on commitments consistently, being transparent about challenges, and maintaining professional standards in all interactions. This focus on communication and trust enables SyncOps to build strong relationships with international clients despite geographic distance.
              </p>
              <p className="text-lg">
                Cultural and operational alignment involves understanding how clients in different markets prefer to work, what communication styles they expect, and how business relationships are structured. This might include understanding decision-making processes, meeting preferences, documentation expectations, and how contracts and agreements are typically structured. This cultural awareness enables SyncOps to engage with clients in ways that feel natural and professional, building relationships more effectively and avoiding misunderstandings that can arise from cultural differences.
              </p>
              <p className="text-lg">
                Long-term engagement focus means structuring relationships and engagements to support client success over time, not just deliver individual projects. This involves understanding client roadmaps, identifying opportunities for ongoing value creation, and maintaining relationships that enable SyncOps to support clients as their needs evolve. This long-term focus creates value for both SyncOps and clients, enabling sustained relationships that benefit both parties and creating opportunities for growth as client businesses expand.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitment to Client Success */}
      <section className="bg-gradient-to-br from-[#FAFAFF] to-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            {...fadeUp(0)}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              <span>Commitment to Client </span>
              <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">Success</span>
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                A client-first mindset means that client success is prioritized over short-term revenue or internal convenience. This involves investing time to understand client businesses deeply, proposing solutions that address real needs, and being willing to say no when SyncOps isn't the right fit for a client's requirements. This client-first approach builds trust and enables SyncOps to build relationships with clients who value the company's commitment to their success.
              </p>
              <p className="text-lg">
                Value-driven delivery means focusing on outcomes that matter to clients rather than just completing tasks or delivering features. This involves understanding what success looks like for each client, measuring progress against those success criteria, and adjusting approaches when needed to ensure value is delivered. Value-driven delivery also means being honest about what can and cannot be achieved, setting realistic expectations, and ensuring that engagements are structured to deliver measurable value.
              </p>
              <p className="text-lg">
                Honest scoping and expectations mean being transparent about what SyncOps can deliver, how long it will take, and what it will cost. This involves careful analysis of requirements, realistic assessment of capabilities, and clear communication about assumptions and constraints. Honest scoping prevents overcommitment, ensures client satisfaction, and enables SyncOps to maintain quality standards while meeting client expectations. This transparency builds trust and enables clients to make informed decisions about their technology investments.
              </p>
              <p className="text-lg">
                Sustainable growth means building a business that can serve clients effectively over time, maintaining quality standards as the company grows, and creating value for both SyncOps and clients. This involves making decisions that support long-term success rather than short-term gains, investing in capabilities that enable better client service, and building organizational structures that support growth without sacrificing quality. This focus on sustainable growth ensures that SyncOps can continue to deliver value to clients as the company evolves and expands.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-[#0B0A1C] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            {...fadeUp(0)}
          >
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                As Chief Business Development Officer, Nida Naeem ensures that SyncOps Tech builds relationships with enterprise clients and partners that are based on trust, understanding, and mutual value creation. The focus on long-term partnerships, ethical business practices, and client success positions SyncOps as a technology company that enterprises can trust with their technology needs.
              </p>
              <p className="text-lg">
                The commitment to understanding client needs before proposing solutions, combined with transparent communication, honest scoping, and value-driven delivery, enables SyncOps to build relationships that create sustained value for both the company and its clients. This business development approach ensures that SyncOps can compete effectively in global markets while maintaining the integrity and client focus that define the company's culture.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <SafeLink
                href="/contact"
                className="inline-flex items-center gap-2 text-[#00B894] hover:text-[#00C4FF] transition-colors duration-300 font-semibold"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </SafeLink>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NidaNaeemProfile;

