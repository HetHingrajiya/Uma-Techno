import { useState } from 'react';
import { motion as fmotion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  { 
    question: "What services do you specialize in?", 
    answer: "We specialize in modern web development, scalable mobile app development, premium UI/UX design, and comprehensive SEO marketing strategies. We provide end-to-end solutions for startups and enterprises." 
  },
  { 
    question: "How long does a typical project take?", 
    answer: "Project timelines vary based on complexity. A standard corporate website typically takes 2-4 weeks, while complex web applications or mobile apps can take 2-4 months. We always provide a detailed timeline during the discovery phase." 
  },
  { 
    question: "Do you offer ongoing support and maintenance?", 
    answer: "Absolutely. We offer dedicated support and maintenance packages to ensure your digital product remains secure, up-to-date, and performs optimally post-launch." 
  },
  { 
    question: "How do you handle project communication?", 
    answer: "We believe in complete transparency. You will have a dedicated project manager, regular status updates, and access to our project management tools to track progress in real-time." 
  },
  { 
    question: "Are your websites optimized for SEO?", 
    answer: "Yes. Every website we build includes technical SEO best practices out of the box, including optimized architecture, fast load times, mobile responsiveness, and clean code." 
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[var(--background)] relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-black font-outfit text-[var(--color-text-main)] tracking-tighter">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-accent)]">Questions</span>
          </h2>
          <p className="text-[var(--color-text-main)] opacity-70 text-lg">
            Everything you need to know about working with Uma Techno.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'border-[var(--color-electric)]/50 shadow-[0_0_20px_rgba(6,182,212,0.1)]' : 'border-[var(--color-border)] hover:border-[var(--color-text-main)]/20'
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-bold font-outfit text-lg transition-colors ${openIndex === index ? 'text-[var(--color-electric)]' : 'text-[var(--color-text-main)]'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`text-[var(--color-text-main)] opacity-50 transition-transform duration-300 ${openIndex === index ? 'rotate-180 opacity-100 text-[var(--color-electric)]' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <fmotion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-2 text-[var(--color-text-main)] opacity-70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </fmotion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[var(--color-text-main)] opacity-70 mb-4">Still have questions?</p>
          <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-[var(--color-electric)] hover:text-[var(--color-accent)] transition-colors group">
            Reach out to us directly <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
