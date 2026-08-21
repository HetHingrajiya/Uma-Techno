import React from "react";
import { ArrowRight, Activity, Cpu, Briefcase, GraduationCap, Building2, Car, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { industries } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  "healthcare": Activity,
  "manufacturing": Settings,
  "retail": Building2,
  "automotive": Car,
  "education": GraduationCap,
  "professional-services": Briefcase,
  "custom": Cpu
};

export default function SolutionsPage() {
  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center space-y-6 mb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[var(--color-electric)]/40 bg-[var(--color-electric)]/10 text-[var(--color-electric)] text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md neo-glow"
          >
            INDUSTRY SOLUTIONS
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black font-outfit text-white tracking-tighter leading-tight"
          >
            Software for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-accent)] animate-pulse">Specific Workflows.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto text-lg font-medium"
          >
            Every industry has unique operational challenges. We build specialized software that addresses the specific needs of your vertical.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 mb-32">
          {industries.map((industry, idx) => {
            const Icon = iconMap[industry.slug] || Cpu;
            return (
              <motion.div 
                key={industry.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-10 rounded-[2.5rem] border border-[var(--color-border)] group hover:border-[var(--color-electric)]/50 transition-colors flex flex-col h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all">
                  <Icon size={120} />
                </div>
                
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/20 flex items-center justify-center text-[var(--color-electric)] mb-8 shadow-[0_0_15px_rgba(6,182,212,0.15)] relative z-10">
                  <Icon size={24} />
                </div>
                
                <h3 className="text-2xl font-black font-outfit text-white mb-4 relative z-10">
                  {industry.title}
                </h3>
                
                <p className="text-[var(--color-text-main)] opacity-70 font-medium mb-10 flex-grow relative z-10">
                  {industry.description}
                </p>
                
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-white/50 hover:text-[var(--color-electric)] font-bold text-sm tracking-widest uppercase transition-colors group/link relative z-10 w-fit"
                >
                  Discuss Solution <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="glass-card p-12 lg:p-16 rounded-[3rem] border border-[var(--color-electric)]/30 bg-gradient-to-br from-[var(--color-electric)]/10 to-transparent shadow-[0_0_30px_rgba(6,182,212,0.1)] relative overflow-hidden group text-center z-10">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
             <Cpu size={200} />
          </div>
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl font-black font-outfit text-white">Don't see your industry?</h2>
            <p className="text-white/70 font-medium text-lg">We engineer custom software for highly specialized operations. Let's discuss your unique workflow requirements.</p>
            <div className="pt-6">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
              >
                Schedule a Consultation <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
