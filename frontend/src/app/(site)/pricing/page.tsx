import React from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "499",
    description: "Perfect for small businesses and startups.",
    features: [
      "5 Page Website",
      "Mobile Responsive",
      "Basic SEO",
      "1 Month Support",
      "Free SSL Certificate"
    ],
    highlight: false,
    cta: "Get Started"
  },
  {
    name: "Business",
    price: "999",
    description: "Ideal for growing companies needing more features.",
    features: [
      "15 Page Website",
      "Custom UI/UX Design",
      "Advanced SEO",
      "E-commerce Ready",
      "3 Months Support",
      "Priority Email Support"
    ],
    highlight: true,
    cta: "Most Popular"
  },
  {
    name: "Enterprise",
    price: "2499",
    description: "Custom solutions for large scale organizations.",
    features: [
      "Unlimited Pages",
      "Custom Software/App",
      "Full SEO Strategy",
      "Maintenance & Support",
      "24/7 Priority Support",
      "Dedicated Manager"
    ],
    highlight: false,
    cta: "Contact Us"
  }
];

export const metadata = {
  title: "Pricing Plans | Affordable Digital Solutions",
  description: "Check out our flexible pricing plans for web development, app development, and digital marketing.",
};

export default function PricingPage() {
  return (
    <div className="py-20 space-y-20">
      <section className="max-w-7xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-electric font-bold tracking-widest text-sm uppercase">Pricing Plans</h2>
        <h1 className="text-5xl lg:text-7xl font-bold font-outfit">
          Choose the Perfect <span className="text-gradient">Plan</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Flexible pricing designed to help your business grow at any stage. 
          No hidden fees, just pure value.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.name} 
            className={`glass-card p-10 rounded-[3rem] border transition-all flex flex-col ${
              plan.highlight 
                ? "border-electric/50 bg-electric/5 ring-4 ring-electric/10 scale-105 z-10" 
                : "border-white/5 hover:border-white/20"
            }`}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold font-outfit mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm">{plan.description}</p>
            </div>

            <div className="mb-10">
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold font-outfit">$</span>
                <span className="text-6xl font-bold font-outfit leading-none">{plan.price}</span>
                <span className="text-gray-500 font-medium">/project</span>
              </div>
            </div>

            <ul className="space-y-4 mb-12 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-300">
                  <div className="w-5 h-5 bg-electric/20 text-electric rounded-full flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={4} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <Link 
              href="/contact"
              className={`w-full py-5 rounded-2xl font-bold text-center transition-all ${
                plan.highlight 
                  ? "bg-electric text-white shadow-xl shadow-electric/20 hover:scale-105" 
                  : "bg-white/5 hover:bg-white/10 text-white"
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center bg-navy-light/50 p-12 rounded-[2rem] border border-white/5">
         <h4 className="text-2xl font-bold mb-4">Need a Custom Quote?</h4>
         <p className="text-gray-400 mb-8">
           If your project requirements are unique, we can provide a tailored quote that fits your specific needs.
         </p>
         <Link href="/contact" className="inline-flex items-center gap-2 text-electric font-bold hover:underline">
           Talk to an Expert <ArrowRight size={20} />
         </Link>
      </section>
    </div>
  );
}
