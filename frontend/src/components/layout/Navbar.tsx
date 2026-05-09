"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
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
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-[1000] transition-all duration-700 w-full md:w-auto",
          scrolled ? "top-4" : "top-0 md:top-8"
        )}
      >
        <div className={cn(
          "mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between overflow-visible",
          scrolled 
            ? "w-[95%] md:w-max px-6 py-3 bg-[var(--color-glass)] backdrop-blur-2xl border border-[var(--glass-border)] md:rounded-[2rem] shadow-[0_30px_60px_-15px_var(--shadow-color)]" 
            : "w-full md:w-max px-6 md:px-8 py-4 md:py-4 bg-transparent md:bg-[var(--color-card)]/40 md:backdrop-blur-xl md:border md:border-[var(--color-border)]/50 md:rounded-[2rem] shadow-sm"
        )}>
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group mr-8">
            <Logo className="w-9 h-9 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
            <div className="flex flex-col leading-none hidden sm:flex">
              <span className={cn(
                "text-xl font-black tracking-tighter uppercase transition-colors font-outfit",
                scrolled ? "text-[var(--color-navy)]" : "text-[var(--color-text-main)]"
              )}>
                <span className="text-[var(--color-electric)]">Uma</span>Techno
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.name} className="relative group/nav px-1">
                  <Link
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-full flex items-center gap-1",
                      isActive ? "text-[var(--color-electric)]" : "text-[var(--color-text-main)] hover:text-[var(--color-electric)] hover:bg-[var(--color-electric)]/5"
                    )}
                  >
                    {link.name}
                    {link.submenu && <ChevronDown size={14} className="opacity-50 group-hover/nav:rotate-180 transition-transform duration-300" />}
                  </Link>
                  
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[var(--color-electric)]/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {link.submenu && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300">
                      <div className="glass-card-premium rounded-[2rem] p-3 min-w-[280px] grid gap-1 transform origin-top scale-95 group-hover/nav:scale-100 transition-transform duration-500">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="px-4 py-3 rounded-2xl hover:bg-[var(--color-electric)]/10 text-sm font-bold text-[var(--color-text-main)] hover:text-[var(--color-electric)] transition-all flex items-center justify-between group/sub"
                          >
                            <span>{sub.name}</span>
                            <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-[var(--color-electric)]" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            
            <div className="ml-4 pl-4 border-l border-[var(--color-border)]">
              <Link
                href="/contact"
                className="group relative px-6 py-2.5 bg-gradient-premium text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center gap-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <Sparkles size={14} className="animate-pulse" />
                Start Project
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-10 h-10 rounded-full bg-[var(--color-electric)]/10 flex items-center justify-center text-[var(--color-electric)] hover:bg-[var(--color-electric)]/20 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[999] bg-[var(--background)]/90 md:hidden pt-24 px-6 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col min-h-full">
              <div className="grid gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="bg-[var(--color-card)] rounded-[2rem] border border-[var(--color-border)] overflow-hidden">
                      <div className="flex items-center justify-between p-4 px-6">
                        <Link
                          href={link.href}
                          className="text-2xl font-black font-outfit text-[var(--color-text-main)] uppercase tracking-tight"
                          onClick={() => !link.submenu && setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                        {link.submenu && (
                          <button 
                            onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                            className="w-10 h-10 rounded-full bg-[var(--color-electric)]/10 flex items-center justify-center text-[var(--color-electric)]"
                          >
                            <ChevronDown size={20} className={cn("transition-transform duration-300", activeSubmenu === link.name && "rotate-180")} />
                          </button>
                        )}
                      </div>
                      
                      <AnimatePresence>
                        {link.submenu && activeSubmenu === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-6 pb-4"
                          >
                            <div className="pt-4 border-t border-[var(--color-border)] grid gap-3">
                              {link.submenu.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  className="text-sm font-bold text-[var(--color-text-main)] opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-electric)]" />
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-auto pt-8"
              >
                <Link
                  href="/contact"
                  className="w-full py-4 rounded-[2rem] bg-gradient-premium text-white font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 shadow-xl"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles size={18} /> Let's Work Together
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
