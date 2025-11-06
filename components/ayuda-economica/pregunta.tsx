"use client"

import localFont from "next/font/local"

const abel = localFont({
  src: "../../public/fonts/Abel-Regular.ttf",
  variable: "--font-abel",
})

const openSans = localFont({
  src: "../../public/fonts/OpenSans-Regular.ttf",
  variable: "--font-open-sans",
})

export function Pregunta() {
  return (
    <section className={`bg-primary py-20 ${abel.variable} ${openSans.variable}`}>
      <div className="container mx-auto px-6 text-center font-open-sans">
        <h2 className="text-6xl font-bold text-dark mb-4">
          ¿Necesitas una ayuda económica?
        </h2>
        <p className="text-3xl text-dark mb-2">
          Nosotros te damos una mano.
        </p>
        <p className="text-sm text-black mb-8">
          Ayudas económicas para <strong>empleados públicos de la Provincia de Buenos Aires</strong>
        </p>
        <p className="text-sm text-black">
          Completá el formulario o envianos un Whatsapp al <strong>2214205203</strong> y evaluaremos tu caso para brindarte la ayuda que necesitas.
        </p>
        <p className="text-sm text-black mt-2">
          Muchas gracias por formar parte de <strong>Mutual Amarilla</strong>.
        </p>
      </div>
    </section>
  )
}