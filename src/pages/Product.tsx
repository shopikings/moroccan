import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductImageGrid from "@/components/product/ProductImageGrid";
import ProductInfo from "@/components/product/ProductInfo";
import ImageZoomModal from "@/components/product/ImageZoomModal";

const Product = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const productImages = [
    "/assets/product/one.png",
    "/assets/product/two.png",
    "/assets/product/three.png",
    "/assets/product/four.png",
  ];

  return (
    <div className="w-full bg-[#F7F6F0] min-h-screen">
      <div className=" px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[57%_43%] gap-4">
          <ProductImageGrid
            images={productImages}
            onImageClick={setSelectedImage}
          />
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductInfo
              id={id}
              name="Printed Modal Hijab - Cloudy Stone"
              salePrice="£11.00 GBP"
              originalPrice="£15.00 GBP"
              discount={27}
              inStock={true}
            />
          </div>
        </div>
      </div>

      <ImageZoomModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default Product;
