"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "../../../lib/motionConfig";
import SafeLink from "../../components/ui/SafeLink";
import { Linkedin, Globe, Github, ArrowRight } from "lucide-react";

const MajidAliProfile = () => {
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
                      src="https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948234/majid-ali-ceo-syncops_c6y6ay.jpg"
                      alt="Majid Ali - Founder & CEO, SyncOps Tech"
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
              <span className="text-white">Majid Ali</span>
              <span className="block mt-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">
                Founder & CEO, SyncOps Tech
              </span>
            </h1>
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/majidali-syncops/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Majid Ali on LinkedIn"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#0077B5] hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://majidali.tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Majid Ali's website"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#00C4FF] hover:text-white transition-all duration-300"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/MajidAli36"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Majid Ali's GitHub"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#333] hover:text-white transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Introduction */}
      <section className="bg-gradient-to-br from-[#FAFAFF] to-white py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            {...fadeUp(0)}
          >
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Majid Ali is the founder of SyncOps Tech, an AI-first technology company based in Pakistan that designs and builds intelligent software systems for global markets. Under his leadership, SyncOps has established itself as a trusted technology partner serving enterprises across the United States, United Kingdom, Europe, Canada, Australia, Singapore, and the United Arab Emirates.
              </p>
              <p className="text-lg">
                The vision behind SyncOps centers on building an AI-first technology company that creates long-term value through products, systems, and sustainable business models rather than short-term project delivery. This approach has shaped SyncOps into a company that develops its own AI-powered SaaS platforms while serving enterprise clients, creating a dual focus that provides unique insights into what works in production at scale. The emphasis on long-term products and systems reflects a commitment to building technology that evolves, scales, and delivers value over time.
              </p>
              <p className="text-lg">
                As CEO, Majid guides company strategy and growth, ensuring that SyncOps maintains its focus on quality, discipline, and trust while serving global markets. His role involves setting strategic direction, making decisions about product development and market expansion, and building the organizational capabilities needed to deliver enterprise-grade technology solutions. This leadership has enabled SyncOps to establish credibility with international clients and build a reputation for reliable, high-quality delivery from Pakistan.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="bg-[#0B0A1C] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            {...fadeUp(0)}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              <span className="text-white">Leadership </span>
              <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">Philosophy</span>
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Majid's approach to leadership emphasizes systems, teams, and execution over individual heroics or charismatic management. This philosophy recognizes that sustainable technology businesses are built on strong foundations—clear processes, capable teams, and reliable execution—rather than depending on any single person. This systems-first approach ensures that SyncOps can scale, adapt, and continue delivering value even as the organization grows and evolves.
              </p>
              <p className="text-lg">
                Building sustainable technology businesses requires balancing multiple priorities: maintaining quality while scaling operations, investing in long-term capabilities while meeting current client needs, and building organizational culture that supports both innovation and reliability. This balance is achieved through careful attention to systems that enable teams to work effectively, processes that ensure consistent quality, and organizational structures that support growth without sacrificing the discipline and focus that enable reliable delivery.
              </p>
              <p className="text-lg">
                Transparency and accountability form the foundation of how SyncOps operates under Majid's leadership. This means clear communication about decisions and their rationale, honest assessment of capabilities and limitations, and accountability for outcomes. This transparency builds trust with clients, partners, and team members, enabling SyncOps to operate as a credible technology company that delivers on commitments and maintains high standards of integrity.
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Company Vision & Direction</h3>
                <p className="text-lg">
                  As CEO, Majid is responsible for setting SyncOps's strategic vision and ensuring that all company activities align with long-term objectives. This involves making decisions about which markets to serve, what products to build, and how to position SyncOps in the competitive technology landscape. The vision emphasizes building an AI-first company that creates sustainable value through products and systems, not just project delivery.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Product and Ecosystem Strategy</h3>
                <p className="text-lg">
                  Product and ecosystem strategy involves decisions about SyncOps's own product portfolio, how these products relate to client work, and how the company's ecosystem of products and services creates value. This includes identifying opportunities to build products that serve market needs, determining how client work informs product development, and ensuring that SyncOps's product strategy supports long-term growth and sustainability.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Partnerships</h3>
                <p className="text-lg">
                  Building and maintaining global partnerships is essential for SyncOps's ability to serve international markets effectively. This involves establishing relationships with clients, technology partners, and other stakeholders that enable SyncOps to deliver value across geographic boundaries. These partnerships require careful attention to communication, trust-building, and alignment of interests to ensure mutually beneficial long-term relationships.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Culture and Leadership Development</h3>
                <p className="text-lg">
                  Culture and leadership development ensure that SyncOps maintains the organizational capabilities needed to execute its strategy and deliver on its commitments. This involves building a culture that values quality, discipline, and continuous improvement, developing leaders who can guide teams effectively, and creating organizational structures that support both individual growth and company objectives. This focus on culture and leadership ensures that SyncOps can scale while maintaining the standards and values that define the company.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Building a Global AI Company from Pakistan */}
      <section className="bg-[#0B0A1C] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            {...fadeUp(0)}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              <span className="text-white">Building a Global AI Company from </span>
              <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">Pakistan</span>
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Pakistan offers significant advantages as an engineering base for building a global technology company. The country has a large pool of talented engineers with strong technical foundations, competitive cost structures that enable efficient operations, and timezone advantages that facilitate collaboration with clients in the United States and Europe. These factors combine to create an environment where SyncOps can build high-quality technology solutions while maintaining cost efficiency and global competitiveness.
              </p>
              <p className="text-lg">
                Serving global markets from Pakistan requires maintaining the highest standards of quality, discipline, and trust. SyncOps has established processes, communication protocols, and delivery models that ensure international clients receive the same level of service and quality they would expect from technology companies in their own markets. This commitment to quality and discipline has enabled SyncOps to build credibility with enterprise clients in the United States, United Kingdom, Europe, Canada, Australia, Singapore, and the United Arab Emirates.
              </p>
              <p className="text-lg">
                The long-term global ambition for SyncOps is to establish the company as a recognized leader in AI-powered technology solutions, serving enterprise clients worldwide while maintaining its engineering base in Pakistan. This ambition requires continued focus on building products and systems that create value, developing organizational capabilities that support growth, and maintaining the quality and discipline that enable reliable delivery. The goal is to demonstrate that geographic location doesn't limit a company's ability to compete globally when quality, discipline, and trust are maintained as core principles.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitment to Clients & Partners */}
      <section className="bg-gradient-to-br from-[#FAFAFF] to-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            {...fadeUp(0)}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              <span>Commitment to Clients & </span>
              <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">Partners</span>
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                A client-first mindset guides all decisions at SyncOps, ensuring that client success is prioritized over short-term gains or internal convenience. This means investing time to understand client needs, designing solutions that address real business problems, and maintaining flexibility to adapt as requirements evolve. This client-first approach has enabled SyncOps to build long-term relationships with clients who value the company's commitment to their success.
              </p>
              <p className="text-lg">
                Ethical delivery means operating with integrity, transparency, and accountability in all client engagements. This includes honest communication about capabilities and limitations, fair pricing that reflects value delivered, and commitment to delivering on promises. Ethical delivery also means respecting client intellectual property, maintaining confidentiality, and operating within legal and regulatory frameworks. This ethical foundation enables SyncOps to build trust with clients and maintain credibility in global markets.
              </p>
              <p className="text-lg">
                Long-term partnerships are structured to support client success over time, not just deliver individual projects. This means providing ongoing support, optimization, and evolution of solutions as business needs change. It also means being available to address issues, answer questions, and provide guidance when needed. These long-term partnerships create value for both SyncOps and clients, enabling sustained relationships that benefit both parties.
              </p>
              <p className="text-lg">
                Responsible use of AI is a core principle at SyncOps, recognizing that AI technologies have significant potential but also require careful consideration of ethical implications, bias mitigation, and appropriate use cases. This means building AI systems that are transparent, explainable, and designed to augment human judgment rather than replace it inappropriately. Responsible AI use also means being honest about AI capabilities and limitations, ensuring that AI systems are used appropriately and that their impact is understood and managed.
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
                Under Majid Ali's leadership, SyncOps Tech has established itself as a credible technology company that delivers enterprise-grade AI solutions to global markets. The company's focus on long-term products, systems, and sustainable business models, combined with its commitment to quality, discipline, and trust, positions SyncOps as a reliable partner for enterprises seeking AI-powered technology solutions.
              </p>
              <p className="text-lg">
                The vision of building a global AI company from Pakistan, serving clients worldwide while maintaining the highest standards of quality and delivery, reflects a commitment to demonstrating that geographic location doesn't limit a company's ability to compete globally. This vision, combined with transparent leadership, ethical business practices, and responsible use of AI, establishes SyncOps as a company that enterprises can trust with their technology needs.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <SafeLink
                href="/contact"
                className="inline-flex items-center gap-2 text-[#00B894] hover:text-[#00C4FF] transition-colors duration-300 font-semibold"
              >
                Connect with SyncOps
                <ArrowRight className="w-4 h-4" />
              </SafeLink>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MajidAliProfile;

