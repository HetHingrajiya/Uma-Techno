"use client";

import React, { useState, useEffect } from "react";
import { Loader2, Save, Layout, GripVertical, Eye, EyeOff } from "lucide-react";

export default function WidgetControlPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [widgets, setWidgets] = useState<any[]>([]);

  useEffect(() => {
    fetchWidgets();
  }, []);

  const fetchWidgets = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/v1/widgets`);
      if (res.ok) {
        const data = await res.json();
        // Fallback if DB is empty
        if (data.length === 0) {
          setWidgets([
            { id: '1', name: 'hero', enabled: true, order: 1 },
            { id: '2', name: 'features', enabled: true, order: 2 },
            { id: '3', name: 'about', enabled: true, order: 3 },
            { id: '4', name: 'services', enabled: true, order: 4 },
            { id: '5', name: 'portfolio', enabled: true, order: 5 },
            { id: '6', name: 'stats', enabled: true, order: 6 },
            { id: '7', name: 'testimonials', enabled: true, order: 7 },
            { id: '8', name: 'contact', enabled: true, order: 8 },
          ]);
        } else {
          setWidgets(data);
        }
      } else {
        console.error("Failed to fetch widgets", await res.text());
        alert("Warning: Could not connect to the database to load widgets. Please ensure your backend is correctly connected to Neon Database on Vercel.");
      }
    } catch (err) {
      console.error(err);
      alert("Network Error: Could not reach the API backend. Please ensure NEXT_PUBLIC_API_URL is set correctly in Vercel.");
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = (id: string) => {
    setWidgets(widgets.map(w => w.id === id ? { ...w, enabled: !w.enabled } : w));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // Typically we'd save order and status to backend
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/v1/widgets/reorder`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ widgets }),
      });
      if (res.ok) {
        // Success toast could go here
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newWidgets = [...widgets];
    const temp = newWidgets[index];
    newWidgets[index] = newWidgets[index - 1];
    newWidgets[index - 1] = temp;
    // Update order values
    newWidgets.forEach((w, i) => w.order = i);
    setWidgets(newWidgets);
  };

  const moveDown = (index: number) => {
    if (index === widgets.length - 1) return;
    const newWidgets = [...widgets];
    const temp = newWidgets[index];
    newWidgets[index] = newWidgets[index + 1];
    newWidgets[index + 1] = temp;
    // Update order values
    newWidgets.forEach((w, i) => w.order = i);
    setWidgets(newWidgets);
  };

  if (loading) {
    return <div className="flex justify-center p-10"><Loader2 className="animate-spin text-electric" /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-[var(--color-navy-light)] p-6 rounded-2xl border border-[var(--color-border)]">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2"><Layout size={20} className="text-electric" /> Widget Control Panel</h2>
          <p className="text-[var(--color-text-main)] opacity-70 text-sm mt-1">Enable, disable, and reorder homepage sections.</p>
        </div>
        <button 
          onClick={handleSave}
          disabled={saving}
          className="bg-electric hover:bg-electric/90 text-white px-6 py-2 rounded-xl font-medium flex items-center gap-2 transition-all"
        >
          {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
          Save Layout
        </button>
      </div>

      <div className="bg-[var(--color-navy-light)] p-6 rounded-2xl border border-[var(--color-border)]">
        <div className="space-y-3">
          {widgets.map((widget, index) => (
            <div 
              key={widget.id} 
              className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                widget.enabled 
                  ? 'bg-[var(--color-navy)] border-[var(--color-border)]' 
                  : 'bg-[var(--color-navy)] border-red-500/20 opacity-60'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-1 text-[var(--color-text-main)] opacity-50">
                  <button onClick={() => moveUp(index)} disabled={index === 0} className="hover:opacity-100 disabled:opacity-30">▲</button>
                  <button onClick={() => moveDown(index)} disabled={index === widgets.length - 1} className="hover:opacity-100 disabled:opacity-30">▼</button>
                </div>
                <div className="p-2 bg-[var(--color-navy-light)] rounded-lg border border-[var(--color-border)]">
                  <Layout size={20} className={widget.enabled ? "text-electric" : "opacity-50"} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[var(--color-text-main)]">{widget.title}</h3>
                  <p className="text-xs opacity-60 font-mono text-[var(--color-text-main)]">{widget.name}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => handleToggle(widget.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    widget.enabled 
                      ? 'bg-electric/20 text-electric hover:bg-electric/30' 
                      : 'bg-[var(--color-navy-light)] border border-[var(--color-border)] text-[var(--color-text-main)] opacity-70 hover:opacity-100'
                  }`}
                >
                  {widget.enabled ? <Eye size={16} /> : <EyeOff size={16} />}
                  {widget.enabled ? 'Visible' : 'Hidden'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
