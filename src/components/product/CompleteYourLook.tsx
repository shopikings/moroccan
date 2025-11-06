import { useState } from "react";

interface LookItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  price: string;
}

const CompleteYourLook = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const lookItems: LookItem[] = [
    {
      id: 1,
      image: "/assets/product/five.png",
      title: "Neck jewelry",
      subtitle: "Elegant Style",
      price: "£35",
    },
    {
      id: 2,
      image: "/assets/product/six.png",
      title: "Hand jewelry",
      subtitle: "Classic Design",
      price: "£25",
    },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-base font-family-montserrat mb-3">
        Complete your look
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {lookItems.map((item) => (
          <div
            key={item.id}
            className="relative cursor-pointer group"
            onMouseEnter={() => setHoveredCard(item.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative overflow-hidden border-2 border-[#979797]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-3/4 object-cover"
              />
              <div
                className={`absolute pt-2 bottom-0 left-0 right-0 rounded-t-2xl bg-[#F7F6F0] transition-all duration-300 ease-in-out ${
                  hoveredCard === item.id ? "h-36" : "h-24"
                }`}
              >
                <div className="p-4 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-base font-montserrat font-semibold">
                      {item.title}
                    </h3>
                    <span className="text-base font-montserrat font-semibold">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 font-montserrat mb-2">
                    {item.subtitle}
                  </p>
                  <button
                    className={`w-full bg-black text-white py-2 rounded-full font-montserrat text-sm transition-all duration-300 mt-auto ${
                      hoveredCard === item.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompleteYourLook;
