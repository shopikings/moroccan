import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductOptionsModal from "./ProductOptionsModal";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  hoverImage: string;
  badge?: string;
  salePercentage?: number;
}

const ProductCard = ({
  id,
  name,
  price,
  image,
  hoverImage,
  badge,
  salePercentage,
}: ProductCardProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isSoldOut = badge === "SOLD OUT";
  const showSaleBadge = salePercentage && salePercentage > 0;

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div
        className="relative group cursor-pointer h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
      >
        {isSoldOut && (
          <div className="absolute top-4 left-4 bg-[#321E1E] text-white px-2 py-3 text-xs font-montserrat font-semibold z-10 writing-mode-vertical">
            <span className="[writing-mode:vertical-lr] rotate-180">
              SOLD OUT
            </span>
          </div>
        )}

        {showSaleBadge && !isSoldOut && (
          <div className="absolute top-4 left-4 bg-[#CD3434] text-white px-2 py-3 text-xs font-montserrat font-semibold z-10 writing-mode-vertical">
            <span className="[writing-mode:vertical-lr] rotate-180">
              SAVE {salePercentage}%
            </span>
          </div>
        )}

        {badge && !isSoldOut && !showSaleBadge && (
          <div className="absolute top-4 left-4 bg-[#321E1E] text-white px-2 py-3 text-xs font-montserrat font-semibold z-10 writing-mode-vertical">
            <span className="[writing-mode:vertical-lr] rotate-180">
              {badge}
            </span>
          </div>
        )}

        <div className="relative overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={name}
            className="w-full h-[600px] object-cover"
          />
          <img
            src={hoverImage}
            alt={name}
            className={`absolute inset-0 w-full h-[600px] object-cover transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="bg-white text-black hover:bg-gray-100 font-montserrat font-semibold px-12 py-3 rounded-full relative overflow-hidden group/btn"
            >
              <span className="inline-block transition-all duration-500 group-hover/btn:translate-x-[200%] group-hover/btn:opacity-0">
                Choose More Options
              </span>
              <span className="absolute inset-0 flex items-center justify-center -translate-x-[200%] opacity-0 transition-all duration-500 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
                Choose More Options
              </span>
            </Button>
          </div>
        </div>

        <div className="mt-4 text-center">
          <h3 className="font-fahkwang text-sm mb-2">{name}</h3>
          <p className="font-montserrat text-base font-semibold">{price}</p>
        </div>

        <ProductOptionsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={{ name, price, image, hoverImage }}
        />
      </div>
    </>
  );
};

export default ProductCard;
