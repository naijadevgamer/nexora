"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

// Velocity-aware spring configuration
const springConfig = {
  stiffness: 150,
  damping: 20,
  mass: 0.5,
};

export const CinematicReveal = ({
  children,
  direction = "up",
  delay = 0,
}: {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}) => {
  const directionMap = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionMap[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
        ...springConfig,
      }}
    >
      {children}
    </motion.div>
  );
};

export const ParallaxSection = ({
  children,
  speed = 0.5,
}: {
  children: ReactNode;
  speed?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: springY }}>
      {children}
    </motion.div>
  );
};

export const ScaleOnScroll = ({
  children,
  from = 0.95,
  to = 1,
}: {
  children: ReactNode;
  from?: number;
  to?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [from, to, from]);
  const springScale = useSpring(scale, { stiffness: 200, damping: 20 });

  return (
    <motion.div ref={ref} style={{ scale: springScale }}>
      {children}
    </motion.div>
  );
};
