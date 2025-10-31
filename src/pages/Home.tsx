import HeroBanner from "@/components/Home/HeroBanner";
import BrandMarquee from "@/components/Home/BrandMarquee";
import ProductSlider from "@/components/Home/ProductSlider";

const Home = () => {
  return (
    <div className="w-full">
      <HeroBanner />
      <BrandMarquee />
      <ProductSlider />
    </div>
  );
};

export default Home;
