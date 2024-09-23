import { ArrowRight } from "lucide-react";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Link from "next/link";
import ProductCard from "./ProductCard";

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

const Newest = async () => {
  const data: simplifiedProduct[] = await getData();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between gap-x-3">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest products
          </h2>

          <Link className="flex items-center gap-x-1 text-primary" href="/all">
            See All{" "}
            <span>
              <ArrowRight className="w-5" />
            </span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newest;
