import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, Palette, Search, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <section className="py-24 bg-[var(--background)] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-electric)]/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[var(--color-electric)]/40 bg-[var(--color-electric)]/10 text-[var(--color-electric)] text-sm font-black uppercase tracking-[0.15em] backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-electric)]" />
            INTERACTIVE ESTIMATE
          </div>
          <h2 className="text-4xl lg:text-6xl font-black font-outfit text-[var(--color-text-main)] tracking-tighter">
            Try Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-accent)]">Project. Live.</span>
          </h2>
          <p className="text-[var(--color-text-main)] opacity-70 text-lg max-w-2xl mx-auto">
            Select your project type and desired features to get an instant, dynamic estimate of your investment.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-8 space-y-12">
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-outfit text-[var(--color-text-main)]">1. Select Project Type</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleTypeSelect(type.id)}
                    className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-4 text-center group ${
                      selectedType === type.id 
                        ? 'bg-[var(--color-electric)]/10 border-[var(--color-electric)] shadow-[0_0_20px_rgba(6,182,212,0.2)]' 
                        : 'bg-[var(--color-card)]/50 border-[var(--color-border)] hover:border-[var(--color-electric)]/50 hover:bg-[var(--color-card)]'
                    }`}
                  >
                    <type.icon size={32} className={`${selectedType === type.id ? 'text-[var(--color-electric)]' : 'text-[var(--color-text-main)] opacity-50 group-hover:opacity-100 group-hover:text-[var(--color-electric)]'} transition-colors`} />
                    <span className={`font-bold ${selectedType === type.id ? 'text-[var(--color-electric)]' : 'text-[var(--color-text-main)]'} transition-colors`}>{type.title}</span>
                  </button>
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
                  <h3 className="text-2xl font-bold font-outfit text-[var(--color-text-main)]">2. Add Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {currentFeatures.map((feature) => (
                      <button
                        key={feature.id}
                        onClick={() => toggleFeature(feature.id)}
                        className={`p-4 rounded-xl border flex items-center justify-between transition-all duration-300 ${
                          selectedFeatures.includes(feature.id)
                            ? 'bg-[var(--color-electric)] border-[var(--color-electric)] text-white shadow-lg'
                            : 'bg-[var(--color-card)]/50 border-[var(--color-border)] hover:border-[var(--color-electric)]/50 text-[var(--color-text-main)]'
                        }`}
                      >
                        <span className="font-bold">{feature.title}</span>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                          selectedFeatures.includes(feature.id) ? 'border-white' : 'border-[var(--color-text-main)] opacity-30'
                        }`}>
                          {selectedFeatures.includes(feature.id) && <Check size={14} />}
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          <div className="lg:col-span-4">
            <div className="glass-card p-8 rounded-3xl border border-[var(--color-border)] shadow-2xl h-fit">
              <h3 className="text-xl font-bold font-outfit text-[var(--color-text-main)] mb-6 border-b border-[var(--color-border)] pb-4">Estimated Investment</h3>
              
              <div className="space-y-4 mb-8">
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
                    <div key={fId} className="flex justify-between items-center text-[var(--color-text-main)]">
                      <span className="opacity-70 text-sm">+ {feature.title}</span>
                      <span className="font-bold text-sm">₹{feature.price.toLocaleString('en-IN')}</span>
                    </div>
                  ) : null;
                })}
              </div>

              <div className="border-t border-[var(--color-border)] pt-6 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-[var(--color-text-main)] font-bold">Total</span>
                  <div className="text-right">
                    <span className="text-4xl font-black font-outfit text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-accent)]">
                      ₹{calculateTotal().toLocaleString('en-IN')}
                    </span>
                    <div className="text-[10px] text-[var(--color-text-main)] opacity-40 uppercase tracking-widest mt-1">Starting At</div>
                  </div>
                </div>
              </div>

              <Link
                to={`/contact?estimate=${calculateTotal()}`}
                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                  selectedType 
                    ? 'bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-accent)] text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105' 
                    : 'bg-[var(--color-card)] text-[var(--color-text-main)] opacity-50 cursor-not-allowed border border-[var(--color-border)]'
                }`}
                onClick={e => !selectedType && e.preventDefault()}
              >
                Discuss This Project <ArrowRight size={20} />
              </Link>

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
