import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ThemeProvider } from "@/components/ThemeProvider";
import VisitTracker from "@/components/utils/VisitTracker";

export default function SiteLayout() {
  return (
    <ThemeProvider>
      <VisitTracker />
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </ThemeProvider>
  );
}
