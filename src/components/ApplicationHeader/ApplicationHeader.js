import React from "react";
import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";

import Logo from "../../img/logo.png";

const ApplicationHeader = (props) => {
  const { pushToApplication } = props;

  return (
    <Popover className="flex flex-row flex-grow w-screen bg-white max-w-8xl px-8 py-6 justify-between items-center border-b-2 border-gray-100 shadow-md md:px-14 md:justify-start xl:w-3/4">
      {({ open }) => (
        <>
          <div className="flex flex-row align-middle justify-start lg:w-0 lg:flex-1 text-black">
            <a href="/">
              <span className="sr-only">GoodProtocol</span>
              <img
                className="h-8 w-auto sm:h-10 text-green-500"
                src={Logo}
                alt="logo"
              />
            </a>
            <p className="absolute top-8 left-20 text-md tracking-tight font-extrabold text-gray-900 lg:top-10 lg:left-28 xl:hidden">
              The GoodProtocol
            </p>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button
              className="mr-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-gray-100 rounded-md shadow-sm text-base font-medium text-green-600 bg-white hover:bg-gray-100 focus:bg-gray-100"
              onClick={() => pushToApplication()}
            >
              Connect wallet
            </button>
          </div>
        </>
      )}
    </Popover>
  );
};

export default ApplicationHeader;
