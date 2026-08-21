import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code, Zap, Globe, Cpu, Layers, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";
import { useState, useEffect } from "react";

const rotatingWords = ["Excellence", "Innovation", "Experiences", "Solutions"];

export default function Hero() {
  const { theme } = useTheme();
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[600px] lg:min-h-[800px] 2xl:min-h-screen flex items-center overflow-hidden pt-16 lg:pt-24 pb-12 lg:pb-16 bg-[var(--background)]">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[var(--color-electric)]/20 blur-[120px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-[var(--color-accent)]/20 blur-[150px] rounded-full mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        {/* Smoke Effect Particles */}
        <div className="absolute -bottom-20 left-1/4 w-64 h-64 bg-[var(--color-electric)]/20 blur-[80px] rounded-full animate-smoke" style={{ animationDelay: '0s' }} />
        <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-[var(--color-accent)]/20 blur-[100px] rounded-full animate-smoke" style={{ animationDelay: '3s' }} />
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-[var(--color-electric)]/20 blur-[90px] rounded-full animate-smoke" style={{ animationDelay: '6s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[var(--color-electric)]/40 bg-[var(--color-electric)]/10 text-[var(--color-electric)] text-sm font-black uppercase tracking-[0.15em] backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                  ENGINEERING THE FUTURE
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-outfit leading-[1.05] tracking-tighter text-[var(--color-text-main)]">
                  <span className="block">Digital</span>
                  <span className="block h-[1.2em] relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentWord}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-accent)]"
                      >
                        {rotatingWords[currentWord]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                  <span className="block">Delivered.</span>
                </h1>
              </div>

              <div className="max-w-lg space-y-8 mt-8">
                <p className="text-lg lg:text-xl text-[var(--color-text-main)] opacity-70 leading-relaxed font-medium">
                  We engineer premium web applications, scalable architectures, and growth-driven digital experiences that dominate the market.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    to="/contact"
                    className="group relative px-8 py-4 text-white rounded-2xl font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_var(--color-electric)] text-center flex justify-center items-center gap-2 bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-accent)]"
                  >
                    Start Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="group px-8 py-4 bg-[var(--color-card)]/50 backdrop-blur-md border border-[var(--color-border)] text-[var(--color-text-main)] rounded-2xl font-bold text-lg transition-all hover:bg-[var(--color-navy-light)] hover:border-[var(--color-electric)]/50 text-center"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
          </motion.div>

          {/* Right Column: Tech Orbit Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-center h-[500px]"
          >
            <div className="relative w-[400px] h-[400px] flex items-center justify-center">
              {/* Central Core */}
              <div className="absolute w-32 h-32 bg-gradient-to-br from-[var(--color-electric)] to-[var(--color-accent)] rounded-full blur-xl opacity-50 animate-pulse" />
              <div className="relative z-10 w-24 h-24 glass-card rounded-full flex items-center justify-center border-2 border-[var(--color-electric)]/50 shadow-[0_0_50px_rgba(6,182,212,0.5)]">
                <Cpu size={40} className="text-[var(--color-electric)]" />
              </div>

              {/* Orbiting Rings */}
              <div className="absolute w-full h-full border border-[var(--color-border)] rounded-full opacity-30" />
              <div className="absolute w-[250px] h-[250px] border border-[var(--color-electric)]/20 rounded-full border-dashed" />

              {/* Orbiting Nodes */}
              <div className="absolute inset-0 flex items-center justify-center animate-orbit">
                <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-[var(--color-text-main)] shadow-lg" style={{ animation: 'orbit 15s linear infinite reverse' }}>
                  <Code size={24} />
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center animate-orbit" style={{ animationDelay: '-5s' }}>
                <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-[#F59E0B] shadow-lg" style={{ animation: 'orbit 15s linear infinite reverse', animationDelay: '-5s' }}>
                  <Database size={24} />
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center animate-orbit" style={{ animationDelay: '-10s' }}>
                <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-[var(--color-electric)] shadow-lg" style={{ animation: 'orbit 15s linear infinite reverse', animationDelay: '-10s' }}>
                  <Layers size={24} />
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

