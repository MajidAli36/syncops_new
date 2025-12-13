"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../../../lib/motionConfig';
import SafeLink from '../../components/ui/SafeLink';
import { FaRocket, FaCheckCircle, FaChartLine } from 'react-icons/fa';

const benefits = [
  "Free AI Readiness Assessment",
  "Custom Solution Proposal",
  "No Commitment Required",
  "Expert AI Consultation"
];

// Floating Dots Component (small, lightweight)
const FloatingDots = ({ count = 12 }) => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
    }));
    setDots(generated);
  }, [count]);

  if (!dots.length) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-gradient-to-r from-brand-aqua/40 to-brand-teal/40"
          style={{ left: `${dot.x}%`, top: `${dot.y}%`, width: `${dot.size}px`, height: `${dot.size}px` }}
          animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
          transition={{ duration: dot.duration, repeat: Infinity, delay: dot.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

export default function AICTA() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section className="relative overflow-hidden py-20 px-6" aria-label="Call to action section">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f7fafb] via-[#f3f9fb] to-[#ffffff]" aria-hidden="true" />
      {/* soft big blur shapes */}
      <motion.div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-brand-aqua to-brand-teal rounded-full filter blur-3xl opacity-10" animate={{ y: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity }} />
      <motion.div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-brand-teal to-brand-aqua rounded-full filter blur-3xl opacity-10" animate={{ y: [0, 8, 0] }} transition={{ duration: 9, repeat: Infinity }} />
      {/* subtle rotating gradient in center */}
      <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[240px] bg-gradient-to-r from-brand-aqua/5 to-brand-teal/5 rounded-full filter blur-3xl" style={{ y }} animate={{ rotate: [0, 360] }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} />
      <FloatingDots />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div {...stagger.container(0.06)}>
        <motion.h2 className="text-display-sm font-bold text-gray-900 mb-6" variants={fadeUp(16)}>
          Ready to Transform Your Business with <span className="gradient-text">AI</span>?
        </motion.h2>
        
        <motion.p className="text-body-xl text-gray-600 mb-8 max-w-2xl mx-auto" variants={fadeUp(20)}>
          Schedule a free consultation and discover how AI can drive measurable results for your organization.
        </motion.p>

        {/* Benefits List */}
        <motion.div className="grid sm:grid-cols-2 gap-4 mb-10" variants={fadeUp(22)} role="list">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center gap-2 px-4 py-2 glass rounded-full text-sm text-gray-700"
              variants={fadeUp(16)}
              role="listitem"
            >
              <FaCheckCircle className="w-4 h-4 text-brand-aqua" aria-hidden="true" />
              {benefit}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row justify-center gap-6" variants={fadeUp(24)}>
          <motion.div whileHover={{ scale: 1.03, y: -3 }} transition={{ duration: 0.28 }}>
            <SafeLink href="/contact" aria-label="Book free consultation">
              <div className="btn-primary inline-flex items-center justify-center text-lg px-10 py-5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-aqua/20 to-brand-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <FaRocket className="w-5 h-5 mr-2" aria-hidden="true" />
                <span>Book Free Consultation</span>
              </div>
            </SafeLink>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03, y: -3 }} transition={{ duration: 0.28 }}>
            <SafeLink href="/case-studies" aria-label="See our work">
              <div className="btn-secondary inline-flex items-center justify-center text-lg px-10 py-5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/10 to-brand-aqua/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <FaChartLine className="w-5 h-5 mr-2" aria-hidden="true" />
                <span>See Our Work</span>
              </div>
            </SafeLink>
          </motion.div>
        </motion.div>

        <motion.p className="text-sm text-gray-500 mt-6" variants={fadeUp(26)}>
          No credit card required • Response within 24 hours
        </motion.p>
      </motion.div>
      </div>
    </section>
  );
}
