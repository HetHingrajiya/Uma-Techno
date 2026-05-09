"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import { useTheme } from "@/components/ThemeProvider";

/**
 * Hero Component:
 * The primary visual centerpiece of the landing page.
 * Features theme-aware background rendering and complex scroll/entrance animations.
 */
export default function Hero() {
  // Pulls the current theme (specifically heroImageUrl) from the global context
  const { theme } = useTheme();

  return (
    <section className="relative min-h-[600px] lg:min-h-[800px] 2xl:min-h-screen flex items-center overflow-hidden pt-8 lg:pt-24 pb-12 lg:pb-16 bg-[var(--background)]">
      
      {/* 
          Dynamic Background:
          If a custom hero image is uploaded via the Admin Panel, it is rendered here 
          with a subtle opacity and gradient mask to maintain text readability.
      */}
      {theme.heroImageUrl && (
        <div className="absolute inset-0 z-0">
          <Image 
            src={theme.heroImageUrl} 
            alt="Hero Background" 
            fill 
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)]" />
        </div>
      )}


      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          
          {/* 
              Left Column: Value Proposition & CTAs
              Uses Framer Motion for a smooth upward entrance animation.
          */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="space-y-10">

              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-black font-outfit leading-[1.1] tracking-tight text-[var(--color-text-main)]">
                <span className="block">Build Smart</span>
                <span className="block text-gradient">Digital Solutions</span>
                <span className="block">That Grow Businesses</span>
              </h1>

              <div className="max-w-lg space-y-8">
                <p className="text-lg lg:text-xl text-[var(--color-text-main)] opacity-70 leading-relaxed font-medium">
                  We create websites, mobile apps, branding, and custom systems that help companies scale faster.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="group relative px-8 py-4 text-white rounded-xl font-bold text-lg transition-all hover:scale-105 text-center flex justify-center items-center gap-2 bg-gradient-premium"
                  >
                    Get Free Quote <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="group px-8 py-4 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-text-main)] rounded-xl font-bold text-lg transition-all hover:bg-[var(--color-navy-light)] text-center shadow-sm"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 
              Right Column: Interactive Visual Element
              Displays a "floating" showcase card with glassmorphism effects and 
              dynamic performance badges.
          */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative perspective-2000 block mt-12 lg:mt-0"
          >
            <div className="animate-float-complex max-w-md mx-auto lg:max-w-none">
              <div className="bg-[var(--color-card)] rounded-[2.5rem] lg:rounded-[3rem] p-2 aspect-[4/5] lg:aspect-square relative overflow-hidden group border border-[var(--color-border)] shadow-2xl">
                 <Image 
                   src={theme.heroImageUrl ? `${theme.heroImageUrl}?t=${Date.now()}` : "/images/portfolio-showcase.png"} 
                   alt="Portfolio Showcase - Web Development Rajkot" 
                   fill
                   priority
                   className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/80 via-transparent to-transparent pointer-events-none" />
                 
                 {/* Glassmorphic Project Info Card */}
                 <div className="absolute bottom-6 left-6 right-6 z-10 bg-[var(--color-card)]/90 backdrop-blur-xl rounded-[var(--radius)] p-6 border border-white/10 shadow-xl">
                    <div className="flex justify-between items-start mb-4">
                       <div>
                         <h3 className="text-xl font-bold font-outfit text-[var(--color-text-main)]">Premium E-commerce</h3>
                         <p className="text-sm text-[var(--color-text-main)] opacity-60 font-medium">Conversion optimized storefront</p>
                       </div>
                       <div className="w-10 h-10 rounded-xl bg-[var(--color-electric)]/10 text-[var(--color-electric)] flex items-center justify-center">
                          <CheckCircle size={20} />
                       </div>
                    </div>
                    
                    <div className="flex gap-2">
                       <span className="px-3 py-1 bg-[var(--color-navy-light)] text-[var(--color-text-main)] text-xs font-bold rounded-full">Next.js 15</span>
                       <span className="px-3 py-1 bg-[var(--color-navy-light)] text-[var(--color-text-main)] text-xs font-bold rounded-full">Tailwind V4</span>
                    </div>
                 </div>
                 
                  {/* 
                      Floating Performance Badge:
                      Uses CSS animations to gently hover, adding depth to the UI.
                  */}
                  <div className="absolute top-8 right-[-20px] bg-[var(--color-card)] border border-[var(--color-border)] rounded-[var(--radius)] p-4 shadow-xl flex items-center gap-3 animate-float delay-500 hover:scale-105 transition-transform cursor-default">
                     <div className="w-10 h-10 bg-[#10B981]/10 rounded-full flex items-center justify-center text-[#10B981]">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                     </div>
                     <div>
                       <div className="text-lg font-black text-[var(--color-text-main)]">+340%</div>
                       <div className="text-[10px] uppercase font-bold text-[var(--color-text-main)] opacity-50">Conversion Lift</div>
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
