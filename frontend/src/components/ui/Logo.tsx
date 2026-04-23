import React from "react";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-lg">
        <defs>
          <linearGradient id="gold-primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="20%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="80%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
          <linearGradient id="gold-shine" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.8" />
            <stop offset="50%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gold-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#92400E" />
            <stop offset="100%" stopColor="#451A03" />
          </linearGradient>
        </defs>
        
        {/* Base 3D Body */}
        <path 
          d="M20 20 C20 10 32 10 32 25 V65 C32 75 42 82 50 82 C58 82 68 75 68 65 V25 C68 10 80 10 80 20 V65 C80 90 20 90 20 65 V20Z" 
          fill="url(#gold-primary)"
        />
        
        {/* Inner Curve Shadow for Depth */}
        <path 
          d="M32 25 V65 C32 75 42 82 50 82 C58 82 68 75 68 65 V25 L72 28 V65 C72 80 50 88 50 88 C50 88 28 80 28 65 V28 L32 25Z" 
          fill="url(#gold-dark)" 
          opacity="0.4"
        />
        
        {/* Sharp Top Flares */}
        <path d="M20 20 L25 10 L32 25 Z" fill="#FDE68A" />
        <path d="M80 20 L75 10 L68 25 Z" fill="#FDE68A" />
        
        {/* Glossy Reflection Overlay */}
        <path 
          d="M20 20 C20 10 32 10 32 25 V40 L20 35 V20Z" 
          fill="url(#gold-shine)" 
          opacity="0.3"
        />
        <path 
          d="M80 20 C80 10 68 10 68 25 V40 L80 35 V20Z" 
          fill="url(#gold-shine)" 
          opacity="0.3"
        />
        
        {/* Bottom Curve Highlight */}
        <path 
          d="M30 75 C40 85 60 85 70 75" 
          stroke="white" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          opacity="0.4"
        />
      </svg>
    </div>
  );
}
