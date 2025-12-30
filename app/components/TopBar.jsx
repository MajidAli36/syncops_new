"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  Github,
  User,
  ExternalLink,
} from "lucide-react";
import SafeLink from "./ui/SafeLink";
import { useContext, createContext } from "react";

// Context to share hidden state with NavBar and TopBar
export const TopBarContext = React.createContext(false);
export const MobileMenuContext = createContext({ isMobileMenuOpen: false, setIsMobileMenuOpen: () => {} });

const socialLinks = [
  { href: "https://www.linkedin.com/company/syncops", icon: Linkedin, label: "LinkedIn", tooltip: "Follow us on LinkedIn" },
  { href: "https://www.facebook.com/SyncOpsTech", icon: Facebook, label: "Facebook", tooltip: "Follow us on Facebook" },
  { href: "https://www.youtube.com/@syncops-tech", icon: Youtube, label: "YouTube", tooltip: "Subscribe to our YouTube" },
  { href: "https://www.instagram.com/syncops_tech/", icon: Instagram, label: "Instagram", tooltip: "Follow us on Instagram" },
  { href: "https://github.com/SyncOpsTech", icon: Github, label: "GitHub", tooltip: "Check out our GitHub" },
];

export default function TopBar() {

  const isHidden = useContext(TopBarContext);
  const mobileMenuContextValue = useContext(MobileMenuContext);
  const isMobileMenuOpen = mobileMenuContextValue?.isMobileMenuOpen || false;

  const handleLocationClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://maps.app.goo.gl/tTdayYQH3rmzoNEv5", "_blank", "noopener,noreferrer");
    }
  };

  // Hide top bar when mobile menu is open
  if (isMobileMenuOpen) return null;

  return (
    <>
      {/* Top bar - hides on scroll down */}
      <div className={`fixed top-0 left-0 right-0 w-full bg-[#0A0A1F] text-white text-sm font-medium h-10 flex items-center px-4 md:px-6 lg:px-8 justify-between select-none border-b border-white/5 z-50 transition-transform duration-300 ${isHidden ? '-translate-y-full' : ''}`}>
        {/* Left: Contact */}
        <div className="flex items-center gap-3 md:gap-4 flex-wrap min-w-0">
          <a
            href="mailto:info@syncops.tech"
            className="hidden lg:flex items-center gap-1 hover:text-[#00B894] hover:scale-105 transition-all duration-300 cursor-pointer group min-w-0"
            aria-label="Email info@syncops.tech"
          >
            <Mail size={12} className="text-[#00C4FF] group-hover:text-[#00B894] transition-colors duration-300 flex-shrink-0" />
            <span className="truncate">info@syncops.tech</span>
          </a>

          <a
            href="tel:+923018678319"
            className="hidden sm:flex items-center gap-1 hover:text-[#00B894] hover:scale-105 transition-all duration-300 cursor-pointer group min-w-0"
            aria-label="Call SyncOps"
          >
            <Phone size={12} className="text-[#00C4FF] group-hover:text-[#00B894] transition-colors duration-300 flex-shrink-0" />
            <span className="truncate">+92-301-8678-319</span>
          </a>

          <button
            className="hidden md:flex items-center gap-1 hover:text-[#00B894] hover:scale-105 transition-all duration-300 cursor-pointer group"
            onClick={handleLocationClick}
            title="Open in Google Maps"
            aria-label="Open location in Google Maps"
          >
            <MapPin size={12} className="text-[#00C4FF] group-hover:text-[#00B894] transition-colors duration-300" />
            <span>Mumtaz Market, Gujranwala, Pakistan</span>
            <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Right: CEO & Social */}
        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <SafeLink
            href="/ceo-message"
            className="flex items-center gap-1 text-gray-300 hover:text-[#00B894] hover:scale-105 transition-all duration-300 group"
            title="Read our CEO's message"
          >
            <User size={12} className="text-[#00C4FF] font-bold group-hover:text-[#00B894] transition-colors duration-300" />
            <span className="hidden lg:inline font-bold">Message from the CEO</span>
            <span className="lg:hidden font-bold">CEO Message</span>
          </SafeLink>

          {/* Social */}
          <div className="flex items-center gap-1 md:gap-2">
            {socialLinks.map(({ href, icon: Icon, label, tooltip }) => (
              <SafeLink
                key={label}
                href={href}
                aria-label={label}
                title={tooltip}
                className="text-gray-300 hover:text-[#00B894] hover:scale-105 transition-all duration-300 p-1.5 rounded-full hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#00B894]/50 touch-manipulation min-h-[36px] min-w-[36px] flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={16} />
              </SafeLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

