import ProductsSection from "@/components/home/ProductsSection";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Products",
    description: "Explore our range of products",
    openGraph: {
      title: "Products",
      description: "Explore our range of products",
      type: "website",
    },
  };
}

export default function Products() {
  return <ProductsSection />;
}
