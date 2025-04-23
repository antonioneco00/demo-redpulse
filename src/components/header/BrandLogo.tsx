import Image from "next/image";
import Link from "next/link";

export default function BrandLogo() {
  return (
    <div className="flex lg:flex-1">
      {/* Icon logo + text */}
      <Link
        href="/"
        className="flex items-center hover:text-gray-400 transition-colors duration-500"
      >
        <Image
          alt=""
          src="/logo.svg"
          width={32}
          height={32}
          className="size-9"
        />
        <h1 className="font-mono ml-2">Your Company</h1>
      </Link>
      {/* Image logo */}
      {/* <Link href="/" className="-m-1.5 flex items-center hover:text-gray-400">
        <Image
          alt="Sponsor"
          src="/sponsor.svg"
          width={158}
          height={48}
          className="block dark:hidden"
        />
        <Image
          alt="Sponsor"
          src="/sponsor-white.svg"
          width={158}
          height={48}
          className="hidden dark:block"
        />
      </Link> */}
    </div>
  );
}
