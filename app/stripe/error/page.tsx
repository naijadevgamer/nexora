import { Button } from "@/components/ui/button";
import { OctagonAlert, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "@/app/components/motion-div";

export default function ErrorStripe() {
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
            <div className="absolute -inset-2 rounded-full bg-red-500/20 blur-md"></div>
            <OctagonAlert className="relative h-16 w-16 text-red-500" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Payment Failed
          </h1>
          <p className="mt-4 text-muted-foreground">
            Something went wrong with your payment. Please try again.
          </p>

          <Button asChild className="mt-8 w-full" variant="outline">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Return to Store
            </Link>
          </Button>
        </div>
      </MotionDiv>
    </div>
  );
}
