import { useState, useEffect } from "react";
import HeroBanner from "@/components/Home/HeroBanner";
import BrandMarquee from "@/components/Home/BrandMarquee";
import ProductSlider from "@/components/Home/ProductSlider";
import MediaGrid from "@/components/Home/MediaGrid";
import TrendingNow from "@/components/Home/TrendingNow";
import VideoImageSection from "@/components/Home/VideoImageSection";
import CategorySection from "@/components/Home/CategorySection";
import DraggableProductSlider from "@/components/Home/DraggableProductSlider";
import FeaturesSection from "@/components/Home/FeaturesSection";
import SocialGallery from "@/components/Home/SocialGallery";
import NewsletterModal from "@/components/common/NewsletterModal";

const Home = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNewsletterOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

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
      <FeaturesSection />
      <SocialGallery />
      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />
    </div>
  );
};

export default Home;
