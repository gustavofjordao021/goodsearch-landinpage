import React, { useState } from "react";
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

const Banner = (props) => {
  const [bannerVisibilityState, setBannerVisibilityState] = useState({
    isBannerVisible: true,
  });

  let toggleBannerVisibility = () => {
    setBannerVisibilityState({
      isBannerVisible: false,
    });
  };

  const { isBannerVisible } = bannerVisibilityState;
  const { modalVisibilityToggler } = props;
  return (
    <>
      {isBannerVisible ? (
        <div className="shadow-md bg-green-600 w-full py-3 px-2 sm:px-8 md:mx-4 lg:px-10 xl:w-3/4">
          <div className="flex items-center justify-between">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-green-800">
                <SpeakerphoneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">
                  A better way to search is here!
                </span>
                <span className="hidden md:inline">
                  Big news! We're excited to announce a better way to search.
                </span>
              </p>
            </div>
            <div className="mt-2 flex-shrink-0 w-full sm-2 sm:mt-0 sm:w-auto">
              <button
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-600 bg-white hover:bg-green-50"
                onClick={() => modalVisibilityToggler()}
              >
                Subscribe today
              </button>
            </div>
            <div className="flex-shrink-0 sm-3 sm:ml-3">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                onClick={() => toggleBannerVisibility()}
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Banner;
