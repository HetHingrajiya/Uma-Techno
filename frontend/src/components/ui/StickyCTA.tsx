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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[998] md:hidden p-4 bg-gradient-to-t from-[var(--background)] to-transparent"
        >
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="flex-1 bg-[var(--color-electric)] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-all"
            >
              <Send size={20} />
              GET FREE AUDIT
            </Link>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] px-4 rounded-2xl flex flex-col items-center justify-center shadow-lg">
              <div className="flex gap-0.5 text-yellow-500">
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
              </div>
              <span className="text-[10px] font-bold opacity-50 uppercase tracking-tighter">4.9/5 Trust</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
