import { gridItems } from "@/lib/features";

export default function GridSection() {
  return (
    <div className="relative flex justify-center bg-red-500 py-24 sm:py-32" id="about">
      <div className="mx-4 bg-background max-w-7xl px-6 lg:px-8 rounded-lg shadow-2xl">
        <div className="p-10 mx-auto max-w-2xl lg:text-center border-b border-gray-500/30">
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance">
            Lo que nos hace únicos
          </h2>
          <p className="mt-6 text-lg/8 text-gray-500">
            En RedPulse, no solo entrenamos, creamos una comunidad. Cada gota de
            sudor cuenta una historia, y cada grito de aliento nos une más.
            Aquí, cada miembro es parte de nuestra familia.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 pb-8">
            {gridItems.map((gridItem) => (
              <div key={gridItem.name} className="relative flex">
                <div className="flex size-10 items-center justify-center mr-6">
                  <gridItem.icon
                    aria-hidden="true"
                    className="size-6 text-red-500"
                  />
                </div>
                <div>
                  <dt className="text-lg font-semibold">{gridItem.name}</dt>
                  <dd className="mt-2 text-base/7 text-gray-500">
                    {gridItem.description}
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
