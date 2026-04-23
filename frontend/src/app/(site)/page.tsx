"use client";

import Hero from "@/components/ui/Hero";
import { 
  Code, Globe, Smartphone, BarChart, Palette, Megaphone, 
  Rocket, Shield, Zap, Users, Star, ArrowRight, CheckCircle 
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { label: "Successful Projects", value: "50+", icon: Rocket },
  { label: "Business Growth", value: "3x", icon: Zap },
  { label: "Client Retention", value: "95%", icon: Users },
  { label: "Support Response", value: "< 2hr", icon: Shield },
];

const services = [
  { title: "Web Engineering", description: "Scalable, secure, and conversion-optimized web platforms for growing businesses.", icon: Globe, link: "/services/web-development" },
  { title: "E-commerce Growth", description: "End-to-end online stores with advanced payment integrations and marketing focus.", icon: Rocket, link: "/services/ecommerce" },
  { title: "Mobile Innovation", description: "Native-quality iOS and Android applications that deliver exceptional user experiences.", icon: Smartphone, link: "/services/app-development" },
  { title: "Enterprise Solutions", description: "Custom CRM and internal tools designed to automate your business operations.", icon: Code, link: "/services/custom-software" },
  { title: "Strategy & SEO", description: "Technical SEO and digital strategy to dominate search results and drive leads.", icon: BarChart, link: "/services/seo" },
];

const process = [
  { title: "Discovery & Strategy", desc: "We deep-dive into your business model to align our solution with your revenue goals." },
  { title: "Prototyping", desc: "Creating high-fidelity wireframes and interactive prototypes for your review." },
  { title: "Iterative Development", desc: "Building in agile sprints with regular updates and feedback cycles." },
  { title: "Quality Assurance", desc: "Rigorous testing across devices to ensure a flawless, bug-free launch." },
  { title: "Launch & Support", desc: "Deployment to production followed by 24/7 monitoring and long-term scaling." },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16 lg:gap-32 pb-20 lg:pb-32">
      <Hero />

      {/* Trusted By Section */}
      <section className="max-w-7xl mx-auto px-6 w-full -mt-8 lg:-mt-16">
        <div className="text-center space-y-8">
          <p className="text-gray-500 font-medium tracking-widest text-xs uppercase">Partnering with Growth-Focused Brands</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
             {["Retailers", "Real Estate", "Startups", "Enterprises", "Agency Partners"].map(brand => (
               <span key={brand} className="text-2xl font-bold font-outfit text-white/50">{brand}</span>
             ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-bold uppercase tracking-wider">
            Premium Solutions
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-outfit tracking-tight">Business Engines Built <br /> <span className="text-gradient">For Growth</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We don&apos;t just build websites. We engineer high-performance digital systems that capture leads, automate operations, and scale revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 lg:gap-8 min-h-auto lg:min-h-[800px]">
          {/* Main Large Card */}
           <Link 
            href={services[0].link}
            className="group glass-card p-10 rounded-[2.5rem] md:col-span-2 md:row-span-2 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-electric/5 blur-[100px] -mr-32 -mt-32 group-hover:bg-electric/20 transition-all" />
            <div className="space-y-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-electric to-gold-light rounded-2xl flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                <Globe size={32} />
              </div>
              <h4 className="text-3xl font-black font-outfit leading-tight text-white uppercase tracking-tighter">
                Premium Web <br /> <span className="text-electric">Development</span>
              </h4>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                High-performance web architectures engineered for speed, security, and maximum conversion.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm font-black tracking-widest text-electric uppercase group-hover:gap-6 transition-all">
              VIEW SOLUTIONS <ArrowRight size={20} />
            </div>
          </Link>

          {/* Medium App Card */}
          <Link 
            href={services[1].link}
            className="group glass-card p-8 rounded-[2rem] md:col-span-2 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="space-y-4 relative z-10">
               <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-electric group-hover:bg-electric group-hover:text-navy transition-all">
                  <Smartphone className="w-7 h-7" />
               </div>
               <div>
                  <h4 className="text-2xl font-bold font-outfit text-white">Mobile App Innovation</h4>
                  <p className="text-gray-500">iOS & Android Apps</p>
               </div>
            </div>
          </Link>

          {/* Small Cards */}
          <Link 
            href={services[2].link}
            className="group glass-card p-8 rounded-[2rem] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-4 relative z-10">
              <Palette className="w-7 h-7 text-gray-600 group-hover:text-electric transition-colors" />
              <h4 className="text-xl font-bold font-outfit text-white uppercase tracking-wider">Strategic <br /> UI/UX Design</h4>
            </div>
          </Link>

          <Link 
            href={services[3].link}
            className="group glass-card p-8 rounded-[2rem] flex flex-col justify-between relative overflow-hidden bg-electric/5"
          >
            <div className="space-y-4 relative z-10">
              <BarChart className="w-7 h-7 text-electric" />
              <h4 className="text-xl font-bold font-outfit text-white uppercase tracking-wider">SEO & <br /> Digital Growth</h4>
            </div>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative group order-2 lg:order-1">
            <div className="aspect-video glass-card rounded-[2.5rem] overflow-hidden border border-white/5">
               <img 
                 src="/images/templates.png" 
                 alt="Website Templates" 
                 className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-60" />
            </div>
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-6 -right-6 lg:-top-8 lg:-right-8 glass-card p-4 lg:p-6 rounded-xl lg:rounded-2xl border-white/10 shadow-2xl backdrop-blur-xl"
            >
               <div className="text-electric font-black text-lg lg:text-xl tracking-tighter">Business First</div>
               <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Our Core Mindset</div>
            </motion.div>
          </div>

          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold font-outfit">Your Partner in <br /><span className="text-gradient">Business Dominance</span></h2>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                We bridge the gap between complex technology and business growth. Our solutions are engineered to be assets, not just expenses.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {[
                { title: "Revenue-first approach", desc: "Every line of code is designed to maximize your return on investment." },
                { title: "Elite UI/UX Mastery", desc: "Premium design standards that command authority and convert visitors." },
                { title: "Technical SEO Core", desc: "Built-in search engine optimization for sustainable organic growth." },
                { title: "Agile Rapid Delivery", desc: "Efficient workflows that get your product to market faster than competitors." },
                { title: "Dedicated Support", desc: "A proactive technical team that evolves with your scaling business." }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-3 lg:gap-4 group">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-electric/20 flex items-center justify-center text-electric group-hover:bg-electric group-hover:text-white transition-all mt-1">
                    <CheckCircle size={12} />
                  </div>
                  <div>
                    <h4 className="text-base lg:text-lg font-bold text-white">{benefit.title}</h4>
                    <p className="text-gray-500 text-xs lg:text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-navy-light/30 py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mx-auto text-accent mb-2">
                <stat.icon size={20} />
              </div>
              <div className="text-3xl lg:text-4xl font-bold font-outfit text-white">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit">How We Turn Ideas Into <span className="text-gradient">Reality</span></h2>
            <p className="text-gray-400 leading-relaxed">
              Our proven development methodology ensures your project is delivered on time, within budget, and to the highest quality standards.
            </p>
            <div className="space-y-4">
              {process.map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-electric font-bold text-lg group-hover:bg-electric group-hover:text-white transition-all">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
             <div className="aspect-square glass-card rounded-[3rem] p-1 overflow-hidden relative group border border-white/5">
                <img 
                  src="/images/process-visual.png" 
                  alt="Process Visualization" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60" />
                <div className="relative z-10 w-full h-full bg-navy/20 backdrop-blur-sm flex items-center justify-center p-12">
                   <div className="text-center space-y-4">
                      <Zap size={48} className="text-electric mx-auto animate-float" />
                      <div className="text-3xl font-bold font-outfit">Rapid Execution</div>
                      <p className="text-gray-400">Turning complex ideas into scalable reality.</p>
                   </div>
                </div>
             </div>
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 blur-3xl rounded-full" />
             <div className="absolute -top-6 -left-6 w-32 h-32 bg-electric/20 blur-3xl rounded-full" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 w-full text-center">
        <h2 className="text-3xl lg:text-4xl font-bold font-outfit mb-12">What Our <span className="text-gradient">Clients Say</span></h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { name: "Suresh Patel", role: "Real Estate Developer", image: "/images/client-1.png", quote: "Uma Techno completely revamped our online presence. Our lead generation has doubled since we launched the new platform." },
             { name: "Anjali Vyas", role: "E-commerce Brand Owner", image: "/images/client-2.png", quote: "The mobile app they built for us is world-class. Their attention to detail and UX expertise is unmatched in Rajkot." },
             { name: "Amit Shah", role: "Startup Founder", image: "/images/client-3.png", quote: "Fast, reliable, and technically superior. They didn't just build a site; they built a tool that handles our growth effortlessly." }
           ].map((testimonial, i) => (
             <div key={i} className="glass-card p-8 rounded-[2rem] text-left space-y-4 relative group overflow-hidden">
                <div className="flex gap-1 text-accent">
                   {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic leading-relaxed relative z-10 text-sm">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-4 relative z-10">
                   <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-electric/30 bg-navy-light flex items-center justify-center">
                      <Users size={20} className="text-electric" />
                   </div>
                   <div>
                      <p className="font-bold text-white text-sm">{testimonial.name}</p>
                      <p className="text-[11px] text-gray-500 uppercase tracking-wider">{testimonial.role}</p>
                   </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-electric/5 rounded-full blur-3xl group-hover:bg-electric/10 transition-all" />
             </div>
           ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 w-full pb-20">
        <div className="bg-gradient-to-br from-electric/20 to-accent/10 border border-white/10 rounded-[3rem] p-10 lg:p-16 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric/20 blur-[120px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 blur-[120px] -ml-48 -mb-48" />
          
          <h2 className="text-3xl lg:text-5xl font-bold font-outfit max-w-3xl mx-auto leading-tight">
            Ready to Accelerate Your <span className="text-gradient">Business Growth</span>?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Stop settling for mediocre digital presence. Partner with Uma Techno to build a premium solution that commands authority and delivers results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-navy hover:bg-gray-200 rounded-xl font-bold text-base transition-all hover:scale-105 shadow-xl btn-premium"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-xl font-bold text-base transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
