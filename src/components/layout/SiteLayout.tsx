import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import VisitTracker from "@/components/utils/VisitTracker";
import { AnimatePresence, motion } from "framer-motion";

export default function SiteLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] relative">
      {/* Background Aurora Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-aurora mix-blend-screen" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <VisitTracker />
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex-grow flex flex-col w-full"
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
