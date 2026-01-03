"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Linkedin, Globe, Github, ChevronLeft, ChevronRight } from "lucide-react";

const getInitials = (full) => {
  const p = full.trim().split(/\s+/);
  const f = p[0]?.[0] || "";
  const l = p[p.length - 1]?.[0] || "";
  return (f + l).toUpperCase();
};

// All leaders in hierarchy order: CEO, COO, CTO, CBDO, CMO
  const team = [
    {
      name: "Majid Ali",
    role: "Founder & Chief Executive Officer (CEO)",
    experienceBadge: "More than 10 years' experience",
    blurb: "Overall visionary and leader of SyncOps, responsible for strategy, innovation, and company direction.",
    photo: "https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948234/majid-ali-ceo-syncops_c6y6ay.jpg",
    website: "https://majidali.tech", 
    linkedin: "https://www.linkedin.com/in/majidali-syncops/", 
    twitter: "#", 
    email: "majid@syncops.tech",
    highlight: true
  },
  {
    name: "Ahmer Mairaj",
    role: "Chief Operating Officer (COO)",
    experienceBadge: "10+ years' experience",
    blurb: "Oversees daily operations, resource management, and execution of business strategies.",
    photo: "https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948234/ahmer-mairaj-coo-syncops_olgqbf.jpg",
    website: "#",
      linkedin: "#",
      twitter: "#",
    email: "#",
    },
    {
      name: "Rimsha Imran",
    role: "Chief Technology Officer (CTO)",
    experienceBadge: "5+ years' experience",
    blurb: "Leads product development, technology roadmap, and innovation strategy.",
    photo: "https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948234/rimshaimran-cto-syncops_lvs2eb.jpg",
    website: "https://www.rimshaimran.tech/",
      linkedin: "https://www.linkedin.com/in/rimshaimran-syncops/",
      twitter: "#",
    email: "#",
    },
    {
      name: "Nida Naeem",
    role: "Chief Business Development Officer (CBDO) ",
    experienceBadge: "8+ years' experience",
    blurb: "Secures partnerships, expands market reach, and drives revenue growth.",
    photo: "https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948234/nidanaeem-cbdo-syncops_kcaaml.jpg",
    website: "#",
    linkedin: "https://www.linkedin.com/in/nidanaeem-syncops/",
    twitter: "#",
    email: "#",
  },
  {
    name: "Abu Sufian",
    role: "Chief Marketing Officer (CMO)",
    experienceBadge: "15+ years' experience",
    blurb: "Manages brand strategy, marketing campaigns, and global visibility.",
    photo: "https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948233/abu-sufian-cmo-syncops_h7xki9.jpg",
    website: "#",
      linkedin: "#",
      twitter: "#",
    email: "#",
  },
  {
    name: "Faizan Zia",
    role: "Business Development Manager (BDM)",
    experienceBadge: "5+ years' experience",
    blurb: "Drives sales pipeline growth, nurtures client partnerships, and supports revenue-focused initiatives at SyncOps.",
    photo: "https://res.cloudinary.com/dfdzl01qj/image/upload/v1764948375/faizan-zia-bdm-syncops_uacwlv.jpg",
    website: "#",
    linkedin: "https://www.linkedin.com/in/faizanzia-syncops/",
    twitter: "#",
    email: "#",
  },
];

// Coverflow Card Component
const CoverflowCard = ({ person, index, currentIndex, total, onClick }) => {
  const { 
    name, 
    role, 
    experienceBadge, 
    blurb, 
    photo,
    linkedin = "#", 
    twitter = "#", 
    website = "#", 
    email = "#" 
  } = person;

  // Get GitHub URL based on name
  const getGithubUrl = (name) => {
    if (name === "Rimsha Imran") return "https://github.com/RimshaDev/rimshaimran-profile";
    if (name === "Nida Naeem") return "https://github.com/NidaNaeem-SyncOps";
    if (name === "Majid Ali") return "https://github.com/MajidAli36";
    return "#";
  };

  const githubUrl = getGithubUrl(name);
  const router = useRouter();

  // Get page URL based on name
  const getPageUrl = (name) => {
    if (name === "Majid Ali") return "/ceo";
    if (name === "Ahmer Mairaj") return "/coo";
    if (name === "Rimsha Imran") return "/cto";
    if (name === "Nida Naeem") return "/cbdo";
    if (name === "Abu Sufian") return "/cmo";
    if (name === "Faizan Zia") return "/bdm";
    return null;
  };

  const pageUrl = getPageUrl(name);

  // Handle card click - navigate to page if available, otherwise change carousel
  const handleCardClick = (e) => {
    // Don't navigate if clicking on social icons (LinkedIn, GitHub, Website)
    const clickedElement = e.target;
    const isSocialIcon = clickedElement.closest('a[aria-label="LinkedIn"], a[aria-label="Website"], a[aria-label="GitHub"]');
    
    // If clicking on social icons, don't navigate
    if (isSocialIcon) {
      return;
    }
    
    // If clicking on name link, let it handle navigation naturally (don't prevent default)
    const isNameLink = clickedElement.closest('a[href*="/ceo"], a[href*="/coo"], a[href*="/cto"], a[href*="/cbdo"], a[href*="/cmo"], a[href*="/bdm"]');
    if (isNameLink) {
      return; // Let the link handle navigation
    }
    
    // Otherwise, click anywhere on card should navigate
    if (pageUrl) {
      e.preventDefault();
      e.stopPropagation();
      router.push(pageUrl);
    } else {
      onClick(index);
    }
  };

  // Calculate position relative to center with circular wrapping
  const rawOffset = index - currentIndex;
  // Handle circular offset for smooth looping
  let offset = rawOffset;
  if (rawOffset > total / 2) {
    offset = rawOffset - total;
  } else if (rawOffset < -total / 2) {
    offset = rawOffset + total;
  }
  const absOffset = Math.abs(offset);
  
  // Calculate 3D transform values
  const getTransform = () => {
    if (absOffset === 0) {
      // Center card - no rotation, full scale
      return {
        rotateY: 0,
        translateX: 0,
        translateZ: 0,
        scale: 1,
        opacity: 1,
        zIndex: 10
      };
    } else {
      // Side cards - rotated and scaled (show up to 2 cards on each side)
      if (absOffset > 2) {
        // Hide cards that are too far away
        return {
          rotateY: 0,
          translateX: 0,
          translateZ: 0,
          scale: 0,
          opacity: 0,
          zIndex: 0
        };
      }
      
      const direction = offset > 0 ? 1 : -1;
      const rotateY = direction * 45;
      const translateX = direction * (absOffset * 180 + 40);
      const translateZ = -absOffset * 80;
      const scale = Math.max(0.65, 1 - absOffset * 0.12);
      const opacity = Math.max(0.4, 1 - absOffset * 0.25);
      
      return {
        rotateY,
        translateX,
        translateZ,
        scale,
        opacity,
        zIndex: 10 - absOffset
      };
    }
  };

  const transform = getTransform();
  const isActive = absOffset === 0;

  return (
    <motion.div
      className="absolute w-[360px] md:w-[380px]"
      style={{
        left: '50%',
        marginLeft: '-180px',
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
        zIndex: transform.zIndex,
        willChange: 'transform',
        backfaceVisibility: 'visible',
        WebkitFontSmoothing: 'subpixel-antialiased',
        MozOsxFontSmoothing: 'grayscale',
        filter: 'none',
        WebkitFilter: 'none',
        imageRendering: 'auto',
        WebkitImageRendering: 'auto',
        textRendering: 'optimizeLegibility',
      }}
      animate={{
        x: transform.translateX,
        rotateY: transform.rotateY,
        scale: transform.scale,
        opacity: transform.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      <div 
        className={`bg-[#1A1A2E] rounded-2xl overflow-hidden border transition-shadow duration-300 flex flex-col cursor-pointer ${
          isActive 
            ? 'h-[480px] md:h-[460px] lg:h-[440px] shadow-[0_25px_50px_rgba(0,196,255,0.15)] border-[#00C4FF]/30 ring-2 ring-[#00C4FF]/20 hover:shadow-[0_30px_60px_rgba(0,196,255,0.25)]' 
            : 'h-[360px] md:h-[340px] lg:h-[320px] shadow-2xl border-white/10 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)]'
        }`} 
        onClick={handleCardClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.willChange = 'shadow';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.willChange = 'auto';
        }}
        style={{
          willChange: 'auto', 
          transform: 'none',
          isolation: 'isolate',
          backdropFilter: 'none',
          WebkitBackdropFilter: 'none',
          filter: 'none',
          WebkitFilter: 'none',
          imageRendering: 'auto',
          WebkitImageRendering: 'auto',
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'subpixel-antialiased',
          MozOsxFontSmoothing: 'grayscale',
          transformStyle: 'flat',
          WebkitTransform: 'none',
          imageSmoothingEnabled: true,
          WebkitImageSmoothingEnabled: true,
        }}>
        {/* Image Section */}
        <div className="relative h-[360px] md:h-[340px] lg:h-[320px] overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-white flex-shrink-0" style={{ 
          isolation: 'isolate',
          filter: 'none',
          WebkitFilter: 'none',
          backdropFilter: 'none',
          WebkitBackdropFilter: 'none',
          imageRendering: 'auto',
          WebkitImageRendering: 'auto',
        }}>
          {photo ? (
            <div 
              className="relative w-full h-full" 
              style={{ 
                willChange: 'auto',
                transform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'visible',
                WebkitBackfaceVisibility: 'visible',
                filter: 'none',
                WebkitFilter: 'none',
                imageRendering: 'auto',
                isolation: 'isolate',
              }}
            >
              <Image
                src={photo}
                alt={`${name} - ${role}`}
                fill
                className="object-cover"
                style={{ 
                  objectPosition: 'center 10%',
                  backfaceVisibility: 'visible',
                  WebkitBackfaceVisibility: 'visible',
                  transform: 'translate3d(0, 0, 0)',
                  filter: 'none',
                  WebkitFilter: 'none',
                  imageRendering: 'auto',
                  WebkitImageRendering: 'auto',
                  willChange: 'auto',
                  WebkitTransform: 'translate3d(0, 0, 0)',
                  imageSmoothingEnabled: true,
                  WebkitImageSmoothingEnabled: true,
                  transition: 'none',
                  WebkitTransition: 'none',
                }}
                priority={isActive}
                sizes="(max-width: 768px) 100vw, 380px"
                quality={100}
              />
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#00B894] to-[#00C4FF] text-white font-bold text-5xl md:text-6xl">
              {getInitials(name)}
            </div>
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
          
          {/* Info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white" style={{
            filter: 'none',
            WebkitFilter: 'none',
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'subpixel-antialiased',
            MozOsxFontSmoothing: 'grayscale',
          }}>
            <a 
              href={name === "Majid Ali" ? "/ceo" : name === "Ahmer Mairaj" ? "/coo" : name === "Rimsha Imran" ? "/cto" : name === "Nida Naeem" ? "/cbdo" : name === "Abu Sufian" ? "/cmo" : name === "Faizan Zia" ? "/bdm" : "#"}
              className="block group"
              onClick={(e) => {
                // Let the link handle navigation, stop propagation to card
                e.stopPropagation();
              }}
              style={{
                filter: 'none',
                WebkitFilter: 'none',
              }}
            >
              <h3 className="text-lg md:text-xl font-bold mb-0.5 group-hover:text-[#00C4FF] transition-colors duration-300" style={{
                filter: 'none',
                WebkitFilter: 'none',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'subpixel-antialiased',
              }}>{name}</h3>
            </a>
            <div className="text-xs font-medium text-white/90 mb-1.5" style={{
              filter: 'none',
              WebkitFilter: 'none',
              textRendering: 'optimizeLegibility',
            }}>{role}</div>
            <div className="inline-flex items-center rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium border border-white/30" style={{ 
              backdropFilter: 'none', 
              WebkitBackdropFilter: 'none',
              filter: 'none',
              WebkitFilter: 'none',
              textRendering: 'optimizeLegibility',
            }}>
              {experienceBadge}
            </div>
          </div>
        </div>

        {/* Content Section - Only show on active card */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col p-3 md:p-4 bg-gradient-to-b from-[#1A1A2E] to-[#0B0A1C]"
            style={{ 
              backdropFilter: 'none',
              WebkitBackdropFilter: 'none',
              filter: 'none',
              WebkitFilter: 'none',
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'subpixel-antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
          >
            <p className="text-gray-300 leading-relaxed text-xs md:text-sm mb-3" style={{
              filter: 'none',
              WebkitFilter: 'none',
              textRendering: 'optimizeLegibility',
            }}>{blurb}</p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2 text-gray-400">
              <a 
                aria-label="LinkedIn" 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#00C4FF] hover:scale-125 transition-all duration-300 p-1.5 rounded-full hover:bg-white/10"
              >
                <Linkedin size={18} />
              </a>
              {/* Twitter removed per request */}
              <a 
                aria-label="Website" 
                href={website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#00C4FF] hover:scale-125 transition-all duration-300 p-1.5 rounded-full hover:bg-white/10"
              >
                <Globe size={18} />
              </a>
              <a 
                aria-label="GitHub" 
                href={githubUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#00C4FF] hover:scale-125 transition-all duration-300 p-1.5 rounded-full hover:bg-white/10"
              >
                <Github size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const LeadershipTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % team.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  // Auto-rotate with intersection observer - continuous looping
  useEffect(() => {
    if (!sectionRef.current) return;

    let intervalId = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start auto-rotate when section is visible
            if (!intervalId) {
              intervalId = setInterval(() => {
                setCurrentIndex((prev) => {
                  const next = (prev + 1) % team.length;
                  return next;
                });
              }, 5000);
            }
          } else {
            // Stop auto-rotate when section is not visible
            if (intervalId) {
              clearInterval(intervalId);
              intervalId = null;
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    // Cleanup on unmount
    return () => {
      observer.disconnect();
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [team.length]);

  return (
    <div id="team" className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-white">SyncOps</span>{" "}
          <span className="text-[#00C4FF]">Leadership Team</span>
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Meet the visionary leaders driving SyncOps Software House forward in healthcare AI innovation.
        </p>
      </motion.div>

      {/* Coverflow Container */}
      <section ref={sectionRef} className="relative py-10">
        {isMobile ? (
          <div className="space-y-6">
            {team.map((person, index) => (
              <motion.div
                key={`${person.name}-mobile-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-[#1A1A2E] rounded-2xl overflow-hidden border border-white/10 shadow-xl"
              >
                <div className="relative h-72 bg-white">
                  {person.photo ? (
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      className="object-contain"
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 768px) 100vw, 288px"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#00B894] to-[#00C4FF] text-white text-4xl font-bold">
                      {getInitials(person.name)}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{person.name}</h3>
                    <p className="text-sm text-white/80 mb-2">{person.role}</p>
                    <span className="inline-flex text-xs px-2 py-1 bg-white/20 rounded-full backdrop-blur">
                      {person.experienceBadge}
                    </span>
                  </div>
                </div>
                <div className="p-5 text-gray-300 text-sm leading-relaxed">
                  {person.blurb}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
        <div className="relative h-[600px] md:h-[560px] lg:h-[540px] flex items-center justify-center overflow-visible w-full">
          <div className="relative w-full h-full" style={{ perspective: '1200px' }}>
            {team.map((person, index) => (
              <CoverflowCard
                key={`${person.name}-${index}`}
                person={person}
                index={index}
                currentIndex={currentIndex}
                total={team.length}
                onClick={setCurrentIndex}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-1 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-[#00C4FF]/20 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#00C4FF]/50 border border-gray-200 hover:border-[#00C4FF]/30 items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft size={24} className="text-slate-700 hover:text-[#00C4FF] transition-colors" />
          </button>
          
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-1 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-[#00C4FF]/20 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#00C4FF]/50 border border-gray-200 hover:border-[#00C4FF]/30 items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight size={24} className="text-slate-700 hover:text-[#00C4FF] transition-colors" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
            {team.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#00C4FF] w-8 shadow-lg shadow-[#00C4FF]/40' 
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
      </div>
        )}
      </section>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-3xl p-8 border border-[#00B894]/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-gray-300 mb-6">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.28c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
            </svg>
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam; 