import { client } from "@/app/lib/sanity";
import { NextResponse } from "next/server";
// import { client } from "@/lib/sanity";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") || "";

  if (!q) return NextResponse.json([]);

  const query = `*[_type == "product" && name match $q] | order(_createdAt desc) [0...10] {
    _id,
    name,
    price,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
  }`;

  try {
    const data = await client.fetch(query, { q: `*${q}*` });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Search failed" }, { status: 500 });
  }
}
