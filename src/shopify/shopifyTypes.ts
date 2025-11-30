// shopifyTypes.ts

export interface ShopifyImage {
  src: string;
  altText?: string;
}

export interface ShopifyVariant {
  id: string;
  title: string;
  price: { amount: string; currencyCode: string };
  compareAtPrice?: { amount: string; currencyCode: string };
  selectedOptions?: { name: string; value: string }[];
  availableForSale?: boolean;
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  images: {
    edges: { node: ShopifyImage }[];
  };
  variants: {
    edges: { node: ShopifyVariant }[];
  };
  createdAt: string;
}

export interface ShopifyProductsResponse {
  products: {
    edges: { node: ShopifyProduct }[];
  };
}
