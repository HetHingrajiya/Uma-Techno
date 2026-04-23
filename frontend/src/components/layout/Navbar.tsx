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
      { name: "Web Development", href: "/services/web-development" },
      { name: "App Development", href: "/services/app-development" },
      { name: "UI/UX Design", href: "/services/ui-ux" },
      { name: "SEO Optimization", href: "/services/seo" },
      { name: "Digital Branding", href: "/services/branding" },
    ]
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-navy/80 backdrop-blur-lg border-b border-white/10 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="w-10 h-10" />
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-bold tracking-tighter text-white uppercase">
              Uma<span className="text-electric">Techno</span>
            </span>
            <span className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase mt-1">
              Engineering Excellence.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-electric flex items-center gap-1",
                  pathname === link.href ? "text-electric" : "text-gray-300"
                )}
              >
                {link.name}
                {link.submenu && <ChevronDown size={14} />}
              </Link>
              
              {link.submenu && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-navy-light border border-white/10 rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 shadow-2xl">
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-3 text-sm text-gray-300 hover:bg-electric/10 hover:text-white transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
            <Link
              href="/contact"
              className="bg-electric hover:bg-accent text-navy px-6 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
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
            className="fixed inset-0 bg-navy z-[100] md:hidden flex flex-col"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-16">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                  <Logo className="w-8 h-8" />
                  <span className="text-xl font-bold tracking-tighter text-white uppercase">Uma<span className="text-electric">Techno</span></span>
                </Link>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-8 overflow-y-auto flex-1">
                {navLinks.map((link) => (
                  <div key={link.name} className="space-y-4">
                    <Link
                      href={link.href}
                      className={cn(
                        "text-4xl font-bold font-outfit transition-colors",
                        pathname === link.href ? "text-electric" : "text-white"
                      )}
                      onClick={() => !link.submenu && setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <div className="pl-4 flex flex-col gap-4 border-l border-electric/20">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="text-gray-400 text-lg hover:text-electric transition-colors"
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
