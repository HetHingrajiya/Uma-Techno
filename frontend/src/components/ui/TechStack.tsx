import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
];

export default function TechStack() {
  return (
    <section className="max-w-7xl mx-auto px-6 w-full py-20">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold font-outfit">Built with <span className="text-gradient">Modern Tech Stack</span></h2>
        <p className="text-gray-400">We use the most reliable and scalable technologies to power your business.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {technologies.map((tech, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group"
          >
            <div className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all">
              <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
            </div>
            <span className="text-sm font-bold text-gray-500 group-hover:text-white transition-colors">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
