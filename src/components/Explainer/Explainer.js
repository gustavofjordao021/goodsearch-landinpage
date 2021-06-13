import ExplainerImage from "../../img/explainer.png";

import { CurrencyDollarIcon } from "@heroicons/react/outline";

const Explainer = () => {
  return (
    <div
      id="token"
      class="bg-white text-gray-600 max-w-7xl w-screen shadow-md container px-4 mx-4 lg:px-12 lg:mx-12 py-24 flex flex-wrap xl:w-6/12"
    >
      <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img
          alt="feature"
          class="object-cover object-center h-full w-full"
          src={ExplainerImage}
        />
      </div>
      <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 ">
        <div class="flex flex-col mb-10 lg:items-start items-center">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-500 text-white mb-5">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <CurrencyDollarIcon />
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3 lg:text-left text-center">
              A token for good set on good standards
            </h2>
            <p class="leading-relaxed text-base">
              GoodToken is an ERC-20 token and follows the emerging technical
              standard of tokens being built on top of the Ethereum network. As
              such, GoodToken can be stored on a blockchain as an asset that has
              value and can be sent and received throughout the Ethereum
              network.
            </p>
            <p class="leading-relaxed text-base mt-3">
              This provides an incentive for our users to maintain our protocol
              through good behavior, and a line to raise additional funds for
              the causes proposed by the community.
            </p>
            <button class="mt-3 text-green-500 inline-flex items-center">
              See more on ERC-20 tokens
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explainer;
