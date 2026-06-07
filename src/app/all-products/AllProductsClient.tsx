"use client";

import { CinematicReveal } from "@/components/cinematic/MotionPrimitives";
import ProductCard from "@/components/ProductCard";
import { simplifiedProduct } from "@/lib/interface";

export default function AllProductsClient({
  products,
}: {
  products: simplifiedProduct[];
}) {
  return (
    <section className="container py-12 sm:py-20">
      <section className="py-24">
        <CinematicReveal>
          <div className="space-y-4">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Collection
            </span>
            <h1 className="text-6xl font-light">All Products</h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Every pieces engineered for the modern silhouette
            </p>
          </div>
        </CinematicReveal>
      </section>
      {products.length === 0 ? (
        <p className="text-muted-foreground">No products available yet.</p>
      ) : (
        <div className="grid grid-cols-2 gap-1 sm:gap-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, idx) => (
            <ProductCard key={product._id} product={product} delayCount={idx} />
          ))}
        </div>
      )}
    </section>
  );
}
