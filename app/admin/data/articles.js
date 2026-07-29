export const CATEGORIES = [
  'AI',
  'DevOps',
  'Cloud',
  'Development',
  'Technology',
  'Tutorials',
];

const coverPlaceholder =
  'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80';

/** Admin seed data mirrored from /posts — same fields the blog list + detail pages use */
export const initialArticles = [
  {
    id: 1,
    title: 'Building AI SaaS from Pakistan: A Complete Guide to Launching Your AI Product',
    slug: 'building-ai-saas-from-pakistan',
    date: '2024-12-25',
    excerpt:
      'Learn how to build and launch a successful AI SaaS product from Pakistan. From idea to market, discover the strategies, tools, and best practices for creating scalable AI software solutions.',
    coverImage:
      'https://res.cloudinary.com/dfdzl01qj/image/upload/v1766148470/ai-build-syncops_t1gb7a.jpg',
    author: 'SyncOps',
    authorRole: 'Tech Innovators',
    category: 'AI',
    tags: ['AI', 'SaaS', 'Pakistan'],
    featured: true,
    status: 'published',
    views: 1600,
    content: '',
  },
  {
    id: 2,
    title: 'AI Use Cases in Pakistan: Transforming Industries and Driving Innovation',
    slug: 'ai-use-cases-in-pakistan',
    date: '2024-12-20',
    excerpt:
      'Explore how artificial intelligence is revolutionizing industries across Pakistan. From healthcare to agriculture, discover real-world AI applications transforming businesses and improving lives.',
    coverImage:
      'https://res.cloudinary.com/dfdzl01qj/image/upload/v1766148331/ai-case-syncops_zump1d.jpg',
    author: 'SyncOps',
    authorRole: 'Tech Innovators',
    category: 'AI',
    tags: ['AI', 'Pakistan', 'Industry'],
    featured: false,
    status: 'published',
    views: 1300,
    content: '',
  },
  {
    id: 3,
    title: 'How We Build AI Systems: A Comprehensive Guide to AI Development',
    slug: 'how-we-build-ai-systems',
    date: '2024-12-15',
    excerpt:
      'Discover the step-by-step process of building robust AI systems. From data collection to model deployment, learn how we create intelligent solutions that drive business value.',
    coverImage:
      'https://res.cloudinary.com/dfdzl01qj/image/upload/v1766148091/AI-system-syncops_gbyv7a.jpg',
    author: 'SyncOps',
    authorRole: 'Tech Innovators',
    category: 'AI',
    tags: ['AI', 'Engineering', 'ML'],
    featured: true,
    status: 'published',
    views: 1250,
    content: '',
  },
  {
    id: 4,
    title: 'Cybersecurity in Software Development: Protecting Your Business',
    slug: 'cybersecurity-in-software-development',
    date: '2024-11-30',
    excerpt:
      'Discover how to safeguard your business by integrating cybersecurity into every stage of software development.',
    coverImage:
      'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017875/cybersecurity-syncops_zrsq65.jpg',
    author: 'SyncOps',
    authorRole: 'Tech Innovators',
    category: 'Development',
    tags: ['Security', 'DevSecOps'],
    featured: false,
    status: 'published',
    views: 1950,
    content: '',
  },
  {
    id: 5,
    title: 'How Blockchain Can Revolutionize Software Development',
    slug: 'how-blockchain-can-revolutionize-software-development',
    date: '2024-11-23',
    excerpt:
      'Explore how blockchain technology is transforming software development, offering new possibilities for security, transparency, and decentralization across various applications.',
    coverImage:
      'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017875/blockchain-syncops_txdrn6.jpg',
    author: 'SyncOps',
    authorRole: 'Tech Innovators',
    category: 'Technology',
    tags: ['Blockchain', 'Security'],
    featured: false,
    status: 'published',
    views: 1120,
    content: '',
  },
  {
    id: 6,
    title: 'Top 5 Skills Every Developer Needs to Learn in 2024',
    slug: 'top-5-skills-every-developer-needs-to-learn-in-2024',
    date: '2024-11-20',
    excerpt:
      'Discover the top five essential skills every developer needs to master in 2024, from AI and cloud computing to blockchain and cybersecurity, to stay ahead in the tech industry.',
    coverImage:
      'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017875/5topskills-syncops_k9akp6.jpg',
    author: 'SyncOps',
    authorRole: 'Tech Innovators',
    category: 'Tutorials',
    tags: ['Skills', 'Career', '2024'],
    featured: true,
    status: 'published',
    views: 2400,
    content: '',
  },
  {
    id: 7,
    title: 'The Rise of No-Code and Low-Code Platforms: Should Developers Be Worried?',
    slug: 'the-rise-of-no-code-and-low-code-platforms-should-developers-be-worried',
    date: '2024-11-19',
    excerpt:
      'Explore the impact of no-code and low-code platforms on the software development industry and whether developers should be concerned about their rise.',
    coverImage:
      'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017878/nocode-syncops_isx2lf.jpg',
    author: 'SyncOps',
    authorRole: 'Tech Innovators',
    category: 'Development',
    tags: ['No-Code', 'Low-Code'],
    featured: false,
    status: 'published',
    views: 980,
    content: '',
  },
  {
    id: 8,
    title: 'The Role of UI/UX in Software Development',
    slug: 'role-of-ui-ux-in-software-development',
    date: '2024-11-16',
    excerpt:
      'Discover how UI/UX design is essential for creating successful, user-friendly software. Learn the key aspects and best practices to enhance user satisfaction and retention.',
    coverImage:
      'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017878/ui-ux-syncops_dve69n.jpg',
    author: 'SyncOps',
    authorRole: 'Tech Innovators',
    category: 'Development',
    tags: ['UI', 'UX', 'Design'],
    featured: false,
    status: 'published',
    views: 1540,
    content: '',
  },
  {
    id: 9,
    title: 'The AI Revolution in Software Development',
    slug: 'ai-revolution-in-software-development',
    date: '2024-11-15',
    excerpt:
      'Explore how artificial intelligence is transforming the landscape of software development. From coding assistants to automated testing, discover the tools and techniques reshaping our industry.',
    coverImage:
      'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017874/ai-development-syncops_hd3oar.jpg',
    author: 'SyncOps',
    authorRole: 'Tech Innovators',
    category: 'AI',
    tags: ['AI', 'Development'],
    featured: true,
    status: 'published',
    views: 2100,
    content: '',
  },
  {
    id: 10,
    title: 'The Role of Data in Software Development',
    slug: 'role-of-data-in-software-development',
    date: '2024-11-10',
    excerpt:
      'Explore the crucial role of data in software development, from guiding design and improving performance to enabling AI integration and ensuring security.',
    coverImage:
      'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017878/role-data-syncops_fgd10r.jpg',
    author: 'SyncOps',
    authorRole: 'Tech Innovators',
    category: 'Technology',
    tags: ['Data', 'Analytics'],
    featured: false,
    status: 'published',
    views: 890,
    content: '',
  },
  {
    id: 11,
    title: 'Mastering Next.js App Router: A Deep Dive',
    slug: 'mastering-nextjs-app-router',
    date: '2024-05-25',
    excerpt:
      'Learn how to leverage the power of Next.js App Router to create more efficient and maintainable web applications.',
    coverImage:
      'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017877/nextjs-app-syncops_dm5lsl.jpg',
    author: 'SyncOps',
    authorRole: 'Tech Innovators',
    category: 'Tutorials',
    tags: ['Next.js', 'React'],
    featured: false,
    status: 'published',
    views: 1760,
    content: '',
  },
  {
    id: 12,
    title: 'The Future of Web Development: Trends to Watch',
    slug: 'future-of-web-development',
    date: '2024-05-20',
    excerpt:
      'Discover the emerging trends that are shaping the future of web development. Stay ahead of the curve with insights into AI, serverless architecture, PWAs, and more.',
    coverImage:
      'https://res.cloudinary.com/dfdzl01qj/image/upload/v1765017880/web-deveploment-syncops_sydprh.jpg',
    author: 'SyncOps',
    authorRole: 'Tech Innovators',
    category: 'Development',
    tags: ['Web', 'Trends'],
    featured: false,
    status: 'draft',
    views: 640,
    content: '',
  },
];

export { coverPlaceholder };

export function slugify(text = '') {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function formatArticleDate(date = new Date()) {
  if (typeof date === 'string') {
    const parsed = new Date(date);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString().slice(0, 10);
    }
  }
  const d = date instanceof Date ? date : new Date();
  return d.toISOString().slice(0, 10);
}

export function displayArticleDate(date) {
  const parsed = date ? new Date(date) : new Date();
  if (Number.isNaN(parsed.getTime())) return date || '';
  return parsed.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function estimateReadTime(content = '', excerpt = '') {
  const text = content?.trim() || excerpt || '';
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}
