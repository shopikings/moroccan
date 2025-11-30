import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useShopifyBlogs } from "@/shopify/useBlogs";
import { useShopifyArticle } from "@/shopify/useBlogPost";
import FeaturesSection from "@/components/Home/FeaturesSection";
import { Button } from "@/components/ui/button";

const BlogDetail = () => {
  const { blogHandle, articleHandle } = useParams();

  const { data: article, isLoading } = useShopifyArticle(
    blogHandle || "",
    articleHandle || ""
  );
  const { blogs } = useShopifyBlogs();

  if (isLoading) return <div className="p-20 text-center">Loading...</div>;
  if (!article) return <div className="p-20 text-center">Blog not found</div>;

  const features = [
    {
      icon: "/assets/icons/shipping.svg",
      title: "FREE SHIPPING",
      description: "Fast & Free Shipping in UK on orders above £100",
    },
    {
      icon: "/assets/icons/return.svg",
      title: "28 DAY RETURNS",
      description: "Easy returns & exchanges",
    },
    {
      icon: "/assets/icons/star.svg",
      title: "5-STAR CARE",
      description: "We're here for you anytime, ",
      email: "hello@moroccanglam.com",
    },
    {
      icon: "/assets/icons/feel-good.svg",
      title: "FEEL GOOD",
      description:
        "Sustainable purchases mean you're doing good for you, us, and the planet.",
    },
  ];

  // Find full blog entry for navigation
  const parentBlog = blogs?.find((b: any) => b.handle === blogHandle);
  const allArticles = parentBlog?.articles || [];

  const sortedArticles = allArticles
    .slice() // clone array to avoid mutating original
    .sort(
      (a: any, b: any) =>
        new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
    );

  const index = sortedArticles.findIndex(
    (a: any) => a.handle === articleHandle
  );
  const previous = index > 0 ? allArticles[index - 1] : null;
  const next =
    index < sortedArticles.length - 1 ? sortedArticles[index + 1] : null;

  // Sidebar Latest Blogs (exclude current)
  const latestBlogs = allArticles
    .filter((a: any) => a.handle !== articleHandle) // exclude current
    .sort(
      (a: any, b: any) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    ) // newest first
    .slice(0, 4);

  return (
    <div className="w-full bg-background min-h-screen py-10">
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <article className="bg-[#F3F5F5] p-6 md:p-10">
            <h1 className="text-5xl font-family-trirong text-[#494b51] font-bold mb-4">
              {article.title}
            </h1>

            <div className="bg-[#EEEEEE] w-fit rounded-md px-5 py-2 mb-8">
              <span className="text-base text-black uppercase font-montserrat">
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </span>
            </div>

            {/* Render HTML content from Shopify */}
            <div
              className="prose prose-lg font-family-montserrat"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />
          </article>
        </div>

        {/* Sidebar Latest Blogs */}
        <div className="lg:col-span-4">
          <div className="bg-[#F3F5F5] p-6 md:p-8 sticky top-24">
            <h2 className="text-xl font-bold mb-4 text-[#494b51] font-family-trirong">
              Latest Blogs
            </h2>

            <div className="flex flex-col gap-2">
              {latestBlogs.length === 0 ? (
                <p className="w-full px-4 py-3 rounded-sm text-center">
                  Not Found
                </p>
              ) : (
                latestBlogs.slice(0, 4).map((a: any) => (
                  <Link
                    key={a.id}
                    to={`/blog/${blogHandle}/${a.handle}`}
                    className="w-full px-4 py-3 border rounded-sm border-black hover:bg-black hover:text-white text-center"
                  >
                    {a.title}
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Previous / Next navigation */}
      <div className="max-w-[65%] px-4 sm:px-6 py-6 flex justify-between font-light">
        {previous ? (
          <Link
            to={`/blog/${blogHandle}/${previous.handle}`}
            className="flex items-center gap-2"
          >
            <ArrowLeft /> Previous Post
          </Link>
        ) : (
          <div></div>
        )}

        {next ? (
          <Link
            to={`/blog/${blogHandle}/${next.handle}`}
            className="flex items-center gap-2"
          >
            Next Post <ArrowRight />
          </Link>
        ) : (
          <div></div>
        )}
      </div>

      <div className="flex items-center gap-4 mb-8 mx-auto max-w-xl">
        <span className="text-sm font-montserrat text-gray-700 uppercase tracking-wider">
          SHARE
        </span>
        <button className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity">
          <img
            src="/assets/icons/facebook.svg"
            alt="Facebook"
            className="w-5 h-5"
          />
        </button>
        <button className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity">
          <img
            src="/assets/icons/twitter.svg"
            alt="Twitter"
            className="w-5 h-5"
          />
        </button>
        <button className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity">
          <img
            src="/assets/icons/pinterest.svg"
            alt="Pinterest"
            className="w-5 h-5"
          />
        </button>
        <button className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity">
          <img src="/assets/icons/email.svg" alt="Email" className="w-5 h-5" />
        </button>
      </div>

      <div className="border border-black p-8 mx-auto max-w-xl">
        <h3 className="text-2xl font-medium mb-4 font-family-montserrat">
          LEAVE A COMMENT
        </h3>
        <p className="text-sm text-gray-600 font-montserrat mb-6">
          All comments are moderated before being published. This site is
          protected by reCaptcha and the hCaptcha Privacy Policy and Terms of
          Service apply.
        </p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="NAME"
              className="px-4 py-3 border border-black rounded-full font-montserrat text-sm focus:outline-none focus:border-gray-950"
            />
            <input
              type="email"
              placeholder="E-MAIL"
              className="px-4 py-3 border border-black rounded-full font-montserrat text-sm focus:outline-none focus:border-gray-950"
            />
          </div>
          <textarea
            placeholder="MESSAGE"
            rows={6}
            className="w-full px-4 py-3 border border-black rounded-lg font-montserrat text-sm focus:outline-none focus:border-gray-500 resize-none"
          ></textarea>
          <Button
            type="submit"
            className="px-8 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition-colors font-montserrat text-sm uppercase"
          >
            Submit
          </Button>
        </form>
      </div>

      <FeaturesSection features={features} />

      <div className="bg-[#F7F6F0] py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-family-trirong mb-4 uppercase tracking-wide">
            5% WELCOME DISCOUNT
          </h2>
          <p className="text-base font-family-trirong text-gray-600 mb-6">
            subscribe to the newsletter now and receive the latest update from
            the world of Moroccan Glam!
          </p>
          <form className="relative max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 bg-white font-montserrat text-sm focus:outline-none focus:border-gray-500"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
