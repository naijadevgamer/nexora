"use client";

import { Button } from "@/components/ui/button";
import { ProductCart } from "../interface";
import { urlFor } from "../lib/sanity";
import { useShoppingCart } from "use-shopping-cart";

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
    <Button 
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add to cart
    </Button>
  );
};

export default AddToBag;
