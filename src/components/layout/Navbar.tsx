import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our work", href: "/portfolio" },
  { name: "Insights", href: "/blog" },
  { name: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useLocation().pathname;

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[1000] px-3 sm:px-6 pt-3">
        <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#090908]/90 px-4 sm:px-6 py-3 shadow-[0_12px_45px_rgba(0,0,0,.24)] backdrop-blur-xl">
          <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="UMA TECHNO home">
            <Logo className="h-9 w-9 sm:h-10 sm:w-10" />
            <span className="flex flex-col leading-none">
              <span className="text-lg sm:text-xl font-black tracking-[-.045em] text-white">UMA <span className="text-[var(--color-electric)]">TECHNO</span></span>
              <span className="mt-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-[.22em] text-white/45">Ideas into impact</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href + "/"));
              return <Link key={link.name} to={link.href} className={`relative py-2 text-[13px] font-semibold transition-colors hover:text-[var(--color-electric)] ${active ? "text-[var(--color-electric)]" : "text-white/70"}`}>
                {link.name}
                {active && <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[var(--color-electric)]" />}
              </Link>;
            })}
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-electric)] px-5 py-3 text-xs font-extrabold text-[#11100B] transition-transform hover:-translate-y-0.5">
              Start a project <ArrowUpRight size={15} />
            </Link>
          </div>

          <button type="button" className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[.04] text-white" onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && <>
          <motion.button type="button" aria-label="Close navigation menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 z-[1001] bg-black/70 backdrop-blur-sm lg:hidden" />
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .18 }} className="fixed left-3 right-3 top-[5.4rem] z-[1002] rounded-2xl border border-white/10 bg-[#10100E] p-3 shadow-2xl lg:hidden">
            <div className="flex flex-col">
              {navLinks.map((link) => {
                const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href + "/"));
                return <Link key={link.name} to={link.href} className={`rounded-xl px-4 py-3.5 text-sm font-bold transition-colors hover:bg-white/[.05] ${active ? "text-[var(--color-electric)]" : "text-white/75"}`}>{link.name}</Link>;
              })}
              <Link to="/contact" className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[var(--color-electric)] px-4 py-3.5 text-sm font-extrabold text-[#11100B]">Start a project <ArrowUpRight size={17} /></Link>
            </div>
          </motion.div>
        </>}
      </AnimatePresence>
    </>
  );
}
