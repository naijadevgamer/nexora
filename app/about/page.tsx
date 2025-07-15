"use client";

import { motion } from "framer-motion";
import { Rocket, Globe, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const AboutPage = () => {
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

  const features = [
    {
      icon: <Rocket className="h-8 w-8 text-purple-600" />,
      title: "Pioneering Fashion Tech",
      description:
        "We merge cutting-edge technology with avant-garde design to create the future of wearables.",
      bg: "from-purple-500/10 to-pink-500/10",
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: "Global Vision",
      description:
        "Serving customers in 47 countries with our revolutionary distribution network.",
      bg: "from-blue-500/10 to-purple-500/10",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Community Driven",
      description:
        "500K+ members in our Futurist Fashion Collective shaping tomorrow's trends.",
      bg: "from-pink-500/10 to-rose-500/10",
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "Lightning Fast",
      description:
        "From design to delivery in 72 hours with our AI-powered supply chain.",
      bg: "from-violet-500/10 to-indigo-500/10",
    },
  ];

  return (
    <div className="overflow-hidden bg-white text-gray-900">
      {/* Hero Section with Parallax Video */}
      <div className="relative min-h-[calc(100vh-10rem)] overflow-hidden py-10 text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        >
          <source
            src="https://media.istockphoto.com/id/1872396434/video/black-woman-using-virtual-reality-headset-for-online-shopping-browsing-through-stylish.mp4?s=mp4-640x640-is&k=20&c=5M7r9wsQkfzwJ4wNMeXsdoD9SPc79XRQ5T2sbMcjVKM="
            type="video/mp4"
          />
        </video>
        <div className="absolute left-0 top-0 size-full bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Redefining Reality
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mb-8 max-w-3xl text-xl text-white/90 md:text-2xl"
          >
            Where fashion meets the future. We're building the next generation
            of wearable technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Link
              href="#mission"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-medium transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30"
            >
              Explore Our Vision
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 sm:bottom-10 sm:block"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>

      {/* Mission Section */}
      <section id="mission" className="container px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid items-center gap-16 md:grid-cols-2"
        >
          <div>
            <motion.h2
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8 text-4xl font-bold md:text-5xl"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mission
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
              className="mb-6 text-xl text-gray-600"
            >
              To revolutionize the fashion industry through sustainable
              innovation and cutting-edge technology.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-500"
            >
              Founded in 2025, we've been at the forefront of the digital
              fashion revolution, merging augmented reality, smart fabrics, and
              blockchain authentication to create truly unique experiences.
            </motion.p>
          </div>
          <motion.div
            initial={{ scale: 0.9, rotate: -2 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96"
          >
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2040&q=80"
              alt="Fashion lab"
              fill
              className="rounded-xl object-cover shadow-2xl"
              priority
            />
            <motion.div
              className="absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Why We're{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Different
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We're not just a fashion brand - we're a technology company
              redefining what clothing can do.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:shadow-xl ${feature.bg} hover:bg-gradient-to-r`}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Meet The{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Visionaries
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Our team of futurists, designers, and engineers building tomorrow's
            fashion today.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: "Dr. Elena Voss",
              role: "Chief Futurist",
              image:
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
              animationDelay: 0.1,
              bio: "Former NASA engineer turned fashion tech pioneer with 15 patents in wearable technology.",
            },
            {
              name: "Raj Patel",
              role: "Tech Director",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
              animationDelay: 0.2,
              bio: "AI specialist who built the first neural network for fashion trend prediction.",
            },
            {
              name: "Mia Zhang",
              role: "Creative Lead",
              image:
                "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
              animationDelay: 0.3,
              bio: "Digital artist blending traditional design with augmented reality experiences.",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: member.animationDelay, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="relative h-96">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
              </div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <p className="text-purple-300">{member.role}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 p-6 opacity-0 transition-all group-hover:opacity-100">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="mb-4 text-purple-300">{member.role}</p>
                  <p className="mb-6">{member.bio}</p>
                  <button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-medium text-white transition-all hover:scale-105">
                    View Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl py-12 text-center md:py-20"
        >
          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 text-4xl font-bold md:text-6xl"
          >
            Join The{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Fashion Revolution
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto mb-10 max-w-2xl text-xl text-gray-600"
          >
            Be part of the movement that's changing how the world thinks about
            clothing.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/shop"
              className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
            >
              Shop Now
            </Link>
            <Link
              href="/careers"
              className="rounded-full border-2 border-purple-600 px-8 py-4 text-lg font-bold text-purple-600 transition-all hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-500/20"
            >
              Work With Us
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
