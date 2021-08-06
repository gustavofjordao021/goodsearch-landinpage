import {
  CashIcon,
  GlobeAltIcon,
  CollectionIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Search the web and earn tokens",
    description:
      "Instead of using other search engines, surf the web through GoodProtocol's search engine which is powered by Google©, get the best results and earn GoodTokens as you go.",
    icon: GlobeAltIcon,
  },
  {
    name: "Vote using your tokens",
    description:
      "GoodProtocol partners with a myriad of partners and projets for good. Pledge tokens and help steer our protocol towards your favorite projects and turn the ad revenue into donations.",
    icon: CollectionIcon,
  },
  {
    name: "Get more tokens as you vote",
    description:
      "GoodProtocol awards its token-holders that help steer the community with more tokens as they vote on different causes and proposals. Helping the community do good is good for you too!",
    icon: CashIcon,
  },
];

const Features = () => {
  return (
    <div
      id="features"
      className="shadow-md bg-gray-50 flex flex-col justify-items-center px-4 py-12 sm:px-8 md:px-14 xl:w-3/4"
    >
      <div className="text-center">
        <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
          How it works
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          A better way to search the web
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Earn tokes while searching the web, and put those tokens to good use
          by investing them on the right projects for good.
        </p>
      </div>
      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Features;
