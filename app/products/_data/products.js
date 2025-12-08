// All Products Data
export const productsData = {
  'warehouse-syncops': {
    title: 'Warehouse SyncOps',
    tagline: 'AI-Powered Warehouse Management',
    description: 'Enterprise-grade warehouse visualization dashboard with AI-powered slotting and risk detection. Transform your warehouse operations with real-time visibility, intelligent optimization, and predictive analytics.',
    slug: 'warehouse-syncops',
    image: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017879/warehouse-syncops_unrbn6.png',
    color: 'from-[#00B894] to-[#00C4FF]',
    icon: 'Zap',
    badge: 'Enterprise',
    category: 'Warehouse & Logistics',
    demoLink: 'https://warehouse.syncops.tech/',
    features: [
      'Real-time warehouse visualization',
      'AI-powered slotting optimization',
      'Bin and SKU mapping',
      'Flow monitoring & analytics',
      'Risk detection & alerts',
      'Interactive warehouse map',
      'KPI heatmaps',
      'Pick rate monitoring',
      'Hourly activity tracking',
      'Predictive stockout alerts'
    ],
    stats: [
      { label: 'Efficiency', value: '85%', icon: 'TrendingUp' },
      { label: 'Accuracy', value: '99%', icon: 'CheckCircle2' },
      { label: 'Rating', value: '9.5/10', icon: 'Star' }
    ],
    useCases: [
      {
        title: 'Inventory Optimization',
        description: 'Reduce stockouts and overstock situations with AI-powered predictions and real-time monitoring.',
        icon: 'TrendingUp'
      },
      {
        title: 'Pick Path Optimization',
        description: 'Minimize pick times by up to 35% with intelligent slotting recommendations and flow analysis.',
        icon: 'Zap'
      },
      {
        title: 'Risk Management',
        description: 'Proactively identify and address warehouse risks before they impact operations.',
        icon: 'Shield'
      }
    ],
    integrations: [
      { name: 'WMS Systems', icon: 'Database' },
      { name: 'ERP Platforms', icon: 'Server' },
      { name: 'Shipping APIs', icon: 'Package' },
      { name: 'Inventory Systems', icon: 'Box' }
    ],
    pricing: {
      startingAt: 'Custom',
      description: 'Enterprise pricing based on warehouse size and requirements'
    },
    benefits: [
      'Real-time operational visibility',
      '35% reduction in pick times',
      '99.5% inventory accuracy',
      'Predictive risk detection',
      'AI-powered optimization',
      'Scalable architecture'
    ],
    technicalSpecs: {
      setupTime: '3-5 days',
      apiAccess: 'Full REST API',
      realTimeUpdates: true,
      security: 'Enterprise-grade',
      sla: '99.9% uptime',
      compliance: 'SOC 2 Type II'
    }
  },
  'syncpeople': {
    title: 'SyncPeople',
    tagline: 'AI-Powered HR Management',
    description: 'Complete HR management platform with AI automation, payroll, attendance, and analytics. Streamline workforce operations, reduce manual work by 70%, and empower your HR team with intelligent insights.',
    slug: 'syncpeople',
    image: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017877/syncpeople-syncops_lmx6iw.png',
    color: 'from-[#00C4FF] to-[#00B894]',
    icon: 'RefreshCw',
    badge: 'HR Solution',
    category: 'Human Resources',
    demoLink: 'https://hr.syncops.tech/',
    features: [
      'AI-powered automation',
      'Payroll & attendance management',
      'Real-time HR analytics',
      'Role-based dashboards',
      'Employee self-service portal',
      'Leave management',
      'Timesheet tracking',
      'Performance analytics',
      'Automated alerts',
      'Multi-tenant architecture'
    ],
    stats: [
      { label: 'Time Saved', value: '70%', icon: 'Clock' },
      { label: 'Accuracy', value: '99%', icon: 'CheckCircle2' },
      { label: 'Users', value: '10K+', icon: 'TrendingUp' }
    ],
    useCases: [
      {
        title: 'Payroll Automation',
        description: 'Automate payroll processing with AI-powered calculations and compliance checks.',
        icon: 'DollarSign'
      },
      {
        title: 'Attendance Tracking',
        description: 'Real-time attendance monitoring with automated alerts and analytics.',
        icon: 'Clock'
      },
      {
        title: 'HR Analytics',
        description: 'Gain insights into workforce trends, absenteeism patterns, and turnover risks.',
        icon: 'TrendingUp'
      }
    ],
    integrations: [
      { name: 'Payroll Systems', icon: 'DollarSign' },
      { name: 'Time Clocks', icon: 'Clock' },
      { name: 'Email Systems', icon: 'Mail' },
      { name: 'Calendar Apps', icon: 'Calendar' }
    ],
    pricing: {
      startingAt: '$99/month',
      description: 'Per employee pricing with volume discounts available'
    },
    benefits: [
      '70% reduction in manual HR work',
      '99% payroll accuracy',
      'Real-time workforce insights',
      'Automated compliance',
      'Employee self-service',
      'Scalable for any team size'
    ],
    technicalSpecs: {
      setupTime: '2-4 days',
      apiAccess: 'Full REST API',
      realTimeUpdates: true,
      security: 'SOC 2 Type II',
      sla: '99.9% uptime',
      compliance: 'GDPR, SOC 2'
    }
  },
  'medmindi': {
    title: 'MedMindi',
    tagline: 'Healthcare Management Platform',
    description: 'Comprehensive healthcare management system with patient records, appointment scheduling, and HIPAA-compliant workflows. Transform clinical operations with AI-powered documentation and seamless EMR integration.',
    slug: 'medmindi',
    image: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017877/medmindi-syncops_uwmk7t.png',
    color: 'from-[#00B894] to-[#00C4FF]',
    icon: 'Shield',
    badge: 'Healthcare',
    category: 'Healthcare',
    demoLink: 'https://medicalai.syncops.tech/',
    features: [
      'Patient record management',
      'Appointment scheduling',
      'Medical history tracking',
      'HIPAA compliant',
      'Multi-clinic support',
      'Voice-to-text charting',
      'ICD-10 code suggestions',
      'EMR integration',
      'Prescription management',
      'Clinical analytics'
    ],
    stats: [
      { label: 'Compliance', value: '100%', icon: 'Shield' },
      { label: 'Patients', value: '50K+', icon: 'TrendingUp' },
      { label: 'Uptime', value: '99.9%', icon: 'CheckCircle2' }
    ],
    useCases: [
      {
        title: 'Clinical Documentation',
        description: 'Reduce charting time by 50% with AI-powered voice-to-text and automated summaries.',
        icon: 'FileText'
      },
      {
        title: 'Patient Management',
        description: 'Streamline patient records, appointments, and medical history in one secure platform.',
        icon: 'Users'
      },
      {
        title: 'EMR Integration',
        description: 'Seamless integration with Epic, Cerner, and other major EMR systems.',
        icon: 'Database'
      }
    ],
    integrations: [
      { name: 'Epic EMR', icon: 'Database' },
      { name: 'Cerner', icon: 'Server' },
      { name: 'Lab Systems', icon: 'Flask' },
      { name: 'Pharmacy APIs', icon: 'Pill' }
    ],
    pricing: {
      startingAt: 'Custom',
      description: 'HIPAA-compliant pricing based on clinic size and requirements'
    },
    benefits: [
      '50% reduction in charting time',
      '94% ICD-10 accuracy',
      'HIPAA compliant',
      'Enterprise security',
      'EMR integration',
      'Multi-clinic support'
    ],
    technicalSpecs: {
      setupTime: '4-6 days',
      apiAccess: 'Full REST API',
      realTimeUpdates: true,
      security: 'HIPAA Compliant',
      sla: '99.9% uptime',
      compliance: 'HIPAA, HITECH'
    }
  },
  'synciq': {
    title: 'SyncIQ',
    tagline: 'AI-Powered Operational Intelligence',
    description: 'Advanced operational intelligence platform with AI audit automation and risk analytics. Transform how you monitor, analyze, and optimize operations with machine learning insights and real-time dashboards.',
    slug: 'synciq',
    image: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017876/syncIq-syncops_ef24ou.png',
    color: 'from-[#00C4FF] to-[#00B894]',
    icon: 'Zap',
    badge: 'Intelligence',
    category: 'Business Intelligence',
    demoLink: 'https://synciq.syncops.tech/',
    features: [
      'AI audit automation',
      'Real-time risk analytics',
      'Multi-tenant architecture',
      'Machine learning insights',
      'Compliance monitoring',
      'Predictive analytics',
      'Automated reporting',
      'Risk scoring',
      'Trend analysis',
      'Custom dashboards'
    ],
    stats: [
      { label: 'Automation', value: '85%', icon: 'TrendingUp' },
      { label: 'Speed', value: '10x', icon: 'Zap' },
      { label: 'Rating', value: '9.8/10', icon: 'Star' }
    ],
    useCases: [
      {
        title: 'Audit Automation',
        description: 'Automate compliance audits with AI-powered analysis and 85% time reduction.',
        icon: 'FileCheck'
      },
      {
        title: 'Risk Management',
        description: 'Identify and mitigate operational risks with predictive analytics and real-time alerts.',
        icon: 'AlertTriangle'
      },
      {
        title: 'Compliance Monitoring',
        description: 'Continuous compliance monitoring with automated gap identification and reporting.',
        icon: 'Shield'
      }
    ],
    integrations: [
      { name: 'ERP Systems', icon: 'Database' },
      { name: 'Cloud Platforms', icon: 'Cloud' },
      { name: 'Security Tools', icon: 'Shield' },
      { name: 'Analytics Platforms', icon: 'BarChart' }
    ],
    pricing: {
      startingAt: 'Custom',
      description: 'Enterprise pricing based on data volume and requirements'
    },
    benefits: [
      '85% reduction in audit time',
      '99.2% audit accuracy',
      'Real-time risk visibility',
      'Predictive analytics',
      'Multi-tenant scalability',
      'Machine learning insights'
    ],
    technicalSpecs: {
      setupTime: '5-7 days',
      apiAccess: 'Full REST API',
      realTimeUpdates: true,
      security: 'SOC 2 Type II',
      sla: '99.9% uptime',
      compliance: 'SOC 2, ISO 27001'
    }
  },
  'geopluse': {
    title: 'GeoPluse',
    tagline: 'Location Intelligence Platform',
    description: 'Advanced geospatial analytics and location-based services platform. Transform location data into actionable insights with real-time mapping, route optimization, and territory management.',
    slug: 'geopluse',
    image: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017876/geopluse-syncops_v05qbs.png',
    color: 'from-[#00B894] to-[#00C4FF]',
    icon: 'RefreshCw',
    badge: 'Location AI',
    category: 'Location Services',
    demoLink: 'https://geopulse.syncops.tech/',
    features: [
      'Geospatial analytics',
      'Location-based services',
      'Real-time mapping',
      'Route optimization',
      'Territory management',
      'Offline data collection',
      'PII encryption',
      'Interactive dashboards',
      'Pattern recognition',
      'Community insights'
    ],
    stats: [
      { label: 'Coverage', value: 'Global', icon: 'TrendingUp' },
      { label: 'Accuracy', value: '99%', icon: 'CheckCircle2' },
      { label: 'Speed', value: '<1s', icon: 'Zap' }
    ],
    useCases: [
      {
        title: 'Community Data Collection',
        description: 'Collect and analyze community data with privacy-first architecture and offline support.',
        icon: 'Users'
      },
      {
        title: 'Route Optimization',
        description: 'Optimize delivery routes and field operations with AI-powered recommendations.',
        icon: 'Map'
      },
      {
        title: 'Territory Analysis',
        description: 'Analyze territories and regions with interactive maps and real-time insights.',
        icon: 'Globe'
      }
    ],
    integrations: [
      { name: 'Mapping Services', icon: 'Map' },
      { name: 'GPS Systems', icon: 'Navigation' },
      { name: 'Survey Tools', icon: 'Clipboard' },
      { name: 'Analytics Platforms', icon: 'BarChart' }
    ],
    pricing: {
      startingAt: 'Custom',
      description: 'Pricing based on data volume and geographic coverage'
    },
    benefits: [
      '78.5% response rate',
      '95% data accuracy',
      'Privacy-first architecture',
      'Offline capabilities',
      'Global coverage',
      'Real-time analytics'
    ],
    technicalSpecs: {
      setupTime: '3-5 days',
      apiAccess: 'Full REST API',
      realTimeUpdates: true,
      security: 'Enterprise-grade',
      sla: '99.9% uptime',
      compliance: 'GDPR, Privacy-first'
    }
  },
  'fitresume': {
    title: 'FitResume',
    tagline: 'AI Resume Builder',
    description: 'Intelligent resume builder with AI-powered optimization and ATS compatibility. Create professional, ATS-friendly resumes in minutes with guided workflows, premium templates, and real-time suggestions.',
    slug: 'fitresume',
    image: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017875/fitresume-syncops_on9rzq.png',
    color: 'from-[#00C4FF] to-[#00B894]',
    icon: 'Sparkles',
    badge: 'Career Tool',
    category: 'Career & Recruitment',
    demoLink: 'https://fitresume.syncops.tech/',
    features: [
      'AI-powered optimization',
      'ATS compatibility',
      'Multiple templates',
      'Real-time suggestions',
      'Export to PDF/Word',
      'Guided workflows',
      'Theme customization',
      'Progress tracking',
      'Skill recommendations',
      'Impact quantification'
    ],
    stats: [
      { label: 'Success Rate', value: '90%', icon: 'TrendingUp' },
      { label: 'Templates', value: '50+', icon: 'Sparkles' },
      { label: 'Users', value: '100K+', icon: 'Star' }
    ],
    useCases: [
      {
        title: 'Resume Creation',
        description: 'Build ATS-friendly resumes in minutes with AI guidance and professional templates.',
        icon: 'FileText'
      },
      {
        title: 'Career Optimization',
        description: 'Optimize your resume for specific job postings with AI-powered suggestions.',
        icon: 'Target'
      },
      {
        title: 'Professional Branding',
        description: 'Create visually appealing resumes with premium themes and custom styling.',
        icon: 'Palette'
      }
    ],
    integrations: [
      { name: 'Job Boards', icon: 'Briefcase' },
      { name: 'LinkedIn', icon: 'Linkedin' },
      { name: 'ATS Systems', icon: 'Database' },
      { name: 'Cloud Storage', icon: 'Cloud' }
    ],
    pricing: {
      startingAt: '$9.99/month',
      description: 'Individual and team plans available'
    },
    benefits: [
      '98% ATS pass rate',
      '2-minute build time',
      '50+ premium templates',
      'AI-powered optimization',
      'Real-time validation',
      'Professional exports'
    ],
    technicalSpecs: {
      setupTime: '1-2 days',
      apiAccess: 'Limited API',
      realTimeUpdates: false,
      security: 'Standard encryption',
      sla: '99.5% uptime',
      compliance: 'GDPR'
    }
  },
  'studymate': {
    title: 'StudyMate',
    tagline: 'AI-Powered Homework Help',
    description: 'AI-powered educational platform providing step-by-step homework solutions and learning support. Get 24/7 AI assistance across 60+ subjects with personalized tutoring and interactive learning experiences.',
    slug: 'studymate',
    image: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017875/studymate-syncops_mvrfxc.png',
    color: 'from-[#00B894] to-[#00C4FF]',
    icon: 'Star',
    badge: 'Education',
    category: 'Education Technology',
    demoLink: 'https://studymate.syncops.tech/',
    features: [
      'Step-by-step solutions',
      '24/7 AI assistance',
      'Multi-subject support',
      'Interactive learning',
      'Personalized tutoring',
      '60+ subjects covered',
      'Practice problems',
      'Concept explanations',
      'Progress tracking',
      'Adaptive learning'
    ],
    stats: [
      { label: 'Students', value: '500K+', icon: 'TrendingUp' },
      { label: 'Subjects', value: '50+', icon: 'Sparkles' },
      { label: 'Rating', value: '9.7/10', icon: 'Star' }
    ],
    useCases: [
      {
        title: 'Homework Help',
        description: 'Get instant step-by-step solutions and explanations for homework problems.',
        icon: 'BookOpen'
      },
      {
        title: 'Test Preparation',
        description: 'Prepare for exams with practice problems and personalized study plans.',
        icon: 'GraduationCap'
      },
      {
        title: 'Concept Learning',
        description: 'Master difficult concepts with interactive explanations and examples.',
        icon: 'Lightbulb'
      }
    ],
    integrations: [
      { name: 'LMS Platforms', icon: 'GraduationCap' },
      { name: 'Google Classroom', icon: 'Chrome' },
      { name: 'Calendar Apps', icon: 'Calendar' },
      { name: 'Note Apps', icon: 'StickyNote' }
    ],
    pricing: {
      startingAt: '$19.99/month',
      description: 'Student and educator plans available'
    },
    benefits: [
      '24/7 availability',
      '60+ subjects covered',
      'Personalized learning',
      'Step-by-step guidance',
      'Progress tracking',
      'Interactive interface'
    ],
    technicalSpecs: {
      setupTime: '2-3 days',
      apiAccess: 'Limited API',
      realTimeUpdates: true,
      security: 'COPPA Compliant',
      sla: '99.5% uptime',
      compliance: 'COPPA, FERPA'
    }
  },
  'smartproperty': {
    title: 'SmartProperty',
    tagline: 'AI Real Estate Intelligence',
    description: 'AI-powered real estate platform with property valuation, blockchain verification, and smart recommendations. Find, analyze, and secure properties with real-time predictions and market insights.',
    slug: 'smartproperty',
    image: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017874/smartproperty-syncops_comso4.png',
    color: 'from-[#00C4FF] to-[#00B894]',
    icon: 'Shield',
    badge: 'Real Estate',
    category: 'Real Estate',
    demoLink: 'https://smartproperty.syncops.tech/',
    features: [
      'AI property valuation',
      'Blockchain verification',
      'Smart recommendations',
      'Market analytics',
      'Virtual property tours',
      'ROI predictions',
      'Lifestyle matching',
      'Fraud protection',
      'Market pulse analytics',
      'Property search AI'
    ],
    stats: [
      { label: 'Properties', value: '1M+', icon: 'TrendingUp' },
      { label: 'Accuracy', value: '95%', icon: 'CheckCircle2' },
      { label: 'Speed', value: '<5s', icon: 'Zap' }
    ],
    useCases: [
      {
        title: 'Property Search',
        description: 'Find properties that match your budget and lifestyle with AI-powered recommendations.',
        icon: 'Search'
      },
      {
        title: 'Property Valuation',
        description: 'Get instant property valuations in 10 seconds with AI-powered analysis.',
        icon: 'DollarSign'
      },
      {
        title: 'Investment Analysis',
        description: 'Analyze ROI and investment potential with market insights and predictions.',
        icon: 'TrendingUp'
      }
    ],
    integrations: [
      { name: 'MLS Systems', icon: 'Database' },
      { name: 'Payment Gateways', icon: 'CreditCard' },
      { name: 'Blockchain Networks', icon: 'Link' },
      { name: 'Mapping Services', icon: 'Map' }
    ],
    pricing: {
      startingAt: 'Custom',
      description: 'Pricing based on property listings and features'
    },
    benefits: [
      '10-second valuations',
      '92% accuracy rate',
      'Blockchain verification',
      'AI recommendations',
      'Market insights',
      'Fraud protection'
    ],
    technicalSpecs: {
      setupTime: '4-6 days',
      apiAccess: 'Full REST API',
      realTimeUpdates: true,
      security: 'GDPR Compliant',
      sla: '99.9% uptime',
      compliance: 'GDPR, Real Estate Regulations'
    }
  }
};

// Helper function to get product by slug
export function getProductBySlug(slug) {
  return productsData[slug] || null;
}

// Helper function to get all product slugs
export function getAllProductSlugs() {
  return Object.keys(productsData);
}

// Helper function to get related products
export function getRelatedProducts(currentSlug, limit = 3) {
  const currentProduct = productsData[currentSlug];
  if (!currentProduct) return [];
  
  return Object.values(productsData)
    .filter(product => product.slug !== currentSlug)
    .slice(0, limit)
    .map(product => ({
      title: product.title,
      tagline: product.tagline,
      image: product.image,
      slug: product.slug,
      category: product.category
    }));
}

