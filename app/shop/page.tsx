// app/all/page.tsx
import { MotionDiv } from "../components/motion-div";
import ProductCard from "../components/ProductCard";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";

const getData = async () => {
  const query = `*[_type == "product"] | order(_createdAt desc) {
    _id, 
    price,
    price_id,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
  }`;
  const data = await client.fetch(query);
  return data;
};

export const dynamic = "force-dynamic";

const AllProducts = async () => {
  const data: simplifiedProduct[] = await getData();

  return (
    <section className="py-8 sm:py-16">
      <div className="container">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Our Complete Collection
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore all our futuristic fashion pieces
          </p>
        </MotionDiv>

        {data.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((product, idx) => (
              <MotionDiv
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </MotionDiv>
            ))}
          </div>
        ) : (
          <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-border">
            <p className="text-muted-foreground">
              No products available at this time
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProducts;
