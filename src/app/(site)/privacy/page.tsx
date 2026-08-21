import React from "react";
import { ShieldCheck, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-transparent min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <section className="text-center space-y-6 mb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[var(--color-electric)]/40 bg-[var(--color-electric)]/10 text-[var(--color-electric)] text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md neo-glow"
          >
            LEGAL
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black font-outfit text-white tracking-tighter leading-tight"
          >
            Privacy <span className="text-gradient">Policy.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-text-main)] opacity-70 text-lg font-medium"
          >
            Last Updated: August 21, 2026
          </motion.p>
        </section>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-10 lg:p-16 rounded-[3rem] border border-[var(--color-border)] relative z-10 space-y-12"
        >
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white mb-6">
               <ShieldCheck className="text-[var(--color-electric)]" size={28} />
               <h2 className="text-3xl font-black font-outfit">1. Introduction</h2>
            </div>
            <p className="text-[var(--color-text-main)] opacity-70 leading-relaxed font-medium text-lg">
              Welcome to Uma Techno. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website 
              and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black font-outfit text-white mb-4">2. Data We Collect</h2>
            <p className="text-[var(--color-text-main)] opacity-70 leading-relaxed font-medium text-lg">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped 
              together as follows:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-main)] opacity-70 font-medium text-lg ml-4">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black font-outfit text-white mb-4">3. How We Use Your Data</h2>
            <p className="text-[var(--color-text-main)] opacity-70 leading-relaxed font-medium text-lg">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data 
              in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-main)] opacity-70 font-medium text-lg ml-4">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black font-outfit text-white mb-4">4. Data Security</h2>
            <p className="text-[var(--color-text-main)] opacity-70 leading-relaxed font-medium text-lg">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <div className="pt-8 border-t border-[var(--color-border)] mt-12 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 text-[var(--color-text-main)] opacity-70 font-medium">
               <Mail size={20} className="text-[var(--color-electric)]" />
               Questions? Contact <a href="mailto:privacy@umatechno.in" className="text-white hover:text-[var(--color-electric)] transition-colors">privacy@umatechno.in</a>
            </div>
            <Link to="/contact" className="text-[var(--color-electric)] font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:underline">
               Contact Support <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
