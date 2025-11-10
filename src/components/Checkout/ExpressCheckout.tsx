const ExpressCheckout = () => {
  return (
    <>
      <div className="mb-4 flex items-center gap-4">
        <div className="h-px flex-1 bg-transparent"></div>
        <span className="text-xs font-normal text-[#707070] font-montserrat">
          express checkout
        </span>
        <div className="h-px flex-1 bg-transparent"></div>
      </div>

      <div className="mb-6 flex gap-2">
        <button className="flex flex-1 items-center justify-center rounded bg-[#592FF4] px-6 py-3">
          <img src="/assets/icons/shop.svg" alt="Shop Pay" className="h-5" />
        </button>
        <button className="flex flex-1 items-center justify-center rounded bg-[#FFC439] px-6 py-3">
          <img src="/assets/icons/paypal.svg" alt="PayPal" className="h-5" />
        </button>
        <button className="flex flex-1 items-center justify-center rounded bg-[#000000] px-6 py-3">
          <img src="/assets/icons/gpay.svg" alt="Google Pay" className="h-5" />
        </button>
      </div>

      <div className="mb-4 flex items-center gap-4">
        <div className="h-px flex-1 bg-[#DEDEDE]"></div>
        <span className="text-xs font-normal text-[#707070] font-montserrat">
          or
        </span>
        <div className="h-px flex-1 bg-[#DEDEDE]"></div>
      </div>
    </>
  );
};

export default ExpressCheckout;
