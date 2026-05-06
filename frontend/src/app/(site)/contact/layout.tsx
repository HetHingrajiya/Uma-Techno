import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Consultation | Uma Techno Rajkot",
  description: "Contact Uma Techno for premium web development and SEO services in Rajkot. Get a free consultation and grow your business with our expert IT solutions.",
  alternates: {
    canonical: "https://umatechno.in/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
