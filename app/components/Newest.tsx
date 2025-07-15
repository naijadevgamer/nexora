// components/Newest.tsx
import { ArrowRight } from "lucide-react";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { MotionDiv } from "./motion-div";
// import { MotionDiv } from "./motion-div";

const getData = async () => {
  const query = `*[_type == "product"][0...4] | order(_createdAt desc) {
    _id, 
    price, 
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
  }`;
  const data = await client.fetch(query);
  return data;
};

export const dynamic = "force-dynamic";

const Newest = async () => {
  const data: simplifiedProduct[] = await getData();

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 flex items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              New Arrivals
            </h2>
            <p className="mt-2 text-muted-foreground">
              Discover our latest futuristic fashion pieces
            </p>
          </div>
          <Link
            href="/all"
            className="group inline-flex items-center gap-1 text-sm font-medium text-primary"
          >
            View all
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </MotionDiv>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((product, idx) => (
            <MotionDiv
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newest;
