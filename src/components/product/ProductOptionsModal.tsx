import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useCart } from "../../context/CartContext";

interface ProductVariant {
  id: string;
  price: { amount: string; currencyCode: string };
  compareAtPrice?: { amount: string; currencyCode: string };
  selectedOptions: { name: string; value: string }[];
}

interface ProductOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    price: string;
    image: string;
    hoverImage: string;
    variants: ProductVariant[];
  };
}

const ProductOptionsModal = ({
  isOpen,
  onClose,
  product,
}: ProductOptionsModalProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Dynamically get unique colors and sizes
  const colors = Array.from(
    new Set(
      product.variants
        ?.map(
          (v) =>
            v.selectedOptions.find((o) => o.name.toLowerCase() === "color")
              ?.value
        )
        .filter((c): c is string => !!c) // only keep strings
    )
  );

  const sizes = Array.from(
    new Set(
      product.variants
        ?.map(
          (v) =>
            v.selectedOptions.find((o) => o.name.toLowerCase() === "size")
              ?.value
        )
        .filter((s): s is string => !!s) // only keep strings
    )
  );

  const [selectedColor, setSelectedColor] = useState(colors[0] || "");
  const [selectedSize, setSelectedSize] = useState(sizes[0] || "");

  // Find variant based on selected options
  const selectedVariant = product.variants?.find((v) =>
    v.selectedOptions.every((o) => {
      const name = o.name.toLowerCase();
      return (
        (name === "color" && o.value === selectedColor) ||
        (name === "size" && o.value === selectedSize)
      );
    })
  );

  const displayPrice = selectedVariant
    ? `${selectedVariant.price.amount} ${selectedVariant.price.currencyCode}`
    : product.price;

  const handleAddToBag = () => {
    addToCart({
      id: `${product.id}-${selectedSize}-${selectedColor}`,
      name: product.name,
      price: selectedVariant
        ? parseFloat(selectedVariant.price.amount)
        : parseFloat(product.price.replace(/[^0-9.]/g, "")),
      image: product.image,
      size: selectedSize,
      color: selectedColor,
    });
    onClose();
  };

  const handleViewDetails = () => {
    onClose();
    navigate(`/product/${product.id}`);
  };

  // Map color names to hex codes for swatches
  const colorHexMap: Record<string, string> = {
    "Baltic Amber": "#D4A574",
    "Ocean Blue": "#4A90E2",
    "Forest Green": "#2D5F3F",
    "Sunset Orange": "#E67E22",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-5xl w-[95vw] md:w-full max-h-[90vh] md:max-h-[50vh] p-0 gap-0 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute right-2 top-2 md:right-4 md:top-4 z-50 p-2 rounded-full bg-white hover:bg-gray-100 transition-colors"
        >
          <X className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 h-[90vh] md:h-[50vh]">
          <div className="bg-gray-100 h-[30vh] md:h-[50vh] md:sticky md:top-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500">
            <div className="p-4 md:p-8 space-y-4 md:space-y-8">
              <div>
                <h2 className="font-fahkwang text-xl md:text-4xl font-bold mb-2">
                  {product.name}
                </h2>
                <h2 className="font-fahkwang text-xl md:text-4xl font-bold mb-2">
                  Sale Price
                </h2>
                <p className="font-fahkwang text-lg md:text-xl font-semibold mb-2">
                  £{displayPrice}
                </p>
                <p className="font-fahkwang text-xs md:text-sm text-gray-600">
                  Tax excluded. Shipping calculated at checkout
                </p>
              </div>

              {/* Only show Colors if available */}
              {colors.length > 0 && (
                <div className="pt-4 md:pt-8">
                  <label className="font-montserrat text-sm md:text-base font-semibold mb-3 block">
                    Color: {selectedColor}
                  </label>
                  <div className="flex gap-2 md:gap-3">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 md:w-10 md:h-10 cursor-pointer rounded-full border-2 transition-all ${
                          selectedColor === color
                            ? "border-black scale-110"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                        style={{
                          backgroundColor: colorHexMap[color] || "#ccc",
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Only show Sizes if available */}
              {sizes.length > 0 && (
                <div className="pt-4 md:pt-8">
                  <div className="flex items-center justify-between mb-3">
                    <label className="font-fahkwang text-sm md:text-base font-semibold">
                      Size: {selectedSize}
                    </label>
                    <button className="font-fahkwang text-xs md:text-sm text-gray-600 underline hover:text-gray-900">
                      Size Chart
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 md:px-6 md:py-2 cursor-pointer rounded-full border-2 font-montserrat text-xs font-medium transition-all ${
                          selectedSize === size
                            ? "border-black bg-black text-white"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-6 md:pt-12 pb-4 md:pb-8">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToBag();
                  }}
                  className="w-full md:w-[80%] mx-auto flex items-center justify-center bg-black text-white hover:bg-gray-800 font-montserrat font-semibold py-4 md:py-6 rounded-full"
                >
                  Add to Bag
                </Button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewDetails();
                  }}
                  className="font-fahkwang text-xs md:text-sm underline hover:text-gray-600 transition-colors mt-4 md:mt-16 block mx-auto"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductOptionsModal;
