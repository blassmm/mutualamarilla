import { Hero } from "@/components/ayuda-economica/hero"
import { Pregunta } from "@/components/ayuda-economica/pregunta"
import { FormularioAyuda } from "@/components/ayuda-economica/form"
import Footer from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function AyudaEconomicaPage() {
  return (
    <>
      <main>
        <Hero />
        <Pregunta />
        <FormularioAyuda />
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}