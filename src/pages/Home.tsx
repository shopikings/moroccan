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
  const [selectedCategory, setSelectedCategory] = useState("caftan");

  useEffect(() => {
    // Check if user has previously closed the newsletter
    const hasClosedNewsletter = localStorage.getItem("newsletterClosed");

    if (!hasClosedNewsletter) {
      // Only show newsletter if user hasn't closed it before
      const timer = setTimeout(() => {
        setIsNewsletterOpen(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseNewsletter = () => {
    setIsNewsletterOpen(false);
    // Save to localStorage when user closes the modal
    localStorage.setItem("newsletterClosed", "true");
  };

  const features = [
    {
      icon: "/assets/icons/shipping.svg",
      title: "FREE SHIPPING",
      description: "Fast & Free Shipping in UK on orders above £100",
    },
    {
      icon: "/assets/icons/return.svg",
      title: "28 DAY RETURNS",
      description: "Easy returns & exchanges",
    },
    {
      icon: "/assets/icons/star.svg",
      title: "5-STAR CARE",
      description: "We're here for you anytime, ",
      email: "hello@moroccanglam.com",
    },
    {
      icon: "/assets/icons/feel-good.svg",
      title: "FEEL GOOD",
      description:
        "Sustainable purchases mean you're doing good for you, us, and the planet.",
    },
  ];
  return (
    <div className="w-full">
      <HeroBanner />
      <BrandMarquee />
      <ProductSlider collectionName="featured" />
      <MediaGrid />
      <TrendingNow />
      <VideoImageSection />
      <CategorySection onCategorySelect={setSelectedCategory} />
      <DraggableProductSlider collectionName={selectedCategory} />
      <FeaturesSection features={features} />
      <SocialGallery />
      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={handleCloseNewsletter}
      />
    </div>
  );
};

export default Home;
