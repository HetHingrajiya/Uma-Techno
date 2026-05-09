"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Send, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: -500, bottom: 0 }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 z-[900] md:hidden cursor-move"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-[var(--color-electric)] blur-xl opacity-30 rounded-full group-active:opacity-60 transition-opacity" />
            <Link
              href="/contact"
              className="relative bg-gradient-premium text-white px-6 py-4 rounded-full font-black text-sm flex items-center justify-center gap-3 shadow-2xl active:scale-95 transition-transform border border-white/20 uppercase tracking-widest whitespace-nowrap overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-active:animate-[shimmer_1s_infinite]" />
              <Send size={18} className="animate-pulse" />
              GET STARTED
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
