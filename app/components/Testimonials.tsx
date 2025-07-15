"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "/avatars/01.png",
    title: "Fashion Influencer",
    quote:
      "Nexora has completely transformed my wardrobe. The quality is unmatched!",
  },
  {
    name: "Michael Chen",
    avatar: "/avatars/02.png",
    title: "Tech Entrepreneur",
    quote:
      "The futuristic designs perfectly match my aesthetic. Best shopping experience online.",
  },
  {
    name: "Emily Rodriguez",
    avatar: "/avatars/03.png",
    title: "Creative Director",
    quote:
      "I keep coming back for the unique styles and seamless checkout process.",
  },
];
export const Testimonials = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "circOut",
          }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join thousands of satisfied customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.2,
                ease: "backOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <div className="relative rounded-2xl border border-border/50 bg-background/50 p-8 backdrop-blur-md">
                <motion.div
                  animate={{ rotate: 5 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 3,
                  }}
                >
                  <Quote className="absolute right-6 top-6 h-6 w-6 text-muted-foreground/10" />
                </motion.div>
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <motion.p
                  className="mt-6 text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  "{testimonial.quote}"
                </motion.p>
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
