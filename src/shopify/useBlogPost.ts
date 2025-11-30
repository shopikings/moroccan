import { useQuery } from "@tanstack/react-query";
import { shopifyGraphQL } from "./shopifyClient";

const ARTICLE_QUERY = `
  query GetArticle($blogHandle: String!, $articleHandle: String!) {
    blog(handle: $blogHandle) {
      articleByHandle(handle: $articleHandle) {
        id
        title
        handle
        image {
          url
        }
        excerpt
        contentHtml
        publishedAt
      }
    }
  }
`;

export function useShopifyArticle(blogHandle: string, articleHandle: string) {
  return useQuery({
    queryKey: ["article", blogHandle, articleHandle],
    queryFn: async () => {
      const res = await shopifyGraphQL(ARTICLE_QUERY, {
        blogHandle,
        articleHandle,
      });
      return res.blog?.articleByHandle || null;
    },
  });
}
