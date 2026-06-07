import type { Metadata } from "next";
import { ThemeProvider } from "../components/ThemeProvider";
import CartProvider from "../components/Providers";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import ShoppingCartModal from "../components/ShoppingCartModal";
import { Toaster } from "../components/ui/sonner";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: { default: "Nexora", template: "%s | Nexora" },
  description:
    "Boutique d'art for modern living. Curated goods with integrity.",
  icons: {
    icon: "/logo-icon.svg",
  },
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-background font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <CartProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <ShoppingCartModal />
            <Toaster position="top-center" richColors />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
