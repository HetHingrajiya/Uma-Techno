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

export const metadata: Metadata = {
  metadataBase: new URL("https://umatechno.in"),
  title: {
    default: "Uma Techno | Premium Web Development & Digital Marketing Agency Rajkot",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-navy text-white min-h-screen flex flex-col`} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
