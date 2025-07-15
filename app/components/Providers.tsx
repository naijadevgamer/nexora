"use client";

import { ReactNode } from "react";
import { CartProvider as CProvide } from "use-shopping-cart";

const isDev = process.env.NODE_ENV === "development";

const successUrl = isDev
  ? "http://localhost:3000/stripe/success"
  : "https://https://nexora-vert.vercel.app//stripe/success";

const cancelUrl = isDev
  ? "http://localhost:3000/stripe/error"
  : "https://https://nexora-vert.vercel.app//stripe/error";

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CProvide
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl={successUrl}
      cancelUrl={cancelUrl}
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CProvide>
  );
};

export default CartProvider;
