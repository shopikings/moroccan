import { useState } from "react";
import ProductPrice from "./ProductPrice";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import ProductActions from "./ProductActions";
import ProductAccordions from "./ProductAccordions";
import CompleteYourLook from "./CompleteYourLook";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";
import type { ShopifyProduct, ShopifyVariant } from "@/shopify/shopifyTypes";

interface ProductInfoProps {
  product: ShopifyProduct;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { addToWishlist, isInWishlist } = useWishlist();

  // Safe default variant
  const [selectedVariant, setSelectedVariant] = useState<ShopifyVariant>(
    product.variants.edges[0]?.node
  );

  // Extract unique colors from product variants
  const colors = Array.from(
    new Set(
      product.variants.edges
        .map((v) =>
          v.node.selectedOptions?.find((o) => o.name.toLowerCase() === "color")
        )
        .filter(Boolean)
        .map((o) => o!.value)
    )
  ).map((c) => ({ name: c, value: c }));

  // Extract unique sizes from product variants
  const sizes = Array.from(
    new Set(
      product.variants.edges
        .map((v) =>
          v.node.selectedOptions?.find((o) => o.name.toLowerCase() === "size")
        )
        .filter(Boolean)
        .map((o) => o!.value)
    )
  ).map((s) => ({ label: s, value: s }));

  const handleColorChange = (color: string) => {
    const variant = product.variants.edges.find((v) =>
      (v.node.selectedOptions || []).some(
        (o) => o.name.toLowerCase() === "color" && o.value === color
      )
    );
    if (variant) setSelectedVariant(variant.node);
  };

  const handleSizeChange = (size: string) => {
    const variant = product.variants.edges.find((v) =>
      (v.node.selectedOptions || []).some(
        (o) => o.name.toLowerCase() === "size" && o.value === size
      )
    );
    if (variant) setSelectedVariant(variant.node);
  };

  const handleAddToWishlist = () => {
    addToWishlist({
      id: product.id,
      name: product.title,
      price: parseFloat(selectedVariant.price.amount),
      image: product.images.edges[0].node.src,
      color:
        selectedVariant.selectedOptions?.find(
          (o) => o.name.toLowerCase() === "color"
        )?.value || "",
    });
  };

  const discount =
    selectedVariant.compareAtPrice &&
    parseFloat(selectedVariant.compareAtPrice.amount) >
      parseFloat(selectedVariant.price.amount)
      ? Math.round(
          ((parseFloat(selectedVariant.compareAtPrice.amount) -
            parseFloat(selectedVariant.price.amount)) /
            parseFloat(selectedVariant.compareAtPrice.amount)) *
            100
        )
      : 0;

  return (
    <div className="lg:px-8">
      <div className="flex items-start gap-2 mb-4">
        <h1 className="text-3xl md:text-5xl font-family-montserrat mb-4">
          {product.title}
        </h1>
        <button
          onClick={handleAddToWishlist}
          className="p-1 cursor-pointer hover:bg-gray-100 rounded-full transition-colors"
        >
          <Heart
            className={`w-7 h-7 ${
              isInWishlist(product.id)
                ? "fill-red-500 text-red-500"
                : "text-gray-700"
            }`}
          />
        </button>
      </div>
      <ProductPrice
        salePrice={`${selectedVariant.price.amount} ${selectedVariant.price.currencyCode}`}
        originalPrice={
          selectedVariant.compareAtPrice
            ? `${selectedVariant.compareAtPrice.amount} ${selectedVariant.compareAtPrice.currencyCode}`
            : ""
        }
        discount={discount}
      />
      <Button className="w-fit bg-black text-white py-3 rounded-full font-montserrat text-sm mb-6 hover:bg-gray-800 transition-colors">
        Talk to a stylist
      </Button>
      <ColorSelector
        colors={colors}
        selectedColor={
          selectedVariant.selectedOptions?.find(
            (o) => o.name.toLowerCase() === "color"
          )?.value || ""
        }
        onColorChange={handleColorChange}
      />
      <SizeSelector
        sizes={sizes}
        selectedSize={
          selectedVariant.selectedOptions?.find(
            (o) => o.name.toLowerCase() === "size"
          )?.value || ""
        }
        onSizeChange={handleSizeChange}
      />
      <ProductActions
        productId={product.id}
        productName={product.title}
        productPrice={parseFloat(selectedVariant.price.amount)}
        productImage={product.images.edges[0].node.src}
        selectedSize={
          selectedVariant.selectedOptions?.find(
            (o) => o.name.toLowerCase() === "size"
          )?.value || ""
        }
        selectedColor={
          selectedVariant.selectedOptions?.find(
            (o) => o.name.toLowerCase() === "color"
          )?.value || ""
        }
      />
      <ProductAccordions description={product?.description} />
      <CompleteYourLook />
    </div>
  );
};

export default ProductInfo;
