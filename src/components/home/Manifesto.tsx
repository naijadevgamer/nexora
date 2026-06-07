"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.8], [0, 1, 1]);
  const textY = useTransform(scrollYProgress, [0.3, 0.5], [30, 0]);
  const lineScale = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <Image
          src="/images/material-texture.jpg"
          alt="Textile detail"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background/90" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
            {/* Left Column - Numbers/Stats */}
            <div className="lg:col-span-4">
              <motion.div
                style={{ opacity: textOpacity, y: textY }}
                className="space-y-16"
              >
                {[
                  {
                    number: "01",
                    label: "Years of material research before first collection",
                  },
                  { number: "12", label: "Artisans across Italy and Japan" },
                  { number: "3", label: "Collections per year, never more" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <span className="text-5xl font-thin">{stat.number}</span>
                    <p className="max-w-[200px] text-sm leading-relaxed text-muted-foreground">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Manifesto Text */}
            <div className="lg:col-span-7 lg:col-start-6">
              <motion.div
                style={{ opacity: textOpacity, y: textY }}
                className="space-y-12"
              >
                {/* Decorative line */}
                <motion.div
                  style={{ scaleX: lineScale }}
                  className="h-px w-24 origin-left bg-primary"
                />

                <div className="space-y-8">
                  <p className="text-3xl font-light leading-relaxed md:text-4xl lg:text-5xl">
                    We do not follow trends. We do not chase seasons. We build
                    garments that outlast the conversations around them.
                  </p>

                  <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                    Every Nexora piece begins with a question: will this matter
                    in twenty years? If the answer is no, we don't make it. This
                    discipline is our only luxury.
                  </p>
                </div>

                {/* Signature */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 pt-8"
                >
                  <div className="h-px w-12 bg-stone-600" />
                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                    Nexora Atelier
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
