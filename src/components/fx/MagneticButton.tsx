import { useRef, ReactNode, MouseEvent, forwardRef, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & { children: ReactNode; strength?: number };

const MagneticButton = forwardRef<HTMLDivElement, Props>(function MagneticButton(
  { children, strength = 0.35, className = "", ...rest },
  _ref,
) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={"inline-block transition-transform duration-300 ease-out will-change-transform " + className}
      {...rest}
    >
      {children}
    </div>
  );
});

export default MagneticButton;