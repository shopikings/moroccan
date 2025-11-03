const CategorySection = () => {
  const categories = [
    { name: "Caftans", svg: "/assets/home/caftans.svg" },
    { name: "Jellabas", svg: "/assets/home/jellabas.svg" },
    { name: "Luxe", svg: "/assets/home/luxe.svg" },
    { name: "Brida", svg: "/assets/home/brida.svg" },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-wrap items-start justify-start gap-6 md:gap-8 lg:gap-12">
          {categories.map((category) => (
            <div key={category.name} className="shrink-0">
              <img
                src={category.svg}
                alt={category.name}
                className="h-10 md:h-16 lg:h-20 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
