/* eslint-disable prettier/prettier */
import useSWR from "swr";
import { shopifyGraphQL } from "./shopifyClient";

const GET_ALL_BLOGS = `
  query GetAllBlogs($first: Int = 10) {
    blogs(first: $first) {
      edges {
        node {
          id
          title
          handle
          articles(first: 10) {
            edges {
              node {
                id
                title
                handle
                author {
                  name
                }
                image {
                  url
                  altText
                }
                publishedAt
                contentHtml
                tags
              }
            }
          }
        }
      }
    }
  }
`;

// ------------------------------------------------
// Helper - extract text snippet from HTML
// ------------------------------------------------
function getExcerpt(html: string, length: number = 140): string {
  if (!html) return "";
  const text = html.replace(/<[^>]+>/g, ""); // strip HTML tags
  return text.length > length ? text.substring(0, length) + "..." : text;
}

// ------------------------------------------------
// Fetcher
// ------------------------------------------------
const fetchAllBlogs = async (first = 10) => {
  const response = await shopifyGraphQL(GET_ALL_BLOGS, { first });

  const blogs = response?.blogs?.edges?.map((edge: any) => edge.node) || [];

  return blogs.map((blog: any) => ({
    id: blog.id,
    title: blog.title,
    handle: blog.handle,
    articles:
      blog.articles?.edges?.map((e: any) => ({
        id: e.node.id,
        title: e.node.title,
        handle: e.node.handle,
        publishedAt: e.node.publishedAt,
        excerpt: getExcerpt(e.node.contentHtml, 140),
        image: e.node.image?.url || null,
        content: e.node.contentHtml,
        author: e.node.author?.name || "Unknown",
        tags: e.node.tags || [],
      })) || [],
  }));
};

// ------------------------------------------------
// SWR Hook
// ------------------------------------------------
export const useShopifyBlogs = (first = 10) => {
  const { data, error, isLoading, mutate } = useSWR(
    ["all-blogs", first],
    () => fetchAllBlogs(first),
    {
      dedupingInterval: 1000 * 60 * 10, // 10 minutes
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: true,
    }
  );

  return {
    blogs: data || [],
    loading: isLoading,
    error,
    refresh: () => mutate(),
  };
};
