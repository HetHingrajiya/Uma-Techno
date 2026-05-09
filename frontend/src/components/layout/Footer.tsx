import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
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
    <footer className="relative pt-32 pb-12 overflow-hidden bg-[var(--color-navy)]" style={{ backgroundColor: 'var(--color-footer)' }}>
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-matrix opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-electric)] to-transparent opacity-50" />
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[60%] h-[400px] bg-[var(--color-electric)]/20 blur-[150px] pointer-events-none rounded-full" />

      {/* Massive CTA Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="bg-gradient-to-br from-[var(--color-card)]/10 to-transparent border border-white/10 rounded-[3rem] p-12 lg:p-20 text-center backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-electric)]/10 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none" />
          <h2 className="text-4xl lg:text-6xl font-black font-outfit text-white mb-6 tracking-tight">
            Ready to <span className="text-[var(--color-electric)]">Elevate</span> Your Brand?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
            Join visionary companies who trust Uma Techno to build their digital future. Let's engineer something extraordinary together.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-[var(--color-electric)] text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_40px_-10px_var(--color-electric)] hover:shadow-[0_0_60px_-10px_var(--color-electric)]"
          >
            Start Your Journey <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 text-white relative z-10">
        {/* Company Info */}
        <div className="lg:col-span-5 space-y-8 pr-0 lg:pr-12">
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="w-10 h-10 group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-black tracking-tighter uppercase font-outfit">
              <span className="text-[var(--color-electric)]">Uma</span><span className="text-white">Techno</span>
            </span>
          </Link>
          <p className="text-white/60 text-base leading-relaxed">
            A premium digital agency dedicated to engineering high-performance websites, 
            mobile applications, and custom business software that drive real growth.
          </p>
          <div className="flex gap-4">
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
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[var(--color-electric)] hover:text-white hover:border-[var(--color-electric)] transition-all hover:-translate-y-1"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-bold mb-8 text-lg uppercase tracking-widest text-[10px]">Company</h4>
          <ul className="space-y-4">
            {[
              { name: "About Us", href: "/about" },
              { name: "Our Work", href: "/portfolio" },
              { name: "Careers", href: "/careers" },
              { name: "Contact", href: "/contact" }
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-white/60 hover:text-[var(--color-electric)] hover:translate-x-1 inline-block transition-all text-sm font-medium">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-bold mb-8 text-lg uppercase tracking-widest text-[10px]">Expertise</h4>
          <ul className="space-y-4">
            {[
              { name: "Web Engineering", href: "/services/web-development" },
              { name: "SEO Mastery", href: "/services/seo-services" },
              { name: "Digital Strategy", href: "/services/digital-marketing" },
              { name: "App Innovation", href: "/services/app-development" },
              { name: "UI/UX Design", href: "/services/ui-ux-design" },
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-white/60 hover:text-[var(--color-electric)] hover:translate-x-1 inline-block transition-all text-sm font-medium">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-3">
          <h4 className="text-white font-bold mb-8 text-lg uppercase tracking-widest text-[10px]">Get in Touch</h4>
          <ul className="space-y-6">
            <li className="flex gap-4 items-start group">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-electric)]/10 flex items-center justify-center text-[var(--color-electric)] shrink-0 group-hover:bg-[var(--color-electric)] group-hover:text-white transition-colors">
                <MapPin size={18} />
              </div>
              <span className="text-white/60 text-sm leading-relaxed pt-2">Mavdi Main Road, Rajkot, Gujarat, India 360004</span>
            </li>
            <li className="flex gap-4 items-center group">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-electric)]/10 flex items-center justify-center text-[var(--color-electric)] shrink-0 group-hover:bg-[var(--color-electric)] group-hover:text-white transition-colors">
                <Phone size={18} />
              </div>
              <span className="text-white/60 text-sm font-medium">+91 92743 50728</span>
            </li>
            <li className="flex gap-4 items-center group">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-electric)]/10 flex items-center justify-center text-[var(--color-electric)] shrink-0 group-hover:bg-[var(--color-electric)] group-hover:text-white transition-colors">
                <Mail size={18} />
              </div>
              <span className="text-white/60 text-sm font-medium">uma.techno585@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <p className="text-white/40 text-sm font-medium">
          © {new Date().getFullYear()} Uma Techno. All rights reserved.
        </p>
        <div className="flex gap-8 text-sm">
          <Link href="/privacy-policy" className="text-white/40 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-white/40 hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
