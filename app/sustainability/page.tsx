"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, Cloud, Droplet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const SustainabilityPage = () => {
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

  const initiatives = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Carbon Negative",
      description:
        "We remove 2x more carbon than we emit through our reforestation partnerships.",
      bg: "from-green-500/10 to-teal-500/10",
    },
    {
      icon: <Recycle className="h-8 w-8 text-green-600" />,
      title: "Circular Design",
      description:
        "100% of our materials are either recycled or biodegradable.",
      bg: "from-emerald-500/10 to-green-500/10",
    },
    {
      icon: <Cloud className="h-8 w-8 text-green-600" />,
      title: "Clean Energy",
      description: "Our factories run on 100% renewable solar and wind power.",
      bg: "from-teal-500/10 to-cyan-500/10",
    },
    {
      icon: <Droplet className="h-8 w-8 text-green-600" />,
      title: "Water Positive",
      description: "We restore 3L of water for every 1L used in production.",
      bg: "from-blue-500/10 to-indigo-500/10",
    },
  ];

  return (
    <div className="overflow-hidden bg-white text-gray-900">
      {/* Hero Section */}
      <div className="relative min-h-[calc(100vh-10rem)] overflow-hidden py-10 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center" />
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
            className="mb-6 bg-gradient-to-r from-green-400 via-teal-500 to-emerald-500 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Sustainable Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-8 max-w-3xl text-xl text-white/90 md:text-2xl"
          >
            We're not just reducing harm - we're actively regenerating our
            planet through revolutionary fashion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Link
              href="#initiatives"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-green-600 to-teal-600 px-8 py-4 text-lg font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
            >
              Our Initiatives
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

      {/* Stats Section */}
      <section className="px-4 py-12 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-4"
          >
            {[
              { number: "2030", label: "Carbon Negative Goal", delay: 0.1 },
              { number: "100%", label: "Renewable Energy", delay: 0.2 },
              { number: "3M", label: "Trees Planted", delay: 0.3 },
              { number: "0", label: "Waste to Landfill", delay: 0.4 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: stat.delay, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4 bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                  {stat.number}
                </div>
                <p className="text-xl text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section id="initiatives" className="container px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
              Initiatives
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            We're pushing boundaries to create fashion that gives back to the
            planet.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:shadow-xl ${initiative.bg} hover:bg-gradient-to-r`}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r from-green-50 to-teal-50">
                {initiative.icon}
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                {initiative.title}
              </h3>
              <p className="text-gray-600">{initiative.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Materials Innovation */}
      <section className="bg-gradient-to-b from-white to-gray-50 px-4 py-12 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid items-center gap-16 md:grid-cols-2"
          >
            <motion.div
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96"
            >
              <Image
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2040&q=80"
                alt="Bio fabric"
                fill
                className="rounded-xl object-cover shadow-2xl"
                priority
              />
              <motion.div
                className="absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-xl bg-gradient-to-r from-green-100 to-teal-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.div>
            <div>
              <h2 className="mb-8 text-4xl font-bold md:text-5xl">
                Material Science Revolution
              </h2>
              <p className="mb-6 text-xl text-gray-600">
                We've developed breakthrough fabrics made from algae, mushroom
                mycelium, and recycled ocean plastics.
              </p>
              <p className="mb-8 text-lg text-gray-500">
                Our lab-grown materials outperform traditional fabrics while
                using 95% less water and producing 80% less CO2.
              </p>
              <Link
                href="https://materialinnovation.org"
                target="_blank"
                className="inline-flex items-center rounded-full border-2 border-green-600 px-6 py-3 text-green-600 transition-all hover:bg-green-600 hover:text-white hover:shadow-lg hover:shadow-green-500/20"
              >
                Learn About Our Fabrics
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="container px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Global{" "}
            <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
              Partnerships
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Collaborating with leading environmental organizations to maximize
            our impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            {
              logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/WWF_logo.svg/320px-WWF_logo.svg.png",
              name: "World Wildlife Fund",
              link: "https://www.worldwildlife.org",
            },
            {
              logo: "https://theoceancleanup.com/wp-content/themes/the-ocean-cleanup/assets/images/toc-logo-white.svg",
              name: "The Ocean Cleanup",
              link: "https://theoceancleanup.com",
            },
            {
              logo: "https://www.1t.org/static/media/1t_logo_white.8e2a2b5d.svg",
              name: "1T.org",
              link: "https://www.1t.org",
            },
            {
              logo: "https://carbon180.org/wp-content/uploads/2020/06/carbon180-logo-white.svg",
              name: "Carbon180",
              link: "https://carbon180.org",
            },
          ].map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex h-32 items-center justify-center rounded-xl bg-white p-6 shadow-md hover:shadow-lg"
            >
              <Link href={partner.link} target="_blank">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="h-16 w-auto object-contain opacity-80 transition-all hover:scale-105 hover:opacity-100"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-50 to-teal-50 px-4 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-8 text-4xl font-bold md:text-6xl">
            Join Our{" "}
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-600">
            Every purchase helps fund environmental restoration projects
            worldwide.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/shop"
              className="rounded-full bg-gradient-to-r from-green-600 to-teal-600 px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
            >
              Shop Sustainable
            </Link>
            <Link
              href="/about"
              className="rounded-full border-2 border-green-600 px-8 py-4 text-lg font-bold text-green-600 transition-all hover:bg-green-600 hover:text-white hover:shadow-lg hover:shadow-green-500/20"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default SustainabilityPage;
