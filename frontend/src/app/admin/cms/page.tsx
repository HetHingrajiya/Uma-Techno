"use client";

import React from "react";
import Link from "next/link";
import { FileText, Layers, Briefcase, MessageSquare, Plus, ArrowRight, Star } from "lucide-react";

export default function CMSDashboard() {
  const cmsSections = [
    {
      title: "Pages",
      description: "Manage dynamic pages like About, Contact, Privacy Policy.",
      icon: FileText,
      href: "/admin/cms/pages",
      count: 5
    },
    {
      title: "Services",
      description: "Add or edit services offered by Uma Techno.",
      icon: Layers,
      href: "/admin/cms/services",
      count: 12
    },
    {
      title: "Portfolio",
      description: "Showcase your best projects and case studies.",
      icon: Briefcase,
      href: "/admin/cms/portfolio",
      count: 8
    },
    {
      title: "Blogs",
      description: "Write and publish articles for SEO and content marketing.",
      icon: MessageSquare,
      href: "/admin/cms/blogs",
      count: 24
    },
    {
      title: "Testimonials",
      description: "Manage client reviews and ratings shown on the homepage.",
      icon: Star,
      href: "/admin/cms/testimonials",
      count: 15
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-[var(--color-navy-light)] p-4 md:p-6 rounded-2xl border border-[var(--color-border)]">
        <div>
          <h2 className="text-lg md:text-xl font-bold flex items-center gap-2"><FileText size={20} className="text-electric" /> Content Management System</h2>
          <p className="text-[var(--color-text-main)] opacity-70 text-sm mt-1">Manage all website content without writing code.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {cmsSections.map((section) => (
          <div key={section.title} className="bg-[var(--color-navy-light)] p-6 rounded-2xl border border-[var(--color-border)] hover:border-electric/50 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-electric/10 text-electric flex items-center justify-center group-hover:scale-110 transition-transform">
                <section.icon size={24} />
              </div>
              <div className="text-sm font-medium bg-white px-3 py-1 rounded-full text-[var(--color-text-main)] opacity-70 border border-[var(--color-border)]">
                {section.count} Total
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2 text-[var(--color-text-main)]">{section.title}</h3>
            <p className="text-[var(--color-text-main)] opacity-70 text-sm mb-6 h-10">{section.description}</p>
            
            <div className="flex gap-3">
              <Link 
                href={section.href}
                className="flex-1 bg-white border border-[var(--color-border)] hover:border-electric text-[var(--color-text-main)] py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-colors"
              >
                Manage <ArrowRight size={16} className="hover-arrow" />
              </Link>
              <button className="px-4 bg-electric/20 hover:bg-electric text-electric hover:text-white rounded-lg flex items-center justify-center transition-all">
                <Plus size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
