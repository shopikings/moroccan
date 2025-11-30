import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductOptionsModal from "./ProductOptionsModal";

interface ProductCardProps {
  id: string;
  handle?: string;
  name: string;
  price: string;
  image: string;
  hoverImage?: string;
  badge?: string;
  salePercentage?: number;
  variants?: {
    id: string;
    title: string;
    price: string;
    compareAtPrice?: string;
    selectedOptions: { name: string; value: string }[];
  }[];
}

const ProductCard = ({
  id,
  handle,
  name,
  price,
  image,
  hoverImage,
  badge,
  salePercentage,
  variants,
}: ProductCardProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isSoldOut = badge === "SOLD OUT";
  const showSaleBadge =
    typeof salePercentage === "number" && salePercentage > 0;

  const handleCardClick = () => {
    navigate(`/product/${handle}`);
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
          <div
            className="absolute top-4 left-4 bg-[#321E1E] text-white px-3 py-2 text-xs font-montserrat font-semibold z-10"
            style={{
              transform: "rotate(-90deg) translateX(-100%)",
              transformOrigin: "top left",
              whiteSpace: "nowrap",
            }}
          >
            SOLD OUT
          </div>
        )}

        {showSaleBadge && !isSoldOut && (
          <div
            className="absolute top-4 left-4 bg-[#CD3434] text-white px-3 py-2 text-xs font-montserrat font-semibold z-10"
            style={{
              transform: "rotate(-90deg) translateX(-100%)",
              transformOrigin: "top left",
              whiteSpace: "nowrap",
            }}
          >
            SAVE {salePercentage}%
          </div>
        )}

        {badge && !isSoldOut && !showSaleBadge && (
          <div
            className="absolute top-4 left-4 bg-[#321E1E] text-white px-3 py-2 text-xs font-montserrat font-semibold z-10"
            style={{
              transform: "rotate(-90deg) translateX(-100%)",
              transformOrigin: "top left",
              whiteSpace: "nowrap",
            }}
          >
            {badge}
          </div>
        )}

        <div className="relative overflow-hidden bg-gray-100">
          {hoverImage && <link rel="preload" as="image" href={hoverImage} />}
          <img
            src={image}
            alt={name}
            className="w-full h-[600px] object-cover"
          />
          <img
            src={hoverImage || image}
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
          <h3 className="font-fahkwang text-sm mb-2 capita">{name}</h3>
          <p className="font-montserrat text-base font-semibold">£{price}</p>
        </div>

        <ProductOptionsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={{
            id: id.toString(),
            name,
            price,
            image,
            hoverImage: hoverImage || image,
            variants: (variants || []).map((v) => ({
              id: v.id,
              price: { amount: v.price, currencyCode: "GBP" }, // wrap string into object
              compareAtPrice: v.compareAtPrice
                ? { amount: v.compareAtPrice, currencyCode: "GBP" }
                : undefined,
              selectedOptions: v.selectedOptions,
            })),
          }}
        />
      </div>
    </>
  );
};

export default ProductCard;
