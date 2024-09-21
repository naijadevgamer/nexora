import ProductCard from "../components/ProductCard";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";

const getData = async (category: string) => {
  const query = `*[_type == "product" && category->name == "${category}"]{
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

const Category = async ({ params }: { params: { category: string } }) => {
  const data: simplifiedProduct[] = await getData(params.category);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between gap-x-3 items-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Our products for {params.category}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
