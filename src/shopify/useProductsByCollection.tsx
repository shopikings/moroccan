import { shopifyGraphQL } from "./shopifyClient";

export async function getProductsByCollection(
  collectionHandle: string,
  first = 10
) {
  const query = `
    query($handle: String!, $first: Int!) {
      collectionByHandle(handle: $handle) {
        id
        title
        products(first: $first) {
          edges {
            node {
              id
              title
              handle
              description
              featuredImage {
                url
              }
              images(first: 2) {
                edges {
                  node {
                    src
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
    }
  `;

  const data = await shopifyGraphQL(query, { handle: collectionHandle, first });

  // console.log("Shopify collection response:", data);

  if (!data.collectionByHandle) {
    console.warn(`Collection with handle "${collectionHandle}" not found.`);
    return [];
  }

  if (!data.collectionByHandle.products?.edges?.length) {
    console.warn(`No products found in collection "${collectionHandle}".`);
    return [];
  }

  // Return minimal product data
  return data.collectionByHandle.products.edges.map((edge: any) => ({
    id: edge.node.id,
    title: edge.node.title,
    handle: edge.node.handle,
    description: edge.node.description,
    featuredImage: edge.node.featuredImage?.url || null,
    images: edge.node.images?.edges?.map((img: any) => img.node.src) || [],
    price: edge.node.priceRange.minVariantPrice,
    variants:
      edge.node.variants?.edges?.map((v: any) => ({
        id: v.node.id,
        title: v.node.title ?? "",
        price: {
          amount: v.node.price.amount,
          currencyCode: v.node.price.currencyCode,
        },
        compareAtPrice: v.node.compareAtPrice
          ? {
              amount: v.node.compareAtPrice.amount,
              currencyCode: v.node.compareAtPrice.currencyCode,
            }
          : undefined,
        selectedOptions: v.node.selectedOptions || [],
        availableForSale: v.node.availableForSale ?? false,
      })) || [],
  }));
}
