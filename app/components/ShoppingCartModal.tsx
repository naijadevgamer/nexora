"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

const ShoppingCartModal = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
  } = useShoppingCart();

  console.log(cartDetails);

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between">
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
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                          {cartDetail.description}
                        </p>
                      </div>

                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">
                          QTY: {cartDetail.quantity}
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
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModal;
