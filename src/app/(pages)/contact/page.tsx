import ContactComponent from "@/components/home/Contact";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact",
    description: "Get in touch with us",
    openGraph: {
      title: "Contact",
      description: "Get in touch with us",
      type: "website",
    },
  };
}

export default function Contact() {
  return <ContactComponent />;
}
