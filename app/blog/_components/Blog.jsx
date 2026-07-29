"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SafeLink from "../../components/ui/SafeLink";
import { FaSearch, FaBookmark, FaClock, FaFire, FaStar, FaFilter, FaSort, FaEye, FaBookOpen, FaArrowRight, FaMagic, FaCheckCircle } from 'react-icons/fa';

// Shimmer Loading Component
const ShimmerCard = () => (
  <div className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 relative">
    <div className="p-6">
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      
      {/* Category Tag Shimmer */}
      <div className="mb-4">
        <div className="h-6 w-20 bg-white/10 rounded-full animate-pulse"></div>
      </div>
      
      {/* Title Shimmer */}
      <div className="mb-3">
        <div className="h-6 w-3/4 bg-white/10 rounded animate-pulse mb-2"></div>
        <div className="h-6 w-1/2 bg-white/10 rounded animate-pulse"></div>
      </div>
      
      {/* Excerpt Shimmer */}
      <div className="mb-4 space-y-2">
        <div className="h-4 w-full bg-white/10 rounded animate-pulse"></div>
        <div className="h-4 w-5/6 bg-white/10 rounded animate-pulse"></div>
        <div className="h-4 w-4/6 bg-white/10 rounded animate-pulse"></div>
      </div>
      
      {/* Meta Shimmer */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-4">
          <div className="h-4 w-16 bg-white/10 rounded animate-pulse"></div>
          <div className="h-4 w-20 bg-white/10 rounded animate-pulse"></div>
        </div>
        <div className="h-4 w-20 bg-white/10 rounded animate-pulse"></div>
      </div>
      
      {/* Read More Shimmer */}
      <div className="flex items-center justify-between">
        <div className="h-4 w-24 bg-white/10 rounded animate-pulse"></div>
        <div className="h-4 w-4 bg-white/10 rounded animate-pulse"></div>
      </div>
    </div>
  </div>
);

// Function to determine category based on post title and slug
const getPostCategory = (post) => {
  // If category is already defined in post metadata, use it
  if (post.category) {
    return post.category;
  }

  const title = (post.title || "").toLowerCase();
  const slug = (post.slug || "").toLowerCase();
  const combined = `${title} ${slug}`;

  // AI-related keywords
  if (
    combined.includes("ai") ||
    combined.includes("artificial intelligence") ||
    combined.includes("machine learning") ||
    combined.includes("ml ") ||
    combined.includes("neural") ||
    combined.includes("deep learning")
  ) {
    return "AI";
  }

  // DevOps-related keywords
  if (
    combined.includes("devops") ||
    combined.includes("ci/cd") ||
    combined.includes("deployment") ||
    combined.includes("infrastructure") ||
    combined.includes("kubernetes") ||
    combined.includes("docker")
  ) {
    return "DevOps";
  }

  // Cloud-related keywords
  if (
    combined.includes("cloud") ||
    combined.includes("aws") ||
    combined.includes("azure") ||
    combined.includes("gcp") ||
    combined.includes("serverless")
  ) {
    return "Cloud";
  }

  // Tutorials/Guides
  if (
    combined.includes("tutorial") ||
    combined.includes("guide") ||
    combined.includes("how to") ||
    combined.includes("step-by-step") ||
    combined.includes("learn") ||
    combined.includes("mastering")
  ) {
    return "Tutorials";
  }

  // Development-related keywords
  if (
    combined.includes("development") ||
    combined.includes("developer") ||
    combined.includes("coding") ||
    combined.includes("programming") ||
    combined.includes("software") ||
    combined.includes("web development") ||
    combined.includes("nextjs") ||
    combined.includes("react") ||
    combined.includes("javascript") ||
    combined.includes("typescript") ||
    combined.includes("framework") ||
    combined.includes("ui/ux") ||
    combined.includes("blockchain") ||
    combined.includes("cybersecurity") ||
    combined.includes("data")
  ) {
    return "Development";
  }

  // Default fallback
  return "Technology";
};

export default function Blog({ posts }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const postsPerPage = 6;

  // Categories for filtering
  const categories = ["all", "AI", "DevOps", "Cloud", "Development", "Technology", "Tutorials"];

  // Trending tags
  const trendingTags = ["#AI", "#DevOps", "#Cloud", "#NextJS", "#React", "#AWS"];

  // Add category to each post if not present
  const postsWithCategories = posts.map(post => ({
    ...post,
    category: getPostCategory(post)
  }));

  // Filter and sort posts
  const filteredPosts = postsWithCategories
    .filter(post => {
      const postCategory = getPostCategory(post);
      const matchesCategory = selectedCategory === "all" || postCategory === selectedCategory;
      const matchesSearch = searchQuery === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "latest") {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === "popular") {
        return (b.views || 0) - (a.views || 0);
      }
      return new Date(a.date) - new Date(b.date);
    });

  // Pagination / load-more logic
  const totalPosts = filteredPosts.length;
  const initialPosts = filteredPosts.slice(0, postsPerPage);
  const remainingPosts = filteredPosts.slice(postsPerPage);
  const showingCount = showAll ? totalPosts : Math.min(postsPerPage, totalPosts);

  // Reset load-more when filters or search change
  React.useEffect(() => {
    setShowAll(false);
  }, [selectedCategory, sortBy, searchQuery]);

  // Calculate reading time
  const calculateReadingTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Toggle bookmark
  const toggleBookmark = (postSlug) => {
    setBookmarkedPosts(prev => 
      prev.includes(postSlug) 
        ? prev.filter(slug => slug !== postSlug)
        : [...prev, postSlug]
    );
  };

  // AI Surprise Me function
  const surpriseMe = () => {
    const randomPost = postsWithCategories[Math.floor(Math.random() * postsWithCategories.length)];
    // In a real app, this would use AI to recommend content
    alert(`AI recommends: ${randomPost.title}`);
  };

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "SyncOps Blog",
            "description": "Latest insights on AI, software development & technology",
            "url": "https://syncops.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "SyncOps",
              "logo": {
                "@type": "ImageObject",
                "url": "https://syncops.com/logo.png"
              }
            },
            "blogPost": postsWithCategories.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author || "SyncOps Team"
              }
            }))
          })
        }}
      />

             <div className="min-h-screen">
         {/* Section 1: Blog Articles - Enhanced Professional Design */}
        <section className="bg-gradient-to-b from-white via-gray-50/30 to-white py-24 relative overflow-hidden">
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02]"></div>
          <motion.div 
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#00C4FF]/10 via-[#00B894]/5 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#00B894]/10 via-[#00C4FF]/5 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            {/* Enhanced Section Header */}
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00C4FF]/10 to-[#00B894]/10 rounded-full border border-[#00C4FF]/20 mb-6"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <FaBookOpen className="w-4 h-4 text-[#00C4FF]" />
                <span className="text-sm font-semibold text-gray-700">Latest Insights</span>
              </motion.div>
              
              <motion.h2 
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
              >
                Latest{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#00C4FF] via-[#00B894] to-[#00C4FF] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    Articles
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#00C4FF]/20 via-[#00B894]/20 to-[#00C4FF]/20 rounded-full blur-sm"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                Discover cutting-edge insights, expert tutorials, and industry trends that drive innovation forward.
              </motion.p>
              
              {/* Stats Bar */}
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-6 mt-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                {[
                  { icon: <FaBookOpen />, value: "50+", label: "Articles" },
                  { icon: <FaEye />, value: "10K+", label: "Readers" },
                  { icon: <FaStar />, value: "4.9", label: "Rating" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/50 shadow-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-[#00C4FF]">{stat.icon}</span>
                    <span className="font-bold text-gray-900">{stat.value}</span>
                    <span className="text-sm text-gray-600">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Main Content Grid */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Enhanced Sidebar Filters */}
              <div className="lg:w-80 flex-shrink-0">
                <motion.div 
                  className="bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-xl sticky top-8 relative overflow-hidden"
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -4,
                    boxShadow: "0 25px 50px rgba(0, 196, 255, 0.15)"
                  }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00C4FF]/5 via-transparent to-[#00B894]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00C4FF]/10 to-transparent rounded-bl-full opacity-50" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#00B894]/10 to-transparent rounded-tr-full opacity-50" />
                  
                  <div className="p-6 relative z-10">
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <motion.div
                        className="w-10 h-10 bg-gradient-to-br from-[#00C4FF] to-[#00B894] rounded-xl flex items-center justify-center shadow-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <FaFilter className="w-5 h-5 text-white" />
                      </motion.div>
                      <span>Filters & Sort</span>
                    </motion.h3>

                    {/* Enhanced Category Filter */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <h4 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                        <div className="w-1 h-4 bg-gradient-to-b from-[#00C4FF] to-[#00B894] rounded-full" />
                        Categories
                      </h4>
                      <div className="space-y-2">
                        {categories.map((category, index) => (
                          <motion.label 
                            key={category} 
                            className={`flex items-center gap-3 cursor-pointer group relative p-3 rounded-xl transition-all duration-300 ${
                              selectedCategory === category 
                                ? 'bg-gradient-to-r from-[#00C4FF]/10 to-[#00B894]/10 border-2 border-[#00C4FF]/30' 
                                : 'bg-gray-50/50 border-2 border-transparent hover:border-gray-200'
                            }`}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.08 }}
                            whileHover={{ 
                              x: 4,
                              scale: 1.02,
                              backgroundColor: selectedCategory === category ? undefined : "rgba(0, 196, 255, 0.05)"
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <motion.div
                              className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                                selectedCategory === category
                                  ? 'bg-gradient-to-br from-[#00C4FF] to-[#00B894] border-transparent'
                                  : 'bg-white border-gray-300 group-hover:border-[#00C4FF]'
                              }`}
                              whileHover={{ scale: 1.1 }}
                            >
                              {selectedCategory === category && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-2 h-2 bg-white rounded-full"
                                />
                              )}
                            </motion.div>
                            <motion.span 
                              className={`text-sm font-medium relative z-10 transition-colors duration-200 ${
                                selectedCategory === category
                                  ? 'text-gray-900'
                                  : 'text-gray-600 group-hover:text-gray-900'
                              }`}
                            >
                              {category.charAt(0).toUpperCase() + category.slice(1)}
                            </motion.span>
                            <input
                              type="radio"
                              name="category"
                              value={category}
                              checked={selectedCategory === category}
                              onChange={(e) => setSelectedCategory(e.target.value)}
                              className="sr-only"
                            />
                          </motion.label>
                        ))}
                      </div>
                    </motion.div>

                    {/* Enhanced Sort Options */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <h4 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                        <motion.div
                          className="w-1 h-4 bg-gradient-to-b from-[#00B894] to-[#00C4FF] rounded-full"
                          whileHover={{ rotate: 180 }}
                          transition={{ duration: 0.35 }}
                        />
                        Sort By
                      </h4>
                      <motion.select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00C4FF]/50 focus:border-[#00C4FF] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2300C4FF%22 stroke-width=%222%22%3E%3Cpolyline points=%226 9 12 15 18 9%22%3E%3C/polyline%3E%3C/svg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat"
                        whileHover={{ scale: 1.02, borderColor: "#00C4FF" }}
                        whileFocus={{ scale: 1.02 }}
                      >
                        <option value="latest">Latest First</option>
                        <option value="popular">Most Popular</option>
                        <option value="oldest">Oldest First</option>
                      </motion.select>
                    </motion.div>

                    {/* Enhanced Results Count */}
                    <motion.div 
                      className="p-4 bg-gradient-to-br from-[#00C4FF]/5 to-[#00B894]/5 rounded-xl border border-[#00C4FF]/10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Results</span>
                        <span className="text-lg font-bold bg-gradient-to-r from-[#00C4FF] to-[#00B894] bg-clip-text text-transparent">
                          {totalPosts}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">articles found</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Articles Grid */}
              <div className="flex-1">
                {/* Articles Grid - Modern Professional Design */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {initialPosts.map((post, index) => (
                    <motion.article
                      key={post.slug}
                      className="group bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.03, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-50px" }}
                      whileHover={{ 
                        y: -8,
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(0, 196, 255, 0.15)"
                      }}
                    >
                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00C4FF]/0 via-[#00B894]/0 to-[#00C4FF]/0 group-hover:from-[#00C4FF]/5 group-hover:via-[#00B894]/5 group-hover:to-[#00C4FF]/5 transition-all duration-500 z-0" />
                      
                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00C4FF]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <SafeLink href={`/blog/${post.slug || "default"}`} className="block h-full relative z-10 flex flex-col">
                        {/* Enhanced Cover Image */}
                        <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
                          {post.coverImage || post.image_url ? (
                            <>
                              <Image
                                src={post.coverImage || post.image_url}
                                alt={post.title}
                                fill
                                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                priority={index < 6}
                                loading={index < 6 ? "eager" : "lazy"}
                                quality={85}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </>
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-[#00C4FF]/20 via-[#00B894]/20 to-[#00C4FF]/20 flex items-center justify-center">
                              <FaBookOpen className="w-16 h-16 text-gray-400/50" />
                            </div>
                          )}
                          
                          {/* Category Badge Overlay */}
                          <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[#00C4FF] text-xs font-bold rounded-full border border-[#00C4FF]/20 shadow-lg">
                              {getPostCategory(post)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6 h-full flex flex-col flex-grow">
                          {/* Date */}
                          <div className="mb-4">
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              {formatDate(post.date)}
                            </span>
                          </div>

                          {/* Enhanced Title */}
                          <h2 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#00C4FF] group-hover:to-[#00B894] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2 leading-tight">
                            {post.title}
                          </h2>
                          
                          {/* Enhanced Excerpt */}
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                            {post.excerpt}
                          </p>

                          {/* Enhanced Meta Information */}
                          <div className="flex items-center justify-between text-xs mb-5 pb-5 border-b border-gray-100">
                            <div className="flex items-center gap-5">
                              <div className="flex items-center gap-2 text-gray-500 hover:text-[#00C4FF] transition-colors duration-200">
                                <FaClock className="w-4 h-4" />
                                <span className="font-medium">{calculateReadingTime(post.content || post.excerpt)} min</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-500 hover:text-[#00B894] transition-colors duration-200">
                                <FaEye className="w-4 h-4" />
                                <span className="font-medium">{post.views || Math.floor((post.slug?.length || 0) * 50) + 100}</span>
                              </div>
                            </div>
                          </div>

                          {/* Enhanced Read More Button */}
                          <div className="flex items-center justify-between mt-auto">
                            <span className="text-sm font-bold bg-gradient-to-r from-[#00C4FF] to-[#00B894] bg-clip-text text-transparent group-hover:from-[#00B894] group-hover:to-[#00C4FF] transition-all duration-300">
                              Read Article
                            </span>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00C4FF] to-[#00B894] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:translate-x-1">
                              <FaArrowRight className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        </div>
                      </SafeLink>
                    </motion.article>
                  ))}
                </div>

                {/* Enhanced No Posts Message with Shimmer Placeholders */}
                {totalPosts === 0 && (
                  <motion.div 
                    className="py-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Sample Cards Placeholder */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                      {[1, 2, 3].map((index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                          <ShimmerCard />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* No Results Message */}
                    <div className="text-center">
                      <motion.div 
                        className="w-24 h-24 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full blur-sm"></div>
                        <FaBookOpen className="w-12 h-12 text-[#00B894] relative z-10" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">No Articles Found</h3>
                      <p className="text-gray-300 mb-8 max-w-md mx-auto">
                        No articles match your current filter. Try adjusting your search criteria or explore our sample content above.
                      </p>
                      
                      <motion.button
                        onClick={() => {
                          setSelectedCategory("all");
                          setSearchQuery("");
                        }}
                        className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg shadow-[#00B894]/20 relative overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <FaBookOpen className="w-5 h-5" />
                          View All Articles
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00C4FF] to-[#00B894] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* Remaining articles with enhanced design */}
                {showAll && remainingPosts.length > 0 && (
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {remainingPosts.map((post, index) => (
                      <motion.article
                        key={post.slug}
                        className="group bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.02, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{ 
                          y: -8,
                          scale: 1.02,
                          boxShadow: "0 20px 40px rgba(0, 196, 255, 0.15)"
                        }}
                      >
                        {/* Gradient Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00C4FF]/0 via-[#00B894]/0 to-[#00C4FF]/0 group-hover:from-[#00C4FF]/5 group-hover:via-[#00B894]/5 group-hover:to-[#00C4FF]/5 transition-all duration-500 z-0" />
                        
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00C4FF]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <SafeLink href={`/blog/${post.slug || "default"}`} className="block h-full relative z-10 flex flex-col">
                          {/* Enhanced Cover Image */}
                          <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
                            {post.coverImage || post.image_url ? (
                              <>
                                <Image
                                  src={post.coverImage || post.image_url}
                                  alt={post.title}
                                  fill
                                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                  loading="lazy"
                                  quality={85}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                              </>
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-[#00C4FF]/20 via-[#00B894]/20 to-[#00C4FF]/20 flex items-center justify-center">
                                <FaBookOpen className="w-16 h-16 text-gray-400/50" />
                              </div>
                            )}
                            
                            {/* Category Badge Overlay */}
                            <div className="absolute top-4 left-4">
                              <span className="inline-flex items-center px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[#00C4FF] text-xs font-bold rounded-full border border-[#00C4FF]/20 shadow-lg">
                                {getPostCategory(post)}
                              </span>
                            </div>
                          </div>
                          
                          <div className="p-6 h-full flex flex-col flex-grow">
                            {/* Date */}
                            <div className="mb-4">
                              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                {formatDate(post.date)}
                              </span>
                            </div>

                            {/* Enhanced Title */}
                            <h2 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#00C4FF] group-hover:to-[#00B894] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2 leading-tight">
                              {post.title}
                            </h2>
                            
                            {/* Enhanced Excerpt */}
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                              {post.excerpt}
                            </p>

                            {/* Enhanced Meta Information */}
                            <div className="flex items-center justify-between text-xs mb-5 pb-5 border-b border-gray-100">
                              <div className="flex items-center gap-5">
                                <div className="flex items-center gap-2 text-gray-500 hover:text-[#00C4FF] transition-colors duration-200">
                                  <FaClock className="w-4 h-4" />
                                  <span className="font-medium">{calculateReadingTime(post.content || post.excerpt)} min</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 hover:text-[#00B894] transition-colors duration-200">
                                  <FaEye className="w-4 h-4" />
                                  <span className="font-medium">{post.views || Math.floor((post.slug?.length || 0) * 50) + 100}</span>
                                </div>
                              </div>
                            </div>

                            {/* Enhanced Read More Button */}
                            <div className="flex items-center justify-between mt-auto">
                              <span className="text-sm font-bold bg-gradient-to-r from-[#00C4FF] to-[#00B894] bg-clip-text text-transparent group-hover:from-[#00B894] group-hover:to-[#00C4FF] transition-all duration-300">
                                Read Article
                              </span>
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00C4FF] to-[#00B894] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:translate-x-1">
                                <FaArrowRight className="w-3 h-3 text-white" />
                              </div>
                            </div>
                          </div>
                        </SafeLink>
                      </motion.article>
                    ))}
                  </div>
                )}

                {/* Enhanced Load More / Pagination Controls */}
                {totalPosts > postsPerPage && (
                  <motion.div 
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent max-w-xs" />
                      <span className="text-sm font-medium text-gray-500 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                        Showing <span className="font-bold text-[#00C4FF]">1-{showingCount}</span> of <span className="font-bold text-[#00B894]">{totalPosts}</span> articles
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent max-w-xs" />
                    </div>
                    
                    {!showAll && remainingPosts.length > 0 && (
                      <motion.button
                        onClick={() => setShowAll(true)}
                        className="group relative bg-gradient-to-r from-[#00C4FF] via-[#00B894] to-[#00C4FF] bg-[length:200%_auto] text-white font-bold px-10 py-4 rounded-2xl hover:scale-105 transition-all duration-500 shadow-xl shadow-[#00C4FF]/30 hover:shadow-2xl hover:shadow-[#00B894]/40 flex items-center gap-3 mx-auto overflow-hidden"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 20px 40px rgba(0, 196, 255, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          backgroundPosition: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }
                        }}
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          <FaBookOpen className="w-5 h-5" />
                          <span>Load More Articles</span>
                          <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </motion.button>
                    )}
                    
                    {showAll && (
                      <motion.div 
                        className="flex flex-col items-center gap-3"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-[#00C4FF]/20 to-[#00B894]/20 rounded-full flex items-center justify-center">
                          <FaCheckCircle className="w-8 h-8 text-[#00B894]" />
                        </div>
                        <p className="text-sm font-medium text-gray-600">
                          You've reached the end of all articles
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                )}
               </div>
             </div>
           </div>
         </section>

                 {/* Section 2: Newsletter - Light Gray Background for Contrast */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          {/* Enhanced Floating Background */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-brand-aqua/5 to-brand-teal/5 opacity-30"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          />
          
          {/* Floating Gradient Orbs */}
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-brand-aqua to-brand-teal rounded-full filter blur-3xl opacity-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-brand-teal to-brand-aqua rounded-full filter blur-3xl opacity-10"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.1, 0.2],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Stay Ahead with{" "}
                <motion.span 
                  className="gradient-text"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  AI Insights
                </motion.span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Subscribe to our newsletter and get weekly AI insights, tech trends, and exclusive content delivered to your inbox.
              </motion.p>
            </motion.div>

            {/* Newsletter Subscription */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="card max-w-4xl mx-auto relative overflow-hidden py-6"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 25px 50px rgba(0, 248, 180, 0.1)"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-brand-aqua/5 to-brand-teal/5 opacity-0 hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.05 }}
                />
                
                {/* Newsletter Input */}
                <motion.div 
                  className="max-w-md mx-auto mb-8 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex gap-3">
                    <motion.div
                      className="flex-1 relative"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-white border border-gray-300 rounded-xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-aqua focus:border-brand-aqua transition-all duration-300 relative z-10"
                        aria-label="Email address for newsletter"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-brand-aqua/10 to-brand-teal/10 rounded-xl opacity-0 focus-within:opacity-100 transition-opacity duration-300"
                        whileFocus={{ scale: 1.05 }}
                      />
                    </motion.div>
                    <motion.button 
                      className="bg-gradient-brand text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-brand-aqua/20 relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 15px 30px rgba(0, 248, 180, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-brand-aqua/20 to-brand-teal/20 opacity-0 hover:opacity-100 transition-opacity duration-500"
                        whileHover={{ scale: 1.1 }}
                      />
                      <span className="relative z-10">Subscribe</span>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Testimonial Quote */}
                <motion.div 
                  className="border-t border-gray-200 pt-8 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-brand-aqua/20 to-brand-teal/20 opacity-0 hover:opacity-100 transition-opacity duration-500"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <FaStar className="text-2xl text-white relative z-10" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.p 
                    className="text-xl text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto italic"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    "SyncOps insights help me stay ahead in tech. Their AI-powered recommendations are spot-on!"
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center relative overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-brand-aqua/20 to-brand-teal/20 opacity-0 hover:opacity-100 transition-opacity duration-500"
                        whileHover={{ scale: 1.2 }}
                      />
                      <span className="text-white font-semibold text-sm relative z-10">SC</span>
                    </motion.div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 text-lg">Sarah Chen</div>
                      <div className="text-gray-600 text-sm">Senior Developer at TechCorp</div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
