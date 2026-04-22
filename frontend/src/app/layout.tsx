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
  metadataBase: new URL("https://uma-techno.vercel.app"),
  title: {
    default: "Uma Techno | Premium IT Solutions & Software Development",
    template: "%s | Uma Techno"
  },
  description: "Uma Techno is a leading IT company specializing in Web Development, Mobile Apps, UI/UX Design, and SEO Services. Transform your business with our digital solutions.",
  keywords: ["IT Company Rajkot", "Web Development India", "Mobile App Development", "UI/UX Design", "SEO Services", "Uma Techno"],
  authors: [{ name: "Uma Techno" }],
  creator: "Uma Techno",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uma-techno.vercel.app",
    title: "Uma Techno | Premium IT Solutions",
    description: "Transform your business with our cutting-edge digital solutions.",
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
    icon: "/icon.png",
    apple: "/icon.png",
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
