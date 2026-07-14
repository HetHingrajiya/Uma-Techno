import { useEffect, useRef, type ElementType } from "react";

type Props = {
  children: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
};

export default function TextReveal({
  children,
  as = "span",
  className = "",
  delay = 0,
  stagger = 0.04,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>("[data-w]"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      spans.forEach((s) => (s.style.transform = "translateY(0)"), (s: HTMLElement) => (s.style.opacity = "1"));
      return;
    }
    spans.forEach((s, i) => {
      s.style.transform = "translateY(110%)";
      s.style.opacity = "0";
      s.style.transition = `transform 900ms cubic-bezier(.16,1,.3,1) ${delay + i * stagger}s, opacity 700ms ease ${delay + i * stagger}s`;
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            spans.forEach((s) => {
              s.style.transform = "translateY(0)";
              s.style.opacity = "1";
            });
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, stagger, children]);

  const words = children.split(" ");
  const Tag = as as any;
  return (
    <Tag ref={ref as any} className={className + " inline-block"}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-baseline">
          <span data-w className="inline-block will-change-transform">
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}