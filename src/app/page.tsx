import FeatureSection from "@/components/home/FeatureSection";
import FactsSection from "@/components/home/FactsSection";
import GridSection from "@/components/home/GridSection";
import CarouselSection from "@/components/home/CarouselSection";
import PricingSection from "@/components/home/PricingSection";
import ProductsSection from "@/components/home/ProductsSection";
import HeroSection from "@/components/home/HeroSection";
import LogoClouds from "@/components/home/LogoClouds";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";
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
      <FactsSection />
      <LogoClouds />
      <GridSection />
      <CarouselSection />
      <PricingSection />
      <ProductsSection />
      <Testimonials />
      <Contact />
    </main>
  );
}
