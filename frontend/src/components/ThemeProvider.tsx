"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

/**
 * Interface defining all configurable visual tokens for the application's theme system.
 * These are mapped to CSS variables in the DOM root.
 */
interface ThemeSettings {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  cardColor: string;
  textColor: string;
  headingColor: string;
  borderColor: string;
  headerColor: string;
  footerColor: string;
  fontFamily: string;
  borderRadius: string;
  blueGlowColor: string;
  glassBackgroundColor: string;
  scrollbarThumbColor: string;
  scrollbarTrackColor: string;
  logoUrl: string | null;
  heroImageUrl: string | null;
  aboutImageUrl: string | null;
}

// React Context to provide theme data to any component in the tree
const ThemeContext = createContext<{ theme: ThemeSettings } | undefined>(undefined);

// Fallback theme used during initial load or if the API is unavailable
const defaultTheme: ThemeSettings = {
  primaryColor: "#06B6D4",
  secondaryColor: "#0EA5E9",
  accentColor: "#3B82F6",
  backgroundColor: "#F8FAFC",
  cardColor: "#FFFFFF",
  textColor: "#0F172A",
  headingColor: "#0F172A",
  borderColor: "#E2E8F0",
  headerColor: "#FFFFFF",
  footerColor: "#0F172A",
  fontFamily: "Inter, Outfit, sans-serif",
  borderRadius: "1.25rem",
  blueGlowColor: "rgba(6, 182, 212, 0.1)",
  glassBackgroundColor: "rgba(255, 255, 255, 0.9)",
  scrollbarThumbColor: "#06B6D4",
  scrollbarTrackColor: "#F8FAFC",
  logoUrl: null,
  heroImageUrl: null,
  aboutImageUrl: null,
};

/**
 * Hook to access the current theme settings from any functional component.
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

/**
 * ThemeProvider component that manages global theme state, fetches updates from the backend,
 * and injects dynamic CSS variables into the document head.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeSettings>(defaultTheme);

  useEffect(() => {
    /**
     * Fetches the latest theme configuration from the API or local storage.
     * Prioritizes 'preview-theme' from local storage if it exists (used by Admin Panel).
     */
    const fetchTheme = async () => {
      try {
        // First check if there is a preview theme in localStorage (active during theme editing)
        const previewData = localStorage.getItem('preview-theme');
        if (previewData) {
          const p = JSON.parse(previewData);
          setTheme(prev => ({ 
            ...prev, 
            ...p,
            secondaryColor: p.secondaryColor || p.primaryColor,
            accentColor: p.accentColor || p.primaryColor,
            headerColor: p.headerColor || p.cardColor || "#FFFFFF",
            footerColor: p.footerColor || p.backgroundColor || "#0F172A"
          }));
          return;
        }

        // Fetch the production theme from the backend API
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/theme?t=${Date.now()}`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.primaryColor) {
            setTheme(prev => ({ 
              ...prev, 
              ...data,
              headerColor: data.headerColor || data.cardColor || prev.headerColor,
              footerColor: data.footerColor || data.backgroundColor || prev.footerColor
            }));
          }
        }
      } catch (error) {
        console.error("Failed to fetch theme:", error);
      }
    };

    fetchTheme();
    
    // Synchronize theme across different tabs/windows when localStorage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme-updated' || e.key === 'preview-theme') {
        fetchTheme();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    
    // Custom event listener for immediate updates within the same tab
    const handleCustomEvent = () => fetchTheme();
    window.addEventListener('theme-change', handleCustomEvent);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('theme-change', handleCustomEvent);
    };
  }, []);

  return (
    <>
      {/* 
          Global Style Injection:
          Converts the theme state into CSS custom properties (--var) applied to :root.
          This ensures that Tailwind and standard CSS can react to theme changes instantly.
      */}
      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
          --color-electric: ${theme.primaryColor};
          --color-secondary: ${theme.secondaryColor};
          --color-accent: ${theme.accentColor};
          --color-text-main: ${theme.textColor};
          --color-border: ${theme.borderColor};
          --color-card: ${theme.cardColor};
          --color-header: ${theme.headerColor};
          --color-footer: ${theme.footerColor};
          
          ${(() => {
            // Helper to convert hex colors to RGB strings for use in rgba() functions
            const hexToRgb = (hex: string) => {
              try {
                const h = hex.startsWith('#') ? hex : '#FFFFFF';
                const r = parseInt(h.slice(1, 3), 16);
                const g = parseInt(h.slice(3, 5), 16);
                const b = parseInt(h.slice(5, 7), 16);
                return `${r}, ${g}, ${b}`;
              } catch (e) { return "255, 255, 255"; }
            };
            return `
              --color-header-rgb: ${hexToRgb(theme.headerColor)};
              --color-footer-rgb: ${hexToRgb(theme.footerColor)};
            `;
          })()}
          
          --font-sans: ${theme.fontFamily};
          --radius: ${theme.borderRadius};
          
          --background: ${theme.backgroundColor};
          --foreground: ${theme.textColor};
          
          /* 
             Dynamic Semantic Colors:
             Calculates contrast and luminance to adjust functional colors (shadows, glass effects)
             automatically based on whether the background is light or dark.
          */
          ${(() => {
            const hexToRgb = (hex: string) => {
              const r = parseInt(hex.slice(1, 3), 16);
              const g = parseInt(hex.slice(3, 5), 16);
              const b = parseInt(hex.slice(5, 7), 16);
              return { r, g, b };
            };

            const getLuminance = (hex: string) => {
              try {
                const { r, g, b } = hexToRgb(hex);
                return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
              } catch (e) {
                return 1; // Default to light if invalid
              }
            };

            const bg = theme.backgroundColor || "#FFFFFF";
            const isDark = getLuminance(bg) < 0.5;
            
            if (isDark) {
              return `
                --color-navy: ${theme.backgroundColor};
                --color-navy-light: ${theme.cardColor};
                --color-glass: rgba(255, 255, 255, 0.05);
                --glass-border: rgba(255, 255, 255, 0.1);
                --shadow-color: rgba(0, 0, 0, 0.4);
                --shadow-glow: ${theme.primaryColor}25;
              `;
            } else {
              return `
                --color-navy: ${theme.cardColor};
                --color-navy-light: #FFFFFF;
                --color-glass: rgba(255, 255, 255, 0.8);
                --glass-border: rgba(15, 23, 42, 0.05);
                --shadow-color: rgba(15, 23, 42, 0.12);
                --shadow-glow: rgba(6, 182, 212, 0.2);
              `;
            }
          })()}

          --color-blue-glow: ${theme.blueGlowColor || 'rgba(6, 182, 212, 0.15)'};
          --scrollbar-thumb-color: ${theme.scrollbarThumbColor || '#06B6D4'};
          --scrollbar-track-color: ${theme.scrollbarTrackColor || '#f8fafc'};
        }
        body {
          background-color: var(--background);
          color: var(--foreground);
          font-family: var(--font-sans);
          transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        * {
          transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
        }
      `}} />
      <ThemeContext.Provider value={{ theme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}
