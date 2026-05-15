import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const jobs = [
  {
    title: "Full Stack Developer",
    location: "Remote / Rajkot",
    type: "Full-time",
    salary: "₹15k - ₹20k"
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Full-time",
    salary: "₹10k - ₹15k"
  },
  {
    title: "Digital Marketing Specialist",
    location: "Rajkot",
    type: "Contract",
    salary: "₹20k - ₹25k"
  }
];

export default function CareersPage() {
  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[var(--background)] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-electric font-bold tracking-widest text-sm uppercase">Join Our Team</h2>
        <h1 className="text-5xl lg:text-7xl font-bold font-outfit">
          Build the <span className="text-gradient">Future</span> With Us
        </h1>
        <p className="text-xl text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto leading-relaxed">
          We are looking for passionate, creative, and talented individuals to join our growing team. 
          Help us build world-class digital solutions.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 space-y-6">
        <h3 className="text-2xl font-bold font-outfit mb-8 text-[var(--color-text-main)]">Open Positions</h3>
        {jobs.map((job, i) => (
          <div key={i} className="card-premium p-8 rounded-3xl border border-[var(--color-border)] hover:border-[var(--color-electric)]/30 transition-all flex flex-col md:flex-row justify-between items-center gap-6 group bg-[var(--color-card)]">
             <div className="space-y-2">
                <h4 className="text-2xl font-bold font-outfit group-hover:text-[var(--color-electric)] transition-colors text-[var(--color-text-main)]">{job.title}</h4>
                <div className="flex flex-wrap gap-4 text-sm text-[var(--color-text-main)] opacity-60 font-medium">
                   <div className="flex items-center gap-1"><MapPin size={14} /> {job.location}</div>
                   <div className="flex items-center gap-1"><Clock size={14} /> {job.type}</div>
                   <div className="flex items-center gap-1"><Briefcase size={14} /> {job.salary}</div>
                </div>
             </div>
             <Link to="/contact" className="px-8 py-3 bg-[var(--color-electric)]/10 hover:bg-[var(--color-electric)] text-[var(--color-electric)] hover:text-white font-bold rounded-xl transition-all flex items-center gap-2 border border-[var(--color-electric)]/20 shadow-sm">
                Apply Now <ArrowRight size={18} />
             </Link>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="card-premium p-12 rounded-[3rem] border border-[var(--color-border)] space-y-8 bg-[var(--color-card)]">
            <h3 className="text-3xl font-bold font-outfit text-[var(--color-text-main)]">Why Work at Uma Techno?</h3>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { t: "Remote Work", d: "Work from anywhere in the world." },
                 { t: "Growth Opportunity", d: "Constant learning and career advancement." },
                 { t: "Premium Culture", d: "Collaborative and supportive environment." }
               ].map(item => (
                 <div key={item.t} className="space-y-2">
                    <h5 className="font-bold text-[var(--color-electric)] text-lg">{item.t}</h5>
                    <p className="text-sm text-[var(--color-text-main)] opacity-60 leading-relaxed">{item.d}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}

