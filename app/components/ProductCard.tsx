// components/ProductCard.tsx
"use client";

import { simplifiedProduct } from "../interface";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Tilt } from "@/components/ui/tilt";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: simplifiedProduct }) => {
  const { addItem, handleCartClick } = useShoppingCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      name: product.name,
      description: product.categoryName,
      price: product.price,
      currency: "USD",
      image: product.imageUrl,
      price_id: product._id,
    });
    handleCartClick();
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Tilt>
      <Link href={`/product/${product.slug}`}>
        <motion.div
          whileHover={{ y: -5 }}
          className="group relative h-max overflow-hidden rounded-2xl border border-border/50 bg-background/50 backdrop-blur-md transition-all hover:shadow-xl hover:shadow-primary/10"
        >
          <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
            <Image
              src={product.imageUrl}
              alt="Product image"
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              width={1728}
              height={2160}
            />
          </div>

          <div className="p-2 sm:p-4">
            <div className="flex justify-between gap-2">
              <div className="truncate">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {product.categoryName}
                </p>
              </div>
              <p className="text-lg font-bold text-primary">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <Button size="sm" className="mt-4 w-full" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </motion.div>
      </Link>
    </Tilt>
  );
};

export default ProductCard;
