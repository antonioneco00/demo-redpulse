// import BackgroundImage from "@/components/backgrounds/BackgroundImage";

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-2xl py-40 sm:py-52 lg:py-60">
      {/* Imagen de fondo opcional */}
      {/* <BackgroundImage /> */}
      <div className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl text-red-500">
          RedPulse
        </h1>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Entrenamiento funcional en grupo, enfocado en sesiones HIIT, boxeo fitness, y ejercicios con
          peso corporal.
        </p>
      </div>
    </div>
  );
}
