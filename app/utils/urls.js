/**
 * Centralized URL Configuration
 * All web URLs used throughout the application
 */

// Base URL
export const BASE_URL = 'https://syncops.tech';

// Internal Routes - Main Pages
export const ROUTES = {
  // Home
  HOME: '/',
  
  // Main Pages
  ABOUT: '/about',
  ABOUT_SYNCOPS: '/about-syncops',
  WHY_SYNCOPS: '/why-syncops',
  SERVICES: '/services',
  CASE_STUDIES: '/case-studies',
  PRODUCTS: '/products',
  AI_DIVISION: '/ai-division',
  TECHNOLOGIES: '/technologies',
  BLOG: '/blog',
  CAREERS: '/careers',
  CONTACT: '/contact',
  CONSULTANCY: '/consultancy',
  REFERRAL_PROGRAM: '/referral-program',
  CEO_MESSAGE: '/ceo-message',
  SYNCOPS_GLOBAL_CLIENTS: '/syncops-global-clients',
  
  // Leadership Pages
  CEO: '/ceo',
  CTO: '/cto',
  CBDO: '/cbdo',
  
  // Legal Pages
  PRIVACY_POLICY: '/privacy-policy',
  TERMS_OF_SERVICE: '/terms-of-service',
  COOKIE_POLICY: '/cookie-policy',
  
  // SEO Pages
  BEST_AI_SOFTWARE_HOUSE_PAKISTAN: '/best-ai-software-house-in-pakistan',
  AI_SOFTWARE_DEVELOPMENT_PAKISTAN: '/ai-software-development-pakistan',
  AI_SAAS_DEVELOPMENT_COMPANY: '/ai-saas-development-company',
  AI_AUTOMATION_SERVICES_PAKISTAN: '/ai-automation-services-pakistan',
  CUSTOM_AI_SOLUTIONS_ENTERPRISES: '/custom-ai-solutions-for-enterprises',
  
  // Country-Specific Pages
  AI_SOFTWARE_COMPANY_UK: '/ai-software-company-uk',
  AI_SOFTWARE_COMPANY_USA: '/ai-software-company-usa',
  AI_SOFTWARE_COMPANY_CANADA: '/ai-software-company-canada',
  AI_SOFTWARE_COMPANY_AUSTRALIA: '/ai-software-company-australia',
  AI_SOFTWARE_COMPANY_UAE: '/ai-software-company-uae',
};

// Dynamic Routes
export const DYNAMIC_ROUTES = {
  // Services
  SERVICE: (slug) => `/services/${slug}`,
  
  // Case Studies
  CASE_STUDY: (slug) => `/case-studies/${slug}`,
  
  // Blog Posts
  BLOG_POST: (slug) => `/blog/${slug}`,
  
  // Products
  PRODUCT: (slug) => `/products/${slug}`,
};

// External URLs - Social Media
export const SOCIAL_MEDIA = {
  LINKEDIN: 'https://www.linkedin.com/company/syncops',
  LINKEDIN_CEO: 'https://www.linkedin.com/in/majidali-syncops/',
  LINKEDIN_CTO: 'https://www.linkedin.com/in/rimshaimran-syncops/',
  LINKEDIN_CBDO: 'https://www.linkedin.com/in/nidanaeem-syncops/',
  LINKEDIN_BDM: 'https://www.linkedin.com/in/faizanzia-syncops/',
  FACEBOOK: 'https://www.facebook.com/SyncOpsTech',
  YOUTUBE: 'https://www.youtube.com/@syncops-tech',
  INSTAGRAM: 'https://www.instagram.com/syncops_tech/',
  GITHUB: 'https://github.com/SyncOpsTech',
  GITHUB_CEO: 'https://github.com/MajidAli36',
  GITHUB_CTO: 'https://github.com/RimshaDev/rimshaimran-profile',
  GITHUB_CBDO: 'https://github.com/NidaNaeem-SyncOps',
  TWITTER: 'https://twitter.com',
};

// External URLs - Personal Websites
export const PERSONAL_WEBSITES = {
  CEO: 'https://majidali.tech',
  CTO: 'https://www.rimshaimran.tech/',
};

// External URLs - Maps & Location
export const MAPS = {
  GOOGLE_MAPS: 'https://maps.app.goo.gl/tTdayYQH3rmzoNEv5',
  GOOGLE_MAPS_EMBED: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6753.852538816107!2d74.1854261013275!3d32.17926288936181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f290054635a0d%3A0x5d542bcba44e7b8e!2sSyncOps!5e0!3m2!1sen!2s!4v1764072692847!5m2!1sen!2s',
};

// Contact Information
export const CONTACT = {
  EMAIL: 'info@syncops.tech',
  EMAIL_LINK: 'mailto:info@syncops.tech',
  REFERRAL_EMAIL: 'referrals@syncops.co',
  REFERRAL_EMAIL_LINK: 'mailto:referrals@syncops.co?subject=Referral%20Submission%20-%20SyncOps&body=Share%20a%20few%20details%3A%0A-%20Referral%20type%20(client%20or%20talent)%0A-%20Name%20and%20company%0A-%20Role%20or%20need%0A-%20Contact%20info%0A-%20Any%20helpful%20context',
  PHONE: '+92-301-8678-319',
  PHONE_LINK: 'tel:+923018678319',
  ADDRESS: 'Mumtaz Market, Gujranwala, Pakistan',
};

// Images & Assets
export const IMAGES = {
  LOGO: '/images/logo.png',
  LOGO_FOOTER: '/images/logo-footer.png',
  LOGO_FULL_URL: `${BASE_URL}/images/logo.png`,
};

// Cloudinary Image URLs
export const CLOUDINARY_IMAGES = {
  CEO_PHOTO: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948234/majid-ali-ceo-syncops_c6y6ay.jpg',
  COO_PHOTO: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948234/ahmer-mairaj-coo-syncops_olgqbf.jpg',
  CTO_PHOTO: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948234/rimshaimran-cto-syncops_lvs2eb.jpg',
  CBDO_PHOTO: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948234/nidanaeem-cbdo-syncops_kcaaml.jpg',
  CMO_PHOTO: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948375/abu-sufian-cmo-syncops_h7xki9.jpg',
  BDM_PHOTO: 'https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948375/faizan-zia-bdm-syncops_uacwlv.jpg',
};

// Navigation Links (for NavBar component)
export const NAV_LINKS = [
  { href: ROUTES.SERVICES, label: 'Services' },
  { href: ROUTES.TECHNOLOGIES, label: 'Technologies' },
  { href: ROUTES.AI_DIVISION, label: 'AI Division' },
  { href: ROUTES.PRODUCTS, label: 'Products' },
  { href: ROUTES.CAREERS, label: 'Careers' },
  { href: ROUTES.REFERRAL_PROGRAM, label: 'Referral Program' },
  { href: ROUTES.BLOG, label: 'Blogs' },
  { href: ROUTES.ABOUT, label: 'About' },
];

// Footer Quick Links
export const FOOTER_QUICK_LINKS = [
  { href: ROUTES.SERVICES, label: 'Services' },
  { href: ROUTES.ABOUT, label: 'About Us' },
  { href: ROUTES.CAREERS, label: 'Careers' },
  { href: ROUTES.TECHNOLOGIES, label: 'Technologies' },
  { href: ROUTES.BLOG, label: 'Blog' },
  { href: ROUTES.CONTACT, label: 'Contact' },
];

// Footer Legal Links
export const FOOTER_LEGAL_LINKS = [
  { href: ROUTES.PRIVACY_POLICY, label: 'Privacy Policy' },
  { href: ROUTES.COOKIE_POLICY, label: 'Cookie Policy' },
  { href: ROUTES.TERMS_OF_SERVICE, label: 'Terms of Service' },
];

// Social Links (for TopBar component)
export const SOCIAL_LINKS = [
  { 
    href: SOCIAL_MEDIA.LINKEDIN, 
    icon: 'Linkedin', 
    label: 'LinkedIn', 
    tooltip: 'Follow us on LinkedIn' 
  },
  { 
    href: SOCIAL_MEDIA.FACEBOOK, 
    icon: 'Facebook', 
    label: 'Facebook', 
    tooltip: 'Follow us on Facebook' 
  },
  { 
    href: SOCIAL_MEDIA.YOUTUBE, 
    icon: 'Youtube', 
    label: 'YouTube', 
    tooltip: 'Subscribe to our YouTube' 
  },
  { 
    href: SOCIAL_MEDIA.INSTAGRAM, 
    icon: 'Instagram', 
    label: 'Instagram', 
    tooltip: 'Follow us on Instagram' 
  },
  { 
    href: SOCIAL_MEDIA.GITHUB, 
    icon: 'Github', 
    label: 'GitHub', 
    tooltip: 'Check out our GitHub' 
  },
];

// All Static Routes (for sitemap generation)
export const STATIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.ABOUT,
  ROUTES.SERVICES,
  ROUTES.CASE_STUDIES,
  ROUTES.PRODUCTS,
  ROUTES.AI_DIVISION,
  ROUTES.TECHNOLOGIES,
  ROUTES.BLOG,
  ROUTES.CAREERS,
  ROUTES.CONTACT,
  ROUTES.CEO_MESSAGE,
  ROUTES.CEO,
  ROUTES.CTO,
  ROUTES.CBDO,
  ROUTES.REFERRAL_PROGRAM,
  ROUTES.PRIVACY_POLICY,
  ROUTES.TERMS_OF_SERVICE,
  ROUTES.COOKIE_POLICY,
  ROUTES.CONSULTANCY,
  ROUTES.BEST_AI_SOFTWARE_HOUSE_PAKISTAN,
  ROUTES.AI_SOFTWARE_DEVELOPMENT_PAKISTAN,
  ROUTES.AI_SAAS_DEVELOPMENT_COMPANY,
  ROUTES.AI_AUTOMATION_SERVICES_PAKISTAN,
  ROUTES.CUSTOM_AI_SOLUTIONS_ENTERPRISES,
  ROUTES.ABOUT_SYNCOPS,
  ROUTES.WHY_SYNCOPS,
  ROUTES.AI_SOFTWARE_COMPANY_UK,
  ROUTES.AI_SOFTWARE_COMPANY_USA,
  ROUTES.AI_SOFTWARE_COMPANY_CANADA,
  ROUTES.AI_SOFTWARE_COMPANY_AUSTRALIA,
  ROUTES.AI_SOFTWARE_COMPANY_UAE,
  ROUTES.SYNCOPS_GLOBAL_CLIENTS,
];

// Helper function to get full URL
export const getFullUrl = (path) => {
  if (path.startsWith('http')) return path;
  return `${BASE_URL}${path}`;
};

// Helper function to check if URL is external
export const isExternalUrl = (url) => {
  return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:') || url.startsWith('tel:');
};

// Export all URLs as a single object for convenience
export default {
  BASE_URL,
  ROUTES,
  DYNAMIC_ROUTES,
  SOCIAL_MEDIA,
  PERSONAL_WEBSITES,
  MAPS,
  CONTACT,
  IMAGES,
  CLOUDINARY_IMAGES,
  NAV_LINKS,
  FOOTER_QUICK_LINKS,
  FOOTER_LEGAL_LINKS,
  SOCIAL_LINKS,
  STATIC_ROUTES,
  getFullUrl,
  isExternalUrl,
};

