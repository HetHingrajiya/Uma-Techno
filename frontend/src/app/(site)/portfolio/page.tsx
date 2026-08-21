import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/data/content";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract unique categories from all portfolio items
  const allCategories = ["All", ...Array.from(new Set(portfolio.flatMap(p => p.categories)))];

  const filteredProjects = activeCategory === "All"
    ? portfolio
    : portfolio.filter(p => p.categories.includes(activeCategory));

  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center space-y-6 mb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[var(--color-electric)]/40 bg-[var(--color-electric)]/10 text-[var(--color-electric)] text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md neo-glow"
          >
            OUR WORK
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black font-outfit text-white tracking-tighter leading-tight"
          >
            Proof of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-accent)] animate-pulse">Execution.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto text-lg font-medium"
          >
            Explore our curated selection of digital products, case studies, and engineered solutions.
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 relative z-10">
          {allCategories.map((cat, i) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-2xl font-bold text-sm transition-all border ${
                  isActive
                    ? "bg-[var(--color-electric)]/20 border-[var(--color-electric)] text-[var(--color-electric)] shadow-[0_0_15px_var(--color-blue-glow)]"
                    : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                key={project.slug}
                className="glass-card group overflow-hidden rounded-[3rem] border border-[var(--color-border)] flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-navy-light)]">
                  <img
                    src={project.images.cover}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                  
                  {/* Category Pills */}
                  <div className="absolute top-8 left-8 flex flex-wrap gap-2">
                    {project.categories.slice(0, 2).map(cat => (
                      <span key={cat} className="px-4 py-1.5 bg-black/50 backdrop-blur-md text-white border border-white/10 text-xs font-bold rounded-full">
                        {cat}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/portfolio/${project.slug}`}
                    className="absolute top-8 right-8 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl hover:scale-110"
                  >
                    <ArrowUpRight size={24} />
                  </Link>
                </div>

                <div className="p-10 lg:p-12 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h4 className="text-3xl font-black font-outfit text-white group-hover:text-[var(--color-electric)] transition-colors break-words">
                      {project.title}
                    </h4>
                    <p className="text-[var(--color-text-main)] opacity-70 text-base leading-relaxed font-medium">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="text-xs font-black tracking-widest uppercase text-white/40">
                        {tech} {tech !== project.technologies.slice(0, 3)[project.technologies.slice(0, 3).length -1] && "•"}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-[var(--color-text-main)] opacity-50 py-20 font-medium">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
}

