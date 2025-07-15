// app/not-found.tsx
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function NotFound() {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Floating elements animation variants
  const floatingVariants = (delay: number) => ({
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0, 15, 0],
      transition: {
        duration: 6 + delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  });

  // Particle animation variants
  const particleVariants = {
    initial: (i: number) => ({
      x: 0,
      y: 0,
      opacity: 0.7,
    }),
    animate: (i: number) => ({
      x: [
        0,
        Math.random() * 200 - 100,
        Math.random() * 400 - 200,
        Math.random() * 600 - 300,
      ],
      y: [
        0,
        Math.random() * 200 - 100,
        Math.random() * 400 - 200,
        Math.random() * 600 - 300,
      ],
      transition: {
        duration: 15 + i * 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
        times: [0, 0.33, 0.66, 1],
      },
    }),
  };

  if (!isMounted) return null;

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background p-4 text-center">
      {/* Floating holographic elements */}
      <motion.div
        className="absolute left-1/4 top-1/4 h-20 w-20 rounded-full bg-primary/10 blur-xl"
        // variants={floatingVariants(0)}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-purple-600/10 blur-xl"
        // // variants={floatingVariants(1)}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 h-24 w-24 rounded-full bg-primary/15 blur-xl"
        // // variants={floatingVariants(2)}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 h-28 w-28 rounded-full bg-purple-600/15 blur-xl"
        // // variants={floatingVariants(3)}
        initial="initial"
        animate="animate"
      />

      {/* Animated particles */}
      <AnimatePresence>
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            custom={i}
            // // variants={particleVariants}
            initial="initial"
            animate="animate"
          />
        ))}
      </AnimatePresence>

      <div className="relative z-10 max-w-2xl">
        {/* Futuristic 404 display */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-8xl font-bold tracking-tighter text-foreground sm:text-9xl">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              4
            </span>
            <span className="relative inline-block h-20 w-20 sm:h-24 sm:w-24">
              <motion.svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke={
                    theme === "dark"
                      ? "rgba(139, 92, 246, 0.3)"
                      : "rgba(139, 92, 246, 0.2)"
                  }
                  strokeWidth="8"
                  fill="none"
                />
              </motion.svg>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-primary sm:text-5xl">
                0
              </span>
            </span>
            <span className="bg-gradient-to-r from-purple-600 to-primary bg-clip-text text-transparent">
              4
            </span>
          </h1>
        </motion.div>

        <motion.h2
          className="mb-6 text-3xl font-bold text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Lost in the <span className="text-primary">Digital Void</span>
        </motion.h2>

        <motion.p
          className="mb-8 text-lg text-foreground/80 sm:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          The page you're looking for doesn't exist or has been transported to
          another dimension. Let's beam you back to safety.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          <Button
            asChild
            className="group relative overflow-hidden rounded-full px-8 py-6 text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-primary/20"
          >
            <Link href="/">
              <span className="relative z-10">Return to Home</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-100 transition-opacity group-hover:opacity-90"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-600/80 opacity-0 transition-opacity group-hover:opacity-100"></span>
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Floating tech elements */}
      <motion.div
        className="absolute bottom-10 left-10 opacity-20"
        // variants={floatingVariants(0.5)}
        initial="initial"
        animate="animate"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M12 2v4" />
          <path d="m16.24 7.76 2.83-2.83" />
          <path d="M18 12h4" />
          <path d="m16.24 16.24 2.83 2.83" />
          <path d="M12 18v4" />
          <path d="m7.76 16.24-2.83 2.83" />
          <path d="M6 12h-4" />
          <path d="m7.76 7.76-2.83-2.83" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 opacity-20"
        // variants={floatingVariants(1.5)}
        initial="initial"
        animate="animate"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-600"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <path d="m3.27 6.96 8.73 5.05 8.73-5.05" />
          <path d="M12 22.08V12" />
        </svg>
      </motion.div>
    </div>
  );
}
