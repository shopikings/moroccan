import { useQuery } from "@tanstack/react-query";
import { shopifyGraphQL } from "./shopifyClient";

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

          variants(first: 10) {
            edges {
              node {
                id
                title
                availableForSale
                price {
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

export function useProductsByTagCached(
  tag: string,
  first: number = 20,
  videoNamespace: string = "custom",
  videoKey: string = "product_video"
) {
  return useQuery({
    queryKey: ["productsByTag", tag, first, videoNamespace, videoKey],
    queryFn: async () => {
      const data = await shopifyGraphQL(PRODUCTS_BY_TAG_QUERY, {
        tag: `tag:${tag}`,
        first,
        videoNamespace,
        videoKey,
      });

      return data.products.edges.map((e: any) => e.node);
    },
    staleTime: 1000 * 60 * 10, // cache for 10 minutes
    gcTime: 1000 * 60 * 30, // garbage collect after 30 minutes
  });
}
