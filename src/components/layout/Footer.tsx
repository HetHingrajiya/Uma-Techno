import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";

const companyLinks = [
  { label: "About UMA TECHNO", href: "/about" },
  { label: "Our work", href: "/portfolio" },
  { label: "Insights", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" }
];

const serviceLinks = [
  { label: "Web development", href: "/web-development" },
  { label: "Mobile applications", href: "/services" },
  { label: "SEO services", href: "/seo-services" },
  { label: "Digital marketing", href: "/digital-marketing" },
  { label: "All services", href: "/services" }
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080807] pt-16 sm:pt-20 pb-8">
      <div className="pointer-events-none absolute -top-40 left-1/3 h-72 w-72 rounded-full bg-[var(--color-electric)]/[.07] blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 xl:grid-cols-[1.4fr_.7fr_.8fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3" aria-label="UMA TECHNO home">
              <Logo className="h-11 w-11" />
              <span className="text-2xl font-black tracking-[-.05em] text-white">UMA <span className="text-[var(--color-electric)]">TECHNO</span></span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">Digital products, thoughtful design and growth-focused marketing for businesses ready for their next chapter.</p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.instagram.com/uma.techno/" target="_blank" rel="noopener noreferrer" aria-label="UMA TECHNO on Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-black tracking-tight text-white/70 transition-colors hover:border-[var(--color-electric)]/50 hover:text-[var(--color-electric)]">IG</a>
              <a href="https://www.linkedin.com/company/uma-techno" target="_blank" rel="noopener noreferrer" aria-label="UMA TECHNO on LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-black tracking-tight text-white/70 transition-colors hover:border-[var(--color-electric)]/50 hover:text-[var(--color-electric)]">in</a>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[.2em] text-white">Explore</h2>
            <ul className="mt-5 space-y-3">{companyLinks.map((item) => <li key={item.href}><Link to={item.href} className="text-sm text-white/55 transition-colors hover:text-[var(--color-electric)]">{item.label}</Link></li>)}</ul>
          </div>

          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[.2em] text-white">Services</h2>
            <ul className="mt-5 space-y-3">{serviceLinks.map((item) => <li key={item.label}><Link to={item.href} className="text-sm text-white/55 transition-colors hover:text-[var(--color-electric)]">{item.label}</Link></li>)}</ul>
          </div>

          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[.2em] text-white">Let’s connect</h2>
            <p className="mt-5 text-sm leading-6 text-white/50">Have a project, a question or an idea? Tell us what you want to build.</p>
            <div className="mt-5 space-y-4">
              <a href="mailto:uma.techno585@gmail.com" className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-[var(--color-electric)]"><Mail size={17} className="shrink-0 text-[var(--color-electric)]" /><span className="break-all">uma.techno585@gmail.com</span></a>
              <a href="tel:+919274350728" className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-[var(--color-electric)]"><Phone size={17} className="shrink-0 text-[var(--color-electric)]" /><span>+91 92743 50728</span></a>
              <p className="flex items-center gap-3 text-sm text-white/45"><MapPin size={17} className="shrink-0 text-[var(--color-electric)]" />Rajkot, Gujarat, India</p>
            </div>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--color-electric)] hover:gap-3 transition-all">Start a conversation <ArrowUpRight size={16} /></Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} UMA TECHNO. All rights reserved.</p>
          <div className="flex gap-6"><Link to="/privacy" className="transition-colors hover:text-white/70">Privacy policy</Link><Link to="/terms" className="transition-colors hover:text-white/70">Terms of use</Link></div>
        </div>
      </div>
    </footer>
  );
}
