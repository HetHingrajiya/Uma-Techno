import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import VisitTracker from "@/components/utils/VisitTracker";
import SmoothScroll from "@/components/fx/SmoothScroll";
import Cursor from "@/components/fx/Cursor";

export default function SiteLayout() {
  return (
    <div className="flex flex-col min-h-screen mesh-bg noise relative text-[var(--color-text-main)]">
      <VisitTracker />
      <SmoothScroll />
      <Cursor />
      <Navbar />
      <main className="flex-grow flex flex-col w-full">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
