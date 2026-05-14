import React from "react";
import { Link } from "react-router-dom";
;
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

/**
 * SEO Metadata: 
 * Ensures the blog page is correctly indexed with descriptive titles and canonical links.
 */
// // 
/**
 * Blog Post Data:
 * Static collection of articles. In a production environment, this would 
 * typically be fetched from a headless CMS or database.
 */
const posts = [
  {
    title: "Best Web Development Company in Rajkot: How to Choose?",
    excerpt: "Discover what makes a web development company stand out in Rajkot and how to choose the right partner for your digital success.",
    date: "May 5, 2026",
    author: "Uma Team",
    readTime: "8 min read",
    image: "/images/blog-1-v2.png",
    slug: "best-web-development-company-rajkot"
  },
  {
    title: "SEO Services Guide for Local Businesses in Gujarat",
    excerpt: "Learn the secrets of local SEO and how to dominate search results in Rajkot, Ahmedabad, and beyond.",
    date: "May 3, 2026",
    author: "SEO Expert",
    readTime: "12 min read",
    image: "/images/blog-2.png",
    slug: "seo-services-guide-local-business"
  },
  {
    title: "Website Cost in India 2026: A Comprehensive Breakdown",
    excerpt: "How much does a website really cost in 2026? We break down the pricing for startups, SMEs, and enterprises.",
    date: "April 28, 2026",
    author: "Uma Team",
    readTime: "10 min read",
    image: "/images/blog-3.png",
    slug: "website-cost-india-2026"
  },
  {
    title: "Why Your Business Needs a Website in the AI Era",
    excerpt: "In 2026, a website is more than just a digital brochure. Discover why your business needs a robust digital presence now more than ever.",
    date: "April 25, 2026",
    author: "Tech Analyst",
    readTime: "7 min read",
    image: "/images/blog-4.png",
    slug: "why-business-needs-website"
  },
  {
    title: "Digital Marketing Tips for 2026: Gujarat Market Trends",
    excerpt: "Stay ahead with these digital marketing strategies specifically tailored for the unique business landscape of Gujarat.",
    date: "April 20, 2026",
    author: "Marketing Strategist",
    readTime: "15 min read",
    image: "/images/blog-5.png",
    slug: "digital-marketing-tips-2026"
  }
];

/**
 * BlogPage Component:
 * Displays a grid of insights and technical articles for local businesses in Gujarat.
 */
export default function BlogPage() {
  return (
    <div className="pt-32 lg:pt-48 pb-32 bg-[var(--background)] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header section with page title and description */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/20 text-[var(--color-electric)] text-xs font-bold uppercase tracking-wider">
            Our Insights
          </div>
          <h1 className="text-4xl lg:text-7xl font-bold font-outfit text-[var(--color-text-main)]">
            The <span className="text-gradient">Tech & Growth</span> Blog
          </h1>
          <p className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto text-lg">
            Stay updated with the latest trends in web engineering, search algorithms, and conversion psychology.
          </p>
        </div>

        {/* 
            Post Grid:
            Maps through the posts array to display interactive blog cards.
        */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link 
              key={i} 
              to={`/blog/${post.slug}`}
              className="group flex flex-col bg-[var(--color-card)] border border-[var(--color-border)] rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              {/* Thumbnail Area with hover zoom effect */}
              <div className="aspect-[16/10] relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--color-electric)]/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="object-cover group-hover:scale-110 transition-all duration-700" 
                />
              </div>
              
              {/* Content Area */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-[var(--color-text-main)] opacity-50 uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold font-outfit text-[var(--color-text-main)] group-hover:text-[var(--color-electric)] transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[var(--color-text-main)] opacity-60 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-[var(--color-electric)] uppercase tracking-wider group-hover:gap-4 transition-all">
                  Read Article <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

