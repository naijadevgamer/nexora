"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { simplifiedProduct } from "@/lib/interface";

export default function ProductCard({
  product,
  delayCount = 0,
}: {
  product: simplifiedProduct;
  delayCount?: number;
}) {
  return (
    <motion.div
      key={product._id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (delayCount % 6) * 0.1 }}
      viewport={{ once: true }}
      className="group relative aspect-[3/4] overflow-hidden"
    >
      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <h3 className="text-sm font-medium text-white">{product.name}</h3>
          <p className="text-xs text-white/80">${product.price}</p>
        </div>
      </Link>
    </motion.div>
  );
}
