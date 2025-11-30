import { X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedColors: string[];
  setSelectedColors: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSizes: string[];
  setSelectedSizes: React.Dispatch<React.SetStateAction<string[]>>;
  inStockOnly: boolean;
  setInStockOnly: React.Dispatch<React.SetStateAction<boolean>>;
  allColors: string[];
  allSizes: string[];
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
}

const FilterDrawer = ({
  isOpen,
  onClose,
  selectedColors,
  setSelectedColors,
  selectedSizes,
  setSelectedSizes,
  inStockOnly,
  setInStockOnly,
  allColors,
  allSizes,
  sortOption,
  setSortOption,
}: FilterDrawerProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md bg-[#F7F6F0] [&>button]:hidden"
      >
        <SheetHeader className="border-b border-gray-300 pb-2">
          <div className="flex items-center justify-between">
            <button onClick={onClose} className="p-1 cursor-pointer">
              <X className="w-5 h-5" />
            </button>
            <SheetTitle className="text-xl font-normal font-fahkwang">
              Filter
            </SheetTitle>
            <div className="w-6"></div>
          </div>
        </SheetHeader>

        <div className="py-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="sort" className="border-b border-gray-300">
              <AccordionTrigger className="text-sm font-normal font-montserrat text-black hover:no-underline py-4">
                Sort By
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pb-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="sort"
                      className="rounded-full"
                      value="featured"
                      checked={sortOption === "featured"}
                      onChange={(e) => setSortOption(e.target.value)}
                    />
                    <span className="text-sm">Default</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="sort"
                      className="rounded-full"
                      value="a-z"
                      checked={sortOption === "a-z"}
                      onChange={(e) => setSortOption(e.target.value)}
                    />
                    <span className="text-sm">Alphabetically, A - Z</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="sort"
                      className="rounded-full"
                      value="z-a"
                      checked={sortOption === "z-a"}
                      onChange={(e) => setSortOption(e.target.value)}
                    />
                    <span className="text-sm">Alphabetically, Z - A</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="sort"
                      className="rounded-full"
                      value="price-low-high"
                      checked={sortOption === "price-low-high"}
                      onChange={(e) => setSortOption(e.target.value)}
                    />
                    <span className="text-sm">Price, low to high</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="sort"
                      className="rounded-full"
                      value="price-high-low"
                      checked={sortOption === "price-high-low"}
                      onChange={(e) => setSortOption(e.target.value)}
                    />
                    <span className="text-sm">Price, high to low</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="sort"
                      className="rounded-full"
                      value="date-old-new"
                      checked={sortOption === "date-old-new"}
                      onChange={(e) => setSortOption(e.target.value)}
                    />
                    <span className="text-sm">Date, old to new</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="sort"
                      className="rounded-full"
                      value="date-new-old"
                      checked={sortOption === "date-new-old"}
                      onChange={(e) => setSortOption(e.target.value)}
                    />
                    <span className="text-sm">Date, new to old</span>
                  </label>
                </div>
              </AccordionContent>
            </AccordionItem>

            <div className="flex items-center justify-between border-b border-gray-300 py-4">
              <span className="text-sm font-normal font-montserrat text-text-black">
                In Stock Only
              </span>
              <Switch
                checked={inStockOnly}
                onCheckedChange={(checked) => setInStockOnly(checked)}
              />
            </div>

            <AccordionItem value="color" className="border-b border-gray-300">
              <AccordionTrigger className="text-sm font-montserrat font-normal text-text-black hover:no-underline py-4">
                Color
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-3 pb-4">
                  {allColors.map((color) => (
                    <button
                      key={color}
                      style={{ backgroundColor: color }}
                      className={`w-5 h-5 rounded-full border-2 transition-colors ${
                        selectedColors.includes(color)
                          ? "border-black"
                          : "border-gray-300"
                      }`}
                      onClick={() => {
                        setSelectedColors((prev) =>
                          prev.includes(color)
                            ? prev.filter((c) => c !== color)
                            : [...prev, color]
                        );
                      }}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="length" className="border-b border-gray-300">
              <AccordionTrigger className="text-sm font-montserrat font-normal text-black hover:no-underline py-4">
                Size
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pb-4">
                  {allSizes.map((size) => (
                    <label key={size} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="rounded"
                        checked={selectedSizes.includes(size)}
                        onChange={() => {
                          setSelectedSizes((prev) =>
                            prev.includes(size)
                              ? prev.filter((s) => s !== size)
                              : [...prev, size]
                          );
                        }}
                      />
                      <span className="text-sm">{size}</span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#F7F6F0] border-t border-gray-300">
          <div className="flex gap-4">
            <button
              onClick={() => {
                setSelectedColors([]);
                setSelectedSizes([]);
                setInStockOnly(false);
              }}
              className="flex-1 py-3 border-2 border-black rounded-full font-montserrat text-sm hover:bg-gray-100 transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-black text-white rounded-full font-montserrat text-sm hover:bg-gray-800 transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FilterDrawer;
