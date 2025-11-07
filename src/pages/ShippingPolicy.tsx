const ShippingPolicy = () => {
  return (
    <div className="w-full bg-[#F7F6F0] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <h1 className="text-5xl font-family-trirong mb-2">
          Shipping & Delivery Policy
        </h1>
        <p className="text-sm text-gray-600 font-montserrat mb-8">
          Last Updated: December 2022
        </p>

        <div className="space-y-6 text-gray-700 font-montserrat text-sm leading-relaxed">
          <p className="bg-gray-100 p-4 rounded">
            <strong>Please note:</strong> While our delivery partners continue
            to operate as normal, some delays may occur due to exceptionally
            high demand. We appreciate your patience and understanding.
          </p>

          <div className="pt-4">
            <h2 className="text-base font-semibold font-family-trirong mb-3">
              Our Commitment to Fast Delivery
            </h2>
            <p className="mb-3">
              At Moroccan Glam, we strive to deliver your orders as quickly and
              efficiently as possible.
            </p>
            <p className="mb-3">
              Orders placed before 1 PM (Monday to Friday) are typically
              dispatched the same day. During peak seasons or busy periods,
              please allow 1–2 business days for dispatch.
            </p>
            <p>
              All orders are shipped using a tracked and signed-for delivery
              service to ensure secure delivery and proof of receipt.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base font-semibold font-family-trirong mb-3">
              Delivery Times & Charges
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-montserrat border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-3 pr-4 font-semibold">
                      Location
                    </th>
                    <th className="text-left py-3 px-4 font-semibold">
                      Estimated Delivery Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4">UK Mainland</td>
                    <td className="py-3 px-4">3 – 5 working days</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4">Northern Ireland</td>
                    <td className="py-3 px-4">3 – 5 working days</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4">Europe & Ireland</td>
                    <td className="py-3 px-4">3 – 10 working days</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4">USA & Canada</td>
                    <td className="py-3 px-4">3 – 10 working days</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Rest of the World</td>
                    <td className="py-3 px-4">3 – 10 working days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              If you require urgent delivery, please reach out to us at{" "}
              <a
                href="mailto:hello@moroccan-glam.com"
                className="hover:underline"
              >
                hello@moroccan-glam.com
              </a>{" "}
              — we'll do our best to arrange an expedited shipping option.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base font-semibold font-family-trirong mb-3">
              Customs & Import Duties
            </h2>
            <p className="mb-3">
              For international orders, customs or import duties may apply once
              your package reaches the destination country.
            </p>
            <p className="mb-3">
              These charges are the responsibility of the recipient and are not
              included in our shipping fees.
            </p>
            <p>
              Unfortunately, we have no control over these costs and cannot
              estimate them in advance. Please also note that customs
              inspections may cause delays beyond our control.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base font-semibold font-family-trirong mb-3">
              Change of Delivery Address
            </h2>
            <p className="mb-3">
              Once an order has been placed, we are unable to modify the
              delivery address.
            </p>
            <p>
              If you need to make changes after purchase, please contact the
              courier service directly once your tracking information is
              available. For further assistance, you can reach us at{" "}
              <a
                href="mailto:hello@moroccan-glam.com"
                className="hover:underline"
              >
                hello@moroccan-glam.com
              </a>
              .
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base font-semibold font-family-trirong mb-3">
              Need Help?
            </h2>
            <p>
              If you have any questions or concerns about your delivery, please
              don't hesitate to contact our support team at{" "}
              <a
                href="mailto:hello@moroccan-glam.com"
                className="hover:underline"
              >
                hello@moroccan-glam.com
              </a>
              . We're always happy to help!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
