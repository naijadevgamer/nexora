"use client";

import { fullProduct } from "@/lib/interface";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import AddToBag from "@/components/AddToBag";
import CheckoutNow from "@/components/CheckoutNow";
import { CinematicReveal } from "@/components/cinematic/MotionPrimitives";
import { urlFor } from "@/lib/sanity";
import { RotateCcw, Shield, Truck } from "lucide-react";
import Link from "next/link";

interface Props {
  product: fullProduct;
}

export default function ProductClient({ product }: Props) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const infoY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <>
      <div ref={sectionRef} className="relative">
        {/* Main Image Stack */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div
            style={{ scale: imageScale }}
            className="absolute inset-0"
          >
            <Image
              src={urlFor(product.images[0]).width(1920).height(1080).url()}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/5 to-background/20" />
        </div>

        {/* Product Info Panel */}
        <motion.div
          style={{ y: infoY }}
          className="relative z-10 mx-auto -mt-28 max-w-2xl space-y-12 rounded-t-sm border-t border-border bg-card/70 px-6 py-10 shadow-2xl backdrop-blur-md sm:-mt-36 sm:px-12 sm:py-12 lg:ml-auto lg:mr-[10%]"
        >
          <div className="space-y-6">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              {product.categoryName}
            </span>
            <h1 className="text-4xl font-light sm:text-5xl">{product.name}</h1>
          </div>

          {/* Price */}
          <CinematicReveal delay={0.1}>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-light">${product.price}</span>
              <span className="text-sm text-muted-foreground">USD</span>
            </div>
          </CinematicReveal>

          {/* Description */}
          <CinematicReveal delay={0.2}>
            <div className="space-y-4">
              <div className="h-px w-12 bg-border" />
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>
          </CinematicReveal>

          <div className="mt-6 space-y-4">
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <AddToBag
                currency="USD"
                name={product.name}
                price_id={product.price_id}
                price={product.price}
                description={product.description}
                image={product.images[0]}
              />
              <CheckoutNow
                currency="USD"
                name={product.name}
                price_id={product.price_id}
                price={product.price}
                description={product.description}
                image={product.images[0]}
              />
            </div>

            <div className="flex flex-wrap justify-between gap-4 border-t border-border pt-8 text-sm">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  Free shipping over $150
                </span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">30-day returns</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">2-year warranty</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Images */}
        {product.images.length > 1 && (
          <div className="container grid grid-cols-2 gap-2 py-20">
            {product.images.slice(1).map((img: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] overflow-hidden rounded-sm"
              >
                <Image
                  src={urlFor(img).width(800).height(1000).url()}
                  alt={`${product.name} detail ${idx + 2}`}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Related Products - Editorial Grid */}
      {product.relatedProducts?.length > 0 && (
        <section className="spatial-section border-t border-border">
          <div className="container-cinematic">
            <CinematicReveal>
              <h2 className="mb-16 text-3xl font-light">Continue Exploring</h2>
            </CinematicReveal>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {product.relatedProducts.map((related: any, idx: number) => (
                <CinematicReveal key={related._id} delay={idx * 0.1}>
                  <Link
                    href={`/product/${related.slug}`}
                    className="group block"
                  >
                    <div className="relative mb-4 aspect-[3/4] overflow-hidden">
                      <Image
                        src={related.imageUrl}
                        alt={related.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <h3 className="text-base font-light sm:text-lg">
                      {related.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      ${related.price}
                    </p>
                  </Link>
                </CinematicReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
