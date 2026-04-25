"use client";

import { motion, Variants } from "framer-motion";

interface TypewriterTitleProps {
  title: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
  delay?: number;
}

export const TypewriterTitle = ({ title, className = "", as = "h1", delay = 0 }: TypewriterTitleProps) => {
  const words = title.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const MotionTag = motion[as as keyof typeof motion] as any;

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex}>
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((char, charIndex) => (
              <motion.span
                key={charIndex}
                variants={child}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
          {wordIndex !== words.length - 1 && " "}
        </span>
      ))}
    </MotionTag>
  );
};
