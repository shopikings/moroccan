import { shopifyGraphQL } from "../shopifyClient";

export async function getProductVariants(productId: string) {
  const query = `
    query getProduct($id: ID!) {
      product(id: $id) {
        variants(first: 10) {
          edges {
            node {
              id
              title
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await shopifyGraphQL(query, {
      id: productId,
    });

    return data.product.variants.edges.map((edge: any) => edge.node);
  } catch (error) {
    console.error("Error fetching variants:", error);
    return [];
  }
}
