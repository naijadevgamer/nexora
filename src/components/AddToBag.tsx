"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { toast } from "sonner";
import { ProductCart } from "@/lib/interface";
import { urlFor } from "../lib/sanity";

export default function AddToBag({
  currency,
  name,
  description,
  price,
  image,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name,
    description,
    price,
    currency,
    image: urlFor(image).url(),
    price_id,
  };

  return (
    <Button
      onClick={() => {
        addItem(product);
        handleCartClick();
        toast.success(`${name} added to cart`);
      }}
      className="rounded-sm bg-primary text-primary-foreground hover:bg-primary/90"
    >
      Add to Cart
    </Button>
  );
}
