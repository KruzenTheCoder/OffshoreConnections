"use client";

import { motion, type TargetAndTransition } from "framer-motion";
import { ReactNode } from "react";

type AnimationVariant = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scale" | "blur" | "slideUp";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: AnimationVariant;
  duration?: number;
}

const variants: Record<AnimationVariant, { initial: TargetAndTransition; animate: TargetAndTransition }> = {
  fadeUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
  fadeDown: {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
  },
  fadeRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  },
  blur: {
    initial: { opacity: 0, filter: "blur(10px)", y: 20 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 60, scale: 0.97 },
    animate: { opacity: 1, y: 0, scale: 1 },
  },
};

export const ScrollReveal = ({ children, className = "", delay = 0, variant = "fadeUp", duration = 0.8 }: ScrollRevealProps) => {
  const v = variants[variant];
  return (
    <motion.div
      className={className}
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
};
