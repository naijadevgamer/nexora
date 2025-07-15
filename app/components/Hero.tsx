import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { MotionDiv } from "./motion-div";
import ParticleBackground from "./ParticleBackground";

const getData = async () => {
  const query = '*[_type == "heroImage"][0]';
  const data = await client.fetch(query);
  return data;
};

export const dynamic = "force-dynamic";

export default async function Hero() {
  const data = await getData();

  return (
    <section className="relative overflow-hidden">
      <ParticleBackground />

      <div className="container relative z-10 py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
                Elevate Your Style with Futuristic Fashion
              </h1>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg leading-8 text-muted-foreground">
                Discover cutting-edge designs that blend technology and fashion
                for the modern era.
              </p>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="rounded-full">
                <Link href="/category/Men">Shop Men</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full"
              >
                <Link href="/category/Women">Shop Women</Link>
              </Button>
            </MotionDiv>
          </div>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/50 bg-background/50 backdrop-blur-md">
              <Image
                src={urlFor(data.image_1).url()}
                alt="Futuristic fashion"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 -right-8 z-[-1] h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute -left-8 -top-8 z-[-1] h-64 w-64 rounded-full bg-pink-500/20 blur-3xl" />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
