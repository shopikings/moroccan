import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterBar from "@/components/Shop/FilterBar";
import FilterDrawer from "@/components/Shop/FilterDrawer";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/product/ProductCard";
import Pagination from "@/components/Shop/Pagination";
import { useProducts } from "@/shopify/useProducts";
import type { ShopifyProduct } from "@/shopify/shopifyTypes";
import { useProdByCollection } from "@/shopify/useProdCollection";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const productsPerPage = 44;

  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  const [sortOption, setSortOption] = useState<string>("featured");

  useEffect(() => {
    setCurrentPage(1);
    setSelectedColors([]);
    setSelectedSizes([]);
    setInStockOnly(false);
  }, [category]);

  const { products, loading, error } = category
    ? useProdByCollection(category)
    : useProducts();

  const getCategoryTitle = () => {
    if (!category) return "Shop All";
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // const allProducts = [
  //   ...baseProducts,
  //   ...baseProducts.map((p) => ({ ...p, id: p.id + 8 })),
  //   ...baseProducts.map((p) => ({ ...p, id: p.id + 16 })),
  //   ...baseProducts.map((p) => ({ ...p, id: p.id + 24 })),
  //   ...baseProducts.map((p) => ({ ...p, id: p.id + 32 })),
  //   ...baseProducts.map((p) => ({ ...p, id: p.id + 40 })),
  //   ...baseProducts.map((p) => ({ ...p, id: p.id + 48 })),
  //   ...baseProducts.map((p) => ({ ...p, id: p.id + 56 })),
  //   ...baseProducts.map((p) => ({ ...p, id: p.id + 64 })),
  // ];

  const getProductPrice = (product: ShopifyProduct) => {
    if (!product?.variants?.edges?.length) return null;

    const firstVariant = product.variants.edges[0].node;
    const price = parseFloat(firstVariant.price.amount);
    const compareAt = firstVariant.compareAtPrice
      ? parseFloat(firstVariant.compareAtPrice.amount)
      : null;

    let salePercentage = 0;
    if (compareAt && compareAt > price) {
      salePercentage = Math.round(((compareAt - price) / compareAt) * 100);
    }

    return {
      price: price.toFixed(2),
      currency: firstVariant.price.currencyCode,
      salePercentage,
    };
  };

  const formattedProducts = products?.map((p) => {
    const priceInfo = getProductPrice(p);

    return {
      id: p.id,
      handle: p.handle,
      name: p.title,
      price: priceInfo ? `${priceInfo.price} ${priceInfo.currency}` : "",
      image: p.images?.edges?.[0]?.node?.src || "/fallback.jpg",
      hoverImage: p.images?.edges?.[1]?.node?.src ?? undefined,
      salePercentage: priceInfo?.salePercentage || 0,
      variants: p.variants?.edges.map((v: any) => {
        const node = v.node;
        return {
          id: node.id,
          title: node.title ?? "", // add a default title if missing
          price: node.price.amount,
          compareAtPrice: node.compareAtPrice?.amount,
          selectedOptions: node.selectedOptions ?? [], // ensure it's always defined
          availableForSale: node.availableForSale ?? false,
        };
      }),
      createdAt: p.createdAt,
    };
  });

  const allColors = Array.from(
    new Set(
      formattedProducts
        ?.flatMap((p) =>
          p.variants?.map((v: any) => {
            const colorOpt = v.selectedOptions?.find(
              (o: any) => o.name.toLowerCase() === "color"
            );
            return colorOpt?.value ?? ""; // default to empty string
          })
        )
        .filter(Boolean)
    )
  );

  const allSizes = Array.from(
    new Set(
      formattedProducts
        ?.flatMap((p) =>
          p.variants?.map((v: any) => {
            const sizeOpt = v.selectedOptions?.find(
              (o: any) => o.name.toLowerCase() === "size"
            );
            return sizeOpt?.value ?? ""; // default to empty string
          })
        )
        .filter(Boolean)
    )
  );

  const filteredProducts = formattedProducts?.filter((product) => {
    const matchesColor =
      selectedColors.length === 0 ||
      product.variants.some((v: any) =>
        selectedColors.includes(
          v.selectedOptions?.find((o: any) => o.name.toLowerCase() === "color")
            ?.value ?? ""
        )
      );

    const matchesSize =
      selectedSizes.length === 0 ||
      product.variants.some((v: any) =>
        selectedSizes.includes(
          v.selectedOptions?.find((o: any) => o.name.toLowerCase() === "size")
            ?.value ?? ""
        )
      );

    const matchesStock =
      !inStockOnly || product.variants.some((v: any) => v.availableForSale); // make sure your Shopify variant has `availableForSale`

    return matchesColor && matchesSize && matchesStock;
  });

  const sortedProducts = filteredProducts?.slice().sort((a, b) => {
    switch (sortOption) {
      case "price-low-high":
        return parseFloat(a.price) - parseFloat(b.price);
      case "price-high-low":
        return parseFloat(b.price) - parseFloat(a.price);
      case "a-z":
        return a.name.localeCompare(b.name);
      case "z-a":
        return b.name.localeCompare(a.name);
      case "date-new-old":
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "date-old-new":
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      default:
        return 0; // featured or default
    }
  });

  const totalPages = Math.ceil((sortedProducts?.length ?? 0) / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = sortedProducts?.slice(startIndex, endIndex);

  if (loading) {
    return <div className="h-screen text-center">Loading...</div>;
  } else if (error) {
    return <div className="h-screen text-center">{error}</div>;
  }

  return (
    <div className="w-full">
      <div className="bg-[#F7F6F0] min-h-screen">
        <section className="pt-12 md:pt-16 lg:pt-20">
          <div className="px-4 md:px-8 lg:px-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-fahkwang text-center mb-12">
              {getCategoryTitle()}
            </h1>
          </div>

          <Separator className="bg-gray-300" />

          <div className="px-4 md:px-5">
            <FilterBar
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              onFilterClick={() => setIsFilterOpen(true)}
              productCount={filteredProducts.length}
            />
          </div>

          {/* <FilterDrawer
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          /> */}
          <FilterDrawer
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
            selectedSizes={selectedSizes}
            setSelectedSizes={setSelectedSizes}
            inStockOnly={inStockOnly}
            setInStockOnly={setInStockOnly}
            allColors={allColors}
            allSizes={allSizes}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />

          <div className="">
            <div className="py-12">
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                  {currentProducts.map((product) => (
                    // <ProductCard key={product.id} {...product} />
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      handle={product.handle}
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      hoverImage={product.hoverImage}
                      salePercentage={product.salePercentage}
                      variants={product.variants}
                    />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-1">
                  {currentProducts.map((product) => (
                    <div
                      key={product.id}
                      className="relative group cursor-pointer overflow-hidden"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto object-cover"
                      />
                      <img
                        src={product.hoverImage}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                  ))}
                </div>
              )}
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
