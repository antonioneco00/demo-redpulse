import { tiers } from "@/lib/products";

export default function PricingSection() {
  return (
    <div
      className="relative overflow-hidden isolate px-6 py-24 sm:py-32 lg:px-8"
      id="pricing"
    >
      <div className="absolute top-0 left-0">
        <svg
          viewBox="0 0 924 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-screen -scale-100"
        >
          <path d="M924 0L7.52602e-06 20H924V0Z" fill="var(--color-red-500)" />
        </svg>
      </div>
      <div className="absolute -bottom-[1px]">
        <svg
          viewBox="0 0 924 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-screen"
        >
          <path d="M924 0L7.52602e-06 20H924V0Z" fill="var(--color-neutral-600)" />
        </svg>
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-red-500">Precios</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
          Nuestros Precios
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        En RedPulse, cada sesión es una experiencia única. Nuestros precios
        reflejan la calidad y dedicación que ofrecemos en cada entrenamiento.
        ¡Únete a nosotros y descubre la diferencia!
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 sm:grid-cols-2 items-center gap-y-6 sm:mt-20 lg:max-w-7xl xl:grid-cols-4 gap-x-8">
        {tiers.map((tier, key) => (
          <div
            key={key}
            className={`relative bg-background flex h-full flex-col shadow-2xl dark:shadow-red-500 p-8 rounded-lg ring-1 ${
              tier.free ? "ring-red-500" : "ring-gray-500/60"
            } sm:p-10`}
          >
            <h3 className="text-red-500 text-base/7 font-semibold">
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight">
                {tier.price}
              </span>
            </p>
            {tier.bonus && (
              <h3 className="text-red-500 text-base/7 font-semibold">
                {tier.bonus}
              </h3>
            )}
            <p className="mt-auto text-base/7">{tier.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
