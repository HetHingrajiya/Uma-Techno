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
  headingSize: string;
  bodyTextSize: string;
  borderRadius: string;
  containerWidth: string;
  sectionSpacing: string;
  buttonShape: string;
}

const defaultTheme: ThemeSettings = {
  primaryColor: "#06B6D4",
  secondaryColor: "#0EA5E9",
  accentColor: "#3B82F6",
  backgroundColor: "#FFFFFF",
  cardColor: "#F8FAFC",
  textColor: "#0F172A",
  headingColor: "#0F172A",
  borderColor: "#E2E8F0",
  fontFamily: "Inter, Outfit, sans-serif",
  headingSize: "base",
  bodyTextSize: "base",
  borderRadius: "0.75rem",
  containerWidth: "1280px",
  sectionSpacing: "4rem",
  buttonShape: "rounded-xl",
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeSettings>(defaultTheme);

  useEffect(() => {
    // Fetch theme from API
    const fetchTheme = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/theme`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.primaryColor) {
            setTheme(data);
          }
        }
      } catch (error) {
        console.error("Failed to fetch theme:", error);
      }
    };

    fetchTheme();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
          --color-electric: ${theme.primaryColor};
          --color-accent: ${theme.accentColor};
          --color-navy: ${theme.headingColor};
          --color-navy-light: ${theme.cardColor};
          --color-text-main: ${theme.textColor};
          --color-border: ${theme.borderColor};
          
          --font-sans: ${theme.fontFamily};
          --radius: ${theme.borderRadius};
          
          --background: ${theme.backgroundColor};
          --foreground: ${theme.textColor};
          
          --color-blue-glow: ${theme.primaryColor}26;
          --color-glass: rgba(255, 255, 255, 0.85);
        }
        body {
          background-color: var(--background);
          color: var(--foreground);
          font-family: var(--font-sans);
        }
      `}} />
      {children}
    </>
  );
}
