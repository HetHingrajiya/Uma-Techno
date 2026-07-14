import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;

    document.documentElement.classList.add("cursor-none-app");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(var(--s, 1))`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const enter = () => ring.current?.style.setProperty("--s", "2.2");
    const leave = () => ring.current?.style.setProperty("--s", "1");

    const targets = 'a, button, [role="button"], [data-cursor], input, textarea, select';
    const bind = () => {
      document.querySelectorAll(targets).forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
    };
    const mo = new MutationObserver(bind);
    mo.observe(document.body, { childList: true, subtree: true });
    bind();

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      mo.disconnect();
      document.documentElement.classList.remove("cursor-none-app");
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-9 w-9 rounded-full border border-[var(--color-electric)]/70 mix-blend-difference transition-[width,height,border-color] duration-300 hidden md:block"
        style={{ transform: "translate3d(-100px,-100px,0)" }}
      />
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-[var(--color-electric)] hidden md:block"
        style={{ transform: "translate3d(-100px,-100px,0)" }}
      />
    </>
  );
}