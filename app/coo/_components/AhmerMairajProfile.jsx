"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "../../../lib/motionConfig";
import SafeLink from "../../components/ui/SafeLink";
import { Linkedin, Globe, ArrowRight } from "lucide-react";

const AhmerMairajProfile = () => {
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
                      src="https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948234/ahmer-mairaj-coo-syncops_olgqbf.jpg"
                      alt="Ahmer Mairaj - Chief Operating Officer, SyncOps Tech"
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
              <span className="text-white">Ahmer Mairaj</span>
              <span className="block mt-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">
                Chief Operating Officer, SyncOps Tech
              </span>
            </h1>
            <p className="text-lg text-gray-400 mb-6">10+ years' experience</p>
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Ahmer Mairaj on LinkedIn"
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
                Ahmer Mairaj serves as the Chief Operating Officer (COO) of SyncOps Tech, overseeing daily operations, resource management, and execution of business strategies. With over 10 years of experience in operations and business management, Ahmer plays a critical role in ensuring that SyncOps delivers on its commitments to clients while maintaining operational efficiency and quality standards.
              </p>
              <p className="text-lg">
                As COO, Ahmer is responsible for translating strategic vision into operational reality, ensuring that company resources are allocated effectively, processes are optimized for efficiency, and teams have the support they need to deliver high-quality work. This operational focus is essential for SyncOps's ability to serve global clients while maintaining the discipline and quality that define the company.
              </p>
              <p className="text-lg">
                Ahmer's role involves coordinating across different functions within SyncOps, from engineering and product development to client services and business development. This coordination ensures that all parts of the organization work together effectively to deliver value to clients and support company growth objectives.
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Daily Operations Management</h3>
                <p className="text-lg">
                  Ahmer oversees the day-to-day operations of SyncOps, ensuring that all business functions operate smoothly and efficiently. This includes managing operational processes, coordinating between teams, and addressing operational challenges as they arise. Effective operations management ensures that SyncOps can deliver on client commitments while maintaining quality and efficiency.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Resource Management</h3>
                <p className="text-lg">
                  Resource management involves allocating company resources—including personnel, technology, and financial resources—in ways that support strategic objectives and enable effective delivery. Ahmer ensures that resources are used efficiently, that teams have what they need to succeed, and that investments align with company priorities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Execution of Business Strategies</h3>
                <p className="text-lg">
                  Execution of business strategies involves translating high-level strategic plans into actionable operational plans and ensuring that these plans are implemented effectively. Ahmer works closely with leadership to understand strategic objectives and then develops operational approaches that enable these objectives to be achieved.
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
                Under Ahmer Mairaj's operational leadership, SyncOps Tech maintains efficient operations that enable the company to deliver high-quality technology solutions to global clients. His focus on operational excellence, resource management, and strategic execution ensures that SyncOps can scale its operations while maintaining the quality and discipline that define the company.
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

export default AhmerMairajProfile;

