// components/motion-div.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionDivProps {
  children: ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
  whileInView?: any;
  viewport?: object;
}

export const MotionDiv = ({
  children,
  className,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 0.5 },
  whileInView,
  viewport = { once: true, margin: "0px 0px -50px 0px" },
}: MotionDivProps) => {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      whileInView={whileInView}
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
};
