import { PopoverGroup } from "@headlessui/react";
import Link from "next/link";

export default function DesktopNavigation() {
  return (
    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
      <Link
        href="/"
        className="text-md hover:text-gray-400 font-semibold transition-colors duration-500"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-md hover:text-gray-400 font-semibold transition-colors duration-500"
      >
        About
      </Link>
      <Link
        href="/contact"
        className="text-md hover:text-gray-400 font-semibold transition-colors duration-500"
      >
        Contact
      </Link>
      {/* Cambiar por enlace a si no se necesita otra página */}
      {/* <a
        href="#contact"
        className="text-md hover:text-gray-400 font-semibold transition-colors duration-500"
        >
        Contact
        </a> */}
      <Link
        href="/products"
        className="text-md hover:text-gray-400 font-semibold transition-colors duration-500"
      >
        Products
      </Link>
    </PopoverGroup>
  );
}
