"use client";

import React, { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Web", "Mobile", "UI/UX", "Branding"];

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web",
    description: "A full-featured online store with real-time inventory and payments.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    link: "#"
  },
  {
    title: "Fitness Tracking App",
    category: "Mobile",
    description: "Cross-platform mobile app for tracking workouts and nutrition.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    link: "#"
  },
  {
    title: "Real Estate Dashboard",
    category: "Web",
    description: "Premium dashboard for property management and analytics.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    link: "#"
  },
  {
    title: "Crypto Wallet Design",
    category: "UI/UX",
    description: "Modern UI for a secure cryptocurrency wallet application.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
    link: "#"
  },
  {
    title: "Tech Brand Identity",
    category: "Branding",
    description: "Complete branding package for a Silicon Valley startup.",
    image: "https://images.unsplash.com/photo-1524143924101-723145464f1d?w=800&q=80",
    link: "#"
  },
  {
    title: "Healthcare Portal",
    category: "Web",
    description: "Secure patient portal with scheduling and records management.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    link: "#"
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="py-20 space-y-20">
      <section className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-electric font-bold tracking-widest text-sm uppercase">Our Portfolio</h2>
        <h1 className="text-5xl lg:text-7xl font-bold font-outfit">
          Showcasing Our <span className="text-gradient">Best Work</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We take pride in delivering high-quality digital products that 
          exceed expectations and drive results.
        </p>
      </section>

      {/* Filter */}
      <section className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3 rounded-full font-bold transition-all ${
              activeCategory === cat 
                ? "bg-electric text-white shadow-lg shadow-electric/20" 
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((project, i) => (
          <div key={i} className="group glass-card rounded-[2.5rem] overflow-hidden border-white/5 hover:border-electric/30 transition-all">
            <div className="aspect-[4/3] relative overflow-hidden">
               <img 
                 src={project.image} 
                 alt={project.title}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 bg-electric rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ExternalLink size={24} />
                  </div>
               </div>
               <div className="absolute top-6 left-6">
                  <span className="px-4 py-1 bg-electric text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
                    {project.category}
                  </span>
               </div>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-bold font-outfit">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              <Link href={project.link} className="inline-flex items-center gap-2 text-electric font-bold hover:underline group/link">
                View Project <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-6 text-center">
         <div className="bg-gradient-to-r from-electric/10 to-accent/10 border border-white/10 rounded-[3rem] p-12 lg:p-20">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Have a similar project in mind?</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
              We can help you build your next big thing. Let&apos;s talk about your ideas.
            </p>
            <Link href="/contact" className="px-10 py-5 bg-electric text-white rounded-2xl font-bold text-lg hover:bg-electric/90 transition-all shadow-xl shadow-electric/20">
              Start a Conversation
            </Link>
         </div>
      </section>
    </div>
  );
}
