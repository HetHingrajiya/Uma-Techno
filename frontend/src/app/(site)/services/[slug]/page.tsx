import { Globe, Rocket, Smartphone, Code, BarChart, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const serviceData: Record<string, any> = {
  "web-development": {
    title: "Premium Website Development",
    tagline: "Build high-performance web systems that dominate your industry.",
    description: "We are the leading web development agency, specializing in Next.js, React, and scalable architectures.",
    icon: Globe,
    features: ["Custom Next.js Engineering", "SEO-Dominant Architecture", "High-Conversion UI/UX", "Secure Cloud Integration", "Performance Optimization"],
    seoFocus: "Global Reach"
  },
  "app-development": {
    title: "Mobile App Development",
    tagline: "Native-quality iOS and Android apps with exceptional UX.",
    description: "Bring your vision to life with a mobile application that people love to use. We build high-performance apps using React Native and Flutter.",
    icon: Smartphone,
    features: ["iOS & Android App Dev", "Cross-Platform Efficiency", "Push Notification Systems", "Offline Functionality", "App Store Optimization"],
    seoFocus: "Global Reach"
  },
  "ui-ux": {
    title: "Premium UI/UX Design",
    tagline: "Human-centric designs that drive engagement and conversion.",
    description: "Our design process focuses on user psychology and brand aesthetics to create interfaces that are beautiful and functional.",
    icon: Code,
    features: ["User Research & Strategy", "Wireframing & Prototyping", "Visual Identity Design", "Interactive Mockups", "Usability Testing"],
    seoFocus: "Global Reach"
  },
  "seo": {
    title: "SEO & Digital Strategy Company",
    tagline: "Rank higher, drive leads, and dominate search results.",
    description: "Our technical SEO strategies are designed to deliver long-term organic growth and national reach.",
    icon: BarChart,
    features: ["Technical SEO Audits", "Keyword Dominance", "Content Strategy", "Local SEO Optimization", "Analytics & Reporting"],
    seoFocus: "Global Reach"
  },
  "branding": {
    title: "Digital Branding & Identity",
    tagline: "Building iconic brands for the digital age.",
    description: "We help businesses establish a powerful visual presence that resonates with their audience across all digital touchpoints.",
    icon: Rocket,
    features: ["Brand Strategy", "Logo & Visual Design", "Brand Guidelines", "Social Media Identity", "Marketing Collateral"],
    seoFocus: "Global Reach"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData[slug];
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/20 text-[var(--color-electric)] text-xs font-bold uppercase tracking-wider">
            {service.seoFocus}
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold font-outfit leading-tight text-[var(--color-text-main)]">
            {service.title.split(' ').slice(0, -1).join(' ')} <br />
            <span className="text-gradient">{service.title.split(' ').pop()}</span>
          </h1>
          <p className="text-xl text-[var(--color-text-main)] opacity-70 leading-relaxed">
            {service.tagline}
          </p>
          <p className="text-[var(--color-text-main)] opacity-60 leading-relaxed">
            {service.description}
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {service.features.map((feature: string, i: number) => (
              <div key={i} className="flex gap-3 items-center group">
                <div className="w-5 h-5 rounded-full bg-[var(--color-electric)]/20 flex items-center justify-center text-[var(--color-electric)] group-hover:bg-[var(--color-electric)] group-hover:text-white transition-all">
                  <CheckCircle size={12} />
                </div>
                <span className="text-[var(--color-text-main)] opacity-80 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-[var(--color-electric)] text-white hover:brightness-110 rounded-xl font-bold text-base transition-all hover:scale-105 shadow-[0_0_20px_var(--color-electric)] inline-flex items-center gap-2"
            >
              Get Started with {service.title.split(' ')[0]} <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        <div className="relative group">
           <div className="aspect-square glass-card rounded-[3rem] flex items-center justify-center relative overflow-hidden bg-[var(--color-card)] border-[var(--color-border)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-electric)]/10 to-transparent opacity-50" />
              <Icon size={120} className="text-[var(--color-electric)] animate-float-complex" />
           </div>
           <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--color-electric)]/20 blur-[100px] rounded-full" />
        </div>
      </section>

      {/* Trust Quote */}
      <section className="max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="glass-card p-12 rounded-[3rem] space-y-6 bg-[var(--color-card)] border-[var(--color-border)]">
          <h2 className="text-3xl font-bold font-outfit text-[var(--color-text-main)]">Ready to Scale Your Business Globally?</h2>
          <p className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto italic">
            "Our mission is to empower local businesses with global-standard digital engineering. Your growth is our primary metric of success."
          </p>
        </div>
      </section>
    </div>
  );
}
