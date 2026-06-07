//

import { CinematicReveal } from "@/components/cinematic/MotionPrimitives";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nexora — Curated essentials for modern living. Our philosophy, our process, our commitment.",
};

const values = [
  {
    title: "Material Integrity",
    description:
      "Every textile is selected for its structural properties, hand feel, and aging characteristics. We work with heritage mills that share our commitment to quality.",
  },
  {
    title: "Precision Construction",
    description:
      "Garments are built using techniques that prioritize durability and form retention. Each piece is constructed to last decades, not seasons.",
  },
  {
    title: "Timeless Silhouette",
    description:
      "We reject seasonal trends in favor of proportions that remain relevant. Our designs are informed by architecture, not fashion cycles.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Statement */}
      <section className="flex min-h-[70vh] items-center py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <CinematicReveal>
                <h1 className="text-6xl font-light leading-[0.95] md:text-7xl">
                  Design is
                  <br />
                  not a style.
                  <br />
                  It is a way
                  <br />
                  of thinking.
                </h1>
              </CinematicReveal>
            </div>
            <div className="lg:col-span-4 lg:col-start-8">
              <CinematicReveal delay={0.2}>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Nexora was founded on the principle that objects should be
                    engineered, not just designed. Each piece in our collection
                    is a study in proportion, materiality, and structure.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    We source materials from heritage mills in Italy and Japan,
                    working exclusively with artisans who understand that
                    quality is measured in decades, not seasons.
                  </p>
                </div>
              </CinematicReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {values.map((value, idx) => (
              <CinematicReveal key={idx} delay={idx * 0.15}>
                <div className="space-y-3">
                  <div className="h-px w-8 bg-border" />
                  <h3 className="text-2xl font-light">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </CinematicReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="container">
          <CinematicReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-light">
                We believe that what you own should reflect how you think.
              </h2>
            </div>
          </CinematicReveal>
        </div>
      </section>
    </div>
  );
}
