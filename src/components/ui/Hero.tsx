import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HeroNetwork from "@/components/fx/HeroNetwork";
import MagneticButton from "@/components/fx/MagneticButton";
import TextReveal from "@/components/fx/TextReveal";

const rotatingWords = ["Excellence", "Innovation", "Experiences", "Solutions"];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[720px] lg:min-h-[860px] 2xl:min-h-screen flex items-center overflow-hidden pt-24 lg:pt-32 pb-16 lg:pb-24">

      {/* Aurora + mesh + grid backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="aurora" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-40 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]" />
        <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[1200px] h-[900px] bg-gradient-glow" />
      </div>

      {/* Full-bleed network canvas layer */}
      <div className="absolute inset-0 z-[1] opacity-70 mix-blend-screen pointer-events-auto">
        <HeroNetwork />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pointer-events-none">
        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Value Proposition & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-7 pointer-events-auto"
          >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-panel text-[var(--color-electric)] text-[11px] font-black uppercase tracking-[0.22em]"
                >
                  <Sparkles size={14} className="text-[var(--color-electric)]" />
                  Engineering the future
                </motion.div>
                <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-black font-outfit leading-[0.95] tracking-[-0.03em] text-[var(--color-text-main)]">
                  <TextReveal as="span" className="block">Digital</TextReveal>
                  <span className="block h-[1.05em] relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentWord}
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -80, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] via-[var(--color-accent)] to-[var(--color-violet)]"
                      >
                        {rotatingWords[currentWord]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                  <TextReveal as="span" className="block" delay={0.15}>Delivered.</TextReveal>
                </h1>
              </div>

              <div className="max-w-xl space-y-10 mt-10">
                <p className="text-lg lg:text-xl text-[var(--color-text-main)]/75 leading-relaxed font-medium">
                  We engineer premium web applications, scalable architectures, and growth-driven digital experiences that dominate the market.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 pt-2">
                  <MagneticButton strength={0.35}>
                    <Link
                      to="/contact"
                      data-cursor="button"
                      className="group relative overflow-hidden px-9 py-4 text-white rounded-2xl font-bold text-lg btn-premium-glow shine-border text-center flex justify-center items-center gap-3"
                    >
                      <span className="relative z-10">Start Project</span>
                      <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </MagneticButton>
                  <MagneticButton strength={0.25}>
                    <Link
                      to="/portfolio"
                      data-cursor="button"
                      className="group px-9 py-4 glass-panel text-[var(--color-text-main)] rounded-2xl font-bold text-lg transition-all hover:border-[var(--color-electric)]/60 text-center"
                    >
                      View Our Work
                    </Link>
                  </MagneticButton>
                </div>

                <div className="flex items-center gap-6 pt-4 text-xs uppercase tracking-[0.2em] text-white/40 font-bold">
                  <span>Trusted by</span>
                  <span className="h-px w-10 bg-white/20" />
                  <span>12+ Brands</span>
                  <span>·</span>
                  <span>Rajkot / Gujarat</span>
                </div>
              </div>
          </motion.div>

          {/* Right Column: Floating stat pods over the network canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-center h-[520px] lg:col-span-5 pointer-events-none"
          >
            <div className="relative w-full h-full">
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-4 glass-panel rounded-3xl p-5 min-w-[220px] pointer-events-auto"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.7)]" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 font-bold">Live systems</span>
                </div>
                <div className="mt-3 text-3xl font-black font-outfit">99.98<span className="text-[var(--color-electric)]">%</span></div>
                <div className="text-xs text-white/50 mt-1">Uptime across shipped products</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-2 glass-panel rounded-3xl p-5 min-w-[240px] pointer-events-auto"
              >
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/60 font-bold">Growth delivered</div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-black font-outfit text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-violet)]">3.4×</span>
                  <span className="text-xs text-white/50">avg. conv. lift</span>
                </div>
                <div className="mt-3 grid grid-cols-4 gap-1">
                  {[40, 65, 55, 88].map((h, i) => (
                    <div key={i} className="h-8 rounded bg-white/5 relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-electric)] to-[var(--color-violet)]" style={{ height: `${h}%` }} />
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-panel rounded-full w-40 h-40 flex flex-col items-center justify-center pointer-events-auto shine-border"
              >
                <div className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-bold">Since</div>
                <div className="text-5xl font-black font-outfit bg-clip-text text-transparent bg-gradient-to-br from-white to-white/60">2022</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

