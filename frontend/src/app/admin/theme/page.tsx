"use client";

import React, { useState, useEffect } from "react";
import { Loader2, Save, Palette, Type, LayoutTemplate } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ThemeSettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [theme, setTheme] = useState({
    primaryColor: "#3B82F6",
    secondaryColor: "#60A5FA",
    accentColor: "#10B981",
    backgroundColor: "#F8FAFC",
    cardColor: "#FFFFFF",
    textColor: "#0F172A",
    headingColor: "#1E293B",
    borderColor: "#E2E8F0",
    fontFamily: "Inter, Outfit, sans-serif",
    borderRadius: "0.75rem",
  });
  const router = useRouter();

  useEffect(() => {
    fetchTheme();
  }, []);

  const fetchTheme = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/v1/theme`);
      if (res.ok) {
        const data = await res.json();
        if (data.primaryColor) {
          setTheme(data);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/v1/theme`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(theme),
      });
      if (res.ok) {
        // Refresh the page to apply changes in ThemeProvider if needed, or it might update automatically via context if we set it up, but refreshing is safe
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center p-10"><Loader2 className="animate-spin text-electric" /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-[var(--color-navy-light)] p-6 rounded-2xl border border-[var(--color-border)]">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2"><Palette size={20} className="text-electric" /> Color Palette</h2>
          <p className="text-[var(--color-text-main)] opacity-70 text-sm mt-1">Customize the global colors of your website.</p>
        </div>
        <button 
          onClick={handleSave}
          disabled={saving}
          className="bg-electric hover:bg-electric/90 text-white px-6 py-2 rounded-xl font-medium flex items-center gap-2 transition-all"
        >
          {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(theme).filter(([k]) => k.includes('Color')).map(([key, value]) => (
          <div key={key} className="bg-[var(--color-navy-light)] p-5 rounded-2xl border border-[var(--color-border)] space-y-3">
            <label className="text-sm font-medium text-[var(--color-text-main)] capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </label>
            <div className="flex items-center gap-4">
              <input 
                type="color" 
                value={value} 
                onChange={(e) => setTheme({...theme, [key]: e.target.value})}
                className="w-12 h-12 rounded cursor-pointer bg-transparent border-0 p-0"
              />
              <input 
                type="text" 
                value={value}
                onChange={(e) => setTheme({...theme, [key]: e.target.value})}
                className="flex-1 bg-[var(--color-navy)] border border-[var(--color-border)] text-[var(--color-text-main)] rounded-lg px-3 py-2 text-sm focus:border-electric outline-none"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[var(--color-navy-light)] p-6 rounded-2xl border border-[var(--color-border)] space-y-6">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--color-text-main)]"><Type size={20} className="text-electric" /> Typography & Layout</h2>
          <p className="text-[var(--color-text-main)] opacity-70 text-sm mt-1">Configure fonts and global layout settings.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--color-text-main)]">Font Family</label>
            <input 
              type="text" 
              value={theme.fontFamily}
              onChange={(e) => setTheme({...theme, fontFamily: e.target.value})}
              className="w-full bg-[var(--color-navy)] border border-[var(--color-border)] text-[var(--color-text-main)] rounded-lg px-4 py-3 focus:border-electric outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--color-text-main)]">Border Radius</label>
            <input 
              type="text" 
              value={theme.borderRadius}
              onChange={(e) => setTheme({...theme, borderRadius: e.target.value})}
              className="w-full bg-[var(--color-navy)] border border-[var(--color-border)] text-[var(--color-text-main)] rounded-lg px-4 py-3 focus:border-electric outline-none"
              placeholder="e.g. 0.5rem, 8px, 1rem"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
