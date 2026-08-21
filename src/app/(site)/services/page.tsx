import React, { useState } from "react";
import { Globe, Smartphone, Code, Database, Cloud, ShoppingCart, PenTool, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/content";
import ProjectEstimator from "@/components/ui/ProjectEstimator";

// Map string icons from data to lucide components
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

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(services[0]);

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
            WHAT WE BUILD
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black font-outfit text-white tracking-tighter leading-tight"
          >
            Engineering <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-accent)] animate-pulse">Digital Products.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto text-lg font-medium"
          >
            We transform manual workflows and complex business processes into scalable, high-performance software.
          </motion.p>
        </div>

        {/* Interactive Service Explorer (Desktop) & Cards (Mobile) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start relative z-10 mb-32">
          
          {/* Navigation Sidebar */}
          <div className="col-span-4 space-y-3">
             {services.map((service, idx) => {
               const isActive = activeService.id === service.id;
               const Icon = iconMap[service.icon] || Code;
               return (
                 <button
                   key={service.id}
                   onClick={() => setActiveService(service)}
                   className={`w-full text-left px-6 py-5 rounded-2xl border transition-all flex items-center justify-between group ${
                     isActive 
                       ? "bg-white/10 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]" 
                       : "bg-transparent border-transparent hover:bg-white/5"
                   }`}
                 >
                   <div className="flex items-center gap-4">
                     <div className={`text-xs font-black tracking-widest ${isActive ? "text-[var(--color-electric)]" : "text-white/40"}`}>
                       0{idx + 1}
                     </div>
                     <h3 className={`font-outfit font-bold text-lg ${isActive ? "text-white" : "text-white/60 group-hover:text-white"}`}>
                       {service.title}
                     </h3>
                   </div>
                   {isActive && (
                     <motion.div layoutId="active-indicator" className="w-2 h-2 rounded-full bg-[var(--color-electric)] shadow-[0_0_10px_var(--color-electric)]" />
                   )}
                 </button>
               );
             })}
          </div>

          {/* Active Service Display */}
          <div className="col-span-8">
            <AnimatePresence mode="wait">
               <motion.div
                 key={activeService.id}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.3 }}
                 className="glass-card h-full min-h-[500px] p-12 lg:p-16 rounded-[3rem] border border-[var(--color-border)] relative overflow-hidden group flex flex-col justify-between"
               >
                 <div className="absolute top-0 right-0 p-12 opacity-5">
                   {React.createElement(iconMap[activeService.icon] || Code, { size: 200 })}
                 </div>
                 
                 <div className="relative z-10">
                   <div className="w-16 h-16 rounded-2xl bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/20 flex items-center justify-center text-[var(--color-electric)] mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                     {React.createElement(iconMap[activeService.icon] || Code, { size: 32 })}
                   </div>
                   
                   <h2 className="text-4xl lg:text-5xl font-black font-outfit text-white mb-6 leading-tight">
                     {activeService.title}
                   </h2>
                   
                   <p className="text-xl text-[var(--color-text-main)] opacity-70 font-medium mb-12 max-w-xl leading-relaxed">
                     {activeService.shortDescription}
                   </p>
                   
                   <div className="grid grid-cols-2 gap-4 mb-12">
                      {activeService.features.map(feature => (
                        <div key={feature} className="flex items-center gap-3 text-white/80 font-medium text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                          {feature}
                        </div>
                      ))}
                   </div>
                 </div>

                 <div className="relative z-10 mt-auto pt-8 border-t border-white/10">
                   <Link 
                     to={`/services/${activeService.slug}`}
                     className="inline-flex items-center gap-3 text-white font-bold tracking-widest text-sm uppercase hover:text-[var(--color-electric)] transition-colors group/link"
                   >
                     View Capabilities <ArrowRight size={20} className="group-hover/link:translate-x-2 transition-transform" />
                   </Link>
                 </div>
               </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile View: Grid of Cards */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 mb-20">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Code;
            return (
              <div key={service.id} className="glass-card p-8 rounded-[2rem] border border-[var(--color-border)] flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/20 flex items-center justify-center text-[var(--color-electric)]">
                    <Icon size={24} />
                  </div>
                  <div className="text-xs font-black tracking-widest text-white/20">0{idx + 1}</div>
                </div>
                <h3 className="text-2xl font-black font-outfit text-white mb-4">{service.title}</h3>
                <p className="text-[var(--color-text-main)] opacity-70 text-sm mb-8 flex-grow">{service.shortDescription}</p>
                <Link 
                  to={`/services/${service.slug}`}
                  className="flex items-center gap-2 text-[var(--color-electric)] font-bold text-sm uppercase tracking-wider"
                >
                  Explore <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

      </div>

      <div className="mt-20 border-t border-[var(--color-border)] pt-20">
        <ProjectEstimator />
      </div>
    </div>
  );
}

