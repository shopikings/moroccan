import HeroBanner from "@/components/Home/HeroBanner";
import BrandMarquee from "@/components/Home/BrandMarquee";
import ProductSlider from "@/components/Home/ProductSlider";
import MediaGrid from "@/components/Home/MediaGrid";
import TrendingNow from "@/components/Home/TrendingNow";
import VideoImageSection from "@/components/Home/VideoImageSection";
import CategorySection from "@/components/Home/CategorySection";
import DraggableProductSlider from "@/components/Home/DraggableProductSlider";

const Home = () => {
  return (
    <div className="w-full">
      <HeroBanner />
      <BrandMarquee />
      <ProductSlider />
      <MediaGrid />
      <TrendingNow />
      <VideoImageSection />
      <CategorySection />
      <DraggableProductSlider />
    </div>
  );
};

export default Home;
