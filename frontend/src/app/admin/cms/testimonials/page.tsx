"use client";
import React, { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, ArrowLeft, X, Loader2, Check, Star, User, MessageSquare, Building2, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    content: "",
    rating: 5,
    image: "",
    active: true,
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/testimonials?all=true`);
      if (res.ok) {
        const data = await res.json();
        setTestimonials(data);
      }
    } catch (err) {
      console.error("Failed to fetch testimonials", err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (t: any = null) => {
    if (t) {
      setCurrentTestimonial(t);
      setFormData({
        name: t.name,
        role: t.role,
        company: t.company || "",
        content: t.content,
        rating: t.rating || 5,
        image: t.image || "",
        active: t.active,
      });
    } else {
      setCurrentTestimonial(null);
      setFormData({
        name: "",
        role: "",
        company: "",
        content: "",
        rating: 5,
        image: "",
        active: true,
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      const url = currentTestimonial 
        ? `${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/testimonials/${currentTestimonial.id}`
        : `${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/testimonials`;
      
      const res = await fetch(url, {
        method: currentTestimonial ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsModalOpen(false);
        fetchTestimonials();
      } else {
        const err = await res.json();
        alert(err.message || "Failed to save testimonial");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/testimonials/${id}`, {
        method: "DELETE"
      });
      if (res.ok) {
        fetchTestimonials();
      }
    } catch (err) {
      alert("Failed to delete testimonial");
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <Link href="/admin/cms" className="w-10 h-10 bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-xl flex items-center justify-center text-[var(--color-text-main)] hover:text-electric transition-colors shrink-0">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-main)]">Manage Testimonials</h2>
          <p className="text-sm text-[var(--color-text-main)] opacity-60">Display proof of your excellence to build trust.</p>
        </div>
      </div>

      <div className="bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h3 className="font-bold text-[var(--color-text-main)]">Client Reviews ({testimonials.length})</h3>
          <button 
            onClick={() => handleOpenModal()}
            className="flex items-center justify-center gap-2 bg-electric text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-electric/90 transition-all shadow-lg hover:shadow-electric/20 w-full sm:w-auto"
          >
            <Plus size={18} /> Add New Review
          </button>
        </div>

        <div className="p-0 overflow-x-auto">
          {loading ? (
            <div className="p-20 text-center flex flex-col items-center gap-4">
              <Loader2 className="animate-spin text-electric" size={32} />
              <p className="text-[var(--color-text-main)] opacity-50 font-medium">Fetching testimonials...</p>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="p-20 text-center flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-[var(--color-navy-light)] rounded-3xl flex items-center justify-center mb-6 border border-[var(--color-border)]">
                <Star size={32} className="text-[var(--color-text-main)] opacity-20" />
              </div>
              <h4 className="text-xl font-bold text-[var(--color-text-main)] mb-2">No testimonials yet</h4>
              <p className="text-[var(--color-text-main)] opacity-60 max-w-sm mb-8">You haven&apos;t added any client feedback yet. Click the button above to feature your first review.</p>
              <button 
                onClick={() => handleOpenModal()}
                className="bg-electric/10 text-electric px-6 py-3 rounded-xl font-bold text-sm hover:bg-electric hover:text-white transition-all"
              >
                Add Your First Testimonial
              </button>
            </div>
          ) : (
            <div className="min-w-[800px]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[var(--color-navy-light)] border-b border-[var(--color-border)]">
                    <th className="p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40">Client Info</th>
                    <th className="p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40">Review Content</th>
                    <th className="p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40">Status</th>
                    <th className="p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {testimonials.map((t) => (
                    <tr key={t.id} className="border-b border-[var(--color-border)] hover:bg-[var(--color-navy)]/40 transition-colors group">
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-slate-200 overflow-hidden flex items-center justify-center border border-[var(--color-border)]">
                            {t.image ? (
                                <img src={t.image} alt="" className="w-full h-full object-cover" />
                            ) : (
                                <User size={20} className="opacity-30" />
                            )}
                          </div>
                          <div>
                            <span className="font-bold text-[var(--color-text-main)] group-hover:text-electric transition-colors block">{t.name}</span>
                            <span className="text-xs opacity-50">{t.role}{t.company ? ` at ${t.company}` : ''}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex gap-0.5 mb-2">
                           {Array.from({length: t.rating}).map((_, i) => <Star key={i} size={12} className="text-amber-400 fill-amber-400" />)}
                        </div>
                        <p className="text-sm text-[var(--color-text-main)] opacity-70 max-w-xs line-clamp-2 italic">&quot;{t.content}&quot;</p>
                      </td>
                      <td className="p-6">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${t.active ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                            {t.active ? 'Visible' : 'Hidden'}
                        </span>
                      </td>
                      <td className="p-6 text-right">
                        <div className="flex justify-end gap-3">
                          <button 
                            onClick={() => handleOpenModal(t)}
                            className="w-10 h-10 rounded-xl bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:text-electric transition-all"
                            title="Edit Review"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button 
                            onClick={() => handleDelete(t.id)}
                            className="w-10 h-10 rounded-xl bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:text-red-500 transition-all"
                            title="Delete Review"
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

      {/* Responsive Form Modal */}
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
              className="relative w-full max-w-2xl bg-[var(--color-card)] rounded-3xl md:rounded-[3rem] shadow-2xl border border-[var(--color-border)] max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 md:p-10 border-b border-[var(--color-border)] flex justify-between items-center bg-[var(--color-navy-light)]/50 rounded-t-[3rem]">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-outfit text-[var(--color-text-main)]">
                    {currentTestimonial ? "Edit Review" : "Add Review"}
                  </h2>
                  <p className="text-sm text-[var(--color-text-main)] opacity-60 mt-1 font-medium">Feature your best client success stories.</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="w-12 h-12 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center text-slate-400 hover:text-[var(--color-text-main)] transition-all shadow-sm"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body / Form */}
              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 md:p-10 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <User size={14} className="text-electric" /> Client Name
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. John Doe"
                        className="w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-bold text-[var(--color-text-main)] transition-colors"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Building2 size={14} className="text-electric" /> Designation / Company
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                        placeholder="e.g. CEO, Tech Innovators"
                        className="w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-bold text-[var(--color-text-main)] transition-colors"
                      />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Star size={14} className="text-electric" /> Rating
                    </label>
                    <div className="flex gap-4 items-center bg-[var(--color-navy-light)] p-4 rounded-2xl border border-[var(--color-border)]">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <button 
                                key={s}
                                type="button"
                                onClick={() => setFormData({...formData, rating: s})}
                                className={`transition-all ${formData.rating >= s ? 'scale-125' : 'opacity-30'}`}
                            >
                                <Star size={24} className={`${formData.rating >= s ? 'text-amber-400 fill-amber-400' : 'text-slate-400'}`} />
                            </button>
                        ))}
                        <span className="ml-auto font-black text-[var(--color-text-main)]">{formData.rating} Stars</span>
                    </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <MessageSquare size={14} className="text-electric" /> Review Content
                  </label>
                  <textarea 
                    required
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    placeholder="What did they say about your work?"
                    rows={4}
                    className="w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-medium text-slate-700 resize-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <ImageIcon size={14} className="text-electric" /> Client Photo URL (Optional)
                  </label>
                  <input 
                    type="text" 
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    placeholder="https://example.com/photo.jpg"
                    className="w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-mono text-xs text-[var(--color-text-main)] opacity-60"
                  />
                </div>

                <div className="flex items-center gap-3 p-4 bg-[var(--color-navy-light)] rounded-2xl border border-[var(--color-border)]">
                    <input 
                        type="checkbox" 
                        id="active"
                        checked={formData.active}
                        onChange={(e) => setFormData({...formData, active: e.target.checked})}
                        className="w-5 h-5 accent-electric"
                    />
                    <label htmlFor="active" className="text-sm font-bold text-[var(--color-text-main)] cursor-pointer">Show this testimonial on the website</label>
                </div>

                {/* Submit Area */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                  <button 
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-4 text-[var(--color-text-main)] opacity-60 font-bold hover:text-[var(--color-text-main)] transition-colors text-sm"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    disabled={isProcessing}
                    className="flex-[2] bg-electric hover:bg-electric/90 text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl hover:shadow-electric/30 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                  >
                    {isProcessing ? <Loader2 size={20} className="animate-spin" /> : <Check size={20} />}
                    {currentTestimonial ? "Update Review" : "Publish Review"}
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
