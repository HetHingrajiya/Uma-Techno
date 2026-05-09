import { Target, Eye, Heart, Users, Award, Shield } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Uma Techno - Premium IT Agency in Rajkot",
  description: "Learn about Uma Techno, the leading digital agency in Rajkot, Gujarat. We are a team of experts dedicated to building masterpieces in web development and SEO.",
  alternates: {
    canonical: "https://umatechno.in/about",
  },
  openGraph: {
    title: "About Uma Techno | Premium Agency in Rajkot",
    description: "Learn about our mission, vision, and the team behind the most innovative digital agency in Gujarat.",
    images: ["/images/about.png"],
  },
};

const values = [
  { name: "Innovation", icon: Target, description: "We push boundaries and explore new technologies to deliver cutting-edge solutions." },
  { name: "Quality", icon: Award, description: "We never compromise on the quality of our code, design, and user experience." },
  { name: "Transparency", icon: Eye, description: "We believe in honest and clear communication with our clients at every step." },
  { name: "Passion", icon: Heart, description: "We love what we do and it shows in our dedication and final products." },
  { name: "Collaboration", icon: Users, description: "We work as an extension of your team to achieve the best possible results." },
  { name: "Security", icon: Shield, description: "Your data, privacy, and infrastructure security are our top priorities." },
];

export default function AboutPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://umatechno.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://umatechno.in/about"
      }
    ]
  };

  return (
    <div className="py-32 lg:py-40 space-y-32 bg-[var(--background)] overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-electric)]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] left-0 w-[600px] h-[600px] bg-[var(--color-accent)]/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/20 text-[var(--color-electric)] text-xs font-bold uppercase tracking-wider">
            About Uma Techno
          </div>
          <h1 className="text-5xl lg:text-7xl font-black font-outfit leading-tight text-[var(--color-text-main)] tracking-tighter">
            Crafting Digital <br />
            <span className="text-gradient relative">
              Masterpieces
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-[var(--color-electric)]/20 rounded-full" />
            </span> Since 2026
          </h1>
          <p className="text-lg lg:text-xl text-[var(--color-text-main)] opacity-70 leading-relaxed font-medium">
            Uma Techno is a premier digital agency dedicated to helping businesses navigate 
            the complex digital landscape. With a team of expert developers, creative designers, 
            and strategic thinkers, we transform ideas into powerful digital realities.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6 border-t border-[var(--color-border)]">
             <div>
                <p className="text-4xl lg:text-5xl font-black font-outfit text-[var(--color-text-main)] mb-1">10+</p>
                <p className="text-[var(--color-text-main)] opacity-60 font-bold uppercase tracking-widest text-xs">Years of Experience</p>
             </div>
             <div>
                <p className="text-4xl lg:text-5xl font-black font-outfit text-[var(--color-text-main)] mb-1">200+</p>
                <p className="text-[var(--color-text-main)] opacity-60 font-bold uppercase tracking-widest text-xs">Projects Delivered</p>
             </div>
          </div>
        </div>

        <div className="relative group">
           <div className="aspect-square glass-card-premium rounded-[3rem] p-4 rotate-3 group-hover:rotate-0 relative z-10 border border-[var(--glass-border)] shadow-2xl transition-all duration-700">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                <Image 
                  src="/images/about.png" 
                  alt="Digital Masterpiece - Uma Techno Rajkot Team" 
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[var(--color-navy)]/40 group-hover:bg-transparent transition-colors duration-700" />
              </div>
           </div>
           <div className="absolute inset-0 bg-[var(--color-electric)]/20 rounded-[3rem] -rotate-6 z-0 blur-2xl scale-95 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-100" />
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl lg:text-6xl font-black font-outfit text-[var(--color-text-main)] tracking-tighter">
            Our <span className="text-gradient">Core Values</span>
          </h2>
          <p className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto text-lg">
            The principles that guide us in every project we undertake, ensuring excellence and client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={value.name} className="glass-card-premium p-10 rounded-[2.5rem] group hover:-translate-y-2 transition-all duration-500 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-electric)]/5 blur-3xl -mr-10 -mt-10 group-hover:bg-[var(--color-electric)]/20 transition-colors duration-700" />
              <div className="w-14 h-14 bg-[var(--color-card)] rounded-2xl flex items-center justify-center text-[var(--color-electric)] mb-8 shadow-lg relative z-10 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                <value.icon size={28} />
              </div>
              <h4 className="text-2xl font-black font-outfit mb-4 text-[var(--color-text-main)] relative z-10">{value.name}</h4>
              <p className="text-[var(--color-text-main)] opacity-60 leading-relaxed relative z-10">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 relative z-10">
         <div className="glass-card-premium p-12 lg:p-16 rounded-[3rem] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-electric)]/10 to-transparent pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--color-electric)]/20 blur-[100px] rounded-full group-hover:bg-[var(--color-electric)]/40 transition-colors duration-700" />
            <h3 className="text-4xl font-black font-outfit mb-6 text-[var(--color-text-main)] relative z-10">Our Mission</h3>
            <p className="text-lg text-[var(--color-text-main)] opacity-70 leading-relaxed relative z-10">
              To empower businesses by providing innovative and high-quality digital solutions that drive growth, 
              enhance efficiency, and deliver exceptional user experiences. We build assets, not just code.
            </p>
         </div>
         <div className="glass-card-premium p-12 lg:p-16 rounded-[3rem] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--color-accent)]/20 blur-[100px] rounded-full group-hover:bg-[var(--color-accent)]/40 transition-colors duration-700" />
            <h3 className="text-4xl font-black font-outfit mb-6 text-[var(--color-text-main)] relative z-10">Our Vision</h3>
            <p className="text-lg text-[var(--color-text-main)] opacity-70 leading-relaxed relative z-10">
              To be a global leader in digital transformation, recognized for our creative excellence, 
              technical expertise, and unwavering commitment to client success. Setting new industry standards.
            </p>
         </div>
      </section>
    </div>
  );
}
