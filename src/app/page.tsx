import CuratedBento from "@/components/home/CuratedBento";
import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import MaterialStory from "@/components/home/MaterialStory";
import Newsletter from "@/components/home/Newsletter";
import ProductsNarrative from "@/components/home/ProductsNarrative";
import { client } from "@/lib/sanity";

export const revalidate = 3600; // ISR

async function getFeaturedProducts() {
  const query = `*[_type == "product"][0...3] | order(_createdAt desc) {
    _id,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url,
    "allImages": images[].asset->url
  }`;
  return client.fetch(query);
}

async function getHeroImage() {
  const query = `*[_type == "heroImage"][0]`;
  return client.fetch(query);
}

export default async function HomePage() {
  const [featured, heroData] = await Promise.all([
    getFeaturedProducts(),
    getHeroImage(),
  ]);

  return (
    <div className="overflow-hidden">
      <Hero heroData={heroData} />
      <ProductsNarrative featured={featured} />
      <Manifesto />
      <CuratedBento featured={featured} />
      <MaterialStory />
      <Newsletter />
    </div>
  );
}
