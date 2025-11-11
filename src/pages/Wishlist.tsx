import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const totalPrice = wishlist.reduce((sum, item) => sum + item.price, 0);

  const handleRemoveFromWishlist = (id: string) => {
    removeFromWishlist(id);
  };

  const handleAddToCart = (item: (typeof wishlist)[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      color: item.color,
    });
  };

  const handleAddAllToCart = () => {
    wishlist.forEach((item) => {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        color: item.color,
      });
    });
  };

  return (
    <div className="w-full bg-background min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-family-trirong text-center mb-12">
          Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-gray-600 font-montserrat text-lg mb-8">
              Seems you have no items on your wishlist yet!
            </p>
            <Link
              to="/shop"
              className="px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors font-montserrat text-sm uppercase"
            >
              continue shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-md p-4 flex flex-col items-center"
                >
                  <div className="w-full mb-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-[350px] object-cover rounded-md"
                    />
                  </div>

                  <div className="w-full text-start space-y-2">
                    <h3 className="font-montserrat text-base font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-start font-montserrat text-base">
                      - {item.color}
                    </p>

                    <div className="flex justify-center">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="w-[80%] py-3 bg-black text-white border-2 border-black hover:bg-transparent hover:text-black transition-colors font-montserrat text-sm rounded-md"
                      >
                        add - £{item.price}
                      </button>
                    </div>

                    <div className="flex justify-center">
                      <button
                        onClick={() => handleRemoveFromWishlist(item.id)}
                        className="text-gray-500 hover:text-gray-700 font-montserrat text-sm underline"
                      >
                        remove from wishlist
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              <button
                onClick={handleAddAllToCart}
                className="w-full py-4 bg-black text-white border-2 border-black hover:bg-transparent hover:text-black transition-colors font-montserrat text-base rounded-md"
              >
                add to cart all items - £{totalPrice}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
