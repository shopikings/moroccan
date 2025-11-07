import { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ReviewDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIndex: number;
  reviews: Array<{
    image: string;
    name: string;
    productName: string;
    productImage: string;
    rating: number;
    date: string;
    title: string;
    description: string;
    likes: number;
    comments: number;
  }>;
}

const ReviewDetailModal = ({
  isOpen,
  onClose,
  initialIndex,
  reviews,
}: ReviewDetailModalProps) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(initialIndex);
  const [sliderIndex, setSliderIndex] = useState(0);

  const currentReview = reviews[currentReviewIndex];

  const handlePrevSlider = () => {
    setSliderIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextSlider = () => {
    setSliderIndex((prev) => Math.min(reviews.length - 5, prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentReviewIndex(index);
  };

  if (!currentReview) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-[95vw] md:w-full p-0 bg-transparent border-0 shadow-none [&>button]:hidden">
        <button
          onClick={onClose}
          className="absolute -top-10 md:-top-12 right-0 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors z-50"
        >
          <X className="w-5 h-5 md:w-6 md:h-6 text-black" />
        </button>

        <div className="bg-white overflow-hidden max-h-[90vh] md:max-h-[85vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 max-h-[400px] md:max-h-[600px]">
            <div className="relative bg-black">
              <img
                src={currentReview.image}
                alt={currentReview.name}
                className="w-full h-full max-h-[400px] md:max-h-[600px] object-cover"
              />
            </div>

            <div className="p-4 md:p-8 bg-[#F7F6F0] overflow-y-auto">
              <h2 className="text-sm font-montserrat font-semibold mb-1">
                {currentReview.name}
              </h2>
              <p className="text-sm font-montserrat text-black font-bold mb-4">
                Verified Buyer
              </p>

              <div className="flex items-start gap-3 mb-4">
                <img
                  src={currentReview.productImage}
                  alt={currentReview.productName}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <p className="text-xs font-montserrat font-semibold mb-1">
                    Reviewing
                  </p>
                  <p className="text-xs font-semibold font-montserrat">
                    {currentReview.productName}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= currentReview.rating
                          ? "fill-black text-black"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-montserrat text-gray-600">
                  {currentReview.date}
                </span>
              </div>

              <h3 className="text-xs font-montserrat font-bold mb-2">
                {currentReview.title}
              </h3>
              <p className="text-xs font-montserrat text-gray-700 mb-4">
                {currentReview.description}
              </p>

              <div className="flex items-center gap-4 text-sm font-montserrat text-gray-600">
                <button className="flex items-center gap-1 hover:text-black transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  {currentReview.likes}
                </button>
                <button className="flex items-center gap-1 hover:text-black transition-colors">
                  <ThumbsDown className="w-4 h-4" />
                  {currentReview.comments}
                </button>
              </div>
            </div>
          </div>

          <div className="relative bg-black p-2 md:p-4">
            <div className="overflow-hidden">
              <div
                className="flex gap-1 md:gap-2 transition-transform duration-300"
                style={{
                  transform: `translateX(-${
                    sliderIndex * (window.innerWidth < 768 ? 84 : 136)
                  }px)`,
                }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`shrink-0 w-20 h-20 md:w-32 md:h-32 cursor-pointer ${
                      index === currentReviewIndex
                        ? "ring-2 md:ring-4 ring-white"
                        : "opacity-70 hover:opacity-100"
                    } transition-all`}
                  >
                    <img
                      src={review.image}
                      alt={`Review ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {sliderIndex > 0 && (
              <button
                onClick={handlePrevSlider}
                className="absolute left-0 top-0 bottom-0 h-full w-10 md:w-16 bg-white/30 flex items-center justify-center hover:bg-white/40 transition-all"
              >
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </button>
            )}

            {sliderIndex < reviews.length - 5 && (
              <button
                onClick={handleNextSlider}
                className="absolute right-0 top-0 bottom-0 h-full w-10 md:w-16 bg-white/30 flex items-center justify-center hover:bg-white/40 transition-all"
              >
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewDetailModal;
