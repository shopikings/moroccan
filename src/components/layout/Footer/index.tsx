import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import CountrySelector from "@/components/common/CountrySelector";

const Footer = () => {
  const usefulLinks = [
    "Account",
    "Help & FAQs",
    "Shipping & Delivery",
    "Returns & Exchanges",
    "Size Guide",
    "Online Design Consultation",
  ];

  const brandLinks = [
    { label: "About Us", href: "/about" },
    { label: "Rewards", href: "#" },
    { label: "Affiliate Program", href: "#" },
    { label: "Moroccan Skincare", href: "#" },
    { label: "Blogs", href: "#" },
  ];

  const policyLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Shipping Policy",
    "Refund Policy",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    {
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
        </svg>
      ),
      href: "#",
      label: "Pinterest",
    },
    { icon: Youtube, href: "#", label: "YouTube" },
    {
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
      href: "#",
      label: "TikTok",
    },
  ];

  return (
    <footer className="w-full bg-[#F7F6F0] border-t border-gray-200">
      <div className="w-full px-20 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-12 font-montserrat text-xs">
          <div className="lg:col-span-2">
            <h3 className="mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-950 hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4">Brand</h3>
            <ul className="space-y-2">
              {brandLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="text-gray-950 hover:underline"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-950 hover:underline"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4">Policies</h3>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-950 hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="mb-4">Newsletter</h3>
            <p className="text-gray-950 mb-4">
              Join the VIP crew to get exclusive fit access to sales, drops &
              more.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="E-mail"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm font-fahkwang focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
              />
              <Button className="px-3 py-1 bg-black text-white rounded-full text-xs font-montserrat font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="font-fahkwang text-xs text-gray-500 mt-2">
              By signing up to our newsletter, you agree with our privacy policy
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4">About</h3>
            <p className="text-gray-950">
              Moroccan Glam is a modern modest fashion brand dedicated to
              timeless, sustainable designs that empower women to feel
              confident, beautiful, and authentic. Each piece is thoughtfully
              crafted with ethical practices and inspired simplicity at its
              core.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <CountrySelector triggerClassName="w-auto border-0 bg-transparent shadow-none focus:ring-0 px-0 text-sm font-fahkwang text-gray-600" />
          </div>

          <div className="font-montserrat text-center text-black mb-4 md:mb-0">
            <p className=" text-xs">
              © 2025 All Rights Reserved Moroccan Glam®
            </p>
            <p className="text-xs">
              Powered By{" "}
              <a
                href="https://shopikings.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-700 transition-colors"
              >
                Shopikings.com
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label={social.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
