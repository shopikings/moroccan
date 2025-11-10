import { Button } from "../ui/button";

interface CartItem {
  id: number;
  name: string;
  shade: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderSummaryProps {
  cartItems: CartItem[];
}

const OrderSummary = ({ cartItems }: OrderSummaryProps) => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping: number = 0;
  const total = subtotal + shipping;

  return (
    <div className="border-t border-gray-300 px-6 py-8 lg:border-l lg:border-t-0 lg:p-12">
      <div className="mb-6 space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="relative size-16 shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="size-full rounded-lg border border-gray-300 object-cover"
              />
              <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-gray-600 text-xs text-white font-montserrat">
                {item.quantity}
              </span>
            </div>

            <div className="flex flex-1 items-start justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900 font-montserrat">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-600 font-montserrat">
                  {item.shade}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-900 font-montserrat">
                £{item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-6 rounded-2xl bg-[#F5F5F5] p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-full">
            <svg
              className="size-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="text-base text-[#1C1C1C] font-montserrat">
            don&apos;t miss out!{" "}
            <a href="#" className="text-gray-500 underline hover:text-gray-700">
              log in
            </a>{" "}
            to earn and redeem rewards
          </span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Discount code"
            className="flex-1 rounded-lg bg-white border border-gray-300 px-4 py-3 text-sm text-[#707070] font-montserrat focus:border-2 focus:border-[#7F7F7F] focus:outline-none"
          />
          <Button className="rounded px-6 py-6 text-sm shadow-none border border-[#D6D6D6] bg-[#EDEDED] hover:bg-[#EDEDED] font-medium text-[#7B7B78] font-montserrat">
            apply
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-black font-montserrat">Subtotal</span>
          <span className="font-medium text-black font-montserrat">
            £{subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-black font-montserrat">Shipping</span>
          <span className="font-medium text-black font-montserrat">
            {shipping === 0 ? "FREE" : `£${shipping.toFixed(2)}`}
          </span>
        </div>
      </div>

      <div className="flex items-baseline justify-between">
        <span className="text-2xl font-medium text-gray-900 font-montserrat">
          total
        </span>
        <span className="text-2xl font-medium text-gray-900 font-montserrat">
          £{total.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default OrderSummary;
