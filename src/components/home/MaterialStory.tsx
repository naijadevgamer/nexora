"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function MaterialStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const clipProgress = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.3, 0.5], [40, 0]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Full-width image with clip reveal */}
      <motion.div
        style={{ clipPath: `inset(${clipProgress}% 0% 0% 0%)` }}
        className="absolute inset-0"
      >
        <Image
          src="/images/material-closeup.jpg"
          alt="Material texture close-up"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Floating text */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 flex h-full items-center"
      >
        <div className="container">
          <div className="max-w-2xl space-y-8">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-px w-16 origin-left bg-primary"
            />

            <h2 className="text-4xl font-light leading-tight text-white md:text-6xl">
              The hand
              <br />
              behind the
              <br />
              garment
            </h2>

            <p className="max-w-md text-lg leading-relaxed text-stone-300">
              Every stitch tells the story of the artisan who placed it. We
              photograph our makers, not just our products.
            </p>

            <motion.button
              whileHover={{ gap: "16px" }}
              className="group flex items-center gap-3 border-b border-stone-400/50 pb-2 text-sm uppercase tracking-wider text-stone-200 transition-colors hover:border-stone-200"
            >
              <span>Meet the artisans</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
