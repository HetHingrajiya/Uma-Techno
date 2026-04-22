"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { apiFetch } from "@/lib/api";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await apiFetch('/contacts', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 space-y-20">
      <section className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-5xl lg:text-7xl font-bold font-outfit">
          Get In <span className="text-gradient">Touch</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? We&apos;d love to hear from you. 
          Fill out the form below and our team will get back to you shortly.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="glass-card p-8 rounded-3xl border-white/5 space-y-6">
            <h3 className="text-2xl font-bold font-outfit">Contact Information</h3>
            <p className="text-gray-400">Feel free to reach out through any of these channels.</p>
            
            <div className="space-y-6 pt-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center text-electric shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-lg font-bold">+91 92743 50728</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center text-electric shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg font-bold">uma.techno585@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center text-electric shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Address</p>
                  <p className="text-lg font-bold">Rajkot, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl border-white/5 bg-electric/5">
             <h4 className="font-bold mb-4">Follow Us</h4>
             <div className="flex gap-4">
                {["FB", "TW", "IG", "LI"].map(social => (
                  <div key={social} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold hover:bg-electric transition-all cursor-pointer">
                    {social}
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="glass-card p-10 rounded-[3rem] border-white/5">
            {success ? (
              <div className="py-20 text-center space-y-6">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                   <Send size={40} />
                </div>
                <h2 className="text-3xl font-bold font-outfit text-white">Message Sent!</h2>
                <p className="text-gray-400">Thank you for reaching out. We will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="text-electric font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-electric transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-electric transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-electric transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-electric transition-all appearance-none"
                    >
                      <option value="" className="bg-navy">Select a Service</option>
                      <option value="web" className="bg-navy">Web Development</option>
                      <option value="app" className="bg-navy">App Development</option>
                      <option value="seo" className="bg-navy">SEO Services</option>
                      <option value="other" className="bg-navy">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Your Message</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-electric transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-electric hover:bg-electric/90 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-electric/20 flex items-center justify-center gap-3 active:scale-[0.99]"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" size={24} />
                  ) : (
                    <>Send Message <Send size={20} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
