import { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutHeader from "@/components/Checkout/CheckoutHeader";
import ExpressCheckout from "@/components/Checkout/ExpressCheckout";
import ContactSection from "@/components/Checkout/ContactSection";
import DeliverySection from "@/components/Checkout/DeliverySection";
import ShippingMethod from "@/components/Checkout/ShippingMethod";
import PaymentSection from "@/components/Checkout/PaymentSection";
import RememberMeSection from "@/components/Checkout/RememberMeSection";
import OrderSummary from "@/components/Checkout/OrderSummary";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

interface CartItem {
  id: number;
  name: string;
  shade: string;
  price: number;
  quantity: number;
  image: string;
}

const mockCartItems: CartItem[] = [
  {
    id: 1,
    name: "hybrid blush",
    shade: "cheeky mood",
    price: 22,
    quantity: 1,
    image: "/assets/productOne.png",
  },
  {
    id: 2,
    name: "high gloss",
    shade: "daddys girl",
    price: 20,
    quantity: 1,
    image: "/assets/productTwo.png",
  },
];

export default function Checkout() {
  const [cartItems] = useState(mockCartItems);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const { cart } = useCart();
  console.log(cart);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 py-8 lg:p-12">
          <CheckoutHeader />
          <ExpressCheckout />
          <ContactSection />
          <DeliverySection />
          <ShippingMethod />
          <PaymentSection />
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setAgreeToTerms(!agreeToTerms)}
                className="flex size-5 items-center justify-center rounded border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                {agreeToTerms && (
                  <svg
                    className="size-3 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
              <span className="text-base text-gray-700 font-montserrat">
                by placing this order, i agree to the{" "}
                <Link
                  to="/terms-and-conditions"
                  className="text-gray-400 underline hover:text-gray-600"
                >
                  terms
                </Link>{" "}
                &{" "}
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 underline hover:text-gray-600"
                >
                  privacy policy
                </Link>
              </span>
            </div>
          </div>
          <RememberMeSection />

          <Button className="w-full rounded-md bg-black py-5 border border-black text-sm font-semibold uppercase tracking-wide transition-all duration-300 ease-in-out text-white hover:bg-transparent hover:text-black font-montserrat">
            Pay now
          </Button>

          <div className="mt-6 text-center text-xs text-gray-600 font-montserrat">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </div>
        </div>

        <OrderSummary cartItems={cartItems} />
      </div>
    </div>
  );
}
