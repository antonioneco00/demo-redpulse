// import BackgroundImage from "@/components/backgrounds/BackgroundImage";

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-52">
      {/* Imagen de fondo opcional */}
      {/* <BackgroundImage /> */}
      <div className="text-center">
        <h1 className="text-5xl font-semibold font-mono tracking-tight text-balance sm:text-7xl">
          Hello World
        </h1>
        <p className="mt-8 text-lg font-medium font-sans text-pretty text-gray-500 sm:text-xl/8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nunc nec.
        </p>
        {/* Botón opcional. Cambiar py del div padre si no se usa */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
}
