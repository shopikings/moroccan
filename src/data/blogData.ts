export interface BlogContent {
  type: "heading" | "paragraph" | "image" | "list";
  content?: string;
  items?: string[];
  src?: string;
  alt?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  thumbnail: string;
  excerpt: string;
  content: BlogContent[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Great Online Sale 2025: Exclusive Deals from Apparel Group Brands",
    category: "BLOGS | SHOPPING",
    date: "MARCH 2025",
    thumbnail: "/assets/blog/blog-one.png",
    excerpt:
      "Are you ready for a thrilling clothing sale? From March 27th to 30th, top brands are hosting a fabulous fashion sale this month! We have...",
    content: [
      {
        type: "paragraph",
        content:
          "Are you ready for a thrilling clothing sale? From March 27th to 30th, top brands are hosting a fabulous fashion sale this month! We have curated an exclusive collection of deals from premium apparel group brands that you won't want to miss.",
      },
      {
        type: "image",
        src: "/assets/blog/blog-one.png",
        alt: "Sale banner",
      },
      {
        type: "paragraph",
        content:
          "This year's sale features unprecedented discounts on designer clothing, accessories, and footwear. Whether you're looking to refresh your wardrobe for spring or invest in timeless pieces, this is the perfect opportunity to shop smart and save big.",
      },
      {
        type: "heading",
        content: "What to Expect",
      },
      {
        type: "paragraph",
        content:
          "Our participating brands include some of the most sought-after names in fashion. From casual wear to formal attire, you'll find everything you need to elevate your style. The sale includes:",
      },
      {
        type: "list",
        items: [
          "Up to 70% off on selected items",
          "Exclusive online-only deals",
          "Free shipping on orders over $100",
          "Early access for newsletter subscribers",
          "Limited edition collections",
        ],
      },
      {
        type: "heading",
        content: "Shopping Tips",
      },
      {
        type: "paragraph",
        content:
          "To make the most of this sale, we recommend creating a wishlist beforehand. Browse through our collections, save your favorite items, and be ready when the sale goes live. Popular sizes and styles tend to sell out quickly, so don't wait too long to make your purchase.",
      },
      {
        type: "image",
        src: "/assets/blog/blog-two.png",
        alt: "Shopping tips",
      },
      {
        type: "paragraph",
        content:
          "Sign up for our newsletter to receive exclusive early access and additional discount codes. Follow us on social media for real-time updates on flash deals and limited-time offers throughout the sale period.",
      },
      {
        type: "heading",
        content: "Don't Miss Out",
      },
      {
        type: "paragraph",
        content:
          "Mark your calendars for March 27th-30th and get ready for the shopping event of the season. With incredible savings across all categories, this is your chance to invest in quality pieces that will last for years to come.",
      },
      {
        type: "paragraph",
        content:
          "Visit our website during the sale period to explore the full range of discounted items. Happy shopping!",
      },
    ],
  },
  {
    id: "2",
    title: "Spring Fashion Trends: What to Wear This Season",
    category: "BLOGS | FASHION",
    date: "MARCH 2025",
    thumbnail: "/assets/blog/blog-two.png",
    excerpt:
      "Discover the hottest spring fashion trends that will elevate your wardrobe. From pastel colors to bold prints, we cover everything you need...",
    content: [
      {
        type: "paragraph",
        content:
          "Spring is here and it's time to refresh your wardrobe with the latest trends.",
      },
      {
        type: "image",
        src: "/assets/blog/blog-two.png",
        alt: "Spring fashion",
      },
      {
        type: "heading",
        content: "Top Trends",
      },
      {
        type: "paragraph",
        content:
          "This season is all about vibrant colors and comfortable silhouettes.",
      },
    ],
  },
  {
    id: "3",
    title: "How to Build a Capsule Wardrobe: Essential Pieces",
    category: "BLOGS | STYLE",
    date: "FEBRUARY 2025",
    thumbnail: "/assets/blog/blog-three.png",
    excerpt:
      "Learn how to create a versatile capsule wardrobe with timeless pieces that work for any occasion. Simplify your style with these must-have items...",
    content: [
      {
        type: "paragraph",
        content:
          "Learn how to create a versatile capsule wardrobe with timeless pieces that work for any occasion.",
      },
    ],
  },
  {
    id: "4",
    title: "Sustainable Fashion: Shopping with Purpose",
    category: "BLOGS | SHOPPING",
    date: "FEBRUARY 2025",
    thumbnail: "/assets/blog/blog-one.png",
    excerpt:
      "Explore the world of sustainable fashion and learn how to make eco-conscious choices without compromising on style. Your guide to ethical shopping...",
    content: [
      {
        type: "paragraph",
        content:
          "Explore the world of sustainable fashion and learn how to make eco-conscious choices without compromising on style.",
      },
    ],
  },
  {
    id: "5",
    title: "Ramdan Outfit Ideas: Stylish",
    category: "BLOGS | FASHION",
    date: "JANUARY 2025",
    thumbnail: "/assets/blog/blog-one.png",
    excerpt:
      "Discover stylish outfit ideas for Ramadan that combine modesty with modern fashion trends...",
    content: [
      {
        type: "paragraph",
        content:
          "Discover stylish outfit ideas for Ramadan that combine modesty with modern fashion trends.",
      },
    ],
  },
];
