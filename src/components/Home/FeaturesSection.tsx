const FeaturesSection = () => {
  const features = [
    {
      icon: "/assets/icons/shipping.svg",
      title: "FREE SHIPPING",
      description: "Fast & Free Shipping in UK on orders above £100",
    },
    {
      icon: "/assets/icons/return.svg",
      title: "28 DAY RETURNS",
      description: "Easy returns & exchanges",
    },
    {
      icon: "/assets/icons/star.svg",
      title: "5-STAR CARE",
      description: "We're here for you anytime, ",
      email: "hello@moroccanglam.com",
    },
    {
      icon: "/assets/icons/feel-good.svg",
      title: "FEEL GOOD",
      description:
        "Sustainable purchases mean you're doing good for you, us, and the planet.",
    },
  ];

  const renderDescription = (feature: (typeof features)[0]) => {
    if (feature.email) {
      return (
        <>
          {feature.description}
          <a
            href={`mailto:${feature.email}`}
            className="underline hover:no-underline cursor-pointer"
          >
            {feature.email}
          </a>
        </>
      );
    }
    return feature.description;
  };

  return (
    <section className="py-8 bg-[#F7F6F0]">
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center py-8 px-4 ${
                index === 0
                  ? "border-t border-b border-[#DEDDD8]"
                  : index === 1
                  ? "border-t border-b border-l border-[#DEDDD8]"
                  : index === 2
                  ? "border border-[#DEDDD8]"
                  : "border-t border-b border-[#DEDDD8]"
              }`}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-8 h-8 mb-4"
              />
              <h3 className="font-fahkwang font-semibold text-base mb-2 tracking-wider">
                {feature.title}
              </h3>
              <p className="font-fahkwang text-xs text-gray-600 leading-relaxed">
                {renderDescription(feature)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
