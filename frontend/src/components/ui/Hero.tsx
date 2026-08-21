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
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-16 bg-transparent">
      
      {/* Background elements are now handled globally in SiteLayout for Aurora */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[var(--color-electric)]/40 bg-[var(--color-electric)]/10 text-[var(--color-electric)] text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md neo-glow"
                >
                  <Zap size={14} className="animate-pulse" /> ENGINEERING THE FUTURE
                </motion.div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-outfit leading-[1.0] tracking-tighter text-[var(--color-text-main)]">
                  <span className="block mb-2">Digital</span>
                  <span className="block h-[1.1em] relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentWord}
                        initial={{ y: 80, opacity: 0, rotateX: -90 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        exit={{ y: -80, opacity: 0, rotateX: 90 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] via-[var(--color-accent)] to-[var(--color-electric)] bg-[length:200%_auto] animate-text-shine"
                        style={{ transformOrigin: 'center bottom' }}
                      >
                        {rotatingWords[currentWord]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                  <span className="block">Delivered.</span>
                </h1>
              </div>

              <div className="max-w-lg space-y-10 mt-10">
                <p className="text-lg lg:text-xl text-[var(--color-text-main)] opacity-70 leading-relaxed font-medium">
                  We engineer premium web applications, scalable architectures, and growth-driven digital experiences that dominate the market.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 pt-2">
                  <Link
                    to="/contact"
                    className="btn-primary-animated px-8 py-4 rounded-2xl font-bold text-lg text-center flex justify-center items-center gap-2"
                  >
                    Start Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="btn-premium px-8 py-4 text-[var(--color-text-main)] rounded-2xl font-bold text-lg text-center"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
          </motion.div>

          {/* Right Column: 3D Float Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative hidden lg:flex justify-center items-center h-[600px] perspective-1000"
          >
            <div className="relative w-full h-full flex items-center justify-center animate-float-complex">
              <div className="absolute w-[80%] h-[80%] bg-gradient-to-br from-[var(--color-electric)]/20 to-[var(--color-accent)]/20 blur-3xl rounded-full mix-blend-screen" />
              
              <motion.div 
                whileHover={{ scale: 1.05, rotateY: 10, rotateX: 10 }}
                className="relative z-10 glass-card w-72 h-80 rounded-[2.5rem] border border-white/10 flex flex-col justify-between p-8"
              >
                 <div className="w-12 h-12 rounded-full bg-[var(--color-electric)]/20 flex items-center justify-center text-[var(--color-electric)] neo-glow">
                   <Code size={24} />
                 </div>
                 <div>
                   <div className="text-3xl font-black font-outfit text-white mb-2">99.9%</div>
                   <div className="text-xs text-white/50 uppercase tracking-widest font-bold">Uptime Guaranteed</div>
                 </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, rotateY: -10, rotateX: 10 }}
                className="absolute z-20 -bottom-10 -left-10 glass-card w-64 h-48 rounded-[2rem] border border-white/10 flex flex-col justify-between p-6 bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent backdrop-blur-xl"
              >
                 <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] neo-glow">
                   <Globe size={20} />
                 </div>
                 <div>
                   <div className="text-2xl font-black font-outfit text-white mb-1">Global</div>
                   <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Scale Architecture</div>
                 </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute z-0 -top-10 -right-5 w-40 h-40 glass-card rounded-full border border-[var(--color-electric)]/20 flex items-center justify-center bg-transparent backdrop-blur-md"
              >
                <Database size={40} className="text-white/20" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

