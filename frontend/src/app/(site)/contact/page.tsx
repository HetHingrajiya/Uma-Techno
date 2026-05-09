"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

/**
 * ContactPage: 
 * Handles user inquiries through a validated form and displays agency contact details.
 */
export default function ContactPage() {
  // State for tracking form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: ""
  });

  // State for submission lifecycle (idle -> loading -> success/error)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  /**
   * handleSubmit:
   * Validates and sends the form data to the backend API.
   * On success, shows a confirmation message. On failure, displays specific errors.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subject: formData.service // Maps the selected service to the email subject
        })
      });

      const result = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        // Reset form after successful submission
        setFormData({ name: "", email: "", phone: "", service: "Web Development", message: "" });
      } else {
        setStatus("error");
        // Handle validation errors from the server (e.g., Prisma/Express errors)
        if (result.errors) {
          const messages = result.errors.map((err: any) => err.message).join(", ");
          setErrorMsg(messages);
        } else {
          setErrorMsg(result.message || "Something went wrong. Please try again later.");
        }
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Failed to connect to the server. Please check your internet.");
    }
  };

  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[var(--background)] min-h-screen relative overflow-hidden">
      {/* Ambient Backgrounds */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[var(--color-electric)]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-accent)]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/50 backdrop-blur-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-main)]">Let's Talk</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black font-outfit text-[var(--color-text-main)] tracking-tighter">
            Ready to <span className="text-gradient">Transform</span><br />Your Business?
          </h1>
          <p className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto text-lg font-medium">
            Whether you need a complete enterprise solution or a premium marketing website, our engineers are ready to build it.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          {/* Contact Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card-premium p-8 lg:p-10 rounded-[3rem] space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-electric)]/10 blur-[50px] group-hover:bg-[var(--color-electric)]/20 transition-colors duration-700 pointer-events-none" />
              
              <h3 className="text-3xl font-black font-outfit text-[var(--color-text-main)] relative z-10">Contact Info</h3>

              <div className="space-y-6 relative z-10">
                <div className="flex gap-5 items-start group/item">
                  <div className="w-14 h-14 bg-[var(--color-card)] shadow-lg rounded-2xl flex items-center justify-center text-[var(--color-electric)] group-hover/item:-translate-y-1 transition-transform shrink-0">
                    <Mail size={24} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-black font-outfit text-lg text-[var(--color-text-main)] mb-1 group-hover/item:text-[var(--color-electric)] transition-colors">Email Us</h4>
                    <p className="text-[var(--color-text-main)] opacity-60 text-sm font-medium">uma.techno585@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start group/item">
                  <div className="w-14 h-14 bg-[var(--color-card)] shadow-lg rounded-2xl flex items-center justify-center text-[var(--color-electric)] group-hover/item:-translate-y-1 transition-transform shrink-0">
                    <Phone size={24} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-black font-outfit text-lg text-[var(--color-text-main)] mb-1 group-hover/item:text-[var(--color-electric)] transition-colors">Call Us</h4>
                    <p className="text-[var(--color-text-main)] opacity-60 text-sm font-medium">+91 92743 50728</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start group/item">
                  <div className="w-14 h-14 bg-[var(--color-card)] shadow-lg rounded-2xl flex items-center justify-center text-[var(--color-electric)] group-hover/item:-translate-y-1 transition-transform shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-black font-outfit text-lg text-[var(--color-text-main)] mb-1 group-hover/item:text-[var(--color-electric)] transition-colors">Headquarters</h4>
                    <p className="text-[var(--color-text-main)] opacity-60 text-sm font-medium">Mavdi Main Road, Rajkot, Gujarat</p>
                  </div>
                </div>
              </div>

              {/* Localized Map Embed */}
              <div className="pt-4 relative z-10">
                 <div className="rounded-[2rem] overflow-hidden h-48 w-full border border-[var(--color-border)] grayscale hover:grayscale-0 transition-all duration-700 shadow-inner">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.68202052528!2d70.73889445!3d22.2745903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac1dbc5ff%3A0x7c7cc58a5d3f5ad2!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                 </div>
              </div>
            </div>
          </div>

          {/* Message Form Area */}
          <div className="lg:col-span-3 glass-card-premium p-8 lg:p-12 rounded-[3rem]">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 space-y-6"
              >
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4 animate-pulse">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-4xl font-black font-outfit text-[var(--color-text-main)] tracking-tighter">Message Received</h3>
                <p className="text-[var(--color-text-main)] opacity-70 max-w-sm text-lg font-medium">
                  Thank you for reaching out. One of our lead engineers will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-[var(--color-electric)] font-bold tracking-widest text-xs uppercase hover:underline"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative">
                <h3 className="text-3xl font-black font-outfit text-[var(--color-text-main)] mb-8 tracking-tighter">Send a Request</h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-main)] opacity-70">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[var(--color-card)]/50 backdrop-blur-sm border border-[var(--color-border)] rounded-2xl px-5 py-4 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-electric)] transition-all placeholder:text-[var(--color-text-main)]/30 font-medium"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-main)] opacity-70">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[var(--color-card)]/50 backdrop-blur-sm border border-[var(--color-border)] rounded-2xl px-5 py-4 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-electric)] transition-all placeholder:text-[var(--color-text-main)]/30 font-medium"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-main)] opacity-70">Phone (Optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[var(--color-card)]/50 backdrop-blur-sm border border-[var(--color-border)] rounded-2xl px-5 py-4 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-electric)] transition-all placeholder:text-[var(--color-text-main)]/30 font-medium"
                      placeholder="+91 90000 00000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-main)] opacity-70">Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[var(--color-card)]/50 backdrop-blur-sm border border-[var(--color-border)] rounded-2xl px-5 py-4 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-electric)] transition-all appearance-none font-medium"
                    >
                      <option>Web Development</option>
                      <option>E-commerce Solution</option>
                      <option>Mobile App</option>
                      <option>Custom Software</option>
                      <option>SEO & Marketing</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-main)] opacity-70">Message Details</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[var(--color-card)]/50 backdrop-blur-sm border border-[var(--color-border)] rounded-2xl px-5 py-4 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-electric)] transition-all resize-none placeholder:text-[var(--color-text-main)]/30 font-medium"
                    placeholder="Tell us about your project goals..."
                  ></textarea>
                </div>

                {status === "error" && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl text-sm font-medium">
                    {errorMsg}
                  </div>
                )}

                <button
                  disabled={status === "loading"}
                  type="submit"
                  className="w-full bg-gradient-premium text-white rounded-2xl py-4 font-black tracking-widest text-sm uppercase flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-lg disabled:opacity-70 disabled:hover:scale-100 mt-4"
                >
                  {status === "loading" ? "Sending..." : "Send Request"} <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
