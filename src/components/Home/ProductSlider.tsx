import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  hoverImage: string;
  badge?: string;
}

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Ombre Modal Hijab - Baltic Amber",
      price: "£40.0 GBP",
      image: "assets/productTwo.png",
      hoverImage: "assets/productTwo-hover.png",
      badge: "SOLD OUT",
    },
    {
      id: 2,
      name: "Ombre Modal Hijab - Ocean Blue",
      price: "£40.0 GBP",
      image: "assets/productThree.png",
      hoverImage: "assets/productThree-hover.png",
    },
    {
      id: 3,
      name: "Ombre Modal Hijab - Forest Green",
      price: "£40.0 GBP",
      image: "assets/productFour.png",
      hoverImage: "assets/productFour-hover.png",
    },
    {
      id: 4,
      name: "Ombre Modal Hijab - Sunset Orange",
      price: "£40.0 GBP",
      image: "assets/productTwo.png",
      hoverImage: "assets/productThree-hover.png",
    },
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, products.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="w-full bg-background p-0">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-[25.333%]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[600px] object-cover"
          >
            <source src="/assets/home/home-slider.mp4" type="video/mp4" />
          </video>
        </div>

        <div
          className="flex-1 relative w-full md:w-[66.666%]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className={`absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 z-10 p-2 border border-gray-300 rounded-full bg-white hover:bg-black transition-all duration-300 group ${
                isHovered ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <ArrowLeft className="w-5 h-5 text-black group-hover:text-white transition-colors" />
            </button>
          )}

          {currentIndex < maxIndex && (
            <button
              onClick={handleNext}
              className={`absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 z-10 p-2 border border-gray-300 rounded-full bg-white hover:bg-black transition-all duration-300 group ${
                isHovered ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <ArrowRight className="w-5 h-5 text-black group-hover:text-white transition-colors" />
            </button>
          )}

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {products.map((product) => (
                <div key={product.id} className="min-w-[33.333%] px-0">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
