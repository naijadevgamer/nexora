"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Newsletter() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-32 md:py-40"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10">
        <motion.div
          style={{ scale, opacity }}
          className="mx-auto max-w-2xl space-y-12 text-center"
        >
          {/* Decorative element */}
          <div className="mx-auto h-px w-16 bg-primary" />

          <div className="space-y-6">
            <h2 className="text-4xl font-light md:text-6xl">The Journal</h2>
            <p className="mx-auto max-w-md text-lg leading-relaxed text-muted-foreground">
              Essays on material culture, craftsmanship, and the philosophy of
              owning less but better. Delivered Sundays.
            </p>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 border-b border-border bg-transparent px-3 py-3 text-sm text-secondary-foreground text-stone-200 outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50"
            />
            <button
              type="submit"
              className="whitespace-nowrap border border-border px-8 py-3 text-sm font-medium uppercase tracking-wider text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              Subscribe
            </button>
          </motion.form>

          <p className="text-xs text-muted-foreground/60">
            No spam. Unsubscribe anytime.
          </p>

          {/* Bottom decoration */}
          <div className="bg-primborder-primary/30 mx-auto h-px w-16" />
        </motion.div>
      </div>
    </section>
  );
}
