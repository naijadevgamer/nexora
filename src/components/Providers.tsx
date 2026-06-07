"use client";

import { ReactNode } from "react";
import { CartProvider as CProvide } from "use-shopping-cart";

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  // Fallback for server-side rendering
  return process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://nexora-vert.vercel.app";
};

const baseUrl = getBaseUrl();
const successUrl = `${baseUrl}/stripe/success`;
const cancelUrl = `${baseUrl}/stripe/error`;

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
