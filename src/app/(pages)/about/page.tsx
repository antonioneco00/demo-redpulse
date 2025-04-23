import { Metadata } from "next";
import GridSection from "@/components/home/GridSection";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us",
    description: "Learn more about our company and values",
    openGraph: {
      title: "About Us",
      description: "Learn more about our company and values",
      type: "website",
    },
  };
}

export default function About() {
  return <GridSection />;
}
