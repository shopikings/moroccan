// useProductsByTag.ts
import { useEffect, useState } from "react";
import { shopifyGraphQL } from "./shopifyClient";
import type { ShopifyProduct, ShopifyProductsResponse } from "./shopifyTypes";

export function useProductsByTag(
  tag: string,
  first: number = 20,
  videoNamespace: string = "custom",
  videoKey: string = "product_video"
) {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const PRODUCTS_BY_TAG_QUERY = `
    query ProductsByTag(
      $tag: String!,
      $first: Int!,
      $videoNamespace: String!,
      $videoKey: String!
    ) {
      products(first: $first, query: $tag) {
        edges {
          node {
            id
            title
            handle

            metafield(namespace: $videoNamespace, key: $videoKey) {
              id
              type
              reference {
                __typename
                ... on Video {
                  sources {
                    url
                    mimeType
                  }
                  previewImage {
                    url
                  }
                }
              }
            }

            images(first: 3) {
              edges {
                node {
                  url
                  altText
                }
              }
            }

            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

  useEffect(() => {
    let active = true;

    async function fetchProducts() {
      try {
        setLoading(true);

        const data = await shopifyGraphQL<ShopifyProductsResponse>(
          PRODUCTS_BY_TAG_QUERY,
          {
            tag: `tag:${tag}`,
            first,
            videoNamespace,
            videoKey,
          }
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
  }, [tag, first, videoNamespace, videoKey]);

  return { products, loading, error };
}
