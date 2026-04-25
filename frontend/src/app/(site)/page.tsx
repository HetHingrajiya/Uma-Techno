"use client";

import Hero from "@/components/ui/Hero";
import {
  Code, Globe, Smartphone, BarChart, Palette, Megaphone,
  Rocket, Shield, Zap, Users, Star, ArrowRight, CheckCircle
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const stats = [
  { label: "Successful Projects", value: "50+", icon: Rocket },
  { label: "Business Growth", value: "3x", icon: Zap },
  { label: "Client Retention", value: "95%", icon: Users },
  { label: "Support Response", value: "< 2hr", icon: Shield },
];

const processSteps = [
  { title: "Discovery & Strategy", desc: "We deep-dive into your business model to align our solution with your revenue goals." },
  { title: "Prototyping", desc: "Creating high-fidelity wireframes and interactive prototypes for your review." },
  { title: "Iterative Development", desc: "Building in agile sprints with regular updates and feedback cycles." },
  { title: "Quality Assurance", desc: "Rigorous testing across devices to ensure a flawless, bug-free launch." },
  { title: "Launch & Support", desc: "Deployment to production followed by 24/7 monitoring and long-term scaling." },
];

export default function Home() {
  const [widgets, setWidgets] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const fallbackWidgets = [
        { name: 'hero', enabled: true }, { name: 'trusted', enabled: true },
        { name: 'services', enabled: true }, { name: 'why-choose-us', enabled: true },
        { name: 'stats', enabled: true }, { name: 'process', enabled: true },
        { name: 'portfolio', enabled: true }, { name: 'testimonials', enabled: true },
        { name: 'cta', enabled: true }
      ];
      
      const fallbackServices = [
        { title: "Web Engineering", description: "Scalable, secure, and conversion-optimized web platforms for growing businesses.", icon: "Globe", slug: "web-development" },
        { title: "E-commerce Growth", description: "End-to-end online stores with advanced payment integrations and marketing focus.", icon: "Rocket", slug: "ecommerce" },
        { title: "Mobile Innovation", description: "Native-quality iOS and Android applications that deliver exceptional user experiences.", icon: "Smartphone", slug: "app-development" },
        { title: "Enterprise Solutions", description: "Custom CRM and internal tools designed to automate your business operations.", icon: "Code", slug: "custom-software" },
        { title: "Strategy & SEO", description: "Technical SEO and digital strategy to dominate search results and drive leads.", icon: "BarChart", slug: "seo" },
      ];

      const fallbackProjects = [
        { title: "Tech Brand Identity", category: "Branding", description: "Complete branding package for a Silicon Valley startup.", featuredImage: "/images/project-1.png", slug: "tech-brand" },
        { title: "Premium E-commerce", category: "Development", description: "High-performance store for a luxury fashion brand.", featuredImage: "/images/project-2.png", slug: "premium-ecommerce" },
        { title: "Enterprise CRM", category: "Software", description: "Custom internal tools for business automation.", featuredImage: "/images/project-3.png", slug: "enterprise-crm" }
      ];

      if (process.env.NODE_ENV === 'development') {
        setWidgets(fallbackWidgets);
        setServices(fallbackServices);
        setProjects(fallbackProjects);
        setLoading(false);
        return;
      }

      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app';

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

  const isEnabled = (name: string) => {
    const w = widgets.find(w => w.name === name);
    return w ? w.enabled : true;
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe size={32} />;
      case 'Rocket': return <Rocket size={32} />;
      case 'Smartphone': return <Smartphone size={32} />;
      case 'Code': return <Code size={32} />;
      case 'BarChart': return <BarChart size={32} />;
      default: return <Zap size={32} />;
    }
  };

  if (loading) return null;

  return (
    <div className="flex flex-col gap-16 lg:gap-32 pb-20 lg:pb-32 bg-white">
      {isEnabled('hero') && <Hero />}

      {/* Trusted By Section */}
      {isEnabled('trusted') && (
        <section className="max-w-7xl mx-auto px-6 w-full -mt-8 lg:-mt-16">
          <div className="text-center space-y-8">
            <p className="text-[var(--color-text-main)] opacity-50 font-medium tracking-widest text-xs uppercase">Partnering with Growth-Focused Brands</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              {["Retailers", "Real Estate", "Startups", "Enterprises", "Agency Partners"].map(brand => (
                <span key={brand} className="text-2xl font-bold font-outfit text-[var(--color-text-main)]">{brand}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {isEnabled('services') && (
        <section className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center space-y-4 mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/20 text-[var(--color-electric)] text-xs font-bold uppercase tracking-wider">
              Premium Solutions
            </div>
            <h2 className="text-3xl lg:text-5xl 2xl:text-6xl font-bold font-outfit tracking-tight text-[var(--color-text-main)]">Business Engines Built <br /> <span className="text-gradient">For Growth</span></h2>
            <p className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto 2xl:text-lg">
              We don&apos;t just build websites. We engineer high-performance digital systems that capture leads, automate operations, and scale revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 lg:gap-8">
            {services.map((service, index) => {
              if (index === 0) {
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group bg-[var(--color-card)] border border-[var(--color-border)] p-10 rounded-[2.5rem] md:col-span-2 md:row-span-2 flex flex-col justify-between relative overflow-hidden min-h-[500px] lg:min-h-[600px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-electric)]/10 blur-[100px] -mr-32 -mt-32 group-hover:bg-[var(--color-electric)]/20 transition-all" />
                    <div className="space-y-6 relative z-10">
                      <div className="w-16 h-16 bg-[var(--color-electric)] rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                        {getIcon(service.icon || 'Globe')}
                      </div>
                      <h4 className="text-3xl font-black font-outfit leading-tight text-[var(--color-text-main)] uppercase tracking-tighter">
                        {service.title}
                      </h4>
                      <p className="text-[var(--color-text-main)] opacity-70 leading-relaxed max-w-sm">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center gap-4 text-sm font-black tracking-widest text-[var(--color-electric)] uppercase group-hover:gap-6 transition-all">
                      VIEW SOLUTIONS <ArrowRight size={20} />
                    </div>
                  </Link>
                );
              }
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={`group bg-[var(--color-navy-light)] border border-[var(--color-border)] p-8 rounded-[2rem] ${index === 1 ? 'md:col-span-2' : ''} flex flex-col justify-center relative overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500`}
                >
                  {/* Blurred Background Glow */}
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-[var(--color-electric)]/10 blur-[60px] -mr-16 -mb-16 group-hover:bg-[var(--color-electric)]/20 transition-all duration-500" />
                  
                  <div className="space-y-4 relative z-10">
                    <div className="w-14 h-14 bg-[var(--color-electric)]/10 rounded-2xl flex items-center justify-center text-[var(--color-electric)] group-hover:bg-[var(--color-electric)] group-hover:text-white transition-all shadow-sm">
                      {getIcon(service.icon || 'Code')}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-outfit text-[var(--color-text-main)] uppercase tracking-tight">{service.title}</h4>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      {isEnabled('why-choose-us') && (
        <section className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="aspect-video bg-[var(--color-card)] border border-[var(--color-border)] rounded-[2.5rem] overflow-hidden shadow-xl">
                <img
                  src="/images/templates.png"
                  alt="Website Templates"
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                />
              </div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-6 -right-6 lg:-top-8 lg:-right-8 bg-[var(--color-card)] border border-[var(--color-border)] p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-2xl backdrop-blur-xl"
              >
                <div className="text-[var(--color-electric)] font-black text-lg lg:text-xl tracking-tighter">Business First</div>
                <div className="text-[10px] text-[var(--color-text-main)] opacity-60 font-bold uppercase tracking-widest mt-1">Our Core Mindset</div>
              </motion.div>
            </div>

            <div className="space-y-6 lg:space-y-10 order-1 lg:order-2">
              <div className="space-y-4 lg:space-y-6">
                <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold font-outfit text-[var(--color-text-main)]">Your Partner in <br /><span className="text-gradient">Business Dominance</span></h2>
                <p className="text-[var(--color-text-main)] opacity-70 leading-relaxed text-sm lg:text-base 2xl:text-lg">
                  We bridge the gap between complex technology and business growth. Our solutions are engineered to be assets, not just expenses.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                {[
                  { title: "Revenue-first approach", desc: "Code designed to maximize return on investment." },
                  { title: "Elite UI/UX Mastery", desc: "Premium design standards that command authority." },
                  { title: "Technical SEO Core", desc: "Built-in optimization for organic growth." },
                  { title: "Agile Rapid Delivery", desc: "Efficient workflows to market faster." },
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-3 lg:gap-4 group">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-[var(--color-electric)]/20 flex items-center justify-center text-[var(--color-electric)] group-hover:bg-[var(--color-electric)] group-hover:text-white transition-all mt-1 shrink-0">
                      <CheckCircle size={12} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[var(--color-text-main)]">{benefit.title}</h4>
                      <p className="text-[var(--color-text-main)] opacity-60 text-xs mt-1">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      {isEnabled('stats') && (
        <section className="w-full bg-[var(--color-navy-light)] py-12 border-y border-[var(--color-border)] shadow-sm">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="w-10 h-10 bg-[var(--color-electric)]/10 rounded-full flex items-center justify-center mx-auto text-[var(--color-electric)] mb-2">
                  <stat.icon size={20} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold font-outfit text-[var(--color-text-main)]">{stat.value}</div>
                <div className="text-sm text-[var(--color-text-main)] opacity-60 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Process Section */}
      {isEnabled('process') && (
        <section className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold font-outfit text-[var(--color-text-main)]">How We Turn Ideas Into <span className="text-gradient">Reality</span></h2>
              <p className="text-[var(--color-text-main)] opacity-70 leading-relaxed">
                Our proven development methodology ensures your project is delivered on time, within budget, and to the highest quality standards.
              </p>
              <div className="space-y-4">
                {processSteps.map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-electric)] font-bold text-lg group-hover:bg-[var(--color-electric)] group-hover:text-white transition-all shadow-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[var(--color-text-main)] mb-1">{item.title}</h4>
                      <p className="text-sm text-[var(--color-text-main)] opacity-60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-square bg-[var(--color-card)] rounded-[3rem] overflow-hidden relative group shadow-xl">
                <img
                  src="/images/process-visual.png"
                  alt="Process"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                />
                <div className="relative z-10 w-full h-full bg-[var(--color-card)]/30 backdrop-blur-md flex items-center justify-center p-12">
                  <div className="text-center space-y-4 bg-[var(--color-card)]/80 p-8 rounded-3xl shadow-2xl backdrop-blur-xl">
                    <Zap size={48} className="text-[var(--color-electric)] mx-auto animate-float" />
                    <div className="text-3xl font-bold font-outfit text-[var(--color-text-main)]">Rapid Execution</div>
                    <p className="text-[var(--color-text-main)] opacity-70">Turning complex ideas into scalable reality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Section */}
      {isEnabled('portfolio') && (
        <section className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/20 text-[var(--color-electric)] text-xs font-bold uppercase tracking-wider">
                Selected Work
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold font-outfit tracking-tight text-[var(--color-text-main)]">Our <span className="text-gradient">Portfolio</span></h2>
              <p className="text-[var(--color-text-main)] opacity-70 max-w-xl">
                Showcasing our best work in branding, development, and strategic digital solutions.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="group flex items-center gap-3 text-[var(--color-text-main)] font-bold tracking-widest text-sm hover:text-[var(--color-electric)] transition-colors"
            >
              VIEW ALL PROJECTS <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, i) => (
              <div key={i} className="group bg-[var(--color-card)] rounded-[2.5rem] overflow-hidden flex flex-col h-full border border-[var(--color-border)] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-navy-light)]">
                  <img
                    src={project.featuredImage || '/images/project-1.png'}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-[var(--color-card)] text-[var(--color-electric)] border border-[var(--color-border)] text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 lg:p-10 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h4 className="text-2xl font-bold font-outfit text-[var(--color-text-main)] group-hover:text-[var(--color-electric)] transition-colors">{project.title}</h4>
                    <p className="text-[var(--color-text-main)] opacity-60 text-sm leading-relaxed">{project.description}</p>
                  </div>

                  <Link
                    href={`/portfolio/${project.slug || project.title.toLowerCase().replace(/ /g, '-')}`}
                    className="flex items-center gap-2 text-[var(--color-electric)] font-bold text-sm tracking-widest uppercase mt-6 group/link"
                  >
                    View Project <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {isEnabled('testimonials') && (
        <section className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit text-[var(--color-text-main)]">What Our Clients <span className="text-gradient">Say</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-[var(--color-border)] p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all">
                <div className="flex gap-1 text-[#F59E0B] mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                </div>
                <p className="text-[var(--color-text-main)] opacity-70 mb-8 italic">"Uma Techno delivered exactly what we needed. Their attention to detail and premium design aesthetic helped us increase our conversions by over 300% within the first month."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-navy-light)] overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-text-main)]">John Doe {i}</h4>
                    <p className="text-xs text-[var(--color-text-main)] opacity-50">CEO, Tech Innovators</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      {isEnabled('cta') && (
        <section className="max-w-7xl mx-auto px-6 w-full pb-20">
          <div className="bg-[var(--color-navy)] border border-[var(--color-border)] rounded-[3rem] p-10 lg:p-16 text-center space-y-6 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-electric)]/10 blur-[120px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-accent)]/10 blur-[120px] -ml-48 -mb-48" />

            <h2 className="text-3xl lg:text-5xl font-bold font-outfit max-w-3xl mx-auto leading-tight text-white">
              Ready to Accelerate Your <span className="text-gradient">Business Growth</span>?
            </h2>
            <p className="text-white opacity-70 max-w-xl mx-auto leading-relaxed">
              Stop settling for mediocre digital presence. Partner with Uma Techno to build a premium solution that commands authority and delivers results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 relative z-10">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[var(--color-electric)] text-white hover:bg-[var(--color-electric)]/90 rounded-xl font-bold text-base transition-all hover:scale-105 shadow-xl btn-premium sticky top-24 z-50"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-white border border-[var(--color-border)] text-[var(--color-navy)] hover:bg-white/90 rounded-xl font-bold text-base transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Sticky Bottom Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-[var(--color-border)] z-40 lg:hidden flex justify-center shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <Link href="/contact" className="w-full max-w-md py-4 bg-[var(--color-electric)] text-white font-bold rounded-xl text-center shadow-lg">
          Get Started Today
        </Link>
      </div>
    </div>
  );
}
