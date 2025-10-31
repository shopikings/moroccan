const BrandMarquee = () => {
  const brands = [
    "/assets/icons/al-arabi.svg",
    "/assets/icons/al-jamila.svg",
    "/assets/icons/al-jarolla.svg",
    "/assets/icons/al-majalla.svg",
    "/assets/icons/al-yamamah.svg",
    "/assets/icons/jummah.svg",
    "/assets/icons/nadine.svg",
    "/assets/icons/women-emriates.svg",
  ];

  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="w-full bg-white py-12 overflow-hidden">
      <div className="flex gap-16 animate-marquee">
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`brand-${index}`}
            className="flex items-center justify-center flex-shrink-0"
          >
            <img
              src={brand}
              alt={`Brand ${index + 1}`}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandMarquee;
