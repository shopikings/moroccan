import { Button } from "../ui/button";
import { useCart } from "../../context/CartContext";

interface ProductActionsProps {
  inStock?: boolean;
  productId: string;
  productName: string;
  productPrice: number;
  productImage: string;
  selectedSize?: string;
  selectedColor?: string;
}

const ProductActions = ({
  inStock = true,
  productId,
  productName,
  productPrice,
  productImage,
  selectedSize,
  selectedColor,
}: ProductActionsProps) => {
  const { addToCart } = useCart();

  const handleAddToBag = () => {
    addToCart({
      id: `${productId}-${selectedSize}-${selectedColor}`,
      name: productName,
      price: productPrice,
      image: productImage,
      size: selectedSize,
      color: selectedColor,
    });
  };

  return (
    <div className="space-y-3">
      {inStock ? (
        <Button
          onClick={handleAddToBag}
          className="w-full bg-black text-white py-6 rounded-full font-montserrat text-sm hover:bg-gray-800 transition-colors"
        >
          Add to Bag
        </Button>
      ) : (
        <>
          <Button className="w-full bg-[#DADADA] text-black py-6 rounded-full font-montserrat text-sm hover:bg-[#DADADA] transition-colors">
            Sold Out
          </Button>
          <Button className="w-full bg-[#DADADA] text-black py-6 rounded-full font-montserrat text-sm hover:bg-[#DADADA] transition-colors">
            Notify me when back in stock
          </Button>
        </>
      )}
    </div>
  );
};

export default ProductActions;
