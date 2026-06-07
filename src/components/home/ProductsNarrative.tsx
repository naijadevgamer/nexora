import React from "react";
import { CinematicReveal, ScaleOnScroll } from "../cinematic/MotionPrimitives";
import Link from "next/link";
import Image from "next/image";

export default function ProductsNarrative({ featured }: { featured: any[] }) {
  return (
    <div>
      <section className="spatial-section bg-background">
        <div className="container-cinematic hidden sm:block">
          {featured.map((product: any, index: number) => (
            <div
              key={product._id}
              className={`mb-40 grid grid-cols-12 items-center gap-12 last:mb-0 ${
                index % 2 === 1 ? "direction-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`col-span-7 ${index % 2 === 1 ? "col-start-6" : ""}`}
              >
                <ScaleOnScroll>
                  <Link href={`/product/${product.slug}`}>
                    <div className="group relative aspect-[4/5] cursor-pointer overflow-hidden">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 58vw"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
                    </div>
                  </Link>
                </ScaleOnScroll>
              </div>

              {/* Text */}
              <div
                className={`col-span-4 ${index % 2 === 1 ? "col-start-1 row-start-1" : ""}`}
              >
                <CinematicReveal direction={index % 2 === 0 ? "right" : "left"}>
                  <div className="space-y-8">
                    <div>
                      <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                        {product.categoryName}
                      </span>
                      <h2 className="mt-4 text-4xl font-light">
                        {product.name}
                      </h2>
                    </div>

                    <p className="text-3xl font-light">${product.price}</p>
                    <Link
                      href={`/product/${product.slug}`}
                      className="group relative inline-flex items-center gap-4 pb-1 text-sm transition-all hover:border-primary hover:text-primary"
                    >
                      Discover
                      <span className="text-lg leading-none">→</span>
                      <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform group-hover:scale-x-100" />
                    </Link>
                  </div>
                </CinematicReveal>
              </div>
            </div>
          ))}
        </div>

        <div className="container-cinematic block px-4 sm:hidden sm:px-6 lg:px-8">
          {featured.map((product: any, index: number) => (
            <div
              key={product._id}
              className={`mb-20 flex flex-col gap-8 last:mb-0 md:mb-40 md:grid md:grid-cols-12 md:items-center md:gap-12 ${
                index % 2 === 1 ? "md:direction-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:col-span-7 md:col-start-auto">
                <ScaleOnScroll>
                  <Link href={`/product/${product.slug}`}>
                    <div className="group relative aspect-[4/5] cursor-pointer overflow-hidden">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 58vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
                    </div>
                  </Link>
                </ScaleOnScroll>
              </div>

              {/* Text */}
              <div className="w-full md:col-span-4 md:col-start-auto">
                <CinematicReveal direction={index % 2 === 0 ? "right" : "left"}>
                  <div className="space-y-6 text-center md:text-left">
                    <div>
                      <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                        {product.categoryName}
                      </span>
                      <h2 className="mt-3 text-2xl font-light sm:text-3xl md:mt-4 md:text-4xl">
                        {product.name}
                      </h2>
                    </div>

                    <p className="text-2xl font-light sm:text-3xl">
                      ${product.price}
                    </p>

                    <Link
                      href={`/product/${product.slug}`}
                      className="group relative inline-flex items-center gap-4 pb-1 text-sm transition-all hover:text-primary md:hover:border-primary"
                    >
                      Discover
                      <span className="text-lg leading-none">→</span>
                      <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform group-hover:scale-x-100" />
                    </Link>
                  </div>
                </CinematicReveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="spatial-section bg-secondary/30">
        <div className="container-cinematic">
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            <Link
              href="/category/Men"
              className="group relative aspect-[3/2] overflow-hidden"
            >
              <Image
                src="/images/men-category.jpg"
                alt="Men's Collection"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
              <div className="absolute bottom-8 left-8">
                <h2 className="text-4xl font-light text-white">Men</h2>
                <span className="mt-2 inline-flex items-center gap-2 text-sm text-white/80">
                  Explore Collection <span className="text-lg">→</span>
                </span>
              </div>
            </Link>

            <Link
              href="/category/Women"
              className="group relative aspect-[3/2] overflow-hidden"
            >
              <Image
                src="/images/women-category.jpg"
                alt="Women's Collection"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
              <div className="absolute bottom-8 left-8">
                <h2 className="text-4xl font-light text-white">Women</h2>
                <span className="mt-2 inline-flex items-center gap-2 text-sm text-white/80">
                  Explore Collection <span className="text-lg">→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
