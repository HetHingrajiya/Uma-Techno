"use client";

import React, { useState, useEffect } from "react";
import { Search, Globe, Plus, Edit2, Trash2 } from "lucide-react";

export default function SEODashboard() {
  const [seoPages, setSeoPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSEO = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/v1/seo`);
        if (res.ok) {
          const data = await res.json();
          setSeoPages(data);
        }
      } catch (err) {
        console.error("Failed to fetch SEO pages", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSEO();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-[var(--color-navy-light)] p-6 rounded-2xl border border-[var(--color-border)]">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2"><Globe size={20} className="text-electric" /> SEO Manager</h2>
          <p className="text-[var(--color-text-main)] opacity-70 text-sm mt-1">Manage titles, meta descriptions, and keywords to rank higher on Google.</p>
        </div>
        <button className="flex items-center gap-2 bg-electric text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-electric/90 transition-colors">
          <Plus size={16} /> Add SEO Page
        </button>
      </div>

      <div className="bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-[var(--color-border)] flex gap-4 bg-[var(--color-navy)]">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search by path..." 
              className="w-full bg-transparent border border-[var(--color-border)] rounded-lg pl-10 pr-4 py-2 text-sm text-[var(--color-text-main)] focus:outline-none focus:border-electric"
            />
          </div>
        </div>

        <div className="p-0">
          {loading ? (
            <div className="p-8 text-center text-[var(--color-text-main)] opacity-50">Loading SEO data...</div>
          ) : seoPages.length === 0 ? (
            <div className="p-12 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-[var(--color-navy)] rounded-full flex items-center justify-center mb-4">
                <Globe size={24} className="text-[var(--color-text-main)] opacity-30" />
              </div>
              <h4 className="text-lg font-bold text-[var(--color-text-main)] mb-2">No SEO pages configured</h4>
              <p className="text-[var(--color-text-main)] opacity-60 max-w-sm">Start adding metadata for your specific routes (e.g., '/', '/about', '/website-development-rajkot').</p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[var(--color-navy)] border-b border-[var(--color-border)]">
                  <th className="p-4 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-wider opacity-60">Path</th>
                  <th className="p-4 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-wider opacity-60">Meta Title</th>
                  <th className="p-4 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-wider opacity-60">Description</th>
                  <th className="p-4 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-wider opacity-60 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {seoPages.map((page) => (
                  <tr key={page.id} className="border-b border-[var(--color-border)] hover:bg-[var(--color-navy)]/50 transition-colors">
                    <td className="p-4 font-bold text-[var(--color-text-main)]">
                      <span className="bg-[var(--color-navy)] px-2 py-1 rounded border border-[var(--color-border)] text-sm">{page.path}</span>
                    </td>
                    <td className="p-4">
                      <p className="text-sm font-bold text-[var(--color-text-main)] max-w-xs truncate" title={page.title}>{page.title}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-[var(--color-text-main)] opacity-70 max-w-md truncate" title={page.description}>{page.description}</p>
                    </td>
                    <td className="p-4 text-right flex justify-end gap-2">
                      <button className="w-8 h-8 rounded bg-[var(--color-navy)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:text-electric transition-colors">
                        <Edit2 size={14} />
                      </button>
                      <button className="w-8 h-8 rounded bg-[var(--color-navy)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:text-red-500 transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
