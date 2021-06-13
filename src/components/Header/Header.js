import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  CollectionIcon,
  CurrencyDollarIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";

import Logo from "../../logo.png";

const solutions = [
  {
    name: "Features",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#features",
    icon: CollectionIcon,
  },
  {
    name: "GoodToken©",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#token",
    icon: CurrencyDollarIcon,
  },
];

const Header = (props) => {
  const { modalVisibilityToggler } = props;
  return (
    <Popover className="flex flex-row flex-grow w-screen bg-white max-w-7xl px-8 py-6 justify-between items-center border-b-2 border-gray-100  md:px-14 md:justify-start xl:w-6/12">
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
            <p className="absolute top-8 left-20 text-md tracking-tight font-extrabold text-gray-900 lg:top-10 lg:left-28">
              The GoodProtocol
            </p>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a
              href="#features"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Features
            </a>
            <a
              href="#token"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              GoodToken©
            </a>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:bg-green-500"
              onClick={() => modalVisibilityToggler()}
            >
              Subscribe
            </button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-10 w-auto"
                        src={Logo}
                        alt="GoodProtocol"
                      />
                      <p className="absolute top-10 left-20 text-md tracking-tight font-extrabold text-gray-900 lg:top-10 lg:left-28">
                        The GoodProtocol
                      </p>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-green-600"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div>
                    <button
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:bg-green-500"
                      onClick={() => modalVisibilityToggler()}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Header;
