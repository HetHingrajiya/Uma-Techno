"use client";

import React, { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PortfolioManager() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/projects`);
        if (res.ok) {
          const data = await res.json();
          setProjects(data);
        }
      } catch (err) {
        console.error("Failed to fetch projects", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/cms" className="w-10 h-10 bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-xl flex items-center justify-center text-[var(--color-text-main)] hover:text-electric transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <h2 className="text-2xl font-bold text-[var(--color-text-main)]">Manage Portfolio</h2>
      </div>

      <div className="bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-[var(--color-border)] flex justify-between items-center">
          <h3 className="font-bold text-[var(--color-text-main)]">All Projects</h3>
          <button className="flex items-center gap-2 bg-electric text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-electric/90 transition-colors">
            <Plus size={16} /> Add New Project
          </button>
        </div>

        <div className="p-0">
          {loading ? (
            <div className="p-8 text-center text-[var(--color-text-main)] opacity-50">Loading projects...</div>
          ) : projects.length === 0 ? (
            <div className="p-12 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-[var(--color-navy)] rounded-full flex items-center justify-center mb-4">
                <Plus size={24} className="text-[var(--color-text-main)] opacity-30" />
              </div>
              <h4 className="text-lg font-bold text-[var(--color-text-main)] mb-2">No projects found</h4>
              <p className="text-[var(--color-text-main)] opacity-60 max-w-sm">You haven't added any projects to your portfolio yet. Click the button above to showcase your work.</p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[var(--color-navy)] border-b border-[var(--color-border)]">
                  <th className="p-4 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-wider opacity-60">Title</th>
                  <th className="p-4 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-wider opacity-60">Category</th>
                  <th className="p-4 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-wider opacity-60">Client</th>
                  <th className="p-4 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-wider opacity-60 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-b border-[var(--color-border)] hover:bg-[var(--color-navy)]/50 transition-colors">
                    <td className="p-4 font-bold text-[var(--color-text-main)]">{project.title}</td>
                    <td className="p-4 text-sm text-[var(--color-text-main)] opacity-70">{project.category}</td>
                    <td className="p-4 text-sm text-[var(--color-text-main)] opacity-70">{project.clientName}</td>
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
