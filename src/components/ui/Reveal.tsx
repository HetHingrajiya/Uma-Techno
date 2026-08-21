import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export const Reveal = ({
  children,
  width = "fit-content",
  delay = 0.2,
  direction = "up",
  className = "",
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 75 : direction === "down" ? -75 : 0,
      x: direction === "left" ? 75 : direction === "right" ? -75 : 0,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
    },
  };

  // If no direction, just fade in
  if (direction === "none") {
    variants.hidden = { opacity: 0, y: 0, x: 0, filter: "blur(10px)" };
    variants.visible = { opacity: 1, y: 0, x: 0, filter: "blur(0px)" };
  }

  return (
    <div ref={ref} style={{ width }} className={`relative overflow-hidden ${className}`}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }} // smooth cubic bezier
      >
        {children}
      </motion.div>
    </div>
  );
};
