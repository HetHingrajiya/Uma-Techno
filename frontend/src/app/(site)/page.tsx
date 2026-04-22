"use client";

import Hero from "@/components/ui/Hero";
import { 
  Code, Globe, Smartphone, BarChart, Palette, Megaphone, 
  Rocket, Shield, Zap, Users, Star, ArrowRight, CheckCircle 
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { label: "Projects Delivered", value: "250+", icon: Rocket },
  { label: "Happy Clients", value: "120+", icon: Users },
  { label: "Fast Support", value: "24/7", icon: Star },
  { label: "SEO Ready Solutions", value: "100%", icon: Shield },
];

const services = [
  { title: "Website Development", description: "High-performance, scalable websites built with the latest technologies.", icon: Globe, link: "/services/web-development" },
  { title: "Ecommerce Development", description: "Powerful online stores that convert visitors into loyal customers.", icon: Rocket, link: "/services/ecommerce" },
  { title: "Mobile Apps", description: "Premium iOS and Android apps with a focus on seamless UX.", icon: Smartphone, link: "/services/app-development" },
  { title: "Custom Software", description: "Tailored solutions to solve complex business challenges.", icon: Code, link: "/services/custom-software" },
  { title: "UI/UX Design", description: "Modern, intuitive designs that prioritize user brand identity.", icon: Palette, link: "/services/ui-ux" },
  { title: "SEO Services", description: "Strategic SEO to improve visibility and drive organic traffic.", icon: BarChart, link: "/services/seo" },
  { title: "Branding", description: "Building strong, memorable brands through strategic design.", icon: Megaphone, link: "/services/branding" },
  { title: "Maintenance", description: "Ongoing support and updates to keep your systems running smoothly.", icon: Shield, link: "/services/maintenance" }
];

const process = [
  { title: "Discovery", desc: "Understanding your vision, goals, and target audience in depth." },
  { title: "Planning", desc: "Creating a detailed roadmap and wireframes for your project." },
  { title: "Design", desc: "Crafting a premium UI/UX that aligns with your brand." },
  { title: "Development", desc: "Building your solution with precision and the latest tech." },
  { title: "Launch", desc: "Quality assurance followed by a smooth deployment." },
  { title: "Support", desc: "Long-term partnership to ensure your continued growth." },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-32">
      <Hero />

      {/* Trusted By Section */}
      <section className="max-w-7xl mx-auto px-6 w-full -mt-10">
        <div className="text-center space-y-8">
          <p className="text-gray-500 font-medium tracking-widest text-xs uppercase">Trusted By Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             {["TechCorp", "Innovate", "GlobalSoft", "Visionary", "Nexus"].map(brand => (
               <span key={brand} className="text-2xl font-bold font-outfit text-white/50">{brand}</span>
             ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-bold uppercase tracking-wider">
            Our Expertise
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-outfit tracking-tight">Digital Solutions That <br /> <span className="text-gradient">Drive Results</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We combine strategy, design, and technology to build products that people love and businesses grow with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-8 min-h-[800px]">
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
                Next-Gen <br /> <span className="text-electric">Web Systems</span>
              </h4>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                We build massive scale digital ecosystems that handle millions of users with zero friction.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm font-black tracking-widest text-electric uppercase group-hover:gap-6 transition-all">
              EXPLORE ENGINEERING <ArrowRight size={20} />
            </div>
          </Link>

          {/* Medium App Card */}
          <Link 
            href={services[1].link}
            className="group glass-card p-8 rounded-[2rem] md:col-span-2 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="flex items-center gap-6">
               <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-electric group-hover:bg-electric group-hover:text-navy transition-all">
                  <Smartphone size={28} />
               </div>
               <div>
                  <h4 className="text-xl font-bold font-outfit text-white">Bespoke Mobile Apps</h4>
                  <p className="text-sm text-gray-500">iOS & Android Excellence</p>
               </div>
            </div>
          </Link>

          {/* Small Cards */}
          <Link 
            href={services[2].link}
            className="group glass-card p-8 rounded-[2rem] flex flex-col justify-between relative overflow-hidden"
          >
            <Palette size={28} className="text-gray-600 group-hover:text-electric transition-colors" />
            <h4 className="text-lg font-bold font-outfit text-white uppercase tracking-wider">UI/UX <br /> Mastery</h4>
          </Link>

          <Link 
            href={services[3].link}
            className="group glass-card p-8 rounded-[2rem] flex flex-col justify-between relative overflow-hidden bg-electric/5"
          >
            <BarChart size={28} className="text-electric" />
            <h4 className="text-lg font-bold font-outfit text-white uppercase tracking-wider">Growth <br /> Strategy</h4>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="aspect-video glass-card rounded-[3rem] overflow-hidden border border-white/5">
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
              className="absolute -top-8 -right-8 glass-card p-6 rounded-2xl border-white/10 shadow-2xl backdrop-blur-xl"
            >
               <div className="text-electric font-black text-xl tracking-tighter">Business First</div>
               <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Our Core Mindset</div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold font-outfit">Your Partner in <br /><span className="text-gradient">Digital Growth</span></h2>
              <p className="text-gray-400 leading-relaxed">
                We don&apos;t just build websites; we build business engines designed for real client acquisition and long-term scaling.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: "Business-first mindset", desc: "Every line of code is written to solve your specific business goals." },
                { title: "Premium UI/UX", desc: "Elite design standards that command authority and build trust." },
                { title: "SEO-ready code", desc: "Built-in search engine optimization for maximum organic reach." },
                { title: "Fast delivery", desc: "Agile methodologies that get you to market at light speed." },
                { title: "Long-term support", desc: "A dedicated team that grows with your business." }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-electric/20 flex items-center justify-center text-electric group-hover:bg-electric group-hover:text-white transition-all mt-1">
                    <CheckCircle size={14} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{benefit.title}</h4>
                    <p className="text-gray-500 text-sm">{benefit.desc}</p>
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
             { name: "Rajesh Mehta", role: "CEO, TechCorp Solutions", image: "/images/client-1.png", quote: "Uma Techno transformed our business with a stunning website that increased our conversion rate by 40%. Highly professional team!" },
             { name: "Priya Sharma", role: "Founder, Innovate Art", image: "/images/client-2.png", quote: "The level of detail and UI/UX expertise they brought to our mobile app was world-class. A true digital partner." },
             { name: "John Doe", role: "Product Head, Nexus Global", image: "/images/client-3.png", quote: "Scale and speed are what we needed, and Uma Techno delivered exactly that. Our platform now handles millions of users with ease." }
           ].map((testimonial, i) => (
             <div key={i} className="glass-card p-8 rounded-[2rem] text-left space-y-4 relative group overflow-hidden">
                <div className="flex gap-1 text-accent">
                   {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic leading-relaxed relative z-10 text-sm">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-4 relative z-10">
                   <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-electric/30">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
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
            Ready to Build <span className="text-gradient">Something Great</span>?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Don&apos;t settle for basic. Partner with Uma Techno and get a solution that truly represents your brand and scales with your ambition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-navy hover:bg-gray-200 rounded-xl font-bold text-base transition-all hover:scale-105 shadow-xl btn-premium"
            >
              Start Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-xl font-bold text-base transition-all"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
