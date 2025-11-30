import { useQuery } from "@tanstack/react-query";
import { shopifyGraphQL } from "./shopifyClient";

const QUERY = `
  {
    collections(first: 100) {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
  }
`;

export const useCollectionsLite = () => {
  return useQuery({
    queryKey: ["collections-lite"],
    queryFn: async () => {
      const data = await shopifyGraphQL(QUERY);
      return data.collections.edges.map((edge: any) => edge.node);
    },
  });
};
