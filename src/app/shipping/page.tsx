import { CinematicReveal } from "@/components/cinematic/MotionPrimitives";
import { Truck, RotateCcw, Shield, Clock, Globe, Package } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Delivery",
  description: "Shipping policies, delivery times, and returns information.",
};

const shippingInfo = [
  {
    icon: Truck,
    title: "Free Shipping",
    description:
      "Complimentary shipping on all orders over $150. Standard delivery arrives within 5-7 business days.",
  },
  {
    icon: Clock,
    title: "Express Delivery",
    description:
      "Need it sooner? Express shipping delivers within 2-3 business days for a flat rate of $25.",
  },
  {
    icon: Globe,
    title: "International",
    description:
      "We ship worldwide. International delivery times vary by destination, typically 7-14 business days.",
  },
  {
    icon: Package,
    title: "Order Tracking",
    description:
      "Once your order ships, you'll receive a tracking number via email to follow your package.",
  },
  {
    icon: RotateCcw,
    title: "30-Day Returns",
    description:
      "Not satisfied? Return unworn items within 30 days for a full refund or exchange.",
  },
  {
    icon: Shield,
    title: "Package Protection",
    description:
      "All shipments are insured against loss or damage during transit for your peace of mind.",
  },
];

export default function ShippingPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-24 md:py-32">
        <div className="container">
          <CinematicReveal>
            <div className="space-y-4">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Information
              </span>
              <h1 className="text-6xl font-light">Shipping & Delivery</h1>
              <p className="max-w-xl text-lg text-muted-foreground">
                Everything you need to know about receiving your Nexora pieces.
              </p>
            </div>
          </CinematicReveal>
        </div>
      </section>

      {/* Shipping Grid */}
      <section className="border-t border-border py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {shippingInfo.map((item, idx) => (
              <CinematicReveal key={idx} delay={idx * 0.1}>
                <div className="space-y-4">
                  <item.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-light">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </CinematicReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Summary */}
      <section className="border-t border-border py-24">
        <div className="container max-w-3xl">
          <CinematicReveal>
            <div className="space-y-12">
              <h2 className="text-3xl font-light">
                Frequently Asked Questions
              </h2>

              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">
                    How long will my order take?
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Standard shipping takes 5-7 business days within the
                    continental US. Express shipping delivers within 2-3
                    business days. International orders typically arrive within
                    7-14 business days depending on destination.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">
                    What is your return policy?
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    We offer free returns within 30 days of delivery. Items must
                    be unworn, unwashed, and in their original condition with
                    tags attached. Refunds are processed within 5-10 business
                    days after we receive your return.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">
                    Do you ship internationally?
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Yes, we ship to most countries worldwide. International
                    shipping rates are calculated at checkout based on your
                    destination. Please note that customs fees may apply
                    depending on your country's regulations.
                  </p>
                </div>
              </div>
            </div>
          </CinematicReveal>
        </div>
      </section>
    </div>
  );
}
