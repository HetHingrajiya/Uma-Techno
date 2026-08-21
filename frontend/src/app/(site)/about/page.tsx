import { Target, Eye, Heart, Users, Award, Shield, ArrowRight, Zap, Code, Globe, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const values = [
  { name: "Innovation", icon: Zap, description: "We push technical boundaries to build scalable products." },
  { name: "Quality", icon: Award, description: "We never compromise on the architecture and design." },
  { name: "Transparency", icon: Eye, description: "Honest and clear communication throughout the lifecycle." },
  { name: "Passion", icon: Heart, description: "We love engineering software that solves real problems." },
  { name: "Collaboration", icon: Users, description: "We act as your technology partner, not just a vendor." },
  { name: "Security", icon: Shield, description: "Enterprise-grade security embedded into every product." },
];

const processSteps = [
  { step: "01", title: "Discover", description: "Understand your business, users, and core objectives to establish a technical foundation." },
  { step: "02", title: "Strategize", description: "Define features, system architecture, and a scalable project roadmap." },
  { step: "03", title: "Design", description: "Create user journeys, high-fidelity wireframes, and premium UI experiences." },
  { step: "04", title: "Build", description: "Develop the product using modern, scalable engineering practices." },
  { step: "05", title: "Test", description: "Rigorous testing for functionality, security, usability, and performance." },
  { step: "06", title: "Launch", description: "Deploy to production, monitor health, and provide long-term support." },
];

export default function AboutPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://umatechno.in" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://umatechno.in/about" }
    ]
  };

  return (
    <div className="pt-32 pb-20 lg:pt-40 space-y-32 bg-transparent min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[var(--color-electric)]/40 bg-[var(--color-electric)]/10 text-[var(--color-electric)] text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md neo-glow">
            WHO WE ARE
          </div>
          <h1 className="text-5xl lg:text-7xl font-black font-outfit leading-[1.1] tracking-tighter">
            We turn ideas into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-accent)] animate-pulse">useful technology.</span>
          </h1>
          <p className="text-lg lg:text-xl text-[var(--color-text-main)] opacity-70 leading-relaxed font-medium">
            UMA Techno helps businesses transform manual workflows and operational challenges into modern digital products. We bridge the gap between complex technology and business growth.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-6 border-t border-[var(--color-border)]">
             <div>
                <p className="text-3xl font-black font-outfit text-white">10+</p>
                <p className="text-xs uppercase tracking-widest text-[var(--color-text-main)] opacity-60 font-bold mt-1">Years</p>
             </div>
             <div>
                <p className="text-3xl font-black font-outfit text-white">200+</p>
                <p className="text-xs uppercase tracking-widest text-[var(--color-text-main)] opacity-60 font-bold mt-1">Projects</p>
             </div>
             <div>
                <p className="text-3xl font-black font-outfit text-white">99%</p>
                <p className="text-xs uppercase tracking-widest text-[var(--color-text-main)] opacity-60 font-bold mt-1">Success</p>
             </div>
             <div>
                <p className="text-3xl font-black font-outfit text-white">24/7</p>
                <p className="text-xs uppercase tracking-widest text-[var(--color-text-main)] opacity-60 font-bold mt-1">Support</p>
             </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative group h-[500px]"
        >
          <div className="absolute inset-0 flex items-center justify-center animate-float-complex">
             <div className="absolute w-[80%] h-[80%] bg-[var(--color-electric)]/20 blur-[100px] rounded-full mix-blend-screen" />
             <div className="glass-card w-full h-full rounded-[3rem] p-8 border border-[var(--color-electric)]/30 overflow-hidden relative">
               <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
               <div className="relative z-10 w-full h-full flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                   <div className="w-16 h-16 rounded-2xl bg-[var(--color-electric)]/20 flex items-center justify-center text-[var(--color-electric)] neo-glow">
                     <Code size={32} />
                   </div>
                   <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] neo-glow">
                     <Globe size={32} />
                   </div>
                 </div>
                 <div className="text-center">
                    <Cpu size={64} className="mx-auto text-white/20 mb-4" />
                    <div className="text-2xl font-black font-outfit text-white tracking-widest">ENGINEERING CORE</div>
                 </div>
               </div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
           <motion.div 
             whileHover={{ y: -5 }}
             className="glass-card p-12 lg:p-16 rounded-[3rem] bg-gradient-to-br from-[var(--color-electric)]/10 to-transparent border border-white/5 relative overflow-hidden group"
           >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Target size={120} />
              </div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-black text-[var(--color-electric)] mb-6">Our Mission</h3>
              <p className="text-2xl lg:text-3xl font-outfit font-bold text-white leading-tight">
                To build high-performance software and digital products that solve complex operational challenges and scale businesses.
              </p>
           </motion.div>
           <motion.div 
             whileHover={{ y: -5 }}
             className="glass-card p-12 lg:p-16 rounded-[3rem] bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent border border-white/5 relative overflow-hidden group"
           >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Eye size={120} />
              </div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-black text-[var(--color-accent)] mb-6">Our Vision</h3>
              <p className="text-2xl lg:text-3xl font-outfit font-bold text-white leading-tight">
                To be the global technology partner for ambitious companies, recognized for engineering excellence and product innovation.
              </p>
           </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center space-y-4 mb-20 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-black font-outfit tracking-tighter">Our Core <span className="text-gradient">Philosophy</span></h2>
          <p className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto font-medium">
            The principles that guide our engineering and design decisions every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {values.map((value, i) => (
            <motion.div 
              key={value.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-[2rem] border-[var(--color-border)] group"
            >
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[var(--color-electric)] mb-6 group-hover:bg-[var(--color-electric)] group-hover:text-white transition-all neo-glow">
                <value.icon size={24} />
              </div>
              <h4 className="text-xl font-black font-outfit mb-3 text-white">{value.name}</h4>
              <p className="text-sm text-[var(--color-text-main)] opacity-60 leading-relaxed font-medium">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Development Process Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-20">
         <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-black font-outfit tracking-tighter">From idea to <span className="text-gradient">launch.</span></h2>
            <p className="text-[var(--color-text-main)] opacity-70 font-medium mt-4">Our battle-tested product development lifecycle.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative pl-8 md:pl-0 border-l border-[var(--color-border)] md:border-l-0 md:border-t pt-8">
                 <div className="absolute left-[-5px] md:left-0 md:top-[-5px] w-2.5 h-2.5 rounded-full bg-[var(--color-electric)] neo-glow" />
                 <div className="text-[var(--color-electric)] font-black text-sm mb-4">PHASE {step.step}</div>
                 <h4 className="text-2xl font-black font-outfit text-white mb-2">{step.title}</h4>
                 <p className="text-sm text-[var(--color-text-main)] opacity-60 leading-relaxed">{step.description}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-6 text-center pb-20">
         <div className="glass-card rounded-[3rem] p-16 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-electric)]/10 to-[var(--color-accent)]/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <h2 className="text-4xl lg:text-5xl font-black font-outfit text-white relative z-10 mb-6">Ready to engineer your next project?</h2>
            <p className="text-[var(--color-text-main)] opacity-70 max-w-xl mx-auto font-medium relative z-10 mb-10">
               We are always looking for ambitious partners. Let's discuss your technical requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
               <Link to="/contact" className="btn-primary-animated px-8 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2">
                 Contact Our Team <ArrowRight size={20} />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}

