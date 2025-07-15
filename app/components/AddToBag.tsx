// components/AddToBag.tsx
"use client";

import { Button } from "@/components/ui/button";
import { ProductCart } from "../interface";
import { urlFor } from "../lib/sanity";
import { useShoppingCart } from "use-shopping-cart";
import { toast } from "sonner";
import { motion } from "framer-motion";

const AddToBag = ({
  currency,
  name,
  description,
  price,
  image,
  price_id,
}: ProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    currency,
    name,
    description,
    price,
    image: urlFor(image).url(),
    price_id,
  };

  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <Button
        onClick={() => {
          addItem(product);
          handleCartClick();
          toast.success(`${name} added to cart`, {
            position: "top-center",
          });
        }}
        className="w-full"
      >
        Add to Cart
      </Button>
    </motion.div>
  );
};

export default AddToBag;
