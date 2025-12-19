"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";

export default function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    // Wait for content to be rendered, then extract headings from DOM
    const extractHeadings = () => {
      const proseElement = document.querySelector(".prose");
      if (!proseElement) return;

      const headingElements = proseElement.querySelectorAll("h2, h3");
      const idCounts = new Map(); // Track ID occurrences
      
      const extractedHeadings = Array.from(headingElements).map((heading, index) => {
        const text = heading.textContent || "";
        const level = parseInt(heading.tagName.charAt(1)); // h2 = 2, h3 = 3
        let id = heading.id;
        
        // If no ID, create one from text
        if (!id) {
          id = text
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");
        }
        
        // Ensure unique ID by appending index if duplicate
        const baseId = id;
        let uniqueId = id;
        let count = idCounts.get(baseId) || 0;
        
        if (count > 0) {
          uniqueId = `${baseId}-${count}`;
        }
        
        idCounts.set(baseId, count + 1);
        
        // Set the unique ID on the heading element
        heading.id = uniqueId;

        return { id: uniqueId, text, level, index, uniqueKey: `${uniqueId}-${index}` };
      });

      if (extractedHeadings.length > 0) {
        setHeadings(extractedHeadings);
      }
    };

    // Try immediately, then with delay to ensure content is rendered
    extractHeadings();
    const timeoutId = setTimeout(extractHeadings, 500);

    // Set up intersection observer for active heading
    const observerOptions = {
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all headings after extraction
    const observeHeadings = () => {
      const proseElement = document.querySelector(".prose");
      if (!proseElement) return;
      
      const headingElements = proseElement.querySelectorAll("h2, h3");
      headingElements.forEach((heading) => {
        observer.observe(heading);
      });
    };

    const observeTimeoutId = setTimeout(observeHeadings, 600);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(observeTimeoutId);
      // Cleanup observer
      const proseElement = document.querySelector(".prose");
      if (proseElement) {
        const headingElements = proseElement.querySelectorAll("h2, h3");
        headingElements.forEach((heading) => {
          observer.unobserve(heading);
        });
      }
    };
  }, [content]);

  if (headings.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Table of Contents</h3>
        <p className="text-xs text-gray-500">No headings found in this article.</p>
      </div>
    );
  }

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg border border-gray-200 shadow-sm lg:sticky lg:top-24 mb-6 lg:mb-0 overflow-hidden"
    >
      {/* Mobile: Collapsible Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-full flex items-center justify-between p-3.5 text-left hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-200"
        aria-label="Toggle table of contents"
      >
        <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
          <Menu size={16} className="text-gray-600" />
          Table of Contents
        </h3>
        <ChevronDown
          size={18}
          className={`text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Desktop: Always visible header */}
      <div className="hidden lg:block px-4 pt-4 pb-3 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-900">Table of Contents</h3>
      </div>

      {/* Content - Collapsible on mobile, always visible on desktop */}
      {(isOpen || isDesktop) && (
        <motion.nav
          initial={false}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-0.5 max-h-[600px] overflow-y-auto px-3.5 pb-3.5 lg:pt-2.5"
        >
          {headings.map((heading) => (
            <motion.a
              key={heading.uniqueKey || `${heading.id}-${heading.index}`}
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToHeading(heading.id);
                // Close on mobile after clicking
                if (!isDesktop) {
                  setIsOpen(false);
                }
              }}
              className={`block text-xs sm:text-sm transition-all duration-200 py-1.5 px-2.5 rounded-md touch-manipulation ${
                heading.level === 3 ? "ml-3 text-xs" : ""
              } ${
                activeId === heading.id
                  ? "text-[#0fbab1] font-medium bg-[#0fbab1]/10"
                  : "text-gray-600 hover:text-[#0fbab1] hover:bg-gray-50 active:bg-gray-100"
              }`}
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
            >
              {heading.text}
            </motion.a>
          ))}
        </motion.nav>
      )}
    </motion.div>
  );
}

