// app/product/[slug]/page.tsx
import { fullProduct } from "@/app/interface";
import { client } from "../../lib/sanity";
import ImageGallery from "@/app/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { Star, Truck, ChevronRight, Zap } from "lucide-react";
import AddToBag from "@/app/components/AddToBag";
import CheckoutNow from "@/app/components/CheckoutNow";
// import { MotionDiv } from "@/components/motion-div";
import { MotionDiv } from "@/app/components/motion-div"; // Adjusted import path

const getData = async (slug: string) => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
    _id, 
    price,
    price_id,
    name,
    description,
    images,
    "slug": slug.current,
    "categoryName": category->name  
  }`;
  const data = await client.fetch(query);
  return data;
};

export const dynamic = "force-dynamic";

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const data: fullProduct = await getData(params.slug);

  return (
    <section className="py-12 sm:py-16">
      <div className="container">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          <ImageGallery images={data.images} />

          <div className="space-y-6 md:space-y-8">
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block text-sm font-medium text-primary">
                {data.categoryName}
              </span>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {data.name}
              </h1>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Star className="h-4 w-4" />
                <span>4.8</span>
              </div>
              <span className="text-sm text-muted-foreground">142 Reviews</span>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold">${data.price}</span>
                <span className="text-lg text-muted-foreground line-through">
                  ${data.price + 30}
                </span>
                <span className="ml-2 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  20% OFF
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Includes VAT plus shipping
              </p>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Truck className="h-5 w-5" />
              <span>2-4 day shipping</span>
              <span className="flex items-center gap-1 text-primary">
                <Zap className="h-4 w-4" />
                Express available
              </span>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-3"
            >
              <AddToBag
                currency={"USD"}
                name={data.name}
                price_id={data.price_id}
                price={data.price}
                description={data.description}
                image={data.images[0]}
              />
              <CheckoutNow
                currency={"USD"}
                name={data.name}
                price_id={data.price_id}
                price={data.price}
                description={data.description}
                image={data.images[0]}
              />
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="pt-6"
            >
              <h2 className="mb-3 text-lg font-medium">Product Details</h2>
              <div className="prose prose-sm text-muted-foreground">
                <p>{data.description}</p>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-2 text-sm font-medium text-primary"
            >
              <span>View full details</span>
              <ChevronRight className="h-4 w-4" />
            </MotionDiv>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ProductPage;
