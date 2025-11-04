const SocialGallery = () => {
  const images = [
    "/assets/morrocanglam.png",
    "/assets/morrocanglam.png",
    "/assets/morrocanglam.png",
    "/assets/morrocanglam.png",
    "/assets/morrocanglam.png",
  ];

  return (
    <section className="pb-2 pt-4 md:pb-6 lg:pb-10 px-4 md:px-8 lg:px-16 bg-[#F7F6F0]">
      <div className="max-w-[1920px] mx-auto">
        <h2 className="text-4xl md:text-4xl font-trirong text-center mb-8 md:mb-12">
          #moroccanglam.official
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <img
              src={images[0]}
              alt="Instagram post"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <img
              src={images[1]}
              alt="Instagram post"
              className="w-full h-full object-cover rounded-lg"
            />
            <img
              src={images[2]}
              alt="Instagram post"
              className="w-full h-full object-cover rounded-lg"
            />
            <img
              src={images[3]}
              alt="Instagram post"
              className="w-full h-full object-cover rounded-lg"
            />
            <img
              src={images[4]}
              alt="Instagram post"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialGallery;
