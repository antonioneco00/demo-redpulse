import { CheckIcon } from "@heroicons/react/20/solid";

export default function PricingSection() {
  const tiers = [
    {
      name: "Plan 1",
      description: "Morbi viverra dui mi arcu sed.",
      price: "$29",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      name: "Plan 2",
      description: "Nullam auctor, nunc nec.",
      price: "$69",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
    {
      name: "Plan 3",
      description: "Quisque est vel vulputate cursus.",
      price: "$99",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
        "Feature 6",
      ],
    },
  ];

  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8" id="pricing">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-500">Pricing</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          Choose the right plan for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
        nunc nec. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 lg:max-w-6xl lg:grid-cols-3 gap-x-8">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="relative flex h-full flex-col shadow-2xl rounded-3xl p-8 ring-1 ring-gray-900/10 dark:ring-indigo-400/40 sm:p-10"
          >
            <h3 className="text-indigo-400 text-base/7 font-semibold">
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight">
                {tier.price}
              </span>
              {/* <span className="text-base">/month</span> */}
            </p>
            <p className="mt-6 text-base/7">{tier.description}</p>
            <ul role="list" className="my-4 space-y-3 text-sm/6 sm:my-6">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="text-indigo-400 h-6 w-5 flex-none"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            {/* <a
              href="#"
              className="mt-auto bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Get started today
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
}
