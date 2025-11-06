interface ProductPriceProps {
  salePrice: string;
  originalPrice: string;
  discount: number;
}

const ProductPrice = ({
  salePrice,
  originalPrice,
  discount,
}: ProductPriceProps) => {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-3 mb-1">
        <span className="text-2xl font-fahkwang font-semibold text-[#CD3434]">
          {salePrice}
        </span>
        <span className="text-lg font-fahkwang text-gray-500 line-through">
          {originalPrice}
        </span>
      </div>
      <p className="text-xs mb-4 text-gray-600 font-montserrat ">
        Tax included.{" "}
        <span className="underline cursor-pointer">Shipping calculated</span> at
        checkout
      </p>
      <div className="inline-block bg-[#CD3434] text-white px-2 py-1 text-xs font-montserrat font-normal">
        SAVE {discount}%
      </div>
    </div>
  );
};

export default ProductPrice;
