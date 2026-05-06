import { BarChart, Search, Target, TrendingUp, Globe, CheckCircle, ArrowRight, MousePointer2, Megaphone } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services in Rajkot | Best SEO Agency in Gujarat",
  description: "Boost your search rankings with the top SEO services in Rajkot. Uma Techno offers technical SEO, content strategy, and local SEO to dominate Google search results.",
  keywords: ["SEO Services in Rajkot", "SEO Agency Rajkot", "Search Engine Optimization Gujarat", "Local SEO Rajkot"],
  alternates: {
    canonical: "https://umatechno.in/seo-services",
  },
  openGraph: {
    title: "SEO Services in Rajkot | Uma Techno",
    description: "Dominate Google search results with our technical and local SEO strategies in Rajkot.",
    images: ["/images/blog-2.png"],
  },
};

const seoFeatures = [
  { title: "Technical SEO Audit", desc: "In-depth analysis of your website's architecture, speed, and mobile-friendliness to ensure search engines can crawl and index your site effectively.", icon: Search },
  { title: "Keyword Strategy", desc: "Finding the most profitable keywords for your business and mapping them to high-converting landing pages.", icon: Target },
  { title: "On-Page Optimization", desc: "Optimizing titles, meta descriptions, headings, and content to match search intent and improve relevance.", icon: MousePointer2 },
  { title: "Local SEO Dominance", desc: "Optimizing your Google Business Profile and local citations to rank for 'near me' searches in Rajkot.", icon: Globe },
  { title: "Content Marketing", desc: "Creating high-quality, authoritative content that attracts backlinks and establishes your brand as an industry leader.", icon: Megaphone },
  { title: "Analytics & Reporting", desc: "Comprehensive monthly reports tracking your rankings, traffic growth, and conversion metrics.", icon: TrendingUp },
];

const faqs = [
  { q: "How long does it take to see SEO results?", a: "SEO is a long-term strategy. Typically, you'll start seeing noticeable improvements in 3-6 months, with significant growth after 12 months." },
  { q: "Do you guarantee #1 rankings?", a: "No ethical SEO agency can guarantee #1 rankings as search algorithms change constantly. However, we guarantee a significant increase in organic traffic and visibility." },
  { q: "What is Local SEO?", a: "Local SEO focuses on optimizing your presence for local search results. It's crucial for businesses in Rajkot to attract customers in their physical vicinity." },
  { q: "Is SEO better than paid ads (PPC)?", a: "Both have their place. PPC provides instant results, while SEO builds long-term sustainable growth with a lower cost-per-lead over time." },
];

export default function SeoServicesPage() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services in Rajkot",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Uma Techno"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156"
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
        "name": "SEO Services",
        "item": "https://umatechno.in/seo-services"
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
              Dominate Search in Rajkot
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold font-outfit leading-tight text-[var(--color-text-main)]">
              Results-Driven <span className="text-gradient">SEO Services</span> in Rajkot
            </h1>
            <p className="text-xl text-[var(--color-text-main)] opacity-70 leading-relaxed max-w-xl">
              Stop hiding on the second page of Google. Our expert SEO strategies are designed to skyrocket your organic traffic and turn searchers into loyal customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-premium text-white rounded-xl font-bold text-base transition-all hover:scale-105 shadow-xl">
                Get Your Free SEO Audit
              </Link>
              <Link href="/portfolio" className="px-8 py-4 bg-transparent border border-[var(--color-border)] text-[var(--color-text-main)] hover:bg-[var(--color-navy-light)] rounded-xl font-bold text-base transition-all">
                Our Success Stories
              </Link>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square glass-card rounded-[3rem] bg-gradient-soft/50 border border-[var(--color-border)] flex items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glow opacity-20 animate-pulse" />
                <BarChart size={180} className="text-[var(--color-electric)] animate-float-complex" />
             </div>
             <div className="absolute -top-10 -left-10 w-48 h-48 bg-[var(--color-electric)]/20 blur-[100px] rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content / SEO Section */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit text-[var(--color-text-main)]">Why SEO is the Backbone of Your Digital Marketing</h2>
            <div className="prose prose-invert max-w-none text-[var(--color-text-main)] opacity-80 space-y-6 leading-relaxed">
              <p>
                In the competitive business landscape of <strong>Rajkot</strong>, being visible where your customers are searching is critical. Every day, thousands of people in Gujarat use Google to find products and services just like yours. If your business isn&apos;t appearing at the top of these search results, you are essentially handing your leads over to your competitors.
              </p>
              <p>
                Uma Techno is more than just an <strong>SEO Agency in Rajkot</strong>. We are your partners in growth. Our approach to Search Engine Optimization is data-driven, transparent, and focused on ROI. We don&apos;t just chase rankings; we chase traffic that converts. If you don't have a high-performance site yet, check our <Link href="/web-development" className="text-[var(--color-electric)] hover:underline font-bold">Web Development services</Link>.
              </p>
              <h3 className="text-2xl font-bold font-outfit text-[var(--color-text-main)] mt-8">Our Comprehensive SEO Methodology</h3>
              <p>
                Success in search engines requires a multi-faceted approach. We start with a deep-dive technical audit to ensure your website is built on a solid foundation. From there, we move to high-impact keyword research and on-page optimization. But we don&apos;t stop there. We also help you build authority through high-quality backlink acquisition and localized content strategies.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 list-none p-0">
                {[
                  "Technical SEO Infrastructure",
                  "Strategic Keyword Research",
                  "Authority Building (Backlinks)",
                  "Local SEO for Rajkot Market",
                  "High-Converting Content Creation",
                  "Transparent Performance Reporting"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-center">
                    <CheckCircle size={16} className="text-[var(--color-electric)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                We stay ahead of the curve by constantly monitoring Google algorithm updates. Whether it&apos;s a core update or a shift in user behavior, our team adapts your strategy to ensure you maintain and grow your rankings over time.
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid sm:grid-cols-2 gap-6 pt-12">
            {seoFeatures.map((feature, i) => (
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
            <h4 className="text-2xl font-bold font-outfit mb-4">Rank Higher Now</h4>
            <p className="opacity-90 mb-8 text-sm leading-relaxed">
              Get a comprehensive SEO audit of your website worth $299 for free. No obligations.
            </p>
            <Link href="/contact" className="w-full py-4 bg-white text-[var(--color-electric)] rounded-xl font-bold text-center block hover:scale-105 transition-all">
              Claim Free Audit
            </Link>
          </div>

          <div className="glass-card p-8 rounded-[2rem] border border-[var(--color-border)] space-y-6">
            <h4 className="text-xl font-bold font-outfit text-[var(--color-text-main)]">SEO Core Focus</h4>
            <div className="flex flex-wrap gap-2">
              {["ROI Driven", "Ethical White-Hat", "Local Dominance", "Content-First", "Technical Mastery", "Transparency"].map(focus => (
                <span key={focus} className="px-3 py-1 bg-[var(--color-electric)]/10 text-[var(--color-electric)] rounded-full text-xs font-bold">{focus}</span>
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
          <h2 className="text-3xl lg:text-5xl font-bold font-outfit text-[var(--color-text-main)]">Ready to Dominate <br /> <span className="text-gradient">Google Search</span>?</h2>
          <p className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto leading-relaxed">
            Partner with the most trusted SEO agency in Rajkot and start outranking your competitors today.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-premium text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl">
            Skyrocket My Traffic <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}
