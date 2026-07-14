import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <motion.a
      drag
      dragConstraints={{ left: -300, right: 0, top: -500, bottom: 0 }}
      href="https://wa.me/919274350728?text=Hi%20Uma%20Techno,%20I'm%20interested%20in%20your%20services." 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 lg:bottom-8 left-6 lg:left-auto lg:right-8 z-[999] bg-[#25D366] text-white p-3 lg:p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center animate-bounce-slight cursor-move"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="lg:hidden" />
      <MessageCircle size={28} className="hidden lg:block" />
      <span className="absolute -top-2 -right-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
      </span>
    </motion.a>
  );
}

