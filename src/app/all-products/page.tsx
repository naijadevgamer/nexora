import { client } from "@/lib/sanity";
import AllProductsClient from "./AllProductsClient";
import { simplifiedProduct } from "@/lib/interface";

export const revalidate = 60; // ISR

async function getAllProducts() {
  const query = `*[_type == "product"] | order(_createdAt desc) {
    _id,
    price,
    price_id,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
  }`;
  return client.fetch(query);
}

export const metadata = {
  title: "All Products",
  description: "Our entire collection of curated goods.",
};

export default async function AllProductsPage() {
  const products: simplifiedProduct[] = await getAllProducts();
  return <AllProductsClient products={products} />;
}
