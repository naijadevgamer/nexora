"use client";

import { Button } from "@/components/ui/button";
import { ProductCart } from "../interface";
import { urlFor } from "../lib/sanity";
import { useShoppingCart } from "use-shopping-cart";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useState } from "react";

const CheckoutNow = ({
  currency,
  name,
  description,
  price,
  image,
  price_id,
}: ProductCart) => {
  const { checkoutSingleItem } = useShoppingCart();

  const [loading, setLoading] = useState(false);

  const buyNow = async (priceId: string) => {
    setLoading(true);

    const toastId = toast.loading("Redirecting to checkout...");

    try {
      await checkoutSingleItem(priceId);
      toast.success("Checkout started!", { id: toastId });
    } catch (error) {
      console.error(error);
      toast.error("Failed to start checkout.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

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
        variant="outline"
        onClick={() => buyNow(product.price_id)}
        disabled={loading}
        className={loading ? "w-full cursor-not-allowed opacity-50" : "w-full"}
      >
        {loading ? "Loading..." : "Express Checkout"}
      </Button>
    </motion.div>
  );
};

export default CheckoutNow;
