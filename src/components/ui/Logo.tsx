import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  const { theme } = useTheme();
  const [error, setError] = useState(false);

  if (theme.logoUrl && !error) {
    return (
      <div className={`relative flex shrink-0 items-center justify-center ${className}`}>
        <img
          src={theme.logoUrl}
          alt="UMA TECHNO logo"
          width={100}
          height={100}
          loading="eager"
          className="h-full w-full object-contain"
          onError={() => setError(true)}
        />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--color-electric)]/40 bg-[var(--color-electric)]/[.08] text-[var(--color-electric)] ${className}`}>
      <span className="font-black tracking-[-.12em] text-[1.35em]">U</span>
      <span className="absolute bottom-[18%] right-[17%] h-[18%] w-[18%] rounded-full bg-[var(--color-accent)]" />
    </div>
  );
}
