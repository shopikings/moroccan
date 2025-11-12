import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductAccordions = () => {
  return (
    <div className="mt-20 md:mt-32">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem
          value="description"
          className="border-t border-b border-gray-300 bg-transparent"
        >
          <AccordionTrigger className="text-sm font-normal font-montserrat text-black hover:no-underline py-4">
            Description
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm font-montserrat text-black pb-4">
              <p>
                Our Printed Modal Hijabs are crafted from our ultra-soft modal
                fabric for unmatched comfort and elegance. Featuring must-have
                prints that blend timeless charm with modern trends, these
                hijabs are designed to elevate your modest wardrobe
                effortlessly.
              </p>
              <p>
                Find your perfect length with our regular, short, mini and long
                options.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="features"
          className="border-b border-gray-300 bg-transparent"
        >
          <AccordionTrigger className="text-sm font-normal font-montserrat text-black hover:no-underline py-4">
            Features
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm font-montserrat text-black pb-4">
              <div>
                <p className="mb-2">Features</p>
                <p className="mb-2">Features:</p>
                <ul className="space-y-1">
                  <li>- Light Weight</li>
                  <li>- Extremely soft</li>
                  <li>- Sheer</li>
                  <li>- Non-slip</li>
                  <li>- 100% modal rayon</li>
                  <li>- Can be prone to wrinkles</li>
                </ul>
              </div>
              <p>
                We try our best to ensure an exact color match, however please
                be aware that there may be slight differences in color due to
                monitor, screen, brightness and resolution differences.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductAccordions;
