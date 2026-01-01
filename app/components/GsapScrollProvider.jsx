"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global GSAP + ScrollTrigger setup.
 * Applies fade-in + upward motion to any element with `data-gsap-section`
 * and staggered entrance to children with `data-gsap-stagger`.
 */
export default function GsapScrollProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const initGSAP = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        // Wait a bit to ensure DOM is fully rendered
        await new Promise(resolve => setTimeout(resolve, 100));

        const ctx = gsap.context(() => {
        const sections = gsap.utils.toArray("[data-gsap-section]");

        // Only proceed if sections exist
        if (sections.length > 0) {
          // Elements are already hidden via CSS, just set GSAP properties
          gsap.set(sections, { autoAlpha: 0, y: 80 });

          sections.forEach((section, index) => {
            // Verify section still exists in DOM
            if (!section || !document.contains(section)) return;

            const delay = Number(section.getAttribute("data-gsap-delay")) || 0;
            const isFirstSection = index === 0;
            
            // First section should appear immediately without scroll trigger
            if (isFirstSection) {
              gsap.to(section, {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.1,
              });
            } else {
              gsap.to(section, {
                autoAlpha: 1,
                y: 0,
                duration: 1.1,
                ease: "power3.out",
                delay,
                scrollTrigger: {
                  trigger: section,
                  start: "top 95%",
                  end: "bottom 20%",
                  toggleActions: "play none none reverse",
                },
              });
            }
          });
        }

        // Set initial state for stagger elements
        const staggerEls = gsap.utils.toArray("[data-gsap-stagger]");
        
        if (staggerEls.length > 0) {
          gsap.set(staggerEls, { autoAlpha: 0, y: 40 });

          // Find stagger elements in the first section and show them immediately
          const firstSection = sections[0];
          if (firstSection && firstSection.querySelectorAll && document.contains(firstSection)) {
            const firstSectionStagger = firstSection.querySelectorAll("[data-gsap-stagger]");
            if (firstSectionStagger.length > 0) {
              gsap.to(firstSectionStagger, {
                autoAlpha: 1,
                y: 0,
                stagger: 0.08,
                duration: 0.7,
                ease: "power3.out",
                delay: 0.2,
              });
            }
          }

          // Only set up batch if elements exist
          ScrollTrigger.batch("[data-gsap-stagger]", {
            start: "top 95%",
            onEnter: (batch) => {
              // Filter out any elements that no longer exist
              const validBatch = Array.from(batch).filter(el => el && document.contains(el));
              
              if (validBatch.length === 0) return;

              // Skip if already visible (first section)
              const alreadyVisible = validBatch.some((el) => {
                try {
                  const style = window.getComputedStyle(el);
                  return style.opacity === "1" && style.visibility === "visible";
                } catch (e) {
                  return false;
                }
              });
              
              if (!alreadyVisible) {
                gsap.to(validBatch, {
                  autoAlpha: 1,
                  y: 0,
                  stagger: 0.12,
                  duration: 0.9,
                  ease: "power3.out",
                });
              }
            },
            onLeaveBack: (batch) => {
              // Filter out any elements that no longer exist
              const validBatch = Array.from(batch).filter(el => el && document.contains(el));
              
              if (validBatch.length > 0) {
                gsap.to(validBatch, {
                  autoAlpha: 0,
                  y: 40,
                  stagger: 0.08,
                  duration: 0.6,
                  ease: "power3.in",
                });
              }
            },
          });
        }
        });

        return () => ctx.revert();
      } catch (error) {
        // Silently handle GSAP errors to prevent console spam
        if (process.env.NODE_ENV === 'development') {
          console.warn('GSAP initialization error:', error);
        }
        return () => {}; // Return empty cleanup function
      }
    };

    let cleanup;

    initGSAP().then((revert) => {
      cleanup = revert;
    });

    return () => {
      if (cleanup) cleanup();
    };
  }, [pathname]);

  return null;
}


