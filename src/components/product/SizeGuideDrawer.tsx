import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface SizeGuideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const SizeGuideDrawer = ({ isOpen, onClose }: SizeGuideDrawerProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-2xl bg-[#F7F6F0] [&>button]:hidden overflow-y-auto"
      >
        <SheetHeader className="border-b border-gray-300 pb-4">
          <div className="flex items-center justify-between">
            <button onClick={onClose} className="p-1 cursor-pointer">
              <img
                src="/assets/icons/close-rounded.svg"
                alt="Close"
                className="w-6 h-6"
              />
            </button>
            <SheetTitle className="text-4xl font-normal font-cormorant">
              Size Guide
            </SheetTitle>
            <div className="w-6"></div>
          </div>
        </SheetHeader>

        <div className="py-6 space-y-6">
          <div className="space-y-4 text-gray-700 font-family-trirong text-sm leading-relaxed">
            <p>
              Our size guide is an indication of where your measurements should
              roughly place in relation to our items, however it is not a true
              reflection of all our garments for they each have individual
              specs. The number mentioned in the description of half way across
              the bust size. This is the most important as most caftans are very
              flowy and specials at the bottom half.
            </p>
            <p>
              Some of the caftans can still look great on a bigger size as they
              all need to be worn mostly with belts and cinching in at the waist
              does not appear larger in size.
            </p>
            <p>
              We are always looking to bring out new designs and materials, this
              may affect the wear of our garments as well! If ever unsure about
              the sizes feel free to contact us on hello@moroccan-glam.com
            </p>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <h3 className="text-lg font-medium font-family-trirong mb-4">
              Size Guide: Dresses
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm font-montserrat">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 pr-4 font-semibold">SIZE</th>
                    <th className="text-left py-3 px-4 font-semibold">XXS</th>
                    <th className="text-left py-3 px-4 font-semibold">XS</th>
                    <th className="text-left py-3 px-4 font-semibold">S</th>
                    <th className="text-left py-3 px-4 font-semibold">M</th>
                    <th className="text-left py-3 px-4 font-semibold">L</th>
                    <th className="text-left py-3 px-4 font-semibold">XL</th>
                    <th className="text-left py-3 px-4 font-semibold">XXL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-semibold">AU SIZE</td>
                    <td className="py-3 px-4">4</td>
                    <td className="py-3 px-4">6</td>
                    <td className="py-3 px-4">8</td>
                    <td className="py-3 px-4">10</td>
                    <td className="py-3 px-4">12</td>
                    <td className="py-3 px-4">14</td>
                    <td className="py-3 px-4">16</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-semibold">US SIZE</td>
                    <td className="py-3 px-4">0</td>
                    <td className="py-3 px-4">2</td>
                    <td className="py-3 px-4">4</td>
                    <td className="py-3 px-4">6</td>
                    <td className="py-3 px-4">8</td>
                    <td className="py-3 px-4">10</td>
                    <td className="py-3 px-4">12</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-semibold">UK SIZE</td>
                    <td className="py-3 px-4">4</td>
                    <td className="py-3 px-4">6</td>
                    <td className="py-3 px-4">8</td>
                    <td className="py-3 px-4">10</td>
                    <td className="py-3 px-4">12</td>
                    <td className="py-3 px-4">14</td>
                    <td className="py-3 px-4">16</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-semibold">EU SIZE</td>
                    <td className="py-3 px-4">32</td>
                    <td className="py-3 px-4">34</td>
                    <td className="py-3 px-4">36</td>
                    <td className="py-3 px-4">38</td>
                    <td className="py-3 px-4">40</td>
                    <td className="py-3 px-4">42</td>
                    <td className="py-3 px-4">44</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-semibold">Bust (cm)</td>
                    <td className="py-3 px-4">38</td>
                    <td className="py-3 px-4">40</td>
                    <td className="py-3 px-4">43</td>
                    <td className="py-3 px-4">46</td>
                    <td className="py-3 px-4">48</td>
                    <td className="py-3 px-4">50</td>
                    <td className="py-3 px-4">53</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 font-semibold">Waist (cm)</td>
                    <td className="py-3 px-4">60</td>
                    <td className="py-3 px-4">63</td>
                    <td className="py-3 px-4">68</td>
                    <td className="py-3 px-4">73</td>
                    <td className="py-3 px-4">78</td>
                    <td className="py-3 px-4">83</td>
                    <td className="py-3 px-4">88</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold">Hips (cm)</td>
                    <td className="py-3 px-4">88</td>
                    <td className="py-3 px-4">91</td>
                    <td className="py-3 px-4">96</td>
                    <td className="py-3 px-4">101</td>
                    <td className="py-3 px-4">106</td>
                    <td className="py-3 px-4">111</td>
                    <td className="py-3 px-4">116</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SizeGuideDrawer;
