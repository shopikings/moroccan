import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { BlogCard } from "../components/Blog/BlogCard";
import Pagination from "@/components/Shop/Pagination";

const displayPosts = [
  {
    id: "1",
    image: "/assets/blog/blog-one.png",
    category: "BLOGS | SHOPPING",
    title: "Great Online Sale 2025: Exclusive Deals from Apparel Group Brands",
    excerpt:
      "Are you ready for a thrilling clothing sale? From March 27th to 30th, top brands are hosting a fabulous fashion sale this month! We have...",
    date: "MARCH 2025",
  },
  {
    id: "2",
    image: "/assets/blog/blog-two.png",
    category: "BLOGS | FASHION",
    title: "Spring Fashion Trends: What to Wear This Season",
    excerpt:
      "Discover the hottest spring fashion trends that will elevate your wardrobe. From pastel colors to bold prints, we cover everything you need...",
    date: "MARCH 2025",
  },
  {
    id: "3",
    image: "/assets/blog/blog-three.png",
    category: "BLOGS | STYLE",
    title: "How to Build a Capsule Wardrobe: Essential Pieces",
    excerpt:
      "Learn how to create a versatile capsule wardrobe with timeless pieces that work for any occasion. Simplify your style with these must-have items...",
    date: "FEBRUARY 2025",
  },
  {
    id: "4",
    image: "/assets/blog/blog-one.png",
    category: "BLOGS | SHOPPING",
    title: "Sustainable Fashion: Shopping with Purpose",
    excerpt:
      "Explore the world of sustainable fashion and learn how to make eco-conscious choices without compromising on style. Your guide to ethical shopping...",
    date: "FEBRUARY 2025",
  },
  {
    id: "5",
    image: "/assets/blog/blog-two.png",
    category: "BLOGS | FASHION",
    title: "Accessorizing 101: Complete Your Look",
    excerpt:
      "Master the art of accessorizing with our comprehensive guide. From statement jewelry to the perfect handbag, learn how to elevate any outfit...",
    date: "JANUARY 2025",
  },
  {
    id: "6",
    image: "/assets/blog/blog-three.png",
    category: "BLOGS | STYLE",
    title: "Workwear Essentials: Professional Style Guide",
    excerpt:
      "Build a professional wardrobe that takes you from office to after-work events. Discover the key pieces every working professional needs...",
    date: "JANUARY 2025",
  },
  {
    id: "7",
    image: "/assets/blog/blog-one.png",
    category: "BLOGS | SHOPPING",
    title: "Great Online Sale 2025: Exclusive Deals from Apparel Group Brands",
    excerpt:
      "Are you ready for a thrilling clothing sale? From March 27th to 30th, top brands are hosting a fabulous fashion sale this month! We have...",
    date: "MARCH 2025",
  },
  {
    id: "8",
    image: "/assets/blog/blog-two.png",
    category: "BLOGS | FASHION",
    title: "Spring Fashion Trends: What to Wear This Season",
    excerpt:
      "Discover the hottest spring fashion trends that will elevate your wardrobe. From pastel colors to bold prints, we cover everything you need...",
    date: "MARCH 2025",
  },
  {
    id: "9",
    image: "/assets/blog/blog-three.png",
    category: "BLOGS | STYLE",
    title: "How to Build a Capsule Wardrobe: Essential Pieces",
    excerpt:
      "Learn how to create a versatile capsule wardrobe with timeless pieces that work for any occasion. Simplify your style with these must-have items...",
    date: "FEBRUARY 2025",
  },
  {
    id: "10",
    image: "/assets/blog/blog-one.png",
    category: "BLOGS | SHOPPING",
    title: "Sustainable Fashion: Shopping with Purpose",
    excerpt:
      "Explore the world of sustainable fashion and learn how to make eco-conscious choices without compromising on style. Your guide to ethical shopping...",
    date: "FEBRUARY 2025",
  },
  {
    id: "11",
    image: "/assets/blog/blog-two.png",
    category: "BLOGS | FASHION",
    title: "Accessorizing 101: Complete Your Look",
    excerpt:
      "Master the art of accessorizing with our comprehensive guide. From statement jewelry to the perfect handbag, learn how to elevate any outfit...",
    date: "JANUARY 2025",
  },
  {
    id: "12",
    image: "/assets/blog/blog-three.png",
    category: "BLOGS | STYLE",
    title: "Workwear Essentials: Professional Style Guide",
    excerpt:
      "Build a professional wardrobe that takes you from office to after-work events. Discover the key pieces every working professional needs...",
    date: "JANUARY 2025",
  },
  {
    id: "13",
    image: "/assets/blog/blog-one.png",
    category: "BLOGS | SHOPPING",
    title: "Great Online Sale 2025: Exclusive Deals from Apparel Group Brands",
    excerpt:
      "Are you ready for a thrilling clothing sale? From March 27th to 30th, top brands are hosting a fabulous fashion sale this month! We have...",
    date: "MARCH 2025",
  },
  {
    id: "14",
    image: "/assets/blog/blog-two.png",
    category: "BLOGS | FASHION",
    title: "Spring Fashion Trends: What to Wear This Season",
    excerpt:
      "Discover the hottest spring fashion trends that will elevate your wardrobe. From pastel colors to bold prints, we cover everything you need...",
    date: "MARCH 2025",
  },
  {
    id: "15",
    image: "/assets/blog/blog-three.png",
    category: "BLOGS | STYLE",
    title: "How to Build a Capsule Wardrobe: Essential Pieces",
    excerpt:
      "Learn how to create a versatile capsule wardrobe with timeless pieces that work for any occasion. Simplify your style with these must-have items...",
    date: "FEBRUARY 2025",
  },
  {
    id: "16",
    image: "/assets/blog/blog-one.png",
    category: "BLOGS | SHOPPING",
    title: "Sustainable Fashion: Shopping with Purpose",
    excerpt:
      "Explore the world of sustainable fashion and learn how to make eco-conscious choices without compromising on style. Your guide to ethical shopping...",
    date: "FEBRUARY 2025",
  },
  {
    id: "17",
    image: "/assets/blog/blog-two.png",
    category: "BLOGS | FASHION",
    title: "Accessorizing 101: Complete Your Look",
    excerpt:
      "Master the art of accessorizing with our comprehensive guide. From statement jewelry to the perfect handbag, learn how to elevate any outfit...",
    date: "JANUARY 2025",
  },
  {
    id: "18",
    image: "/assets/blog/blog-three.png",
    category: "BLOGS | STYLE",
    title: "Workwear Essentials: Professional Style Guide",
    excerpt:
      "Build a professional wardrobe that takes you from office to after-work events. Discover the key pieces every working professional needs...",
    date: "JANUARY 2025",
  },
];

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const allPosts = displayPosts.map((post) => ({
    id: post.id,
    image: post.image,
    category: post.category,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
  }));

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = allPosts.slice(startIndex, endIndex);
  return (
    <div className="w-full bg-background min-h-screen py-10">
      <div className="w-[90vw] mx-auto">
        <img
          src="/assets/blog/banner.png"
          alt="Blog Banner"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="max-w-[80vw] mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center gap-1 text-sm font-montserrat mb-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <ChevronRight className="w-3 h-2 text-gray-400" />
          <ChevronRight className="w-3 h-2 text-gray-400 -ml-3" />
          <span className="text-gray-900">Blogs</span>
        </div>
        <h1
          className="text-5xl font-bold py-10 text-center font-family-trirong"
          style={{ color: "#494B51" }}
        >
          Blogs
        </h1>
        <div className="border border-[#494B51]/30 w-[50vw] mx-auto mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 pb-8 items-stretch">
          {currentPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Blog;
