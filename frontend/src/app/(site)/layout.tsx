import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StickyCTA from "@/components/ui/StickyCTA";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </>
  );
}
