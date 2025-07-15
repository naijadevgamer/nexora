// components/ui/tilt.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, transform } from "framer-motion";

interface TiltProps {
  children: React.ReactNode;
  tiltMax?: number;
  scale?: number;
  perspective?: number;
  glare?: boolean;
  glareMaxOpacity?: number;
  className?: string;
}

export const Tilt: React.FC<TiltProps> = ({
  children,
  tiltMax = 15,
  scale = 1.05,
  perspective = 1000,
  glare = true,
  glareMaxOpacity = 0.2,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });
  const scaleSpring = useSpring(isHovered || isTapped ? scale : 1, {
    stiffness: 300,
    damping: 10,
  });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const absoluteX = e.clientX - rect.left;
    const absoluteY = e.clientY - rect.top;
    const relativeX = (absoluteX - rect.width / 2) / (rect.width / 2);
    const relativeY = (absoluteY - rect.height / 2) / (rect.height / 2);

    x.set(relativeX * tiltMax);
    y.set(relativeY * tiltMax * -1);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
    setIsTapped(false);
  };

  const rotateX = transform(
    ySpring.get(),
    [-tiltMax, tiltMax],
    [tiltMax, -tiltMax],
  );
  const rotateY = transform(
    xSpring.get(),
    [-tiltMax, tiltMax],
    [-tiltMax, tiltMax],
  );

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={handlePointerLeave}
      onPointerDown={() => setIsTapped(true)}
      onPointerUp={() => setIsTapped(false)}
      className={`relative ${className}`}
      style={{ perspective }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale: scaleSpring,
          transformStyle: "preserve-3d",
        }}
        className="h-full w-full"
      >
        {children}
        {glare && (
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(105deg, transparent 40%, rgba(255,255,255,${glareMaxOpacity}) 50%, transparent 60%)`,
              // opacity: transform(
              //   [xSpring.get(), ySpring.get()],
              //   ([latestX, latestY]) =>
              //     Math.abs(latestX) * 0.5 + Math.abs(latestY) * 0.5,
              // ),
              transform: "translateZ(0.1px)",
              pointerEvents: "none",
            }}
          />
        )}
      </motion.div>
    </div>
  );
};
