import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
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
      { name: 'UI/UX Design', href: '/services/ui-ux' },
      { name: 'SEO Services', href: '/services/seo' },
      { name: 'Custom Software', href: '/services/custom-software' },
      { name: 'Digital Branding', href: '/services/branding' },
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
  const pathname = useLocation().pathname;

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
    <>
      <nav className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-[1000] transition-all duration-500 rounded-full",
        "bg-[#0B1120]/95 backdrop-blur-xl py-3 shadow-2xl border border-[#1E293B]/50" 
      )}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Logo className="w-10 h-10 transition-transform group-hover:scale-110" />
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-tighter uppercase transition-colors text-white">
                <span className="text-[var(--color-electric)]">Uma</span> Techno
              </span>
              <span className="text-[8px] font-bold tracking-[0.3em] uppercase mt-0.5 transition-colors text-white/70">
                Innovate. Create. <span className="text-[var(--color-electric)]">Elevate.</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.href}
                  className={cn(
                    "text-sm font-bold uppercase tracking-widest transition-colors hover:text-[var(--color-electric)]",
                    pathname === link.href ? "text-[var(--color-electric)]" : "text-white/90"
                  )}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-[var(--color-header)] border border-[var(--color-border)]/50 shadow-2xl rounded-3xl p-4 min-w-[300px] grid gap-2">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="p-3 rounded-xl hover:bg-[var(--color-nav-text)]/5 text-sm font-bold text-[var(--color-nav-text)] opacity-70 hover:opacity-100 hover:text-[var(--color-electric)] transition-all flex items-center justify-between group/sub"
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
              to="/contact"
              className="px-6 py-2.5 bg-gradient-premium text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:scale-105 transition-all"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 backdrop-blur-md rounded-xl shadow-sm border transition-colors text-white bg-[#0B1120]/50 border-white/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay - Moved outside nav to prevent inheritance issues */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9998] md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
              className="fixed inset-y-0 left-0 w-[85%] max-w-[320px] h-full z-[9999] md:hidden flex flex-col shadow-2xl bg-[var(--color-header)] overflow-hidden"
            >
              <div className="flex flex-col h-full bg-[var(--color-header)] relative">
                {/* Drawer Header */}
                <div className="p-6 flex justify-between items-center border-b border-[var(--color-nav-text)]/10 bg-[var(--color-header)] shrink-0">
                  <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                    <Logo className="w-8 h-8" />
                    <div className="flex flex-col leading-none">
                      <span className="text-2xl font-black tracking-tighter uppercase text-[var(--color-nav-text)]">
                        <span className="text-[var(--color-electric)]">Uma</span> Techno
                      </span>
                      <span className="text-[7px] font-bold tracking-[0.2em] uppercase mt-0.5">
                        <span className="text-[var(--color-nav-text)] opacity-60">Innovate. Create. </span><span className="text-[var(--color-electric)]">Elevate.</span>
                      </span>
                    </div>
                  </Link>
                  <button 
                    onClick={() => setIsOpen(false)} 
                    className="w-10 h-10 rounded-full bg-[var(--color-nav-text)]/5 flex items-center justify-center text-[var(--color-nav-text)] border border-[var(--color-nav-text)]/10"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Nav Links Container */}
                <div className="flex-1 px-6 py-8 space-y-4 bg-transparent overflow-y-auto">
                  {navLinks.map((link) => (
                    <div key={link.name} className="space-y-3">
                      <div className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl transition-all",
                        pathname === link.href ? "bg-[var(--color-electric)] text-white shadow-md shadow-[var(--color-electric)]/20" : "hover:bg-[var(--color-nav-text)]/5 text-[var(--color-nav-text)]"
                      )}>
                        <Link
                          to={link.href}
                          className="text-lg font-bold font-outfit flex-1"
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
                            className={cn("p-1", pathname === link.href ? "text-white" : "text-[var(--color-nav-text)]/40")}
                          >
                            <ChevronDown size={20} className={cn("transition-transform duration-300", activeSubmenu === link.name && "rotate-180")} />
                          </button>
                        )}
                      </div>
                      
                      {link.submenu && activeSubmenu === link.name && (
                        <div className="pl-4 flex flex-col gap-4 border-l-2 border-[var(--color-electric)]/20 mb-2">
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.href}
                              className="text-base font-bold"
                              style={{ color: "var(--color-nav-text)", opacity: 0.6 }}
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
                <div className="p-6 bg-[var(--color-nav-text)]/5 border-t border-[var(--color-nav-text)]/10 space-y-6 shrink-0 mt-auto">
                  <Link
                    to="/contact"
                    className="block w-full bg-[var(--color-electric)] text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Get a Quote
                  </Link>
                  <div className="text-center text-[10px] text-[var(--color-nav-text)] opacity-40 uppercase tracking-widest font-bold">
                    © 2026 UMA TECHNO. <br /> SOLUTIONS FOR THE FUTURE.
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

