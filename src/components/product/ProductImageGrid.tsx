import { useState } from "react";
import { Plus } from "lucide-react";

interface ProductImageGridProps {
  images: string[];
  onImageClick: (image: string) => void;
}

const ProductImageGrid = ({ images, onImageClick }: ProductImageGridProps) => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
    }

    if (touchStart - touchEnd < -75) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div className="space-y-1">
      {/* Mobile Slider */}
      <div className="md:hidden">
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-full shrink-0 cursor-pointer"
                onClick={() => onImageClick(image)}
              >
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? "bg-black w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 gap-1">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden bg-white"
            onMouseEnter={() => setHoveredImage(index)}
            onMouseLeave={() => setHoveredImage(null)}
            onClick={() => onImageClick(image)}
          >
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="w-full h-auto object-cover"
            />
            <div
              className={`absolute bottom-4 right-4 flex items-center gap-2 transition-all duration-300 ${
                hoveredImage === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <span
                className={`text-black text-sm font-montserrat transition-all duration-300 ${
                  hoveredImage === index
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
              >
                Zoom
              </span>
              <div className="rounded-full p-2">
                <Plus className="w-5 h-5 text-black" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full hidden md:inline-block">
        <img
          src="/assets/product/be-the-first.png"
          alt="Be the first"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default ProductImageGrid;
