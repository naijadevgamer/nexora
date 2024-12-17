import { Button } from "@/components/ui/button";
import { OctagonAlert } from "lucide-react";
import Link from "next/link";

export default function ErrorStripe() {
  return (
    <div className="h-screen">
      <div className="mx-auto mt-32 md:max-w-[50vw]">
        <OctagonAlert className="mx-auto my-6 h-16 w-16 text-red-500" />
        <div className="text-center">
          <h3 className="text-center text-base font-semibold text-gray-900 md:text-2xl">
            Payment Failed!
          </h3>
          <p className="my-2 text-gray-600">Something went wrong...</p>
          <p>You can try again later</p>
          <Button asChild className="mt-5">
            <Link href="/">GO back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
