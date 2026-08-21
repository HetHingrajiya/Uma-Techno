import { Scale, FileCheck, AlertCircle, Gavel } from "lucide-react";
// // 
export default function TermsPage() {
  const sections = [
    {
      title: "Service Agreement",
      content: "By engaging with Uma Techno, you agree to the specific project terms outlined in your service proposal. All work is performed on a professional basis with clearly defined milestones and deliverables.",
      icon: Gavel
    },
    {
      title: "Intellectual Property",
      content: "Unless otherwise agreed, all custom code and designs created for the client become the property of the client upon full payment. Uma Techno retains the right to showcase the work in our portfolio.",
      icon: FileCheck
    },
    {
      title: "User Responsibilities",
      content: "Users of our website and services must provide accurate information and refrain from any activities that could harm our infrastructure or reputation.",
      icon: Scale
    },
    {
      title: "Limitation of Liability",
      content: "Uma Techno will not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our services.",
      icon: AlertCircle
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-[var(--background)] min-h-screen">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold font-outfit text-[var(--color-text-main)]">Terms & <span className="text-gradient">Conditions</span></h1>
          <p className="text-[var(--color-text-main)] opacity-60">Last Updated: May 7, 2026</p>
        </div>

        <div className="prose prose-invert max-w-none text-[var(--color-text-main)] opacity-80 leading-relaxed space-y-8">
          <p>
            Welcome to Uma Techno. By accessing our website or using our services, you agree to comply with and be bound by the following terms and conditions of use.
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
            <h2 className="text-2xl font-bold font-outfit text-[var(--color-text-main)]">Legal Jurisdiction</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts in Rajkot, Gujarat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

