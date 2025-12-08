import { useState } from "react";
import { shopifyGraphQL } from "../shopifyClient";
import { useCart } from "@/context/CartContext";
import { getProductVariants } from "../helpers/helpers";

interface UseShopifyCheckoutReturn {
  createCheckout: () => Promise<string | null>;
  loading: boolean;
  error: string | null;
}

export function useShopifyCheckout(): UseShopifyCheckoutReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { cart } = useCart();

  const createCheckout = async (): Promise<string | null> => {
    setLoading(true);
    setError(null);

    try {
      // Prepare line items for Shopify
      const lineItems = [];

      // For each cart item, find the correct variant
      for (const item of cart) {
        let merchandiseId = item.variantId;

        // If no variantId, try to find the correct variant
        if (!merchandiseId) {
          const variants = await getProductVariants(item.id);
          const foundVariant = variants.find((variant: any) => {
            const options = variant.selectedOptions;
            const sizeMatch =
              !item.size ||
              options.find(
                (opt: any) => opt.name === "Size" && opt.value === item.size
              );
            const colorMatch =
              !item.color ||
              options.find(
                (opt: any) => opt.name === "Color" && opt.value === item.color
              );
            return sizeMatch && colorMatch;
          });

          if (foundVariant) {
            merchandiseId = foundVariant.id;
          } else if (variants.length > 0) {
            // Fallback to first variant
            merchandiseId = variants[0].id;
          } else {
            // If no variants found, skip this item
            console.error(`No variants found for product: ${item.id}`);
            continue;
          }
        }

        lineItems.push({
          merchandiseId,
          quantity: item.quantity,
        });
      }

      if (lineItems.length === 0) {
        setError("No valid products to checkout");
        setLoading(false);
        return null;
      }

      const cartCreateMutation = `
        mutation cartCreate($input: CartInput!) {
          cartCreate(input: $input) {
            cart {
              id
              checkoutUrl
            }
            userErrors {
              field
              message
            }
          }
        }
      `;

      // CORRECTED: Call shopifyGraphQL function directly
      const data = await shopifyGraphQL(cartCreateMutation, {
        input: {
          lines: lineItems,
        },
      });

      if (data.cartCreate.userErrors.length > 0) {
        const errorMessages = data.cartCreate.userErrors
          .map((e: any) => e.message)
          .join(", ");
        setError(errorMessages);
        setLoading(false);
        return null;
      }

      setLoading(false);
      return data.cartCreate.cart.checkoutUrl;
    } catch (err: any) {
      const errorMessage = err.message || "Something went wrong";
      setError(errorMessage);
      setLoading(false);
      return null;
    }
  };

  return { createCheckout, loading, error };
}
