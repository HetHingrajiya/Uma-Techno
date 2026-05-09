"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Filter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app';
        const res = await fetch(`${baseUrl}/api/v1/projects`);

        if (res.ok) {
          const data = await res.json();
          if (data.length > 0) {
            setProjects(data);
          } else {
            setProjects([
              { 
                title: "Premium Jewelry E-commerce", 
                category: "E-commerce", 
                description: "Luxury digital presence for a high-end jewelry showroom.", 
                featuredImage: "/images/project-1.png", 
                slug: "jewelry-ecommerce" 
              },
              { 
                title: "Healthcare Booking System", 
                category: "Web App", 
                description: "Automated real-time slot management for multi-location clinics.", 
                featuredImage: "/images/project-2.png", 
                slug: "booking-platform" 
              },
              { 
                title: "Corporate Fintech Dashboard", 
                category: "Software", 
                description: "Secure data visualization for enterprise financial tracking.", 
                featuredImage: "/images/project-3.png", 
                slug: "fintech-dashboard" 
              },
              { 
                title: "Global Real Estate Portal", 
                category: "Web App", 
                description: "Interactive property listing platform with map-based search.", 
                featuredImage: "/images/templates.png", 
                slug: "real-estate-portal" 
              },
              { 
                title: "Educational LMS Platform", 
                category: "Web App", 
                description: "Video-based learning management system with course progress tracking.", 
                featuredImage: "/images/project-1.png", 
                slug: "educational-lms" 
              },
              { 
                title: "Industrial CRM System", 
                category: "Software", 
                description: "Custom internal tool for managing manufacturing workflows.", 
                featuredImage: "/images/project-2.png", 
                slug: "industrial-crm" 
              }
            ]);
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[var(--background)] min-h-screen relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[var(--color-electric)]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/50 backdrop-blur-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-main)]">Our Portfolio</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black font-outfit text-[var(--color-text-main)] tracking-tighter">
            Work That <span className="text-gradient">Inspires</span>
          </h1>
          <p className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto text-lg font-medium">
            Explore our curated selection of recent projects, showcasing our expertise in delivering high-end digital solutions that drive business growth.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat as string)}
              className={`px-8 py-3 rounded-full font-black tracking-widest text-xs uppercase transition-all duration-300 border ${activeCategory === cat
                  ? "bg-[var(--color-electric)] border-[var(--color-electric)] text-white shadow-lg"
                  : "bg-[var(--color-card)]/50 backdrop-blur-md border-[var(--color-border)] text-[var(--color-text-main)] hover:border-[var(--color-electric)]/50"
                }`}
            >
              {cat as string}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
             <div className="w-10 h-10 border-4 border-[var(--color-electric)]/20 border-t-[var(--color-electric)] rounded-full animate-spin" />
             <div className="text-[var(--color-text-main)] font-bold tracking-widest uppercase text-xs">Loading Archive...</div>
          </div>
        ) : (
          <motion.div layout className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={project.slug || i}
                className="glass-card-premium group overflow-hidden flex flex-col bg-[var(--color-card)] rounded-[3rem] border border-[var(--color-border)] hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-navy-light)]">
                  <img
                    src={project.featuredImage || '/images/project-1.png'}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-8 left-8">
                    <span className="px-4 py-2 bg-[var(--color-card)]/90 backdrop-blur-md text-[var(--color-text-main)] border border-[var(--color-border)] text-xs font-black uppercase tracking-widest rounded-full shadow-xl">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 lg:p-12 space-y-4 flex-1 flex flex-col justify-between relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-electric)]/0 blur-2xl group-hover:bg-[var(--color-electric)]/10 transition-colors duration-700 pointer-events-none" />
                  
                  <div className="space-y-4 relative z-10">
                    <h4 className="text-3xl lg:text-4xl font-black font-outfit text-[var(--color-text-main)] tracking-tight leading-tight group-hover:text-[var(--color-electric)] transition-colors">{project.title}</h4>
                    <p className="text-[var(--color-text-main)] opacity-70 text-base leading-relaxed line-clamp-3">{project.description}</p>
                  </div>

                  <Link
                    href={`/portfolio/${project.slug || project.title.toLowerCase().replace(/ /g, '-')}`}
                    className="flex items-center gap-3 text-[var(--color-text-main)] font-black text-xs tracking-widest uppercase mt-8 group/link relative z-10 hover:text-[var(--color-electric)] transition-colors"
                  >
                    View Case Study <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform duration-500" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {!loading && filteredProjects.length === 0 && (
          <div className="text-center text-[var(--color-text-main)] opacity-50 py-20 font-bold uppercase tracking-widest text-sm">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
