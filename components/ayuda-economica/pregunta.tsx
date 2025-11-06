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
    <section className={`bg-primary py-12 sm:py-16 md:py-20 ${abel.variable} ${openSans.variable}`}>
      <div className="container mx-auto px-4 sm:px-6 text-center font-open-sans">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-3 sm:mb-4">
          ¿Necesitas una ayuda económica?
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl text-dark mb-4 sm:mb-6 md:mb-8">
          Nosotros te damos una mano.
        </p>
        <p className="text-xs sm:text-sm md:text-base text-black mb-4 sm:mb-6 md:mb-8">
          Ayudas económicas para <strong>empleados públicos de la Provincia de Buenos Aires</strong>
        </p>
        <p className="text-xs sm:text-sm md:text-base text-black">
          Completá el formulario o envianos un Whatsapp al <strong>2214205203</strong> y evaluaremos tu caso para brindarte la ayuda que necesitas.
        </p>
        <p className="text-xs sm:text-sm md:text-base text-black mt-2">
          Muchas gracias por formar parte de <strong>Mutual Amarilla</strong>.
        </p>
      </div>
    </section>
  )
}