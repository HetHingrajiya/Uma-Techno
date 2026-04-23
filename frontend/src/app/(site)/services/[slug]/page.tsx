import { Globe, Rocket, Smartphone, Code, BarChart, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const serviceData: Record<string, any> = {
  "web-development": {
    title: "Premium Website Development in Rajkot",
    tagline: "Build high-performance web systems that dominate your industry.",
    description: "We are the leading web development agency in Rajkot, Gujarat, specializing in Next.js, React, and scalable architectures. Our websites are built for speed, SEO, and maximum business impact.",
    icon: Globe,
    features: ["Custom Next.js Engineering", "SEO-Dominant Architecture", "High-Conversion UI/UX", "Secure Cloud Integration", "Performance Optimization"],
    seoFocus: "Rajkot, Gujarat, India"
  },
  "ecommerce": {
    title: "E-commerce Development Experts India",
    tagline: "Scalable online stores engineered for high-volume sales.",
    description: "Launch a powerful e-commerce platform that converts visitors into loyal customers. We specialize in custom storefronts, payment gateways, and inventory management systems.",
    icon: Rocket,
    features: ["Custom Checkout Flows", "Secure Payment Gateways", "Inventory Management", "Marketing Automation", "Mobile-First Design"],
    seoFocus: "India, Gujarat"
  },
  "app-development": {
    title: "Mobile App Development Rajkot",
    tagline: "Native-quality iOS and Android apps with exceptional UX.",
    description: "Bring your vision to life with a mobile application that people love to use. We build high-performance apps using React Native and Flutter for maximum reach.",
    icon: Smartphone,
    features: ["iOS & Android App Dev", "Cross-Platform Efficiency", "Push Notification Systems", "Offline Functionality", "App Store Optimization"],
    seoFocus: "Rajkot, Gujarat"
  },
  "custom-software": {
    title: "Custom Software Solutions Gujarat",
    tagline: "Automate your business operations with bespoke tools.",
    description: "Solve complex business challenges with tailored software solutions. From CRM systems to internal ERPs, we build the tools you need to scale efficiently.",
    icon: Code,
    features: ["Bespoke CRM/ERP Systems", "Business Process Automation", "API Integrations", "Database Architecture", "Cloud Infrastructure"],
    seoFocus: "Gujarat, India"
  },
  "seo": {
    title: "SEO & Digital Strategy Company Rajkot",
    tagline: "Rank higher, drive leads, and dominate search results.",
    description: "Our technical SEO strategies are designed to deliver long-term organic growth. We focus on local SEO for Rajkot and national SEO for broader reach.",
    icon: BarChart,
    features: ["Technical SEO Audits", "Keyword Dominance", "Content Strategy", "Local SEO Optimization", "Analytics & Reporting"],
    seoFocus: "Rajkot, India"
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug];
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-bold uppercase tracking-wider">
            {service.seoFocus}
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold font-outfit leading-tight">
            {service.title.split(' ').slice(0, -1).join(' ')} <br />
            <span className="text-gradient">{service.title.split(' ').pop()}</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            {service.tagline}
          </p>
          <p className="text-gray-500 leading-relaxed">
            {service.description}
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {service.features.map((feature: string, i: number) => (
              <div key={i} className="flex gap-3 items-center group">
                <div className="w-5 h-5 rounded-full bg-electric/20 flex items-center justify-center text-electric group-hover:bg-electric group-hover:text-white transition-all">
                  <CheckCircle size={12} />
                </div>
                <span className="text-gray-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-navy hover:bg-gray-200 rounded-xl font-bold text-base transition-all hover:scale-105 shadow-xl btn-premium inline-flex items-center gap-2"
            >
              Get Started with {service.title.split(' ')[0]} <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        <div className="relative group">
           <div className="aspect-square glass-card rounded-[3rem] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-electric/10 to-transparent opacity-50" />
              <Icon size={120} className="text-electric animate-float-complex" />
           </div>
           <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-electric/20 blur-[100px] rounded-full" />
        </div>
      </section>

      {/* Trust Quote */}
      <section className="max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="glass-card p-12 rounded-[3rem] space-y-6">
          <h2 className="text-3xl font-bold font-outfit">Ready to Scale Your Business in {service.seoFocus.split(',')[0]}?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto italic">
            "Our mission is to empower local businesses with global-standard digital engineering. Your growth is our primary metric of success."
          </p>
        </div>
      </section>
    </div>
  );
}
