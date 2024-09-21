"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";

const ShoppingCartModal = () => {
  const { cartCount, shouldDisplayCart, handleCartClick } = useShoppingCart();
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
      {/* <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger> */}
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          {cartCount === 0 ? (
            <SheetDescription>
              There's nothing in the cart {cartCount}
            </SheetDescription>
          ) : (
            <SheetDescription>
              You have {cartCount} item(s) in the cart
            </SheetDescription>
          )}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModal;
