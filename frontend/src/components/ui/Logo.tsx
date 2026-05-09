"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";

/**
 * Logo Component:
 * The primary brand identifier.
 * Features a smart fallback system: if the dynamic logo fails to load, 
 * it renders a premium gold "U" icon to maintain brand integrity.
 */
export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  const { theme } = useTheme();
  const [error, setError] = useState(false);
  
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {!error ? (
        <Image
          src={theme.logoUrl || "/logo-v2.png"}
          alt="Uma Techno Logo"
          width={100}
          height={100}
          priority
          className="w-full h-full object-contain transition-opacity duration-300"
          onError={() => setError(true)}
        />
      ) : (
        /* Premium Fallback: Gold "U" icon matching the official brand identity */
        <div className="w-full h-full bg-gradient-to-br from-[var(--color-electric)] to-[var(--color-accent)] text-white rounded-2xl flex items-center justify-center font-black shadow-lg shadow-blue-500/20 text-xl lg:text-2xl animate-in fade-in zoom-in duration-500">
          U
        </div>
      )}
    </div>
  );
}
