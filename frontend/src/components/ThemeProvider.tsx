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
      if (e.key === 'theme-updated') {
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
          --color-navy: ${theme.headingColor};
          --color-navy-light: ${theme.cardColor};
          --color-text-main: ${theme.textColor};
          --color-border: ${theme.borderColor};
          --color-card: ${theme.cardColor};
          
          --font-sans: ${theme.fontFamily};
          --radius: ${theme.borderRadius};
          
          --background: ${theme.backgroundColor};
          --foreground: ${theme.textColor};
          
          --color-blue-glow: ${theme.blueGlowColor || 'rgba(6, 182, 212, 0.15)'};
          --color-glass: ${theme.glassBackgroundColor || 'rgba(255, 255, 255, 0.85)'};
          --scrollbar-thumb-color: ${theme.scrollbarThumbColor || '#06B6D4'};
          --scrollbar-track-color: ${theme.scrollbarTrackColor || '#f8fafc'};
        }
        body {
          background-color: var(--background);
          color: var(--foreground);
          font-family: var(--font-sans);
          transition: background-color 0.5s ease, color 0.5s ease;
        }
        * {
          transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
        }
      `}} />
      {children}
    </>
  );
}
