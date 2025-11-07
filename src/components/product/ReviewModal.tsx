import { X, Heart } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  review: {
    name: string;
    image: string;
    wearing: string;
    featuredProduct: {
      name: string;
      image: string;
      size: string;
    };
  } | null;
}

const ReviewModal = ({ isOpen, onClose, review }: ReviewModalProps) => {
  if (!review) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 bg-transparent border-0 shadow-none">
        <div
          onClick={onClose}
          className="absolute cursor-pointer -top-12 right-0 bg-[#C6C6C6CC]/90 rounded-full p-2 hover:bg-gray-100 transition-colors z-50"
        >
          <X className="w-6 h-6 text-black" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-background overflow-hidden">
          <div className="relative">
            <img
              src={review.image}
              alt={review.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 bg-background">
            <div className="mx-4 py-3 flex items-center justify-between border-b border-black  mb-3">
              <h2 className="text-3xl font-montserrat font-bold">
                {review.name}
              </h2>
              <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <Heart className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="pt-2">
              <h3 className="text-base text-[#5E5E5E] font-montserrat font-semibold mb-2">
                Wearing
              </h3>
              <div className="inline-block border border-black rounded-md px-3 py-1 mb-6">
                <span className="text-sm font-montserrat font-bold text-[#5E5E5E]">
                  {review.wearing}
                </span>
              </div>
              <h3 className="text-base font-montserrat text-[#5E5E5E] font-semibold mb-4">
                Featured product
              </h3>
              <div className="flex items-start gap-4">
                <img
                  src={review.featuredProduct.image}
                  alt={review.featuredProduct.name}
                  className="w-20 h-20 object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-base font-montserrat font-semibold mb-1">
                    {review.featuredProduct.name}
                  </h4>
                  <p className="text-sm text-gray-600 font-montserrat mb-3">
                    <span className="font-semibold">Featured:</span>{" "}
                    {review.featuredProduct.size}
                  </p>
                  <div className="flex justify-end">
                    <button className="w-fit px-4 border-2 border-black text-black py-1 rounded-md font-montserrat text-xs hover:bg-black hover:text-white transition-colors">
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewModal;
