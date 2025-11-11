import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useCart } from "../../context/CartContext";

interface ProductOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    price: string;
    image: string;
    hoverImage: string;
  };
}

const ProductOptionsModal = ({
  isOpen,
  onClose,
  product,
}: ProductOptionsModalProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState("Baltic Amber");
  const [selectedSize, setSelectedSize] = useState("Regular (180x70 Cm)");
  const [selectedLength, setSelectedLength] = useState("54");

  const handleAddToBag = () => {
    addToCart({
      id: `${product.id}-${selectedSize}-${selectedColor}`,
      name: product.name,
      price: parseFloat(product.price.replace(/[^0-9.]/g, "")),
      image: product.image,
      size: selectedSize,
      color: selectedColor,
    });
    onClose();
  };

  const handleViewDetails = () => {
    onClose();
    navigate("/product/1");
  };

  const colors = [
    { name: "Baltic Amber", color: "#D4A574" },
    { name: "Ocean Blue", color: "#4A90E2" },
    { name: "Forest Green", color: "#2D5F3F" },
    { name: "Sunset Orange", color: "#E67E22" },
  ];

  const lengths = ["33", "54", "60"];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[50vh] p-0 gap-0 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 p-2 rounded-full bg-white hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 h-[50vh]">
          <div className="bg-gray-100 sticky top-0 h-[50vh]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500">
            <div className="p-8 space-y-8 min-h-[120vh]">
              <div>
                <h2 className="font-fahkwang text-4xl font-bold mb-2">
                  {product.name}
                </h2>
                <h2 className="font-fahkwang text-4xl font-bold mb-2">
                  Sale Price
                </h2>
                <p className="font-fahkwang text-xl font-semibold mb-2">
                  {product.price}
                </p>
                <p className="font-fahkwang text-sm text-gray-600">
                  Tax excluded. Shipping calculated at checkout
                </p>
              </div>

              <div className="pt-8">
                <label className="font-montserrat text-base font-semibold mb-3 block">
                  Color: {selectedColor}
                </label>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-5 h-5 cursor-pointer rounded-full border-2 transition-all ${
                        selectedColor === color.name
                          ? "border-black scale-110"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      style={{ backgroundColor: color.color }}
                    />
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="font-fahkwang text-base font-semibold">
                    Size: {selectedSize}
                  </label>
                  <button className="font-fahkwang text-sm text-gray-600 underline hover:text-gray-900">
                    Size Chart
                  </button>
                </div>
                <div className="flex gap-3">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-2 cursor-pointer rounded-full border-2 font-montserrat text-xs font-medium transition-all ${
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

              <div className="pt-8">
                <label className="font-fahkwang text-base font-semibold mb-3 block">
                  Length: {selectedLength}
                </label>
                <div className="flex gap-3">
                  {lengths.map((length) => (
                    <button
                      key={length}
                      onClick={() => setSelectedLength(length)}
                      className={`px-6 py-2 cursor-pointer rounded-full border-2 font-montserrat text-xs font-medium transition-all ${
                        selectedLength === length
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {length}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-12 pb-8">
                <Button
                  onClick={handleAddToBag}
                  className="w-[80%] mx-auto flex items-center justify-center bg-black text-white hover:bg-gray-800 font-montserrat font-semibold py-6 rounded-full"
                >
                  Add to Bag
                </Button>
                <button
                  onClick={handleViewDetails}
                  className="font-fahkwang text-sm underline hover:text-gray-600 transition-colors mt-16"
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
