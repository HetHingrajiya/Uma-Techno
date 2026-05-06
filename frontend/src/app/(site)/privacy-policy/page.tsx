import { Shield, Lock, Eye, FileText } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Uma Techno",
  description: "Learn how Uma Techno collects, uses, and protects your personal data in compliance with digital privacy standards.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information that you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, and business details.",
      icon: Eye
    },
    {
      title: "How We Use Your Information",
      content: "The information we collect is used to provide and improve our services, respond to your inquiries, send administrative information, and for marketing purposes where you have given consent.",
      icon: FileText
    },
    {
      title: "Data Security",
      content: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
      icon: Lock
    },
    {
      title: "Cookies and Tracking",
      content: "Our website uses cookies to enhance user experience and analyze traffic. You can choose to disable cookies through your browser settings, though this may affect site functionality.",
      icon: Shield
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-[var(--background)] min-h-screen">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold font-outfit text-[var(--color-text-main)]">Privacy <span className="text-gradient">Policy</span></h1>
          <p className="text-[var(--color-text-main)] opacity-60">Last Updated: May 7, 2026</p>
        </div>

        <div className="prose prose-invert max-w-none text-[var(--color-text-main)] opacity-80 leading-relaxed space-y-8">
          <p>
            At Uma Techno, we take your privacy seriously. This policy outlines our commitment to protecting your personal data and explains your rights regarding the information we hold about you.
          </p>

          <div className="grid gap-8 pt-8">
            {sections.map((section, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl border border-[var(--color-border)] space-y-4">
                <div className="w-12 h-12 bg-[var(--color-electric)]/10 text-[var(--color-electric)] rounded-xl flex items-center justify-center">
                  <section.icon size={24} />
                </div>
                <h2 className="text-2xl font-bold font-outfit text-[var(--color-text-main)]">{section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6 pt-8">
            <h2 className="text-2xl font-bold font-outfit text-[var(--color-text-main)]">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact our data protection officer at:
            </p>
            <div className="bg-[var(--color-card)] p-6 rounded-2xl border border-[var(--color-border)]">
              <p><strong>Email:</strong> privacy@umatechno.in</p>
              <p><strong>Address:</strong> Mavdi Main Road, Rajkot, Gujarat, India - 360004</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
