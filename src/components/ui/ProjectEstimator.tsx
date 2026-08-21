import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, Palette, Search, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '@/components/fx/AnimatedCounter';
import MagneticButton from '@/components/fx/MagneticButton';

const projectTypes = [
  { id: 'web', title: 'Web Development', icon: Monitor, basePrice: 10000 },
  { id: 'app', title: 'Mobile App', icon: Smartphone, basePrice: 80000 },
  { id: 'design', title: 'UI/UX Design', icon: Palette, basePrice: 20000 },
  { id: 'seo', title: 'SEO & Marketing', icon: Search, basePrice: 20000 },
];

const featuresByType: Record<string, { id: string, title: string, price: number }[]> = {
  web: [
    { id: 'ecommerce', title: 'E-commerce', price: 120000 },
    { id: 'auth', title: 'User Authentication', price: 4000 },
    { id: 'cms', title: 'Content Management (CMS)', price: 80000 },
    { id: 'api', title: 'Custom API Integration', price: 6000 },
    { id: 'animation', title: 'Advanced Animations', price: 14000 },
  ],
  app: [
    { id: 'push', title: 'Push Notifications', price: 4000 },
    { id: 'auth', title: 'User Authentication', price: 4000 },
    { id: 'inapp', title: 'In-App Purchases', price: 80000 },
    { id: 'api', title: 'Custom API Integration', price: 6000 },
    { id: 'offline', title: 'Offline Mode', price: 40000 },
  ],
  design: [
    { id: 'prototype', title: 'Interactive Prototype', price: 4000 },
    { id: 'system', title: 'Design System', price: 8000 },
    { id: 'testing', title: 'User Testing', price: 4000 },
    { id: 'wireframe', title: 'Wireframing', price: 4000 },
    { id: 'branding', title: 'Brand Identity', price: 6000 },
  ],
  seo: [
    { id: 'keyword', title: 'Keyword Research', price: 2400 },
    { id: 'audit', title: 'Technical SEO Audit', price: 4000 },
    { id: 'content', title: 'Content Strategy', price: 5600 },
    { id: 'backlink', title: 'Backlink Building', price: 6400 },
    { id: 'report', title: 'Monthly Reporting', price: 1600 },
  ]
};

export default function ProjectEstimator() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const handleTypeSelect = (id: string) => {
    if (selectedType !== id) {
      setSelectedType(id);
      setSelectedFeatures([]);
    }
  };

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const currentFeatures = selectedType ? featuresByType[selectedType] : [];

  const calculateTotal = () => {
    let total = 0;
    if (selectedType) {
      total += projectTypes.find(p => p.id === selectedType)?.basePrice || 0;
      selectedFeatures.forEach(featureId => {
        total += currentFeatures.find(f => f.id === featureId)?.price || 0;
      });
    }
    return total;
  };

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[var(--color-electric)]/8 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-[var(--color-violet)]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass-panel text-[var(--color-electric)] text-[11px] font-black uppercase tracking-[0.22em]">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-electric)]" />
            INTERACTIVE ESTIMATE
          </div>
          <h2 className="text-4xl lg:text-6xl font-black font-outfit text-[var(--color-text-main)] tracking-[-0.03em]">
            Try Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] via-[var(--color-accent)] to-[var(--color-violet)]">Project. Live.</span>
          </h2>
          <p className="text-[var(--color-text-main)] opacity-70 text-lg max-w-2xl mx-auto">
            Select your project type and desired features to get an instant, dynamic estimate of your investment.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-8 space-y-12 glass-panel rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[var(--color-electric)]/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[var(--color-electric)]/15 border border-[var(--color-electric)]/40 flex items-center justify-center text-[var(--color-electric)] text-sm font-black">1</span>
                <h3 className="text-2xl font-bold font-outfit text-[var(--color-text-main)]">Select Project Type</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {projectTypes.map((type) => (
                  <motion.button
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    key={type.id}
                    onClick={() => handleTypeSelect(type.id)}
                    data-cursor="button"
                    className={`relative p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-4 text-center group overflow-hidden ${
                      selectedType === type.id 
                        ? 'bg-[var(--color-electric)]/10 border-[var(--color-electric)] shadow-[0_0_30px_-5px_rgba(34,211,238,0.4)]' 
                        : 'bg-white/[0.02] border-white/10 hover:border-[var(--color-electric)]/50 hover:bg-white/[0.05]'
                    }`}
                  >
                    {selectedType === type.id && (
                      <motion.div layoutId="est-glow" className="absolute inset-0 bg-gradient-to-br from-[var(--color-electric)]/10 to-[var(--color-violet)]/10 rounded-2xl" />
                    )}
                    <type.icon size={32} className={`relative ${selectedType === type.id ? 'text-[var(--color-electric)]' : 'text-[var(--color-text-main)] opacity-50 group-hover:opacity-100 group-hover:text-[var(--color-electric)]'} transition-colors`} />
                    <span className={`relative font-bold ${selectedType === type.id ? 'text-[var(--color-electric)]' : 'text-[var(--color-text-main)]'} transition-colors`}>{type.title}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <AnimatePresence>
              {selectedType && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6 overflow-hidden"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[var(--color-violet)]/15 border border-[var(--color-violet)]/40 flex items-center justify-center text-[var(--color-violet)] text-sm font-black">2</span>
                    <h3 className="text-2xl font-bold font-outfit text-[var(--color-text-main)]">Add Features</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {currentFeatures.map((feature) => (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        key={feature.id}
                        onClick={() => toggleFeature(feature.id)}
                        data-cursor="button"
                        className={`p-4 rounded-xl border flex items-center justify-between transition-all duration-300 ${
                          selectedFeatures.includes(feature.id)
                            ? 'bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-violet)] border-transparent text-white shadow-[0_10px_30px_-10px_rgba(34,211,238,0.5)]'
                            : 'bg-white/[0.02] border-white/10 hover:border-[var(--color-electric)]/50 text-[var(--color-text-main)]'
                        }`}
                      >
                        <span className="font-bold">{feature.title}</span>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                          selectedFeatures.includes(feature.id) ? 'border-white' : 'border-[var(--color-text-main)] opacity-30'
                        }`}>
                          {selectedFeatures.includes(feature.id) && <Check size={14} />}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 glass-panel p-8 rounded-[2rem] shadow-2xl relative overflow-hidden shine-border">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--color-violet)]/20 blur-[80px] rounded-full pointer-events-none" />
              <h3 className="relative text-xs uppercase tracking-[0.25em] text-white/50 font-bold mb-6 pb-4 border-b border-white/10">Estimated Investment</h3>
              
              <div className="relative space-y-4 mb-8 min-h-[80px]">
                {selectedType ? (
                  <div className="flex justify-between items-center text-[var(--color-text-main)]">
                    <span className="opacity-70">{projectTypes.find(p => p.id === selectedType)?.title}</span>
                    <span className="font-bold">₹{projectTypes.find(p => p.id === selectedType)?.basePrice.toLocaleString('en-IN')}</span>
                  </div>
                ) : (
                  <div className="text-[var(--color-text-main)] opacity-40 italic">Select a project type to start</div>
                )}

                {selectedFeatures.map(fId => {
                  const feature = currentFeatures.find(f => f.id === fId);
                  return feature ? (
                    <motion.div initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} key={fId} className="flex justify-between items-center text-[var(--color-text-main)]">
                      <span className="opacity-70 text-sm">+ {feature.title}</span>
                      <span className="font-bold text-sm">₹{feature.price.toLocaleString('en-IN')}</span>
                    </motion.div>
                  ) : null;
                })}
              </div>

              <div className="relative border-t border-white/10 pt-6 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-[var(--color-text-main)] font-bold">Total</span>
                  <div className="text-right">
                    <AnimatedCounter
                      value={calculateTotal()}
                      format={(n) => `₹${n.toLocaleString('en-IN')}`}
                      className="text-4xl font-black font-outfit text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] via-[var(--color-accent)] to-[var(--color-violet)] tabular-nums"
                    />
                    <div className="text-[10px] text-[var(--color-text-main)] opacity-40 uppercase tracking-widest mt-1">Starting At</div>
                  </div>
                </div>
              </div>

              <MagneticButton strength={0.2} className="w-full">
                <Link
                  to={`/contact?estimate=${calculateTotal()}`}
                  data-cursor="button"
                  className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                    selectedType 
                      ? 'btn-premium-glow text-white' 
                      : 'bg-white/5 text-[var(--color-text-main)] opacity-50 cursor-not-allowed border border-white/10'
                  }`}
                  onClick={e => !selectedType && e.preventDefault()}
                >
                  Discuss This Project <ArrowRight size={20} />
                </Link>
              </MagneticButton>

              <p className="text-center text-[10px] text-[var(--color-text-main)] opacity-40 mt-6 uppercase tracking-widest leading-relaxed">
                * Please note: This estimate is an approximate amount. Final costs may vary based on exact project scope.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
