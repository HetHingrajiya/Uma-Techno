import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-light pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-electric to-accent rounded-lg flex items-center justify-center font-bold text-white">
              U
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Uma<span className="text-electric">Techno</span>
            </span>
          </Link>
          <p className="text-gray-400 leading-relaxed">
            Leading the digital transformation with innovative software solutions, 
            premium designs, and strategic digital marketing.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-electric hover:text-white transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
          <ul className="space-y-4">
            {["About Us", "Our Services", "Portfolio", "Pricing", "Latest Blogs"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-gray-400 hover:text-electric transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
          <ul className="space-y-4">
            {["Web Development", "App Development", "UI/UX Design", "SEO Optimization", "Digital Branding"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-gray-400 hover:text-electric transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-gray-400">
              <MapPin className="text-electric shrink-0" size={20} />
              <span>123 Tech Square, Rajkot, Gujarat, India</span>
            </li>
            <li className="flex gap-3 text-gray-400">
              <Phone className="text-electric shrink-0" size={20} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex gap-3 text-gray-400">
              <Mail className="text-electric shrink-0" size={20} />
              <span>info@umatechno.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Uma Techno. All rights reserved.
        </p>
        <div className="flex gap-8 text-sm">
          <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
