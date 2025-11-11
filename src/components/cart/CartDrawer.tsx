import { X, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cart, updateQuantity, removeFromCart, getCartTotal, getCartCount } =
    useCart();
  const navigate = useNavigate();

  const subtotal = getCartTotal();
  const discount = 0;
  const total = subtotal - discount;

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

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
              Cart ({getCartCount()})
            </h2>
            <button
              onClick={onClose}
              className="absolute cursor-pointer right-4 p-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
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

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 mb-6 border-t border-black pt-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-32 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-fahkwang text-sm font-medium">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      {item.size && (
                        <p className="font-fahkwang text-xs text-gray-600">
                          Size: {item.size}
                        </p>
                      )}
                      {item.color && (
                        <p className="font-fahkwang text-xs text-gray-600 mb-2">
                          Color: {item.color}
                        </p>
                      )}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-[#5E5E5E] rounded-full px-3 py-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="text-[#5E5E5E] cursor-pointer hover:text-gray-900"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="mx-3 text-[#5E5E5E] font-montserrat text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="text-[#5E5E5E] cursor-pointer hover:text-gray-900"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="font-montserrat text-sm font-medium">
                          £{(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="p-4 border-t border-gray-300">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between font-montserrat text-sm">
                <span>Subtotal</span>
                <span>£{subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between font-fahkwang text-sm">
                  <span className="text-black">DISCOUNT</span>
                  <span className="text-gray-600">-£{discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-montserrat text-base font-semibold pt-2 border-t">
                <span>TOTAL</span>
                <span>£{total.toFixed(2)}</span>
              </div>
            </div>

            <Button
              onClick={handleCheckout}
              disabled={cart.length === 0}
              className={`w-full rounded-full font-montserrat ${
                cart.length === 0
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
