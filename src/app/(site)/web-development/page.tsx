import { Globe, Code, Zap, Shield, Rocket, CheckCircle, ArrowRight, Smartphone, Layout, Database } from "lucide-react";
import { Link } from "react-router-dom";


const features = [
  { title: "Next.js & React Expertise", desc: "Building lightning-fast, SEO-friendly applications using the latest web technologies.", icon: Zap },
  { title: "E-commerce Solutions", desc: "Developing robust online stores with secure payments and optimized conversion paths.", icon: Rocket },
  { title: "Custom Web Applications", desc: "Tailor-made software solutions designed to automate and scale your business operations.", icon: Code },
  { title: "Responsive UI/UX Design", desc: "Ensuring your website looks and functions perfectly across all devices and screen sizes.", icon: Smartphone },
  { title: "SEO-Ready Architecture", desc: "Technical SEO built into the core, helping you rank higher on Google from day one.", icon: Globe },
  { title: "Cloud Integration", desc: "Secure and scalable hosting solutions on AWS, Azure, or Vercel for maximum uptime.", icon: Shield },
];

const faqs = [
  { q: "How long does it take to build a website?", a: "A standard business website typically takes 2-4 weeks, while complex web applications can take 8-12 weeks depending on features." },
  { q: "Do you provide maintenance after launch?", a: "Yes, we offer monthly maintenance packages that include security updates, performance monitoring, and content updates." },
  { q: "Is my website SEO-friendly?", a: "Absolutely. Every website we build is optimized for speed and follows the latest SEO best practices to ensure visibility in search results." },
  { q: "Will my website be mobile-friendly?", a: "Yes, 100%. We use a mobile-first design approach to ensure your site works flawlessly on smartphones, tablets, and desktops." },
];

export default function WebDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services in Rajkot",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Uma Techno"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "124"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development",
      "itemListElement": features.map(f => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": f.title
        }
      }))
    }
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://umatechno.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://umatechno.in/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Web Development",
        "item": "https://umatechno.in/web-development"
      }
    ]
  };

  return (
    <div className="flex flex-col gap-20 lg:gap-32 pb-32 bg-[var(--background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {/* Hero Section */}
      <section className="pt-32 lg:pt-48 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-electric)]/10 blur-[150px] -mr-64 -mt-64" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/20 text-[var(--color-electric)] text-xs font-bold uppercase tracking-wider">
              Expertise in Rajkot & Gujarat
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold font-outfit leading-tight text-[var(--color-text-main)]">
              Leading <span className="text-gradient">Web Development</span> Company in Rajkot
            </h1>
            <p className="text-xl text-[var(--color-text-main)] opacity-70 leading-relaxed max-w-xl">
              We engineer high-performance digital platforms that don&apos;t just look beautiful but drive real business results. Partner with the top-rated website development agency in Gujarat.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-gradient-premium text-white rounded-xl font-bold text-base transition-all hover:scale-105 shadow-xl">
                Start Your Project
              </Link>
              <Link to="/portfolio" className="px-8 py-4 bg-transparent border border-[var(--color-border)] text-[var(--color-text-main)] hover:bg-[var(--color-navy-light)] rounded-xl font-bold text-base transition-all">
                View Our Work
              </Link>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square glass-card rounded-[3rem] bg-gradient-soft/50 border border-[var(--color-border)] flex items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glow opacity-20 animate-pulse" />
                <Globe size={180} className="text-[var(--color-electric)] animate-float-complex" />
             </div>
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[var(--color-electric)]/20 blur-[100px] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content / SEO Section */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit text-[var(--color-text-main)]">Transforming Businesses with Premium Web Solutions</h2>
            <div className="prose prose-invert max-w-none text-[var(--color-text-main)] opacity-80 space-y-6 leading-relaxed">
              <p>
                In today&apos;s digital-first world, your website is often the first point of contact between your brand and potential customers. As a premier <strong>Web Development Company in Rajkot</strong>, Uma Techno understands that a website needs to be more than just a digital brochure. It needs to be a powerful sales engine, a lead generation machine, and a symbol of your brand&apos;s authority.
              </p>
              <p>
                Our team of expert developers in Rajkot specializes in creating custom web solutions that are tailored to the unique needs of businesses in Gujarat. Whether you are a startup looking for your first MVP or an established enterprise needing a complex system overhaul, we provide the technical expertise and creative vision to bring your ideas to life. You can also explore our <Link to="/seo-services" className="text-[var(--color-electric)] hover:underline font-bold">SEO services in Rajkot</Link> to ensure your site reaches the right audience.
              </p>
              <h3 className="text-2xl font-bold font-outfit text-[var(--color-text-main)] mt-8">Why Web Development Matters for Your Business Growth</h3>
              <p>
                A well-designed website can significantly impact your bottom line. By focusing on user experience (UX), page speed, and technical SEO, we ensure that your visitors stay longer, engage more, and convert into loyal customers. In the competitive market of Rajkot, having a website that loads in under 2 seconds and works flawlessly on mobile devices is no longer a luxury—it&apos;s a necessity.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 list-none p-0">
                {[
                  "Increased Organic Traffic from Google",
                  "Higher Conversion Rates",
                  "Better Brand Credibility",
                  "Automated Business Processes",
                  "Scalable Digital Infrastructure",
                  "24/7 Global Accessibility"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-center">
                    <CheckCircle size={16} className="text-[var(--color-electric)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                We use modern frameworks like Next.js and React to build websites that are incredibly fast and future-proof. Unlike traditional CMS platforms that can be slow and vulnerable to security threats, our headless and serverless approaches provide unmatched performance and security.
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid sm:grid-cols-2 gap-6 pt-12">
            {features.map((feature, i) => (
              <div key={i} className="card-premium p-8 space-y-4 bg-[var(--color-card)] border border-[var(--color-border)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-electric)]/10 text-[var(--color-electric)] flex items-center justify-center">
                  <feature.icon size={24} />
                </div>
                <h4 className="text-xl font-bold font-outfit text-[var(--color-text-main)] uppercase tracking-tight">{feature.title}</h4>
                <p className="text-sm text-[var(--color-text-main)] opacity-60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar / CTA */}
        <aside className="space-y-8">
          <div className="glass-card p-8 rounded-[2rem] border border-[var(--color-border)] bg-gradient-premium text-white">
            <h4 className="text-2xl font-bold font-outfit mb-4">Need a Quote?</h4>
            <p className="opacity-90 mb-8 text-sm leading-relaxed">
              Get a free consultation and a detailed project estimate for your web development needs in Rajkot.
            </p>
            <Link to="/contact" className="w-full py-4 bg-white text-[var(--color-electric)] rounded-xl font-bold text-center block hover:scale-105 transition-all">
              Request Free Audit
            </Link>
          </div>

          <div className="glass-card p-8 rounded-[2rem] border border-[var(--color-border)] space-y-6">
            <h4 className="text-xl font-bold font-outfit text-[var(--color-text-main)]">Our Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "AWS", "Vercel"].map(tech => (
                <span key={tech} className="px-3 py-1 bg-[var(--color-electric)]/10 text-[var(--color-electric)] rounded-full text-xs font-bold">{tech}</span>
              ))}
            </div>
          </div>
        </aside>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 bg-gradient-soft/30 rounded-[3rem] border border-[var(--color-border)]/50">
        <h2 className="text-3xl font-bold font-outfit text-center mb-12 text-[var(--color-text-main)]">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl border border-[var(--color-border)] space-y-2">
              <h4 className="text-lg font-bold text-[var(--color-text-main)]">{faq.q}</h4>
              <p className="text-[var(--color-text-main)] opacity-60 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-soft border border-[var(--color-border)] rounded-[3rem] p-12 lg:p-24 text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-10 pointer-events-none" />
          <h2 className="text-3xl lg:text-5xl font-bold font-outfit text-[var(--color-text-main)]">Ready to Build Your <br /> <span className="text-gradient">Digital Success</span>?</h2>
          <p className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto leading-relaxed">
            Join 100+ businesses who have scaled their operations with our premium web development services in Rajkot, Gujarat.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-premium text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl">
            Get Started Now <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}

