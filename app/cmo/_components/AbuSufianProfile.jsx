"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "../../../lib/motionConfig";
import SafeLink from "../../components/ui/SafeLink";
import { Linkedin, Globe, ArrowRight } from "lucide-react";

const AbuSufianProfile = () => {
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
                      src="https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948233/abu-sufian-cmo-syncops_h7xki9.jpg"
                      alt="Abu Sufian - Chief Marketing Officer, SyncOps Tech"
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
              <span className="text-white">Abu Sufian</span>
              <span className="block mt-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">
                Chief Marketing Officer, SyncOps Tech
              </span>
            </h1>
            <p className="text-lg text-gray-400 mb-6">15+ years' experience</p>
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Abu Sufian on LinkedIn"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#0077B5] hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Introduction */}
      <section className="relative bg-gradient-to-br from-[#FAFAFF] to-white py-16 overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full filter blur-3xl opacity-50" aria-hidden="true"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-l from-[#00C4FF]/10 to-[#00B894]/10 rounded-full filter blur-3xl opacity-50" aria-hidden="true"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            {...fadeUp(0)}
          >
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Abu Sufian serves as the Chief Marketing Officer (CMO) of SyncOps Tech, managing brand strategy, marketing campaigns, and global visibility. With over 15 years of experience in marketing and brand management, Abu plays a critical role in building SyncOps's presence in global markets and communicating the company's value proposition to potential clients and partners.
              </p>
              <p className="text-lg">
                As CMO, Abu is responsible for developing and executing marketing strategies that support SyncOps's business objectives, building brand awareness in target markets, and creating marketing campaigns that effectively communicate the company's capabilities and value. This marketing focus is essential for SyncOps's ability to reach potential clients and establish itself as a credible technology partner in global markets.
              </p>
              <p className="text-lg">
                Abu's role involves coordinating marketing activities across different channels and markets, ensuring that marketing messages are consistent and aligned with company values, and measuring the effectiveness of marketing efforts to continuously improve results.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Role at SyncOps Tech */}
      <section className="relative bg-gradient-to-br from-white to-[#FAFAFF] py-20 overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full filter blur-3xl opacity-50" aria-hidden="true"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-l from-[#00C4FF]/10 to-[#00B894]/10 rounded-full filter blur-3xl opacity-50" aria-hidden="true"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand Strategy</h3>
                <p className="text-lg">
                  Brand strategy involves defining how SyncOps is positioned in the market, what values and attributes the brand represents, and how the brand differentiates itself from competitors. Abu develops brand strategies that align with company values and resonate with target audiences in global markets.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Campaigns</h3>
                <p className="text-lg">
                  Marketing campaigns are designed to reach potential clients, communicate SyncOps's capabilities, and generate interest in the company's services and products. Abu develops and executes campaigns across various channels, ensuring that campaigns are effective and aligned with business objectives.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Visibility</h3>
                <p className="text-lg">
                  Global visibility involves building SyncOps's presence in international markets, ensuring that the company is visible to potential clients and partners worldwide. This includes digital marketing, content marketing, and other activities that increase SyncOps's visibility in target markets.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="relative bg-[#0B0A1C] text-white py-20 overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#00B894]/20 to-[#00C4FF]/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-l from-[#00C4FF]/20 to-[#00B894]/20 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="bg-gradient-to-br from-[#1A1A2E]/90 to-[#1A1A2E]/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            {...fadeUp(0)}
          >
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Under Abu Sufian's marketing leadership, SyncOps Tech builds strong brand presence and visibility in global markets. His focus on brand strategy, effective marketing campaigns, and global visibility ensures that SyncOps can reach potential clients and establish itself as a credible technology partner worldwide.
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

export default AbuSufianProfile;

