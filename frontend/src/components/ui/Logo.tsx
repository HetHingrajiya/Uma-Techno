import React from "react";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f9e29c" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#b8860b" />
          </linearGradient>
        </defs>
        <path
          d="M20 20C20 20 20 80 50 80C80 80 80 20 80 20"
          stroke="url(#goldGradient)"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M40 40C40 40 40 70 50 70C60 70 60 40 60 40"
          stroke="url(#goldGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        {/* Pixel effect on the right arm */}
        <rect x="75" y="10" width="8" height="8" fill="url(#goldGradient)" />
        <rect x="65" y="5" width="6" height="6" fill="url(#goldGradient)" opacity="0.8" />
        <rect x="85" y="20" width="5" height="5" fill="url(#goldGradient)" opacity="0.6" />
      </svg>
    </div>
  );
}
