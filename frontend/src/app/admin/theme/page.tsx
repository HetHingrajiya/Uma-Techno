"use client";

import React, { useState, useEffect } from "react";
import ImageUploader from "@/components/admin/ImageUploader";
import {
  Palette,
  Save,
  Plus,
  Trash2,
  Check,
  RotateCcw,
  Search,
  Filter,
  Eye,
  Layout,
  MousePointer2,
  Heart,
  Copy,
  Edit3,
  Loader2,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PaletteType {
  id: string;
  name: string;
  category: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  cardColor: string;
  borderColor: string;
  headerColor?: string;
  footerColor?: string;
  logoUrl?: string | null;
  heroImageUrl?: string | null;
  aboutImageUrl?: string | null;
  isCustom?: boolean;
}

// Prebuilt Palette Packs
const PALETTE_PACKS = [
  {
    category: "Professional",
    palettes: [
      { name: "Cyan Professional", primaryColor: "#06B6D4", secondaryColor: "#0891B2", accentColor: "#22D3EE", backgroundColor: "#F8FAFC", textColor: "#0F172A", cardColor: "#FFFFFF", borderColor: "#E2E8F0", headerColor: "#FFFFFF", footerColor: "#0F172A" },
      { name: "Navy Corporate", primaryColor: "#0F172A", secondaryColor: "#1E293B", accentColor: "#3B82F6", backgroundColor: "#F1F5F9", textColor: "#0F172A", cardColor: "#FFFFFF", borderColor: "#CBD5E1", headerColor: "#FFFFFF", footerColor: "#0F172A" },
      { name: "Sky Digital", primaryColor: "#0EA5E9", secondaryColor: "#0284C7", accentColor: "#7DD3FC", backgroundColor: "#F8FAFC", textColor: "#0F172A", cardColor: "#FFFFFF", borderColor: "#E0F2FE", headerColor: "#FFFFFF", footerColor: "#0F172A" },
      { name: "Slate Minimal", primaryColor: "#475569", secondaryColor: "#334155", accentColor: "#94A3B8", backgroundColor: "#F8FAFC", textColor: "#1E293B", cardColor: "#FFFFFF", borderColor: "#F1F5F9", headerColor: "#FFFFFF", footerColor: "#0F172A" }
    ]
  },
  {
    category: "Dark / OLED",
    palettes: [
      { name: "Midnight Gold", primaryColor: "#D4AF37", secondaryColor: "#B8860B", accentColor: "#FFD700", backgroundColor: "#020617", textColor: "#F8FAFC", cardColor: "#0F172A", borderColor: "#1E293B", headerColor: "#020617", footerColor: "#020617" },
      { name: "Onyx Premium", primaryColor: "#D4AF37", secondaryColor: "#B8860B", accentColor: "#FFD700", backgroundColor: "#0F172A", textColor: "#F8FAFC", cardColor: "#1E293B", borderColor: "#334155", headerColor: "#0F172A", footerColor: "#0F172A" },
      { name: "Cyber Neon", primaryColor: "#06B6D4", secondaryColor: "#0891B2", accentColor: "#FF00FF", backgroundColor: "#000000", textColor: "#F8FAFC", cardColor: "#0A0A0A", borderColor: "#1A1A1A", headerColor: "#000000", footerColor: "#000000" },
      { name: "Deep Amethyst", primaryColor: "#8B5CF6", secondaryColor: "#7C3AED", accentColor: "#C084FC", backgroundColor: "#0B0117", textColor: "#F5F3FF", cardColor: "#160D26", borderColor: "#2D1B4E", headerColor: "#0B0117", footerColor: "#0B0117" }
    ]
  },
  {
    category: "Premium",
    palettes: [
      { name: "Royal Sapphire", primaryColor: "#1E40AF", secondaryColor: "#1D4ED8", accentColor: "#60A5FA", backgroundColor: "#EFF6FF", textColor: "#1E3A8A", cardColor: "#FFFFFF", borderColor: "#DBEAFE" },
      { name: "Sunset Energy", primaryColor: "#F59E0B", secondaryColor: "#D97706", accentColor: "#FCD34D", backgroundColor: "#FFFBEB", textColor: "#78350F", cardColor: "#FFFFFF", borderColor: "#FEF3C7" },
      { name: "Luxury Emerald", primaryColor: "#065F46", secondaryColor: "#064E3B", accentColor: "#34D399", backgroundColor: "#F0FDF4", textColor: "#064E3B", cardColor: "#FFFFFF", borderColor: "#DCFCE7" }
    ]
  },
  {
    category: "Startup",
    palettes: [
      { name: "Electric Purple", primaryColor: "#8B5CF6", secondaryColor: "#7C3AED", accentColor: "#C084FC", backgroundColor: "#FDF4FF", textColor: "#2E1065", cardColor: "#FFFFFF", borderColor: "#F5D0FE" },
      { name: "Modern Teal", primaryColor: "#14B8A6", secondaryColor: "#0D9488", accentColor: "#5EEAD4", backgroundColor: "#F0FDFA", textColor: "#134E4A", cardColor: "#FFFFFF", borderColor: "#CCFBF1" },
      { name: "Vibrant Indigo", primaryColor: "#6366F1", secondaryColor: "#4F46E5", accentColor: "#A5B4FC", backgroundColor: "#EEF2FF", textColor: "#312E81", cardColor: "#FFFFFF", borderColor: "#E0E7FF" }
    ]
  },
  {
    category: "Nature",
    palettes: [
      { name: "Mint Growth", primaryColor: "#10B981", secondaryColor: "#059669", accentColor: "#6EE7B7", backgroundColor: "#F0FDF4", textColor: "#064E3B", cardColor: "#FFFFFF", borderColor: "#DCFCE7" },
      { name: "Forest Deep", primaryColor: "#065F46", secondaryColor: "#064E3B", accentColor: "#A7F3D0", backgroundColor: "#F9FAFB", textColor: "#064E3B", cardColor: "#FFFFFF", borderColor: "#E5E7EB" },
      { name: "Earth Sand", primaryColor: "#B45309", secondaryColor: "#92400E", accentColor: "#F59E0B", backgroundColor: "#FFFBEB", textColor: "#451A03", cardColor: "#FFFFFF", borderColor: "#FEF3C7" }
    ]
  },
  {
    category: "Elegant",
    palettes: [
      { name: "Rose Elegant", primaryColor: "#E11D48", secondaryColor: "#BE123C", accentColor: "#FDA4AF", backgroundColor: "#FFF1F2", textColor: "#4C0519", cardColor: "#FFFFFF", borderColor: "#FFE4E6" },
      { name: "Lavender Soft", primaryColor: "#A855F7", secondaryColor: "#9333EA", accentColor: "#D8B4FE", backgroundColor: "#FAF5FF", textColor: "#3B0764", cardColor: "#FFFFFF", borderColor: "#F3E8FF" }
    ]
  }
];

export default function ThemeSettingsPage() {
  const [activePalette, setActivePalette] = useState<PaletteType | null>(null);
  const [originalPalette, setOriginalPalette] = useState<PaletteType | null>(null);
  const [previewPalette, setPreviewPalette] = useState<PaletteType | null>(null);
  const [savedPalettes, setSavedPalettes] = useState<PaletteType[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showCustomBuilder, setShowCustomBuilder] = useState(false);
  const [customPalette, setCustomPalette] = useState<PaletteType>({
    id: "new",
    name: "New Custom Palette",
    primaryColor: "#06B6D4",
    secondaryColor: "#3B82F6",
    accentColor: "#22D3EE",
    backgroundColor: "#F8FAFC",
    textColor: "#0F172A",
    cardColor: "#FFFFFF",
    borderColor: "#E2E8F0",
    headerColor: "#FFFFFF",
    footerColor: "#0F172A",
    logoUrl: null,
    heroImageUrl: null,
    aboutImageUrl: null,
    category: "Custom"
  });
  const [editingPaletteId, setEditingPaletteId] = useState<string | null>(null);

  useEffect(() => {
    fetchPalettes();
  }, []);

  const fetchPalettes = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/theme/palettes`);
      if (res.ok) {
        const data = await res.json();
        setSavedPalettes(data);
        const active = data.find((p: any) => p.isActive);
        if (active) {
          setActivePalette(active);
          setOriginalPalette(active);
        } else if (data.length > 0) {
          setActivePalette(data[0]);
          setOriginalPalette(data[0]);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async (palette: PaletteType) => {
    setSaving(true);
    try {
      let realId = palette.id;
      if (realId.startsWith('prebuilt-')) {
        const found = savedPalettes.find(p => p.name === palette.name);
        if (found) realId = found.id;
        else {
          const createRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/theme/palettes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(palette)
          });
          if (createRes.ok) {
            const newP = await createRes.json();
            realId = newP.id;
          }
        }
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/theme/palettes/${realId}/activate`, {
        method: "PUT"
      });
      if (res.ok) {
        setActivePalette(palette);
        setOriginalPalette(palette);
        setPreviewPalette(null);
        localStorage.removeItem('preview-theme');
        applyThemeLocally(palette);
        alert(`Theme "${palette.name}" has been applied successfully!`);
        fetchPalettes();
      } else {
        const errData = await res.json().catch(() => ({}));
        alert(`Failed to apply theme: ${errData.error || 'Unknown error'}`);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to apply theme. Please check your internet connection.");
    } finally {
      setSaving(false);
    }
  };

  const handlePreview = (palette: PaletteType) => {
    setPreviewPalette(palette);
    localStorage.setItem('preview-theme', JSON.stringify(palette));
    applyThemeLocally(palette);
  };

  const handleDiscard = () => {
    if (originalPalette) {
      localStorage.removeItem('preview-theme');
      applyThemeLocally(originalPalette);
      setPreviewPalette(null);
    }
  };

  const applyThemeLocally = (p: PaletteType) => {
    const root = document.documentElement;

    // Core Colors
    root.style.setProperty('--color-electric', p.primaryColor);
    root.style.setProperty('--color-secondary', p.secondaryColor || p.primaryColor);
    root.style.setProperty('--color-accent', p.accentColor || p.primaryColor);
    root.style.setProperty('--color-text-main', p.textColor);
    root.style.setProperty('--foreground', p.textColor);
    root.style.setProperty('--background', p.backgroundColor);
    root.style.setProperty('--color-card', p.cardColor);
    root.style.setProperty('--color-border', p.borderColor);
    root.style.setProperty('--color-header', p.headerColor || p.cardColor);
    root.style.setProperty('--color-footer', p.footerColor || p.backgroundColor);
    root.style.setProperty('--color-blue-glow', p.primaryColor + '25');

    const hexToRgbStr = (hex: string) => {
      try {
        const h = hex.startsWith('#') ? hex : '#FFFFFF';
        const r = parseInt(h.slice(1, 3), 16);
        const g = parseInt(h.slice(3, 5), 16);
        const b = parseInt(h.slice(5, 7), 16);
        return `${r}, ${g}, ${b}`;
      } catch (e) { return "255, 255, 255"; }
    };

    root.style.setProperty('--color-header-rgb', hexToRgbStr(p.headerColor || p.cardColor));
    root.style.setProperty('--color-footer-rgb', hexToRgbStr(p.footerColor || p.backgroundColor));

    // Luminance detection
    const hexToRgb = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    };
    const getLuminance = (hex: string) => {
      try {
        const { r, g, b } = hexToRgb(hex);
        return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      } catch (e) { return 1; }
    };

    const isDark = getLuminance(p.backgroundColor) < 0.5;

    if (isDark) {
      root.style.setProperty('--color-navy', p.backgroundColor);
      root.style.setProperty('--color-navy-light', p.cardColor);
      root.style.setProperty('--color-glass', 'rgba(255, 255, 255, 0.05)');
      root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.1)');
      root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.4)');
      root.style.setProperty('--shadow-glow', `${p.primaryColor}25`);
    } else {
      root.style.setProperty('--color-navy', '#0F172A');
      root.style.setProperty('--color-navy-light', p.backgroundColor);
      root.style.setProperty('--color-glass', 'rgba(255, 255, 255, 0.8)');
      root.style.setProperty('--glass-border', 'rgba(15, 23, 42, 0.05)');
      root.style.setProperty('--shadow-color', 'rgba(15, 23, 42, 0.12)');
      root.style.setProperty('--shadow-glow', 'rgba(6, 182, 212, 0.2)');
    }

    // Persist for pre-hydration script
    localStorage.setItem('active-palette', JSON.stringify(p));
    localStorage.setItem('theme-updated', Date.now().toString());

    // Dispatch custom event for same-tab updates
    window.dispatchEvent(new CustomEvent('theme-change'));
  };

  const handleEdit = (palette: PaletteType) => {
    setCustomPalette({
      id: palette.id,
      name: palette.name,
      primaryColor: palette.primaryColor,
      secondaryColor: palette.secondaryColor,
      accentColor: palette.accentColor,
      backgroundColor: palette.backgroundColor,
      textColor: palette.textColor,
      cardColor: palette.cardColor,
      borderColor: palette.borderColor,
      headerColor: palette.headerColor || palette.cardColor,
      footerColor: palette.footerColor || palette.backgroundColor,
      logoUrl: palette.logoUrl || null,
      heroImageUrl: palette.heroImageUrl || null,
      aboutImageUrl: palette.aboutImageUrl || null,
      category: palette.category || "Custom"
    });
    setEditingPaletteId(palette.id.startsWith('prebuilt-') ? null : palette.id);
    setShowCustomBuilder(true);
  };

  const handleCreateCustom = async () => {
    setSaving(true);
    try {
      const isEditing = !!editingPaletteId;
      const url = isEditing
        ? `${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/theme/palettes/${editingPaletteId}`
        : `${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/theme/palettes`;

      const res = await fetch(url, {
        method: isEditing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customPalette)
      });

      if (res.ok) {
        alert(isEditing ? "Palette updated successfully!" : "Custom palette created and saved successfully!");
        setShowCustomBuilder(false);
        setEditingPaletteId(null);
        fetchPalettes();
      } else {
        const errData = await res.json().catch(() => ({}));
        alert(`Failed to save palette: ${errData.error || 'Server error'}`);
      }
    } catch (err) {
      console.error(err);
      alert("Network error: Failed to save palette.");
    } finally {
      setSaving(false);
    }
  };

  const filteredPalettes = PALETTE_PACKS.flatMap(pack =>
    pack.palettes.map(p => ({ ...p, category: pack.category, id: `prebuilt-${p.name}` } as PaletteType))
  ).concat(savedPalettes.map(p => ({ ...p, isCustom: true })))
    .filter((p, index, self) =>
      index === self.findIndex((t) => t.name === p.name)
    )
    .filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });

  return (
    <div className="space-y-8 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-[var(--color-navy-light)] p-4 md:p-8 rounded-2xl md:rounded-3xl border border-[var(--color-border)] shadow-sm">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold font-outfit text-[var(--color-text-main)] flex items-center gap-3">
            <Palette className="text-electric" size={28} /> Theme Settings
          </h1>
          <p className="text-[var(--color-text-main)] opacity-60 max-w-xl text-sm md:text-base">
            Choose a professional color palette or build your own custom brand identity. Changes apply instantly across the whole website.
          </p>
        </div>
        <button
          onClick={() => {
            setEditingPaletteId(null);
            setCustomPalette({
              id: "new",
              name: "My Custom Brand",
              primaryColor: "#06B6D4",
              secondaryColor: "#0891B2",
              accentColor: "#22D3EE",
              backgroundColor: "#F8FAFC",
              textColor: "#0F172A",
              cardColor: "#FFFFFF",
              borderColor: "#E2E8F0",
              headerColor: "#FFFFFF",
              footerColor: "#0F172A",
              logoUrl: null,
              heroImageUrl: null,
              aboutImageUrl: null,
              category: "Custom"
            });
            setShowCustomBuilder(true);
          }}
          className="bg-electric hover:bg-electric/90 text-white px-6 md:px-8 py-3 rounded-xl md:rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-electric/30 w-full md:w-auto justify-center"
        >
          <Plus size={20} /> Create Custom
        </button>
      </div>

      {/* Control Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-main)] opacity-30" size={18} />
          <input
            type="text"
            placeholder="Search palettes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl pl-12 pr-6 py-3 md:py-4 focus:outline-none focus:border-electric transition-colors text-[var(--color-text-main)]"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
          {["All", "Professional", "Dark / OLED", "Premium", "Startup", "Nature", "Elegant"].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 md:px-6 py-2 md:py-4 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm whitespace-nowrap transition-all ${activeCategory === cat
                  ? "bg-electric text-white shadow-lg"
                  : "bg-[var(--color-navy-light)] text-[var(--color-text-main)] opacity-60 hover:opacity-100 border border-[var(--color-border)]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        {filteredPalettes.map((palette, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            key={palette.id || palette.name}
            className={`group card-premium overflow-hidden border-2 transition-all cursor-pointer relative bg-[var(--color-card)] ${(previewPalette?.name === palette.name || (!previewPalette && activePalette?.name === palette.name))
                ? "border-electric ring-4 ring-electric/10"
                : "border-[var(--color-border)] hover:border-electric/30"
              }`}
          >
            {/* Palette Preview */}
            <div className="h-40 flex flex-col">
              <div className="flex-1 flex">
                <div style={{ backgroundColor: palette.primaryColor }} className="flex-[2] h-full" />
                <div style={{ backgroundColor: palette.secondaryColor }} className="flex-1 h-full" />
                <div style={{ backgroundColor: palette.accentColor }} className="flex-1 h-full" />
              </div>
              <div className="h-12 flex">
                <div style={{ backgroundColor: palette.backgroundColor }} className="flex-1 h-full border-t border-[var(--color-border)]" />
                <div style={{ backgroundColor: palette.cardColor }} className="flex-1 h-full border-t border-l border-[var(--color-border)]" />
              </div>
            </div>

            {/* Info */}
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-[var(--color-text-main)]">{palette.name}</h3>
                  <span className="text-[10px] uppercase font-black tracking-widest text-[var(--color-text-main)] opacity-40">{palette.category}</span>
                </div>
                <div className="flex gap-2">
                  <button className="text-[var(--color-text-main)] opacity-30 hover:opacity-100 transition-opacity">
                    <Heart size={16} />
                  </button>
                  <button className="text-[var(--color-text-main)] opacity-30 hover:opacity-100 transition-opacity">
                    <Copy size={16} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleEdit(palette); }}
                    className="text-[var(--color-text-main)] opacity-30 hover:opacity-100 transition-opacity"
                  >
                    <Edit3 size={16} />
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleApply(palette)}
                  disabled={saving}
                  className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${activePalette?.name === palette.name
                      ? "bg-green-500 text-white"
                      : "bg-electric text-white hover:brightness-110"
                    }`}
                >
                  {saving && activePalette?.name === palette.name ? <Loader2 size={16} className="animate-spin" /> : activePalette?.name === palette.name ? <Check size={16} /> : <MousePointer2 size={16} />}
                  {activePalette?.name === palette.name ? "Active" : "Apply Theme"}
                </button>
                <button
                  onClick={() => handlePreview(palette)}
                  className={`w-12 border rounded-xl flex items-center justify-center transition-all ${previewPalette?.name === palette.name
                      ? "bg-electric border-electric text-white"
                      : "bg-[var(--color-navy-light)] border-[var(--color-border)] text-[var(--color-text-main)] opacity-60 hover:opacity-100 hover:border-electric"
                    }`}
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Live Preview Bar */}
      <AnimatePresence>
        {previewPalette && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-[60] w-full max-w-4xl px-4 md:px-6"
          >
            <div className="bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-[2.5rem] p-3 md:p-4 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 md:gap-6 pl-0 md:pl-4">
                <div className="flex -space-x-3">
                  {[previewPalette.primaryColor, previewPalette.secondaryColor, previewPalette.backgroundColor].map((c, i) => (
                    <div key={i} style={{ backgroundColor: c }} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 md:border-4 border-slate-900 shadow-lg" />
                  ))}
                </div>
                <div>
                  <p className="text-white font-bold text-sm md:text-base">Currently Previewing</p>
                  <p className="text-white/50 text-[10px] md:text-xs uppercase tracking-widest">{previewPalette.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-3 pr-0 md:pr-2 w-full md:w-auto">
                <button
                  onClick={handleDiscard}
                  className="flex-1 md:flex-none px-4 md:px-6 py-2 md:py-3 text-white/70 hover:text-white font-bold text-xs md:text-sm"
                >
                  Discard
                </button>
                <button
                  onClick={() => handleApply(previewPalette)}
                  disabled={saving}
                  className="flex-[2] md:flex-none bg-[var(--color-card)] text-[var(--color-text-main)] px-4 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl font-black text-[10px] md:text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl disabled:opacity-50"
                >
                  {saving ? "Saving..." : "Save Permanently"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Builder Modal */}
      <AnimatePresence>
        {showCustomBuilder && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCustomBuilder(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl bg-[var(--color-card)] rounded-3xl md:rounded-[3rem] shadow-2xl overflow-hidden border border-[var(--color-border)] max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 md:p-12 space-y-6 md:space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl md:text-3xl font-bold font-outfit text-[var(--color-text-main)]">Custom Builder</h2>
                  <button onClick={() => setShowCustomBuilder(false)} className="w-10 h-10 rounded-full bg-[var(--color-navy-light)] flex items-center justify-center text-slate-400 hover:text-[var(--color-text-main)] transition-colors">
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[var(--color-text-main)] opacity-60 uppercase tracking-widest">Palette Name</label>
                    <input
                      type="text"
                      value={customPalette.name}
                      onChange={(e) => setCustomPalette({ ...customPalette, name: e.target.value })}
                      className="w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 focus:outline-none focus:border-electric font-bold text-[var(--color-text-main)]"
                    />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {[
                      { label: "Primary", key: "primaryColor" },
                      { label: "Secondary", key: "secondaryColor" },
                      { label: "Accent", key: "accentColor" },
                      { label: "Background", key: "backgroundColor" },
                      { label: "Text", key: "textColor" },
                      { label: "Card", key: "cardColor" },
                      { label: "Border", key: "borderColor" },
                      { label: "Header", key: "headerColor" },
                      { label: "Footer", key: "footerColor" }
                    ].map(item => (
                      <div key={item.key} className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{item.label}</label>
                        <div className="relative">
                          <input
                            type="color"
                            value={(customPalette as any)[item.key]}
                            onChange={(e) => setCustomPalette({ ...customPalette, [item.key]: e.target.value })}
                            className="w-full h-10 md:h-12 rounded-xl cursor-pointer border-none p-0"
                          />
                          <div className="absolute inset-0 pointer-events-none rounded-xl border border-[var(--color-border)] ring-1 ring-inset ring-white/10" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 pt-6 border-t border-[var(--color-border)]">
                  <h3 className="text-lg font-bold text-[var(--color-text-main)] flex items-center gap-2">
                    <Layout size={20} className="text-electric" /> Brand Assets
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ImageUploader
                      label="Official Logo"
                      currentImage={customPalette.logoUrl}
                      onUpload={(url) => setCustomPalette({ ...customPalette, logoUrl: url })}
                      aspectRatio="aspect-square"
                    />
                    <ImageUploader
                      label="Hero Background"
                      currentImage={customPalette.heroImageUrl}
                      onUpload={(url) => setCustomPalette({ ...customPalette, heroImageUrl: url })}
                      aspectRatio="aspect-video"
                    />
                    <ImageUploader
                      label="About Section"
                      currentImage={customPalette.aboutImageUrl}
                      onUpload={(url) => setCustomPalette({ ...customPalette, aboutImageUrl: url })}
                      aspectRatio="aspect-video"
                    />
                  </div>
                </div>

                <div className="pt-4 md:pt-8 flex gap-4">
                  <button
                    onClick={() => setShowCustomBuilder(false)}
                    className="flex-1 py-3 md:py-4 text-[var(--color-text-main)] opacity-60 font-bold hover:text-[var(--color-text-main)] transition-colors text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreateCustom}
                    disabled={saving}
                    className="flex-[2] bg-electric hover:bg-electric/90 text-white py-3 md:py-4 rounded-xl md:rounded-2xl font-black uppercase tracking-widest shadow-xl hover:shadow-electric/30 transition-all flex items-center justify-center gap-2 text-xs md:text-sm"
                  >
                    {saving ? <Loader2 size={20} className="animate-spin" /> : <Save size={20} />} Save
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
