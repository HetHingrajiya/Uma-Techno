"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "../ui/Logo";

// Navigation menu configuration with support for submenus
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Services", 
    href: "/services",
    submenu: [
      { name: "Web Development", href: "/web-development" },
      { name: "SEO Services", href: "/seo-services" },
      { name: "Digital Marketing", href: "/digital-marketing" },
      { name: "App Development", href: "/services/app-development" },
      { name: "UI/UX Design", href: "/services/ui-ux" },
    ]
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  // State for mobile menu open/closed status
  const [isOpen, setIsOpen] = useState(false);
  
  // State for tracking which dropdown submenu is currently active (hovered or clicked)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  
  // Current URL path to highlight the active link
  const pathname = usePathname();

  // Close submenus when clicking anywhere else on the screen
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.nav-item-container')) {
        setActiveSubmenu(null);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent body scroll when the mobile mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handles link behavior: toggles submenus instead of navigating if a submenu exists
  const handleLinkClick = (link: any, e: React.MouseEvent) => {
    if (link.submenu) {
      e.preventDefault();
      setActiveSubmenu(activeSubmenu === link.name ? null : link.name);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
        "py-3 backdrop-blur-lg"
      )}
      style={{ backgroundColor: `rgba(var(--color-header-rgb, 255, 255, 255), 0.9)` }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="transition-all duration-500 w-12 h-12 lg:w-14 lg:h-14" />
          <div className="flex flex-col leading-none">
            <span className="font-bold tracking-tighter uppercase transition-all duration-500 text-xl lg:text-2xl">
              <span className="text-[var(--color-electric)]">Uma</span><span className="text-[var(--color-text-main)]">Techno</span>
            </span>
            <span className="text-[var(--color-text-main)] opacity-50 font-bold tracking-[0.3em] uppercase transition-all duration-500 text-[8px] lg:text-[9px] mt-0.5">
              Innovate. Create. <span className="text-[var(--color-electric)]">Elevate.</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 lg:gap-14">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group nav-item-container"
              onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
              onMouseLeave={() => link.submenu && setActiveSubmenu(null)}
            >
              <Link
                href={link.href}
                onClick={(e) => handleLinkClick(link, e)}
                className={cn(
                  "font-bold transition-all hover:text-[var(--color-electric)] flex items-center gap-1 tracking-wide cursor-pointer",
                  "text-sm py-1.5",
                  (pathname === link.href || activeSubmenu === link.name) ? "text-[var(--color-electric)]" : "text-[var(--color-text-main)] opacity-70 hover:opacity-100"
                )}
              >
                {link.name}
                {link.submenu && <ChevronDown size={14} className={cn("transition-transform duration-300", activeSubmenu === link.name && "rotate-180")} />}
              </Link>
              
              {link.submenu && (
                <div 
                  className={cn(
                    "absolute top-full left-0 mt-2 w-56 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden transition-all duration-300 shadow-2xl z-[60]",
                    activeSubmenu === link.name 
                      ? "opacity-100 visible translate-y-0" 
                      : "opacity-0 invisible translate-y-2"
                  )}
                >
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setActiveSubmenu(null)}
                      className="block px-6 py-4 text-sm font-bold text-[var(--color-text-main)] opacity-70 hover:opacity-100 hover:bg-[var(--color-electric)]/10 hover:text-[var(--color-electric)] transition-all flex items-center gap-2 group/sub"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-electric)] opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
            <Link
              href="/contact"
              className={cn(
                "bg-[var(--color-electric)] hover:brightness-110 text-white rounded-full font-bold transition-all hover:scale-105 active:scale-95 text-center",
                "px-5 py-2 text-sm"
              )}
            >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[var(--color-text-main)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 left-0 w-[85%] max-w-[320px] bg-[var(--color-card)] z-[100] md:hidden flex flex-col shadow-2xl overflow-hidden"
              style={{ backgroundColor: "var(--color-card)" }} // Explicitly ensure background
            >
              <div className="p-6 flex flex-col h-full bg-[var(--color-card)]">
                <div className="flex justify-between items-center mb-10">
                  <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                    <Logo className="w-8 h-8" />
                    <div className="flex flex-col leading-none">
                      <span className="text-xl font-bold tracking-tighter uppercase">
                        <span className="text-[var(--color-electric)]">Uma</span><span className="text-[var(--color-text-main)]">Techno</span>
                      </span>
                      <span className="text-[7px] text-gray-500 font-bold tracking-[0.2em] uppercase mt-0.5">
                        Innovate. Create. <span className="text-[var(--color-electric)]">Elevate.</span>
                      </span>
                    </div>
                  </Link>
                  <button 
                    onClick={() => setIsOpen(false)} 
                    className="w-10 h-10 rounded-full bg-[var(--color-navy-light)] flex items-center justify-center text-[var(--color-text-main)] border border-[var(--color-border)] shadow-sm"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex flex-col gap-1 overflow-y-auto flex-1 pb-10 scrollbar-hide">
                  {navLinks.map((link) => (
                    <div key={link.name} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <Link
                          href={link.href}
                          className={cn(
                            "text-xl font-bold font-outfit py-3 block transition-colors",
                            pathname === link.href ? "text-[var(--color-electric)]" : "text-[var(--color-text-main)]"
                          )}
                          onClick={() => !link.submenu && setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                        {link.submenu && (
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveSubmenu(activeSubmenu === link.name ? null : link.name);
                            }}
                            className="p-2 text-[var(--color-text-main)] opacity-50"
                          >
                            <ChevronDown size={20} className={cn("transition-transform duration-300", activeSubmenu === link.name && "rotate-180")} />
                          </button>
                        )}
                      </div>
                      
                      {link.submenu && activeSubmenu === link.name && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          className="pl-4 flex flex-col gap-1 border-l-2 border-[var(--color-electric)]/20 mb-4"
                        >
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="text-[var(--color-text-main)] opacity-60 py-2.5 text-sm font-bold hover:text-[var(--color-electric)] transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-[var(--color-border)] space-y-6">
                  <Link
                    href="/contact"
                    className="block w-full bg-[var(--color-electric)] text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg hover:brightness-110 active:scale-[0.98] transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Get a Quote
                  </Link>
                  <div className="text-center text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                    © 2026 UMA TECHNO. <br /> SOLUTIONS FOR THE FUTURE.
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
