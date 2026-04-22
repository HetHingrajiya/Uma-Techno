"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-10">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-electric/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-electric text-sm font-semibold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric"></span>
            </span>
            Innovation Driven Digital Agency
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold font-outfit leading-tight">
            Elevate Your <br />
            <span className="text-gradient">Digital Presence</span> <br />
            With Uma Techno
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
            We build high-performance websites, mobile apps, and custom software 
            that drive growth and deliver exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-electric hover:bg-electric/90 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-electric/20"
            >
              Start Your Project <ArrowRight size={20} />
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold flex items-center justify-center transition-all"
            >
              View Our Work
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/5">
            {[
              { name: "INNOVATE", icon: "💡" },
              { name: "BUILD", icon: "⚙️" },
              { name: "GROW", icon: "📈" },
              { name: "SUCCEED", icon: "🎯" },
            ].map((pillar) => (
              <div key={pillar.name} className="flex flex-col items-center gap-2 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl group-hover:bg-electric/10 group-hover:scale-110 transition-all border border-white/5 group-hover:border-electric/20">
                  {pillar.icon}
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-gray-500 group-hover:text-electric transition-colors">
                  {pillar.name}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          {/* Glassmorphism Card Mockup */}
          <div className="relative z-10 glass-card rounded-[2rem] p-4 aspect-square max-w-[500px] mx-auto overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
             <div className="w-full h-full bg-navy-light/50 rounded-2xl p-6 flex flex-col gap-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-grow flex items-center justify-center">
                   <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-gradient-to-tr from-electric to-accent rounded-2xl mx-auto blur-2xl opacity-20 animate-pulse" />
                      <div className="text-4xl font-bold text-white/20 font-outfit select-none">UMA TECHNO</div>
                   </div>
                </div>
             </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 -right-4 z-20 glass-card p-4 rounded-2xl shadow-xl border-white/20"
          >
             <div className="text-xs text-gray-400">Project Status</div>
             <div className="text-sm font-bold text-green-400">100% Completed</div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 -left-10 z-20 glass-card p-4 rounded-2xl shadow-xl border-white/20"
          >
             <div className="text-xs text-gray-400">New Leads</div>
             <div className="text-xl font-bold text-white">+124% Growth</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
