import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { getProductsByCollection } from "@/shopify/useProductsByCollection";

interface Product {
  id: string;
  handle: string;
  name: string;
  price: string;
  image: string;
  hoverImage: string;
  badge?: string;
  salePercentage: number;
  variants: Array<{
    id: string;
    title: string;
    price: string;
    compareAtPrice?: string;
    selectedOptions: { name: string; value: string }[];
  }>;
}

interface ProductSliderProps {
  title?: string;
  collectionName: string;
}

const ProductSlider = ({ title, collectionName }: ProductSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const getProductPrice = (product: any) => {
    if (!product?.variants?.length) return null;

    const firstVariant = product.variants[0];
    const price = parseFloat(
      firstVariant.price?.amount || firstVariant.price || "0"
    );
    const compareAt = firstVariant.compareAtPrice
      ? parseFloat(
          firstVariant.compareAtPrice?.amount ||
            firstVariant.compareAtPrice ||
            "0"
        )
      : null;

    let salePercentage = 0;
    if (compareAt && compareAt > price) {
      salePercentage = Math.round(((compareAt - price) / compareAt) * 100);
    }

    return {
      price: price.toFixed(2),
      salePercentage,
    };
  };

  const fetchProductByCollection = async () => {
    try {
      setLoading(true);
      const productsData = await getProductsByCollection(collectionName, 4);

      const mappedProducts = productsData.map((p: any) => {
        const priceInfo = getProductPrice(p);

        return {
          id: p.id,
          handle: p.handle,
          name: p.title,
          price: priceInfo ? `${priceInfo.price}` : "£0.00",
          image: p.featuredImage,
          hoverImage: p.images?.[1] || p.featuredImage,
          salePercentage: priceInfo?.salePercentage || 0,
          badge: p.availableForSale === false ? "SOLD OUT" : undefined,
          variants:
            p.variants?.map((v: any) => ({
              id: v.id,
              title: v.title || "",
              price: v.price?.amount || v.price || "0",
              compareAtPrice:
                v.compareAtPrice?.amount || v.compareAtPrice || null,
              selectedOptions: v.selectedOptions || [],
              availableForSale: v.availableForSale || false,
            })) || [],
        };
      });

      setProducts(mappedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
      // Fallback to empty array or handle error as needed
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductByCollection();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }

    if (touchStart - touchEnd < -75) {
      handlePrev();
    }
  };

  const maxIndex = Math.max(0, products.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Show loading state or empty state
  if (loading) {
    return (
      <div className="w-full bg-background p-0">
        {title && (
          <h1 className="text-4xl pb-5 font-medium font-family-trirong">
            {title}
          </h1>
        )}
        <div className="flex justify-center items-center h-64">
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="w-full bg-background p-0">
        {title && (
          <h1 className="text-4xl pb-5 font-medium font-family-trirong">
            {title}
          </h1>
        )}
        <div className="flex justify-center items-center h-64">
          <p>No products found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-background p-0">
      {title && (
        <h1 className="text-4xl pb-5 font-medium font-family-trirong">
          {title}
        </h1>
      )}
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-[25.333%]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[600px] object-cover"
          >
            <source src="/assets/home/home-slider.mp4" type="video/mp4" />
          </video>
        </div>

        <div
          className="flex-1 relative w-full md:w-[66.666%]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className={`absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 z-10 p-2 border border-gray-300 rounded-full bg-white hover:bg-black transition-all duration-300 group ${
                isHovered ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <ArrowLeft className="w-5 h-5 text-black group-hover:text-white transition-colors" />
            </button>
          )}

          {currentIndex < maxIndex && (
            <button
              onClick={handleNext}
              className={`absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 z-10 p-2 border border-gray-300 rounded-full bg-white hover:bg-black transition-all duration-300 group ${
                isHovered ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <ArrowRight className="w-5 h-5 text-black group-hover:text-white transition-colors" />
            </button>
          )}

          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  style={{ minWidth: `${100 / itemsPerView}%` }}
                  className="px-0"
                >
                  <ProductCard {...product} id={product.id} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 mb-6 w-full max-w-xs mx-auto md:hidden">
        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-black transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / products.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
