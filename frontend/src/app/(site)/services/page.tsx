import React from "react";
import { Globe, Smartphone, BarChart, Palette, Code, Megaphone, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Digital Solutions for Modern Businesses",
  description: "Explore our range of digital services including Web Development, App Development, UI/UX Design, and SEO.",
};

const services = [
  {
    title: "Web Development",
    slug: "web-development",
    description: "Build high-performance, responsive websites using the latest technologies.",
    icon: Globe,
    features: ["Next.js & React", "E-commerce Solutions", "Custom CMS", "Performance Optimization"]
  },
  {
    title: "Mobile App Development",
    slug: "app-development",
    description: "Premium iOS and Android applications designed for growth.",
    icon: Smartphone,
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"]
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux",
    description: "User-centric designs that convert visitors into loyal customers.",
    icon: Palette,
    features: ["Prototyping", "User Research", "Visual Identity", "Interactive Design"]
  },
  {
    title: "SEO Services",
    slug: "seo",
    description: "Data-driven SEO strategies to boost your organic visibility.",
    icon: BarChart,
    features: ["Keyword Research", "On-page SEO", "Technical SEO", "Backlink Strategy"]
  },
  {
    title: "Custom Software",
    slug: "custom-software",
    description: "Scalable software solutions tailored to your business needs.",
    icon: Code,
    features: ["SaaS Development", "API Integration", "Cloud Solutions", "Legacy Migration"]
  },
  {
    title: "Digital Branding",
    slug: "branding",
    description: "Create a powerful brand identity that stands out in the digital world.",
    icon: Megaphone,
    features: ["Logo Design", "Brand Guidelines", "Social Media Kits", "Market Positioning"]
  }
];

export default function ServicesPage() {
  return (
    <div className="py-32 lg:py-40 space-y-32 bg-[var(--background)] overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[1000px] h-[1000px] bg-[var(--color-electric)]/5 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[var(--color-accent)]/5 blur-[200px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/50 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[var(--color-electric)] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-main)]">Elite Offerings</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-black font-outfit tracking-tighter text-[var(--color-text-main)]">
          Engineered For <br />
          <span className="text-gradient">Domination</span>
        </h1>
        <p className="text-xl text-[var(--color-text-main)] opacity-70 max-w-3xl mx-auto font-medium">
          We combine cutting-edge technology with premium design to deliver exceptional digital engines 
          that help your business thrive and scale rapidly.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {services.map((service, index) => (
          <div key={service.slug} className="glass-card-premium p-10 lg:p-12 rounded-[3rem] flex flex-col group relative overflow-hidden">
            {/* Hover Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-electric)]/5 blur-[80px] -mr-16 -mt-16 group-hover:bg-[var(--color-electric)]/20 transition-colors duration-700 pointer-events-none" />
            
            <div className="w-16 h-16 bg-[var(--color-navy)] shadow-lg rounded-2xl flex items-center justify-center text-white mb-10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 relative z-10">
              <service.icon size={32} />
            </div>
            
            <h2 className="text-3xl font-black font-outfit mb-4 text-[var(--color-text-main)] tracking-tight relative z-10">
              {service.title}
            </h2>
            <p className="text-[var(--color-text-main)] opacity-60 mb-10 flex-grow leading-relaxed relative z-10">
              {service.description}
            </p>
            
            <ul className="space-y-4 mb-12 relative z-10">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-[var(--color-text-main)] opacity-80 font-medium">
                  <CheckCircle size={18} className="text-[var(--color-electric)] shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link 
              href={`/services/${service.slug}`}
              className="flex items-center gap-3 text-[var(--color-text-main)] font-black uppercase tracking-widest text-xs group/link relative z-10 transition-colors hover:text-[var(--color-electric)]"
            >
              Explore Solutions 
              <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform duration-500" />
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
