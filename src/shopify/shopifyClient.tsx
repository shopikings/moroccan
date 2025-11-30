export async function shopifyGraphQL<TData = any>(
  query: string,
  variables: Record<string, any> = {}
): Promise<TData> {
  const url = `https://${
    import.meta.env.VITE_REACT_APP_SHOPIFY_STORE_URL
  }/api/2024-01/graphql.json`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": import.meta.env
        .VITE_REACT_APP_SHOPIFY_STOREFRONT_TOKEN!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await response.json();
  return json.data as TData;
}
