const RefundPolicy = () => {
  return (
    <div className="w-full bg-[#F7F6F0] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <h1 className="text-5xl font-family-trirong mb-8">Refund Policy</h1>

        <div className="space-y-6 text-gray-700 font-montserrat text-sm leading-relaxed">
          <p>
            At Moroccan Glam, we want you to be completely satisfied with your
            purchase. If for any reason you're not, we offer a 28-day return
            policy. This means you have 28 days from the date of receiving your
            order to request a return.
          </p>

          <div className="pt-4">
            <h2 className="text-base font-semibold font-family-trirong mb-3">
              Eligibility for Returns
            </h2>
            <p className="mb-2">To qualify for a return, your item must:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>Be in the same condition as when received.</li>
              <li>Be unworn or unused, with tags attached.</li>
              <li>Be returned in its original packaging.</li>
              <li>Include the receipt or proof of purchase.</li>
            </ul>
            <p className="mb-3">
              To initiate a return, please contact us at{" "}
              <a
                href="mailto:hello@moroccanglam.com"
                className="hover:underline"
              >
                hello@moroccanglam.com
              </a>
              . If your request is approved, we'll provide you with a return
              shipping label and detailed instructions. Please note that items
              sent back without prior approval will not be accepted.
            </p>
            <p>
              You may contact us at any time with questions regarding returns at{" "}
              <a
                href="mailto:hello@moroccanglam.com"
                className="hover:underline"
              >
                hello@moroccanglam.com
              </a>
              .
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base font-semibold font-family-trirong mb-3">
              Damages and Issues
            </h2>
            <p>
              Please inspect your order upon delivery. If your item is
              defective, damaged, or if you received the wrong product, contact
              us immediately so we can evaluate the issue and make it right.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base font-semibold font-family-trirong mb-3">
              Exceptions and Non-Returnable Items
            </h2>
            <p className="mb-2">
              Certain items are not eligible for return, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>Perishable goods (e.g., food, flowers, plants)</li>
              <li>Custom or personalized products</li>
              <li>Personal care items (e.g., beauty or hygiene products)</li>
              <li>Hazardous materials, flammable liquids, or gases</li>
            </ul>
            <p>
              Additionally, sale items and gift cards cannot be returned. If
              you're unsure whether your item qualifies for return, please reach
              out to us for clarification.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base font-semibold font-family-trirong mb-3">
              Exchanges
            </h2>
            <p>
              The fastest way to receive a replacement item is to return your
              current item. Once your return is accepted, you can place a new
              order for the desired product.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base font-semibold font-family-trirong mb-3">
              European Union 14-Day Cooling-Off Period
            </h2>
            <p>
              If your order is being shipped to the European Union, you have the
              right to cancel or return your purchase within 14 days, for any
              reason and without justification. The returned item must meet the
              same conditions outlined above.
            </p>
          </div>

          <div className="pt-4">
            <h2 className="text-base font-semibold font-family-trirong mb-3">
              Refunds
            </h2>
            <p className="mb-3">
              Once we receive and inspect your return, we'll notify you of the
              approval status. If approved, your refund will be issued to your
              original payment method within 10 business days. Please note that
              processing times may vary depending on your bank or payment
              provider.
            </p>
            <p>
              If more than 15 business days have passed since your refund was
              approved and you haven't received your refund, please contact us
              at{" "}
              <a
                href="mailto:hello@moroccanglam.com"
                className="hover:underline"
              >
                hello@moroccanglam.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
