"use client";

import React, { useState, useEffect } from "react";
import { Download, Search, Mail, Phone, Calendar } from "lucide-react";

export default function LeadsDashboard() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/contacts`);
        if (res.ok) {
          const data = await res.json();
          setLeads(data);
        }
      } catch (err) {
        console.error("Failed to fetch leads", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeads();
  }, []);

  const handleExport = () => {
    const headers = ["Name", "Email", "Phone", "Service", "Message", "Date"];
    const csvContent = [
      headers.join(","),
      ...leads.map(l =>
        `"${l.name}","${l.email}","${l.phone || ''}","${l.service || ''}","${l.message.replace(/"/g, '""')}","${new Date(l.createdAt).toLocaleDateString()}"`
      )
    ].join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `uma-techno-leads-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-[var(--color-navy-light)] p-6 rounded-2xl border border-[var(--color-border)]">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2"><Mail size={20} className="text-electric" /> Lead Generation</h2>
          <p className="text-[var(--color-text-main)] opacity-70 text-sm mt-1">Manage and export your incoming client inquiries.</p>
        </div>
        <button
          onClick={handleExport}
          disabled={leads.length === 0}
          className="flex items-center gap-2 bg-electric text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-electric/90 transition-colors disabled:opacity-50"
        >
          <Download size={16} /> Export CSV
        </button>
      </div>

      <div className="bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-[var(--color-border)] flex gap-4 bg-[var(--color-navy)]">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search by name, email, or service..."
              className="w-full bg-transparent border border-[var(--color-border)] rounded-lg pl-10 pr-4 py-2 text-sm text-[var(--color-text-main)] focus:outline-none focus:border-electric"
            />
          </div>
        </div>

        <div className="p-0">
          {loading ? (
            <div className="p-8 text-center text-[var(--color-text-main)] opacity-50">Loading leads...</div>
          ) : leads.length === 0 ? (
            <div className="p-12 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-[var(--color-navy)] rounded-full flex items-center justify-center mb-4">
                <Mail size={24} className="text-[var(--color-text-main)] opacity-30" />
              </div>
              <h4 className="text-lg font-bold text-[var(--color-text-main)] mb-2">No leads yet</h4>
              <p className="text-[var(--color-text-main)] opacity-60 max-w-sm">When visitors fill out your contact form, their inquiries will appear here.</p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[var(--color-navy)] border-b border-[var(--color-border)]">
                  <th className="p-4 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-wider opacity-60">Client Details</th>
                  <th className="p-4 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-wider opacity-60">Interested In</th>
                  <th className="p-4 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-wider opacity-60">Message</th>
                  <th className="p-4 text-xs font-bold text-[var(--color-text-main)] uppercase tracking-wider opacity-60 text-right">Date</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-b border-[var(--color-border)] hover:bg-[var(--color-navy)]/50 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-[var(--color-text-main)]">{lead.name}</div>
                      <div className="text-sm text-[var(--color-text-main)] opacity-70 flex items-center gap-1 mt-1"><Mail size={12} /> {lead.email}</div>
                      {lead.phone && <div className="text-sm text-[var(--color-text-main)] opacity-70 flex items-center gap-1 mt-1"><Phone size={12} /> {lead.phone}</div>}
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-electric/10 text-electric rounded-full text-xs font-bold">
                        {lead.service || 'General Inquiry'}
                      </span>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-[var(--color-text-main)] opacity-80 max-w-md truncate" title={lead.message}>
                        {lead.message}
                      </p>
                    </td>
                    <td className="p-4 text-right text-sm text-[var(--color-text-main)] opacity-70 whitespace-nowrap">
                      {new Date(lead.createdAt).toLocaleDateString()}
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
