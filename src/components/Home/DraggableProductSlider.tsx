import { useState, useRef, useEffect } from "react";
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
  collectionName: string;
}

const DraggableProductSlider = ({ collectionName }: ProductSliderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [shopifyProducts, setShopifyProducts] = useState<Product[]>([]);
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
      const productsData = await getProductsByCollection(collectionName, 10);

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

      setShopifyProducts(mappedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
      // Fallback to empty array or handle error as needed
      setShopifyProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductByCollection();
  }, [collectionName]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  if (loading) return <p>Loading products...</p>;
  if (!shopifyProducts.length) return <p>No products found.</p>;

  return (
    <section className="pb-5 pt-2 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1920px] mx-auto">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            userSelect: "none",
          }}
        >
          {shopifyProducts.map((product) => (
            <div
              key={product.id}
              className="shrink-0 w-[280px] md:w-[320px]"
              onDragStart={(e) => e.preventDefault()}
            >
              <ProductCard
                id={product.id.toString()}
                name={product.name}
                price={product.price}
                image={product.image}
                hoverImage={product.hoverImage}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 max-w-xs mx-auto h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-linear-to-r from-black from-50% to-gray-400 to-50% transition-all duration-300" />
        </div>
      </div>
    </section>
  );
};

export default DraggableProductSlider;
