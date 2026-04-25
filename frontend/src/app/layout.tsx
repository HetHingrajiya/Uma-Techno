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
    google: "y-google-verification-code-here", // Replace with actual code
  },
  title: {
    default: "Uma Techno | Website Development Company in Rajkot",
    template: "%s | Uma Techno"
  },
  description: "Uma Techno is a premium IT agency in Rajkot, Gujarat. We specialize in high-performance Web Development, Mobile Apps, and SEO strategies designed to grow businesses.",
  keywords: [
    "IT Company Rajkot", 
    "Web Development Gujarat", 
    "Mobile App Development Rajkot", 
    "SEO Agency India", 
    "Ecommerce Development India", 
    "Software Development Company", 
    "Uma Techno"
  ],
  authors: [{ name: "Uma Techno" }],
  creator: "Uma Techno",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umatechno.in",
    title: "Uma Techno | Premium IT Solutions in Rajkot",
    description: "Build premium websites and software that grow your business with Uma Techno.",
    siteName: "Uma Techno",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uma Techno | Premium IT Solutions",
    description: "Transform your business with our cutting-edge digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png?v=2",
    apple: "/icon.png?v=2",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
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
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/uma-techno",
      "https://www.instagram.com/uma.techno/"
    ]
  };

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
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans min-h-screen flex flex-col`} suppressHydrationWarning>
        <ThemeProvider>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
