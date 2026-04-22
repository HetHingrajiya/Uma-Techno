"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "919274350728";
  const message = "Hello Uma Techno! I'm interested in starting a project with you.";

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 left-8 z-50 group flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] transition-all hover:scale-105 active:scale-95"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={24} fill="currentColor" />
      <span className="font-bold tracking-wide">WhatsApp</span>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
    </button>
  );
}
