import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import ReviewDetailModal from "./ReviewDetailModal";
import AddReviewModal from "./AddReviewModal";
import { Button } from "../ui/button";

const ReviewsSection = () => {
  const [hoveredSlider, setHoveredSlider] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState<number | null>(
    null
  );
  const [isAddReviewOpen, setIsAddReviewOpen] = useState(false);

  const reviews = [
    {
      image: "/assets/product/one.png",
      name: "Marhaini H.",
      productName: "Printed Modal Hijab - Spring Garden",
      productImage: "/assets/product/one.png",
      rating: 5,
      date: "9 months ago",
      title: "Beautiful Flowery Modal Print",
      description:
        "The color green with tiny flowers just popped! The material is soft makes it easy to style, simply love it!!",
      likes: 14,
      comments: 0,
    },
    {
      image: "/assets/product/two.png",
      name: "Sarah K.",
      productName: "Printed Modal Hijab - Ocean Blue",
      productImage: "/assets/product/two.png",
      rating: 5,
      date: "8 months ago",
      title: "Perfect for everyday wear",
      description:
        "Absolutely love this hijab! The quality is amazing and it's so comfortable to wear all day.",
      likes: 20,
      comments: 2,
    },
  ];

  const allReviews = [
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
    ...reviews,
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(allReviews.length - 5, prev + 1));
  };

  const handleImageClick = (index: number) => {
    setSelectedReviewIndex(index);
  };

  return (
    <div className="mt-16">
      <h2 className="text-5xl font-fahkwang mb-2">Reviews</h2>
      <div className="flex items-center gap-2 mb-2">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 fill-black text-black" />
          ))}
        </div>
        <span className="text-sm font-montserrat">8,582 Reviews</span>
      </div>

      <h3 className="text-sm font-montserrat font-bold mb-2">
        Reviews Summary
      </h3>
      <p className="text-sm font-montserrat text-black mb-6">
        Customers say this hijab is incredibly soft and versatile. Many reviews
        highlight the lightweight, breathable material that drapes beautifully.
        The colors receive frequent praise, with users noting how well they
        coordinate with various outfits. While some mention the fabric can
        wrinkle easily and appears sheer in certain shades, most find it perfect
        for everyday wear. Many appreciate its comfortable fit and styling
        flexibility.
      </p>

      <div
        className="relative"
        onMouseEnter={() => setHoveredSlider(true)}
        onMouseLeave={() => setHoveredSlider(false)}
      >
        <div className="overflow-hidden">
          <div
            className="flex gap-2 transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 120}px)` }}
          >
            {allReviews.map((review, index) => (
              <div
                key={index}
                className="shrink-0 w-28 h-28 cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={review.image}
                  alt={`Review ${index + 1}`}
                  className="w-full h-fit object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {hoveredSlider && currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute cursor-pointer left-0 top-0 bottom-0 h-full w-10 bg-white/50 flex items-center justify-center hover:bg-white/70 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
        )}

        {hoveredSlider && currentIndex < allReviews.length - 5 && (
          <button
            onClick={handleNext}
            className="absolute cursor-pointer right-0 top-0 bottom-0 h-full w-10 bg-white/50 flex items-center justify-center hover:bg-white/70 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        )}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-montserrat font-semibold mb-4 text-center">
          Reviews (8,582)
        </h3>
        <Button
          onClick={() => setIsAddReviewOpen(true)}
          className="bg-black text-white px-6 py-6 rounded-none font-montserrat text-sm hover:bg-gray-800 transition-colors"
        >
          Add a Review
        </Button>
      </div>

      <ReviewDetailModal
        isOpen={selectedReviewIndex !== null}
        onClose={() => setSelectedReviewIndex(null)}
        initialIndex={selectedReviewIndex || 0}
        reviews={allReviews}
      />

      <AddReviewModal
        isOpen={isAddReviewOpen}
        onClose={() => setIsAddReviewOpen(false)}
        productImage="/assets/product/one.png"
      />
    </div>
  );
};

export default ReviewsSection;
