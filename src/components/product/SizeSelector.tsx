import { useState } from "react";
import { Button } from "../ui/button";
import SizeGuideDrawer from "./SizeGuideDrawer";

interface SizeSelectorProps {
  sizes: { label: string; value: string }[];
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

const SizeSelector = ({
  sizes,
  selectedSize,
  onSizeChange,
}: SizeSelectorProps) => {
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-sm text-gray-600 font-montserrat">Size: </span>
          <span className="text-sm font-montserrat">{selectedSize}</span>
        </div>
        <button
          onClick={() => setIsSizeGuideOpen(true)}
          className="text-sm cursor-pointer font-montserrat underline"
        >
          Size chart
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <Button
            key={size.value}
            onClick={() => onSizeChange(size.label)}
            className={`px-6 py-2 shadow-none rounded-full border font-montserrat text-sm transition-all ${
              selectedSize === size.label
                ? "bg-black text-white border-black"
                : "bg-transparent text-gray-400 border-gray-300 hover:text-black hover:bg-transparent hover:border-black"
            }`}
          >
            {size.label}
          </Button>
        ))}
      </div>

      <SizeGuideDrawer
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </div>
  );
};

export default SizeSelector;
