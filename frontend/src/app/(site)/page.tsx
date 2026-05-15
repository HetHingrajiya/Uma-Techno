import Hero from "@/components/ui/Hero";
import {
  Code, Globe, Smartphone, BarChart, Palette, Megaphone,
  Rocket, Shield, Zap, Users, Star, ArrowRight, CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
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
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 500px
      if (window.scrollY > 500) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        { title: "Web Development in Rajkot", description: "Scalable, secure, and conversion-optimized web platforms for growing businesses in Rajkot.", icon: "Globe", slug: "web-development" },
        { title: "SEO Services in Rajkot", description: "Technical SEO and digital strategy to dominate search results and drive local leads in Gujarat.", icon: "BarChart", slug: "seo-services" },
        { title: "Digital Marketing Rajkot", description: "Full-stack marketing solutions focused on ROI and lead generation for local brands in Rajkot.", icon: "Megaphone", slug: "digital-marketing" },
        { title: "E-commerce Growth", description: "End-to-end online stores with advanced payment integrations and marketing focus.", icon: "Rocket", slug: "ecommerce" },
        { title: "App Development in Rajkot", description: "Native-quality iOS and Android applications that deliver exceptional user experiences for Rajkot startups.", icon: "Smartphone", slug: "app-development" },
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
          featuredImage: "/images/jewelry-ecommerce.png", 
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
          featuredImage: "/images/health-booking.png", 
          slug: "booking-platform" 
        },
        { 
          title: "Fintech Growth Dashboard", 
          category: "SaaS", 
          industry: "Finance",
          challenge: "Users found financial data overwhelming and difficult to track on mobile.",
          solution: "Clean, minimalist dashboard with AI-driven insights and interactive charting.",
          result: "85% User Retention",
          tech: ["TypeScript", "D3.js", "AWS"],
          featuredImage: "/images/fintech-dashboard.png", 
          slug: "fintech-saas" 
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
        const baseUrl = import.meta.env.VITE_API_URL || 'https://uma-techno-phrb.vercel.app';

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
    <div className="flex flex-col gap-12 lg:gap-16 pb-20 lg:pb-32 bg-[var(--background)]">
      {/* 
          Hero Section:
          The main splash area with primary CTA.
      */}
      {isEnabled('hero') && <Hero />}

      {/* 
          Trust & Stats Section:
          Displays quantitative metrics and client industries to build authority.
      */}
      {isEnabled('stats') && (
        <section className="max-w-7xl mx-auto px-6 w-full -mt-8 lg:-mt-16 relative z-20 py-12 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="card-premium p-6 lg:p-8 text-center flex flex-col items-center gap-4 bg-transparent backdrop-blur-xl">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-electric)]/10 text-[var(--color-electric)] flex items-center justify-center">
                  <stat.icon size={24} />
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-black font-outfit text-[var(--color-text-main)] tracking-tight">{stat.value}</div>
                  <div className="text-xs lg:text-sm font-bold text-[var(--color-text-main)] opacity-50 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 mt-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            {["Retailers", "Real Estate", "Startups", "Enterprises", "Medical Centres"].map(brand => (
              <span key={brand} className="text-xl lg:text-2xl font-bold font-outfit text-[var(--color-text-main)]">{brand}</span>
            ))}
          </div>
        </section>
      )}

      {/* 
          Services Grid:
          Detailed breakdown of what Uma Techno offers with deep links to service pages.
      */}
      {isEnabled('services') && (
        <section className="max-w-7xl mx-auto px-6 w-full py-20 lg:py-32">
          <div className="text-center space-y-4 mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-transparent border border-[var(--color-electric)]/20 text-[var(--color-electric)] text-xs font-bold uppercase tracking-wider">
              Premium Solutions
            </div>
            <h2 className="text-3xl lg:text-5xl 2xl:text-6xl font-bold font-outfit tracking-tight text-[var(--color-text-main)]">Leading Web, App & <br /> <span className="text-gradient">SEO in Rajkot</span></h2>
            <p className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto 2xl:text-lg">
              We engineer high-performance digital systems that capture leads, automate operations, and scale revenue for businesses in Rajkot and across Gujarat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const isLarge = index === 0 || index === 3;
              return (
                <Link
                  key={service.slug}
                  to={service.slug.startsWith('/') ? service.slug : `/${service.slug}`}
                  className={cn(
                    "group border border-[var(--color-border)] p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500",
                    isLarge ? "lg:col-span-2 min-h-[350px] md:min-h-[400px]" : "min-h-[350px] md:min-h-[400px]"
                  )}
                >
                  <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-glow -mr-32 -mt-32 group-hover:scale-110 transition-all duration-700" />
                  <div className="space-y-6 relative z-10">
                    <div className="w-16 h-16 bg-gradient-premium rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                      {getIcon(service.icon || 'Globe')}
                    </div>
                    <h4 className="text-2xl lg:text-3xl font-black font-outfit leading-tight text-[var(--color-text-main)] tracking-tighter">
                      {service.title}
                    </h4>
                    <p className="text-[var(--color-text-main)] opacity-70 leading-relaxed max-w-sm">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-4 text-sm font-black tracking-widest text-[var(--color-electric)] uppercase group-hover:gap-6 transition-all">
                    EXPLORE SOLUTIONS <ArrowRight size={20} />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* 
          Differentiators Section (Why Choose Us):
          Highlights the unique value proposition (Business-first engineering).
      */}
      {isEnabled('why-choose-us') && (
        <section className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-10 bg-gradient-glow opacity-30 blur-[120px] group-hover:opacity-50 transition-all duration-700" />
              <div className="relative aspect-video bg-[var(--color-card)] border border-[var(--color-border)] rounded-[2.5rem] overflow-hidden shadow-xl">
                <img
                  src="/images/about-agency.png"
                  alt="About Us"
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

      {/* 
          Portfolio Showcase:
          Selected high-impact case studies from the portfolio module.
      */}
      {isEnabled('portfolio') && (
        <section className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-electric)]/20 text-[var(--color-electric)] text-xs font-bold uppercase tracking-wider mb-6">
                Selected Work
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold font-outfit tracking-tight text-[var(--color-text-main)]">Our <span className="text-gradient">Portfolio</span></h2>
              <p className="text-[var(--color-text-main)] opacity-70 max-w-xl">
                Showcasing our best work in branding, development, and strategic digital solutions.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="group flex items-center gap-3 text-[var(--color-text-main)] font-bold tracking-widest text-sm hover:text-[var(--color-electric)] transition-colors"
            >
              VIEW ALL PROJECTS <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, i) => (
              <div key={i} className="card-premium group overflow-hidden flex flex-col h-full bg-transparent">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.featuredImage || (i === 0 ? "/images/jewelry-ecommerce.png" : i === 1 ? "/images/health-booking.png" : "/images/fintech-dashboard.png")}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                    <span className="px-4 py-2 bg-transparent backdrop-blur-md text-[var(--color-electric)] border border-[var(--color-electric)]/20 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                      {project.category}
                    </span>
                    {project.industry && (
                      <span className="px-4 py-2 bg-transparent backdrop-blur-md text-[var(--color-text-main)] border border-[var(--color-text-main)]/20 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                        {project.industry}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-8 lg:p-10 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold font-outfit text-[var(--color-text-main)] group-hover:text-[var(--color-electric)] transition-colors break-words">{project.title}</h4>
                    <p className="text-[var(--color-text-main)] opacity-60 text-sm leading-relaxed line-clamp-3">
                      {project.challenge || project.description}
                    </p>
                    
                    {project.result && (
                      <div className="pt-4 border-t border-[var(--color-border)]">
                        <div className="text-[10px] uppercase font-bold text-[var(--color-electric)] tracking-tighter mb-1">Result</div>
                        <div className="text-lg font-black text-[var(--color-text-main)]">{project.result}</div>
                      </div>
                    )}
                  </div>

                  <Link
                    to={`/portfolio/${project.slug || project.title.toLowerCase().replace(/ /g, '-')}`}
                    className="flex items-center gap-2 text-[var(--color-electric)] font-bold text-sm tracking-widest uppercase mt-6 group/link"
                  >
                    View Case Study <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 
          Social Proof (Testimonials):
          Feedback from actual clients, either from the DB or using high-end placeholders.
      */}
      {isEnabled('testimonials') && (
        <section className="max-w-7xl mx-auto px-6 w-full py-24 relative">
          <div className="py-12 md:p-20 relative z-10">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold font-outfit text-[var(--color-text-main)]">What Our Clients <span className="text-gradient">Say</span></h2>
              <p className="text-[var(--color-text-main)] opacity-60 max-w-xl mx-auto">See why businesses trust Uma Techno for their digital growth.</p>
              <div className="pt-4">
                 <button className="px-6 py-2 border border-[var(--color-electric)] text-[var(--color-electric)] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-electric)] hover:text-white transition-all">
                   Share Your Experience
                 </button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.length > 0 ? (
              testimonials.map((t, i) => (
                <div key={i} className="bg-[var(--color-card)] border border-[var(--color-border)] p-8 rounded-[var(--radius)] shadow-sm hover:shadow-xl transition-all">
                  <div className="flex gap-1 text-[#F59E0B] mb-6">
                    {Array.from({ length: t.rating || 5 }).map((_, star) => (
                      <Star key={star} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-[var(--color-text-main)] opacity-70 mb-8 italic">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-transparent overflow-hidden">
                      <img src={t.image || `https://i.pravatar.cc/100?u=${t.id}`} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-text-main)]">{t.name}</h4>
                      <p className="text-xs text-[var(--color-text-main)] opacity-50">{t.role}{t.company ? `, ${t.company}` : ''}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              [1, 2, 3].map((i) => (
                <div key={i} className="glass-card p-8 rounded-[var(--radius)] border border-[var(--color-border)] hover:shadow-xl transition-all group">
                  <div className="flex gap-1 text-[#F59E0B] mb-6">
                    {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-[var(--color-text-main)] opacity-70 mb-8 italic">"Uma Techno delivered exactly what we needed. Their attention to detail and premium design aesthetic helped us increase our conversions by over 300% within the first month."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-navy-light)] border border-[var(--color-border)] overflow-hidden">
                      <img src={`/images/client-${i}-v2.png`} alt="Client" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-text-main)] group-hover:text-[var(--color-electric)] transition-colors">John Doe {i}</h4>
                      <p className="text-xs text-[var(--color-text-main)] opacity-50">CEO, Tech Innovators</p>
                    </div>
                  </div>
                </div>
              ))
            )}
            </div>
          </div>
        </section>
      )}

      {/* 
          Our Methodology:
          Visualizes the roadmap of working with the agency.
      */}
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
              <div className="aspect-square bg-[var(--color-card)] rounded-[var(--radius)] overflow-hidden relative group shadow-xl">
                <img
                  src="/images/agile-process.png"
                  alt="Process"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                />
                <div className="relative z-10 w-full h-full bg-gradient-to-t from-[var(--color-navy)]/60 via-transparent to-transparent flex items-center justify-center p-12">
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

      {/* 
          Final Conversion Area (CTA):
          Primary driver for new client inquiries.
      */}
      {isEnabled('cta') && (
        <section className="max-w-7xl mx-auto px-6 w-full pb-20">
          <div className="bg-gradient-soft border border-[var(--color-border)] rounded-[3rem] p-10 lg:p-24 text-center space-y-10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-electric)]/10 blur-[150px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-accent)]/10 blur-[150px] -ml-64 -mb-64" />

            <h2 className="text-3xl lg:text-5xl font-bold font-outfit max-w-3xl mx-auto leading-tight text-[var(--color-text-main)]">
              Ready to Accelerate Your <span className="text-gradient">Business Growth</span>?
            </h2>
            <p className="text-[var(--color-text-main)] opacity-70 max-w-xl mx-auto leading-relaxed">
              Stop settling for mediocre digital presence. Partner with Uma Techno to build a premium solution that commands authority and delivers results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 relative z-10">
              <Link
                to="/contact"
                className="px-8 py-4 text-white rounded-xl font-bold text-base transition-all hover:scale-105 shadow-xl bg-gradient-premium text-center"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 bg-transparent border border-[var(--color-border)] text-[var(--color-text-main)] hover:bg-[var(--color-navy-light)] rounded-xl font-bold text-base transition-all text-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Sticky Bottom Mobile CTA for conversion on smaller screens - Only shown after scroll */}
      <div className={cn(
        "fixed bottom-0 left-0 w-full p-4 bg-[var(--background)]/80 backdrop-blur-2xl border-t border-[var(--color-border)]/50 z-40 lg:hidden flex justify-center shadow-[0_-10px_40px_rgba(0,0,0,0.1)] transition-all duration-500 transform",
        showStickyCta ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      )}>
        <Link to="/contact" className="w-full max-w-md py-3.5 bg-gradient-premium text-white font-bold rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all active:scale-95 text-sm uppercase tracking-wider">
          Get Started Today
        </Link>
      </div>
    </div>
  );
}

