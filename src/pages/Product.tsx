import { useState } from "react";
import ProductImageGrid from "@/components/product/ProductImageGrid";
import ProductInfo from "@/components/product/ProductInfo";
import ImageZoomModal from "@/components/product/ImageZoomModal";
import CustomerReviews from "@/components/product/CustomerReviews";
import ReviewsSection from "@/components/product/ReviewsSection";
import ReviewsList from "@/components/product/ReviewsList";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const productImages = [
    "/assets/product/one.png",
    "/assets/product/two.png",
    "/assets/product/three.png",
    "/assets/product/four.png",
  ];

  return (
    <div className="w-full bg-[#F7F6F0] min-h-screen">
      <div className="px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[57%_43%] gap-6 lg:gap-4">
          <ProductImageGrid
            images={productImages}
            onImageClick={setSelectedImage}
          />
          <div className="lg:sticky lg:top-26 lg:self-start">
            <ProductInfo
              name="Printed Modal Hijab - Cloudy Stone"
              salePrice="£11.00 GBP"
              originalPrice="£15.00 GBP"
              discount={27}
            />
          </div>
        </div>

        <CustomerReviews />

        <ReviewsSection />

        <ReviewsList />
      </div>

      <ImageZoomModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default Product;
