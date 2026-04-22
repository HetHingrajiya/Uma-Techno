import React from "react";

export default function TermsPage() {
  return (
    <div className="py-20 max-w-4xl mx-auto px-6 space-y-8">
      <h1 className="text-4xl lg:text-6xl font-bold font-outfit mb-12">Terms of Service</h1>
      <p className="text-gray-400">Last Updated: April 22, 2026</p>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
        <p className="text-gray-400 leading-relaxed">
          By accessing and using the services provided by Uma Techno, you agree to be bound by these Terms of Service. 
          If you do not agree to these terms, please do not use our services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">2. Use of Services</h2>
        <p className="text-gray-400 leading-relaxed">
          You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, 
          restrict or inhibit anyone else&apos;s use and enjoyment of the services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">3. Intellectual Property</h2>
        <p className="text-gray-400 leading-relaxed">
          All content included on this site, such as text, graphics, logos, images, and software, is the property 
          of Uma Techno or its content suppliers and protected by international copyright laws.
        </p>
      </section>
    </div>
  );
}
