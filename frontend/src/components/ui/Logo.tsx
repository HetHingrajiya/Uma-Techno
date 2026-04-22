import React from "react";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Abstract "U" for Uma - Pixelated/Modern style */}
        <path 
          d="M30 20 V60 C30 70 40 80 50 80 C60 80 70 70 70 60 V20 H60 V60 C60 65 55 70 50 70 C45 70 40 65 40 60 V20 H30Z" 
          fill="url(#logoGradient)"
          filter="url(#glow)"
        />
        
        {/* Tech Accents - Horizontal Bars */}
        <rect x="25" y="25" width="10" height="4" fill="#0ea5e9" opacity="0.8" />
        <rect x="65" y="35" width="10" height="4" fill="#22d3ee" opacity="0.8" />
        <rect x="25" y="45" width="6" height="4" fill="#0ea5e9" opacity="0.6" />
      </svg>
    </div>
  );
}
