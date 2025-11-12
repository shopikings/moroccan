import { useState } from "react";

const CategorySection = () => {
  const [activeCategory, setActiveCategory] = useState("Caftans");
  const categories = ["Caftans", "Jellabas", "Luxe", "Bridal"];

  return (
    <section className="pb-0 pt-2 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex md:flex-wrap items-center justify-start gap-3 md:gap-5 lg:gap-10 overflow-x-auto md:overflow-x-visible scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="group flex items-center gap-3 transition-all shrink-0"
            >
              <div
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-black scale-100"
                    : "bg-transparent scale-0 group-hover:scale-100 group-hover:bg-black"
                }`}
              />
              <span
                className={`font-fahkwang text-[32px] md:text-[42px] transition-colors whitespace-nowrap ${
                  activeCategory === category
                    ? "text-black font-semibold"
                    : "text-gray-400 group-hover:text-black"
                }`}
              >
                {category}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
