"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "../../../lib/motionConfig";
import SafeLink from "../../components/ui/SafeLink";
import { Linkedin, Globe, ArrowRight } from "lucide-react";

const RimshaImranProfile = () => {
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
                      src="https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948234/rimshaimran-cto-syncops_lvs2eb.jpg"
                      alt="Rimsha Imran - Chief Technology Officer, SyncOps Tech"
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
              <span className="text-white">Rimsha Imran</span>
              <span className="block mt-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">
                Chief Technology Officer, SyncOps Tech
              </span>
            </h1>
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/rimshaimran-syncops/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Rimsha Imran on LinkedIn"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#0077B5] hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.rimshaimran.tech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Rimsha Imran's website"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#00C4FF] hover:text-white transition-all duration-300"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Leadership Introduction */}
      <section className="bg-gradient-to-br from-[#FAFAFF] to-white py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            {...fadeUp(0)}
          >
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Rimsha Imran serves as Chief Technology Officer at SyncOps Tech, responsible for the technical architecture, engineering systems, and technology strategy that enable SyncOps to deliver enterprise-grade AI solutions to global markets. In this role, Rimsha oversees the design and implementation of AI systems, SaaS platforms, and automation solutions that serve clients across the United States, United Kingdom, Europe, Canada, Australia, Singapore, and the United Arab Emirates.
              </p>
              <p className="text-lg">
                The responsibility for AI architecture and engineering systems encompasses decisions about how AI capabilities are integrated into software platforms, how machine learning models are deployed and maintained, and how AI systems scale to handle enterprise workloads. This includes designing data pipelines that feed AI models, architecting model serving infrastructure that maintains performance under load, and building monitoring systems that ensure AI systems remain accurate and reliable in production. The focus is on creating systems that are not just functional, but scalable, secure, and maintainable over time.
              </p>
              <p className="text-lg">
                Building scalable, secure, and maintainable platforms requires careful consideration of architecture patterns, technology choices, and engineering practices. Rimsha's approach emphasizes systems that can grow with client needs, maintain security standards that meet enterprise requirements, and remain maintainable as they evolve. This focus on long-term platform quality ensures that SyncOps delivers technology solutions that continue to provide value as businesses grow and requirements change.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="bg-[#0B0A1C] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            {...fadeUp(0)}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              <span className="text-white">Engineering </span>
              <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">Philosophy</span>
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Engineering discipline forms the foundation of how technical work is approached at SyncOps. This means establishing clear standards for code quality, architecture decisions, and system design. It involves creating processes that ensure consistency, maintainability, and reliability across all engineering work. Engineering discipline also means making technical decisions based on evidence and analysis rather than trends or preferences, ensuring that technology choices serve business objectives and long-term sustainability.
              </p>
              <p className="text-lg">
                Clean architecture and system thinking guide how software systems are designed and built. Clean architecture emphasizes separation of concerns, dependency management, and design patterns that enable systems to evolve without requiring complete rewrites. System thinking means understanding how individual components interact, how data flows through systems, and how changes in one area affect others. This approach ensures that systems remain understandable, maintainable, and adaptable as requirements change and new capabilities are added.
              </p>
              <p className="text-lg">
                AI as a system, not just a model, recognizes that effective AI solutions require more than well-trained machine learning models. They require data pipelines that prepare and validate input data, model serving infrastructure that delivers predictions efficiently, monitoring systems that track model performance, and integration layers that connect AI capabilities with business applications. This systems view ensures that AI solutions are designed holistically, with all components working together to deliver reliable, production-ready capabilities.
              </p>
              <p className="text-lg">
                Emphasis on reliability and performance means that systems are designed to operate consistently under expected workloads, handle errors gracefully, and maintain acceptable response times. This involves careful consideration of scalability patterns, performance optimization, error handling, and monitoring. Reliability and performance are not afterthoughts—they are design requirements that influence architecture decisions from the beginning, ensuring that systems meet enterprise expectations for availability and responsiveness.
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI System Design</h3>
                <p className="text-lg">
                  AI system design involves architecting solutions that integrate machine learning capabilities into software platforms effectively. This includes decisions about model selection, data architecture, inference infrastructure, and how AI features interact with core platform functionality. Rimsha's responsibility is to ensure that AI systems are designed with scalability, reliability, and maintainability in mind, enabling SyncOps to deliver AI-powered solutions that perform consistently in production environments.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">SaaS Architecture</h3>
                <p className="text-lg">
                  SaaS architecture design focuses on building platforms that can serve multiple customers efficiently while maintaining data isolation, enabling customization, and scaling with demand. This involves decisions about multi-tenant architecture, API design, subscription management, and infrastructure patterns. The goal is to create SaaS platforms that can scale from startup to enterprise while maintaining performance, security, and cost efficiency.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automation & Data Platforms</h3>
                <p className="text-lg">
                  Automation and data platforms enable SyncOps to deliver intelligent automation solutions and data-driven insights to clients. This includes designing workflow orchestration systems, data processing pipelines, analytics platforms, and integration frameworks. These platforms must handle large volumes of data, process information efficiently, and integrate seamlessly with client systems while maintaining security and compliance requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Team Leadership</h3>
                <p className="text-lg">
                  Technical team leadership involves building and guiding engineering teams that can execute on SyncOps's technology strategy. This includes hiring talented engineers, establishing engineering practices and standards, providing technical guidance and mentorship, and creating an environment where teams can do their best work. Effective technical leadership ensures that SyncOps maintains high standards of engineering quality while enabling teams to grow their capabilities and take on increasingly complex challenges.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology Standards & Best Practices</h3>
                <p className="text-lg">
                  Technology standards and best practices ensure consistency and quality across all engineering work at SyncOps. This includes establishing coding standards, architecture patterns, security practices, testing requirements, and documentation standards. These standards evolve based on experience and industry best practices, ensuring that SyncOps maintains engineering excellence while adapting to new technologies and approaches. The goal is to create a foundation that enables teams to build high-quality systems efficiently.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI & Technology Focus */}
      <section className="bg-[#0B0A1C] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            {...fadeUp(0)}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              <span className="text-white">AI & Technology </span>
              <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">Focus</span>
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Expertise in AI software systems encompasses the full lifecycle of building AI-powered applications, from data preparation and model development to deployment and monitoring. This includes understanding how to integrate machine learning models into production software, design systems that can handle AI workloads efficiently, and maintain AI systems that continue to perform accurately over time. The focus is on building AI systems that are not just technically impressive, but reliable, maintainable, and valuable for business applications.
              </p>
              <p className="text-lg">
                SaaS and automation platforms represent a significant portion of SyncOps's technology portfolio. Building these platforms requires expertise in multi-tenant architecture, subscription management, workflow orchestration, and integration patterns. The challenge is creating platforms that can scale efficiently, maintain security and data isolation, and provide the flexibility that different clients need. This expertise enables SyncOps to build SaaS products and automation solutions that serve enterprise clients effectively.
              </p>
              <p className="text-lg">
                Enterprise-grade AI delivery means building AI systems that meet the standards and requirements that large organizations demand. This includes security standards, compliance requirements, scalability needs, and reliability expectations. Enterprise AI systems must integrate with existing enterprise infrastructure, maintain audit trails, and operate within governance frameworks. This focus on enterprise-grade delivery ensures that SyncOps can serve large organizations that have strict requirements for technology solutions.
              </p>
              <p className="text-lg">
                Cloud-native and scalable systems are essential for delivering technology solutions that can grow with client needs. This involves expertise in cloud architecture patterns, containerization, orchestration, and infrastructure as code. The goal is to build systems that can scale horizontally, maintain high availability, and optimize costs while meeting performance requirements. This cloud-native expertise enables SyncOps to deliver solutions that are both sophisticated and cost-effective.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Delivering AI for Global Clients */}
      <section className="bg-gradient-to-br from-[#FAFAFF] to-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            {...fadeUp(0)}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              <span>Delivering AI for </span>
              <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">Global Clients</span>
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Working with clients in the United States, United Kingdom, and Europe requires understanding their specific technical requirements, compliance needs, and quality expectations. These clients often have sophisticated technology infrastructure, strict security requirements, and high standards for system reliability. Rimsha's role involves ensuring that SyncOps's technical solutions meet these expectations, that engineering teams understand client requirements, and that delivery processes maintain the quality and reliability that international clients demand.
              </p>
              <p className="text-lg">
                Security and compliance mindset means designing systems with security as a foundational requirement, not an afterthought. This includes implementing encryption, access controls, audit logging, and security monitoring. It also means understanding compliance requirements like GDPR for European clients, HIPAA for healthcare applications, and industry-specific regulations. This security-first approach ensures that SyncOps can serve clients in regulated industries and maintain the trust that global enterprises require.
              </p>
              <p className="text-lg">
                Technical transparency and documentation enable clients to understand how systems are built, how they operate, and how they can be maintained and extended. This includes comprehensive technical documentation, clear explanations of architectural decisions, and accessible communication about technical capabilities and limitations. This transparency builds trust with technical stakeholders at client organizations and enables informed decision-making about technology investments.
              </p>
              <p className="text-lg">
                Long-term system reliability means designing systems that continue to operate effectively as they age, as requirements change, and as usage patterns evolve. This involves building systems with proper error handling, monitoring, and maintenance capabilities. It also means designing architectures that can evolve without requiring complete rewrites, enabling systems to adapt to new requirements while maintaining reliability. This focus on long-term reliability ensures that SyncOps delivers technology solutions that provide sustained value over time.
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
                As Chief Technology Officer, Rimsha Imran ensures that SyncOps Tech maintains the engineering discipline, technical excellence, and system thinking needed to deliver enterprise-grade AI solutions to global markets. The focus on clean architecture, scalable systems, and long-term reliability positions SyncOps as a technology company that enterprises can trust with their most critical technology needs.
              </p>
              <p className="text-lg">
                The commitment to building AI systems that are scalable, secure, and maintainable, combined with expertise in SaaS architecture, automation platforms, and enterprise-grade delivery, enables SyncOps to serve clients who require sophisticated technology solutions that perform reliably in production. This technical leadership ensures that SyncOps can compete effectively in global markets while maintaining the quality and discipline that define the company's engineering culture.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <SafeLink
                href="/contact"
                className="inline-flex items-center gap-2 text-[#00B894] hover:text-[#00C4FF] transition-colors duration-300 font-semibold"
              >
                Discuss Your Technology Needs
                <ArrowRight className="w-4 h-4" />
              </SafeLink>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default RimshaImranProfile;

