import {
  CashIcon,
  GlobeAltIcon,
  CollectionIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Search the web",
    description:
      "Instead of using other search engines, navigate the web through Goodsearch engine which is powered by Google© and get the best results.",
    icon: GlobeAltIcon,
  },
  {
    name: "Earn tokens from your searches",
    description:
      "As you navigate and click on sponsored results, the revenue generated from advertisers is transformed into tokens straight into your Goodwallet©.",
    icon: CollectionIcon,
  },
  {
    name: "Pledge tokens to your favorite causes",
    description:
      "Goodsearch partners with a myriad of partners and projets for good. You can pledge tokens to your favorite projects, which then gets converted into a donation.",
    icon: CashIcon,
  },
];

const Features = () => {
  return (
    <div className="bg-white flex flex-col justify-items-center w-full mx-4 px-4 py-12 sm:px-8 md:mx-4 lg:px-10 xl:w-6/12">
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
