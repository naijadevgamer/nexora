"use client";

import { Button } from "@/components/ui/button";
import { ProductCart } from "../interface";
import { urlFor } from "../lib/sanity";
import { useShoppingCart } from "use-shopping-cart";

const CheckoutNow = ({
  currency,
  name,
  description,
  price,
  image,
  price_id,
}: ProductCart) => {
  const { checkoutSingleItem } = useShoppingCart();

  const buyNow = (priceId: string) => {
    checkoutSingleItem(priceId);
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
    <Button variant={"outline"} onClick={() => buyNow(product.price_id)}>
      Checkout now
    </Button>
  );
};

export default CheckoutNow;
