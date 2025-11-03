import { useState } from "react";
import { Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import CartDrawer from "@/components/cart/CartDrawer";
import MenuDrawer from "@/components/menu/MenuDrawer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  US,
  GB,
  FR,
  DE,
  MA,
  AE,
  SA,
  EG,
  JP,
  CN,
  IN,
  AU,
  CA,
  CH,
  SE,
  NO,
  DK,
  PL,
  TR,
  BR,
  MX,
  AR,
  CL,
  CO,
  PE,
  ZA,
  NG,
  KE,
  IL,
  RU,
  KR,
  SG,
  MY,
  TH,
  ID,
  PH,
  VN,
  NZ,
  HK,
  TW,
} from "country-flag-icons/react/3x2";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const countries = [
    {
      value: "ma",
      code: "MAR",
      name: "Morocco",
      Flag: MA,
      currencySymbol: "د.م.",
    },
    {
      value: "us",
      code: "USA",
      name: "United States",
      Flag: US,
      currencySymbol: "$",
    },
    {
      value: "gb",
      code: "UK",
      name: "United Kingdom",
      Flag: GB,
      currencySymbol: "£",
    },
    { value: "fr", code: "FR", name: "France", Flag: FR, currencySymbol: "€" },
    { value: "de", code: "DE", name: "Germany", Flag: DE, currencySymbol: "€" },
    {
      value: "ae",
      code: "UAE",
      name: "United Arab Emirates",
      Flag: AE,
      currencySymbol: "د.إ",
    },
    {
      value: "sa",
      code: "KSA",
      name: "Saudi Arabia",
      Flag: SA,
      currencySymbol: "﷼",
    },
    { value: "eg", code: "EGY", name: "Egypt", Flag: EG, currencySymbol: "£" },
    { value: "jp", code: "JPN", name: "Japan", Flag: JP, currencySymbol: "¥" },
    { value: "cn", code: "CHN", name: "China", Flag: CN, currencySymbol: "¥" },
    { value: "in", code: "IND", name: "India", Flag: IN, currencySymbol: "₹" },
    {
      value: "au",
      code: "AUS",
      name: "Australia",
      Flag: AU,
      currencySymbol: "$",
    },
    { value: "ca", code: "CAN", name: "Canada", Flag: CA, currencySymbol: "$" },
    {
      value: "ch",
      code: "CHE",
      name: "Switzerland",
      Flag: CH,
      currencySymbol: "CHF",
    },
    {
      value: "se",
      code: "SWE",
      name: "Sweden",
      Flag: SE,
      currencySymbol: "kr",
    },
    {
      value: "no",
      code: "NOR",
      name: "Norway",
      Flag: NO,
      currencySymbol: "kr",
    },
    {
      value: "dk",
      code: "DNK",
      name: "Denmark",
      Flag: DK,
      currencySymbol: "kr",
    },
    {
      value: "pl",
      code: "POL",
      name: "Poland",
      Flag: PL,
      currencySymbol: "zł",
    },
    { value: "tr", code: "TUR", name: "Turkey", Flag: TR, currencySymbol: "₺" },
    {
      value: "br",
      code: "BRA",
      name: "Brazil",
      Flag: BR,
      currencySymbol: "R$",
    },
    { value: "mx", code: "MEX", name: "Mexico", Flag: MX, currencySymbol: "$" },
    {
      value: "ar",
      code: "ARG",
      name: "Argentina",
      Flag: AR,
      currencySymbol: "$",
    },
    { value: "cl", code: "CHL", name: "Chile", Flag: CL, currencySymbol: "$" },
    {
      value: "co",
      code: "COL",
      name: "Colombia",
      Flag: CO,
      currencySymbol: "$",
    },
    { value: "pe", code: "PER", name: "Peru", Flag: PE, currencySymbol: "S/" },
    {
      value: "za",
      code: "ZAF",
      name: "South Africa",
      Flag: ZA,
      currencySymbol: "R",
    },
    {
      value: "ng",
      code: "NGA",
      name: "Nigeria",
      Flag: NG,
      currencySymbol: "₦",
    },
    {
      value: "ke",
      code: "KEN",
      name: "Kenya",
      Flag: KE,
      currencySymbol: "KSh",
    },
    { value: "il", code: "ISR", name: "Israel", Flag: IL, currencySymbol: "₪" },
    { value: "ru", code: "RUS", name: "Russia", Flag: RU, currencySymbol: "₽" },
    {
      value: "kr",
      code: "KOR",
      name: "South Korea",
      Flag: KR,
      currencySymbol: "₩",
    },
    {
      value: "sg",
      code: "SGP",
      name: "Singapore",
      Flag: SG,
      currencySymbol: "$",
    },
    {
      value: "my",
      code: "MYS",
      name: "Malaysia",
      Flag: MY,
      currencySymbol: "RM",
    },
    {
      value: "th",
      code: "THA",
      name: "Thailand",
      Flag: TH,
      currencySymbol: "฿",
    },
    {
      value: "id",
      code: "IDN",
      name: "Indonesia",
      Flag: ID,
      currencySymbol: "Rp",
    },
    {
      value: "ph",
      code: "PHL",
      name: "Philippines",
      Flag: PH,
      currencySymbol: "₱",
    },
    {
      value: "vn",
      code: "VNM",
      name: "Vietnam",
      Flag: VN,
      currencySymbol: "₫",
    },
    {
      value: "nz",
      code: "NZL",
      name: "New Zealand",
      Flag: NZ,
      currencySymbol: "$",
    },
    {
      value: "hk",
      code: "HKG",
      name: "Hong Kong",
      Flag: HK,
      currencySymbol: "$",
    },
    { value: "tw", code: "TWN", name: "Taiwan", Flag: TW, currencySymbol: "$" },
  ];

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

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src="/assets/logo.svg"
            alt="Moroccan Logo"
            className="h-12 w-auto"
          />
        </div>

        <div className="flex items-center space-x-4 pr-5">
          <Select defaultValue="ma">
            <SelectTrigger className="w-auto border-0 bg-transparent shadow-none focus:ring-0 px-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="max-h-[300px] overflow-y-auto">
              {countries.map((country) => (
                <SelectItem key={country.value} value={country.value}>
                  <div className="flex items-center space-x-2">
                    <country.Flag className="w-5 h-4" />
                    <span className="font-montserrat text-sm font-medium">
                      {country.code} {country.currencySymbol}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Separator orientation="vertical" className="h-6 bg-black" />

          <div className="flex items-center space-x-3">
            <button className="p-1 cursor-pointer hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
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
            <button className="p-1 cursor-pointer hover:bg-gray-100 rounded-full transition-colors">
              <img
                src="/assets/icons/person.svg"
                alt="User"
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
