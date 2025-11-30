import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { BlogCard } from "../components/Blog/BlogCard";
import Pagination from "@/components/Shop/Pagination";
import { useShopifyBlogs } from "@/shopify/useBlogs";

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const { blogs, loading, error } = useShopifyBlogs(POSTS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const transformedPosts =
    blogs?.flatMap((blog: any) =>
      blog.articles.map((article: any) => ({
        id: article.id,
        image: article.image || "/assets/blog/blog-one.png", // fallback
        category: `BLOGS | ${blog.title.toUpperCase()}`,
        title: article.title,
        excerpt: article.excerpt,
        date: new Date(article.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
        }),
        // Optional: slug for routing
        handle: article.handle,
        blogHandle: blog.handle,
      }))
    ) || [];

  const allPosts = transformedPosts;

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = allPosts.slice(startIndex, endIndex);

  if (loading) return <div className="p-20 text-center">Loading...</div>;
  if (error) return <div className="p-20 text-center">{error}</div>;

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
          {currentPosts.map((post: any) => (
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
