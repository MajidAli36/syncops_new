"use client";
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../../../lib/motionConfig';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    quote: "Warehouse SyncOps transformed our logistics operations. The AI-powered slotting optimization increased our efficiency by 85% and the real-time visualization helps us make data-driven decisions instantly.",
    author: "David Tan",
    role: "Operations Director, LogisticsPro",
    rating: 5,
    product: "Warehouse SyncOps"
  },
  {
    quote: "SyncPeople has revolutionized our HR department. The AI automation saved us 70% of our time on payroll and attendance, and the analytics dashboard gives us insights we never had before.",
    author: "Sarah Chen",
    role: "HR Director, TechCorp",
    rating: 5,
    product: "SyncPeople"
  },
  {
    quote: "MedMindi streamlined our entire healthcare practice. Patient record management is seamless, appointment scheduling is automated, and HIPAA compliance is built-in. Our staff productivity increased by 60%.",
    author: "Dr. Emily Watson",
    role: "Medical Director, HealthCare Plus",
    rating: 5,
    product: "MedMindi"
  },
  {
    quote: "SyncIQ's AI audit automation reduced our compliance workload by 85%. The real-time risk analytics help us identify issues before they become problems. This platform is exactly what modern operations need.",
    author: "Michael Rodriguez",
    role: "VP Operations, Enterprise Solutions",
    rating: 5,
    product: "SyncIQ"
  },
  {
    quote: "GeoPluse's location intelligence has been game-changing for our logistics network. Real-time mapping and route optimization have reduced delivery times by 30% and improved customer satisfaction significantly.",
    author: "James Wilson",
    role: "Logistics Manager, Global Shipping Co.",
    rating: 5,
    product: "GeoPluse"
  },
  {
    quote: "FitResume helped me land my dream job! The AI optimization made my resume ATS-compatible and the suggestions were spot-on. I got 3 interviews within a week of using it.",
    author: "Alexandra Martinez",
    role: "Software Engineer",
    rating: 5,
    product: "FitResume"
  },
  {
    quote: "StudyMate has been a lifesaver for my kids. The step-by-step solutions actually teach concepts instead of just giving answers. My daughter's grades improved from B's to A's in just one semester.",
    author: "Jennifer Lee",
    role: "Parent & Educator",
    rating: 5,
    product: "StudyMate"
  },
  {
    quote: "SmartProperty's AI valuation tool is incredibly accurate. We found our perfect home using their smart recommendations, and the blockchain verification gave us complete confidence in the transaction.",
    author: "Robert Kim",
    role: "Real Estate Investor",
    rating: 5,
    product: "SmartProperty"
  }
];

const customerLogos = [
  { name: "TechStart Inc.", industry: "SaaS" },
  { name: "DataCorp", industry: "Enterprise" },
  { name: "SecureCloud", industry: "Security" },
  { name: "InnovateLabs", industry: "Startup" },
  { name: "ScaleUp", industry: "Growth" }
];

export default function ProductSocialProof() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.06)}>
        <motion.h2 className="text-display-sm font-bold text-gray-900 mb-6" variants={fadeUp(16)}>
          Trusted by <span className="gradient-text">Industry Leaders</span>
        </motion.h2>
        <motion.p className="text-body-xl text-gray-600 max-w-3xl mx-auto" variants={fadeUp(20)}>
          See how teams are using our products to accelerate their growth and streamline operations.
        </motion.p>
      </motion.div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-glow transition-all duration-300"
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            variants={fadeUp(16 + i * 2)}
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, idx) => (
                <Star key={idx} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
            </div>
            <Quote className="w-8 h-8 text-brand-teal/30 mb-4" aria-hidden="true" />
            <p className="text-gray-700 mb-6 leading-relaxed italic">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-aqua/20 to-brand-teal/20 rounded-full flex items-center justify-center">
                <span className="text-brand-teal font-bold text-lg">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
                <div className="text-xs text-brand-teal font-medium mt-1">{testimonial.product}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Customer Logos & Stats */}
      <motion.div
        className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
        initial="initial"
        whileInView="animate"
        viewport={viewport}
        variants={fadeUp(20)}
      >
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted by 500+ Companies</h3>
          <p className="text-gray-600 text-sm">From startups to Fortune 500 enterprises</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          {customerLogos.map((customer, i) => (
            <motion.div
              key={i}
              className="text-center p-4 bg-white rounded-xl border border-gray-200 hover:border-brand-teal/30 transition-all duration-300"
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              variants={fadeUp(10 + i * 2)}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-brand-aqua/20 to-brand-teal/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-6 h-6 text-brand-teal" aria-hidden="true" />
              </div>
              <div className="font-semibold text-gray-900 text-sm">{customer.name}</div>
              <div className="text-xs text-gray-500">{customer.industry}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

