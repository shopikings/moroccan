import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VideoImageSection = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full ">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative">
          <img
            src="/assets/home/-starting.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute font-trirong bottom-10 left-10">
            <h3 className="text-white font-normal text-3xl md:text-4xl mb-2"></h3>
            <p className="text-white text-xl md:text-2xl mb-4">
              <span className="italic">Starting at</span> £5
            </p>
            <button
              onClick={() => navigate("/shop")}
              className="flex items-center cursor-pointer gap-2 text-white font-medium text-base hover:gap-3 transition-all"
            >
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/home/Look.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoImageSection;
