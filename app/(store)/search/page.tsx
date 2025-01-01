import ProductGrid from "@/components/product-grid";
import { searchProductsByName } from "@/sanity/lib/products/searchProductsByName";
import React from "react";
import { Search, Smile } from "lucide-react"; // Updated icon for a welcoming feel
import Link from "next/link";

async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{
    query: string;
  }>;
}) {
  const { query } = await searchParams;
  const products = await searchProductsByName(query);

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br text-white p-4">
        <div className="bg-red-600 p-10 rounded-2xl shadow-xl w-full max-w-3xl text-center transition-all transform">
          <Smile className="text-yellow-400 w-16 h-16 mb-4 mx-auto animate-bounce" />
          <h1 className="text-4xl font-extrabold mb-4 tracking-tight">
            No products found for `{query}`{" "}
          </h1>
          <p className="text-lg mb-4 font-semibold">
            Try searching with different keywords or browse our popular
            categories.
          </p>
          <button className="bg-yellow-400 text-indigo-900 font-bold py-3 px-6 rounded-full shadow-md hover:bg-yellow-500 transition transform hover:scale-105">
            <Link href={"/"}>Explore Collections</Link>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-5xl transition-all transform hover:shadow-lg">
        <div className="flex items-center justify-center mb-8">
          <Search className="text-red-600 w-10 h-10 mr-3" />
          <h1 className="text-4xl font-extrabold text-center text-gray-800">
            Results for {query}
          </h1>
        </div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}

export default SearchPage;
