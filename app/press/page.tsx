"use client";

import { motion } from "framer-motion";
import { Award, Mic, Newspaper, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const PressPage = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (this: HTMLAnchorElement, e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href")!);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  const pressItems = [
    {
      type: "Article",
      icon: <Newspaper className="h-5 w-5 text-purple-600" />,
      title: "How This Startup Is Revolutionizing Fashion With AI",
      source: "TechCrunch",
      date: "May 2025",
      link: "https://techcrunch.com/fashion-ai-revolution",
      bg: "from-purple-500/10 to-pink-500/10",
    },
    {
      type: "Video",
      icon: <Play className="h-5 w-5 text-purple-600" />,
      title: "The Future of Wearable Technology",
      source: "Wired",
      date: "April 2025",
      link: "https://wired.com/future-wearables",
      bg: "from-blue-500/10 to-purple-500/10",
    },
    {
      type: "Podcast",
      icon: <Mic className="h-5 w-5 text-purple-600" />,
      title: "Sustainable Fashion Through Innovation",
      source: "The Verge",
      date: "March 2025",
      link: "https://theverge.com/sustainable-fashion-podcast",
      bg: "from-pink-500/10 to-rose-500/10",
    },
    {
      type: "Award",
      icon: <Award className="h-5 w-5 text-purple-600" />,
      title: "Best Innovation in Fashion Tech 2025",
      source: "Fast Company",
      date: "February 2025",
      link: "https://fastcompany.com/innovation-awards",
      bg: "from-violet-500/10 to-indigo-500/10",
    },
  ];

  const news = [
    {
      title:
        "Company Raises $50M Series B to Scale Sustainable Fabric Production",
      date: "June 10, 2025",
      link: "https://techcrunch.com/series-b-funding",
    },
    {
      title: "New AR Fitting Room Feature Reduces Returns by 40%",
      date: "May 22, 2025",
      link: "https://voguebusiness.com/ar-fitting",
    },
    {
      title:
        "Partnership With Ocean Cleanup Initiative Removes 1M Pounds of Plastic",
      date: "April 15, 2025",
      link: "https://businessgreen.com/ocean-partnership",
    },
    {
      title: "CEO Named to Forbes 30 Under 30 in Retail & Ecommerce",
      date: "March 5, 2025",
      link: "https://forbes.com/30-under-30",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[calc(100vh-10rem)] overflow-hidden py-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2040&q=80')] bg-cover bg-center" />
        <div className="absolute left-0 top-0 size-full bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
        >
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Press & Media
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-8 max-w-3xl text-xl text-white/90 md:text-2xl"
          >
            See how the world is talking about our mission to revolutionize
            fashion.
          </motion.p>
        </motion.div>
      </div>

      {/* Featured Coverage */}
      <section className="container px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Coverage
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Highlights from leading publications worldwide.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {pressItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link
                href={item.link}
                target="_blank"
                className={`block h-full rounded-xl border border-border bg-card p-8 shadow-lg transition-all hover:border-purple-500 group-hover:shadow-xl ${item.bg} hover:bg-gradient-to-r`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-primary/10 to-primary/20">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-sm font-medium text-foreground/90">
                      {item.type}
                    </span>
                    <div className="flex gap-2 text-sm text-muted-foreground/90">
                      <span>{item.source}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
                <h3 className="mb-4 text-xl font-bold text-foreground/90 transition-colors group-hover:text-purple-600">
                  {item.title}
                </h3>
                <span className="inline-flex items-center text-sm font-medium text-purple-600">
                  Read More
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="bg-gradient-to-b from-background to-muted px-4 py-12 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid items-start gap-16 md:grid-cols-2"
          >
            <div>
              <h2 className="mb-8 text-4xl font-bold md:text-5xl">
                Latest{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  News
                </span>
              </h2>
              <p className="mb-6 text-xl text-muted-foreground">
                Stay updated with our company announcements and milestones.
              </p>
            </div>

            <div className="space-y-8">
              {news.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link
                    href={item.link}
                    target="_blank"
                    className="block border-b border-border pb-6 transition-colors group-hover:border-purple-600"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="flex-1 text-lg font-medium text-foreground/90 transition-colors group-hover:text-purple-600">
                        {item.title}
                      </h3>
                      <svg
                        className="h-5 w-5 text-gray-400 transition-colors group-hover:text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                    <span className="mt-2 inline-block text-sm text-muted-foreground/90">
                      {item.date}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media Assets */}
      <section className="container px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Media{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Assets
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Download high-resolution images, logos, and brand materials.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2040&q=80",
            "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2040&q=80",
            "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2040&q=80",
            "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2040&q=80",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index + 1) * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={item}
                alt="Press image"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <button className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 py-2 text-sm font-medium text-white transition-all hover:scale-105">
                  Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/press-kit.zip"
            download
            className="inline-flex items-center rounded-full border border-purple-600 px-6 py-3 text-purple-600 transition-all hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-500/20"
          >
            Download Full Press Kit
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </Link>
        </motion.div>
      </section>

      {/* Press Contact */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/20 px-4 py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-8 shadow-lg md:p-12"
            >
              <h2 className="mb-6 text-3xl font-bold text-foreground/90 md:text-4xl">
                Press Inquiries
              </h2>
              <p className="mb-8 text-xl text-muted-foreground">
                For media requests, interviews, or additional information,
                please contact our communications team.
              </p>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-lg font-bold text-foreground/90">
                    North America
                  </h3>
                  <p className="mb-2 text-gray-700">Sarah Johnson</p>
                  <p className="mb-4 text-purple-600">
                    sarah@innovatefashion.com
                  </p>
                  <p className="text-muted-foreground/90">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-bold text-foreground/90">
                    Europe & International
                  </h3>
                  <p className="mb-2 text-gray-700">Marcus Chen</p>
                  <p className="mb-4 text-purple-600">
                    marcus@innovatefashion.com
                  </p>
                  <p className="text-muted-foreground/90">+44 20 1234 5678</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressPage;
