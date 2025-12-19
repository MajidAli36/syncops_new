import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CalendarDays, Clock } from "lucide-react";
import { getPostBySlug, getAllPosts } from "../../utils/blogUtils";
import AuthorProfile from "../_components/AuthorProfile";
import RelatedPosts from "../_components/RelatedPosts";
import SocialShare from "../_components/SocialShare";
import InteractiveButtons from "../_components/InteractiveButtons";
import ReadingProgress from "../_components/ReadingProgress";
import TableOfContents from "../_components/TableOfContents";

// MDX Components for custom rendering
const mdxComponents = {
  h2: (props) => {
    const id = props.children
      ?.toString()
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    return <h2 id={id} className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-3 leading-tight" {...props} />;
  },
  h3: (props) => {
    const id = props.children
      ?.toString()
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    return <h3 id={id} className="text-lg sm:text-xl font-semibold text-gray-900 mt-6 mb-2.5 leading-tight" {...props} />;
  },
  p: (props) => {
    return <p className="text-gray-700 leading-[1.7] mb-4 text-[15px] sm:text-base font-normal" {...props} />;
  },
};

// Force dynamic rendering to avoid React version mismatch during prerendering
export const dynamic = "force-dynamic";

const coverPlaceholder =
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const url = `https://syncops.tech/blog/${slug}`;
  const coverImage = post.coverImage || coverPlaceholder;
  const publishedTime = post.date ? new Date(post.date).toISOString() : new Date().toISOString();

  return {
    title: `${post.title} | SyncOps Blog`,
    description: post.excerpt || "Discover expert insights on software development and technology.",
    keywords: post.tags?.join(", ") || "software development, technology, AI, insights",
    authors: [{ name: post.author || "SyncOps" }],
    openGraph: {
      title: post.title,
      description: post.excerpt || "Discover expert insights on software development and technology.",
      type: "article",
      url: url,
      siteName: "SyncOps",
      images: [
        {
          url: coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      publishedTime: publishedTime,
      authors: [post.author || "SyncOps"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || "Discover expert insights on software development and technology.",
      images: [coverImage],
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
    alternates: {
      canonical: url,
    },
    other: {
      "article:published_time": publishedTime,
      "article:author": post.author || "SyncOps",
      "article:section": post.category || "Technology",
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const readTime = Math.ceil(post.content.split(" ").length / 200);
  const publishedOn = post.date ? new Date(post.date) : new Date();
  const formattedDate = publishedOn.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const coverImage = post.coverImage || coverPlaceholder;
  const excerptHighlight =
    post.excerpt ||
    "Explore expert-backed strategies, frameworks, and insights designed to keep your engineering team ahead.";
  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://syncops.tech/blog/${slug}`;

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: coverImage,
    datePublished: publishedOn.toISOString(),
    dateModified: publishedOn.toISOString(),
    author: {
      "@type": "Organization",
      name: post.author || "SyncOps",
      url: "https://syncops.tech",
    },
    publisher: {
      "@type": "Organization",
      name: "SyncOps",
      url: "https://syncops.tech",
      logo: {
        "@type": "ImageObject",
        url: "https://syncops.tech/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://syncops.tech/blog/${slug}`,
    },
    articleSection: post.category || "Technology",
    keywords: post.tags?.join(", ") || "software development, technology",
    timeRequired: `PT${readTime}M`,
  };

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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://syncops.tech/blog/${slug}`
      }
    ]
  };

  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <article className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-6 sm:pb-8">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-[1.3] tracking-tight mb-4 sm:mb-5">
              {post.title}
            </h1>

            {/* Author & Meta Info Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
              <AuthorProfile
                author={post.author || "SyncOps"}
                role={post.authorRole || "Tech Innovators"}
                className="mb-0"
              />
              <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-gray-400" />
                  <span>{readTime} min read</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CalendarDays size={14} className="text-gray-400" />
                  <span>{formattedDate}</span>
                </div>
              </div>
            </div>

            {/* Interactive Buttons Row */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <InteractiveButtons slug={slug} />
              <SocialShare
                title={post.title}
                url={`https://syncops.tech/blog/${slug}`}
                description={post.excerpt}
              />
            </div>

            {/* Cover Image */}
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <div className="relative h-[200px] sm:h-[280px] md:h-[360px] bg-gray-100">
                <Image
                  src={coverImage}
                  alt={post.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 960px, (min-width: 768px) 720px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* Main Content - Left Column */}
            <div className="flex-1 order-2 lg:order-1 min-w-0 lg:max-w-[72ch]">
              {/* Article Content */}
              <div className="prose prose-sm sm:prose-base max-w-none 
                prose-headings:font-semibold prose-headings:text-gray-900 prose-headings:tracking-tight
                prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-3 prose-h2:font-semibold prose-h2:leading-tight
                prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-2.5 prose-h3:font-semibold prose-h3:leading-tight
                prose-p:text-gray-700 prose-p:leading-[1.7] prose-p:mb-4 prose-p:text-[15px] sm:prose-p:text-base prose-p:font-normal
                prose-a:text-[#0fbab1] prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-a:transition-all
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-ul:text-gray-700 prose-ul:my-4 prose-ul:pl-5 prose-li:my-1.5 prose-li:text-[15px] sm:prose-li:text-base prose-li:leading-relaxed
                prose-ol:text-gray-700 prose-ol:my-4 prose-ol:pl-5 prose-li:my-1.5
                prose-code:text-[13px] prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-gray-800
                prose-blockquote:border-l-3 prose-blockquote:border-[#0fbab1] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:my-4 prose-blockquote:text-[15px] sm:prose-blockquote:text-base
                prose-img:rounded-lg prose-img:shadow-sm prose-img:my-6
                prose-hr:my-6 prose-hr:border-gray-200">
                <MDXRemote source={post.content} components={mdxComponents} />
              </div>

              {/* Related Posts */}
              <RelatedPosts currentSlug={slug} />

              {/* Comments Section */}
              <div id="comments-section" className="mt-10 sm:mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">Join the Discussion</h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Comments feature coming soon! Share your thoughts and join the discussion.</p>
              </div>
            </div>
            
            {/* Sidebar - Table of Contents - Right Column */}
            <aside className="lg:w-64 xl:w-80 flex-shrink-0 order-1 lg:order-2">
              <div className="lg:sticky lg:top-24">
                <TableOfContents content={post.content} />
              </div>
            </aside>
          </div>
        </section>
    </article>
    </>
  );
}
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

