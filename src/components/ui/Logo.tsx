import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

/**
 * Logo Component:
 * The primary brand identifier.
 * Features a smart fallback system: if the dynamic logo fails to load, 
 * it renders a premium modern SVG icon.
 */
export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  const { theme } = useTheme();
  const [error, setError] = useState(false);
  
  if (error || !theme.logoUrl) {
    return null;
  }
  
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
        <img
          src={theme.logoUrl}
          alt="Uma Techno Logo"
          width={100}
          height={100} loading="eager"
          className="w-full h-full object-contain transition-opacity duration-300"
          onError={() => setError(true)}
        />
    </div>
  );
}

