import React from "react";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "The Future of Web Development in 2026",
    slug: "future-of-web-dev-2026",
    excerpt: "Explore the emerging trends and technologies that are shaping the web landscape.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    author: "Admin",
    date: "April 20, 2026",
    category: "Technology"
  },
  {
    title: "10 Tips for Improving Your Mobile App UX",
    slug: "tips-improving-mobile-ux",
    excerpt: "Small changes that can make a big difference in your app's user experience.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    author: "Admin",
    date: "April 15, 2026",
    category: "Design"
  },
  {
    title: "Why SEO is Still Critical for Small Businesses",
    slug: "why-seo-critical-small-business",
    excerpt: "How organic search can drive sustainable growth for your local brand.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    author: "Admin",
    date: "April 10, 2026",
    category: "Marketing"
  }
];

export const metadata = {
  title: "Our Blog | Insights & Trends in Technology",
  description: "Stay updated with the latest trends in web development, app development, and digital marketing.",
};

export default function BlogPage() {
  return (
    <div className="py-20 space-y-20">
      <section className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-electric font-bold tracking-widest text-sm uppercase">Latest Insights</h2>
        <h1 className="text-5xl lg:text-7xl font-bold font-outfit">
          Stay Ahead With Our <span className="text-gradient">Blog</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Expert opinions, tutorials, and trends from the world of technology and design.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {posts.map((post) => (
            <div key={post.slug} className="group glass-card rounded-[2.5rem] overflow-hidden border-white/5 flex flex-col md:flex-row gap-8 hover:border-electric/30 transition-all p-4">
              <div className="md:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center py-4 pr-6 space-y-4">
                <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-electric">
                   <span>{post.category}</span>
                </div>
                <h3 className="text-3xl font-bold font-outfit leading-tight group-hover:text-electric transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500 pt-2">
                   <div className="flex items-center gap-2">
                      <Calendar size={14} /> {post.date}
                   </div>
                   <div className="flex items-center gap-2">
                      <User size={14} /> {post.author}
                   </div>
                </div>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-white font-bold group/btn">
                   Read Full Article <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-10">
           <div className="glass-card p-8 rounded-3xl border-white/5">
              <div className="relative">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                 <input 
                   type="text" 
                   placeholder="Search articles..."
                   className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white outline-none focus:border-electric transition-all"
                 />
              </div>
           </div>

           <div className="glass-card p-8 rounded-3xl border-white/5">
              <h4 className="text-xl font-bold font-outfit mb-6">Categories</h4>
              <ul className="space-y-4">
                {["Technology", "Design", "Marketing", "Business", "Development"].map(cat => (
                  <li key={cat} className="flex justify-between items-center text-gray-400 hover:text-white cursor-pointer transition-colors group">
                     <span className="group-hover:translate-x-1 transition-transform">{cat}</span>
                     <span className="text-xs bg-white/5 px-2 py-1 rounded-md">12</span>
                  </li>
                ))}
              </ul>
           </div>

           <div className="glass-card p-8 rounded-[2.5rem] bg-gradient-to-br from-electric/20 to-accent/20 border-white/10 text-center">
              <h4 className="text-2xl font-bold font-outfit mb-4">Newsletter</h4>
              <p className="text-sm text-gray-300 mb-8">
                Subscribe to get the latest tech insights delivered straight to your inbox.
              </p>
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full bg-navy/50 border border-white/10 rounded-xl py-4 px-6 text-white mb-4 outline-none"
              />
              <button className="w-full py-4 bg-white text-navy font-bold rounded-xl hover:bg-gray-200 transition-all">
                Subscribe Now
              </button>
           </div>
        </aside>
      </section>
    </div>
  );
}
