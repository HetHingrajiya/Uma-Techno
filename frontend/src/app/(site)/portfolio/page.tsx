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
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[var(--background)] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/20 text-[var(--color-electric)] text-xs font-bold uppercase tracking-wider">
            Our Portfolio
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold font-outfit text-[var(--color-text-main)]">
            Work That <span className="text-gradient">Inspires</span>
          </h1>
          <p className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto text-lg">
            Explore our curated selection of recent projects, showcasing our expertise in delivering high-end digital solutions that drive business growth.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat as string)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all border ${activeCategory === cat
                  ? "bg-[var(--color-electric)] border-[var(--color-electric)] text-white shadow-lg shadow-blue-500/25"
                  : "bg-[var(--color-card)] border-[var(--color-border)] text-[var(--color-text-main)] hover:border-[var(--color-electric)]"
                }`}
            >
              {cat as string}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center text-[var(--color-text-main)] opacity-50 py-20">Loading projects...</div>
        ) : (
          <motion.div layout className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={project.slug || i}
                className="card-premium group overflow-hidden flex flex-col bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-navy-light)]">
                  <img
                    src={project.featuredImage || '/images/project-1.png'}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-8 left-8">
                    <span className="px-4 py-2 bg-[var(--color-card)]/90 backdrop-blur-md text-[var(--color-electric)] border border-[var(--color-border)] text-xs font-black uppercase tracking-widest rounded-full shadow-xl">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 lg:p-12 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h4 className="text-3xl font-bold font-outfit text-[var(--color-text-main)] group-hover:text-[var(--color-electric)] transition-colors">{project.title}</h4>
                    <p className="text-[var(--color-text-main)] opacity-70 text-base leading-relaxed">{project.description}</p>
                  </div>

                  <Link
                    href={`/portfolio/${project.slug || project.title.toLowerCase().replace(/ /g, '-')}`}
                    className="flex items-center gap-2 text-[var(--color-electric)] font-bold text-sm tracking-widest uppercase mt-8 group/link"
                  >
                    View Case Study <ArrowRight size={20} className="group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {!loading && filteredProjects.length === 0 && (
          <div className="text-center text-[var(--color-text-main)] opacity-50 py-20">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
