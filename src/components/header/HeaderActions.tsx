"use client";

import { Bars3Icon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MobileMenu from "@/components/header/MobileMenu";

export default function HeaderActions() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="flex flex-1"></div>;
  }

  return (
    <div className="flex flex-1 justify-end">
      <div className="flex mr-2 lg:mr-0">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-sm/6 font-semibold rounded-full hover:text-gray-400 transition-colors duration-500 cursor-pointer"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <MoonIcon className="size-6" />
          ) : (
            <SunIcon className="size-6" />
          )}
        </button>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="size-6 text-foreground" />
        </button>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
    </div>
  );
}
