const CTA = (props) => {
  const { modalVisibilityToggler } = props;
  return (
    <div className="shadow-md bg-gray-50 w-full flex flex-col text-center items-center py-12 mx-4 px-4 sm:px-8 md:flex-row md:text-left lg:px-12 lg:flex lg:items-center lg:justify-between xl:w-3/4">
      <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
        <span className="block">Ready to start earning?</span>
        <span className="block text-green-600">
          Subscribe to our updates today.
        </span>
      </h2>
      <div className="mt-8 flex justify-center w-full lg:mt-0 sm:w-auto lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <button
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            onClick={() => modalVisibilityToggler()}
          >
            Subscribe now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
