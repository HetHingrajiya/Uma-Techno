"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from '@/components/ui/Logo';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    submenu: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Mobile App Development', href: '/services/app-development' },
      { name: 'UI/UX Design', href: '/services/ui-ux-design' },
      { name: 'SEO Services', href: '/services/seo-services' },
      { name: 'Custom Software', href: '/services/custom-software' },
      { name: 'Digital Branding', href: '/services/digital-branding' },
    ]
  },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-[1000] transition-all duration-500",
      scrolled 
        ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" 
        : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Logo className="w-10 h-10 transition-transform group-hover:scale-110" />
          <div className="flex flex-col leading-none">
            <span className={cn(
              "text-2xl font-black tracking-tighter uppercase transition-colors",
              scrolled ? "text-[var(--color-navy)]" : "text-[var(--color-text-main)]"
            )}>
              <span className="text-[var(--color-electric)]">Uma</span>Techno
            </span>
            <span className="text-[8px] text-[var(--color-electric)] font-bold tracking-[0.3em] uppercase mt-0.5">
              Innovate. Create. Elevate.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest transition-colors hover:text-[var(--color-electric)]",
                  pathname === link.href ? "text-[var(--color-electric)]" : "text-[var(--color-text-main)]"
                )}
              >
                {link.name}
              </Link>
              {link.submenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-4 min-w-[240px] grid gap-2">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="p-3 rounded-xl hover:bg-gray-50 text-sm font-bold text-gray-600 hover:text-[var(--color-electric)] transition-all flex items-center justify-between group/sub"
                      >
                        {sub.name}
                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--color-electric)]"
                />
              )}
            </div>
          ))}
          
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-gradient-premium text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:scale-105 transition-all"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[var(--color-text-main)] p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
              className="fixed inset-0 w-full h-full z-[9999] md:hidden flex flex-col shadow-2xl bg-white"
              style={{ backgroundColor: "#FFFFFF", opacity: 1 }}
            >
              <div className="flex flex-col h-full bg-white relative">
                {/* Drawer Header */}
                <div className="p-6 flex justify-between items-center border-b border-gray-100 bg-white shrink-0">
                  <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                    <Logo className="w-8 h-8" />
                    <div className="flex flex-col leading-none">
                      <span className="text-xl font-bold tracking-tighter uppercase text-[#0F172A]">
                        <span className="text-[var(--color-electric)]">Uma</span>Techno
                      </span>
                      <span className="text-[7px] text-gray-400 font-bold tracking-[0.2em] uppercase mt-0.5">
                        Innovate. Create. Elevate.
                      </span>
                    </div>
                  </Link>
                  <button 
                    onClick={() => setIsOpen(false)} 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 border border-gray-200"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Nav Links Container */}
                <div className="flex-1 px-6 py-8 space-y-6 bg-white overflow-y-auto">
                  {navLinks.map((link) => (
                    <div key={link.name} className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Link
                          href={link.href}
                          className="text-xl font-bold font-outfit"
                          style={{ color: pathname === link.href ? "var(--color-electric)" : "#0F172A" }}
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
                            className="p-2 text-gray-400"
                          >
                            <ChevronDown size={24} className={cn("transition-transform duration-300", activeSubmenu === link.name && "rotate-180")} />
                          </button>
                        )}
                      </div>
                      
                      {link.submenu && activeSubmenu === link.name && (
                        <div className="pl-4 flex flex-col gap-5 border-l-2 border-[var(--color-electric)]/20 mb-4">
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="text-lg font-bold"
                              style={{ color: "#64748B" }}
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

                {/* Drawer Footer */}
                <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-6 shrink-0 mt-auto">
                  <Link
                    href="/contact"
                    className="block w-full bg-[var(--color-electric)] text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Get a Quote
                  </Link>
                  <div className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">
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
