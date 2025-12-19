"use client";

import { motion } from "framer-motion";
import { Cookie, Settings, Shield, Eye, BarChart, Mail, Calendar } from "lucide-react";
import { fadeUp } from "../../../lib/motionConfig";

const CookiePolicyContent = () => {
  return (
    <>
      {/* Hero Section - Dark */}
      <section className="relative overflow-hidden bg-[#0B0A1C] text-white py-20 lg:py-24 border-b border-white/5">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5 opacity-30"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#00C4FF] to-[#00B894] rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-full flex items-center justify-center border border-[#00B894]/30">
                <Cookie className="w-10 h-10 text-[#00B894]" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Cookie </span>
              <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-lg text-gray-400">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction - White */}
      <section className="bg-gradient-to-br from-[#FAFAFF] to-white py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            {...fadeUp(0)}
          >
            <p className="text-gray-700 leading-relaxed text-lg">
              At <span className="font-semibold text-gray-900">SyncOps</span> ("we," "our," or "us"), we use cookies and similar tracking technologies to enhance your experience on our website <span className="text-[#00B894] font-semibold">syncops.tech</span>. This Cookie Policy explains what cookies are, how we use them, what types of cookies we use, and how you can manage your cookie preferences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections - Alternating Dark and Light */}
      <div className="space-y-0">
        {/* Section 1 - Dark */}
        <section className="bg-[#0B0A1C] text-white py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              {...fadeUp(0)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-lg flex items-center justify-center border border-[#00B894]/30">
                  <Cookie className="w-6 h-6 text-[#00B894]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  <span className="text-white">1. What Are </span>
                  <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">Cookies?</span>
                </h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies allow websites to remember your actions and preferences over a period of time, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.
                </p>
                <p className="leading-relaxed">
                  Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device for a set period or until you delete them, while session cookies are deleted when you close your browser. We use both types of cookies to provide you with a better browsing experience and to help us understand how you use our website.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2 - White */}
        <section className="bg-gradient-to-br from-white to-[#FAFAFF] py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              {...fadeUp(0)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00B894]/10 to-[#00C4FF]/10 rounded-lg flex items-center justify-center border border-[#00B894]/30">
                  <Settings className="w-6 h-6 text-[#00B894]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  <span>2. How We Use </span>
                  <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">Cookies</span>
                </h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  We use cookies for various purposes to improve your experience on our website:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-600">
                  <li><strong className="text-[#00B894]">Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be switched off. They are usually set in response to actions you take, such as setting privacy preferences or filling in forms.</li>
                  <li><strong className="text-[#00B894]">Performance Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the way our website works.</li>
                  <li><strong className="text-[#00B894]">Functionality Cookies:</strong> These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, personalized features.</li>
                  <li><strong className="text-[#00B894]">Targeting/Advertising Cookies:</strong> These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant content on other sites.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3 - Dark */}
        <section className="bg-[#0B0A1C] text-white py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              {...fadeUp(0)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-lg flex items-center justify-center border border-[#00B894]/30">
                  <BarChart className="w-6 h-6 text-[#00B894]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  <span className="text-white">3. Types of Cookies We </span>
                  <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">Use</span>
                </h2>
              </div>
              <div className="text-gray-300 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#00B894] mb-3">Essential Cookies</h3>
                  <p className="leading-relaxed mb-3">
                    These cookies are strictly necessary to provide you with services available through our website and to use some of its features. Without these cookies, services you have asked for cannot be provided.
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                    <li>Authentication and security cookies</li>
                    <li>Load balancing cookies</li>
                    <li>User interface customization cookies</li>
                  </ul>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h3 className="text-lg font-semibold text-[#00B894] mb-3">Analytics and Performance Cookies</h3>
                  <p className="leading-relaxed mb-3">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the way our website works.
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                    <li>Google Analytics cookies</li>
                    <li>Page view and navigation tracking</li>
                    <li>User behavior analysis</li>
                  </ul>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h3 className="text-lg font-semibold text-[#00B894] mb-3">Functionality Cookies</h3>
                  <p className="leading-relaxed mb-3">
                    These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                    <li>Language preference cookies</li>
                    <li>Region and location cookies</li>
                    <li>User preference and settings cookies</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4 - White */}
        <section className="bg-gradient-to-br from-[#FAFAFF] to-white py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              {...fadeUp(0)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00B894]/10 to-[#00C4FF]/10 rounded-lg flex items-center justify-center border border-[#00B894]/30">
                  <Eye className="w-6 h-6 text-[#00B894]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  <span>4. Third-Party </span>
                  <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">Cookies</span>
                </h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements, and so on. These third-party cookies may include:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-600">
                  <li><strong className="text-[#00B894]">Google Analytics:</strong> We use Google Analytics to understand how visitors use our website. Google Analytics uses cookies to collect information such as how often users visit our site, what pages they visit, and what other sites they used prior to coming to our site.</li>
                  <li><strong className="text-[#00B894]">Social Media Cookies:</strong> These cookies are used when you share information using a social media sharing button or "like" button on our website, or when you engage with our content on social media platforms.</li>
                  <li><strong className="text-[#00B894]">Advertising Cookies:</strong> These cookies may be used to deliver advertisements that are relevant to you and your interests, and to measure the effectiveness of advertising campaigns.</li>
                </ul>
                <p className="mt-4 leading-relaxed text-gray-600">
                  We do not control the setting of these third-party cookies, so we suggest you check the third-party websites for more information about their cookies and how to manage them.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 5 - Dark */}
        <section className="bg-[#0B0A1C] text-white py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              {...fadeUp(0)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-lg flex items-center justify-center border border-[#00B894]/30">
                  <Settings className="w-6 h-6 text-[#00B894]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  <span className="text-white">5. Managing Your Cookie </span>
                  <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">Preferences</span>
                </h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your browser settings. Most web browsers allow some control of most cookies through the browser settings.
                </p>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-[#00B894] mb-3">Browser Settings</h3>
                  <p className="leading-relaxed mb-3">
                    To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#00B894] hover:text-[#00C4FF] underline">www.allaboutcookies.org</a> or the help section of your browser.
                  </p>
                  <p className="leading-relaxed">
                    Please note that if you choose to disable cookies, some features of our website may not function properly, and your experience may be affected.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h3 className="text-lg font-semibold text-[#00B894] mb-3">Opt-Out Links</h3>
                  <p className="leading-relaxed mb-3">
                    You can opt out of certain third-party cookies by visiting the following links:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                    <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#00B894] hover:text-[#00C4FF] underline">Google Analytics Opt-out</a></li>
                    <li>Network Advertising Initiative: <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-[#00B894] hover:text-[#00C4FF] underline">NAI Opt-out</a></li>
                    <li>Digital Advertising Alliance: <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#00B894] hover:text-[#00C4FF] underline">DAA Opt-out</a></li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 6 - White */}
        <section className="bg-gradient-to-br from-white to-[#FAFAFF] py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              {...fadeUp(0)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00B894]/10 to-[#00C4FF]/10 rounded-lg flex items-center justify-center border border-[#00B894]/30">
                  <Shield className="w-6 h-6 text-[#00B894]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  <span>6. Cookie </span>
                  <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">Consent</span>
                </h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  When you first visit our website, you will be presented with a cookie consent banner that allows you to accept or reject non-essential cookies. You can change your cookie preferences at any time by accessing the cookie settings in your browser or by contacting us directly.
                </p>
                <p className="leading-relaxed">
                  By continuing to use our website after being presented with the cookie consent banner, you consent to our use of cookies in accordance with this Cookie Policy, unless you have disabled cookies in your browser settings.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sections 7-8 - Compact Dark Section */}
        <section className="bg-[#0B0A1C] text-white py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">
            <motion.div
              className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              {...fadeUp(0)}
            >
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-white">7. Updates to This Cookie </span>
                <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">Policy</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last Updated" date. Your continued use of our website after such changes constitutes acceptance of the updated policy.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              {...fadeUp(0)}
            >
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-white">8. More </span>
                <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">Information</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                For more information about our privacy practices, please review our <a href="/privacy-policy" className="text-[#00B894] hover:text-[#00C4FF] underline">Privacy Policy</a>. If you have any questions about this Cookie Policy or our use of cookies, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section - White with Gradient Accent */}
        <section className="bg-gradient-to-br from-white to-[#FAFAFF] py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              className="bg-gradient-to-br from-[#00B894]/10 to-[#00C4FF]/10 rounded-2xl p-8 border-2 border-[#00B894]/30 shadow-lg"
              {...fadeUp(0)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-lg flex items-center justify-center border border-[#00B894]/30">
                  <Mail className="w-6 h-6 text-[#00B894]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  <span>9. Contact </span>
                  <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">Us</span>
                </h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  If you have any questions, concerns, or requests regarding this Cookie Policy or our use of cookies, please contact us:
                </p>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 space-y-3 border border-gray-200">
                  <p className="text-gray-900 font-semibold text-lg">SyncOps</p>
                  <p className="text-gray-700">
                    <strong className="text-[#00B894]">Email:</strong>{" "}
                    <a href="mailto:info@syncops.tech" className="text-[#00B894] hover:text-[#00C4FF] transition-colors font-medium">
                      info@syncops.tech
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-[#00B894]">Phone:</strong>{" "}
                    <a href="tel:+923018678319" className="text-[#00B894] hover:text-[#00C4FF] transition-colors font-medium">
                      +92-301-8678-319
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-[#00B894]">Address:</strong> Mumtaz Market, GT Rd, opposite Chaseup Shopping Mall, Civil Lines, Gujranwala, 52250
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CookiePolicyContent;

