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
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-dark mb-4 font-open-sans">
          ¿Necesitas una ayuda económica?
        </h2>
        <p className="text-2xl text-dark mb-2 font-font-open-sans">
          Nosotros te damos una mano.
        </p>
        <p className="text-xs text-black mb-8 font-open-sans">
          Ayudas económicas para <strong>empleados públicos de la Provincia de Buenos Aires</strong>
        </p>
        <p className="text-xs text-black font-open-sans">
          Completá el formulario o envianos un Whatsapp al <strong>2214205203</strong> y evaluaremos tu caso para brindarte la ayuda que necesitas.
        </p>
        <p className="text-xs text-black mt-2 font-open-sans">
          Muchas gracias por formar parte de <strong>Mutual Amarilla</strong>.
        </p>
      </div>
    </section>
  )
}