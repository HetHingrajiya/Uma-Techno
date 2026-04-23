import { Quote } from "lucide-react";

export default function FounderStory() {
  return (
    <section className="max-w-7xl mx-auto px-6 w-full py-20">
      <div className="glass-card rounded-[3rem] p-8 lg:p-16 grid lg:grid-cols-2 gap-12 items-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-electric/5 blur-[100px] -ml-32 -mt-32" />
        
        <div className="space-y-6 relative z-10">
          <div className="w-12 h-12 bg-electric/20 rounded-xl flex items-center justify-center text-electric">
            <Quote size={24} />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-outfit">Our <span className="text-gradient">Story</span></h2>
          <p className="text-gray-300 leading-relaxed text-lg italic">
            "Uma Techno was founded with a single mission: to provide Rajkot&apos;s businesses with the same level of digital engineering that global tech giants use. We don&apos;t just deliver code; we deliver growth engines."
          </p>
          <div className="pt-4">
            <p className="font-bold text-white text-xl">Het Hingrajiya</p>
            <p className="text-electric font-bold text-sm uppercase tracking-widest">Founder & Lead Engineer</p>
          </div>
        </div>
        
        <div className="relative group">
          <div className="aspect-square rounded-[2.5rem] overflow-hidden border-4 border-white/5 shadow-2xl">
            {/* Replace with actual image later */}
            <div className="w-full h-full bg-gradient-to-br from-navy-light to-navy flex items-center justify-center">
              <span className="text-6xl font-black text-white/10 group-hover:text-electric/20 transition-all">UMA</span>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl border-white/10 shadow-2xl">
             <div className="text-2xl font-black text-white">5+ Years</div>
             <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Industry Expertise</div>
          </div>
        </div>
      </div>
    </section>
  );
}
