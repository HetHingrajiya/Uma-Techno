import Hero from "@/components/ui/Hero";
import { 
  Code, Globe, Smartphone, BarChart, Palette, Megaphone, 
  Rocket, Shield, Zap, Users, Star, ArrowRight 
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description: "High-performance, scalable websites built with the latest technologies like Next.js and React.",
    icon: Globe,
    link: "/services/web-development"
  },
  {
    title: "Mobile App Development",
    description: "Premium iOS and Android apps that provide a seamless user experience and drive engagement.",
    icon: Smartphone,
    link: "/services/app-development"
  },
  {
    title: "UI/UX Design",
    description: "Modern, intuitive designs that prioritize user experience and brand identity.",
    icon: Palette,
    link: "/services/ui-ux"
  },
  {
    title: "SEO Optimization",
    description: "Strategic SEO services to improve your visibility and drive organic traffic to your business.",
    icon: BarChart,
    link: "/services/seo"
  },
  {
    title: "Custom Software",
    description: "Tailored software solutions designed to solve complex business challenges and improve efficiency.",
    icon: Code,
    link: "/services/custom-software"
  },
  {
    title: "Digital Branding",
    description: "Building strong, memorable brands through strategic design and digital storytelling.",
    icon: Megaphone,
    link: "/services/branding"
  }
];

const stats = [
  { label: "Projects Completed", value: "250+", icon: Rocket },
  { label: "Happy Clients", value: "120+", icon: Users },
  { label: "Years Experience", value: "8+", icon: Star },
  { label: "Client Retention", value: "98%", icon: Shield },
];

const process = [
  { title: "Discovery", desc: "Understanding your vision, goals, and target audience in depth." },
  { title: "Planning", desc: "Creating a detailed roadmap and wireframes for your project." },
  { title: "Execution", desc: "Building your solution with precision and the latest tech." },
  { title: "Launch", desc: "Quality assurance followed by a smooth, successful deployment." },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-32">
      <Hero />

      {/* Trusted By Section */}
      <section className="max-w-7xl mx-auto px-6 w-full -mt-10">
        <div className="text-center space-y-8">
          <p className="text-gray-500 font-medium tracking-widest text-xs uppercase">Trusted By Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             {["TechCorp", "Innovate", "GlobalSoft", "Visionary", "Nexus"].map(brand => (
               <span key={brand} className="text-2xl font-bold font-outfit text-white/50">{brand}</span>
             ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-bold uppercase tracking-wider">
            Our Expertise
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold font-outfit tracking-tight">Digital Solutions That <br /> <span className="text-gradient">Drive Results</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We combine strategy, design, and technology to build products that people love and businesses grow with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={service.link}
              className="group glass-card p-10 rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric/5 blur-3xl -mr-16 -mt-16 group-hover:bg-electric/20 transition-all" />
              <div className="w-16 h-16 bg-gradient-to-br from-electric to-accent rounded-2xl flex items-center justify-center mb-8 text-white shadow-xl group-hover:scale-110 transition-transform">
                <service.icon size={32} />
              </div>
              <h4 className="text-2xl font-bold font-outfit mb-4 text-white group-hover:text-electric transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-electric opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                Learn More <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-navy-light/30 py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto text-accent mb-2">
                <stat.icon size={24} />
              </div>
              <div className="text-4xl lg:text-5xl font-bold font-outfit text-white">{stat.value}</div>
              <div className="text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold font-outfit">How We Turn Ideas Into <span className="text-gradient">Reality</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our proven development methodology ensures your project is delivered on time, within budget, and to the highest quality standards.
            </p>
            <div className="space-y-6">
              {process.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-electric font-bold text-xl group-hover:bg-electric group-hover:text-white transition-all">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square glass-card rounded-[3rem] p-1 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-electric/20 to-accent/20 animate-pulse" />
                <div className="w-full h-full bg-navy rounded-[2.8rem] flex items-center justify-center p-12">
                   <div className="text-center space-y-6">
                      <Zap size={64} className="text-electric mx-auto animate-float" />
                      <div className="text-3xl font-bold font-outfit">Rapid Development</div>
                      <p className="text-gray-400">Scaling your business at the speed of thought.</p>
                   </div>
                </div>
             </div>
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 blur-3xl rounded-full" />
             <div className="absolute -top-6 -left-6 w-32 h-32 bg-electric/20 blur-3xl rounded-full" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 w-full text-center">
        <h2 className="text-4xl lg:text-5xl font-bold font-outfit mb-16">What Our <span className="text-gradient">Clients Say</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[1, 2, 3].map(i => (
             <div key={i} className="glass-card p-10 rounded-[2.5rem] text-left space-y-6 relative">
                <div className="flex gap-1 text-accent">
                   {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic text-lg leading-relaxed">
                  "Uma Techno transformed our business with a stunning website that increased our conversion rate by 40% in just three months. Their team is truly exceptional!"
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric/20 to-accent/20" />
                   <div>
                      <p className="font-bold text-white">Client Name {i}</p>
                      <p className="text-sm text-gray-500">CEO, Company Name</p>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="bg-gradient-to-br from-electric/20 to-accent/10 border border-white/10 rounded-[4rem] p-12 lg:p-24 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric/20 blur-[120px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 blur-[120px] -ml-48 -mb-48" />
          
          <h2 className="text-4xl lg:text-7xl font-bold font-outfit max-w-4xl mx-auto leading-tight">
            Ready to Build Your <span className="text-gradient">Digital Legacy</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t settle for basic. Partner with Uma Techno and get a solution that truly represents your brand and scales with your ambition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <Link
              href="/contact"
              className="px-10 py-5 bg-white text-navy hover:bg-gray-200 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-xl btn-premium"
            >
              Start Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="px-10 py-5 bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-2xl font-bold text-lg transition-all"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
