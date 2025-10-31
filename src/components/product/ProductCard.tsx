import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  hoverImage: string;
  badge?: string;
}

const ProductCard = ({
  name,
  price,
  image,
  hoverImage,
  badge,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {badge && (
        <div className="absolute top-4 left-4 bg-[#321E1E] text-white px-2 py-3 text-xs font-montserrat font-semibold z-10 writing-mode-vertical">
          <span className="[writing-mode:vertical-lr] rotate-180">{badge}</span>
        </div>
      )}

      <div className="relative overflow-hidden bg-gray-100">
        <img src={image} alt={name} className="w-full h-[500px] object-cover" />
        <img
          src={hoverImage}
          alt={name}
          className={`absolute inset-0 w-full h-[500px] object-cover transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button className="bg-white text-black hover:bg-gray-100 font-montserrat font-semibold px-6 py-3 rounded-full">
            Choose Options
          </Button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3 className="font-fahkwang text-sm mb-2">{name}</h3>
        <p className="font-montserrat text-base font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
