"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [errorMsg, setErrorMsg] = useState("");
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
          subject: formData.service // Map service to subject for backend
        })
      });

      const result = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "Web Development", message: "" });
      } else {
        setStatus("error");
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
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[var(--background)] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/20 text-[var(--color-electric)] text-xs font-bold uppercase tracking-wider">
            Let's Talk
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold font-outfit text-[var(--color-text-main)]">
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </h1>
          <p className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto text-lg">
            Whether you need a complete enterprise solution or a premium marketing website, our engineers are ready to build it.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] p-8 rounded-3xl shadow-lg space-y-8">
              <h3 className="text-2xl font-bold font-outfit text-[var(--color-text-main)]">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-[var(--color-electric)]/10 rounded-xl flex items-center justify-center text-[var(--color-electric)] group-hover:bg-[var(--color-electric)] group-hover:text-white transition-all shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-text-main)] mb-1">Email Us</h4>
                    <p className="text-[var(--color-text-main)] opacity-70 text-sm">uma.techno585@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-[var(--color-electric)]/10 rounded-xl flex items-center justify-center text-[var(--color-electric)] group-hover:bg-[var(--color-electric)] group-hover:text-white transition-all shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-text-main)] mb-1">Call Us</h4>
                    <p className="text-[var(--color-text-main)] opacity-70 text-sm">+91 92743 50728</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 bg-[var(--color-electric)]/10 rounded-xl flex items-center justify-center text-[var(--color-electric)] group-hover:bg-[var(--color-electric)] group-hover:text-white transition-all shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-text-main)] mb-1">Headquarters</h4>
                    <p className="text-[var(--color-text-main)] opacity-70 text-sm">Mavdi Main Road, Rajkot, Gujarat, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                 <div className="rounded-2xl overflow-hidden h-64 w-full border border-[var(--color-border)] grayscale hover:grayscale-0 transition-all duration-700">
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

          <div className="lg:col-span-3 bg-[var(--color-card)] border border-[var(--color-border)] p-8 lg:p-12 rounded-3xl shadow-xl">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 space-y-6"
              >
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-bold font-outfit text-[var(--color-text-main)]">Message Received!</h3>
                <p className="text-[var(--color-text-main)] opacity-70 max-w-sm">
                  Thank you for reaching out. One of our lead engineers will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-[var(--color-electric)] font-bold tracking-widest text-sm uppercase hover:underline"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold font-outfit text-[var(--color-text-main)] mb-6">Send us a message</h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[var(--color-text-main)]">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-electric)] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[var(--color-text-main)]">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-electric)] transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[var(--color-text-main)]">Phone (Optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-electric)] transition-colors"
                      placeholder="+91 90000 00000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[var(--color-text-main)]">Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-electric)] transition-colors appearance-none"
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
                  <label className="text-sm font-bold text-[var(--color-text-main)]">Message Details</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-electric)] transition-colors resize-none"
                    placeholder="Tell us about your project goals..."
                  ></textarea>
                </div>

                {status === "error" && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-sm font-medium">
                    {errorMsg}
                  </div>
                )}

                <button
                  disabled={status === "loading"}
                  type="submit"
                  className="w-full bg-[var(--color-electric)] hover:bg-[var(--color-electric)]/90 text-white rounded-xl py-4 font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all hover:-translate-y-1 shadow-lg disabled:opacity-70 disabled:hover:translate-y-0"
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
