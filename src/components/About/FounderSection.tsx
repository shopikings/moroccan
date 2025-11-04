const FounderSection = () => {
  return (
    <section className="bg-[#F7F6F0]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="flex flex-col justify-start items-start p-8 md:p-12 lg:p-16 bg-[#F7F6F0] order-2 md:order-1">
          <p className="text-2xl md:text-3xl lg:text-5xl pt-[35%] font-trirong text-center">
            Moroccan Glam was founded in London by Amal Chentouf in 2019 and is
            now offering worldwide shipping.
          </p>
        </div>
        <div className="relative order-1 md:order-2">
          <img
            src="/assets/about/about-founded.png"
            alt="Moroccan Glam Founder"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
