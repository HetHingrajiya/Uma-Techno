import React from "react";
import { notFound } from "next/navigation";
import { CheckCircle, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";

const serviceData: Record<string, any> = {
  "web-development": {
    title: "Website Development",
    description: "Build a high-performance website that converts visitors into customers.",
    heroTitle: "Premium Web Development Services",
    image: "/images/portfolio-showcase.png",
    content: "We specialize in building modern, fast, and scalable websites using the latest technologies. Our team ensures that your website is not just a digital business card, but a powerful tool for growth.",
    benefits: ["SEO Optimized", "Mobile Responsive", "High Speed Performance", "Secure & Scalable"],
    faqs: [
      { q: "How long does it take to build a website?", a: "Typically 4-8 weeks depending on complexity." },
      { q: "Do you provide hosting?", a: "Yes, we offer premium cloud hosting solutions." }
    ]
  },
  "app-development": {
    title: "Mobile App Development",
    description: "Scalable mobile applications for iOS and Android.",
    heroTitle: "Cutting-Edge Mobile Solutions",
    image: "/images/templates.png",
    content: "We create native and cross-platform mobile apps that provide a seamless user experience. From concept to App Store, we handle everything.",
    benefits: ["Native Performance", "User-Centric UI", "Offline Capabilities", "Regular Updates"],
    faqs: [
      { q: "Which platforms do you support?", a: "We support both iOS and Android using React Native and Flutter." }
    ]
  },
  "seo": {
    title: "SEO Services",
    description: "Dominate the search engine rankings with our expert SEO strategies.",
    heroTitle: "Strategic SEO for Business Growth",
    image: "/images/seo-visual.png",
    content: "Our SEO services are designed to improve your online visibility, drive organic traffic, and increase conversions through data-driven strategies.",
    benefits: ["Keyword Ranking", "Technical SEO Audits", "Content Strategy", "Link Building"],
    faqs: [
      { q: "When will I see results?", a: "SEO is a long-term strategy; typically results appear in 3-6 months." }
    ]
  }
};

export async function generateMetadata({ params }: { params: any }) {
  const { slug } = await params;
  const service = serviceData[slug];
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Uma Techno`,
    description: service.description,
  };
}

export default async function ServiceDetail({ params }: { params: any }) {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-gradient-premium py-20 lg:py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold font-outfit leading-tight">
              {service.heroTitle}
            </h1>
            <p className="text-xl text-gray-400">
              {service.description}
            </p>
            <div className="flex gap-4 pt-4">
               <Link href="/contact" className="px-8 py-4 bg-electric text-white rounded-xl font-bold flex items-center gap-2">
                 Get Started <ArrowRight size={20} />
               </Link>
            </div>
          </div>
          <div className="hidden lg:block relative group">
             <div className="w-full aspect-video glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-4xl opacity-10 font-bold font-outfit uppercase tracking-[1em] translate-y-20">{service.title}</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-outfit">Detailed Overview</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              {service.content}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-outfit">Key Benefits</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {service.benefits.map((benefit: string) => (
                <div key={benefit} className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                  <CheckCircle className="text-electric shrink-0" size={24} />
                  <span className="font-medium text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold font-outfit">Frequently Asked Questions</h2>
            <div className="space-y-4">
               {service.faqs.map((faq: any, i: number) => (
                 <div key={i} className="glass-card p-6 rounded-2xl border-white/5">
                    <div className="flex gap-4">
                      <HelpCircle className="text-electric shrink-0" size={24} />
                      <div>
                        <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                        <p className="text-gray-400">{faq.a}</p>
                      </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
           <div className="glass-card p-8 rounded-3xl border-electric/20 bg-electric/5">
              <h3 className="text-2xl font-bold font-outfit mb-4 text-gradient">Need a Quote?</h3>
              <p className="text-gray-400 mb-8 text-sm">
                Fill out the form and our team will get back to you within 24 hours to discuss your project requirements.
              </p>
              <Link href="/contact" className="block w-full py-4 bg-electric text-white text-center rounded-xl font-bold shadow-lg shadow-electric/20">
                Contact Us Now
              </Link>
           </div>

           <div className="glass-card p-8 rounded-3xl border-white/5">
              <h3 className="text-xl font-bold font-outfit mb-6">Our Services</h3>
              <ul className="space-y-4">
                {Object.keys(serviceData).map((key) => (
                  <li key={key}>
                    <Link 
                      href={`/services/${key}`}
                      className={`block py-3 px-4 rounded-xl transition-all ${slug === key ? "bg-electric text-white" : "hover:bg-white/5 text-gray-400"}`}
                    >
                      {serviceData[key].title}
                    </Link>
                  </li>
                ))}
              </ul>
           </div>
        </aside>
      </section>
    </div>
  );
}
