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
          className="fixed bottom-6 left-6 z-[998] md:hidden cursor-move"
        >
          <Link
            href="/contact"
            className="bg-[var(--color-electric)] text-white px-6 py-4 rounded-full font-black text-sm flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(var(--color-header-rgb),0.3)] active:scale-95 transition-all border border-white/20 uppercase tracking-widest whitespace-nowrap"
          >
            <Send size={18} />
            GET STARTED TODAY
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
