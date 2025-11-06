import { useState } from "react";
import ReviewCard from "./ReviewCard";
import ReviewModal from "./ReviewModal";

interface Review {
  id: number;
  name: string;
  image: string;
  description: string;
  wearing: string;
  featuredProduct: {
    name: string;
    image: string;
    size: string;
  };
}

const CustomerReviews = () => {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Alaa",
      image: "/assets/product/five.png",
      description:
        "Absolutely love this hijab! The quality is amazing and it's so comfortable to wear all day. The color is exactly as shown...",
      wearing: "Regular (190 x 70 cm)",
      featuredProduct: {
        name: "Printed Modal Hijab - Cloudy Stone",
        image: "/assets/product/one.png",
        size: "Regular (180 × 70 cm)",
      },
    },
    {
      id: 2,
      name: "Sarah",
      image: "/assets/product/six.png",
      description:
        "Perfect fit and beautiful design. I've received so many compliments! The fabric is soft and breathable...",
      wearing: "Regular (190 x 70 cm)",
      featuredProduct: {
        name: "Printed Modal Hijab - Cloudy Stone",
        image: "/assets/product/two.png",
        size: "Regular (180 × 70 cm)",
      },
    },
  ];

  return (
    <div className="mt-16">
      <div className="flex gap-4 flex-wrap">
        {reviews.map((review) => (
          <div key={review.id} className="w-[300px]">
            <ReviewCard
              image={review.image}
              name={review.name}
              description={review.description}
              onClick={() => setSelectedReview(review)}
            />
          </div>
        ))}
      </div>
      <ReviewModal
        isOpen={!!selectedReview}
        onClose={() => setSelectedReview(null)}
        review={selectedReview}
      />
    </div>
  );
};

export default CustomerReviews;
