import React, { createContext, useContext } from "react";

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
  primaryColor: "#D4AF37",
  secondaryColor: "#B08D27",
  accentColor: "#F2D887",
  textColor: "#F8F7F2",
  backgroundColor: "#080807",
  borderColor: "rgba(255, 255, 255, 0.09)",
  cardColor: "rgba(20, 20, 16, 0.78)",
  headerColor: "rgba(9, 9, 8, 0.96)",
  footerColor: "#060605",
  fontFamily: "Inter, Outfit, sans-serif",
  logoUrl: null,
  heroImageUrl: null,
  aboutImageUrl: null,
};

const ThemeContext = createContext<{ theme: ThemeSettings } | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = defaultTheme;

  return (
    <ThemeContext.Provider value={{ theme }}>
      <style dangerouslySetInnerHTML={{
        __html: `
          :root {
            ${(() => {
              const hexToRgb = (hex: string) => {
                const value = hex.startsWith("#") ? hex : "#FFFFFF";
                const r = parseInt(value.slice(1, 3), 16);
                const g = parseInt(value.slice(3, 5), 16);
                const b = parseInt(value.slice(5, 7), 16);
                return `${r}, ${g}, ${b}`;
              };

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
                --color-glass: ${theme.cardColor};
                --color-blue-glow: rgba(212, 175, 55, 0.2);
                --color-purple-glow: rgba(212, 175, 55, 0.12);
                --glass-border: ${theme.borderColor};
                --color-header: ${theme.headerColor};
                --color-footer: ${theme.footerColor};
                --color-nav-text: ${theme.textColor};
                --color-footer-text: ${theme.textColor};
                --color-header-rgb: ${hexToRgb("#090908")};
                --color-footer-rgb: ${hexToRgb("#060605")};
                --font-sans: ${theme.fontFamily || "'Inter', 'Outfit', sans-serif"};
                --font-outfit: ${theme.fontFamily || "'Outfit', sans-serif"};
              `;
            })()}
          }
        `
      }} />
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
