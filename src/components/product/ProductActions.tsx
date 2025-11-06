import { Button } from "../ui/button";

const ProductActions = () => {
  return (
    <div className="space-y-3">
      <Button className="w-full bg-black text-white py-6 rounded-full font-montserrat text-sm hover:bg-gray-800 transition-colors">
        Add to Bag
      </Button>
      <Button className="w-full bg-[#DADADA] text-black py-6 rounded-full font-montserrat text-sm hover:bg-[#DADADA] transition-colors">
        Sold Out
      </Button>
      <Button className="w-full bg-[#DADADA] text-black py-6 rounded-full font-montserrat text-sm hover:bg-[#DADADA] transition-colors">
        Notify me when back in stock
      </Button>
    </div>
  );
};

export default ProductActions;
