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
      { name: "SEO Services", href: "/services/seo" },
      { name: "UI/UX Design", href: "/services/ui-ux" },
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
              Smart Solutions. Real Impact.
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
            className="bg-electric hover:bg-electric/90 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
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

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-light mt-4 rounded-2xl overflow-hidden border border-white/10"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-lg font-medium",
                    pathname === link.href ? "text-electric" : "text-gray-300"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-electric text-white text-center py-3 rounded-xl font-bold"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
