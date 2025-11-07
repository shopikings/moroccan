import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Review {
  id: number;
  name: string;
  verified: boolean;
  country: string;
  avatar: string;
  productName: string;
  productImage: string;
  ageRange: string;
  rating: number;
  title: string;
  description: string;
  images: string[];
  date: string;
}

const ReviewsList = () => {
  const [sortBy, setSortBy] = useState("featured");
  const [visibleReviews, setVisibleReviews] = useState(5);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Marhaini H.",
      verified: true,
      country: "https://flagcdn.com/w20/sg.png",
      avatar: "/assets/reviews/avatar-1.png",
      productName: "Printed Modal Hijab - Spring Garden",
      productImage: "/assets/product/one.png",
      ageRange: "45 - 54",
      rating: 5,
      title: "Beautiful Flowery Modal Print",
      description:
        "The colour green with tiny flowers just popped! The material is soft makes it easy to style, simply love it!!",
      images: ["/assets/product/one.png", "/assets/product/two.png"],
      date: "9 months ago",
    },
    {
      id: 2,
      name: "Hari R.",
      verified: true,
      country: "https://flagcdn.com/w20/in.png",
      avatar: "/assets/reviews/avatar-2.png",
      productName: "Modal Hijab - Pear",
      productImage: "/assets/product/two.png",
      ageRange: "35 - 44",
      rating: 5,
      title: "Beautiful Colour",
      description: "Wore this on my holiday. Just stunning",
      images: ["/assets/product/two.png", "/assets/product/three.png"],
      date: "9 months ago",
    },
    {
      id: 3,
      name: "M. P.",
      verified: true,
      country: "https://flagcdn.com/w20/us.png",
      avatar: "/assets/reviews/avatar-3.png",
      productName: "Modal Hijab - Orchid",
      productImage: "/assets/product/three.png",
      ageRange: "",
      rating: 5,
      title: "Pretty Color",
      description: "love this hijab",
      images: [],
      date: "12 hours ago",
    },
    {
      id: 4,
      name: "M. B.",
      verified: true,
      country: "https://flagcdn.com/w20/us.png",
      avatar: "/assets/reviews/avatar-4.png",
      productName: "Modal Hijab - Pistachio",
      productImage: "/assets/product/four.png",
      ageRange: "",
      rating: 5,
      title: "Pretty Pastel",
      description:
        "the color is a little lighter than the picture shows still a good purchase!",
      images: [],
      date: "12 hours ago",
    },
    {
      id: 5,
      name: "M. P.",
      verified: true,
      country: "https://flagcdn.com/w20/us.png",
      avatar: "/assets/reviews/avatar-5.png",
      productName: "Modal Hijab - Natural",
      productImage: "/assets/product/one.png",
      ageRange: "",
      rating: 3,
      title: "Nice Tan Color",
      description:
        "please change the name, not every Muslima is this color, we are all natural.",
      images: [],
      date: "12 hours ago",
    },
  ];

  const handleShowMore = () => {
    setVisibleReviews((prev) => prev + 5);
  };

  return (
    <div className="my-12">
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm font-montserrat text-gray-600">
          {reviews.length} reviews
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-montserrat">Sort</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[140px] text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="highest">Highest Rating</SelectItem>
              <SelectItem value="lowest">Lowest Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-8 md:space-y-12">
        {reviews.slice(0, visibleReviews).map((review) => (
          <div
            key={review.id}
            className="border-b border-gray-200 pb-8 md:pb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-16">
              <div className="shrink-0 md:w-52">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-sm font-montserrat font-bold">
                    {review.name}
                  </h4>
                  <img
                    src={review.country}
                    alt="Country flag"
                    className="w-5 h-auto"
                  />
                </div>
                <p className="text-xs font-montserrat text-black font-bold mb-3 md:mb-4">
                  Verified Buyer {review.verified && "✓"}
                </p>

                <div className="flex items-start gap-2 md:gap-3">
                  <img
                    src={review.productImage}
                    alt={review.productName}
                    className="w-10 h-10 md:w-12 md:h-12 object-cover"
                  />
                  <div>
                    <p className="text-xs font-montserrat font-semibold mb-1">
                      Reviewing
                    </p>
                    <p className="text-xs font-montserrat">
                      {review.productName}
                    </p>
                  </div>
                </div>

                {review.ageRange && (
                  <div className="w-full flex justify-start md:justify-between mt-3">
                    <p className="text-xs font-montserrat text-black font-bold">
                      Age Range:
                    </p>
                    <p className="text-xs font-montserrat text-black">
                      {review.ageRange}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 md:w-5 md:h-5 ${
                          star <= review.rating
                            ? "fill-black text-black"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs md:text-sm font-montserrat text-gray-500">
                    {review.date}
                  </span>
                </div>

                <h5 className="text-sm md:text-base font-montserrat font-normal mb-2">
                  {review.title}
                </h5>
                <p className="text-xs md:text-sm font-montserrat text-gray-700">
                  {review.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button
          onClick={handleShowMore}
          className="bg-black text-white px-8 py-4 rounded-none font-montserrat text-sm hover:bg-gray-800 transition-colors"
        >
          Show More
        </Button>
      </div>
    </div>
  );
};

export default ReviewsList;
