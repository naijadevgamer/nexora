import { notFound } from "next/navigation";
import { client, urlFor } from "@/lib/sanity";
import ProductClient from "./ProductClient";

async function getProduct(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
    _id, 
    price,
    price_id,
    name,
    description,
    images,
    "slug": slug.current,
    "categoryName": category->name,
    "relatedProducts": *[_type == "product" && category->name == ^.category->name && slug.current != ^.slug.current][0...4] {
      _id,
      name,
      price,
      "slug": slug.current,
      "imageUrl": images[0].asset->url
    }
  }`;

  const data = await client.fetch(query);
  if (!data) notFound();
  return data;
}

// Generate all product pages at build time (SSG)
export async function generateStaticParams() {
  const query = `*[_type == "product"] {
    "slug": slug.current
  }`;
  const products = await client.fetch(query);

  return products.map((product: { slug: string }) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [{ url: urlFor(product.images[0]).url() }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);

  return <ProductClient product={product} />;
}
