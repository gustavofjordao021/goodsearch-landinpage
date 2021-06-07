const CTA = (props) => {
  const { modalVisibilityToggler } = props;
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl py-12 mx-4 px-4 sm:px-8 lg:px-12 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          <span className="block">Ready to start earning?</span>
          <span className="block text-indigo-600">Subscribe to our updates today.</span>
        </h2>
        <div className="mt-8 flex justify-center w-full lg:mt-0 sm:w-auto lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <button
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              onClick={() => modalVisibilityToggler()}
            >
              Subscribe now!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA;