"use client";

import { motion } from "framer-motion";
import { Briefcase, Globe, Cpu, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const CareersPage = () => {
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

  const benefits = [
    {
      icon: <Zap className="h-6 w-6 text-purple-600" />,
      title: "Competitive Salary",
      description: "Top-tier compensation with equity options",
      bg: "from-purple-500/10 to-pink-500/10",
    },
    {
      icon: <Globe className="h-6 w-6 text-purple-600" />,
      title: "Global Offices",
      description: "Work from our hubs in 5 countries",
      bg: "from-blue-500/10 to-purple-500/10",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-purple-600" />,
      title: "Flexible Work",
      description: "Hybrid remote/in-office options",
      bg: "from-pink-500/10 to-rose-500/10",
    },
    {
      icon: <Cpu className="h-6 w-6 text-purple-600" />,
      title: "Cutting-Edge Tech",
      description: "Access to the latest tools and hardware",
      bg: "from-violet-500/10 to-indigo-500/10",
    },
  ];

  const openPositions = [
    {
      title: "Augmented Reality Designer",
      location: "Remote",
      type: "Full-time",
      link: "https://jobs.innovatefashion.com/ar-designer",
      salary: "$90K - $130K",
    },
    {
      title: "Sustainable Materials Engineer",
      location: "Berlin",
      type: "Full-time",
      link: "https://jobs.innovatefashion.com/materials-engineer",
      salary: "€85K - €120K",
    },
    {
      title: "Fashion Tech Product Manager",
      location: "New York",
      type: "Full-time",
      link: "https://jobs.innovatefashion.com/product-manager",
      salary: "$110K - $150K",
    },
    {
      title: "3D Rendering Specialist",
      location: "Remote",
      type: "Contract",
      link: "https://jobs.innovatefashion.com/3d-specialist",
      salary: "$70 - $120/hr",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[calc(100vh-10rem)] overflow-hidden py-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2040&q=80')] bg-cover bg-center" />
        <div className="absolute left-0 top-0 size-full bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
        >
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Build The Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-8 max-w-3xl text-xl text-white/90 md:text-2xl"
          >
            Join our team of visionaries redefining fashion through technology
            and innovation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Link
              href="#positions"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
            >
              View Open Roles
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
      </div>

      {/* Culture Section */}
      <section className="container px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
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
                Culture
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
              className="mb-6 text-xl text-muted-foreground"
            >
              We foster creativity, collaboration, and bold thinking. Our flat
              structure empowers everyone to lead.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground/70"
            >
              Join a team that values your unique perspective and gives you the
              tools to turn visionary ideas into reality.
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
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2040&q=80"
              alt="Team collaboration"
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

      {/* Benefits Section */}
      <section className="bg-gradient-to-b from-background to-muted/50 px-4 py-12 md:py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Why{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Join Us
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              We invest in our team's growth, wellbeing, and success.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`rounded-2xl border border-border bg-card p-8 shadow-lg transition-all hover:shadow-xl ${benefit.bg} hover:bg-gradient-to-r`}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary/10 to-primary/20">
                  {benefit.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-card-foreground/90">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="container px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Open{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Positions
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Help us build the future of fashion technology.
          </p>
        </motion.div>

        <div className="space-y-4">
          {openPositions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Link
                href={position.link}
                target="_blank"
                className="block rounded-xl border border-border bg-card p-6 shadow-lg transition-all hover:border-purple-500 group-hover:shadow-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-card-foreground/90 group-hover:text-purple-600">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground/70">
                      <span className="flex items-center">
                        <svg
                          className="mr-1 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <svg
                          className="mr-1 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <svg
                          className="mr-1 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {position.salary}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-medium text-white transition-all hover:scale-105">
                      Apply Now
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
                    </span>
                  </div>
                </div>
              </Link>
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
          <p className="mb-6 text-lg text-muted-foreground">
            Don't see your dream role? We're always looking for exceptional
            talent.
          </p>
          <Link
            href="mailto:talent@innovatefashion.com"
            className="inline-flex items-center rounded-full border border-purple-600 px-6 py-3 text-purple-600 transition-all hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-500/20"
          >
            Send Us Your Resume
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
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/20 px-4 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-8 text-4xl font-bold md:text-6xl">
            Ready to{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Innovate?
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground">
            Join a team that's changing the world through fashion technology.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#positions"
              className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
            >
              View Open Roles
            </Link>
            <Link
              href="/about"
              className="rounded-full border-2 border-purple-600 px-8 py-4 text-lg font-bold text-purple-600 transition-all hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-500/20"
            >
              Learn About Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CareersPage;
