import { gridItems } from "@/lib/features";

export default function GridSection() {
  return (
    <div className="py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance">
            Lo que nos hace únicos
          </h2>
          <p className="mt-6 text-lg/8 text-gray-500">
            En RedPulse, no solo entrenamos, creamos una comunidad. Cada gota de sudor cuenta una historia, y cada grito de aliento nos une más. Aquí, cada miembro es parte de nuestra familia.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {gridItems.map((gridItem) => (
              <div key={gridItem.name} className="relative pl-16">
                <dt className="text-lg font-semibold">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center">
                    <gridItem.icon
                      aria-hidden="true"
                      className="size-6 text-red-500"
                    />
                  </div>
                  {gridItem.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-500">
                  {gridItem.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
