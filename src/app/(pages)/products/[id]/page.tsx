import { cards } from "@/lib/products";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Product Details",
    description: "Selected product details",
    openGraph: {
      title: "Product Details",
      description: "Selected product details",
      type: "website",
    },
  };
}

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const product = cards[id - 1];
  const { name, description, price } = product;

  return (
    <div className="overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
                {name}
              </h2>
              <p className="mt-6 text-lg/8 text-gray-500">
                Description: {description}
              </p>
              <p className="mt-6 text-lg/8 text-gray-500">Price: {price}</p>
            </div>
          </div>
          <Image
            src="/about-image.svg"
            alt="about image"
            width={0}
            height={0}
            className="w-auto h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
