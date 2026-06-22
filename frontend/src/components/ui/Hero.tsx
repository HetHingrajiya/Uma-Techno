import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code, Zap, Globe } from "lucide-react";
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-electric)]/30 bg-[var(--color-electric)]/10 text-[var(--color-electric)] text-sm font-bold uppercase tracking-widest backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-electric)] animate-ping" />
                  Engineering the Future
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

          {/* Right Column: Abstract Interactive UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative hidden lg:block perspective-2000"
          >
            <div className="animate-float-complex relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Central Glass Orb */}
              <div className="absolute inset-10 bg-gradient-to-br from-[var(--color-electric)]/20 to-[var(--color-accent)]/20 rounded-full blur-3xl" />
              
              {/* Floating Cards */}
              <div className="absolute top-[10%] left-[10%] w-48 h-48 bg-[var(--color-card)]/80 backdrop-blur-2xl rounded-3xl border border-[var(--color-border)] shadow-2xl p-6 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500 z-20">
                <Code className="text-[var(--color-electric)] w-10 h-10" />
                <div>
                  <div className="text-2xl font-black text-[var(--color-text-main)]">Clean</div>
                  <div className="text-xs text-[var(--color-text-main)] opacity-50 uppercase tracking-widest font-bold">Architecture</div>
                </div>
              </div>
              
              <div className="absolute bottom-[20%] left-[0%] w-56 h-40 bg-[var(--color-card)]/80 backdrop-blur-2xl rounded-3xl border border-[var(--color-border)] shadow-2xl p-6 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500 z-30">
                <Zap className="text-[#F59E0B] w-10 h-10" />
                <div>
                  <div className="text-2xl font-black text-[var(--color-text-main)]">&lt; 100ms</div>
                  <div className="text-xs text-[var(--color-text-main)] opacity-50 uppercase tracking-widest font-bold">Response Time</div>
                </div>
              </div>

              <div className="absolute top-[30%] right-[5%] w-56 h-56 bg-[var(--color-card)]/80 backdrop-blur-2xl rounded-3xl border border-[var(--color-border)] shadow-2xl p-6 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500 z-10">
                <Globe className="text-[var(--color-accent)] w-12 h-12" />
                <div>
                  <div className="text-3xl font-black text-[var(--color-text-main)]">Global</div>
                  <div className="text-xs text-[var(--color-text-main)] opacity-50 uppercase tracking-widest font-bold">Edge Delivery</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

