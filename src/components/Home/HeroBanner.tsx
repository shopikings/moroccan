import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[calc(100vh-110px)] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/home/banner.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="font-fahkwang text-5xl md:text-7xl font-normal text-white mb-6">
          The Flagship Store
        </h1>
        <p className="font-montserrat text-xs text-white mb-8 max-w-2xl">
          Join us for our soft launch and grand opening event
        </p>
        <Button
          size="lg"
          className="bg-[#FAF4F0] hover:bg-[#FAF4F0] text-black font-fahkwang font-semibold text-base px-8 py-6 rounded-full"
        >
          Discover the Store
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
