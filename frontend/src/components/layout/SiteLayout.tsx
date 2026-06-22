import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import VisitTracker from "@/components/utils/VisitTracker";

export default function SiteLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)]">
      <VisitTracker />
      <Navbar />
      <main className="flex-grow flex flex-col w-full">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
