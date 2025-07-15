import { Button } from "@/components/ui/button";
import { CheckCheck, Zap } from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "@/app/components/motion-div";

export default function StripeSuccess() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted">
      <MotionDiv
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-full max-w-md rounded-2xl border border-border/50 bg-background/50 p-8 shadow-xl backdrop-blur-md"
      >
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute -inset-2 rounded-full bg-green-500/20 blur-md"></div>
            <CheckCheck className="relative h-16 w-16 text-green-500" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Payment Successful!
          </h1>
          <p className="mt-4 text-muted-foreground">
            Thank you for your purchase. Your order is being processed.
          </p>

          <div className="mt-6 flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Zap className="h-4 w-4" />
            <span>Order confirmed</span>
          </div>

          <Button asChild className="mt-8 w-full">
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      </MotionDiv>
    </div>
  );
}
