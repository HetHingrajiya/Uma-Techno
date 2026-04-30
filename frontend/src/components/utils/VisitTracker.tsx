"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const trackVisit = async () => {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://uma-techno-phrb.vercel.app'}/api/v1/analytics/track`, {
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
