import React from "react";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const fallbackProjects: Record<string, any> = {
  "docrx": {
    title: "DocRx Health Platform",
    category: "HealthTech",
    industry: "Medical",
    challenge: "Doctors needed a secure, compliant way to manage digital prescriptions and patient records.",
    solution: "Developed a comprehensive digital health platform with encrypted document storage and e-prescription capabilities.",
    result: "10,000+ Prescriptions Processed",
    tech: ["Flutter", "ASP.Net", "MSSQL"],
    featuredImage: "/images/health-booking.png",
    fullDescription: "The challenge was to transition traditional clinics to a fully digital workflow while maintaining HIPAA compliance. We built a robust cross-platform mobile application for doctors to manage patients on the go, backed by a highly secure ASP.Net architecture and an optimized MSSQL database for fast, reliable data retrieval."
  },
  "jewelry-ecommerce": {
    title: "Premium Jewelry E-commerce",
    category: "E-commerce",
    industry: "Fashion & Jewelry",
    challenge: "Needed a luxury digital presence that matched their physical showroom quality in Rajkot.",
    solution: "Built a custom Next.js storefront with high-fidelity visuals and 3D product previews.",
    result: "+450% Conversion Increase",
    tech: ["Next.js", "Three.js", "Prisma", "Tailwind CSS"],
    featuredImage: "/images/jewelry-ecommerce.png",
    fullDescription: "The challenge was to create an online experience that felt as high-end as walking into a physical jewelry boutique. We focused on massive high-resolution imagery, smooth transitions, and a conversion-optimized checkout flow that reduced friction for high-ticket items."
  },
  "booking-platform": {
    title: "Healthcare Booking System",
    category: "Web App",
    industry: "Medical",
    challenge: "Manual appointment scheduling was causing 40% lead leakage for local clinics.",
    solution: "Automated booking system with real-time slot management and SMS notifications.",
    result: "Zero Manual Overhead",
    tech: ["React", "Node.js", "PostgreSQL", "Twilio"],
    featuredImage: "/images/health-booking.png",
    fullDescription: "We engineered a robust scheduling engine that handles complex multi-practitioner calendars. The system features automated reminders which decreased no-shows by 65% and integrated a secure patient portal for record management."
  },
  "fintech-dashboard": {
    title: "Corporate Fintech Dashboard",
    category: "Software",
    industry: "Finance",
    challenge: "Legacy systems were slow and insecure for handling sensitive transaction data.",
    solution: "End-to-end encrypted dashboard with real-time data visualization.",
    result: "99.9% System Uptime",
    tech: ["TypeScript", "D3.js", "Azure", "WebSockets"],
    featuredImage: "/images/fintech-dashboard.png",
    fullDescription: "This enterprise-level dashboard provides real-time insights into global financial transactions. We utilized WebSockets for live data streaming and implemented a rigorous security architecture including multi-factor authentication and role-based access control."
  }
};

export default function ProjectPage() {
  const { slug } = useParams();
  const paramsSlug = slug || "";
  const project = fallbackProjects[paramsSlug];

  if (!project) {
    return <div className="pt-40 text-center text-white">Project not found</div>;
  }

  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[var(--background)] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/20 text-[var(--color-electric)] text-xs font-bold uppercase tracking-wider">
              Case Study: {project.category}
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold font-outfit text-[var(--color-text-main)]">
              {project.title}
            </h1>
            <p className="text-xl text-[var(--color-text-main)] opacity-70 leading-relaxed">
              {project.challenge}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 border-l border-[var(--color-border)] pl-12 py-4">
            <div>
              <div className="text-[10px] uppercase font-black text-[var(--color-electric)] tracking-widest mb-1">Industry</div>
              <div className="text-lg font-bold text-[var(--color-text-main)]">{project.industry}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-black text-[var(--color-electric)] tracking-widest mb-1">Impact</div>
              <div className="text-lg font-bold text-[var(--color-text-main)]">{project.result}</div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-video rounded-[3rem] overflow-hidden border border-[var(--color-border)] shadow-2xl mb-20 relative group">
           <img 
            src={project.featuredImage} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-outfit text-[var(--color-text-main)]">Overview</h2>
              <p className="text-lg text-[var(--color-text-main)] opacity-70 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-outfit text-[var(--color-text-main)]">The Solution</h2>
              <p className="text-lg text-[var(--color-text-main)] opacity-70 leading-relaxed">
                {project.solution}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                   "Performance Optimized",
                   "SEO Integrated",
                   "Fully Responsive Design",
                   "Secure Architecture"
                ].map((check) => (
                  <div key={check} className="flex items-center gap-3 text-[var(--color-text-main)] font-medium">
                    <CheckCircle className="text-[var(--color-electric)]" size={20} />
                    {check}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] p-8 rounded-3xl shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-[var(--color-text-main)]">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t: string) => (
                  <span key={t} className="px-3 py-1 bg-[var(--color-navy-light)] border border-[var(--color-border)] text-[var(--color-text-main)] text-xs font-bold rounded-lg uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-premium p-8 rounded-3xl text-white space-y-4 shadow-xl">
              <Zap size={32} />
              <h3 className="text-xl font-bold">Interested in a similar solution?</h3>
              <p className="opacity-80 text-sm">Let&apos;s build something high-performance for your business.</p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-white text-[var(--color-electric)] px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all"
              >
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-32 pt-16 border-t border-[var(--color-border)] flex justify-between items-center">
          <Link to="/portfolio" className="text-[var(--color-text-main)] opacity-50 hover:opacity-100 font-bold flex items-center gap-2 transition-all">
            &larr; Back to Portfolio
          </Link>
          <div className="flex gap-4">
             <Link to="/contact" className="text-[var(--color-electric)] font-bold uppercase tracking-widest text-xs hover:underline">
               Discuss Your Project
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
