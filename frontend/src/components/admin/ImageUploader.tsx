import React, { useState, useRef } from 'react';
import { Upload, X, ImageIcon, Loader2 } from 'lucide-react';

interface ImageUploaderProps {
  label: string;
  currentImage?: string | null;
  onUpload: (url: string) => void;
  aspectRatio?: string;
}

export default function ImageUploader({ label, currentImage, onUpload, aspectRatio = "aspect-video" }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert("Image too large. Max 2MB allowed.");
      return;
    }

    setUploading(true);
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result as string;
        const res = await fetch(`${import.meta.env.VITE_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/upload`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            image: base64,
            name: label.toLowerCase().replace(/\s+/g, '-'),
            type: file.type.split('/')[1] || 'png'
          })
        });

        if (res.ok) {
          const data = await res.json();
          onUpload(data.url);
        } else {
          alert("Failed to upload image.");
        }
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Error uploading image.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-3">
      <label className="text-xs font-bold text-[var(--color-text-main)] opacity-60 uppercase tracking-widest">{label}</label>
      <div 
        onClick={() => fileInputRef.current?.click()}
        className={`relative group cursor-pointer border-2 border-dashed border-[var(--color-border)] rounded-2xl overflow-hidden bg-[var(--color-navy-light)] transition-all hover:border-electric ${aspectRatio} flex items-center justify-center`}
      >
        {currentImage ? (
          <>
            <img src={currentImage} alt={label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Upload className="text-white" size={24} />
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
            {uploading ? <Loader2 className="animate-spin text-electric" size={32} /> : <ImageIcon size={32} />}
            <span className="text-xs font-bold">Click to Upload</span>
          </div>
        )}
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/*" 
          onChange={handleFileChange} 
        />
      </div>
    </div>
  );
}

