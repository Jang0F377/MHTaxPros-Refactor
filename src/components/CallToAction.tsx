const CallToAction = () => {
  return (
    <div className=" ">
      <div className="relative mx-auto max-w-md px-4  sm:px-6 lg:max-w-7xl  lg:px-8 ">
        <div className="relative rounded-2xl px-3 py-5 bg-money-green-complimentary overflow-hidden shadow-xl sm:px-6 sm:py-10 ">
          <div
            aria-hidden="true"
            className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
          >
            <svg
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1463 360"
            >
              <path
                className="text-complimentary-color-husband opacity-75"
                fill="currentColor"
                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
              />
              <path
                className="text-complimentary-color-wife opacity-75 "
                fill="currentColor"
                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
              />
            </svg>
          </div>
          <div className="relative">
            <div className="lg:max-w-7xl  mx-auto text-center px-4 lg:py-4 lg:px-4 rounded">
              <h2 className="text-4xl font-extrabold text-[#ECA72C]  p-1 m-1 sm:text-6xl">
                <span className="block">$ $</span>
                <span className="block text-5xl sm:text-7xl rotate-90">)</span>
              </h2>
              <h2 className="text-3xl font-extrabold text-white p-2 m-2 sm:text-4xl">
                <span className="block">
                  Check on your refund status right here!
                </span>
              </h2>
              <div className="mt-8 flex justify-evenly">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-2.5 py-1.5 md:px-5 md:py-3
                                        border border-transparent text-base font-semibold rounded-md text-white bg-indigo-700
                                        hover:bg-platinum hover:text-money-green-complimentary hover:ring-2 hover:ring-money-green "
                  >
                    Check Refund Status
                  </a>
                </div>
                <div className="ml-3 inline-flex">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-2.5 py-1.5 md:px-5 md:py-3
                                        border border-transparent text-base font-semibold rounded-md text-white bg-indigo-700
                                        hover:bg-platinum hover:text-money-green-complimentary hover:ring-2 hover:ring-money-green"
                  >
                    Check Amended Status
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center mt-3 lg:mt-6 ">
                <p className="flex  mx-auto text-sm ">
                  Please note the IRS continues to experience delays in
                  processing please check
                </p>
                <a
                  className="inline-flex items-center justify-center px-2.5 py-1.5 z-50
                                          text-base font-semibold  text-blue-500
                                        hover:text-blue-800 underline"
                  target="_blank"
                  href="https://www.irs.gov/newsroom/irs-operations-during-covid-19-mission-critical-functions-continue"
                  rel="noreferrer"
                >
                  <p>Here</p>
                </a>

                <p className="flex flex-wrap mx-auto text-sm ">
                  for Operations status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
