import { useState } from "react";
import FilterBar from "@/components/Shop/FilterBar";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/product/ProductCard";
import Pagination from "@/components/Shop/Pagination";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 44;
  const baseProducts = [
    {
      id: 1,
      name: "Ombre Modal Hijab - Baltic Amber",
      price: "£40.0 GBP",
      image: "/assets/shop/productOne.png",
      hoverImage: "/assets/shop/productOne-hover.png",
      salePercentage: 65,
    },
    {
      id: 2,
      name: "Ombre Modal Hijab - Ocean Blue",
      price: "£40.0 GBP",
      image: "/assets/shop/productTwo.png",
      hoverImage: "/assets/shop/productTwo-hover.png",
      salePercentage: 50,
    },
    {
      id: 3,
      name: "Ombre Modal Hijab - Forest Green",
      price: "£40.0 GBP",
      image: "/assets/shop/productThree.png",
      hoverImage: "/assets/shop/productThree-hover.png",
      salePercentage: 30,
    },
    {
      id: 4,
      name: "Ombre Modal Hijab - Sunset Orange",
      price: "£40.0 GBP",
      image: "/assets/shop/productFour.png",
      hoverImage: "/assets/shop/productFour-hover.png",
      salePercentage: 45,
    },
    {
      id: 5,
      name: "Ombre Modal Hijab - Rose Pink",
      price: "£40.0 GBP",
      image: "/assets/shop/productOne.png",
      hoverImage: "/assets/shop/productOne-hover.png",
      salePercentage: 40,
    },
    {
      id: 6,
      name: "Ombre Modal Hijab - Lavender",
      price: "£40.0 GBP",
      image: "/assets/shop/productTwo.png",
      hoverImage: "/assets/shop/productTwo-hover.png",
      salePercentage: 55,
    },
    {
      id: 7,
      name: "Ombre Modal Hijab - Mint Green",
      price: "£40.0 GBP",
      image: "/assets/shop/productThree.png",
      hoverImage: "/assets/shop/productThree-hover.png",
      salePercentage: 35,
    },
    {
      id: 8,
      name: "Ombre Modal Hijab - Coral",
      price: "£40.0 GBP",
      image: "/assets/shop/productFour.png",
      hoverImage: "/assets/shop/productFour-hover.png",
      salePercentage: 60,
    },
  ];

  const allProducts = [
    ...baseProducts,
    ...baseProducts.map((p) => ({ ...p, id: p.id + 8 })),
    ...baseProducts.map((p) => ({ ...p, id: p.id + 16 })),
    ...baseProducts.map((p) => ({ ...p, id: p.id + 24 })),
    ...baseProducts.map((p) => ({ ...p, id: p.id + 32 })),
    ...baseProducts.map((p) => ({ ...p, id: p.id + 40 })),
    ...baseProducts.map((p) => ({ ...p, id: p.id + 48 })),
    ...baseProducts.map((p) => ({ ...p, id: p.id + 56 })),
    ...baseProducts.map((p) => ({ ...p, id: p.id + 64 })),
  ];

  const totalPages = Math.ceil(allProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = allProducts.slice(startIndex, endIndex);

  return (
    <div className="w-full">
      <div className="bg-[#F7F6F0] min-h-screen">
        <section className="pt-12 md:pt-16 lg:pt-20">
          <div className="px-4 md:px-8 lg:px-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-fahkwang text-center mb-12">
              Shop All
            </h1>
          </div>

          <Separator className="bg-gray-300" />

          <div className="px-4 md:px-5">
            <FilterBar />
          </div>

          <div className="">
            <div className="py-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Shop;
