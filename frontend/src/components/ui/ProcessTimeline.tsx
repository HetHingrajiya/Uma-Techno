import { motion as fmotion } from 'framer-motion';
import { Lightbulb, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  { id: 1, title: 'Discovery & Strategy', icon: Lightbulb, description: 'We dive deep into your business goals, target audience, and market landscape to formulate a winning strategy.' },
  { id: 2, title: 'UI/UX Design', icon: PenTool, description: 'Our creative team crafts stunning, user-centric interfaces that align perfectly with your brand identity.' },
  { id: 3, title: 'Development', icon: Code2, description: 'We build robust, scalable, and high-performance solutions using cutting-edge technologies.' },
  { id: 4, title: 'Launch & Scale', icon: Rocket, description: 'Rigorous testing followed by a seamless deployment. We ensure your product is ready to dominate.' }
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-[var(--color-navy-light)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-electric)]/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-electric)]/30 bg-[var(--color-electric)]/10 text-[var(--color-electric)] text-sm font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[var(--color-electric)] animate-ping" />
            Our Process
          </div>
          <h2 className="text-4xl lg:text-6xl font-black font-outfit text-[var(--color-text-main)] tracking-tighter">
            From Idea To <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-accent)]">Impression.</span>
          </h2>
          <p className="text-[var(--color-text-main)] opacity-70 text-lg max-w-2xl mx-auto">
            A streamlined, transparent, and results-driven approach to bringing your digital vision to life.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[var(--color-electric)]/30 to-transparent" />

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <fmotion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number */}
                <div className="absolute -top-6 -left-4 text-8xl font-black text-[var(--color-electric)] opacity-5 group-hover:opacity-10 transition-opacity select-none font-serif">
                  {step.id}
                </div>

                {/* Icon Container */}
                <div className="w-24 h-24 rounded-3xl bg-[var(--color-card)] border border-[var(--color-border)] shadow-xl flex items-center justify-center text-[var(--color-electric)] mb-8 relative z-10 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-electric)]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />
                  <step.icon size={36} className="relative z-10 group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold font-outfit text-[var(--color-text-main)] mb-4">{step.title}</h3>
                <p className="text-[var(--color-text-main)] opacity-60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </fmotion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
