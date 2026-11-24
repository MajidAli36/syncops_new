import BlogHero from "./_components/BlogHero";
import { getAllPosts } from "../utils/blogUtils";
import Blog from "./_components/Blog";
import FinalCTA from "../components/FinalCTA";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog - Latest Insights on AI, Software Development & Technology | SyncOps",
  description: "Discover expert insights, tutorials, and industry trends from SyncOps. Stay updated with the latest in AI, software development, cloud technologies, cybersecurity, and more. Expert articles from our development team.",
  keywords: [
    "SyncOps blog",
    "AI blog",
    "software development blog",
    "technology insights",
    "cloud computing blog",
    "cybersecurity articles",
    "development tutorials",
    "tech trends",
    "software engineering blog",
    "AI insights"
  ],
  authors: [{ name: "SyncOps Team" }],
  creator: "SyncOps Technologies",
  publisher: "SyncOps Technologies",
  metadataBase: new URL("https://syncops.tech"),
  alternates: {
    canonical: "https://syncops.tech/blog",
  },
  openGraph: {
    title: "Blog - Latest Insights on AI, Software Development & Technology | SyncOps",
    description: "Discover expert insights, tutorials, and industry trends from SyncOps. Stay updated with the latest in AI, software development, and cloud technologies.",
    type: "website",
    url: "https://syncops.tech/blog",
    siteName: "SyncOps",
    locale: "en_US",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "SyncOps Blog - Technology Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Latest Insights on AI, Software Development & Technology | SyncOps",
    description: "Discover expert insights, tutorials, and industry trends from SyncOps.",
    images: ["/images/logo.png"],
    creator: "@SyncOps",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  
  // Generate breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://syncops.tech"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://syncops.tech/blog"
      }
    ]
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section data-gsap-section>
        <div data-gsap-stagger>
          <BlogHero />
        </div>
      </section>
      
      {/* Blog Posts Section */}
      <section data-gsap-section>
        <div data-gsap-stagger>
          <Blog posts={posts} />
        </div>
      </section>
      
      {/* CTA Section */}
      <section data-gsap-section>
        <div data-gsap-stagger>
          <FinalCTA />
        </div>
      </section>
      
    </div>
    </>
  );
}
