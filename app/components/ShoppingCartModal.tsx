"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Ghost, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { useShoppingCart } from "use-shopping-cart";

const ShoppingCartModal = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    incrementItem,
    decrementItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  const [loading, setLoading] = useState(false);

  const handleCheckoutClick = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();

    setLoading(true);
    const toastId = toast.loading("Redirecting to checkout...");

    try {
      const result = await redirectToCheckout();

      if (result?.error) {
        toast.error("Checkout failed", { id: toastId });
      } else {
        toast.success("Checkout started", { id: toastId });
      }
    } catch (error) {
      toast.error("An error occurred during checkout", { id: toastId });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold tracking-tight">
            Your Shopping Cart
          </SheetTitle>
        </SheetHeader>

        <div className="flex h-full flex-col justify-between">
          {cartCount === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", damping: 10 }}
              className="flex h-full flex-col items-center justify-center gap-4"
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <Ghost className="h-20 w-20 text-muted-foreground/80" />
              </motion.div>
              <p className="text-lg font-medium text-muted-foreground">
                Nothing in your cart yet{" "}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/shop">
                  <Button onClick={() => handleCartClick()}>
                    Start Exploring
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          ) : (
            <>
              <div className="mt-8 flex-1 overflow-y-auto">
                <ul className="divide-y divide-border">
                  <AnimatePresence>
                    {Object.values(cartDetails ?? {}).map((cartDetail) => (
                      <motion.li
                        key={cartDetail.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="py-6"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border border-border">
                            <Image
                              src={cartDetail.image as string}
                              alt="Product image"
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div className="flex flex-1 flex-col gap-2">
                            <div className="flex justify-between">
                              <h3 className="font-medium">{cartDetail.name}</h3>
                              <p className="font-medium">${cartDetail.price}</p>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => decrementItem(cartDetail.id)}
                                  disabled={cartDetail.quantity <= 1}
                                >
                                  <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <span className="w-8 text-center">
                                  {cartDetail.quantity}
                                </span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => incrementItem(cartDetail.id)}
                                >
                                  <ChevronRight className="h-4 w-4" />
                                </Button>
                              </div>

                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  removeItem(cartDetail.id);
                                  toast.success(
                                    `${cartDetail.name} removed from cart`,
                                  );
                                }}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              </div>

              <div className="border-t border-border px-4 py-6 sm:px-6">
                <div className="flex justify-between text-lg font-bold">
                  <p>Subtotal:</p>
                  <p>${totalPrice?.toFixed(2)}</p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Shipping and taxes calculated at checkout.
                </p>

                <div className="mt-6">
                  <Button
                    disabled={loading}
                    className={`w-full ${loading ? "cursor-not-allowed opacity-50" : ""}`}
                    size="lg"
                    onClick={handleCheckoutClick}
                  >
                    {loading ? "Processing..." : "Checkout"}
                  </Button>
                </div>

                <div className="mt-4 flex justify-center text-center text-sm">
                  <Button
                    variant="link"
                    onClick={() => handleCartClick()}
                    className="text-muted-foreground"
                  >
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModal;
