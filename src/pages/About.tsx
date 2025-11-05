import { useState } from "react";
import { X } from "lucide-react";
import OurEthos from "@/components/About/OurEthos";
import FounderSection from "@/components/About/FounderSection";
import ProductSlider from "@/components/Home/ProductSlider";
import FeaturesSection from "@/components/Home/FeaturesSection";
import SocialGallery from "@/components/Home/SocialGallery";

const About = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [hoveredTooltip, setHoveredTooltip] = useState<string | null>(null);

  const tooltipContent = {
    "moroccan-design": {
      title: "Moroccan design",
      description:
        "At Moroccan Glam, we celebrate the timeless beauty and artistry of Moroccan clothing and design. Every piece we create is a tribute to Morocco’s rich heritage, a fusion of tradition, craftsmanship, and modern elegance. Our garments are inspired by the vibrant colors, intricate patterns, and luxurious fabrics that define Moroccan culture. From the majestic kaftans and djellabas to contemporary silhouettes infused with Moroccan spirit, each design reflects the soul of our homeland, bold, elegant, and full of life.",
    },
    "premium-fabrics": {
      title: "premium fabrics",
      description:
        "We believe that true elegance begins with exceptional quality. Every piece in our collection is crafted from premium fabrics carefully selected for their softness, durability, and luxurious feel. From rich silks and fine cottons to handwoven linens and intricate embroidery, our materials reflect the essence of Moroccan craftsmanship, where beauty meets authenticity. Each fabric tells a story of tradition and artistry, brought to life by skilled hands that honor centuries of Moroccan textile heritage.",
    },
    "worldwide-shipping": {
      title: "worldwide shipping",
      description:
        "No matter where you are, the elegance of Morocco is just a click away. At Moroccan Glam, we proudly offer worldwide shipping, bringing our handcrafted Moroccan clothing straight to your doorstep. Each order is carefully packaged with love and attention, ensuring your garments arrive in perfect condition, ready to be worn and admired. Whether you’re in Europe, the Middle East, America, or beyond, you can experience the beauty, craftsmanship, and soul of Moroccan fashion without boundaries. With reliable international delivery and secure tracking, we make it easy for you to enjoy authentic Moroccan design, delivered worldwide.",
    },
  };

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
                <span
                  className="underline decoration-[#F4B32E] decoration-2 relative cursor-pointer"
                  onMouseEnter={() => setHoveredTooltip("moroccan-design")}
                  onMouseLeave={() => setHoveredTooltip(null)}
                >
                  Moroccan design
                  {hoveredTooltip === "moroccan-design" && (
                    <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[400px] max-w-[90vw] bg-[#F7F6F0] border-2 border-black rounded-lg p-4 shadow-lg z-50 text-left">
                      <span className="block text-center text-xl font-bold mb-2 text-black">
                        {tooltipContent["moroccan-design"].title}
                      </span>
                      <span className="block text-center text-sm font-normal text-gray-700 leading-relaxed">
                        {tooltipContent["moroccan-design"].description}
                      </span>
                    </span>
                  )}
                </span>
                .
              </p>

              <p className="text-2xl md:text-3xl lg:text-4xl font-trirong leading-relaxed">
                Each piece in our collection is thoughtfully crafted using{" "}
                <span
                  className="underline decoration-[#F4B32E] decoration-2 relative cursor-pointer"
                  onMouseEnter={() => setHoveredTooltip("premium-fabrics")}
                  onMouseLeave={() => setHoveredTooltip(null)}
                >
                  premium fabrics
                  {hoveredTooltip === "premium-fabrics" && (
                    <span className="absolute left-1/2 -translate-x-1/2 top-full bg-[#F7F6F0] mt-2 w-[400px] max-w-[90vw] border-2 border-black rounded-lg p-4 shadow-lg z-50 text-left">
                      <span className="block text-center text-xl font-bold mb-2 text-black">
                        {tooltipContent["premium-fabrics"].title}
                      </span>
                      <span className="block text-center text-sm font-normal text-gray-700 leading-relaxed">
                        {tooltipContent["premium-fabrics"].description}
                      </span>
                    </span>
                  )}
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
                <span
                  className="underline decoration-[#F4B32E] decoration-2 relative cursor-pointer"
                  onMouseEnter={() => setHoveredTooltip("worldwide-shipping")}
                  onMouseLeave={() => setHoveredTooltip(null)}
                >
                  worldwide shipping
                  {hoveredTooltip === "worldwide-shipping" && (
                    <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[400px] max-w-[90vw] bg-[#F7F6F0] border-2 border-black rounded-lg p-4 shadow-lg z-50 text-left">
                      <span className="block text-center text-xl font-bold mb-2 text-black">
                        {tooltipContent["worldwide-shipping"].title}
                      </span>
                      <span className="block text-sm font-normal text-gray-700 leading-relaxed">
                        {tooltipContent["worldwide-shipping"].description}
                      </span>
                    </span>
                  )}
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
      <div className="px-10 pb-5 pt-12 mx-auto">
        <ProductSlider title={"Our Recommendations"} />
      </div>
      <FeaturesSection />
      <SocialGallery />
    </div>
  );
};

export default About;
