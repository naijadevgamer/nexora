import { client } from "@/lib/sanity";
import CategoryClient from "./CategoryClient";
import { simplifiedProduct } from "@/lib/interface";

export const revalidate = 3600; // ISR

async function getData(category: string) {
  const query = `*[_type == "product" && category->name == "${category}"] | order(_createdAt desc) {
    _id,
    name,
    price,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
  }`;
  return client.fetch(query);
}

// Generate static params for all categories at build time
export async function generateStaticParams() {
  const query = `*[_type == "category"] {
    "category": name
  }`;
  const categories = await client.fetch(query);

  return categories.map((cat: { category: string }) => ({
    category: cat.category,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  const decoded = decodeURIComponent(params.category);
  return {
    title: `${decoded} Collection`,
    description: `Explore our curated ${decoded.toLowerCase()} collection.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const products: simplifiedProduct[] = await getData(params.category);

  return <CategoryClient category={params.category} products={products} />;
}
