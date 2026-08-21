import { Briefcase, MapPin, Clock, ArrowRight, Zap, Target, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const jobs = [
  {
    title: "Senior Full Stack Engineer",
    location: "Remote / Rajkot",
    type: "Full-time",
    salary: "Competitive",
    department: "Engineering"
  },
  {
    title: "UI/UX Product Designer",
    location: "Remote",
    type: "Full-time",
    salary: "Competitive",
    department: "Design"
  },
  {
    title: "Performance Marketing Lead",
    location: "Rajkot",
    type: "Full-time",
    salary: "Competitive",
    department: "Marketing"
  }
];

export default function CareersPage() {
  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <section className="text-center space-y-6 mb-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[var(--color-electric)]/40 bg-[var(--color-electric)]/10 text-[var(--color-electric)] text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md neo-glow"
          >
            CAREERS AT UMA TECHNO
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black font-outfit text-white tracking-tighter leading-tight"
          >
            Build the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-accent)] animate-pulse">Future of Tech.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto text-lg font-medium"
          >
            Join a collective of elite engineers, designers, and strategists building high-performance digital solutions for modern businesses.
          </motion.p>
        </section>

        {/* Benefits Grid */}
        <section className="mb-32 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, t: "Impact-Driven Work", d: "Work on products that move the needle for real businesses." },
              { icon: BookOpen, t: "Continuous Growth", d: "Master the latest architectures and frameworks." },
              { icon: Users, t: "Elite Culture", d: "Collaborate with top-tier talent in a high-trust environment." }
            ].map((item, i) => (
              <motion.div 
                key={item.t} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 rounded-[2.5rem] border border-[var(--color-border)] hover:border-[var(--color-electric)]/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-electric)] mb-8 group-hover:bg-[var(--color-electric)] group-hover:text-white transition-all shadow-lg">
                  <item.icon size={24} />
                </div>
                <h3 className="text-2xl font-black font-outfit text-white mb-4">{item.t}</h3>
                <p className="text-[var(--color-text-main)] opacity-70 font-medium">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-32 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-black font-outfit text-white tracking-tighter">Open <span className="text-gradient">Positions.</span></h2>
              <p className="text-[var(--color-text-main)] opacity-70 font-medium max-w-xl">
                Ready to take the next step in your career? Browse our current openings below.
              </p>
            </div>
            <div className="text-white/50 text-sm font-bold uppercase tracking-widest">
              {jobs.length} Roles Available
            </div>
          </div>
          
          <div className="space-y-6">
            {jobs.map((job, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 lg:p-10 rounded-3xl border border-[var(--color-border)] hover:border-[var(--color-electric)] transition-all flex flex-col lg:flex-row justify-between items-center gap-8 group"
              >
                 <div className="space-y-4 w-full lg:w-auto">
                    <div className="flex gap-3 items-center">
                      <span className="px-3 py-1 bg-white/5 border border-white/10 text-white/50 text-xs font-bold uppercase tracking-widest rounded-lg">
                        {job.department}
                      </span>
                    </div>
                    <h4 className="text-2xl lg:text-3xl font-black font-outfit group-hover:text-[var(--color-electric)] transition-colors text-white">
                      {job.title}
                    </h4>
                    <div className="flex flex-wrap gap-6 text-sm text-[var(--color-text-main)] opacity-60 font-bold uppercase tracking-widest">
                       <div className="flex items-center gap-2"><MapPin size={16} className="text-[var(--color-electric)]" /> {job.location}</div>
                       <div className="flex items-center gap-2"><Clock size={16} className="text-[var(--color-electric)]" /> {job.type}</div>
                       <div className="flex items-center gap-2"><Briefcase size={16} className="text-[var(--color-electric)]" /> {job.salary}</div>
                    </div>
                 </div>
                 <Link 
                  to="/contact" 
                  className="w-full lg:w-auto text-center px-8 py-4 bg-white/5 hover:bg-white text-white hover:text-black font-black uppercase tracking-widest text-xs rounded-xl transition-all flex items-center justify-center gap-3 border border-white/10 shadow-xl"
                 >
                    Apply Now <ArrowRight size={18} />
                 </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Internship CTA */}
        <section className="relative z-10">
          <div className="glass-card p-12 lg:p-16 rounded-[3rem] border border-[var(--color-electric)]/30 bg-gradient-to-br from-[var(--color-electric)]/10 to-transparent shadow-[0_0_30px_rgba(6,182,212,0.1)] relative overflow-hidden group text-center">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
               <Zap size={200} />
            </div>
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="text-4xl font-black font-outfit text-white">Looking for an IT Internship in Rajkot?</h2>
              <p className="text-white/70 font-medium text-lg">
                We believe in nurturing the next generation of engineering talent. Apply for a high-intensity internship in Web Development, App Development, or Digital Marketing.
              </p>
              <div className="pt-6">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-3 bg-[var(--color-electric)] text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_20px_var(--color-blue-glow)] transition-all"
                >
                  Apply for Internship <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

