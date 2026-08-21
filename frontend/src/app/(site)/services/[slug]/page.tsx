import React from "react";
import { Globe, Smartphone, Code, Database, Cloud, ShoppingCart, PenTool, TrendingUp, CheckCircle, ArrowRight, Zap } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { services } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Code,
  Database,
  Cloud,
  ShoppingCart,
  Figma: PenTool,
  TrendingUp
};

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-40 pb-20 min-h-screen flex items-center justify-center">
         <div className="text-center space-y-6">
            <h1 className="text-4xl font-black font-outfit text-white">Service Not Found</h1>
            <p className="text-[var(--color-text-main)] opacity-70">The capability you are looking for does not exist.</p>
            <Link to="/services" className="inline-flex items-center gap-2 text-[var(--color-electric)] font-bold tracking-widest uppercase">
              <ArrowRight size={20} className="rotate-180" /> Back to Capabilities
            </Link>
         </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Code;

  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-32 relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[var(--color-electric)]/40 bg-[var(--color-electric)]/10 text-[var(--color-electric)] text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md neo-glow">
              CORE CAPABILITY
            </div>
            <h1 className="text-5xl lg:text-7xl font-black font-outfit leading-[1.1] tracking-tighter text-white">
              {service.title.split(' ').slice(0, -1).join(' ')} <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-accent)] animate-pulse">{service.title.split(' ').pop()}</span>
            </h1>
            <p className="text-xl text-[var(--color-text-main)] opacity-70 leading-relaxed font-medium">
              {service.shortDescription}
            </p>
            
            <div className="pt-6">
              <Link 
                to="/contact" 
                className="btn-primary-animated px-8 py-4 rounded-2xl font-bold tracking-widest text-sm uppercase flex items-center gap-3 w-fit shadow-xl"
              >
                Discuss Technical Specs <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="relative group lg:h-[500px]">
             <div className="absolute inset-0 flex items-center justify-center animate-float-complex">
               <div className="absolute w-[80%] h-[80%] bg-[var(--color-electric)]/20 blur-[100px] rounded-full mix-blend-screen" />
               <div className="glass-card w-full h-full rounded-[3rem] border border-[var(--color-electric)]/30 overflow-hidden relative flex items-center justify-center">
                 <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
                 <Icon size={160} className="text-[var(--color-electric)] relative z-10 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
               </div>
             </div>
          </div>
        </section>

        {/* Features Matrix */}
        <section className="relative z-10 mb-32">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-black font-outfit text-white tracking-tighter">Technical <span className="text-gradient">Deliverables.</span></h2>
            <p className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto font-medium">
              What you can expect when you engage our engineering team for {service.title}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <div key={i} className="glass-card p-8 rounded-[2rem] border border-[var(--color-border)] group hover:border-[var(--color-electric)]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-electric)] mb-6 group-hover:bg-[var(--color-electric)] group-hover:text-white transition-all shadow-lg">
                  <CheckCircle size={20} />
                </div>
                <h4 className="text-xl font-black font-outfit text-white">{feature}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative z-10">
          <div className="glass-card p-12 lg:p-16 rounded-[3rem] border border-[var(--color-electric)]/30 bg-gradient-to-br from-[var(--color-electric)]/10 to-transparent shadow-[0_0_30px_rgba(6,182,212,0.1)] relative overflow-hidden group text-center">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
               <Zap size={200} />
            </div>
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="text-4xl font-black font-outfit text-white">Ready to Architect Your Solution?</h2>
              <p className="text-white/70 font-medium text-lg">We provide end-to-end technical execution. Let's discuss the scope and requirements of your next project.</p>
              <div className="pt-6">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
                >
                  Start Project <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="mt-20 pt-10 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-center gap-6 relative z-10">
          <Link to="/services" className="text-white/50 hover:text-white font-bold flex items-center gap-2 transition-all uppercase tracking-widest text-xs">
            <ArrowRight size={16} className="rotate-180" /> Back to Capabilities
          </Link>
        </div>

      </div>
    </div>
  );
}
