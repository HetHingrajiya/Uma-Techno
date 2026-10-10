import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, BarChart3, Check, Code2, Globe2,
  Layers3, Megaphone, MonitorSmartphone, Palette, ShieldCheck, Sparkles,
  Smartphone, Workflow, Zap
} from "lucide-react";
import { Link } from "react-router-dom";

type Project = {
  _id?: string;
  id?: string;
  title?: string;
  name?: string;
  slug?: string;
  category?: string;
  industry?: string;
  description?: string;
  summary?: string;
  featuredImage?: string;
  image?: string;
  tech?: string[];
  technologies?: string[];
};

const services = [
  {
    number: "01",
    title: "Web Development",
    description: "Fast, accessible websites and web platforms built around your business goals.",
    icon: Code2,
    href: "/web-development",
    tags: ["Business websites", "Web applications", "E-commerce"]
  },
  {
    number: "02",
    title: "Mobile App Development",
    description: "Thoughtful Android, iOS and cross-platform apps that feel natural to use.",
    icon: Smartphone,
    href: "/services/app-development",
    tags: ["Flutter", "Android & iOS", "API integration"]
  },
  {
    number: "03",
    title: "UI/UX & Product Design",
    description: "Clear user journeys and polished interfaces that make complex products simpler.",
    icon: Palette,
    href: "/services/ui-ux",
    tags: ["Product strategy", "Prototyping", "Design systems"]
  },
  {
    number: "04",
    title: "SEO & Digital Marketing",
    description: "Search visibility and practical digital campaigns designed to attract the right audience.",
    icon: BarChart3,
    href: "/digital-marketing",
    tags: ["Technical SEO", "Content strategy", "Campaigns"]
  },
  {
    number: "05",
    title: "Branding & Creative",
    description: "A consistent visual identity that helps your business look credible everywhere.",
    icon: Sparkles,
    href: "/services/branding",
    tags: ["Brand identity", "Creative assets", "Guidelines"]
  },
  {
    number: "06",
    title: "Custom Software",
    description: "Purpose-built business tools, integrations and workflows to reduce manual work.",
    icon: Layers3,
    href: "/services/custom-software",
    tags: ["Dashboards", "Automation", "Integrations"]
  }
];

const process = [
  { number: "01", title: "Understand", description: "We learn about your business, audience, goals and constraints." },
  { number: "02", title: "Plan & design", description: "We map the experience, agree on scope and make the direction tangible." },
  { number: "03", title: "Build & refine", description: "We develop in clear milestones and keep feedback part of the process." },
  { number: "04", title: "Launch & improve", description: "We test, launch and help you plan the next iteration." }
];

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_URL || "https://uma-techno-phrb.vercel.app";
    const controller = new AbortController();

    fetch(`${baseUrl}/api/v1/projects`, { signal: controller.signal })
      .then((response) => response.ok ? response.json() : [])
      .then((data) => {
        if (Array.isArray(data)) setProjects(data.filter((project: Project) => project && (project.slug || project.id || project._id)).slice(0, 3));
      })
      .catch((error) => {
        if (error.name !== "AbortError") console.error("Portfolio preview could not be loaded.");
      });

    return () => controller.abort();
  }, []);

  return (
    <div className="home-redesign">
      <section className="relative min-h-[88svh] flex items-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none home-hero-grid" />
        <div className="absolute -top-40 right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[var(--color-electric)]/10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-6 relative z-10 grid lg:grid-cols-[1.1fr_.9fr] gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-electric)]/35 bg-[var(--color-electric)]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[var(--color-electric)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-electric)]" />
              Digital solutions for ambitious businesses
            </div>
            <h1 className="mt-7 max-w-3xl text-5xl sm:text-6xl lg:text-7xl xl:text-[5.4rem] font-black tracking-[-.055em] leading-[.99] text-[var(--color-text-main)]">
              Make your next
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] via-[#F2D887] to-[var(--color-electric)]">digital move</span>
              <span className="block mt-2">your best one.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--color-text-main)]/70">
              UMA TECHNO partners with growing businesses to design, build and market digital products that solve real problems—not just look good on a screen.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-electric)] px-7 py-4 text-sm font-extrabold text-[#11100B] transition-transform hover:-translate-y-0.5 hover:shadow-[0_12px_35px_var(--color-blue-glow)]">
                Discuss your project <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[.04] px-7 py-4 text-sm font-bold text-[var(--color-text-main)] transition-colors hover:border-[var(--color-electric)]/60 hover:bg-white/[.07]">
                Explore our work <ArrowDownRight size={18} />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--color-text-main)]/60">
              <span className="inline-flex items-center gap-2"><Check size={15} className="text-[var(--color-electric)]" /> Strategy before code</span>
              <span className="inline-flex items-center gap-2"><Check size={15} className="text-[var(--color-electric)]" /> Clear project milestones</span>
              <span className="inline-flex items-center gap-2"><Check size={15} className="text-[var(--color-electric)]" /> Built to scale</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .12 }} className="relative mx-auto w-full max-w-[32rem]">
            <div className="absolute inset-8 rounded-[2.5rem] bg-[var(--color-electric)]/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-[#10100E] p-4 shadow-[0_35px_100px_rgba(0,0,0,.45)]">
              <div className="flex items-center justify-between border-b border-white/10 px-3 pb-4 pt-2">
                <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" /></div>
                <span className="text-[10px] uppercase tracking-[.2em] text-white/40">Digital experience / 01</span>
                <Globe2 size={15} className="text-[var(--color-electric)]" />
              </div>
              <div className="p-5 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[.2em] text-[var(--color-electric)]">Built around your vision</p>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-white">Ideas into<br />impactful products.</h2>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-electric)]/30 bg-[var(--color-electric)]/10 text-[var(--color-electric)]"><Zap size={23} /></div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[.035] p-4">
                    <MonitorSmartphone className="text-[var(--color-electric)]" size={22} />
                    <p className="mt-5 font-bold text-white">Digital products</p>
                    <p className="mt-1 text-xs leading-5 text-white/50">Websites, apps & software</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[.035] p-4">
                    <Megaphone className="text-[var(--color-electric)]" size={22} />
                    <p className="mt-5 font-bold text-white">Digital growth</p>
                    <p className="mt-1 text-xs leading-5 text-white/50">SEO, brand & campaigns</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between rounded-2xl bg-[var(--color-electric)] p-4 text-[#11100B]">
                  <div><p className="text-xs font-bold uppercase tracking-[.15em]">Your next chapter</p><p className="mt-1 text-sm font-extrabold">Starts with a conversation.</p></div>
                  <ArrowRight size={22} />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-5 hidden sm:flex items-center gap-3 rounded-2xl border border-white/10 bg-[#171714] px-4 py-3 shadow-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-electric)]/10 text-[var(--color-electric)]"><Workflow size={20} /></div>
              <div><p className="text-sm font-bold text-white">Strategy-led delivery</p><p className="text-xs text-white/45">Plan. Build. Improve.</p></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/[.07] bg-white/[.02]">
        <div className="max-w-7xl mx-auto px-6 py-7 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { title: "Web & platforms", detail: "Useful digital foundations" },
            { title: "Mobile applications", detail: "Experiences on the go" },
            { title: "Brand & experience", detail: "Clear, consistent design" },
            { title: "Search & growth", detail: "Reach the right audience" }
          ].map((item) => <div key={item.title} className="border-l-2 border-[var(--color-electric)]/60 pl-4"><p className="font-bold text-[var(--color-text-main)]">{item.title}</p><p className="mt-1 text-xs sm:text-sm text-[var(--color-text-main)]/50">{item.detail}</p></div>)}
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-20 items-end mb-12">
            <div><p className="text-xs font-extrabold uppercase tracking-[.22em] text-[var(--color-electric)]">What we do</p><h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight leading-tight text-[var(--color-text-main)]">Everything you need to move forward.</h2></div>
            <p className="max-w-2xl text-base sm:text-lg leading-8 text-[var(--color-text-main)]/60">One team for the digital details that matter—from your first online presence to the tools and campaigns that help your business grow.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {services.map((service) => {
              const Icon = service.icon;
              return <Link to={service.href} key={service.number} className="group rounded-3xl border border-white/10 bg-white/[.025] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-electric)]/45 hover:bg-white/[.045]">
                <div className="flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-electric)]/20 bg-[var(--color-electric)]/10 text-[var(--color-electric)]"><Icon size={23} /></div><span className="text-xs font-bold tracking-[.15em] text-white/25">{service.number}</span></div>
                <h3 className="mt-6 text-xl font-extrabold text-white">{service.title}</h3>
                <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-white/55">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{service.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white/45">{tag}</span>)}</div>
                <div className="mt-7 flex items-center gap-2 text-sm font-bold text-[var(--color-electric)]">Explore service <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></div>
              </Link>;
            })}
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-white/[.06] bg-[#0D0D0B]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[.75fr_1.25fr] gap-12 lg:gap-24">
          <div><p className="text-xs font-extrabold uppercase tracking-[.22em] text-[var(--color-electric)]">How we work</p><h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight leading-tight text-white">A clear path from idea to launch.</h2><p className="mt-6 text-base leading-7 text-white/55">Good work comes from shared context, honest communication and a process you can follow.</p><Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-electric)] hover:gap-3 transition-all">Meet UMA TECHNO <ArrowRight size={17} /></Link></div>
          <div className="divide-y divide-white/10">
            {process.map((step) => <div key={step.number} className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[4.5rem_1fr] gap-4 py-6 first:pt-0 last:pb-0"><span className="text-sm font-extrabold tracking-widest text-[var(--color-electric)]">{step.number}</span><div><h3 className="text-lg font-bold text-white">{step.title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-white/50">{step.description}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div><p className="text-xs font-extrabold uppercase tracking-[.22em] text-[var(--color-electric)]">Selected work</p><h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-[var(--color-text-main)]">Made for real-world needs.</h2><p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-main)]/55">Explore project details and the solutions behind them.</p></div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-electric)] hover:gap-3 transition-all">View all work <ArrowRight size={17} /></Link>
          </div>
          {projects.length > 0 ? <div className="grid md:grid-cols-3 gap-5">{projects.map((project, index) => {
            const title = project.title || project.name || "Featured project";
            const slug = project.slug || project.id || project._id || "";
            const image = project.featuredImage || project.image;
            return <Link key={slug || index} to={`/portfolio/${slug}`} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[.025] transition-all hover:-translate-y-1 hover:border-[var(--color-electric)]/40">
              <div className="aspect-[4/3] overflow-hidden bg-[#151512]">{image ? <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /> : <div className="flex h-full items-center justify-center"><Layers3 size={48} className="text-[var(--color-electric)]/35" /></div>}</div>
              <div className="p-6"><p className="text-xs font-bold uppercase tracking-[.15em] text-[var(--color-electric)]">{project.category || project.industry || "Digital project"}</p><h3 className="mt-3 text-xl font-extrabold text-white">{title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-white/50">{project.description || project.summary || "Explore the project to learn more about the approach and solution."}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white/75">View project <ArrowRight size={15} className="text-[var(--color-electric)] transition-transform group-hover:translate-x-1" /></span></div>
            </Link>;
          })}</div> : <div className="rounded-3xl border border-dashed border-white/15 bg-white/[.02] p-8 sm:p-12 text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-electric)]/10 text-[var(--color-electric)]"><Layers3 size={25} /></div><h3 className="mt-5 text-xl font-bold text-white">Your next project could be here.</h3><p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-white/50">We’re always building new digital experiences. Get in touch to discuss what we could create together.</p><Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-electric)] px-5 py-3 text-sm font-extrabold text-[#11100B]">Start a project <ArrowRight size={16} /></Link></div>}
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-electric)]/25 bg-[#14130F] px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
            <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[var(--color-electric)]/10 blur-[100px]" />
            <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div><p className="text-xs font-extrabold uppercase tracking-[.22em] text-[var(--color-electric)]">Have a project in mind?</p><h2 className="mt-4 max-w-3xl text-4xl sm:text-5xl font-black leading-tight tracking-tight text-white">Let’s turn your next idea into something useful.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-white/55">Tell us what you’re working on. We’ll help you map the next steps.</p></div>
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-electric)] px-7 py-4 text-sm font-extrabold text-[#11100B] transition-transform hover:-translate-y-0.5">Let’s talk <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
