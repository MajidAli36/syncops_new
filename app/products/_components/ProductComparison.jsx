"use client";
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../../../lib/motionConfig';
import { Check, Zap, RefreshCw, Shield, Clock, Server, ShieldCheck, TrendingUp, Code, Database, Lock, AlertCircle } from 'lucide-react';

const rows = [
  { 
    feature: 'Setup Time', 
    warehouse: '3-5 days', 
    syncpeople: '2-4 days', 
    medmindi: '4-6 days',
    synciq: '5-7 days',
    geopluse: '3-5 days',
    fitresume: '1-2 days',
    studymate: '2-3 days',
    smartproperty: '4-6 days',
    icon: Clock,
    description: 'Time to get up and running'
  },
  { 
    feature: 'AI-Powered', 
    warehouse: 'Yes', 
    syncpeople: 'Yes', 
    medmindi: 'Partial',
    synciq: 'Yes',
    geopluse: 'Yes',
    fitresume: 'Yes',
    studymate: 'Yes',
    smartproperty: 'Yes',
    icon: Zap,
    description: 'Artificial intelligence capabilities'
  },
  { 
    feature: 'API Access', 
    warehouse: 'Full', 
    syncpeople: 'Full', 
    medmindi: 'Full',
    synciq: 'Full',
    geopluse: 'Full',
    fitresume: 'Limited',
    studymate: 'Limited',
    smartproperty: 'Full',
    icon: Code,
    description: 'RESTful APIs and webhooks'
  },
  { 
    feature: 'Real-time Updates', 
    warehouse: 'Yes', 
    syncpeople: 'Yes', 
    medmindi: 'Yes',
    synciq: 'Yes',
    geopluse: 'Yes',
    fitresume: 'No',
    studymate: 'Yes',
    smartproperty: 'Yes',
    icon: RefreshCw,
    description: 'Live data synchronization'
  },
  { 
    feature: 'Security & Compliance', 
    warehouse: 'Enterprise', 
    syncpeople: 'SOC2', 
    medmindi: 'HIPAA',
    synciq: 'SOC2',
    geopluse: 'Enterprise',
    fitresume: 'Standard',
    studymate: 'COPPA',
    smartproperty: 'GDPR',
    icon: ShieldCheck,
    description: 'Security and compliance standards'
  },
  { 
    feature: 'SLA Guarantee', 
    warehouse: '99.9%', 
    syncpeople: '99.8%', 
    medmindi: '99.95%',
    synciq: '99.9%',
    geopluse: '99.8%',
    fitresume: '99.5%',
    studymate: '99.7%',
    smartproperty: '99.9%',
    icon: TrendingUp,
    description: 'Uptime service level agreement'
  },
  { 
    feature: 'Data Encryption', 
    warehouse: 'End-to-end', 
    syncpeople: 'At rest & transit', 
    medmindi: 'End-to-end',
    synciq: 'Zero-trust',
    geopluse: 'At rest & transit',
    fitresume: 'At rest',
    studymate: 'At rest & transit',
    smartproperty: 'Blockchain',
    icon: Lock,
    description: 'Security encryption standards'
  },
  { 
    feature: 'Mobile Support', 
    warehouse: 'Web & Mobile', 
    syncpeople: 'Web & Mobile', 
    medmindi: 'Web & Mobile',
    synciq: 'Web & Mobile',
    geopluse: 'Web & Mobile',
    fitresume: 'Web',
    studymate: 'Web & Mobile',
    smartproperty: 'Web & Mobile',
    icon: Database,
    description: 'Platform availability'
  }
];

const productHighlights = {
  warehouse: {
    icon: Zap,
    color: 'from-[#00B894] to-[#00C4FF]',
    strength: 'Best for warehouse operations'
  },
  syncpeople: {
    icon: RefreshCw,
    color: 'from-[#00C4FF] to-[#00B894]',
    strength: 'Best for HR management'
  },
  medmindi: {
    icon: Shield,
    color: 'from-[#00B894] to-[#00C4FF]',
    strength: 'Best for healthcare'
  }
};

export default function ProductComparison() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div className="text-center mb-12" initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.06)}>
        <motion.h2 className="text-display-sm font-bold text-white mb-4" variants={fadeUp(16)}>
          Compare <span className="gradient-text">At a Glance</span>
        </motion.h2>
        <motion.p className="text-body-xl text-gray-300 max-w-3xl mx-auto" variants={fadeUp(20)}>
          Key capabilities across our product lineup. Choose the right solution for your needs.
        </motion.p>
      </motion.div>

      {/* Product Highlights */}
      <motion.div 
        className="grid md:grid-cols-3 gap-6 mb-10" 
        initial="initial" 
        whileInView="animate" 
        viewport={viewport} 
        variants={stagger.container(0.08)}
      >
        {Object.entries(productHighlights).map(([key, highlight]) => {
          const IconComponent = highlight.icon;
          const productName = key === 'warehouse' ? 'Warehouse SyncOps' : key === 'syncpeople' ? 'SyncPeople' : 'MedMindi';
          return (
            <motion.div
              key={key}
              variants={fadeUp(20)}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-brand-teal/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${highlight.color} rounded-lg flex items-center justify-center mb-4`}>
                <IconComponent className="text-white w-6 h-6" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{productName}</h3>
              <p className="text-gray-400 text-sm">{highlight.strength}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Enhanced Comparison Table */}
      <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm -mx-6 px-6 md:mx-0 md:px-0">
        <div className="min-w-[900px] md:min-w-full">
          <table className="w-full text-xs md:text-sm" role="table" aria-label="Product comparison table">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-4 px-4 text-left font-semibold text-white sticky left-0 bg-brand-navy/95 backdrop-blur-sm z-10">
                <span className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" aria-hidden="true" />
                  Feature
                </span>
              </th>
              <th className="py-4 px-3 text-center font-semibold text-white text-xs">
                <div className="flex flex-col items-center gap-1">
                  <Zap className="w-4 h-4 text-brand-aqua" aria-hidden="true" />
                  <span className="leading-tight">Warehouse</span>
                </div>
              </th>
              <th className="py-4 px-3 text-center font-semibold text-white text-xs">
                <div className="flex flex-col items-center gap-1">
                  <RefreshCw className="w-4 h-4 text-brand-teal" aria-hidden="true" />
                  <span className="leading-tight">SyncPeople</span>
                </div>
              </th>
              <th className="py-4 px-3 text-center font-semibold text-white text-xs">
                <div className="flex flex-col items-center gap-1">
                  <Shield className="w-4 h-4 text-brand-aqua" aria-hidden="true" />
                  <span className="leading-tight">MedMindi</span>
                </div>
              </th>
              <th className="py-4 px-3 text-center font-semibold text-white text-xs">
                <div className="flex flex-col items-center gap-1">
                  <Zap className="w-4 h-4 text-brand-teal" aria-hidden="true" />
                  <span className="leading-tight">SyncIQ</span>
                </div>
              </th>
              <th className="py-4 px-3 text-center font-semibold text-white text-xs">
                <div className="flex flex-col items-center gap-1">
                  <RefreshCw className="w-4 h-4 text-brand-aqua" aria-hidden="true" />
                  <span className="leading-tight">GeoPluse</span>
                </div>
              </th>
              <th className="py-4 px-3 text-center font-semibold text-white text-xs">
                <div className="flex flex-col items-center gap-1">
                  <Shield className="w-4 h-4 text-brand-teal" aria-hidden="true" />
                  <span className="leading-tight">FitResume</span>
                </div>
              </th>
              <th className="py-4 px-3 text-center font-semibold text-white text-xs">
                <div className="flex flex-col items-center gap-1">
                  <Zap className="w-4 h-4 text-brand-aqua" aria-hidden="true" />
                  <span className="leading-tight">StudyMate</span>
                </div>
              </th>
              <th className="py-4 px-3 text-center font-semibold text-white text-xs">
                <div className="flex flex-col items-center gap-1">
                  <Shield className="w-4 h-4 text-brand-teal" aria-hidden="true" />
                  <span className="leading-tight">SmartProperty</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, index) => {
              const IconComponent = r.icon;
              return (
                <motion.tr 
                  key={r.feature} 
                  className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200"
                  initial="initial"
                  whileInView="animate"
                  viewport={viewport}
                  variants={fadeUp(10 + index * 2)}
                >
                  <td className="py-4 px-4 text-gray-200 sticky left-0 bg-brand-navy/95 backdrop-blur-sm z-10">
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-4 h-4 text-brand-teal flex-shrink-0" aria-hidden="true" />
                      <div>
                        <div className="font-medium text-sm">{r.feature}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{r.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-3 text-center text-gray-200 text-xs">
                    <span className="inline-flex items-center gap-1">
                      <Check className="w-3 h-3 text-brand-aqua" aria-hidden="true" />
                      {r.warehouse}
                    </span>
                  </td>
                  <td className="py-4 px-3 text-center text-gray-200 text-xs">
                    <span className="inline-flex items-center gap-1">
                      <Check className="w-3 h-3 text-brand-teal" aria-hidden="true" />
                      {r.syncpeople}
                    </span>
                  </td>
                  <td className="py-4 px-3 text-center text-gray-200 text-xs">
                    <span className="inline-flex items-center gap-1">
                      <Check className="w-3 h-3 text-brand-aqua" aria-hidden="true" />
                      {r.medmindi}
                    </span>
                  </td>
                  <td className="py-4 px-3 text-center text-gray-200 text-xs">
                    <span className="inline-flex items-center gap-1">
                      <Check className="w-3 h-3 text-brand-teal" aria-hidden="true" />
                      {r.synciq}
                    </span>
                  </td>
                  <td className="py-4 px-3 text-center text-gray-200 text-xs">
                    <span className="inline-flex items-center gap-1">
                      <Check className="w-3 h-3 text-brand-aqua" aria-hidden="true" />
                      {r.geopluse}
                    </span>
                  </td>
                  <td className="py-4 px-3 text-center text-gray-200 text-xs">
                    <span className="inline-flex items-center gap-1">
                      <Check className="w-3 h-3 text-brand-teal" aria-hidden="true" />
                      {r.fitresume}
                    </span>
                  </td>
                  <td className="py-4 px-3 text-center text-gray-200 text-xs">
                    <span className="inline-flex items-center gap-1">
                      <Check className="w-3 h-3 text-brand-aqua" aria-hidden="true" />
                      {r.studymate}
                    </span>
                  </td>
                  <td className="py-4 px-3 text-center text-gray-200 text-xs">
                    <span className="inline-flex items-center gap-1">
                      <Check className="w-3 h-3 text-brand-teal" aria-hidden="true" />
                      {r.smartproperty}
                    </span>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>

      {/* Mobile-friendly note */}
      <motion.p 
        className="text-center text-gray-400 text-sm mt-6 md:hidden"
        initial="initial"
        whileInView="animate"
        viewport={viewport}
        variants={fadeUp(20)}
      >
        Scroll horizontally to view all features
      </motion.p>
    </div>
  );
}


