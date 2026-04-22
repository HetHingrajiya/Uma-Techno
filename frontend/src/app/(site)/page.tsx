import Hero from "@/components/ui/Hero";
import { Code, Globe, Smartphone, BarChart, Palette, Megaphone } from "lucide-react";
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

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-electric font-bold tracking-widest text-sm uppercase">Our Services</h2>
          <h3 className="text-4xl lg:text-5xl font-bold font-outfit">What We Do Best</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide a wide range of digital solutions to help your business grow and succeed in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={service.link}
              className="group glass-card p-8 rounded-[2rem] transition-all hover:bg-white/10 hover:-translate-y-2 border border-white/5 hover:border-electric/30"
            >
              <div className="w-14 h-14 bg-electric/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-electric group-hover:text-white text-electric transition-colors">
                <service.icon size={28} />
              </div>
              <h4 className="text-2xl font-bold font-outfit mb-4 text-white group-hover:text-electric transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 w-full mt-10">
        <div className="bg-gradient-to-br from-electric/20 to-accent/10 border border-white/10 rounded-[3rem] p-12 lg:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-electric/20 blur-[100px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 blur-[100px] -ml-32 -mb-32" />
          
          <h2 className="text-4xl lg:text-6xl font-bold font-outfit max-w-4xl mx-auto leading-tight">
            Ready to Start Your <span className="text-gradient">Digital Journey</span> With Us?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let&apos;s build something amazing together. Our team is ready to bring your vision to life.
          </p>
          <div className="flex justify-center pt-4">
            <Link
              href="/contact"
              className="px-10 py-5 bg-white text-navy hover:bg-gray-200 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-xl"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
