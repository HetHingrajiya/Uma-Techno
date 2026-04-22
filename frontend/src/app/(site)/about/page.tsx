import React from "react";
import { Target, Eye, Heart, Users, Award, Shield } from "lucide-react";
import Link from "next/link";

const values = [
  { name: "Innovation", icon: Target, description: "We push boundaries and explore new technologies." },
  { name: "Quality", icon: Award, description: "We never compromise on the quality of our code and design." },
  { name: "Transparency", icon: Eye, description: "We believe in honest and clear communication with our clients." },
  { name: "Passion", icon: Heart, description: "We love what we do and it shows in our work." },
  { name: "Collaboration", icon: Users, description: "We work as a team to achieve the best results." },
  { name: "Security", icon: Shield, description: "Your data and privacy are our top priorities." },
];

export default function AboutPage() {
  return (
    <div className="py-20 space-y-32">
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-electric font-bold tracking-widest text-sm uppercase">About Uma Techno</h2>
          <h1 className="text-5xl lg:text-7xl font-bold font-outfit leading-tight">
            Crafting Digital <br />
            <span className="text-gradient">Masterpieces</span> Since 2015
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Uma Techno is a premier digital agency dedicated to helping businesses navigate 
            the complex digital landscape. With a team of expert developers, creative designers, 
            and strategic thinkers, we transform ideas into powerful digital realities.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
             <div>
                <p className="text-4xl font-bold font-outfit text-white">10+</p>
                <p className="text-gray-500">Years of Experience</p>
             </div>
             <div>
                <p className="text-4xl font-bold font-outfit text-white">200+</p>
                <p className="text-gray-500">Projects Delivered</p>
             </div>
          </div>
        </div>
        <div className="relative">
           <div className="aspect-square glass-card rounded-[3rem] overflow-hidden rotate-3 relative z-10 p-4">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                alt="Our Team"
                className="w-full h-full object-cover rounded-[2rem]"
              />
           </div>
           <div className="absolute inset-0 bg-electric/20 rounded-[3rem] -rotate-3 z-0 blur-3xl scale-90" />
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-4xl font-bold font-outfit">Our Core Values</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The principles that guide us in every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.name} className="glass-card p-10 rounded-[2.5rem] border-white/5 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center text-electric mb-6">
                <value.icon size={24} />
              </div>
              <h4 className="text-2xl font-bold font-outfit mb-4">{value.name}</h4>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Vision */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
         <div className="glass-card p-12 rounded-[3rem] bg-gradient-to-br from-electric/10 to-transparent border-white/5">
            <h3 className="text-3xl font-bold font-outfit mb-6">Our Mission</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              To empower businesses by providing innovative and high-quality digital solutions that drive growth, 
              enhance efficiency, and deliver exceptional user experiences.
            </p>
         </div>
         <div className="glass-card p-12 rounded-[3rem] bg-gradient-to-br from-accent/10 to-transparent border-white/5">
            <h3 className="text-3xl font-bold font-outfit mb-6">Our Vision</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              To be a global leader in digital transformation, recognized for our creative excellence, 
              technical expertise, and unwavering commitment to client success.
            </p>
         </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 text-center">
         <div className="space-y-8">
            <h2 className="text-4xl font-bold font-outfit">Want to work with us?</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
               We are always looking for new challenges and exciting projects. 
               Let&apos;s build something great together.
            </p>
            <div className="flex justify-center gap-4">
               <Link href="/contact" className="px-8 py-4 bg-electric text-white rounded-xl font-bold transition-all hover:scale-105">
                 Contact Us
               </Link>
               <Link href="/careers" className="px-8 py-4 bg-white/5 text-white rounded-xl font-bold border border-white/10 hover:bg-white/10 transition-all">
                 Join Our Team
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
