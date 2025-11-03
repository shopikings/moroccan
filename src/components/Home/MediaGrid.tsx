import { Button } from "@/components/ui/button";

const MediaGrid = () => {
  return (
    <div className="w-full bg-background py-6 md:py-12 px-4 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
        <div className="relative overflow-hidden bg-gray-100 h-[400px] sm:h-[500px] md:h-[700px]">
          <img
            src="/assets/home/new.png"
            alt="Collection 1"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-12 left-6">
            <h2 className="font-fahkwang text-white [writing-mode:vertical-lr] rotate-180 text-4xl md:text-6xl font-medium">
              New
            </h2>
          </div>
          <div className="absolute bottom-8 left-5">
            <Button className="bg-white font-family-fahkwang text-[#080912] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full">
              Choose Options
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden bg-gray-100 h-[400px] sm:h-[500px] md:h-[700px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/home/dresses.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-12 left-6">
            <h2 className="font-fahkwang text-white [writing-mode:vertical-lr] rotate-180 text-4xl md:text-6xl font-medium">
              Dresses
            </h2>
          </div>
          <div className="absolute bottom-8 left-5">
            <Button className="bg-white font-family-fahkwang text-[#080912] hover:bg-gray-100 font-normal px-8 py-4 rounded-full">
              Shop Dresses
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden bg-gray-100 h-[400px] sm:h-[500px] md:h-[700px]">
          <img
            src="/assets/home/best-seller.png"
            alt="Collection 2"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-12 left-6">
            <h2 className="font-fahkwang text-white [writing-mode:vertical-lr] rotate-180 text-4xl md:text-6xl font-medium">
              Best Seller
            </h2>
          </div>
          <div className="absolute bottom-8 left-5">
            <Button className="bg-white text-[#080912] font-family-fahkwang hover:bg-gray-100 font-normal px-8 py-4 rounded-full">
              Shop New
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaGrid;
