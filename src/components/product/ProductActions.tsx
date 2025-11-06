interface ProductActionsProps {
  inStock: boolean;
}

const ProductActions = ({ inStock }: ProductActionsProps) => {
  return (
    <div className="space-y-3">
      <button className="w-full bg-black text-white py-4 rounded-full font-montserrat text-base hover:bg-gray-800 transition-colors">
        Add to Bag
      </button>
      {!inStock && (
        <>
          <button className="w-full bg-gray-300 text-gray-700 py-4 rounded-full font-montserrat text-base cursor-not-allowed">
            Sold Out
          </button>
          <button className="w-full bg-white text-black py-4 rounded-full font-montserrat text-base border border-gray-300 hover:border-black transition-colors">
            Notify me when back in stock
          </button>
        </>
      )}
    </div>
  );
};

export default ProductActions;
