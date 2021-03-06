import Form from "../Form/Form";

const Hero = (props) => {
  const { modalVisibilityToggler } = props;
  return (
    <>
      <div className="max-w-8xl w-screen flex flex-col-reverse justify-center flex-grow bg-white min-h-full lg:flex lg:flex-row-reverse lg:items-center lg:justify-center xl:w-3/4 xl:shadow-md">
        <Form />
        <div className="min-h-full">
          <div className="relative pb-6 bg-white lg:w-full">
            <main className="my-5 max-w-7xl px-4 sm:my-12 md:mx-10 md:my-14 lg:my-18 xl:mt-28">
              <div className="max-w-xl sm:text-center lg:text-left">
                <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Do good with every</span>
                  <span className="block text-green-600 xl:inline">
                    {" "}
                    search you make.
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Earn tokens for every search you make and apply them towards
                  different projects with a sole goal:{" "}
                  <span className="relative inline-block">
                    <span className="z-20 relative font-bold text-gray-700">
                      do good.
                    </span>
                    <div className="bg-green-300 absolute w-full h-2 bottom-0.5 z-10"></div>
                  </span>
                </p>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:block md:mt-4 md:text-xl lg:mx-0">
                  GoodProtocol works with advertisers to generate revenue on
                  every search, and award its users GoodTokens so they can pick{" "}
                  <span className="relative inline-block">
                    <span className="z-20 relative font-bold text-gray-700">
                      which projects they want to back.
                    </span>
                    <div className="bg-green-300 absolute w-full h-2 bottom-0.5 z-10"></div>
                  </span>
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                      onClick={() => modalVisibilityToggler()}
                    >
                      Subscribe now!
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
