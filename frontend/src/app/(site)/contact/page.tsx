import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "Website",
    budget: "Not sure",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subject: `${formData.projectType} Inquiry - ${formData.company || formData.name}`
        })
      });

      const result = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", company: "", email: "", phone: "", projectType: "Website", budget: "Not sure", message: "" });
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
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-6 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[var(--color-electric)]/40 bg-[var(--color-electric)]/10 text-[var(--color-electric)] text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md neo-glow"
          >
            LET'S BUILD SOMETHING USEFUL
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black font-outfit text-white tracking-tighter"
          >
            Have an idea? <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-accent)] animate-pulse">Let's build it.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto text-lg lg:text-xl font-medium"
          >
            Tell us what you're trying to solve. We'll help turn the idea into a practical digital product.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Information Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="glass-card p-10 rounded-[2.5rem] border border-[var(--color-border)] shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-electric)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <h3 className="text-2xl font-black font-outfit text-white mb-8 relative z-10">Direct Contact</h3>

              <div className="space-y-8 relative z-10">
                <a href="mailto:uma.techno585@gmail.com" className="flex gap-4 items-start group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-electric)] group-hover/item:bg-[var(--color-electric)] group-hover/item:text-white transition-all shrink-0 shadow-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Email Us</h4>
                    <p className="text-[var(--color-text-main)] opacity-60 text-sm font-medium group-hover/item:text-[var(--color-electric)] transition-colors">uma.techno585@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+919274350728" className="flex gap-4 items-start group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-electric)] group-hover/item:bg-[var(--color-electric)] group-hover/item:text-white transition-all shrink-0 shadow-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Call Us</h4>
                    <p className="text-[var(--color-text-main)] opacity-60 text-sm font-medium group-hover/item:text-[var(--color-electric)] transition-colors">+91 92743 50728</p>
                  </div>
                </a>

                <div className="flex gap-4 items-start group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-electric)] group-hover/item:bg-[var(--color-electric)] group-hover/item:text-white transition-all shrink-0 shadow-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Headquarters</h4>
                    <p className="text-[var(--color-text-main)] opacity-60 text-sm font-medium">Rajkot, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-8"
          >
            <div className="glass-card p-10 lg:p-14 rounded-[3rem] border border-[var(--color-border)] shadow-2xl relative overflow-hidden">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-electric)]/10 blur-[100px] rounded-full pointer-events-none" />
              
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 space-y-6 relative z-10"
                >
                  <div className="w-24 h-24 bg-green-500/10 border border-green-500/30 rounded-[2rem] flex items-center justify-center text-green-500 mb-4 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-4xl font-black font-outfit text-white">Message Received.</h3>
                  <p className="text-[var(--color-text-main)] opacity-70 max-w-sm text-lg">
                    Thank you. A lead engineer will review your requirements and contact you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 px-6 py-3 rounded-xl border border-white/10 text-white font-bold tracking-widest text-sm uppercase hover:bg-white/5 transition-all"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest font-bold text-[var(--color-text-main)] opacity-60">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[var(--color-electric)] focus:bg-black/60 transition-all font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest font-bold text-[var(--color-text-main)] opacity-60">Company Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[var(--color-electric)] focus:bg-black/60 transition-all font-medium"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest font-bold text-[var(--color-text-main)] opacity-60">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[var(--color-electric)] focus:bg-black/60 transition-all font-medium"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest font-bold text-[var(--color-text-main)] opacity-60">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[var(--color-electric)] focus:bg-black/60 transition-all font-medium"
                        placeholder="+91 90000 00000"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest font-bold text-[var(--color-text-main)] opacity-60">Project Type *</label>
                      <select
                        value={formData.projectType}
                        onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[var(--color-electric)] focus:bg-black/60 transition-all appearance-none font-medium cursor-pointer"
                        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236b7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                      >
                        <option value="Website">Website</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="ERP">ERP</option>
                        <option value="SaaS">SaaS</option>
                        <option value="E-Commerce">E-Commerce</option>
                        <option value="Custom Software">Custom Software</option>
                        <option value="UI/UX">UI/UX Design</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest font-bold text-[var(--color-text-main)] opacity-60">Estimated Budget *</label>
                      <select
                        value={formData.budget}
                        onChange={e => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[var(--color-electric)] focus:bg-black/60 transition-all appearance-none font-medium cursor-pointer"
                        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236b7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                      >
                        <option value="Under ₹25K">Under ₹25,000</option>
                        <option value="₹25K–₹50K">₹25,000 – ₹50,000</option>
                        <option value="₹50K–₹1L">₹50,000 – ₹1,00,000</option>
                        <option value="₹1L–₹5L">₹1,00,000 – ₹5,00,000</option>
                        <option value="₹5L+">₹5,00,000+</option>
                        <option value="Not sure">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest font-bold text-[var(--color-text-main)] opacity-60">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[var(--color-electric)] focus:bg-black/60 transition-all resize-none font-medium"
                      placeholder="Tell us about your project goals and technical requirements..."
                    ></textarea>
                  </div>

                  {status === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-sm font-bold flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="btn-primary-animated w-full rounded-2xl py-5 font-black tracking-widest uppercase flex items-center justify-center gap-3 transition-all shadow-[0_0_20px_var(--color-blue-glow)] disabled:opacity-50 disabled:pointer-events-none mt-4 text-sm"
                  >
                    {status === "loading" ? "Initializing..." : "Start the Conversation"} <ArrowRight size={20} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

