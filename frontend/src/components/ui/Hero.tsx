"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Rocket, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden bg-[var(--background)]"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-[var(--color-electric)]/10 blur-[120px] mix-blend-screen animate-pulse-glow" />
        <div className="absolute top-[40%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[var(--color-accent)]/10 blur-[100px] mix-blend-screen animate-pulse-glow" style={{ animationDelay: '2s' }} />
        
        {theme.heroImageUrl && (
          <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0">
            <Image 
              src={theme.heroImageUrl} 
              alt="Hero Background" 
              fill 
              className="object-cover opacity-[0.03] scale-110"
              priority
            />
          </motion.div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/50 backdrop-blur-md shadow-sm">
              <Sparkles size={16} className="text-[var(--color-electric)]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-main)]">Award Winning Digital Agency</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black font-outfit leading-[1.05] tracking-tighter text-[var(--color-text-main)]">
              Digital <br />
              <span className="text-gradient relative inline-block">
                Excellence
                <motion.svg 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 w-full h-4 text-[var(--color-electric)] opacity-50" 
                  viewBox="0 0 200 9" 
                  fill="none"
                >
                  <path d="M2 7.5C40 -1.5 160 -1.5 198 7.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </motion.svg>
              </span>
              <br /> Delivered.
            </h1>

            <p className="text-lg lg:text-xl text-[var(--color-text-main)] opacity-70 leading-relaxed max-w-lg font-medium">
              We engineer high-performance websites, apps, and digital strategies that transform ambitious brands and scale revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-premium text-white rounded-[2rem] font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_var(--color-electric)] text-center flex justify-center items-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                Start Your Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="group px-8 py-4 glass-card-premium border border-[var(--color-border)] text-[var(--color-text-main)] rounded-[2rem] font-bold text-lg transition-all hover:bg-[var(--color-navy-light)] text-center flex justify-center items-center"
              >
                Our Work
              </Link>
            </div>
            
            <div className="flex items-center gap-6 pt-8 border-t border-[var(--color-border)]/50">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[var(--background)] bg-[var(--color-card)] overflow-hidden">
                    <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" width={40} height={40} />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-[#F59E0B]">
                  {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                </div>
                <div className="text-xs font-bold text-[var(--color-text-main)] opacity-70 mt-1">Trusted by 100+ Brands</div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Visuals */}
          <motion.div 
            style={{ y: y2 }}
            className="relative hidden lg:block h-[600px]"
          >
            {/* Center Main Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 glass-card-premium rounded-[2.5rem] p-6 z-20 flex flex-col justify-between overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-electric)]/10 to-transparent pointer-events-none" />
              <div className="w-14 h-14 bg-[var(--color-card)] rounded-2xl flex items-center justify-center text-[var(--color-electric)] shadow-lg relative z-10">
                <Code2 size={28} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black font-outfit text-[var(--color-text-main)]">Scalable Architecture</h3>
                <p className="text-sm text-[var(--color-text-main)] opacity-60 mt-2">Built with Next.js 15 & React</p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--color-electric)]/20 blur-3xl rounded-full group-hover:bg-[var(--color-electric)]/40 transition-colors duration-700" />
            </motion.div>

            {/* Floating Element 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute top-[15%] right-[10%] w-48 glass-card-premium rounded-[2rem] p-4 z-30 animate-float"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#10B981]/10 rounded-full flex items-center justify-center text-[#10B981]">
                  <Rocket size={20} />
                </div>
                <div>
                  <div className="text-lg font-black text-[var(--color-text-main)]">99.9%</div>
                  <div className="text-[10px] uppercase font-bold text-[var(--color-text-main)] opacity-50">Uptime</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Element 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute bottom-[20%] left-[5%] w-56 glass-card-premium rounded-[2rem] p-4 z-10 animate-float"
              style={{ animationDelay: '2s' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center text-[var(--color-accent)]">
                  <Globe size={20} />
                </div>
                <div>
                  <div className="text-lg font-black text-[var(--color-text-main)]">Global Reach</div>
                  <div className="text-[10px] uppercase font-bold text-[var(--color-text-main)] opacity-50">SEO Optimized</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
