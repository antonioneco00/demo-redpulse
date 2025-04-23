import { gridItems } from "@/lib/features";

export default function GridSection() {
  return (
    <div className="py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-500">
            Optional Text
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance">
            Grid Features
          </p>
          <p className="mt-6 text-lg/8 text-gray-500">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
            {gridItems.map((item) => (
              <div key={item.name} className="flex md:inline">
                <div className="flex size-14 min-w-14 self-center items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-950 md:mb-4 mx-4 md:mx-0">
                  <item.icon
                    aria-hidden="true"
                    className="size-10 text-indigo-600 dark:text-indigo-400"
                  />
                </div>
                <div>
                  <dt className="text-2xl font-semibold">{item.name}</dt>
                  <dd className="mt-2 text-base/7 text-gray-500">
                    {item.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
