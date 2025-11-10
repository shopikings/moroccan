const RememberMeSection = () => {
  return (
    <div className="mb-6">
      <h2 className="mb-3 text-sm font-semibold uppercase text-gray-900 font-family-trirong">
        Remember Me
      </h2>

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="flex items-center gap-3 border-b border-[#DEDEDE] p-6">
          <div className="flex size-6 items-center justify-center rounded bg-gray-600">
            <svg
              className="size-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <span className="text-base font-medium text-gray-700 font-montserrat">
            save my information for a faster checkout with a shop account
          </span>
        </div>

        <div className="bg-[#F4F4F4] p-6">
          <div className="rounded-xl border border-[#DEDEDE] bg-white p-4">
            <div className="flex items-center gap-4">
              <div className="flex size-10 items-center justify-center rounded-lg bg-gray-200">
                <svg
                  className="size-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="mb-2 text-sm text-gray-400 font-montserrat">
                  mobile phone number
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="tel"
                    placeholder=""
                    className="flex-1 border-none bg-transparent text-base font-medium text-gray-600 placeholder:text-gray-400 font-montserrat focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RememberMeSection;
