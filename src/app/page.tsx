import FeatureSection from "@/components/home/FeatureSection";
import GridSection from "@/components/home/GridSection";
import PricingSection from "@/components/home/PricingSection";
import HeroSection from "@/components/home/HeroSection";
import { Metadata } from "next";
// import HeroSectionImageRight from "@/components/home/HeroSectionImageRight";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home",
    description:
      "Welcome to our homepage. Here you will find information about our products and services.",
    openGraph: {
      title: "Home",
      description:
        "Welcome to our homepage. Here you will find information about our products and services.",
      type: "website",
    },
  };
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <HeroSectionImageRight /> */}
      <FeatureSection />
      <GridSection />
      <PricingSection />
    </main>
  );
}
