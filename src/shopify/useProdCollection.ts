import { useEffect, useState } from "react";
import { shopifyGraphQL } from "./shopifyClient";

export function useProdByCollection(collectionHandle: string, first = 50) {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function fetchProducts() {
      try {
        setLoading(true);

        const query = `
          query($handle: String!, $first: Int!) {
            collectionByHandle(handle: $handle) {
              products(first: $first) {
                edges {
                  node {
                    id
                    title
                    handle
                    images(first: 5) {
                      edges {
                        node { src altText }
                      }
                    }
                    variants(first: 10) {
                      edges {
                        node {
                          id
                          title
                          availableForSale
                          price { amount currencyCode }
                          compareAtPrice { amount currencyCode }
                          selectedOptions { name value }
                        }
                      }
                    }
                    createdAt
                  }
                }
              }
            }
          }
        `;

        const data = await shopifyGraphQL(query, {
          handle: collectionHandle,
          first,
        });

        if (!active) return;

        const mapped =
          data.collectionByHandle?.products?.edges?.map((e: any) => e.node) ??
          [];

        setProducts(mapped);
      } catch (err: any) {
        if (active) setError(err.message);
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchProducts();
    return () => {
      active = false;
    };
  }, [collectionHandle, first]);

  return { products, loading, error };
}
