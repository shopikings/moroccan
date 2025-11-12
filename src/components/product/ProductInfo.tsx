import { useState } from "react";
import ProductPrice from "./ProductPrice";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import ProductActions from "./ProductActions";
import ProductAccordions from "./ProductAccordions";
import CompleteYourLook from "./CompleteYourLook";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";

interface ProductInfoProps {
  productId: string;
  name: string;
  salePrice: string;
  originalPrice: string;
  discount: number;
  productImage: string;
}

const ProductInfo = ({
  productId,
  name,
  salePrice,
  originalPrice,
  discount,
  productImage,
}: ProductInfoProps) => {
  const [selectedColor, setSelectedColor] = useState("Cloudy Stone");
  const [selectedSize, setSelectedSize] = useState("Regular (180x70 cm)");
  const { addToWishlist, isInWishlist } = useWishlist();

  const handleAddToWishlist = () => {
    addToWishlist({
      id: productId,
      name,
      price: parseFloat(salePrice.replace("£", "")),
      image: productImage,
      color: selectedColor,
    });
  };

  const colors = [
    { name: "Burgundy", value: "#800020" },
    { name: "Lavender", value: "#E6E6FA" },
    { name: "Black", value: "#000000" },
    { name: "Cloudy Stone", value: "#A9A9A9" },
    { name: "Tan", value: "#D2B48C" },
    { name: "Brown", value: "#8B4513" },
    { name: "Dark Gray", value: "#696969" },
    { name: "Wine", value: "#722F37" },
    { name: "Mint", value: "#98FF98" },
    { name: "Light Purple", value: "#DDA0DD" },
    { name: "Beige", value: "#F5F5DC" },
    { name: "Orange", value: "#FFA500" },
    { name: "Light Blue", value: "#ADD8E6" },
    { name: "Navy", value: "#000080" },
    { name: "Floral", value: "#FFB6C1" },
    { name: "Magenta", value: "#FF00FF" },
    { name: "Peach", value: "#FFDAB9" },
    { name: "Forest Green", value: "#228B22" },
    { name: "Charcoal", value: "#36454F" },
    { name: "Pink", value: "#FFC0CB" },
    { name: "Teal", value: "#008080" },
    { name: "Gray", value: "#808080" },
  ];

  const sizes = [
    { label: "Regular (180x70 cm)", value: "regular" },
    { label: "Short (165x70 cm)", value: "short" },
    { label: "Long (195x70 cm)", value: "long" },
    { label: "Mini (165x50 cm)", value: "mini" },
  ];

  return (
    <div className="lg:px-8">
      <div className="flex items-start gap-2 mb-4">
        <h1 className="text-3xl md:text-5xl font-family-montserrat mb-4">
          {name}
        </h1>
        <button
          onClick={handleAddToWishlist}
          className="p-1 cursor-pointer hover:bg-gray-100 rounded-full transition-colors"
        >
          <Heart
            className={`w-7 h-7 ${
              isInWishlist(productId)
                ? "fill-red-500 text-red-500"
                : "text-gray-700"
            }`}
          />
        </button>
      </div>

      <ProductPrice
        salePrice={salePrice}
        originalPrice={originalPrice}
        discount={discount}
      />

      <Button className="w-fit bg-black text-white py-3 rounded-full font-montserrat text-sm mb-6 hover:bg-gray-800 transition-colors">
        Talk to a stylist
      </Button>

      <ColorSelector
        colors={colors}
        selectedColor={selectedColor}
        onColorChange={setSelectedColor}
      />

      <SizeSelector
        sizes={sizes}
        selectedSize={selectedSize}
        onSizeChange={setSelectedSize}
      />

      <ProductActions
        productId={productId}
        productName={name}
        productPrice={parseFloat(salePrice.replace("£", ""))}
        productImage={productImage}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
      />

      <ProductAccordions />

      <CompleteYourLook />
    </div>
  );
};

export default ProductInfo;
