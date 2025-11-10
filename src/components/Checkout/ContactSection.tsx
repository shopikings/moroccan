const ContactSection = () => {
  return (
    <div className="mb-10">
      <h2 className="mb-3 text-xl font-bold uppercase text-gray-900 font-family-trirong">
        Contact
      </h2>
      <input
        type="email"
        placeholder="Email or mobile phone number"
        className="w-full bg-white rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#707070] font-montserrat focus:border-2 focus:border-[#7F7F7F] focus:outline-none"
      />
      <div className="mt-3 flex items-center gap-2">
        <input
          type="checkbox"
          id="newsletter"
          className="size-3 bg-white rounded border-gray-300"
        />
        <label
          htmlFor="newsletter"
          className="text-xs text-gray-900 font-montserrat"
        >
          email me with news and offers
        </label>
      </div>
    </div>
  );
};

export default ContactSection;
