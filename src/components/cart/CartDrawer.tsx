import { X, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CartItem {
  id: number;
  name: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const cartItems: CartItem[] = [];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = 400;
  const total = subtotal - discount;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[#F7F6F0] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center p-4 border-b border-gray-300 relative">
            <h2 className="font-fahkwang text-xl font-semibold">
              Cart ({cartItems.length})
            </h2>
            <button
              onClick={onClose}
              className="absolute cursor-pointer right-4 p-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <p className="font-fahkwang text-lg text-gray-600">
                  No items in cart
                </p>
              </div>
            ) : (
              <>
                <p className="font-fahkwang text-sm text-gray-600 mb-4">
                  You Are Eligible For Free Shipping.
                </p>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 mb-6 border-t border-black pt-4"
                  >
                    <img
                      src={item?.image}
                      alt={item.name}
                      className="w-24 h-32 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-fahkwang text-sm font-medium mb-1">
                        {item.name}
                      </h3>
                      <p className="font-fahkwang text-sm mb-3">{item.size}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-[#5E5E5E] rounded-full px-4 py-2">
                          <button className="text-[#5E5E5E] cursor-pointer hover:text-gray-900">
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="mx-4 text-[#5E5E5E] font-montserrat text-sm">
                            {item.quantity}
                          </span>
                          <button className="text-[#5E5E5E] cursor-pointer hover:text-gray-900">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="font-montserrat text-sm font-medium">
                      {item.price} £
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="p-4">
            <button className="w-full text-center font-fahkwang text-sm font-medium py-3 border-t border-gray-300 mb-4">
              Estimate shipping
            </button>

            {cartItems.length > 0 ? (
              <>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between font-fahkwang text-sm">
                    <span className="text-black">SOFT LAUNCH</span>
                    <span className="text-gray-600">-{discount} £</span>
                  </div>
                  <div className="flex justify-between font-montserrat text-base font-semibold">
                    <span>TOTAL</span>
                    <span>{total} £</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 rounded-full border-2 border-black bg-transparent hover:bg-gray-100 font-montserrat"
                  >
                    View Card
                  </Button>
                  <Button className="flex-1 rounded-full bg-black text-white hover:bg-gray-800 font-montserrat">
                    Checkout
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between font-fahkwang text-sm">
                    <span className="text-black">SOFT LAUNCH</span>
                    <span className="text-gray-600">0 £</span>
                  </div>
                  <div className="flex justify-between font-montserrat text-base font-semibold">
                    <span>TOTAL</span>
                    <span>0 £</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 rounded-full border-2 border-black bg-transparent hover:bg-gray-100 font-montserrat"
                  >
                    View Card
                  </Button>
                  <Button
                    disabled
                    className="flex-1 rounded-full bg-gray-400 text-white cursor-not-allowed font-montserrat"
                  >
                    Checkout
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
