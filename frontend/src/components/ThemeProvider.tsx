"use client";

import React, { useEffect, useState } from "react";

interface ThemeSettings {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  cardColor: string;
  textColor: string;
  headingColor: string;
  borderColor: string;
  fontFamily: string;
  borderRadius: string;
  blueGlowColor: string;
  glassBackgroundColor: string;
  scrollbarThumbColor: string;
  scrollbarTrackColor: string;
}

const defaultTheme: ThemeSettings = {
  primaryColor: "#06B6D4",
  secondaryColor: "#0EA5E9",
  accentColor: "#3B82F6",
  backgroundColor: "#F8FAFC",
  cardColor: "#FFFFFF",
  textColor: "#0F172A",
  headingColor: "#0F172A",
  borderColor: "#E2E8F0",
  fontFamily: "Inter, Outfit, sans-serif",
  borderRadius: "1.25rem",
  blueGlowColor: "rgba(6, 182, 212, 0.1)",
  glassBackgroundColor: "rgba(255, 255, 255, 0.9)",
  scrollbarThumbColor: "#06B6D4",
  scrollbarTrackColor: "#F8FAFC",
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeSettings>(defaultTheme);

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        // First check if there is a preview theme in localStorage
        const previewData = localStorage.getItem('preview-theme');
        if (previewData) {
          const p = JSON.parse(previewData);
          setTheme(prev => ({ 
            ...prev, 
            primaryColor: p.primaryColor,
            secondaryColor: p.secondaryColor || p.primaryColor,
            accentColor: p.accentColor || p.primaryColor,
            backgroundColor: p.backgroundColor,
            cardColor: p.cardColor,
            textColor: p.textColor,
            borderColor: p.borderColor,
            headingColor: p.textColor
          }));
          return;
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/theme`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.primaryColor) {
            setTheme(prev => ({ ...prev, ...data }));
          }
        }
      } catch (error) {
        console.error("Failed to fetch theme:", error);
      }
    };

    fetchTheme();
    
    // Listen for theme changes from other tabs/admin
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme-updated' || e.key === 'preview-theme') {
        fetchTheme();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
          --color-electric: ${theme.primaryColor};
          --color-secondary: ${theme.secondaryColor};
          --color-accent: ${theme.accentColor};
           --color-text-main: ${theme.textColor};
          --color-border: ${theme.borderColor};
          --color-card: ${theme.cardColor};
          --color-header: ${theme.headerColor || theme.cardColor};
          --color-footer: ${theme.footerColor || theme.backgroundColor};
          
          --font-sans: ${theme.fontFamily};
          --radius: ${theme.borderRadius};
          
          --background: ${theme.backgroundColor};
          --foreground: ${theme.textColor};
          
          /* Dynamic Semantic Colors */
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
                --color-navy: #0F172A;
                --color-navy-light: ${theme.backgroundColor};
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
      {children}
    </>
  );
}
