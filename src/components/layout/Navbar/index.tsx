import { useState } from "react";
import { Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import CartDrawer from "@/components/cart/CartDrawer";
import MenuDrawer from "@/components/menu/MenuDrawer";
import CountrySelector from "@/components/common/CountrySelector";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-background border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between max-w-8xl mx-auto">
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center space-x-2 cursor-pointer "
        >
          <button className="flex flex-col justify-center items-center w-6 h-6 space-y-1">
            <div
              className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 origin-center ${
                isMenuOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            ></div>
            <div
              className={`w-5 h-0.5 bg-gray-800 transition-all duration-300 origin-center ${
                isMenuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            ></div>
          </button>
          <span className="font-montserrat text-sm font-medium text-gray-800 ml-2">
            MENU
          </span>
        </div>

        <div
          className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/assets/logo.svg"
            alt="Moroccan Logo"
            className="h-12 w-auto"
          />
        </div>

        <div className="flex items-center space-x-4 pr-5">
          <CountrySelector triggerClassName="w-auto border-0 bg-transparent shadow-none focus:ring-0 px-2" />

          <Separator orientation="vertical" className="h-6 bg-black" />

          <div className="flex items-center space-x-3">
            <button className="p-1 cursor-pointer hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-1 cursor-pointer hover:bg-gray-100 rounded-full transition-colors">
              <img
                src="/assets/icons/person.svg"
                alt="User"
                className="w-5 h-5"
              />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-1 cursor-pointer hover:bg-gray-100 rounded-full transition-colors"
            >
              <img
                src="/assets/icons/cart.svg"
                alt="Cart"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>
      <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
};

export default Navbar;
