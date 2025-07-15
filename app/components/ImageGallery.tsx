"use client";

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";
import { motion } from "framer-motion";

interface iAppProps {
  images: any;
}

const ImageGallery = ({ images }: iAppProps) => {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: object) => {
    setBigImage(image);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: object, idx: number) => (
          <motion.div
            key={String(idx)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="overflow-hidden rounded-lg border border-border/50 bg-background/50 backdrop-blur-md"
          >
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="photo"
              className="h-full w-full cursor-pointer object-cover object-center transition-opacity hover:opacity-90"
              onClick={() => handleSmallImageClick(image)}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-xl border border-border/50 bg-background/50 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="Photo"
          width={800}
          height={800}
          className="h-full w-full object-cover object-center"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground"
        >
          New Arrival
        </motion.div>
      </div>
    </div>
  );
};

export default ImageGallery;
