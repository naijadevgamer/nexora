// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AuroraBackground } from "./AuroraBackground";
// import { AuroraBackground } from "@/components/ui/aurora-background";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/category/Men" },
  { name: "Women", href: "/category/Women" },
  { name: "Teens", href: "/category/Teens" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick, cartCount } = useShoppingCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur"></div>
              <h1 className="relative text-2xl font-bold tracking-tighter text-foreground">
                NEXORA
              </h1>
            </div>
          </motion.div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground/60",
                )}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => handleCartClick()}
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount! > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground"
              >
                {cartCount}
              </motion.span>
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden"
          >
            <AuroraBackground>
              <div className="space-y-2 px-4 pb-4 pt-2">
                {links.map((link, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent",
                        pathname === link.href ? "bg-accent" : "",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </AuroraBackground>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
