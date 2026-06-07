"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CuratedBento({ featured }: { featured: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="spatial-section bg-background">
      <div className="container-cinematic">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 flex items-end justify-between"
        >
          <div className="space-y-3">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              The Edit
            </span>
            <h2 className="text-4xl font-light md:text-5xl">
              Curated for
              <br />
              this season
            </h2>
          </div>
          <Link
            href="/all-products"
            className="group hidden items-center gap-3 pb-1 text-sm transition-colors hover:text-primary sm:flex"
          >
            View all pieces
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
          </Link>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          style={{ scale, opacity }}
          className="grid grid-cols-1 gap-3 md:grid-cols-4 md:grid-rows-2"
        >
          {/* Large featured item - spans 2 cols 2 rows */}
          {featured[0] && (
            <Link
              href={`/product/${featured[0].slug}`}
              className="group relative col-span-2 row-span-2 overflow-hidden rounded-sm"
            >
              <Image
                src={featured[0].imageUrl}
                alt={featured[0].name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs uppercase tracking-wider text-stone-300">
                  {featured[0].categoryName}
                </span>
                <h3 className="mt-2 text-2xl font-light text-white">
                  {featured[0].name}
                </h3>
                <p className="mt-1 text-sm text-stone-300">
                  ${featured[0].price}
                </p>
              </div>
            </Link>
          )}

          {/* Smaller items */}
          {featured.slice(1, 3).map((product, idx) => (
            <Link
              key={product._id}
              href={`/product/${product.slug}`}
              className="group relative overflow-hidden rounded-sm"
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-light text-white">
                  {product.name}
                </h3>
                <p className="text-sm text-stone-300">${product.price}</p>
              </div>
            </Link>
          ))}

          {/* Quote/Text block */}
          <div className="flex items-center justify-center rounded-sm bg-secondary/50 p-8">
            <p className="text-center text-lg font-light italic leading-relaxed text-muted-foreground">
              "Quality is remembered long after price is forgotten."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
