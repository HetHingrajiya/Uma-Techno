import { motion } from "framer-motion";

const technologies = [
  "React 19", "Vite", "TypeScript", "Tailwind CSS", "Shadcn UI", 
  "Framer Motion", "GSAP", "Lenis", "Three.js", "Lottie", 
  "Spline", "React Router", "TanStack", "Zod", "Lucide"
];

export default function TechMarquee() {
  return (
    <section className="py-20 bg-[var(--color-navy)] overflow-hidden relative border-y border-[var(--color-border)]/50">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-navy)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-navy)] to-transparent z-10 pointer-events-none" />
      
      <div className="text-center mb-12 relative z-20">
        <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">
          Powered By Elite Technologies
        </h3>
      </div>

      <div className="flex w-max animate-marquee space-x-12 lg:space-x-24 items-center">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex space-x-12 lg:space-x-24 items-center">
            {technologies.map(tech => (
              <div 
                key={tech} 
                className="group flex flex-col items-center gap-3 transition-transform hover:scale-110"
              >
                <div className="text-xl lg:text-3xl font-black font-outfit text-white/20 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--color-electric)] group-hover:to-[var(--color-violet)] transition-all duration-300">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
