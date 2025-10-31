import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TopBar = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const topBarTexts = [
    "Free shipping on orders over $100",
    "30-day return policy",
    "Authentic Moroccan craftsmanship",
    "Worldwide delivery available",
    "New arrivals every week",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % topBarTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [topBarTexts.length]);

  const handlePrevText = () => {
    setCurrentTextIndex(
      (prev) => (prev - 1 + topBarTexts.length) % topBarTexts.length
    );
  };

  const handleNextText = () => {
    setCurrentTextIndex((prev) => (prev + 1) % topBarTexts.length);
  };

  return (
    <div className="w-full bg-background text-black py-1 px-4">
      <div className="flex items-center justify-center max-w-3xl mx-auto">
        <button
          onClick={handlePrevText}
          className="p-1 cursor-pointer hover:bg-gray-200 rounded transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <div className="flex-1 text-center mx-4 relative h-6 overflow-hidden">
          <div
            key={currentTextIndex}
            className="absolute inset-0 flex items-center justify-center animate-in fade-in duration-500"
          >
            <span className="font-montserrat text-xs">
              {topBarTexts[currentTextIndex]}
            </span>
          </div>
        </div>

        <button
          onClick={handleNextText}
          className="p-1 cursor-pointer hover:bg-gray-200 rounded transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
