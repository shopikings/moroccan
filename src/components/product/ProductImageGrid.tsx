import { useState } from "react";
import { Plus } from "lucide-react";

interface ProductImageGridProps {
  images: string[];
  onImageClick: (image: string) => void;
}

const ProductImageGrid = ({ images, onImageClick }: ProductImageGridProps) => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 gap-1">
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
  );
};

export default ProductImageGrid;
