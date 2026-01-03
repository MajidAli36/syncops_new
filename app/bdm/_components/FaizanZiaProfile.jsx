"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "../../../lib/motionConfig";
import SafeLink from "../../components/ui/SafeLink";
import { Linkedin, Globe, ArrowRight } from "lucide-react";

const FaizanZiaProfile = () => {
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
                      src="https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948375/faizan-zia-bdm-syncops_uacwlv.jpg"
                      alt="Faizan Zia - Business Development Manager, SyncOps Tech"
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
              <span className="text-white">Faizan Zia</span>
              <span className="block mt-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">
                Business Development Manager, SyncOps Tech
              </span>
            </h1>
            <p className="text-lg text-gray-400 mb-6">5+ years' experience</p>
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/faizanzia-syncops/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Faizan Zia on LinkedIn"
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
                Faizan Zia serves as the Business Development Manager (BDM) of SyncOps Tech, driving sales pipeline growth, nurturing client partnerships, and supporting revenue-focused initiatives. With over 5 years of experience in business development and sales, Faizan plays a critical role in identifying new business opportunities, building relationships with potential clients, and supporting SyncOps's growth objectives.
              </p>
              <p className="text-lg">
                As BDM, Faizan is responsible for developing and maintaining relationships with potential clients, understanding their needs, and positioning SyncOps's services and products as solutions to their challenges. This business development focus is essential for SyncOps's ability to grow its client base and expand its presence in global markets.
              </p>
              <p className="text-lg">
                Faizan's role involves coordinating with other functions within SyncOps, including engineering, product development, and operations, to ensure that business development efforts are aligned with company capabilities and that client expectations are met effectively.
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sales Pipeline Growth</h3>
                <p className="text-lg">
                  Sales pipeline growth involves identifying potential clients, qualifying opportunities, and moving prospects through the sales process. Faizan develops and manages sales pipelines that support SyncOps's growth objectives, ensuring that the company has a steady stream of opportunities to pursue.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Partnerships</h3>
                <p className="text-lg">
                  Client partnerships involve building and maintaining relationships with clients, understanding their needs, and ensuring that SyncOps delivers value that supports their success. Faizan nurtures these partnerships, ensuring that clients are satisfied and that relationships are structured for long-term success.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Revenue-Focused Initiatives</h3>
                <p className="text-lg">
                  Revenue-focused initiatives are activities and programs designed to generate revenue and support business growth. Faizan identifies and supports initiatives that contribute to SyncOps's revenue objectives, ensuring that business development efforts are aligned with company financial goals.
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
                Under Faizan Zia's business development leadership, SyncOps Tech builds strong client relationships and drives revenue growth. His focus on sales pipeline growth, client partnerships, and revenue-focused initiatives ensures that SyncOps can expand its client base and achieve its growth objectives.
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

export default FaizanZiaProfile;

