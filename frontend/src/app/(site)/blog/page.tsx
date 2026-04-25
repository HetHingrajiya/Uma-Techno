"use client";

import React, { useState } from "react";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "How Premium Web Design Drives Business Growth in 2026",
    excerpt: "Discover why a high-end digital presence is no longer optional for businesses looking to scale in the modern economy.",
    date: "April 24, 2026",
    author: "Admin",
    category: "Design",
    image: "/images/project-1.png",
    slug: "web-design-growth"
  },
  {
    title: "The Importance of Technical SEO for Local Businesses in Rajkot",
    excerpt: "Learn how to optimize your local presence and dominate search results in Gujarat's competitive market.",
    date: "April 22, 2026",
    author: "Admin",
    category: "SEO",
    image: "/images/project-2.png",
    slug: "local-seo-rajkot"
  },
  {
    title: "Building Scalable Mobile Apps with Next.js and Tailwind CSS",
    excerpt: "A deep dive into the tech stack that powers the world's most successful startups and enterprises.",
    date: "April 20, 2026",
    author: "Admin",
    category: "Development",
    image: "/images/project-3.png",
    slug: "scalable-mobile-apps"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[var(--background)] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/20 text-[var(--color-electric)] text-xs font-bold uppercase tracking-wider">
            Insights & News
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold font-outfit text-[var(--color-text-main)]">
            Our <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto text-lg">
            Expert perspectives on technology, design, and digital strategy to help you stay ahead of the curve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post, i) => (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={post.slug}
              className="card-premium group flex flex-col bg-white overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[var(--color-electric)] text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-[var(--color-text-main)] opacity-50 font-bold">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} /> {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} /> {post.author}
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold font-outfit text-[var(--color-text-main)] group-hover:text-[var(--color-electric)] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-[var(--color-text-main)] opacity-60 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-2 text-[var(--color-electric)] font-bold text-sm tracking-widest uppercase mt-6 group/link"
                >
                  Read Article <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
