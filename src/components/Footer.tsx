import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-600 text-white" id="footer">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
            <div className="mb-6 mx-auto text-center sm:mx-0 sm:text-left max-w-[360px]">
              <Link href="#" className="ml-0 flex items-center">
                <Image
                  alt="Logo"
                  src="/logo.png"
                  width={100}
                  height={100}
                  className="mx-auto sm:mx-0 w-auto h-auto object-contain"
                />
              </Link>
              <p className="mb-4 sm:mb-8 text-base leading-relaxed">
                Entrenamiento en grupo, sesiones HIIT, boxeo fitness, y
                ejercicios con peso corporal.
              </p>
              <div className="flex justify-center sm:justify-start mt-4 space-x-6">
                <a href="#" className="hover:text-red-500">
                  <span className="sr-only">Facebook</span>
                  <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-red-500">
                  <span className="sr-only">Instagram</span>
                  <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-red-500">
                  <span className="sr-only">Twitter</span>
                  <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-red-500">
                  <span className="sr-only">YouTube</span>
                  <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 lg:w-1/3 text-center">
            <div className="mb-2">
              <h2 className="mb-4 text-xl font-bold">Enlaces</h2>
              <ul>
                <li>
                  <Link
                    href="#"
                    className="mb-6 inline-block text-base hover:text-red-400 duration-300"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="mb-6 inline-block text-base hover:text-red-400 duration-300"
                  >
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="mb-4 inline-block text-base hover:text-red-400 duration-300"
                  >
                    Precios
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/3 text-center">
            <div className="mb-2">
              <h2 className="mb-4 text-xl font-bold">Información</h2>
              <ul className="flex flex-col w-fit mx-auto text-left">
                <li className="flex items-center space-x-2 mb-4">
                  <MapPinIcon className="w-6 text-red-500" />
                  <span className="inline-block text-base duration-300">
                    Calle del Hierro, 27
                    <br />
                    28045 Madrid
                  </span>
                </li>
                <li className="flex items-center space-x-2 mb-4">
                  <PhoneIcon className="w-6 text-red-500" />
                  <span className="inline-block text-base duration-300 hover:text-red-400">
                    <a href="tel:+34635987321">635 987 321</a>
                  </span>
                </li>
                <li className="flex items-center space-x-2 mb-4">
                  <EnvelopeIcon className="w-6 text-red-500" />
                  <span className="inline-block text-base duration-300 hover:text-red-400">
                    <a href="mailto:contacto@redpulse.fit">
                      contacto@redpulse.fit
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-8 text-base leading-6 text-center">
          © 2025 RedPulse - Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
