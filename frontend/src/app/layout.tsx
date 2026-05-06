import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  metadataBase: new URL("https://umatechno.in"),
  verification: {
    google: "y-google-verification-code-here",
  },
  title: {
    default: "Uma Techno | Web Development & SEO Company in Rajkot",
    template: "%s | Uma Techno"
  },
  description: "Uma Techno is the top-rated Web Development and SEO agency in Rajkot, Gujarat. We build high-performance websites and digital strategies to scale your business.",
  keywords: [
    "Web Development Company in Rajkot", 
    "SEO Services in Rajkot", 
    "Digital Marketing Agency Rajkot", 
    "Website Design Gujarat", 
    "IT Company Rajkot", 
    "E-commerce Development India", 
    "Uma Techno"
  ],
  authors: [{ name: "Uma Techno" }],
  creator: "Uma Techno",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umatechno.in",
    title: "Uma Techno | Premium IT & SEO Solutions in Rajkot",
    description: "Empower your business with high-performance web development and SEO strategies from Uma Techno.",
    siteName: "Uma Techno",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uma Techno | Premium Web & SEO Solutions",
    description: "Transform your business with our cutting-edge digital solutions in Rajkot.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://umatechno.in",
  },
  icons: {
    icon: "/icon.png?v=2",
    apple: "/icon.png?v=2",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import VisitTracker from "@/components/utils/VisitTracker";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Uma Techno",
      "image": "https://umatechno.in/icon.png",
      "url": "https://umatechno.in",
      "telephone": "+91 92743 50728",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mavdi Main Road",
        "addressLocality": "Rajkot",
        "addressRegion": "Gujarat",
        "postalCode": "360004",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 22.2746,
        "longitude": 70.7836
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      },
      "sameAs": [
        "https://www.linkedin.com/company/uma-techno",
        "https://www.instagram.com/uma.techno/"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Uma Techno",
      "url": "https://umatechno.in",
      "logo": "https://umatechno.in/icon.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 92743 50728",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": "en"
      }
    }
  ];

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} // Replace with actual ID
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const palette = JSON.parse(localStorage.getItem('active-palette'));
                  if (palette) {
                    const root = document.documentElement;
                    const primary = palette.primaryColor;
                    
                    root.style.setProperty('--color-electric', primary);
                    root.style.setProperty('--color-secondary', palette.secondaryColor || primary);
                    root.style.setProperty('--color-accent', palette.accentColor || primary);
                    root.style.setProperty('--color-text-main', palette.textColor);
                    root.style.setProperty('--foreground', palette.textColor);
                    root.style.setProperty('--background', palette.backgroundColor);
                    root.style.setProperty('--color-card', palette.cardColor);
                    root.style.setProperty('--color-border', palette.borderColor);
                    root.style.setProperty('--color-header', palette.headerColor || palette.cardColor);
                    root.style.setProperty('--color-footer', palette.footerColor || palette.backgroundColor);
                    root.style.setProperty('--color-blue-glow', primary + '25');
                    
                    const hexToRgbStr = (hex) => {
                      try {
                        const h = hex.startsWith('#') ? hex : '#FFFFFF';
                        const r = parseInt(h.slice(1, 3), 16);
                        const g = parseInt(h.slice(3, 5), 16);
                        const b = parseInt(h.slice(5, 7), 16);
                        return r + ", " + g + ", " + b;
                      } catch (e) { return "255, 255, 255"; }
                    };

                    root.style.setProperty('--color-header-rgb', hexToRgbStr(palette.headerColor || palette.cardColor || "#FFFFFF"));
                    root.style.setProperty('--color-footer-rgb', hexToRgbStr(palette.footerColor || palette.backgroundColor || "#0F172A"));

                    const hexToRgb = (hex) => {
                      const r = parseInt(hex.slice(1, 3), 16);
                      const g = parseInt(hex.slice(3, 5), 16);
                      const b = parseInt(hex.slice(5, 7), 16);
                      return { r, g, b };
                    };
                    const getLum = (hex) => {
                      try {
                        const rgb = hexToRgb(hex);
                        return (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
                      } catch (e) { return 1; }
                    };

                    const isDark = getLum(palette.backgroundColor) < 0.5;

                    if (isDark) {
                      root.style.setProperty('--color-navy', palette.backgroundColor);
                      root.style.setProperty('--color-navy-light', palette.cardColor);
                      root.style.setProperty('--color-glass', 'rgba(255, 255, 255, 0.05)');
                      root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.1)');
                      root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.4)');
                      root.style.setProperty('--shadow-glow', primary + '25');
                    } else {
                      root.style.setProperty('--color-navy', '#0F172A');
                      root.style.setProperty('--color-navy-light', palette.backgroundColor);
                      root.style.setProperty('--color-glass', 'rgba(255, 255, 255, 0.8)');
                      root.style.setProperty('--glass-border', 'rgba(15, 23, 42, 0.05)');
                      root.style.setProperty('--shadow-color', 'rgba(15, 23, 42, 0.12)');
                      root.style.setProperty('--shadow-glow', 'rgba(6, 182, 212, 0.2)');
                    }
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans min-h-screen flex flex-col`} suppressHydrationWarning>
        <ThemeProvider>
          <VisitTracker />
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
