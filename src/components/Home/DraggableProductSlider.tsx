import { useState, useRef } from "react";
import ProductCard from "@/components/product/ProductCard";

const DraggableProductSlider = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: 1,
      name: "Product One",
      price: "£35.00",
      image: "/assets/productThree.png",
      hoverImage: "/assets/productThree-hover.png",
    },
    {
      id: 2,
      name: "Product Two",
      price: "£45.00",
      image: "/assets/productTwo.png",
      hoverImage: "/assets/productTwo-hover.png",
    },
    {
      id: 3,
      name: "Product Three",
      price: "£55.00",
      image: "/assets/productThree.png",
      hoverImage: "/assets/productThree-hover.png",
    },
    {
      id: 4,
      name: "Product Four",
      price: "£65.00",
      image: "/assets/productFour.png",
      hoverImage: "/assets/productFour-hover.png",
    },
    {
      id: 5,
      name: "Product Five",
      price: "£75.00",
      image: "/assets/productOne.png",
      hoverImage: "/assets/productOne.png",
    },
    {
      id: 6,
      name: "Product Six",
      price: "£85.00",
      image: "/assets/productTwo.png",
      hoverImage: "/assets/productTwo-hover.png",
    },
  ];

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


  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
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
          {products.map((product) => (
            <div
              key={product.id}
              className="shrink-0 w-[280px] md:w-[320px]"
              onDragStart={(e) => e.preventDefault()}
            >
              <ProductCard
                id={product.id}
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
