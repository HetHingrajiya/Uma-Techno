import React, { createContext, useContext } from 'react';

/**
 * ThemeSettings Interface:
 * Defines the structure of the static theme data.
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
  secondaryColor: "#0891B2",
  accentColor: "#8B5CF6", // Changed to purple
  textColor: "#F8FAFC",   // Changed to light for dark mode
  backgroundColor: "#030712", // Void black
  borderColor: "rgba(255, 255, 255, 0.05)",
  cardColor: "rgba(17, 24, 39, 0.6)",
  headerColor: "rgba(3, 7, 18, 0.8)",
  footerColor: "#000000",
  fontFamily: "Inter, Outfit, sans-serif",
  logoUrl: null,
  heroImageUrl: null,
  aboutImageUrl: null,
};

const ThemeContext = createContext<{ theme: ThemeSettings } | undefined>(undefined);

/**
 * ThemeProvider:
 * The root-level context provider that handles static CSS variable injection.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = defaultTheme;

  return (
    <ThemeContext.Provider value={{ theme }}>
      {/* 
          Static Style Injection:
          This block converts the theme state into global CSS variables.
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
                --font-sans: ${theme.fontFamily || "'Inter', 'Outfit', sans-serif"};
                --font-outfit: ${theme.fontFamily || "'Outfit', sans-serif"};
                
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
