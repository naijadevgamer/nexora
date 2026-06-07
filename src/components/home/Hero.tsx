"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";

interface HeroProps {
  heroData: { image_1: any; image_2?: any } | null;
}

export default function Hero({ heroData }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Scroll-based transformations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -80]);
  const overlayOpacity = useTransform(scrollYProgress, [0.9, 0.7], [0.7, 0.7]);

  // Parallax on mouse move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate mouse position relative to center
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;

      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const imageUrl = heroData?.image_1
    ? urlFor(heroData.image_1).width(1920).height(1080).quality(90).url()
    : "/placeholder-hero.jpg";

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-stone-950"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{
          scale: imageScale,
          x: springX,
          y: springY,
        }}
        className="absolute inset-0 scale-110"
      >
        <Image
          src={imageUrl}
          alt="Nexora Collection"
          fill
          className="object-cover opacity-90"
          priority
          quality={95}
          sizes="100vw"
        />
      </motion.div>

      {/* Dynamic Gradient Overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-br from-black via-stone-900 to-black"
      />

      {/* Vignette Effect */}
      <div className="bg-radial-gradient pointer-events-none absolute inset-0" />

      {/* Main Content */}
      <div className="relative bottom-0 z-10 flex h-full flex-col justify-between px-8 pb-16 pt-24 lg:px-20">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <div className="h-px w-12 bg-stone-400/50" />
          <span className="text-xs font-light uppercase tracking-[0.3em] text-stone-300/90 sm:font-medium">
            Autumn Winter 2024
          </span>
        </motion.div>

        {/* Center Content */}
        <motion.div style={{ y: textY }} className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-6"
          >
            <h1 className="outline-text text-5xl font-extralight tracking-[-0.03em] text-stone-100 sm:text-6xl md:text-8xl lg:text-9xl">
              The Art
              <br />
              of Restraint
            </h1>

            <p className="max-w-xl text-base font-light leading-relaxed text-stone-300/80 md:text-lg">
              Curated essentials for those who understand that true luxury
              whispers rather than shouts.
            </p>
          </motion.div>

          {/* CTA Buttons - Minimal & Intentional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            <Link
              href="/all-products"
              className="inline-flex items-center gap-2 border-b-2 border-white/40 pb-1 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:border-primary hover:text-primary dark:text-foreground dark:hover:text-primary"
            >
              Explore the collection
              <span className="text-lg leading-none">→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-between"
        >
          <span className="text-xs font-light tracking-wider text-stone-400">
            EST. 2024 · New York
          </span>

          <div className="flex items-center gap-8">
            <span className="text-xs font-light tracking-wider text-stone-400">
              SCROLL
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-16 w-px bg-stone-400/30"
            />
          </div>
        </motion.div>
      </div>

      {/* Custom Cursor Effect (Desktop only) */}
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed z-50 hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 backdrop-blur-sm lg:flex"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          opacity: isHovering ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      >
        <span className="text-xs font-light text-white">View</span>
      </motion.div>

      <style jsx>{`
        .bg-radial-gradient {
          background: radial-gradient(
            ellipse at center,
            transparent 40%,
            rgba(0, 0, 0, 0.3) 100%
          );
        }
      `}</style>
    </section>
  );
}
