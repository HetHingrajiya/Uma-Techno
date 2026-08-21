import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "../ui/Logo";

const Facebook = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Twitter = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const Instagram = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const Linkedin = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-[var(--background)] border-t border-[var(--color-border)]/50 mt-20">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-gradient-to-b from-[var(--color-electric)]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 text-[var(--color-text-main)] relative z-10">
        
        {/* Column 1: Brand Info */}
        <div className="lg:col-span-4 space-y-6">
          <Link to="/" className="flex flex-col mb-4 group inline-block">
            <span className="text-3xl font-black font-outfit tracking-tighter uppercase leading-none text-white transition-colors group-hover:text-[var(--color-electric)]">
              UMA TECHNO
            </span>
          </Link>
          <p className="text-[var(--color-text-main)] opacity-60 text-sm leading-relaxed max-w-sm font-medium">
            Digital products and business software built for growth. We engineer high-performance platforms that move businesses forward.
          </p>
          <div className="flex gap-3 pt-4">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Instagram, href: "https://www.instagram.com/uma.techno/" },
              { Icon: Linkedin, href: "https://www.linkedin.com/company/uma-techno" }
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[var(--color-text-main)] opacity-60 hover:opacity-100 hover:bg-[var(--color-electric)]/20 hover:text-[var(--color-electric)] hover:border-[var(--color-electric)]/50 transition-all shadow-sm"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Company */}
        <div className="lg:col-span-2 lg:col-start-6">
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest font-outfit">Company</h4>
          <ul className="space-y-3">
            {[
              { name: "About", href: "/about" },
              { name: "Work", href: "/portfolio" },
              { name: "Products", href: "/products" },
              { name: "Careers", href: "/careers" },
              { name: "Contact", href: "/contact" }
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="text-[var(--color-text-main)] opacity-60 hover:opacity-100 hover:text-[var(--color-electric)] text-sm transition-all flex items-center gap-2 group">
                  <span className="w-0 h-px bg-[var(--color-electric)] group-hover:w-3 transition-all" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="lg:col-span-3">
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest font-outfit">Services</h4>
          <ul className="space-y-3">
            {[
              { name: "Web Development", href: "/services/web-development" },
              { name: "Mobile App Development", href: "/services/mobile-app-development" },
              { name: "ERP Development", href: "/services/erp-development" },
              { name: "SaaS Development", href: "/services/saas-development" },
              { name: "E-Commerce", href: "/services/ecommerce-development" },
              { name: "Custom Software", href: "/services/custom-software" },
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="text-[var(--color-text-main)] opacity-60 hover:opacity-100 hover:text-[var(--color-electric)] text-sm transition-all flex items-center gap-2 group">
                  <span className="w-0 h-px bg-[var(--color-electric)] group-hover:w-3 transition-all" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div className="lg:col-span-3">
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest font-outfit">Resources</h4>
          <ul className="space-y-3">
            {[
              { name: "Blog", href: "/blog" },
              { name: "Case Studies", href: "/case-studies" },
              { name: "FAQs", href: "/faq" },
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="text-[var(--color-text-main)] opacity-60 hover:opacity-100 hover:text-[var(--color-electric)] text-sm transition-all flex items-center gap-2 group">
                  <span className="w-0 h-px bg-[var(--color-electric)] group-hover:w-3 transition-all" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 space-y-3">
             <a href="mailto:uma.techno585@gmail.com" className="flex gap-3 text-sm text-[var(--color-text-main)] opacity-60 hover:opacity-100 hover:text-[var(--color-electric)] transition-colors">
               <Mail className="shrink-0" size={18} />
               <span>uma.techno585@gmail.com</span>
             </a>
             <a href="tel:+919274350728" className="flex gap-3 text-sm text-[var(--color-text-main)] opacity-60 hover:opacity-100 hover:text-[var(--color-electric)] transition-colors">
               <Phone className="shrink-0" size={18} />
               <span>+91 92743 50728</span>
             </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-[var(--color-text-main)] opacity-40 text-xs font-bold tracking-widest uppercase">
          © {new Date().getFullYear()} UMA Techno. All rights reserved.
        </p>
        <div className="flex gap-8 text-xs font-bold tracking-widest uppercase">
          <Link to="/privacy-policy" className="text-[var(--color-text-main)] opacity-40 hover:opacity-100 hover:text-[var(--color-electric)] transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-[var(--color-text-main)] opacity-40 hover:opacity-100 hover:text-[var(--color-electric)] transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}

