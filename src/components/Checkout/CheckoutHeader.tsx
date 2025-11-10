const CheckoutHeader = () => {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div className="flex-1" />
      <div className="flex flex-col items-center gap-2">
        <img src="/assets/logo.svg" alt="Shopping bag" className="w-40" />
      </div>
      <div className="flex flex-1 justify-end">
        <button className="text-gray-700 hover:text-[#C56948]">
          <img
            src="/assets/icons/shopping-checkout.svg"
            alt="Shopping bag"
            className="size-6"
          />
        </button>
      </div>
    </div>
  );
};

export default CheckoutHeader;
