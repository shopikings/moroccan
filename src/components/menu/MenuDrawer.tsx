import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuDrawer = ({ isOpen, onClose }: MenuDrawerProps) => {
  const menuItems = [
    { label: "New Arrivals", link: "/shop?category=new-arrivals" },
    { label: "Clearance Sale", link: "/shop?category=clearance-sale" },
    { label: "Caftans", link: "/shop?category=caftans" },
    { label: "Luxe", link: "/shop?category=luxe" },
    { label: "Bridal", link: "/shop?category=bridal" },
    { label: "Gents - Thobe", link: "/shop?category=gents-thobe" },
    { label: "Accessories", link: "/shop?category=accessories" },
    { label: "Look Book", link: "/shop?category=look-book" },
    {
      label: "Moroccan Skincare",
      link: "https://moroccanglow.co.uk/",
      external: true,
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/Morocanglam",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/moroccan_glam",
      label: "Instagram",
    },
    {
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
        </svg>
      ),
      href: "https://uk.pinterest.com/Moroccan_Glam",
      label: "Pinterest",
    },
    {
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
      href: "https://www.tiktok.com/@moroccan.glam",
      label: "TikTok",
    },
  ];
  return (
    <>
      <div
        className={`fixed top-[80px] md:top-[100px] left-0 h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] w-full sm:w-[400px] bg-[#F7F6F0] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-3 min-h-full p-8">
          <nav className="flex-1">
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.external ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-fahkwang text-2xl md:text-3xl font-medium text-gray-900 hover:text-gray-600 transition-colors block"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.link}
                      onClick={onClose}
                      className="font-fahkwang text-2xl md:text-3xl font-medium text-gray-900 hover:text-gray-600 transition-colors block"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <a
                href="#"
                className="font-montserrat text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors block pb-5"
              >
                Online Designer Consultation
              </a>
              <Separator className="w-full border border-gray-500" />
            </div>
          </nav>

          <div className="flex justify-center items-center gap-4 w-full">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
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
    </>
  );
};

export default MenuDrawer;
