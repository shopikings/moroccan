import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
// import { useProductsByTag } from "@/shopify/useProductsByTag";
import { useProductsByTagCached } from "@/shopify/useProductsByTagCached";
// import { useCart } from "@/context/CartContext";

interface VideoCard {
  id: string;
  videoUrl: string;
  thumbnail: string;
  title: string;
  price: string;
}

interface Product {
  id: string;
  title: string;
  metafield?: {
    reference?: {
      __typename: string;
      sources?: Array<{ url: string }>;
      previewImage?: { url: string };
    };
  };
  images?: {
    edges?: Array<{
      node: {
        url: string;
      };
    }>;
  };
  priceRange?: {
    minVariantPrice?: {
      amount: string;
    };
  };
}

const TrendingNow = () => {
  const {
    data: products = [],
    isLoading,
    error,
  } = useProductsByTagCached("trending-now", 4, "custom", "trending_now") as {
    data: Product[];
    isLoading: boolean;
    error: any;
  };

  // const { addToCart } = useCart();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [playingVideos, setPlayingVideos] = useState<Set<string>>(new Set());
  const [clickedVideo, setClickedVideo] = useState<string | null>(null);

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  // Transform Shopify products into clean video cards
  const transformedCards: VideoCard[] = products
    .map((p: Product) => {
      const videoData = p.metafield?.reference;
      if (!videoData || videoData.__typename !== "Video") return null;
      const videoUrl = videoData.sources?.[0]?.url;
      if (!videoUrl) return null;

      return {
        id: p.id,
        title: p.title,
        videoUrl,
        thumbnail:
          videoData.previewImage?.url ?? p.images?.edges?.[0]?.node?.url ?? "",
        price: p.priceRange?.minVariantPrice?.amount ?? "",
      };
    })
    .filter(Boolean) as VideoCard[];

  // Responsive slides calculations
  const getSlidesPerView = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 768) return 2;
    if (window.innerWidth < 1024) return 3;
    if (window.innerWidth < 1280) return 3;
    return 4;
  };

  const getGapSize = () => {
    if (typeof window === "undefined") return 24;
    if (window.innerWidth < 768) return 16;
    return 24;
  };

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
  const [gapSize, setGapSize] = useState(getGapSize());

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
      setGapSize(getGapSize());
      setCurrentIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = transformedCards.length - slidesPerView;

  const handlePrevious = () => {
    if (isAnimating || currentIndex === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating || currentIndex >= maxIndex) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const togglePlayPause = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    setClickedVideo(id);
    setTimeout(() => setClickedVideo(null), 300);

    if (playingVideos.has(id)) {
      video.pause();
      setPlayingVideos((prev) => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    } else {
      playingVideos.forEach((playingId) => {
        const playingVideo = videoRefs.current[playingId];
        if (playingVideo && playingId !== id) {
          playingVideo.pause();
        }
      });

      video.play();
      setPlayingVideos(new Set([id]));
    }
  };

  if (isLoading) return <p>Loading trending products...</p>;
  if (error) return <p>Failed to load products.</p>;

  return (
    <section className="pt-5 pb-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1920px] mx-auto">
        <h2 className="text-[48px] capitalize font-trirong font-normal mb-3 md:mb-5 text-center">
          Trending Now
        </h2>

        <div className="relative">
          {currentIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-[#E3E2DD] rounded-full p-2 md:p-3 shadow-lg hover:bg-black transition-colors group"
              aria-label="Previous"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:text-white transition-colors" />
            </button>
          )}

          {currentIndex < maxIndex && (
            <button
              onClick={handleNext}
              className="absolute cursor-pointer right-10 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-[#E3E2DD] rounded-full p-2 md:p-3 shadow-lg hover:bg-black transition-colors group"
              aria-label="Next"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:text-white transition-colors" />
            </button>
          )}

          <div className="overflow-hidden">
            <div
              className="flex gap-4 md:gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${currentIndex * 100}% - ${
                  currentIndex * gapSize
                }px))`,
              }}
            >
              {transformedCards.map((card) => (
                <div
                  key={card.id}
                  className="relative aspect-3/4 bg-gray-200 rounded-lg overflow-hidden shrink-0 cursor-pointer group"
                  style={{
                    width: `calc(${100 / slidesPerView}% - ${
                      (gapSize * (slidesPerView - 1)) / slidesPerView
                    }px)`,
                  }}
                  onClick={() => togglePlayPause(card.id)}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[card.id] = el;
                    }}
                    className="w-full h-full object-cover"
                    poster={card.thumbnail}
                    loop
                    playsInline
                  >
                    <source src={card.videoUrl} type="video/mp4" />
                  </video>

                  <div
                    className="absolute bottom-4 left-4 right-4 border border-black rounded-lg p-3 pointer-events-none"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={card.thumbnail}
                        alt="Product"
                        className="w-12 h-12 object-cover rounded border border-black"
                      />
                      <div className="flex-1 flex flex-col justify-between py-1 h-12">
                        <p className="text-black font-montserrat font-bold text-xs">
                          {card.title}
                        </p>
                        <p className="text-black font-montserrat font-semibold text-xs">
                          £{card.price}
                        </p>
                      </div>
                      <button className="bg-white cursor-pointer rounded-lg px-3 py-1.5 text-black font-montserrat font-medium text-xs hover:bg-black hover:text-white transition-colors pointer-events-auto">
                        Add to Bag
                      </button>
                    </div>
                  </div>

                  {!playingVideos.has(card.id) && (
                    <div
                      className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ${
                        clickedVideo === card.id ? "animate-clickZoom" : ""
                      }`}
                    >
                      <img
                        src="/assets/icons/play-button.svg"
                        alt="Play"
                        className="w-16 h-16 md:w-20 md:h-20 animate-zoomInOut"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
