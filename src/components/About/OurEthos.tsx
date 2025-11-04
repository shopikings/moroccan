const OurEthos = () => {
  const ethos = [
    {
      number: "01",
      image: "/assets/about/about-one.png",
      text: "TO CREATE MODEST FASHION THAT EMPOWERS, INSPIRES, AND ELEVATES WOMEN AROUND THE WORLD.",
      imagePosition: "right",
    },
    {
      number: "02",
      image: "/assets/about/about-two.png",
      text: "TO DESIGN TIMELESS PIECES THAT TRANSCEND TRENDS AND LIVE IN YOUR WARDROBE FOREVER.",
      imagePosition: "left",
    },
    {
      number: "03",
      image: "/assets/about/about-three.png",
      text: "TO CHAMPION SUSTAINABLE PRACTICES, CRAFTING QUALITY THAT HONORS OUR PLANET.",
      imagePosition: "right",
    },
    {
      number: "04",
      image: "/assets/about/about-four.png",
      text: "TO BUILD A COMMUNITY ROOTED IN FAITH, SELF-LOVE, AND EMPOWERMENT.",
      imagePosition: "left",
    },
    {
      number: "05",
      image: "/assets/about/about-five.png",
      text: "TO CREATE WITH PURPOSE, BECAUSE FASHION SHOULD BE MEANINGFUL, NOT DISPOSABLE.",
      imagePosition: "right",
    },
  ];

  return (
    <section className="py-5 bg-[#F7F6F0]">
      <div className=" w-full">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-trirong text-center mb-12 md:mb-16">
          OUR ETHOS
        </h2>

        <div className="space-y-0">
          {ethos.map((item) => (
            <div
              key={item.number}
              className="grid grid-cols-1 md:grid-cols-2 gap-0"
            >
              {item.imagePosition === "left" ? (
                <>
                  <div className="relative order-1 md:order-1">
                    <img
                      src={item.image}
                      alt={`Ethos ${item.number}`}
                      className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between items-start py-2 px-8 md:px-6 lg:px-10 bg-[#F7F6F0] order-2 md:order-2">
                    <h3 className="text-6xl md:text-6xl lg:text-7xl font-trirong">
                      {item.number}
                    </h3>
                    <p className="text-sm md:text-4xl pb-5 font-trirong uppercase tracking-wide">
                      {item.text}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col justify-between items-start py-2 px-8 md:px-6 lg:px-10 bg-[#F7F6F0] order-2 md:order-1">
                    <h3 className="text-6xl md:text-7xl lg:text-7xl font-trirong">
                      {item.number}
                    </h3>
                    <p className="text-sm md:text-3xl pb-5 font-trirong uppercase tracking-wide">
                      {item.text}
                    </p>
                  </div>
                  <div className="relative order-1 md:order-2">
                    <img
                      src={item.image}
                      alt={`Ethos ${item.number}`}
                      className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurEthos;
