import { caseStudiesData } from './case-studies/_data/caseStudies';
import { servicesData } from './utils/servicesUtils';
import { getAllPosts } from './utils/blogUtils';

export default function sitemap() {
  const baseUrl = 'https://syncops.tech';
  
  // Static pages with images
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: [
        {
          url: `${baseUrl}/images/logo.png`,
          title: 'SyncOps - AI-Powered Software Solutions',
          alt: 'SyncOps Logo',
        },
      ],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-division`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/technologies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ceo-message`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ceo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cbdo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/referral-program`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/consultancy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // SEO Pillar & Authority Pages
    {
      url: `${baseUrl}/best-ai-software-house-in-pakistan`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-software-development-pakistan`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-saas-development-company`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-automation-services-pakistan`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/custom-ai-solutions-for-enterprises`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-syncops`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/why-syncops`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Case studies
  const caseStudies = [
    'geopulse',
    'syncpeople',
    'medimind',
    'synciq',
    'smartproperty',
    'wvd',
    'resume-ai',
    'studymoto',
  ];

  const caseStudyRoutes = caseStudies
    .filter((slug) => caseStudiesData[slug]) // Only include existing case studies
    .map((slug) => {
      const caseStudy = caseStudiesData[slug];
      const images = [];
      
      if (caseStudy?.image) {
        images.push({
          url: caseStudy.image.startsWith('http') ? caseStudy.image : `${baseUrl}${caseStudy.image}`,
          title: caseStudy.title,
          alt: `${caseStudy.title} - ${caseStudy.industry} Case Study`,
        });
      }
      
      return {
        url: `${baseUrl}/case-studies/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        ...(images.length > 0 && { images }),
      };
    });

  // Blog posts with images
  const allPosts = getAllPosts();
  const blogRoutes = allPosts.map((post) => {
    const images = [];
    
    if (post.coverImage) {
      images.push({
        url: post.coverImage.startsWith('http') ? post.coverImage : `${baseUrl}${post.coverImage}`,
        title: post.title,
        alt: post.title,
      });
    }
    
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      ...(images.length > 0 && { images }),
    };
  });

  // Services with images
  const serviceRoutes = Object.keys(servicesData).map((slug) => {
    const service = servicesData[slug];
    const images = [];
    
    if (service?.image) {
      images.push({
        url: service.image.startsWith('http') ? service.image : `${baseUrl}${service.image}`,
        title: service.title,
        alt: `${service.title} - SyncOps Services`,
      });
    }
    
    return {
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      ...(images.length > 0 && { images }),
    };
  });

  return [...routes, ...caseStudyRoutes, ...blogRoutes, ...serviceRoutes];
}

