import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import VisitTracker from "@/components/utils/VisitTracker";
import { AnimatePresence, motion } from "framer-motion";

export default function SiteLayout() {
  const location = useLocation();

  return (
    <div className="relative flex min-h-screen flex-col bg-[var(--background)]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-aurora" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <VisitTracker />
        <Navbar />
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex w-full flex-1 flex-col"
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
}
