"use client";

import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";
import { useState, useEffect } from "react";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  const { theme, cacheBuster } = useTheme();
  const [imgError, setImgError] = useState(false);

  // Reset error when theme changes
  useEffect(() => {
    setImgError(false);
  }, [theme.logoUrl]);
  
  const logoSrc = (theme.logoUrl && !imgError) 
    ? `${theme.logoUrl}?v=${cacheBuster}` 
    : "/logo.png";

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <img
        src={logoSrc}
        alt="Uma Techno Logo - Web Development Agency"
        className="w-full h-full object-contain"
        onError={() => setImgError(true)}
      />
    </div>
  );
}
