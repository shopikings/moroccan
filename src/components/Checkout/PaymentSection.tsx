const PaymentSection = () => {
  return (
    <div className="mb-10">
      <h2 className="mb-2 text-xl font-bold uppercase text-gray-900 font-family-trirong">
        Payment
      </h2>
      <div className="mb-4 text-xs lowercase text-[#707070] font-montserrat">
        All transactions are secure and encrypted.
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-[#DEDEDE] p-6">
          <div className="flex items-center gap-3">
            <div className="flex size-6 items-center justify-center">
              <div className="flex size-5 items-center justify-center rounded-full bg-gray-500">
                <div className="size-2 rounded-full bg-white"></div>
              </div>
            </div>
            <span className="text-base font-medium text-gray-700 font-montserrat">
              credit card
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/assets/icons/visa.svg" alt="Visa" className="h-8" />
            <img
              src="/assets/icons/masterCard.svg"
              alt="Mastercard"
              className="h-8"
            />
            <img src="/assets/icons/amex.svg" alt="Amex" className="h-8" />
            <span className="text-sm font-medium text-gray-500 font-montserrat">
              +5
            </span>
          </div>
        </div>

        <div className="bg-[#F4F4F4] p-6">
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="card number"
                className="w-full rounded-xl border border-[#DEDEDE] bg-white p-4 text-base text-gray-700 placeholder:text-gray-400 font-montserrat focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                <svg
                  className="size-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="expiration date (mm / yy)"
                className="w-full rounded-xl border border-[#DEDEDE] bg-white p-4 text-base text-gray-700 placeholder:text-gray-400 font-montserrat focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <div className="relative">
                <input
                  type="text"
                  placeholder="security code"
                  className="w-full rounded-xl border border-[#DEDEDE] bg-white p-4 pr-12 text-base text-gray-700 placeholder:text-gray-400 font-montserrat focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg
                    className="size-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <input
              type="text"
              placeholder="name on card"
              className="w-full rounded-xl border border-[#DEDEDE] bg-white p-4 text-base text-gray-700 placeholder:text-gray-400 font-montserrat focus:outline-none focus:ring-2 focus:ring-gray-200"
            />

            <div className="flex items-center gap-3 pt-2">
              <div className="flex size-6 items-center justify-center rounded bg-gray-600">
                <svg
                  className="size-4 text-white"
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
              </div>
              <label className="text-base font-medium text-gray-700 font-montserrat">
                use shipping address as billing address
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
