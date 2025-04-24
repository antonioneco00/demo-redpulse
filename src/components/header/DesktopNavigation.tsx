import { PopoverGroup } from "@headlessui/react";
import Link from "next/link";

export default function DesktopNavigation() {
  return (
    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
      <Link
        href="#"
        className="text-md hover:text-red-400 font-semibold transition-colors duration-500"
      >
        Inicio
      </Link>
      <Link
        href="#about"
        className="text-md hover:text-red-400 font-semibold transition-colors duration-500"
      >
        Sobre Nosotros
      </Link>
      <Link
        href="#pricing"
        className="text-md hover:text-red-400 font-semibold transition-colors duration-500"
      >
        Precios
      </Link>
      <Link
        href="#footer"
        className="text-md hover:text-red-400 font-semibold transition-colors duration-500"
      >
        Información
      </Link>
    </PopoverGroup>
  );
}
