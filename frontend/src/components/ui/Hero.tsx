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
        <div className="absolute bottom-[10%] right-[10%] w-[60%] h-[60%] bg-gold-dark/5 rounded-full blur-[160px] animate-pulse delay-700" />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Vertical Accent Text */}
            <div className="absolute -left-12 top-0 h-full hidden xl:flex flex-col justify-between py-4 text-[10px] font-bold tracking-[0.5em] text-gray-700 uppercase vertical-text">
               <span>EST 2018</span>
               <div className="w-[1px] h-32 bg-gray-800 mx-auto" />
               <span>SCROLL TO EXPLORE</span>
            </div>

            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <div className="flex items-center gap-4 text-xs font-bold tracking-[0.3em] text-electric uppercase">
                   <div className="w-12 h-[1px] bg-electric/50" />
                   Premium Digital Artisans
                </div>
              </motion.div>

              <h1 className="text-7xl md:text-9xl xl:text-[11rem] font-bold font-outfit leading-[0.85] tracking-tighter uppercase">
                <span className="block overflow-hidden">
                   <motion.span 
                     initial={{ y: "100%" }} 
                     animate={{ y: 0 }} 
                     transition={{ duration: 0.8, delay: 0.3 }}
                     className="block"
                   >
                     Redefine
                   </motion.span>
                </span>
                <span className="block text-gradient neo-glow py-4">Digital</span>
                <span className="block overflow-hidden">
                   <motion.span 
                     initial={{ y: "100%" }} 
                     animate={{ y: 0 }} 
                     transition={{ duration: 0.8, delay: 0.5 }}
                     className="block"
                   >
                     Limits
                   </motion.span>
                </span>
              </h1>

              <div className="max-w-xl space-y-8">
                <p className="text-xl text-gray-400 leading-relaxed font-medium">
                   We craft bespoke software and high-performance digital experiences for 
                   visionaries who demand nothing less than perfection.
                </p>
                
                <div className="flex flex-wrap gap-8 items-center pt-4">
                  <Link
                    href="/contact"
                    className="group relative px-12 py-6 bg-electric text-navy rounded-full font-black text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] btn-premium"
                  >
                    DEPLOY PROJECT
                  </Link>
                  <Link
                    href="/portfolio"
                    className="group flex items-center gap-4 text-white font-bold tracking-widest text-sm hover:text-electric transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-electric transition-all">
                       <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                    </div>
                    VIEW CASE STUDIES
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
            className="relative perspective-2000 hidden lg:block"
          >
            <div className="animate-float-complex">
              <div className="glass-card rounded-[4rem] p-2 aspect-[4/5] relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-tr from-electric/10 to-transparent pointer-events-none" />
                 <div className="w-full h-full bg-navy/80 rounded-[3.8rem] flex flex-col p-12 justify-between">
                    <div className="flex justify-between items-start">
                       <div className="text-6xl font-black text-white/5 font-outfit select-none uppercase">01</div>
                       <div className="w-16 h-16 rounded-3xl bg-electric/10 border border-electric/20 flex items-center justify-center">
                          <Logo className="w-10 h-10" />
                       </div>
                    </div>
                    
                    <div className="space-y-6">
                       <div className="h-[2px] w-full bg-gradient-to-r from-electric/50 to-transparent" />
                       <h3 className="text-4xl font-bold font-outfit">Core Innovation</h3>
                       <p className="text-gray-500 font-medium">Building the infrastructure for the next generation of digital dominance.</p>
                       <div className="flex gap-2">
                          {[1,2,3,4].map(i => <div key={i} className="w-2 h-2 rounded-full bg-electric/30" />)}
                       </div>
                    </div>
                 </div>
              </div>

              {/* Floating Stat Card */}
              <motion.div 
                animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass-card p-8 rounded-3xl border-white/10 shadow-2xl z-20 backdrop-blur-3xl"
              >
                 <div className="text-4xl font-black text-electric mb-1 tracking-tighter">99.9%</div>
                 <div className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">Uptime Reliability</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
