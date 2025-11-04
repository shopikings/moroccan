import { useState } from "react";

const CategorySection = () => {
  const [activeCategory, setActiveCategory] = useState("Caftans");
  const categories = ["Caftans", "Jellabas", "Luxe", "Bridal"];

  return (
    <section className="py-5 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-wrap items-center justify-start gap-6 md:gap-8 lg:gap-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="group flex items-center gap-3 transition-all"
            >
              <div
                className={`w-12 h-12 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-black scale-100"
                    : "bg-transparent scale-0 group-hover:scale-100 group-hover:bg-black"
                }`}
              />
              <span
                className={`font-fahkwang text-[48px] transition-colors ${
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
