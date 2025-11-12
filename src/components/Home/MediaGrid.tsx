import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MediaGrid = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-background py-4 px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
        <div className="relative overflow-hidden bg-gray-100 h-full md:h-[700px] xl:h-[750px] 2xl:h-[850px]">
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
            <Button
              onClick={() => navigate("/shop?category=New")}
              className="bg-white font-family-fahkwang text-[#080912] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full relative overflow-hidden group/btn"
            >
              <span className="inline-block transition-all duration-500 group-hover/btn:translate-x-[200%] group-hover/btn:opacity-0">
                Shop New
              </span>
              <span className="absolute inset-0 flex items-center justify-center -translate-x-[200%] opacity-0 transition-all duration-500 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
                Shop New
              </span>
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden bg-gray-100 h-full md:h-[700px] xl:h-[750px] 2xl:h-[850px]">
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
            <Button
              onClick={() => navigate("/shop?category=Dresses")}
              className="bg-white font-family-fahkwang text-[#080912] hover:bg-gray-100 font-normal px-8 py-4 rounded-full relative overflow-hidden group/btn"
            >
              <span className="inline-block transition-all duration-500 group-hover/btn:translate-x-[200%] group-hover/btn:opacity-0">
                Shop Dresses
              </span>
              <span className="absolute inset-0 flex items-center justify-center -translate-x-[200%] opacity-0 transition-all duration-500 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
                Shop Dresses
              </span>
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden bg-gray-100 h-full md:h-[700px] xl:h-[750px] 2xl:h-[850px]">
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
            <Button
              onClick={() => navigate("/shop?category=Best-Seller")}
              className="bg-white text-[#080912] font-family-fahkwang hover:bg-gray-100 font-normal px-8 py-4 rounded-full relative overflow-hidden group/btn"
            >
              <span className="inline-block transition-all duration-500 group-hover/btn:translate-x-[200%] group-hover/btn:opacity-0">
                Shop Best Seller
              </span>
              <span className="absolute inset-0 flex items-center justify-center -translate-x-[200%] opacity-0 transition-all duration-500 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
                Shop Best Seller
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaGrid;
