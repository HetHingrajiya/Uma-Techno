"use client";
import React, { useState, useEffect } from "react";
import { Search, Globe, Plus, Edit2, Trash2, X, Loader2, Check, Layout, Tag, FileText, ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SEODashboard() {
  const [seoPages, setSeoPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentSEO, setCurrentSEO] = useState<any>(null);
  const [formData, setFormData] = useState({
    pagePath: "",
    title: "",
    description: "",
    keywords: [] as string[],
    ogImage: "",
  });

  useEffect(() => {
    fetchSEO();
  }, []);

  const fetchSEO = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/seo`);
      if (res.ok) {
        const data = await res.json();
        setSeoPages(Array.isArray(data) ? data : data.data || []);
      }
    } catch (err) {
      console.error("Failed to fetch SEO pages", err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (seo: any = null) => {
    if (seo) {
      setCurrentSEO(seo);
      setFormData({
        pagePath: seo.pagePath,
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords || [],
        ogImage: seo.ogImage || "",
      });
    } else {
      setCurrentSEO(null);
      setFormData({
        pagePath: "/",
        title: "",
        description: "",
        keywords: [],
        ogImage: "",
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/seo`, {
        method: "POST", // Controller handles upsert
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsModalOpen(false);
        fetchSEO();
      } else {
        const err = await res.json();
        alert(err.message || "Failed to save SEO metadata");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this SEO configuration?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/seo/${id}`, {
        method: "DELETE"
      });
      if (res.ok) {
        fetchSEO();
      }
    } catch (err) {
      alert("Failed to delete SEO metadata");
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-[var(--color-navy-light)] p-6 rounded-2xl border border-[var(--color-border)] shadow-sm">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--color-text-main)]"><Globe size={20} className="text-electric" /> SEO Manager</h2>
          <p className="text-[var(--color-text-main)] opacity-70 text-sm mt-1">Manage titles, meta descriptions, and keywords to rank higher on Google.</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="flex items-center justify-center gap-2 bg-electric text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-electric/90 transition-all shadow-lg hover:shadow-electric/20 w-full sm:w-auto"
        >
          <Plus size={18} /> Add SEO Page
        </button>
      </div>

      <div className="bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-[var(--color-border)] flex gap-4 bg-[var(--color-navy)]/30">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search by path..."
              className="w-full bg-transparent border border-[var(--color-border)] rounded-lg pl-10 pr-4 py-2 text-sm text-[var(--color-text-main)] focus:outline-none focus:border-electric transition-colors"
            />
          </div>
        </div>

        <div className="p-0 overflow-x-auto">
          {loading ? (
            <div className="p-20 text-center flex flex-col items-center gap-4">
              <Loader2 className="animate-spin text-electric" size={32} />
              <p className="text-[var(--color-text-main)] opacity-50 font-medium">Fetching SEO data...</p>
            </div>
          ) : seoPages.length === 0 ? (
            <div className="p-20 text-center flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-[var(--color-navy)] rounded-3xl flex items-center justify-center mb-6 border border-[var(--color-border)]">
                <Globe size={32} className="text-[var(--color-text-main)] opacity-20" />
              </div>
              <h4 className="text-xl font-bold text-[var(--color-text-main)] mb-2">No SEO records</h4>
              <p className="text-[var(--color-text-main)] opacity-60 max-w-sm mb-8">Start adding metadata for your specific routes to improve search engine visibility.</p>
              <button 
                onClick={() => handleOpenModal()}
                className="bg-electric/10 text-electric px-6 py-3 rounded-xl font-bold text-sm hover:bg-electric hover:text-white transition-all"
              >
                Configure Your First Page
              </button>
            </div>
          ) : (
            <div className="min-w-[800px]">
              <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[var(--color-navy)]/30 border-b border-[var(--color-border)]">
                  <th className="p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40">Route Path</th>
                  <th className="p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40">Meta Title</th>
                  <th className="p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40">Description Preview</th>
                  <th className="p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {seoPages.map((page) => (
                  <tr key={page.id} className="border-b border-[var(--color-border)] hover:bg-[var(--color-navy)]/40 transition-colors group">
                    <td className="p-6">
                      <span className="bg-[var(--color-navy)] px-3 py-1.5 rounded-lg border border-[var(--color-border)] text-xs font-mono font-bold text-electric">
                        {page.pagePath}
                      </span>
                    </td>
                    <td className="p-6">
                      <p className="text-sm font-bold text-[var(--color-text-main)] group-hover:text-electric transition-colors max-w-xs truncate" title={page.title}>{page.title}</p>
                    </td>
                    <td className="p-6">
                      <p className="text-sm text-[var(--color-text-main)] opacity-60 max-w-md truncate" title={page.description}>{page.description}</p>
                    </td>
                    <td className="p-6 text-right">
                      <div className="flex justify-end gap-3">
                        <button 
                          onClick={() => handleOpenModal(page)}
                          className="w-10 h-10 rounded-xl bg-[var(--color-navy)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:text-electric transition-all"
                          title="Edit SEO"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button 
                          onClick={() => handleDelete(page.id)}
                          className="w-10 h-10 rounded-xl bg-[var(--color-navy)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:text-red-500 transition-all"
                          title="Delete SEO"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          )}
        </div>
      </div>

      {/* SEO Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl md:rounded-[3rem] shadow-2xl border border-[var(--color-border)] max-h-[90vh] flex flex-col"
            >
              <div className="p-6 md:p-10 border-b border-[var(--color-border)] flex justify-between items-center bg-slate-50/50 rounded-t-[3rem]">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-outfit text-slate-900">
                    {currentSEO ? "Edit SEO Page" : "Add SEO Page"}
                  </h2>
                  <p className="text-sm text-slate-500 mt-1 font-medium">Optimize your visibility for search engines.</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-all shadow-sm"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 md:p-10 space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Layout size={14} className="text-electric" /> Page Route (Path)
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.pagePath}
                    onChange={(e) => setFormData({...formData, pagePath: e.target.value})}
                    placeholder="e.g. /about or /services/web-development"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-bold text-slate-900 font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Tag size={14} className="text-electric" /> Meta Title (Max 60 chars)
                  </label>
                  <input 
                    type="text" 
                    required
                    maxLength={60}
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="Premium Web Development Rajkot | Uma Techno"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-bold text-slate-900"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <FileText size={14} className="text-electric" /> Meta Description (Max 160 chars)
                  </label>
                  <textarea 
                    required
                    maxLength={160}
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Best digital agency in Rajkot providing high-performance websites..."
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-medium text-slate-700 resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <ImageIcon size={14} className="text-electric" /> OG Image URL
                  </label>
                  <input 
                    type="text" 
                    value={formData.ogImage}
                    onChange={(e) => setFormData({...formData, ogImage: e.target.value})}
                    placeholder="https://example.com/og-image.png"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-mono text-xs text-slate-500"
                  />
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                  <button 
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-4 text-slate-500 font-bold hover:text-slate-900 transition-colors text-sm"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    disabled={isProcessing}
                    className="flex-[2] bg-electric hover:bg-electric/90 text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl hover:shadow-electric/30 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                  >
                    {isProcessing ? <Loader2 size={20} className="animate-spin" /> : <Check size={20} />}
                    {currentSEO ? "Update Metadata" : "Save Metadata"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
