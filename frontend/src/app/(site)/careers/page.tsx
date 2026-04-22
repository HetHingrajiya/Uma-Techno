import React from "react";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const jobs = [
  {
    title: "Senior Full Stack Developer",
    location: "Remote / Rajkot",
    type: "Full-time",
    salary: "$80k - $120k"
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Full-time",
    salary: "$60k - $90k"
  },
  {
    title: "Digital Marketing Specialist",
    location: "Rajkot",
    type: "Contract",
    salary: "$40k - $60k"
  }
];

export default function CareersPage() {
  return (
    <div className="py-20 space-y-20">
      <section className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-electric font-bold tracking-widest text-sm uppercase">Join Our Team</h2>
        <h1 className="text-5xl lg:text-7xl font-bold font-outfit">
          Build the <span className="text-gradient">Future</span> With Us
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We are looking for passionate, creative, and talented individuals to join our growing team. 
          Help us build world-class digital solutions.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 space-y-6">
        <h3 className="text-2xl font-bold font-outfit mb-8">Open Positions</h3>
        {jobs.map((job, i) => (
          <div key={i} className="glass-card p-8 rounded-3xl border-white/5 hover:border-electric/30 transition-all flex flex-col md:flex-row justify-between items-center gap-6 group">
             <div className="space-y-2">
                <h4 className="text-2xl font-bold font-outfit group-hover:text-electric transition-colors">{job.title}</h4>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                   <div className="flex items-center gap-1"><MapPin size={14} /> {job.location}</div>
                   <div className="flex items-center gap-1"><Clock size={14} /> {job.type}</div>
                   <div className="flex items-center gap-1"><Briefcase size={14} /> {job.salary}</div>
                </div>
             </div>
             <Link href="/contact" className="px-8 py-3 bg-white/5 hover:bg-electric text-white font-bold rounded-xl transition-all flex items-center gap-2">
                Apply Now <ArrowRight size={18} />
             </Link>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
         <div className="glass-card p-12 rounded-[3rem] border-white/5 space-y-8">
            <h3 className="text-3xl font-bold font-outfit">Why Work at Uma Techno?</h3>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { t: "Remote Work", d: "Work from anywhere in the world." },
                 { t: "Growth Opportunity", d: "Constant learning and career advancement." },
                 { t: "Premium Culture", d: "Collaborative and supportive environment." }
               ].map(item => (
                 <div key={item.t} className="space-y-2">
                    <h5 className="font-bold text-electric">{item.t}</h5>
                    <p className="text-sm text-gray-400">{item.d}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
