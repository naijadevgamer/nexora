import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

const footerLinks = {
  Shop: [
    { name: "All Products", href: "/all-products" },
    { name: "Men", href: "/category/Men" },
    { name: "Women", href: "/category/Women" },
    { name: "Teens", href: "/category/Teens" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Shipping", href: "/shipping" },
    { name: "Returns", href: "/returns" },
    { name: "Contact", href: "/contact" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container pt-16 sm:pt-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Logo />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Curated essentials for modern living. Every piece selected with
              intention, crafted with integrity.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground dark:hover:text-primary/80"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-border py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Nexora. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed with intention. Built for longevity.
          </p>
        </div>
      </div>
    </footer>
  );
}
