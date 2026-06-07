"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { useShoppingCart } from "use-shopping-cart";

export default function ShoppingCartModal() {
  const {
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    incrementItem,
    decrementItem,
    totalPrice,
    redirectToCheckout,
    cartCount,
  } = useShoppingCart();

  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        toast.error(result.error.message);
      }
    } catch (error) {
      toast.error("Checkout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {shouldDisplayCart && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => handleCartClick()}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-lg border-l border-border bg-background"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border p-6">
                <h2 className="text-xl font-light">Cart ({cartCount || 0})</h2>
                <button
                  onClick={() => handleCartClick()}
                  className="p-2 transition-colors hover:bg-secondary"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                <AnimatePresence>
                  {cartCount === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex h-full flex-col items-center justify-center text-center"
                    >
                      <p className="text-lg text-muted-foreground">
                        Your cart is empty
                      </p>
                      <button
                        onClick={() => handleCartClick()}
                        className="mt-4 text-sm underline underline-offset-4"
                      >
                        Continue Shopping
                      </button>
                    </motion.div>
                  ) : (
                    <div className="space-y-6">
                      {Object.values(cartDetails ?? {}).map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="flex gap-4"
                        >
                          <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-secondary">
                            <Image
                              src={item.image as string}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div className="flex flex-1 flex-col justify-between">
                            <div>
                              <h3 className="text-sm font-medium">
                                {item.name}
                              </h3>
                              <p className="mt-1 text-sm text-muted-foreground">
                                ${item.price}
                              </p>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <button
                                  onClick={() => decrementItem(item.id)}
                                  className="p-1 transition-colors hover:bg-secondary"
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-3 w-3" />
                                </button>
                                <span className="min-w-[2ch] text-center text-sm">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => incrementItem(item.id)}
                                  className="p-1 transition-colors hover:bg-secondary"
                                >
                                  <Plus className="h-3 w-3" />
                                </button>
                              </div>

                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-xs text-muted-foreground transition-colors hover:text-destructive"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              {cartCount! > 0 && (
                <div className="space-y-4 border-t border-border p-6">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span className="font-medium">
                      ${totalPrice?.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Shipping calculated at checkout
                  </p>

                  <button
                    onClick={handleCheckout}
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 bg-primary py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                  >
                    {loading ? "Processing..." : "Checkout"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
