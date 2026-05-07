"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "../ui/Logo";

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
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

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
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-[var(--color-card)] z-[100] md:hidden flex flex-col"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-16">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                  <Logo className="w-8 h-8" />
                  <div className="flex flex-col leading-none">
                    <span className="text-xl font-bold tracking-tighter uppercase">
                      <span className="text-electric">Uma</span><span className="text-[var(--color-text-main)]">Techno</span>
                    </span>
                    <span className="text-[7px] text-gray-500 font-bold tracking-[0.2em] uppercase mt-0.5">
                      Innovate. Create. <span className="text-[var(--color-electric)]">Elevate.</span>
                    </span>
                  </div>
                </Link>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="w-12 h-12 rounded-full bg-[var(--color-navy-light)] flex items-center justify-center text-[var(--color-text-main)] border border-[var(--color-border)] shadow-sm"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6 overflow-y-auto flex-1 pb-10">
                {navLinks.map((link) => (
                  <div key={link.name} className="space-y-4">
                    <Link
                      href={link.href}
                      className={cn(
                        "text-2xl font-bold font-outfit transition-colors",
                        pathname === link.href ? "text-[var(--color-electric)]" : "text-[var(--color-text-main)]"
                      )}
                      onClick={() => !link.submenu && setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <div className="pl-4 flex flex-col gap-4 border-l border-[var(--color-electric)]/20">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="text-[var(--color-text-main)] opacity-60 text-base font-medium hover:text-[var(--color-electric)] transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/5 space-y-6">
                <Link
                  href="/contact"
                  className="block w-full bg-electric text-navy text-center py-5 rounded-2xl font-bold text-xl shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Quote
                </Link>
                <div className="text-center text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                  © 2026 UMA TECHNO. SOLUTIONS FOR THE FUTURE.
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
