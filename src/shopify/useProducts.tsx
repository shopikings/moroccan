// useProducts.ts
import { useEffect, useState } from "react";
import { shopifyGraphQL } from "./shopifyClient";
import type { ShopifyProduct, ShopifyProductsResponse } from "./shopifyTypes";

const PRODUCTS_QUERY = `
{
  products(first: 20) {
    edges {
      node {
        id
        title
        handle
        images(first: 3) {
          edges {
            node {
              src
              altText
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
  }
}
`;

export function useProducts() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function fetchProducts() {
      try {
        setLoading(true);

        const data = await shopifyGraphQL<ShopifyProductsResponse>(
          PRODUCTS_QUERY
        );

        if (!active) return;

        const mapped = data.products.edges.map((e) => e.node);
        setProducts(mapped);
      } catch (err: any) {
        if (active) setError(err.message || "Failed to fetch products");
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchProducts();

    return () => {
      active = false;
    };
  }, []);

  return { products, loading, error };
}
