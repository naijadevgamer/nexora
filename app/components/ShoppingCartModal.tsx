"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "@/components/ui/button";

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

  const handleCheckoutClick = async (e: any) => {
    e.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result.error) {
        console.log("result");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="w-full max-w-lg sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="flex h-full flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6">You dont have any items</h1>
              ) : (
                Object.values(cartDetails ?? {}).map((cartDetail) => (
                  <li key={cartDetail.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        src={cartDetail.image as string}
                        alt="Product image"
                        width={100}
                        height={100}
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{cartDetail.name}</h3>
                          <p className="ml-4">${cartDetail.price}</p>
                        </div>
                        <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                          {cartDetail.description}
                        </p>
                      </div>

                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="flex items-center text-gray-500">
                          QTY:
                          <button>
                            <ChevronLeft
                              className="hover:text-gray-600"
                              onClick={() => decrementItem(cartDetail.id)}
                            />
                          </button>
                          {cartDetail.quantity}
                          <button>
                            <ChevronRight
                              className="hover:text-gray-600"
                              onClick={() => incrementItem(cartDetail.id)}
                            />
                          </button>
                        </p>

                        <div className="flex">
                          <button
                            type="button"
                            onClick={() => removeItem(cartDetail.id)}
                            className="font-medium text-primary hover:text-primary/80"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout.
            </p>

            <div className="mt-6">
              <Button className="w-full" onClick={handleCheckoutClick}>
                Checkout
              </Button>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                OR{" "}
                <button
                  onClick={handleCartClick}
                  className="font-medium text-primary hover:text-primary/80"
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModal;
