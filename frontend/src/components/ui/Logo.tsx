import React from "react";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="premium-gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>
        </defs>
        
        <path 
          d="M25 20 
             C25 15 35 15 35 25 
             V65 
             C35 75 50 82 50 82 
             C50 82 65 75 65 65 
             V25 
             C65 15 75 15 75 20 
             V65 
             C75 85 50 92 50 92 
             C50 92 25 85 25 65 
             V20Z" 
          fill="url(#premium-gold-gradient)"
        />
        
        <path 
          d="M35 25 V65 C35 70 45 78 50 78 C55 78 65 70 65 65 V25" 
          stroke="white" 
          strokeWidth="1" 
          strokeLinecap="round" 
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
