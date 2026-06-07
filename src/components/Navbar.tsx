"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import SearchModal from "./SearchModal";
import { ThemeToggle } from "./ThemeToggle";
import Logo from "./Logo";

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
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm uppercase tracking-wide transition hover:text-primary hover:underline",
                  pathname === link.href
                    ? "font-medium text-primary"
                    : "font-light text-foreground",
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="-mr-2 rounded-sm p-2 hover:bg-accent"
              aria-label="Search"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <ThemeToggle />
            <button
              onClick={() => handleCartClick()}
              className="relative rounded-sm p-2 hover:bg-accent"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount! > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="rounded-sm p-2 hover:bg-accent md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border/40 bg-background md:hidden"
            >
              <div className="container space-y-2 py-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block py-2 text-sm uppercase tracking-wide transition-colors hover:text-primary",
                      pathname === link.href
                        ? "text-primary"
                        : "text-foreground/70",
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSearchOpen(true);
                  }}
                  className="block py-2 text-sm uppercase tracking-wide text-foreground/70 hover:text-primary"
                >
                  Search
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
