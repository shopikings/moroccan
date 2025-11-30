import { useCollectionsLite } from "@/shopify/useCollectionsLite";
import { useState } from "react";

interface CategorySectionProps {
  onCategorySelect: (category: string) => void;
}

const CategorySection = ({ onCategorySelect }: CategorySectionProps) => {
  const { data: collections, isLoading } = useCollectionsLite();
  const [activeCategory, setActiveCategory] = useState("caftan");

  if (isLoading) return <p>Loading...</p>;

  const filteredCollections = collections.filter((c: any) =>
    ["caftan", "jellabas", "bridal", "luxe"].includes(c.handle)
  );

  const handleClick = (category: string) => {
    setActiveCategory(category);
    onCategorySelect(category); // pass selected category to parent
  };

  return (
    <section className="pb-0 pt-2 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex md:flex-wrap items-center justify-start gap-3 md:gap-5 lg:gap-10 overflow-x-auto md:overflow-x-visible scrollbar-hide">
          {filteredCollections.map((category: any) => (
            <button
              key={category}
              onClick={() => handleClick(category.handle)}
              className="group flex items-center gap-3 transition-all shrink-0"
            >
              <div
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full transition-all duration-300 ${
                  activeCategory === category.handle
                    ? "bg-black scale-100"
                    : "bg-transparent scale-0 group-hover:scale-100 group-hover:bg-black"
                }`}
              />
              <span
                className={`font-fahkwang text-[32px] md:text-[42px] transition-colors whitespace-nowrap ${
                  activeCategory === category.handle
                    ? "text-black font-semibold"
                    : "text-gray-400 group-hover:text-black"
                }`}
              >
                {category.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
