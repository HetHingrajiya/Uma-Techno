"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-matrix">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-[10%] left-[10%] w-[60%] h-[60%] bg-electric/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[160px] animate-pulse delay-700" />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="space-y-12">
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold font-outfit leading-[0.9] tracking-tighter uppercase">
                <span className="block overflow-hidden">
                   <motion.span 
                     initial={{ y: "100%" }} 
                     animate={{ y: 0 }} 
                     transition={{ duration: 0.8, delay: 0.3 }}
                     className="block"
                   >
                     Build
                   </motion.span>
                </span>
                <span className="block text-gradient neo-glow py-2">Premium.</span>
                <span className="block overflow-hidden">
                   <motion.span 
                     initial={{ y: "100%" }} 
                     animate={{ y: 0 }} 
                     transition={{ duration: 0.8, delay: 0.5 }}
                     className="block"
                   >
                     Grow Faster.
                   </motion.span>
                </span>
              </h1>

              <div className="max-w-lg space-y-6">
                <p className="text-lg text-gray-400 leading-relaxed font-medium">
                   We engineer high-performance websites, mobile apps, and custom software that transform businesses into industry leaders.
                </p>
                
                <div className="flex flex-wrap gap-4 lg:gap-8 items-center pt-4 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="group relative px-8 lg:px-12 py-4 lg:py-6 bg-electric text-navy rounded-full font-black text-base lg:text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(14,165,233,0.4)] btn-premium w-full sm:w-auto text-center"
                  >
                    GET FREE QUOTE
                  </Link>
                  <Link
                    href="/portfolio"
                    className="group flex items-center gap-4 text-white font-bold tracking-widest text-[10px] lg:text-sm hover:text-electric transition-colors"
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-electric transition-all">
                       <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                    </div>
                    VIEW PORTFOLIO
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative perspective-2000 block lg:block mt-12 lg:mt-0"
          >
            <div className="animate-float-complex max-w-md mx-auto lg:max-w-none">
              <div className="glass-card rounded-[2.5rem] lg:rounded-[3rem] p-1.5 lg:p-2 aspect-square relative overflow-hidden group">
                 <img 
                   src="/images/portfolio-showcase.png" 
                   alt="Portfolio Showcase" 
                   className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-navy via-transparent to-transparent pointer-events-none" />
                 <div className="relative z-10 w-full h-full bg-navy/20 backdrop-blur-sm rounded-[2.3rem] lg:rounded-[2.8rem] flex flex-col p-6 lg:p-8 justify-between border border-white/5">
                    <div className="flex justify-between items-start">
                       <div className="text-3xl lg:text-4xl font-black text-white/5 font-outfit select-none uppercase">01</div>
                       <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-electric/10 border border-electric/20 flex items-center justify-center">
                          <Logo className="w-6 h-6 lg:w-8 lg:h-8" />
                       </div>
                    </div>
                    
                    <div className="space-y-3 lg:space-y-4">
                       <div className="h-[1px] w-full bg-gradient-to-r from-electric/50 to-transparent" />
                       <h3 className="text-xl lg:text-2xl font-bold font-outfit text-white">Core Innovation</h3>
                       <p className="text-xs lg:text-sm text-gray-400 font-medium">Building the infrastructure for the next generation of digital dominance.</p>
                       <div className="flex gap-2">
                          {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-electric/30" />)}
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
