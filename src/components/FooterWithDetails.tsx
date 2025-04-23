import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function FooterWithDetails() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
            <div className="mb-6 mx-auto text-center sm:mx-0 sm:text-left max-w-[360px]">
              <Link
                href="/"
                className="mb-4 sm:mb-8 inline-flex items-center w-fit"
              >
                <Image src="/logo.svg" alt="logo" width={32} height={32} className="size-9" />
                <h1 className="font-mono ml-2">Your Company</h1>
              </Link>
              <p className="mb-4 sm:mb-8 text-base text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                auctor, nunc nec.
              </p>
              <div className="flex justify-center sm:justify-start mt-4 space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">YouTube</span>
                  <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-1/3 text-center">
            <div className="mb-2">
              <h2 className="mb-4 text-xl font-bold">
                Links
              </h2>
              <ul>
                <li>
                  <Link
                    href="/about"
                    className="mb-4 inline-block text-base hover:text-gray-400 duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="mb-4 inline-block text-base hover:text-gray-400 duration-300"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#pricing"
                    className="mb-4 inline-block text-base hover:text-gray-400 duration-300"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="mb-4 inline-block text-base hover:text-gray-400 duration-300"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="mb-4 inline-block text-base hover:text-gray-400 duration-300"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/3 text-center">
            <div className="mb-2">
              <h2 className="mb-4 text-xl font-bold">
                Company Info
              </h2>
              <ul className="flex flex-col w-fit mx-auto text-left">
                <li className="flex items-center space-x-2 mb-4">
                  <MapPinIcon className="w-6" />
                  <span className="inline-block text-base duration-300">
                    123 Pepe Pepez Street
                    <br />
                    1XXXX Madrid
                    <br />
                    Spain
                  </span>
                </li>
                <li className="flex items-center space-x-2 mb-4">
                  <PhoneIcon className="w-6" />
                  <span className="inline-block text-base duration-300 hover:text-gray-400">
                    <a href="tel:+1555-555-5555">555-555-5555</a>
                  </span>
                </li>
                <li className="flex items-center space-x-2 mb-4">
                  <EnvelopeIcon className="w-6" />
                  <span className="inline-block text-base duration-300 hover:text-gray-400">
                    <a href="mailto:info@yourcompany.com">
                      info@yourcompany.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2025 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
}
