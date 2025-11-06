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
}

const FilterDrawer = ({ isOpen, onClose }: FilterDrawerProps) => {
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
                    <input type="radio" name="sort" className="rounded-full" />
                    <span className="text-sm">Featured</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="sort" className="rounded-full" />
                    <span className="text-sm">Best Selling</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="sort" className="rounded-full" />
                    <span className="text-sm">Alphabetically, A - Z</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="sort" className="rounded-full" />
                    <span className="text-sm">Alphabetically, Z - A</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="sort" className="rounded-full" />
                    <span className="text-sm">Price, low to high</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="sort" className="rounded-full" />
                    <span className="text-sm">Price, high to low</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="sort" className="rounded-full" />
                    <span className="text-sm">Date, old to new</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="sort" className="rounded-full" />
                    <span className="text-sm">Date, new to old</span>
                  </label>
                </div>
              </AccordionContent>
            </AccordionItem>

            <div className="flex items-center justify-between border-b border-gray-300 py-4">
              <span className="text-sm font-normal font-montserrat text-text-black">
                In Stock Only
              </span>
              <Switch />
            </div>
            <AccordionItem value="color" className="border-b border-gray-300">
              <AccordionTrigger className="text-sm font-montserrat font-normal text-text-black hover:no-underline py-4">
                Color
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-3 pb-4">
                  <button className="w-5 h-5 rounded-full bg-black border-2 border-gray-300 hover:border-black transition-colors" />
                  <button className="w-5 h-5 rounded-full bg-white border-2 border-gray-300 hover:border-black transition-colors" />
                  <button className="w-5 h-5 rounded-full bg-blue-500 border-2 border-gray-300 hover:border-black transition-colors" />
                  <button className="w-5 h-5 rounded-full bg-red-500 border-2 border-gray-300 hover:border-black transition-colors" />
                  <button className="w-5 h-5 rounded-full bg-green-500 border-2 border-gray-300 hover:border-black transition-colors" />
                  <button className="w-5 h-5 rounded-full bg-yellow-500 border-2 border-gray-300 hover:border-black transition-colors" />
                  <button className="w-5 h-5 rounded-full bg-purple-500 border-2 border-gray-300 hover:border-black transition-colors" />
                  <button className="w-5 h-5 rounded-full bg-pink-500 border-2 border-gray-300 hover:border-black transition-colors" />
                  <button className="w-5 h-5 rounded-full bg-orange-500 border-2 border-gray-300 hover:border-black transition-colors" />
                  <button className="w-5 h-5 rounded-full bg-gray-500 border-2 border-gray-300 hover:border-black transition-colors" />
                  <button className="w-5 h-5 rounded-full bg-indigo-500 border-2 border-gray-300 hover:border-black transition-colors" />
                  <button className="w-5 h-5 rounded-full bg-teal-500 border-2 border-gray-300 hover:border-black transition-colors" />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="length" className="border-b border-gray-300">
              <AccordionTrigger className="text-sm font-montserrat font-normal text-black hover:no-underline py-4">
                Size
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pb-4">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">XXS (10)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">XS (72)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">S (72)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">M (72)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">L (72)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">XL (72)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">XXL (72)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">2T-3T (1)</span>
                  </label>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="size" className="border-b border-gray-300">
              <AccordionTrigger className="text-sm font-montserrat font-normal text-black hover:no-underline py-4">
                Length
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pb-4">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">52" (44)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">54" (72)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">56" (72)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">58" (67)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">60" (51)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">62" (11)</span>
                  </label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#F7F6F0] border-t border-gray-300">
          <div className="flex gap-4">
            <button className="flex-1 py-3 border-2 border-black rounded-full font-montserrat text-sm hover:bg-gray-100 transition-colors">
              Clear All
            </button>
            <button className="flex-1 py-3 bg-black text-white rounded-full font-montserrat text-sm hover:bg-gray-800 transition-colors">
              Apply
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FilterDrawer;
