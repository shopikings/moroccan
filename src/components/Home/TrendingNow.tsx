import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface VideoCard {
  id: number;
  videoUrl: string;
  thumbnail: string;
}

const TrendingNow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set());
  const [clickedVideo, setClickedVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const videoCards: VideoCard[] = [
    {
      id: 1,
      videoUrl: "/assets/home/banner.mp4",
      thumbnail: "/assets/home/best-seller.png",
    },
    {
      id: 2,
      videoUrl: "/assets/home/dresses.mp4",
      thumbnail: "/assets/home/new.png",
    },
    {
      id: 3,
      videoUrl: "/assets/home/home-slider.mp4",
      thumbnail: "/assets/home/best-seller.png",
    },
    {
      id: 4,
      videoUrl: "/assets/home/banner.mp4",
      thumbnail: "/assets/home/new.png",
    },
    {
      id: 5,
      videoUrl: "/assets/home/banner.mp4",
      thumbnail: "/assets/home/best-seller.png",
    },
    {
      id: 6,
      videoUrl: "/assets/home/dresses.mp4",
      thumbnail: "/assets/home/new.png",
    },
    {
      id: 7,
      videoUrl: "/assets/home/home-slider.mp4",
      thumbnail: "/assets/home/best-seller.png",
    },
    {
      id: 8,
      videoUrl: "/assets/home/banner.mp4",
      thumbnail: "/assets/home/new.png",
    },
  ];

  const maxIndex = videoCards.length - 4;

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

  const togglePlayPause = (id: number) => {
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
      video.play();
      setPlayingVideos((prev) => new Set(prev).add(id));
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1920px] mx-auto">
        <h2 className="text-[48px] font-trirong font-normal mb-8 md:mb-12 text-center">
          TRENDING NOW
        </h2>

        <div className="relative">
          {currentIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-black rounded-full p-2 md:p-3 shadow-lg hover:bg-gray-800 transition-colors"
              aria-label="Previous"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
          )}

          {currentIndex < maxIndex && (
            <button
              onClick={handleNext}
              className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-black rounded-full p-2 md:p-3 shadow-lg hover:bg-gray-800 transition-colors"
              aria-label="Next"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
          )}

          <div className="overflow-hidden">
            <div
              className="flex gap-4 md:gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 25}%)`,
              }}
            >
              {videoCards.map((card) => (
                <div
                  key={card.id}
                  className="relative aspect-3/4 bg-gray-200 rounded-lg overflow-hidden shrink-0 w-[calc(25%-1.5rem)] cursor-pointer group"
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

                  <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 w-fit rounded-sm pointer-events-none">
                    <p className="text-black capitalize font-semibold text-sm md:text-sm font-family-montserrat ">
                      hair oiling gets messy 😩
                    </p>
                  </div>

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
                          Top 1
                        </p>
                        <p className="text-black font-montserrat font-semibold text-xs">
                          £35.00
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
