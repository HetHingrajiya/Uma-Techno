import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
    url: "https://umatechno.com",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-navy text-white min-h-screen flex flex-col`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
