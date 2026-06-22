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
  
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {!error && theme.logoUrl ? (
        <img
          src={theme.logoUrl}
          alt="Uma Techno Logo"
          width={100}
          height={100} loading="eager"
          className="w-full h-full object-contain transition-opacity duration-300"
          onError={() => setError(true)}
        />
      ) : (
        /* Modern Minimalist Fallback SVG */
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
          <path d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z" stroke="url(#paint0_linear)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M50 25L75 39.5V60.5L50 75L25 60.5V39.5L50 25Z" fill="url(#paint1_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="50" y1="5" x2="50" y2="95" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--color-electric)"/>
              <stop offset="1" stopColor="var(--color-accent)"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="50" y1="25" x2="50" y2="75" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--color-accent)"/>
              <stop offset="1" stopColor="var(--color-electric)"/>
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
}

