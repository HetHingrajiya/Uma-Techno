"use client";

import Hero from "@/components/ui/Hero";
import {
  Code, Globe, Smartphone, BarChart, Palette, Megaphone,
  Rocket, Shield, Zap, Users, Star, ArrowRight, CheckCircle, Sparkles
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Static data for trust metrics and growth indicators
const stats = [
  { label: "Successful Projects", value: "12+", icon: Rocket },
  { label: "Growth Delivered", value: "3x", icon: Zap },
  { label: "Client Satisfaction", value: "100%", icon: Users },
  { label: "Support Coverage", value: "24/7", icon: Shield },
];

// Step-by-step methodology shown in the Process section
const processSteps = [
  { title: "Discovery & Strategy", desc: "We deep-dive into your business model to align our solution with your revenue goals." },
  { title: "Prototyping", desc: "Creating high-fidelity wireframes and interactive prototypes for your review." },
  { title: "Iterative Development", desc: "Building in agile sprints with regular updates and feedback cycles." },
  { title: "Quality Assurance", desc: "Rigorous testing across devices to ensure a flawless, bug-free launch." },
  { title: "Launch & Support", desc: "Deployment to production followed by 24/7 monitoring and long-term scaling." },
];

/**
 * Home component: The primary landing page for Uma Techno.
 * Features dynamic data fetching for CMS content and a widget-based layout control.
 */
export default function Home() {
  const [widgets, setWidgets] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /**
     * Primary data orchestrator: Fetches all dynamic content from the backend.
     * Implements fallback data to ensure the site remains functional even if the API is down.
     */
    const fetchData = async () => {
      // Local fallbacks used for development or if the server fails
      const fallbackWidgets = [
        { name: 'hero', enabled: true }, { name: 'trusted', enabled: true },
        { name: 'services', enabled: true }, { name: 'why-choose-us', enabled: true },
        { name: 'stats', enabled: true }, { name: 'process', enabled: true },
        { name: 'portfolio', enabled: true }, { name: 'testimonials', enabled: true },
        { name: 'cta', enabled: true }
      ];
      
      const fallbackServices = [
        { title: "Web Engineering", description: "Scalable, secure, and conversion-optimized web platforms for growing businesses in Rajkot.", icon: "Globe", slug: "web-development" },
        { title: "SEO Mastery", description: "Technical SEO and digital strategy to dominate search results and drive local leads in Gujarat.", icon: "BarChart", slug: "seo-services" },
        { title: "Digital Marketing", description: "Full-stack marketing solutions focused on ROI and lead generation for local brands.", icon: "Megaphone", slug: "digital-marketing" },
        { title: "E-commerce Growth", description: "End-to-end online stores with advanced payment integrations and marketing focus.", icon: "Rocket", slug: "ecommerce" },
        { title: "Mobile Innovation", description: "Native-quality iOS and Android applications that deliver exceptional user experiences.", icon: "Smartphone", slug: "app-development" },
      ];

      const fallbackProjects = [
        { 
          title: "Premium Jewelry E-commerce", 
          category: "E-commerce", 
          industry: "Fashion & Jewelry",
          challenge: "Needed a luxury digital presence that matched their physical showroom quality in Rajkot.",
          solution: "Built a custom Next.js storefront with high-fidelity visuals and 3D product previews.",
          result: "+450% Conversion Increase",
          tech: ["Next.js", "Three.js", "Prisma"],
          featuredImage: "/images/project-1.png", 
          slug: "jewelry-ecommerce" 
        },
        { 
          title: "Healthcare Booking System", 
          category: "Web App", 
          industry: "Medical",
          challenge: "Manual appointment scheduling was causing 40% lead leakage for local clinics.",
          solution: "Automated booking system with real-time slot management and SMS notifications.",
          result: "Zero Manual Overhead",
          tech: ["React", "Node.js", "PostgreSQL"],
          featuredImage: "/images/project-2.png", 
          slug: "booking-platform" 
        },
        { 
          title: "Corporate Fintech Dashboard", 
          category: "Software", 
          industry: "Finance",
          challenge: "Legacy systems were slow and insecure for handling sensitive transaction data.",
          solution: "End-to-end encrypted dashboard with real-time data visualization.",
          result: "99.9% System Uptime",
          tech: ["TypeScript", "D3.js", "Azure"],
          featuredImage: "/images/project-3.png", 
          slug: "fintech-dashboard" 
        }
      ];

      // Quick return for local development to avoid network lag
      if (process.env.NODE_ENV === 'development') {
        setWidgets(fallbackWidgets);
        setServices(fallbackServices);
        setProjects(fallbackProjects);
        setLoading(false);
        return;
      }

      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app';

        // Parallel fetch for core page components
        const [wRes, sRes, pRes] = await Promise.all([
          fetch(`${baseUrl}/api/v1/widgets`),
          fetch(`${baseUrl}/api/v1/services`),
          fetch(`${baseUrl}/api/v1/projects`),
        ]);

        if (wRes.ok) {
          const data = await wRes.json();
          setWidgets(data.length > 0 ? data : fallbackWidgets);
        }

        if (sRes.ok) {
          const data = await sRes.json();
          setServices(data.length > 0 ? data : fallbackServices);
        }

        if (pRes.ok) {
          const data = await pRes.json();
          setProjects(data.length > 0 ? data : fallbackProjects);
        }

        // Sequential fetch for non-critical assets (testimonials)
        try {
          const tRes = await fetch(`${baseUrl}/api/v1/testimonials`);
          if (tRes.ok) {
            const data = await tRes.json();
            setTestimonials(data);
          }
        } catch (err) {
          console.error("Testimonials fetch failed");
        }

      } catch (err) {
        console.error("API fetch failed, using fallback data", err);
        setWidgets(fallbackWidgets);
        setServices(fallbackServices);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  /**
   * Layout Control:
   * Checks if a specific section (widget) is enabled in the Admin Panel.
   */
  const isEnabled = (name: string) => {
    const w = widgets.find(w => w.name === name);
    return w ? w.enabled : true;
  };

  /**
   * Dynamic Icon Mapping:
   * Converts string-based icon names from the database into Lucide React components.
   */
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe size={32} />;
      case 'Rocket': return <Rocket size={32} />;
      case 'Smartphone': return <Smartphone size={32} />;
      case 'Code': return <Code size={32} />;
      case 'BarChart': return <BarChart size={32} />;
      case 'Megaphone': return <Megaphone size={32} />;
      default: return <Zap size={32} />;
    }
  };

  if (loading) return null;

  return (
    <div className="flex flex-col gap-24 lg:gap-40 pb-0 bg-[var(--background)]">
      {/* Hero Section */}
      {isEnabled('hero') && <Hero />}

      {/* Trust & Stats Section - Bento Grid */}
      {isEnabled('stats') && (
        <section className="max-w-7xl mx-auto px-6 w-full -mt-20 relative z-20">
          <div className="bento-grid">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "bento-item group flex flex-col justify-between min-h-[200px]",
                  i === 0 ? "md:col-span-2 bg-gradient-premium border-none" : ""
                )}
              >
                {i === 0 && <div className="absolute inset-0 bg-matrix opacity-20" />}
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10",
                  i === 0 ? "bg-white/20 text-white" : "bg-[var(--color-electric)]/10 text-[var(--color-electric)] group-hover:scale-110 transition-transform"
                )}>
                  <stat.icon size={28} />
                </div>
                <div className="relative z-10 mt-auto">
                  <div className={cn(
                    "text-4xl lg:text-5xl font-black font-outfit tracking-tighter mb-2",
                    i === 0 ? "text-white" : "text-[var(--color-text-main)]"
                  )}>{stat.value}</div>
                  <div className={cn(
                    "text-sm font-bold uppercase tracking-widest",
                    i === 0 ? "text-white/80" : "text-[var(--color-text-main)] opacity-50"
                  )}>{stat.label}</div>
                </div>
                {i !== 0 && <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[var(--color-electric)]/5 rounded-full blur-2xl group-hover:bg-[var(--color-electric)]/20 transition-all duration-500" />}
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-20 mt-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {["Retailers", "Real Estate", "Startups", "Enterprises", "Medical Centres"].map(brand => (
              <span key={brand} className="text-xl lg:text-3xl font-black font-outfit text-[var(--color-text-main)]">{brand}</span>
            ))}
          </div>
        </section>
      )}

      {/* Services Grid */}
      {isEnabled('services') && (
        <section className="max-w-7xl mx-auto px-6 w-full relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-electric)]/5 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="text-center space-y-6 mb-24 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/50 backdrop-blur-sm">
              <Sparkles size={14} className="text-[var(--color-electric)]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-main)]">Elite Capabilities</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black font-outfit tracking-tighter text-[var(--color-text-main)]">
              Engineered For <br /> <span className="text-gradient">Domination</span>
            </h2>
            <p className="text-[var(--color-text-main)] opacity-60 max-w-2xl mx-auto text-lg">
              We don't just build websites. We create high-performance digital engines designed to capture leads and scale revenue rapidly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {services.map((service, index) => {
              const isLarge = index === 0 || index === 3;
              return (
                <Link
                  key={service.slug}
                  href={service.slug.startsWith('/') ? service.slug : `/${service.slug}`}
                  className={cn(
                    "group glass-card-premium p-10 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden",
                    isLarge ? "lg:col-span-2 min-h-[450px]" : "min-h-[450px]"
                  )}
                >
                  <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-electric)]/5 blur-[100px] -mr-32 -mt-32 group-hover:bg-[var(--color-electric)]/20 transition-colors duration-700 pointer-events-none" />
                  
                  <div className="space-y-8 relative z-10">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg bg-[var(--color-navy)] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                      {getIcon(service.icon || 'Globe')}
                    </div>
                    <div>
                      <h4 className="text-3xl font-black font-outfit leading-tight text-[var(--color-text-main)] uppercase tracking-tighter mb-4">
                        {service.title}
                      </h4>
                      <p className="text-[var(--color-text-main)] opacity-60 leading-relaxed text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex items-center gap-4 text-sm font-black tracking-widest text-[var(--color-text-main)] group-hover:text-[var(--color-electric)] uppercase transition-colors relative z-10">
                    Explore <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform duration-500" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Differentiators Section */}
      {isEnabled('why-choose-us') && (
        <section className="max-w-7xl mx-auto px-6 w-full py-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-10 bg-gradient-glow opacity-30 blur-[120px] group-hover:opacity-50 transition-all duration-700 pointer-events-none" />
              <div className="relative aspect-[4/5] lg:aspect-[3/4] bg-[var(--color-card)] border border-[var(--color-border)] rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="/images/templates.png"
                  alt="Engineering Excellence"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/80 via-transparent to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-10 lg:-right-20 glass-card-premium p-6 rounded-3xl shadow-2xl border border-[var(--glass-border)] z-20"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-[#10B981]/20 flex items-center justify-center text-[#10B981]">
                    <BarChart size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[var(--color-text-main)]">3x</div>
                    <div className="text-[10px] text-[var(--color-text-main)] opacity-60 font-bold uppercase tracking-widest">Revenue Growth</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="space-y-12 order-1 lg:order-2">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-black font-outfit text-[var(--color-text-main)] leading-[1.1] tracking-tighter">
                  Not Just A Website.<br />
                  <span className="text-gradient">An Asset.</span>
                </h2>
                <p className="text-[var(--color-text-main)] opacity-60 leading-relaxed text-lg">
                  We bridge the gap between complex technology and pure business growth. Every line of code we write is an investment engineered to generate returns.
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  { title: "Revenue-First Engineering", desc: "Built to maximize conversion rates from day one." },
                  { title: "Elite UI/UX Mastery", desc: "Award-winning aesthetics that command instant trust." },
                  { title: "Technical SEO Core", desc: "Deep architectural optimization for organic dominance." },
                ].map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex gap-6 group glass-card-premium p-6 rounded-3xl"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-electric)]/10 flex items-center justify-center text-[var(--color-electric)] group-hover:bg-[var(--color-electric)] group-hover:text-white transition-colors shrink-0">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[var(--color-text-main)] mb-2 font-outfit">{benefit.title}</h4>
                      <p className="text-[var(--color-text-main)] opacity-60 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Showcase */}
      {isEnabled('portfolio') && (
        <section className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-6xl font-black font-outfit tracking-tighter text-[var(--color-text-main)]">
                Featured <span className="text-gradient">Work</span>
              </h2>
              <p className="text-[var(--color-text-main)] opacity-60 max-w-xl text-lg">
                Explore our recent digital transformations and see how we elevate brands to the next level.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="group flex items-center gap-3 px-6 py-3 rounded-full border border-[var(--color-border)] hover:bg-[var(--color-card)] transition-colors text-[var(--color-text-main)] font-bold tracking-widest text-xs uppercase"
            >
              View Archive <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, i) => (
              <Link 
                key={i}
                href={`/portfolio/${project.slug || project.title.toLowerCase().replace(/ /g, '-')}`}
                className={cn(
                  "group relative overflow-hidden rounded-[2.5rem] bg-[var(--color-card)] border border-[var(--color-border)] block",
                  i === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto" : "aspect-square"
                )}
              >
                <img
                  src={project.featuredImage || '/images/project-1.png'}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/90 via-[var(--color-navy)]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="px-3 py-1 bg-[var(--color-electric)] text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="text-3xl lg:text-4xl font-black font-outfit text-white mb-2 leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-white/60 text-sm line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {project.challenge || project.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-[var(--color-electric)] font-bold text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                    Case Study <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Testimonials */}
      {isEnabled('testimonials') && (
        <section className="max-w-7xl mx-auto px-6 w-full relative pt-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-electric)]/5 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="text-center space-y-6 mb-20 relative z-10">
            <h2 className="text-4xl lg:text-6xl font-black font-outfit text-[var(--color-text-main)] tracking-tighter">
              Client <span className="text-gradient">Feedback</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {(testimonials.length > 0 ? testimonials.slice(0,3) : [1, 2, 3]).map((t: any, i) => (
              <div key={i} className="glass-card-premium p-10 rounded-[2.5rem] relative group hover:-translate-y-2 transition-all duration-500">
                <div className="absolute -top-6 -left-2 text-[120px] text-[var(--color-electric)] opacity-10 font-serif leading-none rotate-12 group-hover:rotate-0 transition-transform duration-500">"</div>
                <div className="flex gap-1 text-[#F59E0B] mb-8 relative z-10">
                  {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                </div>
                <p className="text-[var(--color-text-main)] opacity-70 mb-10 text-lg leading-relaxed relative z-10">
                  {t.content || "Uma Techno delivered exactly what we needed. Their attention to detail and premium design aesthetic helped us increase our conversions by over 300% within the first month."}
                </p>
                <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-[var(--color-border)]">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-navy-light)] overflow-hidden border-2 border-[var(--color-border)] group-hover:border-[var(--color-electric)] transition-colors">
                    <img src={t.image || `/images/client-${i+1}.png`} alt={t.name || "Client"} className="w-full h-full object-cover" onError={(e: any) => e.target.src = `https://i.pravatar.cc/100?u=${i}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-text-main)] text-lg">{t.name || `Client ${i+1}`}</h4>
                    <p className="text-xs text-[var(--color-text-main)] opacity-50 font-bold uppercase tracking-widest">{t.role || "CEO"}, {t.company || "Tech Corp"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sticky Bottom Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-[var(--background)]/90 backdrop-blur-xl border-t border-[var(--color-border)] z-40 lg:hidden flex justify-center shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <Link href="/contact" className="w-full max-w-md py-4 bg-gradient-premium text-white font-bold rounded-[2rem] text-center shadow-lg uppercase tracking-widest text-sm flex justify-center items-center gap-2">
          <Sparkles size={16} /> Get Started
        </Link>
      </div>
    </div>
  );
}
