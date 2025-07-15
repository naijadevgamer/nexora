// components/Footer.tsx
import Link from "next/link";
import { MotionDiv } from "./motion-div";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const footerLinks = [
  {
    title: "Shop",
    links: [
      { name: "All Products", href: "/all" },
      { name: "New Arrivals", href: "/new" },
      { name: "Best Sellers", href: "/bestsellers" },
      { name: "Sale", href: "/sale" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Sustainability", href: "/sustainability" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact", href: "/contact" },
      { name: "FAQs", href: "/faq" },
      { name: "Shipping", href: "/shipping" },
      { name: "Returns", href: "/returns" },
    ],
  },
];

const socialLinks = [
  { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "#" },
  { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "#" },
  { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "#" },
  { name: "YouTube", icon: <Youtube className="h-5 w-5" />, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-lg">
      <div className="container py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold tracking-tighter">NEXORA</h3>
            <p className="text-muted-foreground">
              The future of fashion is here. Experience shopping reimagined.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, idx) => (
                <MotionDiv
                  key={idx}
                  // whileHover={{ y: -2 }}
                  // whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  i18nIsDynamicList
                >
                  <Link
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {social.icon}
                  </Link>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

          {footerLinks.map((column, idx) => (
            <MotionDiv
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground"
        >
          <p>
            © {new Date().getFullYear()} Nexora. All rights reserved. Designed
            for the future.
          </p>
        </MotionDiv>
      </div>
    </footer>
  );
};
