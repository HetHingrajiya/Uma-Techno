"use client";
import React, { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, ArrowLeft, X, Loader2, Check, AlertCircle, Layout, Hash, Type, FileText } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesManager() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentService, setCurrentService] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
    icon: "Layout",
    published: true,
    features: [] as string[],
    benefits: [] as string[],
  });

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/services`);
      if (res.ok) {
        const result = await res.json();
        setServices(result.success ? result.data : result);
      }
    } catch (err) {
      console.error("Failed to fetch services", err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (service: any = null) => {
    if (service) {
      setCurrentService(service);
      setFormData({
        title: service.title,
        slug: service.slug,
        description: service.description,
        content: service.content,
        icon: service.icon || "Layout",
        published: service.published,
        features: service.features || [],
        benefits: service.benefits || [],
      });
    } else {
      setCurrentService(null);
      setFormData({
        title: "",
        slug: "",
        description: "",
        content: "",
        icon: "Layout",
        published: true,
        features: [],
        benefits: [],
      });
    }
    setIsModalOpen(true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    setFormData({ ...formData, title, slug });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      const url = currentService 
        ? `${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/services/${currentService.id}`
        : `${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/services`;
      
      const res = await fetch(url, {
        method: currentService ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsModalOpen(false);
        fetchServices();
      } else {
        const err = await res.json();
        alert(err.message || "Failed to save service");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this service?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/services/${id}`, {
        method: "DELETE"
      });
      if (res.ok) {
        fetchServices();
      }
    } catch (err) {
      alert("Failed to delete service");
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <Link href="/admin/cms" className="w-10 h-10 bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-xl flex items-center justify-center text-[var(--color-text-main)] hover:text-electric transition-colors shrink-0">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-main)]">Manage Services</h2>
          <p className="text-sm text-[var(--color-text-main)] opacity-60">Add, edit, or remove your service offerings.</p>
        </div>
      </div>

      <div className="bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h3 className="font-bold text-[var(--color-text-main)]">Service Inventory ({services.length})</h3>
          <button 
            onClick={() => handleOpenModal()}
            className="flex items-center justify-center gap-2 bg-electric text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-electric/90 transition-all shadow-lg hover:shadow-electric/20 w-full sm:w-auto"
          >
            <Plus size={18} /> Add New Service
          </button>
        </div>

        <div className="p-0 overflow-x-auto">
          {loading ? (
            <div className="p-20 text-center flex flex-col items-center gap-4">
              <Loader2 className="animate-spin text-electric" size={32} />
              <p className="text-[var(--color-text-main)] opacity-50 font-medium">Fetching services...</p>
            </div>
          ) : services.length === 0 ? (
            <div className="p-20 text-center flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-[var(--color-navy)] rounded-3xl flex items-center justify-center mb-6 border border-[var(--color-border)]">
                <Layout size={32} className="text-[var(--color-text-main)] opacity-20" />
              </div>
              <h4 className="text-xl font-bold text-[var(--color-text-main)] mb-2">No services yet</h4>
              <p className="text-[var(--color-text-main)] opacity-60 max-w-sm mb-8">Start growing your agency by listing your expert services here.</p>
              <button 
                onClick={() => handleOpenModal()}
                className="bg-electric/10 text-electric px-6 py-3 rounded-xl font-bold text-sm hover:bg-electric hover:text-white transition-all"
              >
                Create Your First Service
              </button>
            </div>
          ) : (
            <div className="min-w-[800px]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[var(--color-navy)]/30 border-b border-[var(--color-border)]">
                    <th className="p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40">Service Title</th>
                    <th className="p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40">Route URL</th>
                    <th className="p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40">Status</th>
                    <th className="p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr key={service.id} className="border-b border-[var(--color-border)] hover:bg-[var(--color-navy)]/40 transition-colors group">
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-electric/10 text-electric flex items-center justify-center font-bold">
                            {service.title.charAt(0)}
                          </div>
                          <span className="font-bold text-[var(--color-text-main)] group-hover:text-electric transition-colors">{service.title}</span>
                        </div>
                      </td>
                      <td className="p-6 text-sm font-mono text-[var(--color-text-main)] opacity-60">/services/{service.slug}</td>
                      <td className="p-6">
                        <span className={`px-3 py-1 text-[10px] uppercase tracking-widest font-black rounded-lg ${service.published ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-orange-500/10 text-orange-500 border border-orange-500/20'}`}>
                          {service.published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="p-6 text-right">
                        <div className="flex justify-end gap-3">
                          <button 
                            onClick={() => handleOpenModal(service)}
                            className="w-10 h-10 rounded-xl bg-[var(--color-navy)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:text-electric transition-all"
                            title="Edit Service"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button 
                            onClick={() => handleDelete(service.id)}
                            className="w-10 h-10 rounded-xl bg-[var(--color-navy)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:text-red-500 transition-all"
                            title="Delete Service"
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
              className="relative w-full max-w-4xl bg-[var(--color-card)] rounded-3xl md:rounded-[3rem] shadow-2xl border border-[var(--color-border)] max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 md:p-10 border-b border-[var(--color-border)] flex justify-between items-center bg-[var(--color-navy-light)]/50 rounded-t-[3rem]">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-outfit text-[var(--color-text-main)]">
                    {currentService ? "Edit Service" : "Add New Service"}
                  </h2>
                  <p className="text-sm text-[var(--color-text-main)] opacity-60 mt-1 font-medium">Configure your service details below.</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="w-12 h-12 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center text-slate-400 hover:text-[var(--color-text-main)] hover:border-slate-300 transition-all shadow-sm"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body / Form */}
              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Basic Info */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Type size={14} className="text-electric" /> Service Title
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.title}
                        onChange={handleTitleChange}
                        placeholder="e.g. Web Development"
                        className="w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-bold text-[var(--color-text-main)] transition-colors"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Hash size={14} className="text-electric" /> URL Slug
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.slug}
                        onChange={(e) => setFormData({...formData, slug: e.target.value})}
                        placeholder="web-development"
                        className="w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-mono text-sm text-[var(--color-text-main)] opacity-60 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Layout size={14} className="text-electric" /> Icon Identifier
                      </label>
                      <input 
                        type="text" 
                        value={formData.icon}
                        onChange={(e) => setFormData({...formData, icon: e.target.value})}
                        placeholder="e.g. Code, Database, Layout"
                        className="w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-bold text-[var(--color-text-main)] transition-colors"
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-[var(--color-navy-light)] rounded-2xl border border-slate-100">
                      <div>
                        <p className="font-bold text-[var(--color-text-main)]">Publish Status</p>
                        <p className="text-xs text-[var(--color-text-main)] opacity-60">Enable to show on live site</p>
                      </div>
                      <button 
                        type="button"
                        onClick={() => setFormData({...formData, published: !formData.published})}
                        className={`w-14 h-8 rounded-full transition-all relative flex items-center px-1 ${formData.published ? 'bg-electric' : 'bg-slate-300'}`}
                      >
                        <div className={`w-6 h-6 bg-[var(--color-card)] rounded-full shadow-md transition-all transform ${formData.published ? 'translate-x-6' : 'translate-x-0'}`} />
                      </button>
                    </div>
                  </div>

                  {/* Content Info */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <FileText size={14} className="text-electric" /> Short Description
                      </label>
                      <textarea 
                        required
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        placeholder="A brief summary for cards..."
                        rows={3}
                        className="w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-medium text-slate-700 resize-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <FileText size={14} className="text-electric" /> Detailed Content
                      </label>
                      <textarea 
                        required
                        value={formData.content}
                        onChange={(e) => setFormData({...formData, content: e.target.value})}
                        placeholder="Explain your service in detail..."
                        rows={7}
                        className="w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-medium text-slate-700 resize-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Area */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                  <button 
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-4 text-[var(--color-text-main)] opacity-60 font-bold hover:text-[var(--color-text-main)] transition-colors text-sm"
                  >
                    Cancel Changes
                  </button>
                  <button 
                    type="submit"
                    disabled={isProcessing}
                    className="flex-[2] bg-electric hover:bg-electric/90 text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl hover:shadow-electric/30 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                  >
                    {isProcessing ? <Loader2 size={20} className="animate-spin" /> : <Check size={20} />}
                    {currentService ? "Update Service" : "Create Service"}
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
