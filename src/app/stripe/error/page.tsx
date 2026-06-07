import Link from "next/link";
import { XCircle } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="container space-y-8 py-28 text-center">
      <XCircle className="mx-auto h-12 w-12 text-destructive" />
      <h1 className="text-5xl font-light">Payment Failed</h1>
      <p className="text-lg leading-relaxed text-muted-foreground">
        Something went wrong. Please try again.
      </p>
      <Link
        href="/"
        className="inline-block rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Return to Store
      </Link>
    </div>
  );
}
