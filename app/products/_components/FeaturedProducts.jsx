"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, stagger, springSoft, viewport } from '../../../lib/motionConfig';
import SafeLink from '../../components/ui/SafeLink';
import { ArrowRight, Zap, RefreshCw, Shield, CheckCircle2, TrendingUp, Clock, Star, Sparkles, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import Image from 'next/image';

const products = [
  {
    title: 'Warehouse SyncOps',
    tagline: 'AI-Powered Warehouse Management',
    description: 'Enterprise-grade warehouse visualization dashboard with AI-powered slotting and risk detection.',
    href: '/products/warehouse-syncops',
    image: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017879/warehouse-syncops_unrbn6.png',
    color: 'from-[#00B894] to-[#00C4FF]',
    icon: Zap,
    features: [
      'Real-time warehouse visualization',
      'AI-powered slotting optimization',
      'Bin and SKU mapping',
      'Flow monitoring & analytics',
      'Risk detection & alerts'
    ],
    stats: [
      { label: 'Efficiency', value: '85%', icon: TrendingUp },
      { label: 'Accuracy', value: '99%', icon: CheckCircle2 },
      { label: 'Rating', value: '9.5/10', icon: Star }
    ],
    badge: 'Enterprise'
  },
  {
    title: 'SyncPeople',
    tagline: 'AI-Powered HR Management',
    description: 'Complete HR management platform with AI automation, payroll, attendance, and analytics.',
    href: '/products/syncpeople',
    image: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017877/syncpeople-syncops_lmx6iw.png',
    color: 'from-[#00C4FF] to-[#00B894]',
    icon: RefreshCw,
    features: [
      'AI-powered automation',
      'Payroll & attendance management',
      'Real-time HR analytics',
      'Role-based dashboards',
      'Employee self-service portal'
    ],
    stats: [
      { label: 'Time Saved', value: '70%', icon: Clock },
      { label: 'Accuracy', value: '99%', icon: CheckCircle2 },
      { label: 'Users', value: '10K+', icon: TrendingUp }
    ],
    badge: 'HR Solution'
  },
  {
    title: 'MedMindi',
    tagline: 'Healthcare Management Platform',
    description: 'Comprehensive healthcare management system with patient records and appointment scheduling.',
    href: '/products/medmindi',
    image: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017877/medmindi-syncops_uwmk7t.png',
    color: 'from-[#00B894] to-[#00C4FF]',
    icon: Shield,
    features: [
      'Patient record management',
      'Appointment scheduling',
      'Medical history tracking',
      'HIPAA compliant',
      'Multi-clinic support'
    ],
    stats: [
      { label: 'Compliance', value: '100%', icon: Shield },
      { label: 'Patients', value: '50K+', icon: TrendingUp },
      { label: 'Uptime', value: '99.9%', icon: CheckCircle2 }
    ],
    badge: 'Healthcare'
  },
  {
    title: 'SyncIQ',
    tagline: 'AI-Powered Operational Intelligence',
    description: 'Advanced operational intelligence platform with AI audit automation and risk analytics.',
    href: '/products/synciq',
    image: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017876/syncIq-syncops_ef24ou.png',
    color: 'from-[#00C4FF] to-[#00B894]',
    icon: Zap,
    features: [
      'AI audit automation',
      'Real-time risk analytics',
      'Multi-tenant architecture',
      'Machine learning insights',
      'Compliance monitoring'
    ],
    stats: [
      { label: 'Automation', value: '85%', icon: TrendingUp },
      { label: 'Speed', value: '10x', icon: Zap },
      { label: 'Rating', value: '9.8/10', icon: Star }
    ],
    badge: 'Intelligence'
  },
  {
    title: 'GeoPluse',
    tagline: 'Location Intelligence Platform',
    description: 'Advanced geospatial analytics and location-based services platform.',
    href: '/products/geopluse',
    image: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017876/geopluse-syncops_v05qbs.png',
    color: 'from-[#00B894] to-[#00C4FF]',
    icon: RefreshCw,
    features: [
      'Geospatial analytics',
      'Location-based services',
      'Real-time mapping',
      'Route optimization',
      'Territory management'
    ],
    stats: [
      { label: 'Coverage', value: 'Global', icon: TrendingUp },
      { label: 'Accuracy', value: '99%', icon: CheckCircle2 },
      { label: 'Speed', value: '<1s', icon: Zap }
    ],
    badge: 'Location AI'
  },
  {
    title: 'FitResume',
    tagline: 'AI Resume Builder',
    description: 'Intelligent resume builder with AI-powered optimization and ATS compatibility.',
    href: '/products/fitresume',
    image: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017875/fitresume-syncops_on9rzq.png',
    color: 'from-[#00C4FF] to-[#00B894]',
    icon: Sparkles,
    features: [
      'AI-powered optimization',
      'ATS compatibility',
      'Multiple templates',
      'Real-time suggestions',
      'Export to PDF/Word'
    ],
    stats: [
      { label: 'Success Rate', value: '90%', icon: TrendingUp },
      { label: 'Templates', value: '50+', icon: Sparkles },
      { label: 'Users', value: '100K+', icon: Star }
    ],
    badge: 'Career Tool'
  },
  {
    title: 'StudyMate',
    tagline: 'AI-Powered Homework Help',
    description: 'AI-powered educational platform providing step-by-step homework solutions and learning support.',
    href: '/products/studymate',
    image: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017875/studymate-syncops_mvrfxc.png',
    color: 'from-[#00B894] to-[#00C4FF]',
    icon: Star,
    features: [
      'Step-by-step solutions',
      '24/7 AI assistance',
      'Multi-subject support',
      'Interactive learning',
      'Personalized tutoring'
    ],
    stats: [
      { label: 'Students', value: '500K+', icon: TrendingUp },
      { label: 'Subjects', value: '50+', icon: Sparkles },
      { label: 'Rating', value: '9.7/10', icon: Star }
    ],
    badge: 'Education'
  },
  {
    title: 'SmartProperty',
    tagline: 'AI Real Estate Intelligence',
    description: 'AI-powered real estate platform with property valuation, blockchain verification, and smart recommendations.',
    href: '/products/smartproperty',
    image: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017874/smartproperty-syncops_comso4.png',
    color: 'from-[#00C4FF] to-[#00B894]',
    icon: Shield,
    features: [
      'AI property valuation',
      'Blockchain verification',
      'Smart recommendations',
      'Market analytics',
      'Virtual property tours'
    ],
    stats: [
      { label: 'Properties', value: '1M+', icon: TrendingUp },
      { label: 'Accuracy', value: '95%', icon: CheckCircle2 },
      { label: 'Speed', value: '<5s', icon: Zap }
    ],
    badge: 'Real Estate'
  }
];

export default function FeaturedProducts() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories from products
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(products.map(p => p.badge))];
    return cats;
  }, []);

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return products;
    return products.filter(p => p.badge === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-6" id="products">
      <motion.div className="text-center mb-12" initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.06)}>
        <motion.h2 className="text-display-sm font-bold text-gray-900 mb-6" variants={fadeUp(16)}>
          Featured <span className="gradient-text">Products</span>
        </motion.h2>
        <motion.p className="text-body-xl text-gray-600 max-w-3xl mx-auto mb-8" variants={fadeUp(20)}>
          Production-ready modules you can adopt today—built and refined with real client workloads.
        </motion.p>
        
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
          variants={fadeUp(24)}
        >
          <Filter className="w-5 h-5 text-gray-500" aria-hidden="true" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label={`Filter by ${category}`}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((p, i) => {
          const IconComponent = p.icon;
          const isExpanded = expandedCard === p.title;

          return (
            <motion.div
              key={p.title}
              className="group card relative overflow-hidden"
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              variants={fadeUp(16 + i * 2)}
              transition={springSoft}
            >
              {/* Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${p.color} text-white text-xs font-semibold rounded-full shadow-lg z-10`}>
                {p.badge}
              </div>

              <div className="p-8 h-full flex flex-col">
                <div className="w-full h-48 bg-white rounded-2xl mb-5 shadow-lg group-hover:shadow-xl border border-gray-200 group-hover:border-brand-teal/30 transition-all duration-300 overflow-hidden relative">
                  {p.image ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={p.image}
                        alt={`${p.title} - ${p.tagline}`}
                        fill
                        className="object-contain p-4"
                        priority={i < 4}
                        quality={95}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                      <IconComponent size={32} className="text-white" aria-hidden="true" />
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-teal transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3 font-medium">{p.tagline}</p>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{p.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
                  {p.stats.map((stat, idx) => {
                    const StatIcon = stat.icon;
                    return (
                      <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                        <StatIcon className="w-3 h-3 sm:w-4 sm:h-4 text-brand-teal mx-auto mb-1" aria-hidden="true" />
                        <div className="text-[10px] sm:text-xs font-bold text-gray-900 break-words">{stat.value}</div>
                        <div className="text-[9px] sm:text-[10px] text-gray-500 leading-tight">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Expandable Features */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mb-6"
                    >
                      <div className="pt-4 border-t border-gray-200">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {p.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" aria-hidden="true" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Actions */}
                <div className="flex flex-col gap-3 mt-auto">
                  <button
                    onClick={() => setExpandedCard(isExpanded ? null : p.title)}
                    className="text-sm text-brand-teal font-medium hover:text-brand-aqua transition-colors duration-300 text-left flex items-center gap-1"
                    aria-expanded={isExpanded}
                    aria-label={isExpanded ? `Collapse ${p.title} details` : `Expand ${p.title} details`}
                  >
                    {isExpanded ? 'Show Less' : 'View Features'}
                    <ArrowRight 
                      className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  <SafeLink 
                    href={p.href} 
                    className="inline-flex items-center justify-center text-brand-teal font-semibold group-hover:text-brand-aqua transition-colors duration-300 bg-brand-teal/5 hover:bg-brand-teal/10 rounded-lg py-2 px-4"
                    aria-label={`Learn more about ${p.title}`}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                  </SafeLink>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <motion.div
          className="text-center py-16"
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={fadeUp(20)}
        >
          <p className="text-gray-500 text-lg">No products found in this category.</p>
          <button
            onClick={() => setSelectedCategory('All')}
            className="mt-4 text-brand-teal hover:text-brand-aqua font-medium transition-colors"
          >
            Show all products
          </button>
        </motion.div>
      )}

      {/* Product Count */}
      <motion.div
        className="text-center mt-12 text-gray-600 text-sm"
        initial="initial"
        whileInView="animate"
        viewport={viewport}
        variants={fadeUp(20)}
      >
        Showing {filteredProducts.length} of {products.length} products
      </motion.div>
    </div>
  );
}


