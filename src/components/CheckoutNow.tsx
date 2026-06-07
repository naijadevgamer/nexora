"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { toast } from "sonner";
import { useState } from "react";
import { ProductCart } from "@/lib/interface";

export default function CheckoutNow({ price_id }: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();
  const [loading, setLoading] = useState(false);

  const buyNow = async () => {
    setLoading(true);
    try {
      await checkoutSingleItem(price_id);
      toast.success("Redirecting to checkout");
    } catch (error) {
      toast.error("Checkout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={buyNow}
      disabled={loading}
      variant="outline"
      className="rounded-sm"
    >
      {loading ? "Processing…" : "Express Checkout"}
    </Button>
  );
}
