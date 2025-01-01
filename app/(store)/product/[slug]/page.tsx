import AddToBasketButton from "@/components/AddToBasketButton";
import FAQSection from "@/components/qa";
import { imageUrl } from "@/lib/imageUrl";
import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  const isOutOfStock = product.stock != null && product.stock <= 0;
  const rating = product.rating ?? 4.5;
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Image Section */}
        <div
          className={`relative aspect-square overflow-hidden rounded-lg shadow-lg ${isOutOfStock ? "opacity-50" : ""}`}
        >
          {product.image && (
            <Image
              src={imageUrl(product.image).url()}
              alt={product.name ?? "Product image"}
              fill
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          )}
          {isOutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Product Name */}
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {product.name}
            </h1>

            {/* Price */}
            <div className="text-2xl font-semibold text-blue-600 mb-2">
              ${product.price?.toFixed(2)}
            </div>

            {/* Description */}
            <div className="max-w-none prose mb-6 text-gray-700">
              {Array.isArray(product.description) && (
                <PortableText value={product.description} />
              )}
            </div>

            {/* Ratings */}
            <div className="flex items-center mb-4">
              {[...Array(filledStars)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
              {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
              {[...Array(5 - filledStars - (halfStar ? 1 : 0))].map((_, i) => (
                <FaRegStar key={i} className="text-yellow-500" />
              ))}
              <span className="text-gray-600 ml-2">({rating.toFixed(1)})</span>
            </div>
          </div>

          {/* Add to Basket Button */}
          <div className="mt-6">
            <AddToBasketButton product={product} disabled={isOutOfStock} />
          </div>
            {/* Q&A Section */}
            <FAQSection />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

