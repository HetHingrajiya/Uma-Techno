import { Target, Eye, Heart, Users, Award, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

/**
 * AboutPage Metadata:
 * Optimized for SEO with localized keywords for Rajkot and Gujarat.
 * Includes OpenGraph configuration for social sharing consistency.
 */
// // 
/**
 * coreValues:
 * Defines the company's guiding principles used in the values section.
 */
const values = [
  { name: "Innovation", icon: Target, description: "We push boundaries and explore new technologies." },
  { name: "Quality", icon: Award, description: "We never compromise on the quality of our code and design." },
  { name: "Transparency", icon: Eye, description: "We believe in honest and clear communication with our clients." },
  { name: "Passion", icon: Heart, description: "We love what we do and it shows in our work." },
  { name: "Collaboration", icon: Users, description: "We work as a team to achieve the best results." },
  { name: "Security", icon: Shield, description: "Your data and privacy are our top priorities." },
];

export default function AboutPage() {
  /**
   * breadcrumbLd:
   * JSON-LD Structured Data for search engines to understand the page hierarchy.
   */
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
    <div className="pt-32 pb-20 lg:pt-48 space-y-32 bg-[var(--color-background)] min-h-screen">
      {/* Inject Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      
      {/* Hero Section: Company Overview and Stats */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <Reveal direction="down">
            <h2 className="text-electric font-bold tracking-widest text-sm uppercase">About Uma Techno</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl lg:text-7xl font-bold font-outfit leading-tight">
              Crafting Digital <br />
              <span className="text-gradient">Masterpieces</span> Since 2026
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-[var(--color-text-main)] opacity-70 leading-relaxed">
              Uma Techno is a premier <span className="font-bold text-[var(--color-text-main)]">web development company, digital marketing company, and app development company in Rajkot</span>. We are dedicated to helping businesses navigate the complex digital landscape with high-end, scalable solutions.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="grid grid-cols-2 gap-8 pt-4">
               <div>
                  <p className="text-4xl font-bold font-outfit text-[var(--color-text-main)]">10+</p>
                  <p className="text-[var(--color-text-main)] opacity-60">Years of Experience</p>
               </div>
               <div>
                  <p className="text-4xl font-bold font-outfit text-[var(--color-text-main)]">200+</p>
                  <p className="text-[var(--color-text-main)] opacity-60">Projects Delivered</p>
               </div>
            </div>
          </Reveal>
        </div>
        <div className="relative group">
           <div className="aspect-square glass-card rounded-[3rem] overflow-hidden rotate-3 relative z-10 border border-white/5">
              <img 
                src="/images/about-agency.png" 
                alt="Digital Masterpiece - Uma Techno Rajkot Team"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-40" />
           </div>
           <div className="absolute inset-0 bg-electric/20 rounded-[3rem] -rotate-3 z-0 blur-3xl scale-90" />
        </div>
      </section>

      {/* Values Section: Core Principles Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-4xl font-bold font-outfit">Our Core Values</h3>
          <p className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto">
            The principles that guide us in every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <Reveal key={value.name} delay={idx * 0.1}>
              <div className="glass-card p-10 h-full rounded-[2.5rem] border-[var(--color-border)] hover:bg-[var(--color-navy-light)] hover:border-[var(--color-electric)]/30 transition-all">
                <div className="w-12 h-12 bg-[var(--color-electric)]/10 rounded-xl flex items-center justify-center text-[var(--color-electric)] mb-6">
                  <value.icon size={24} />
                </div>
                <h4 className="text-2xl font-bold font-outfit mb-4 text-[var(--color-text-main)]">{value.name}</h4>
                <p className="text-[var(--color-text-main)] opacity-70">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission & Vision: Long-term Strategic Focus */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
         <div className="glass-card p-12 rounded-[3rem] bg-gradient-to-br from-[var(--color-electric)]/10 to-transparent border-[var(--color-border)]">
            <h3 className="text-3xl font-bold font-outfit mb-6 text-[var(--color-text-main)]">Our Mission</h3>
            <p className="text-lg text-[var(--color-text-main)] opacity-80 leading-relaxed">
              To empower businesses by providing innovative and high-quality digital solutions that drive growth, 
              enhance efficiency, and deliver exceptional user experiences.
            </p>
         </div>
         <div className="glass-card p-12 rounded-[3rem] bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent border-[var(--color-border)]">
            <h3 className="text-3xl font-bold font-outfit mb-6 text-[var(--color-text-main)]">Our Vision</h3>
            <p className="text-lg text-[var(--color-text-main)] opacity-80 leading-relaxed">
              To be a global leader in digital transformation, recognized for our creative excellence, 
              technical expertise, and unwavering commitment to client success.
            </p>
         </div>
      </section>

      {/* Call to Action: Conversion Point */}
      <section className="max-w-7xl mx-auto px-6 text-center">
         <div className="space-y-8">
            <Reveal direction="up">
              <h2 className="text-4xl font-bold font-outfit text-[var(--color-text-main)]">Want to work with us?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[var(--color-text-main)] opacity-70 max-w-xl mx-auto">
                 We are always looking for new challenges and exciting projects. 
                 Let&apos;s build something great together.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                 <MagneticButton strength={0.3}>
                   <Link to="/contact" className="px-8 py-4 bg-[var(--color-electric)] text-white rounded-xl font-bold transition-all hover:brightness-110 shadow-[0_0_20px_var(--color-electric)] text-center w-full sm:w-auto inline-block">
                     Contact Us
                   </Link>
                 </MagneticButton>
                 <MagneticButton strength={0.2}>
                   <Link to="/careers" className="px-8 py-4 bg-transparent text-[var(--color-text-main)] rounded-xl font-bold border border-[var(--color-border)] hover:bg-[var(--color-navy-light)] transition-all text-center w-full sm:w-auto inline-block">
                     Join Our Team
                   </Link>
                 </MagneticButton>
              </div>
            </Reveal>
         </div>
      </section>
    </div>
  );
}

