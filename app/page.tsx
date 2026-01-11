import { Hero } from "@/components/hero";
import AboutUs from "@/components/aboutUs";
import Services from "@/components/services";
import AyudaEconomica from "@/components/form";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <Hero />
        <AboutUs />
        <Services />
        <AyudaEconomica />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
