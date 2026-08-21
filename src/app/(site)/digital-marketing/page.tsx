import { Megaphone, Users, Share2, Mail, Layout, TrendingUp, CheckCircle, ArrowRight, MousePointer2, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
// // 
const marketingFeatures = [
  { title: "Social Media Marketing", desc: "Building a powerful brand presence across Instagram, Facebook, and LinkedIn to engage your target audience in Rajkot.", icon: Share2 },
  { title: "Pay-Per-Click (PPC)", desc: "High-ROI Google Ads and Meta Ads campaigns designed to generate instant leads and sales for your business.", icon: MousePointer2 },
  { title: "Content Marketing", desc: "Crafting compelling stories and educational content that builds trust and authority for your brand.", icon: Layout },
  { title: "Email Marketing", desc: "Nurturing leads and retaining customers through automated, personalized email sequences.", icon: Mail },
  { title: "Lead Generation", desc: "End-to-end strategies focused on capturing high-quality inquiries that convert into revenue.", icon: Users },
  { title: "Conversion Rate Optimization", desc: "Fine-tuning your digital assets to ensure every click has the highest chance of becoming a customer.", icon: TrendingUp },
];

const faqs = [
  { q: "Which social media platform is best for my business?", a: "This depends on your target audience. For B2B, LinkedIn is often best. For B2C, Instagram and Facebook usually yield higher engagement." },
  { q: "Do you handle ad creative and copywriting?", a: "Yes, our team includes professional designers and copywriters who create high-converting ad assets from scratch." },
  { q: "How do you measure success in digital marketing?", a: "We focus on real business metrics like Cost Per Lead (CPL), Return on Ad Spend (ROAS), and total conversion volume." },
  { q: "Can digital marketing work for local businesses in Rajkot?", a: "Absolutely. In fact, local businesses often see the highest ROI because they can target specific neighborhoods and 'near me' searches." },
];

export default function DigitalMarketingPage() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing in Rajkot",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Uma Techno"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "92"
    }
  };

  const jsonLd = {
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
        "name": "Digital Marketing",
        "item": "https://umatechno.in/digital-marketing"
      }
    ]
  };

  return (
    <div className="flex flex-col gap-20 lg:gap-32 pb-32 bg-[var(--background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
              Accelerate Growth in Gujarat
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold font-outfit leading-tight text-[var(--color-text-main)]">
              Full-Stack <span className="text-gradient">Digital Marketing</span> in Rajkot
            </h1>
            <p className="text-xl text-[var(--color-text-main)] opacity-70 leading-relaxed max-w-xl">
              We combine creative storytelling with data-driven strategy to build brands that dominate their markets. Scale your revenue with the most innovative agency in Rajkot.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-gradient-premium text-white rounded-xl font-bold text-base transition-all hover:scale-105 shadow-xl">
                Get a Strategy Session
              </Link>
              <Link to="/portfolio" className="px-8 py-4 bg-transparent border border-[var(--color-border)] text-[var(--color-text-main)] hover:bg-[var(--color-navy-light)] rounded-xl font-bold text-base transition-all">
                View Marketing Results
              </Link>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square glass-card rounded-[3rem] bg-gradient-soft/50 border border-[var(--color-border)] flex items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glow opacity-20 animate-pulse" />
                <Megaphone size={180} className="text-[var(--color-electric)] animate-float-complex" />
             </div>
             <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[var(--color-electric)]/20 blur-[100px] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content / SEO Section */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit text-[var(--color-text-main)]">Beyond Just Likes and Shares: Marketing for ROI</h2>
            <div className="prose prose-invert max-w-none text-[var(--color-text-main)] opacity-80 space-y-6 leading-relaxed">
              <p>
                Many agencies focus on "vanity metrics" like followers and likes. At Uma Techno, the premier <strong>Digital Marketing Agency in Rajkot</strong>, we focus on what really matters: your bottom line. We believe that digital marketing should be a predictable revenue generator for your business, not just an expense. Our strategy is deeply integrated with our <Link to="/seo-services" className="text-[var(--color-electric)] hover:underline font-bold">SEO expertise</Link> to provide a holistic growth plan.
              </p>
              <p>
                Our team in Gujarat stays on the cutting edge of digital trends, from the latest Meta Ads algorithm shifts to the rise of AI-driven marketing automation. We use these tools to give your business a competitive edge in the local and national markets.
              </p>
              <h3 className="text-2xl font-bold font-outfit text-[var(--color-text-main)] mt-8">Tailored Strategies for the Rajkot Market</h3>
              <p>
                Rajkot has a unique business ecosystem, with a mix of traditional manufacturing and modern startups. Our marketing strategies are specifically tailored to resonate with this local audience while maintaining global quality standards. Whether you want to reach local customers in Kalawad Road or expand your reach across India, we have the expertise to make it happen.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 list-none p-0">
                {[
                  "Multi-Channel Growth Strategies",
                  "High-Converting Ad Creatives",
                  "Precision Audience Targeting",
                  "Lead Nurturing Automation",
                  "Brand Storytelling & Identity",
                  "Real-Time Analytics Dashboard"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-center">
                    <CheckCircle size={16} className="text-[var(--color-electric)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                We don&apos;t just set it and forget it. We continuously test and optimize your campaigns to ensure your cost-per-lead keeps decreasing while your conversion volume increases. This iterative process is what sets us apart as the top choice for digital marketing in Rajkot.
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid sm:grid-cols-2 gap-6 pt-12">
            {marketingFeatures.map((feature, i) => (
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
            <h4 className="text-2xl font-bold font-outfit mb-4">Start Growing</h4>
            <p className="opacity-90 mb-8 text-sm leading-relaxed">
              Let&apos;s build a custom growth roadmap for your business. Book your free strategy call today.
            </p>
            <Link to="/contact" className="w-full py-4 bg-white text-[var(--color-electric)] rounded-xl font-bold text-center block hover:scale-105 transition-all">
              Book Strategy Call
            </Link>
          </div>

          <div className="glass-card p-8 rounded-[2rem] border border-[var(--color-border)] space-y-6">
            <h4 className="text-xl font-bold font-outfit text-[var(--color-text-main)]">Marketing Pillars</h4>
            <div className="flex flex-wrap gap-2">
              {["Data-Driven", "Creative Excellence", "Targeted Growth", "Scalable Systems", "ROI Focused", "Agile Testing"].map(pillar => (
                <span key={pillar} className="px-3 py-1 bg-[var(--color-electric)]/10 text-[var(--color-electric)] rounded-full text-xs font-bold">{pillar}</span>
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
          <h2 className="text-3xl lg:text-5xl font-bold font-outfit text-[var(--color-text-main)]">Transform Your <span className="text-gradient">Digital Presence</span></h2>
          <p className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto leading-relaxed">
            Stop settling for mediocre marketing. Partner with the experts and watch your business reach new heights in the digital age.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-premium text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl">
            Let&apos;s Scale Together <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}

