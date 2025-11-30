import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImageGrid from "@/components/product/ProductImageGrid";
import ProductInfo from "@/components/product/ProductInfo";
import ImageZoomModal from "@/components/product/ImageZoomModal";
import CustomerReviews from "@/components/product/CustomerReviews";
import ReviewsSection from "@/components/product/ReviewsSection";
import ReviewsList from "@/components/product/ReviewsList";
import YoullAlsoLoveSlider from "@/components/product/YoullAlsoLoveSlider";
import { getProduct } from "@/shopify/useProduct";
import type { ShopifyProduct } from "@/shopify/shopifyTypes";

const Product = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!handle) return;

    setLoading(true);
    getProduct(handle)
      .then((res) => setProduct(res))
      .catch((err) => setError(err.message || "Failed to fetch product"))
      .finally(() => setLoading(false));
  }, [handle]);

  if (loading) return <div className="text-center h-screen">Loading...</div>;
  if (error) return <div className="text-center h-screen">{error}</div>;
  if (!product)
    return <div className="text-center h-screen">Product not found</div>;

  // --- Safe to access product now ---
  const images = product.images.edges.map((img) => img.node.src);

  return (
    <div className="w-full bg-[#F7F6F0] min-h-screen">
      <div className="px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-6 lg:gap-4">
          <ProductImageGrid images={images} onImageClick={setSelectedImage} />
          <div className="lg:sticky lg:top-26 lg:self-start">
            <ProductInfo product={product} />
          </div>
        </div>

        <CustomerReviews />
        <ReviewsSection />
        <ReviewsList />
        <YoullAlsoLoveSlider />
      </div>

      <ImageZoomModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default Product;
