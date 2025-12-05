"use client";
import { motion } from 'framer-motion';
import { fadeUp, stagger, springSoft } from '../../../lib/motionConfig';
import SafeLink from '../../components/ui/SafeLink';
import { FaRocket, FaBoxOpen, FaStar, FaShieldAlt } from 'react-icons/fa';
import { Briefcase } from 'lucide-react';

const trustChips = [
  { icon: <FaStar className="text-brand-aqua" aria-hidden="true" />, text: "Battle-tested components", ariaLabel: "Battle-tested components" },
  { icon: <FaShieldAlt className="text-brand-teal" aria-hidden="true" />, text: "Enterprise-grade security", ariaLabel: "Enterprise-grade security" },
];

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden" aria-label="Products hero section">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-gray-900" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" aria-hidden="true"></div>

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-brand-aqua/20 via-brand-teal/10 to-transparent rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 lg:py-12">
        <motion.div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center" {...stagger.container(0.08)}>
          <div className="text-white">
            <motion.h1 className="text-display font-bold leading-tight mb-6 text-balance" variants={fadeUp(20)}>
              Productized <span className="gradient-text">SaaS Building Blocks</span>
            </motion.h1>
            <motion.p className="text-body-xl text-gray-300 mb-8 max-w-2xl leading-relaxed" variants={fadeUp(24)}>
              Launch faster with our prebuilt modules for workflows, data sync, and cloud security—designed to integrate seamlessly.
            </motion.p>

            <motion.div className="mb-8" variants={fadeUp(28)}>
              {/* Primary CTA - Large and Prominent */}
              <div className="mb-4">
                <SafeLink 
                  href="#products" 
                  className="btn-primary inline-flex items-center justify-center w-full sm:w-auto focus-visible:ring-4 focus-visible:ring-brand-teal/50 focus-visible:outline-none group"
                  aria-label="Explore our products"
                >
                  <FaBoxOpen className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
                  Explore Products
                </SafeLink>
              </div>
              
              {/* Secondary CTAs - Compact and Grouped */}
              <div className="flex flex-col sm:flex-row gap-3">
                <SafeLink 
                  href="/contact" 
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-brand-teal/50 transition-all duration-300 hover:scale-[1.02] focus-visible:ring-4 focus-visible:ring-brand-teal/50 focus-visible:outline-none group"
                  aria-label="Schedule a product demo"
                >
                  <FaRocket className="w-4 h-4 mr-2 group-hover:translate-y-[-2px] transition-transform duration-300" aria-hidden="true" />
                  Get a Demo
                </SafeLink>
                <SafeLink 
                  href="/case-studies" 
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-brand-teal/50 transition-all duration-300 hover:scale-[1.02] focus-visible:ring-4 focus-visible:ring-brand-teal/50 focus-visible:outline-none group"
                  aria-label="View our case studies"
                >
                  <Briefcase className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  Case Studies
                </SafeLink>
              </div>
            </motion.div>

            <motion.div className="flex flex-wrap gap-3" {...stagger.container(0.06)} role="list">
              {trustChips.map((chip, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeUp(16)} 
                  className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-gray-200 border border-white/20"
                  role="listitem"
                  aria-label={chip.ariaLabel}
                >
                  <span className="text-base" aria-hidden="true">{chip.icon}</span>
                  {chip.text}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div className="relative" variants={fadeUp(20)} transition={springSoft}>
            <div className="glass-dark rounded-3xl p-8 border border-white/10 shadow-2xl" aria-label="Production-ready modules showcase">
              <div className="w-full h-64 bg-gradient-to-br from-brand-aqua/20 to-brand-teal/20 rounded-2xl flex items-center justify-center" aria-hidden="true">
                <FaBoxOpen className="text-brand-aqua w-16 h-16" aria-hidden="true" />
              </div>
              <div className="text-center mt-4">
                <p className="text-white text-sm font-medium">Production-ready modules</p>
                <p className="text-gray-400 text-xs mt-1">Plug-and-play, scalable, secure</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
