import { Reveal } from "@/components/ui/Reveal";

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 lg:pt-48 max-w-4xl mx-auto px-6 space-y-8 min-h-screen">
      <Reveal direction="down">
        <h1 className="text-4xl lg:text-6xl font-bold font-outfit mb-12 text-[var(--color-text-main)]">Privacy Policy</h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-[var(--color-text-main)] opacity-70">Last Updated: April 22, 2026</p>
      </Reveal>
      
      <Reveal delay={0.2}>
        <section className="space-y-4 bg-[var(--color-card)] p-8 rounded-3xl border border-[var(--color-border)] shadow-lg">
          <h2 className="text-2xl font-bold text-[var(--color-text-main)]">1. Introduction</h2>
          <p className="text-[var(--color-text-main)] opacity-70 leading-relaxed">
            Welcome to Uma Techno. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we look after your personal data when you visit our website 
            and tell you about your privacy rights and how the law protects you.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.3}>
        <section className="space-y-4 bg-[var(--color-card)] p-8 rounded-3xl border border-[var(--color-border)] shadow-lg">
          <h2 className="text-2xl font-bold text-[var(--color-text-main)]">2. Data We Collect</h2>
          <p className="text-[var(--color-text-main)] opacity-70 leading-relaxed">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped 
            together as follows: Identity Data, Contact Data, Technical Data, and Usage Data.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.4}>
        <section className="space-y-4 bg-[var(--color-card)] p-8 rounded-3xl border border-[var(--color-border)] shadow-lg">
          <h2 className="text-2xl font-bold text-[var(--color-text-main)]">3. How We Use Your Data</h2>
          <p className="text-[var(--color-text-main)] opacity-70 leading-relaxed">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data 
            to provide services to you, to communicate with you, and to improve our website.
          </p>
        </section>
      </Reveal>
    </div>
  );
}
