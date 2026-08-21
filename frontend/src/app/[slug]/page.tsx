import { Link, useParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function SEOLandingPage() {
   const { slug } = useParams();
   const paramsSlug = slug || "";
   const isCitySpecific = paramsSlug.includes('-rajkot') || paramsSlug.includes('-gujarat');
   const serviceName = paramsSlug.replace(/-rajkot|-gujarat/g, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

   return (
      <div className="flex flex-col gap-16 lg:gap-32 pb-20 lg:pb-32 bg-[var(--background)] min-h-screen pt-32">
         <section className="max-w-7xl mx-auto px-6 w-full text-center space-y-6">
            <div 
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border"
               style={{ 
                  backgroundColor: "var(--color-blue-glow, rgba(6, 182, 212, 0.15))", 
                  borderColor: "var(--color-blue-glow, rgba(6, 182, 212, 0.2))",
                  color: "var(--color-electric)" 
               }}
            >
               Premium IT Solutions
            </div>
            <h1 className="text-4xl lg:text-6xl 2xl:text-7xl font-bold font-outfit tracking-tight text-[var(--color-text-main)]">
               Best <span className="text-gradient">{serviceName}</span> <br />
               for Growing Brands
            </h1>
            <p className="text-[var(--color-text-main)] opacity-70 max-w-2xl mx-auto 2xl:text-lg">
               We deliver high-end, scalable, and performance-driven {serviceName.toLowerCase()} solutions designed to dominate your market and maximize ROI.
            </p>
            <div className="pt-8">
               <Link
                  to="/contact"
                  className="px-8 py-4 text-white rounded-xl font-bold text-base transition-all hover:scale-105 shadow-xl btn-premium inline-block"
                  style={{ backgroundColor: "var(--color-electric)" }}
               >
                  Get a Free Quote
               </Link>
            </div>
         </section>

         <section className="max-w-5xl mx-auto px-6 w-full">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-[3rem] p-8 lg:p-16 shadow-xl">
               <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                     <h2 className="text-3xl font-bold font-outfit text-[var(--color-text-main)]">Why Choose Uma Techno?</h2>
                     <p className="text-[var(--color-text-main)] opacity-70 leading-relaxed">
                        As a leading agency, we don't just write code. We engineer complete business systems optimized for speed, security, and search engines.
                     </p>
                     <ul className="space-y-4 pt-4">
                        {[
                           "100% Custom Architecture",
                           "Built-in Technical SEO",
                           "Lightning Fast Performance",
                           "Dedicated Post-Launch Support"
                        ].map(item => (
                           <li key={item} className="flex items-center gap-3 text-[var(--color-text-main)] font-medium">
                              <CheckCircle className="text-[var(--color-electric)]" size={20} />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="bg-[var(--color-navy-light)] border border-[var(--color-border)] rounded-2xl p-8 flex flex-col justify-center text-center space-y-4">
                     <div className="text-[var(--color-electric)] font-bold tracking-widest text-sm uppercase">Limited Availability</div>
                     <h3 className="text-2xl font-bold text-[var(--color-text-main)]">Ready to scale your digital presence?</h3>
                     <p className="text-[var(--color-text-main)] opacity-70 text-sm">Our engineering calendar fills up quickly. Contact us today to secure your project slot.</p>
                     <Link to="/contact" className="mt-4 text-[var(--color-electric)] font-bold uppercase tracking-wider hover:underline">
                        Schedule Consultation &rarr;
                     </Link>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
