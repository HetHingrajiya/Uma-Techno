import React, { createContext, useContext, useEffect, useState } from 'react';

/**
 * ThemeSettings Interface:
 * Defines the structure of the dynamic theme data.
 * These properties are controlled via the Admin Panel and stored in the DB.
 */
interface ThemeSettings {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  cardColor: string;
  headerColor: string;
  footerColor: string;
  fontFamily: string;
  logoUrl: string | null;
  heroImageUrl: string | null;
  aboutImageUrl: string | null;
}

const defaultTheme: ThemeSettings = {
  primaryColor: "#06B6D4",
  secondaryColor: "#3B82F6",
  accentColor: "#F43F5E",
  textColor: "#0F172A",
  backgroundColor: "#FFFFFF",
  borderColor: "#E2E8F0",
  cardColor: "#F8FAFC",
  headerColor: "#FFFFFF",
  footerColor: "#0F172A",
  fontFamily: "Inter, Outfit, sans-serif",
  logoUrl: null,
  heroImageUrl: null,
  aboutImageUrl: null,
};

const ThemeContext = createContext<{ theme: ThemeSettings } | undefined>(undefined);

/**
 * ThemeProvider:
 * The root-level context provider that handles dynamic CSS variable injection.
 * It fetches the current brand settings from the backend and updates the site's :root variables.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeSettings>(defaultTheme);

  useEffect(() => {
    /**
     * Theme Synchronizer:
     * Pulls the latest visual tokens from the API or local storage (for live preview).
     */
    const fetchTheme = async () => {
      try {
        // Check for preview data first (used in Admin Theme Editor)
        const previewData = localStorage.getItem('preview-theme');
        if (previewData) {
          try {
            const p = JSON.parse(previewData);
            setTheme(p);
            return;
          } catch (e) {
            console.error("Invalid preview theme data");
          }
        }

        const baseUrl = import.meta.env.VITE_API_URL || 'https://uma-techno-phrb.vercel.app';
        const res = await fetch(`${baseUrl}/api/v1/theme?t=${Date.now()}`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.primaryColor) {
            setTheme({
              ...defaultTheme,
              ...data,
            });
          }
        }
      } catch (error) {
        console.error("Failed to fetch theme:", error);
      }
    };

    fetchTheme();

    // Listen for storage events (allows live updates across tabs in the admin panel)
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'preview-theme' && e.newValue) {
        setTheme(JSON.parse(e.newValue));
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {/* 
          Dynamic Style Injection:
          This block converts the theme state into global CSS variables.
          We use dangerouslySetInnerHTML to inject these directly into :root
          for maximum performance and compatibility with Tailwind's var() syntax.
      */}
      <style dangerouslySetInnerHTML={{
        __html: `
          :root {
            ${(() => {
              const hexToRgb = (hex: string) => {
                try {
                  const h = hex.startsWith('#') ? hex : '#FFFFFF';
                  const r = parseInt(h.slice(1, 3), 16);
                  const g = parseInt(h.slice(3, 5), 16);
                  const b = parseInt(h.slice(5, 7), 16);
                  return `${r}, ${g}, ${b}`;
                } catch (e) { return "255, 255, 255"; }
              };

              const getLuminance = (hex: string) => {
                try {
                  const h = hex.startsWith('#') ? hex : '#FFFFFF';
                  const r = parseInt(h.slice(1, 3), 16);
                  const g = parseInt(h.slice(3, 5), 16);
                  const b = parseInt(h.slice(5, 7), 16);
                  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                } catch (e) { return 1; }
              };

              const bg = theme.backgroundColor || "#FFFFFF";
              const isMainDark = getLuminance(bg) < 0.5;

              // INVERSION LOGIC: 
              // If main site is DARK, Navbar/Footer should be LIGHT.
              // If main site is LIGHT, Navbar/Footer should be DARK.
              const navBg = isMainDark ? "#FFFFFF" : "#0F172A";
              const footerBg = isMainDark ? "#F8FAFC" : "#0F172A";
              
              const navText = isMainDark ? "#0F172A" : "#FFFFFF";
              const footerText = isMainDark ? "#0F172A" : "#FFFFFF";

              return `
                --color-electric: ${theme.primaryColor};
                --color-secondary: ${theme.secondaryColor};
                --color-accent: ${theme.accentColor};
                --color-text-main: ${theme.textColor};
                --color-background: ${theme.backgroundColor};
                --background: ${theme.backgroundColor};
                --foreground: ${theme.textColor};
                --color-border: ${theme.borderColor};
                --color-card: ${theme.cardColor};
                --font-sans: ${theme.fontFamily};
                
                --color-header: ${navBg};
                --color-footer: ${footerBg};
                --color-nav-text: ${navText};
                --color-footer-text: ${footerText};
                --color-header-rgb: ${hexToRgb(navBg)};
                --color-footer-rgb: ${hexToRgb(footerBg)};
              `;
            })()}
          }
        `
      }} />
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * useTheme Hook:
 * Safe access to the current theme tokens from any component.
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
