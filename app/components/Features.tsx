"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Diamond, Zap, Smartphone, Truck } from "lucide-react";

const features = [
  {
    title: "Premium Quality",
    description: "Only the finest materials and craftsmanship",
    icon: <Diamond className="h-8 w-8" />,
  },
  {
    title: "Lightning Fast",
    description: "Instant style updates with our quick delivery",
    icon: <Zap className="h-8 w-8" />,
  },
  {
    title: "Mobile Optimized",
    description: "Seamless shopping on any device",
    icon: <Smartphone className="h-8 w-8" />,
  },
  {
    title: "Free Shipping",
    description: "On all orders over $100",
    icon: <Truck className="h-8 w-8" />,
  },
];

export const Features = () => {
  return (
    <section className="bg-gradient-to-b from-background to-muted py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "backOut",
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose Nexora
          </h2>
          <p className="mt-4 text-muted-foreground">
            Experience the future of fashion shopping
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.15,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="h-full border-border/50 bg-background/50 backdrop-blur-md transition-all hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <motion.div
                    whileHover={{ rotate: 20, scale: 1.1 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"
                  >
                    {feature.icon}
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-2">{feature.title}</CardTitle>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
