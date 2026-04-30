"use client";
import React, { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, ArrowLeft, X, Loader2, Check, ExternalLink, Image as ImageIcon, Briefcase, Globe, User } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioManager() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentProject, setCurrentProject] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    clientName: "",
    category: "Web Development",
    description: "",
    content: "",
    liveUrl: "",
    featuredImage: "",
    published: true,
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/projects`);
      if (res.ok) {
        const result = await res.json();
        setProjects(result.success ? result.data : result);
      }
    } catch (err) {
      console.error("Failed to fetch projects", err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (project: any = null) => {
    if (project) {
      setCurrentProject(project);
      setFormData({
        title: project.title,
        slug: project.slug,
        clientName: project.clientName || "",
        category: project.category,
        description: project.description,
        content: project.content,
        liveUrl: project.liveUrl || "",
        featuredImage: project.featuredImage || "",
        published: project.published,
      });
    } else {
      setCurrentProject(null);
      setFormData({
        title: "",
        slug: "",
        clientName: "",
        category: "Web Development",
        description: "",
        content: "",
        liveUrl: "",
        featuredImage: "",
        published: true,
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
      const url = currentProject 
        ? `${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/projects/${currentProject.id}`
        : `${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/projects`;
      
      const res = await fetch(url, {
        method: currentProject ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsModalOpen(false);
        fetchProjects();
      } else {
        const err = await res.json();
        alert(err.message || "Failed to save project");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/projects/${id}`, {
        method: "DELETE"
      });
      if (res.ok) {
        fetchProjects();
      }
    } catch (err) {
      alert("Failed to delete project");
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <Link href="/admin/cms" className="w-10 h-10 bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-xl flex items-center justify-center text-[var(--color-text-main)] hover:text-electric transition-colors shrink-0">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-main)]">Manage Portfolio</h2>
          <p className="text-sm text-[var(--color-text-main)] opacity-60">Showcase your best projects and case studies.</p>
        </div>
      </div>

      <div className="bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h3 className="font-bold text-[var(--color-text-main)]">Project Gallery ({projects.length})</h3>
          <button 
            onClick={() => handleOpenModal()}
            className="flex items-center justify-center gap-2 bg-electric text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-electric/90 transition-all shadow-lg hover:shadow-electric/20 w-full sm:w-auto"
          >
            <Plus size={18} /> Add New Project
          </button>
        </div>

        <div className="p-0 overflow-x-auto">
          {loading ? (
            <div className="p-20 text-center flex flex-col items-center gap-4">
              <Loader2 className="animate-spin text-electric" size={32} />
              <p className="text-[var(--color-text-main)] opacity-50 font-medium">Fetching projects...</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="p-20 text-center flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-[var(--color-navy)] rounded-3xl flex items-center justify-center mb-6 border border-[var(--color-border)]">
                <Briefcase size={32} className="text-[var(--color-text-main)] opacity-20" />
              </div>
              <h4 className="text-xl font-bold text-[var(--color-text-main)] mb-2">No projects yet</h4>
              <p className="text-[var(--color-text-main)] opacity-60 max-w-sm mb-8">Your portfolio is empty. Click the button above to showcase your first masterpiece.</p>
              <button 
                onClick={() => handleOpenModal()}
                className="bg-electric/10 text-electric px-6 py-3 rounded-xl font-bold text-sm hover:bg-electric hover:text-white transition-all"
              >
                Create Your First Project
              </button>
            </div>
          ) : (
            <div className="min-w-[800px]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[var(--color-navy)]/30 border-b border-[var(--color-border)]">
                    <th className="p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40">Project Info</th>
                    <th className="p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40">Category</th>
                    <th className="p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40">Client</th>
                    <th className="p-6 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-widest opacity-40 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id} className="border-b border-[var(--color-border)] hover:bg-[var(--color-navy)]/40 transition-colors group">
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-slate-200 overflow-hidden flex items-center justify-center border border-[var(--color-border)]">
                            {project.featuredImage ? (
                                <img src={project.featuredImage} alt="" className="w-full h-full object-cover" />
                            ) : (
                                <ImageIcon size={20} className="opacity-30" />
                            )}
                          </div>
                          <div>
                            <span className="font-bold text-[var(--color-text-main)] group-hover:text-electric transition-colors block">{project.title}</span>
                            <span className="text-xs opacity-50 font-mono">/portfolio/{project.slug}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-6 text-sm text-[var(--color-text-main)] opacity-70">
                        <span className="px-3 py-1 bg-[var(--color-navy)] border border-[var(--color-border)] rounded-full text-[10px] font-bold">
                            {project.category}
                        </span>
                      </td>
                      <td className="p-6 text-sm text-[var(--color-text-main)] opacity-60 font-medium">{project.clientName || "Internal Project"}</td>
                      <td className="p-6 text-right">
                        <div className="flex justify-end gap-3">
                          <button 
                            onClick={() => handleOpenModal(project)}
                            className="w-10 h-10 rounded-xl bg-[var(--color-navy)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:text-electric transition-all"
                            title="Edit Project"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button 
                            onClick={() => handleDelete(project.id)}
                            className="w-10 h-10 rounded-xl bg-[var(--color-navy)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] hover:text-red-500 transition-all"
                            title="Delete Project"
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
              className="relative w-full max-w-4xl bg-white rounded-3xl md:rounded-[3rem] shadow-2xl border border-[var(--color-border)] max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 md:p-10 border-b border-[var(--color-border)] flex justify-between items-center bg-slate-50/50 rounded-t-[3rem]">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-outfit text-slate-900">
                    {currentProject ? "Edit Project" : "Add New Project"}
                  </h2>
                  <p className="text-sm text-slate-500 mt-1 font-medium">Capture the essence of your project showcase.</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-all shadow-sm"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body / Form */}
              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Briefcase size={14} className="text-electric" /> Project Title
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.title}
                        onChange={handleTitleChange}
                        placeholder="e.g. E-commerce Platform"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-bold text-slate-900 transition-colors"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <User size={14} className="text-electric" /> Client Name
                            </label>
                            <input 
                                type="text" 
                                value={formData.clientName}
                                onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                                placeholder="Client name..."
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-bold text-slate-900"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Category</label>
                            <select 
                                value={formData.category}
                                onChange={(e) => setFormData({...formData, category: e.target.value})}
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-bold text-slate-900 appearance-none"
                            >
                                <option>Web Development</option>
                                <option>Mobile App</option>
                                <option>UI/UX Design</option>
                                <option>E-commerce</option>
                                <option>Branding</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Globe size={14} className="text-electric" /> Live URL
                      </label>
                      <input 
                        type="url" 
                        value={formData.liveUrl}
                        onChange={(e) => setFormData({...formData, liveUrl: e.target.value})}
                        placeholder="https://example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-medium text-slate-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <ImageIcon size={14} className="text-electric" /> Featured Image URL
                      </label>
                      <input 
                        type="text" 
                        value={formData.featuredImage}
                        onChange={(e) => setFormData({...formData, featuredImage: e.target.value})}
                        placeholder="/images/portfolio/project1.png"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-mono text-xs text-slate-500"
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Short Summary</label>
                      <textarea 
                        required
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        placeholder="Brief overview for cards..."
                        rows={3}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-medium text-slate-700 resize-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Full Case Study Content</label>
                      <textarea 
                        required
                        value={formData.content}
                        onChange={(e) => setFormData({...formData, content: e.target.value})}
                        placeholder="Detailed technical information, process, and results..."
                        rows={10}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-electric font-medium text-slate-700 resize-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Area */}
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
                    {currentProject ? "Update Showcase" : "Publish Showcase"}
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
