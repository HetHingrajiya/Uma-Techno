import React from "react";
import { Globe, Smartphone, BarChart, Palette, Code, Megaphone, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui/Reveal";

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

// // 
export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 lg:pt-48 space-y-32 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <Reveal direction="down" delay={0.1}>
          <h1 className="text-5xl lg:text-7xl font-bold font-outfit text-[var(--color-text-main)]">
            Empowering Your Business With <br />
            <span className="text-gradient">Premium Digital Solutions</span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-xl text-[var(--color-text-main)] opacity-70 max-w-3xl mx-auto">
            We combine creativity and technology to deliver exceptional results 
            that help your business thrive in an ever-evolving digital landscape.
          </p>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <Reveal key={service.slug} delay={0.1 * idx} width="100%">
            <div className="glass-card p-10 h-full rounded-[3rem] border-white/5 hover:border-electric/30 transition-all flex flex-col group">
              <div className="w-16 h-16 bg-[var(--color-electric)]/10 rounded-2xl flex items-center justify-center text-[var(--color-electric)] mb-8 group-hover:bg-[var(--color-electric)] group-hover:text-white transition-all">
                <service.icon size={32} />
              </div>
              <h2 className="text-3xl font-bold font-outfit mb-4 text-[var(--color-text-main)]">{service.title}</h2>
              <p className="text-[var(--color-text-main)] opacity-70 mb-8 flex-grow">{service.description}</p>
              
              <ul className="space-y-3 mb-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[var(--color-text-main)] opacity-80">
                    <CheckCircle size={16} className="text-[var(--color-electric)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to={`/services/${service.slug}`}
                className="w-full py-4 bg-white/5 hover:bg-[var(--color-electric)] text-[var(--color-text-main)] hover:text-white text-center rounded-2xl font-bold transition-all"
              >
                Learn More
              </Link>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}

