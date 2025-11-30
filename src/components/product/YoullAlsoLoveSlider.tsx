import { useState, useRef, useEffect } from "react";
import ProductCard from "@/components/product/ProductCard";
import { getProductsByCollection } from "@/shopify/useProductsByCollection";

const YoullAlsoLoveSlider = () => {
  const [items, setItems] = useState<any[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

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
    const products = await getProductsByCollection("bridal", 10);

    const mapped = products.map((p: any) => {
      const priceInfo = getProductPrice(p);

      return {
        id: p.id,
        handle: p.handle,
        name: p.title,
        price: priceInfo ? `${priceInfo.price}` : "£0.00", // Match the format from Shop page
        image: p.featuredImage,
        hoverImage: p.images?.[1] || p.featuredImage,
        salePercentage: priceInfo?.salePercentage || 0,
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

    console.log("Mapped products:", mapped);
    setItems(mapped);
  };

  useEffect(() => {
    fetchProductByCollection();
  }, []);

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

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  return (
    <section className="pb-5 pt-8 -mx-4 md:-mx-6 lg:-mx-8">
      <h2 className="text-5xl font-fahkwang mb-6 px-4 md:px-6 lg:px-8">
        You'll Also Love
      </h2>

      <div
        ref={sliderRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((product) => (
          <div
            key={product.id}
            className="shrink-0 w-[280px] md:w-[320px]"
            onDragStart={(e) => e.preventDefault()}
          >
            <ProductCard
              id={product.id}
              handle={product.handle}
              name={product.name}
              price={product.price}
              image={product.image}
              hoverImage={product.hoverImage}
              salePercentage={product.salePercentage}
              variants={product.variants}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default YoullAlsoLoveSlider;
