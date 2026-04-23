import React from "react";

export default function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="Uma Techno Logo" 
        className="h-full w-auto object-contain"
      />
    </div>
  );
}
