import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blogData";
import { Button } from "@/components/ui/button";
import FeaturesSection from "@/components/Home/FeaturesSection";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === id);
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
  if (!blog) {
    return (
      <div className="w-full bg-background min-h-screen py-10 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-family-trirong mb-4">Blog not found</h1>
          <Link to="/blog" className="text-blue-600 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex((post) => post.id === id);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const latestBlogs = blogPosts.filter((post) => post.id !== id).slice(0, 4);
  return (
    <div className="w-full bg-background min-h-screen py-10">
      <div className="w-full">
        <div className="max-w-[90vw] mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <article className="bg-[#F3F5F5] p-6 md:p-10">
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-family-trirong"
                style={{ color: "#494B51" }}
              >
                {blog.title}
              </h1>

              <div className=" bg-[#EEEEEE] w-fit rounded-md px-5 py-2 mb-8">
                <span className="text-base text-black uppercase font-montserrat">
                  {blog.date}
                </span>
              </div>

              {blog.content.map((block, index) => {
                switch (block.type) {
                  case "paragraph":
                    return (
                      <p
                        key={index}
                        className="mb-6 leading-relaxed font-montserrat text-black"
                      >
                        {block.content}
                      </p>
                    );
                  case "heading":
                    return (
                      <h2
                        key={index}
                        className="text-2xl font-bold mt-10 mb-4 font-family-trirong"
                      >
                        {block.content}
                      </h2>
                    );
                  case "image":
                    return (
                      <div key={index} className="w-full mb-8">
                        <img
                          src={block.src}
                          alt={block.alt || "Blog image"}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    );
                  case "list":
                    return (
                      <ul
                        key={index}
                        className="list-disc pl-6 mb-8 space-y-2 font-montserrat"
                      >
                        {block.items?.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </article>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-[#F3F5F5] p-6 md:p-8 sticky top-24">
              <h2
                className="text-xl font-bold mb-4 font-family-trirong"
                style={{ color: "#494B51" }}
              >
                Latest Blogs
              </h2>

              <div className="flex flex-col gap-2">
                {latestBlogs.map((blog) => (
                  <Link
                    key={blog.id}
                    to={`/blog/${blog.id}`}
                    className="w-full px-4 text-center py-3 rounded-sm bg-transparent border border-black hover:bg-black hover:text-white  transition-colors font-montserrat text-base font-medium"
                  >
                    {blog.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[90vw] mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          <div className="lg:col-span-8 flex justify-between items-center">
            {previousPost ? (
              <Link
                to={`/blog/${previousPost.id}`}
                className="flex items-center gap-2 px-6 py-3 bg-transparent text-black transition-colors font-montserrat text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous Post
              </Link>
            ) : (
              <div></div>
            )}
            {nextPost ? (
              <Link
                to={`/blog/${nextPost.id}`}
                className="flex items-center gap-2 px-6 py-3 bg-transparent text-black font-montserrat text-sm"
              >
                Next Post
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>

        <div className="max-w-[90vw] mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 mt-8">
          <div className="max-w-xl mx-auto">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-8">
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
                  <img
                    src="/assets/icons/email.svg"
                    alt="Email"
                    className="w-5 h-5"
                  />
                </button>
              </div>

              <div className="border border-black p-8">
                <h3 className="text-2xl font-medium mb-4 font-family-montserrat">
                  LEAVE A COMMENT
                </h3>
                <p className="text-sm text-gray-600 font-montserrat mb-6">
                  All comments are moderated before being published. This site
                  is protected by reCaptcha and the hCaptcha Privacy Policy and
                  Terms of Service apply.
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
            </div>
          </div>
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
    </div>
  );
};

export default BlogDetail;
