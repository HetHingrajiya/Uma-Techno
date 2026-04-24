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
  primaryColor: "#3B82F6",
  secondaryColor: "#60A5FA",
  accentColor: "#10B981",
  backgroundColor: "#F8FAFC",
  cardColor: "#FFFFFF",
  textColor: "#0F172A",
  headingColor: "#1E293B",
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
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/v1/theme`);
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
          --color-navy: ${theme.backgroundColor};
          --color-navy-light: ${theme.cardColor};
          --color-text-main: ${theme.textColor};
          --color-border: ${theme.borderColor};
          
          --font-sans: ${theme.fontFamily};
          --radius: ${theme.borderRadius};
          
          --color-blue-glow: ${theme.primaryColor}26; /* 15% opacity */
          --color-glass: rgba(255, 255, 255, 0.02);
        }
        body {
          background-color: var(--color-navy);
          color: var(--color-text-main);
          font-family: var(--font-sans);
        }
      `}} />
      {children}
    </>
  );
}
