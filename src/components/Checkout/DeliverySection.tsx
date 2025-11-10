const DeliverySection = () => {
  return (
    <div className="mb-10">
      <h2 className="mb-3 text-xl font-bold uppercase text-gray-900 font-family-trirong">
        Delivery
      </h2>
      <div className="space-y-3">
        <div className="relative">
          <select className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 text-sm text-gray-900 font-montserrat focus:border-2 focus:border-[#7F7F7F] focus:outline-none">
            <option value="" className="text-gray-400">
              Country/Region
            </option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
            <option value="au">Australia</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
            <svg
              className="size-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            type="text"
            placeholder="First name"
            className="w-full rounded-lg bg-white border border-gray-300 px-4 py-3 text-sm text-[#707070] font-montserrat focus:border-2 focus:border-[#7F7F7F] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full rounded-lg bg-white border border-gray-300 px-4 py-3 text-sm text-[#707070] font-montserrat focus:border-2 focus:border-[#7F7F7F] focus:outline-none"
          />
        </div>
        <input
          type="text"
          placeholder="Address"
          className="w-full rounded-lg bg-white border border-gray-300 px-4 py-3 text-sm text-[#707070] font-montserrat focus:border-2 focus:border-[#7F7F7F] focus:outline-none"
        />
        <input
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
          className="w-full rounded-lg bg-white border border-gray-300 px-4 py-3 text-sm text-[#707070] font-montserrat focus:border-2 focus:border-[#7F7F7F] focus:outline-none"
        />
        <div className="grid gap-3 sm:grid-cols-3">
          <input
            type="text"
            placeholder="City"
            className="w-full rounded-lg bg-white border border-gray-300 px-4 py-3 text-sm text-[#707070] font-montserrat focus:border-2 focus:border-[#7F7F7F] focus:outline-none"
          />
          <input
            type="text"
            placeholder="State"
            className="w-full rounded-lg bg-white border border-gray-300 px-4 py-3 text-sm text-[#707070] font-montserrat focus:border-2 focus:border-[#7F7F7F] focus:outline-none"
          />
          <input
            type="text"
            placeholder="ZIP code"
            className="w-full rounded-lg bg-white border border-gray-300 px-4 py-3 text-sm text-[#707070] font-montserrat focus:border-2 focus:border-[#7F7F7F] focus:outline-none"
          />
        </div>
        <input
          type="tel"
          placeholder="Phone"
          className="w-full rounded-lg bg-white border border-gray-300 px-4 py-3 text-sm text-[#707070] font-montserrat focus:border-2 focus:border-[#7F7F7F] focus:outline-none"
        />
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="save-delivery"
            className="size-3 rounded bg-white border-gray-300"
          />
          <label
            htmlFor="save-delivery"
            className="text-xs text-gray-900 font-montserrat"
          >
            text me with news and offers
          </label>
        </div>
      </div>
    </div>
  );
};

export default DeliverySection;
