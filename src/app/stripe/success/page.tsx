import Link from "next/link";
import { CheckCheck } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="container space-y-8 py-28 text-center">
      <CheckCheck className="mx-auto h-12 w-12 text-primary" />
      <h1 className="text-5xl font-light">Payment Successful</h1>
      <p className="text-lg leading-relaxed text-muted-foreground">
        Thank you for your order.
      </p>
      <Link
        href="/"
        className="inline-block rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
