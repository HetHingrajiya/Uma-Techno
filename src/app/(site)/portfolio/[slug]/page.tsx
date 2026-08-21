import React from "react";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { portfolio } from "@/data/content";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = portfolio.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-40 pb-20 min-h-screen flex items-center justify-center">
         <div className="text-center space-y-6">
            <h1 className="text-4xl font-black font-outfit text-white">Project Not Found</h1>
            <p className="text-[var(--color-text-main)] opacity-70">The case study you are looking for does not exist.</p>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-[var(--color-electric)] font-bold tracking-widest uppercase">
              <ArrowRight size={20} className="rotate-180" /> Back to Portfolio
            </Link>
         </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-20 relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[var(--color-electric)]/40 bg-[var(--color-electric)]/10 text-[var(--color-electric)] text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md neo-glow">
              CASE STUDY: {project.industry}
            </div>
            <h1 className="text-5xl lg:text-7xl font-black font-outfit text-white leading-tight tracking-tighter">
              {project.title}
            </h1>
            <p className="text-xl text-[var(--color-text-main)] opacity-70 leading-relaxed font-medium">
              {project.challenge}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:border-l border-[var(--color-border)] lg:pl-12 py-4">
            <div>
              <div className="text-[10px] uppercase font-black text-[var(--color-electric)] tracking-widest mb-2">Industry</div>
              <div className="text-xl font-bold text-white">{project.industry}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-black text-[var(--color-electric)] tracking-widest mb-2">Outcome</div>
              <div className="text-xl font-bold text-white">{project.outcome}</div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-video rounded-[3rem] overflow-hidden border border-[var(--color-border)] shadow-[0_0_50px_rgba(0,0,0,0.5)] mb-20 relative group z-10">
           <img 
            src={project.images.desktop} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-12 gap-16 relative z-10">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-black font-outfit text-white">The Challenge</h2>
              <p className="text-lg text-[var(--color-text-main)] opacity-70 leading-relaxed font-medium">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-black font-outfit text-white">Our Strategy</h2>
              <p className="text-lg text-[var(--color-text-main)] opacity-70 leading-relaxed font-medium">
                {project.strategy}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-black font-outfit text-white">The Solution</h2>
              <p className="text-lg text-[var(--color-text-main)] opacity-70 leading-relaxed font-medium">
                {project.solution}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-8">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle className="text-[var(--color-electric)] shrink-0" size={24} />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="glass-card p-10 rounded-[2.5rem] border border-[var(--color-border)] shadow-xl space-y-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-white/50 mb-6">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((t) => (
                  <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 text-white text-xs font-bold rounded-xl uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-10 rounded-[2.5rem] border border-[var(--color-electric)]/30 bg-gradient-to-br from-[var(--color-electric)]/10 to-transparent shadow-[0_0_30px_rgba(6,182,212,0.1)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                 <Zap size={100} />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-electric)] flex items-center justify-center text-white mb-6 neo-glow">
                   <Zap size={24} />
                </div>
                <h3 className="text-2xl font-black font-outfit text-white">Ready for a similar solution?</h3>
                <p className="text-white/70 font-medium">Let's build a high-performance digital product for your business.</p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-3 bg-white text-black px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
                >
                  Start Project <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-32 pt-16 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-center gap-6 relative z-10">
          <Link to="/portfolio" className="text-white/50 hover:text-white font-bold flex items-center gap-2 transition-all uppercase tracking-widest text-xs">
            <ArrowRight size={16} className="rotate-180" /> Back to Portfolio
          </Link>
          <Link to="/contact" className="text-[var(--color-electric)] font-bold uppercase tracking-widest text-xs hover:underline">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}
