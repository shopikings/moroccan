import { shopifyGraphQL } from "./shopifyClient";

export async function getProduct(handle: string) {
  const query = `
    query($handle: String!) {
      product(handle: $handle) {
        id
        title
        description
        images(first: 10) {
          edges {
            node { src }
          }
        }
        variants(first: 10) {
          edges {
            node { 
              id 
              title
              price { amount currencyCode }
              compareAtPrice { amount currencyCode }
              availableForSale
              selectedOptions { name value }
            }
          }
        }
      }
    }
  `;

  const data = await shopifyGraphQL(query, { handle });
  return data.product;
}
