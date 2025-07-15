"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

// Custom X (Twitter) icon component since Lucide removed it
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

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
  {
    name: "Instagram",
    icon: <Instagram className="h-5 w-5" />,
    href: "#",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    name: "X",
    icon: <XIcon className="h-5 w-5" />,
    href: "#",
    color: "bg-black",
  },
  {
    name: "Facebook",
    icon: <Facebook className="h-5 w-5" />,
    href: "#",
    color: "bg-blue-600",
  },
  {
    name: "YouTube",
    icon: <Youtube className="h-5 w-5" />,
    href: "#",
    color: "bg-red-600",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    href: "#",
    color: "bg-blue-700",
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur-3xl">
      <div className="container py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
              },
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <motion.h3
              className="text-xl font-bold tracking-tighter"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              NEXORA
            </motion.h3>
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              The future of fashion is here. Experience shopping reimagined.
            </motion.p>
            <div className="flex flex-wrap gap-3 pt-2">
              {socialLinks.map((social, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0 }}
                  whileInView={{
                    scale: 1,
                    transition: {
                      delay: idx * 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                    },
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative"
                >
                  <Link
                    href={social.href}
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${social.color} text-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/20`}
                  >
                    {social.icon}
                  </Link>
                  <motion.span
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100"
                    initial={{ y: 10 }}
                  >
                    {social.name}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((column, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: (idx + 1) * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                },
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <motion.h4
                className="text-sm font-semibold uppercase tracking-wider text-muted-foreground"
                whileHover={{ x: 5 }}
              >
                {column.title}
              </motion.h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <motion.li
                    key={linkIdx}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground"
        >
          <motion.p whileHover={{ scale: 1.02 }}>
            © {new Date().getFullYear()} Nexora. All rights reserved. Designed
            for the future.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};
