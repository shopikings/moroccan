import { useState } from "react";
import { X } from "lucide-react";
import OurEthos from "@/components/About/OurEthos";
import FounderSection from "@/components/About/FounderSection";

const About = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="w-full">
      <div className="bg-[#F7F6F0]">
        <section className="pt-12 md:pt-16 lg:pt-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-sm md:text-2xl font-trirong text-center mb-12 tracking-widest">
              ABOUT MOROCCAN GLAM
            </h1>

            <div className="space-y-0 text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-trirong leading-relaxed">
                Welcome to Moroccan Glam, where modern elegance meets the rich
                spirit of Morocco. Born from a deep love for artistry and
                culture, our brand celebrates the timeless beauty, heritage, and
                craftsmanship of{" "}
                <span className="underline decoration-[#F4B32E] decoration-2">
                  Moroccan design
                </span>
                .
              </p>

              <p className="text-2xl md:text-3xl lg:text-4xl font-trirong leading-relaxed">
                Each piece in our collection is thoughtfully crafted using{" "}
                <span className="underline decoration-[#F4B32E] decoration-2">
                  premium fabrics
                </span>{" "}
                and exquisite detailing, blending tradition with contemporary
                style.
              </p>

              <p className="text-2xl md:text-3xl lg:text-4xl font-trirong leading-relaxed">
                Discover our curated selection of modern Moroccan wear and
                embrace the allure, sophistication, and soul of Moroccan Glam
              </p>

              <p className="text-2xl md:text-3xl lg:text-4xl font-trirong leading-relaxed">
                With{" "}
                <span className="underline decoration-[#F4B32E] decoration-2">
                  worldwide shipping
                </span>
                , we bring the magic of Moroccan elegance right to your
                doorstep, no matter where you are.
              </p>

              <p className="text-2xl md:text-3xl lg:text-4xl font-trirong leading-relaxed">
                Experience the beauty of Morocco, delivered globally with care
                and style.
              </p>

              <p className="text-base md:text-lg font-trirong mt-12 text-black">
                -Amal Chentouf, Moroccan Glam Founder and Owner
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="w-full pt-5 relative">
        <img
          src="/assets/about/banner.png"
          alt="About Banner"
          className="w-full h-auto object-cover"
        />

        <div
          className={`absolute -bottom-12 left-0 bg-[#F7F6F0] py-3 px-6 transition-transform duration-500 ${
            showBanner ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative">
            <button
              onClick={() => setShowBanner(false)}
              className="absolute -top-2 left-0 p-1 bg-white hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <h2 className="text-xs font-bold font-georgia pl-8">
              Unlock 15% off.
            </h2>
          </div>
        </div>
      </section>

      <OurEthos />
      <FounderSection />
    </div>
  );
};

export default About;
