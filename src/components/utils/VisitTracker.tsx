import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function VisitTracker() {
  const pathname = useLocation().pathname;

  useEffect(() => {
    const trackVisit = async () => {
      // Don't track admin pages or internal dashboard paths
      if (pathname.includes('/admin')) return;

      try {
        await fetch(`${import.meta.env.VITE_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/analytics/track`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ path: pathname })
        });
      } catch (err) {
        // Fail silently
      }
    };

    trackVisit();
  }, [pathname]);

  return null;
}

