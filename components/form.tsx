"use client"

import Image from "next/image"
import Link from "next/link"
import localFont from "next/font/local"

const abel = localFont({
  src: "../public/fonts/Abel-Regular.ttf",
  variable: "--font-abel",
})

export default function AyudaEconomica() {
  return (
    <section id="ayuda-economica" className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <Image
        src="/images/formImg.webp"
        alt="Ayuda Económica"
        fill
        className="object-cover"
        style={{ objectPosition: 'center 0%' }}
        priority
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto md:mx-0 md:ml-auto text-white text-center md:text-left">
          <h1 className={`mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight ${abel.variable} font-abel`}>
            Si estás necesitando una ayuda económica no dudes en contar con nosotros. Completa el formulario y nos
            pondremos en contacto.
          </h1>
          <Link
            href="/ayuda-economica"
            className="group relative inline-block overflow-hidden rounded-sm bg-primary px-3 sm:px-4 py-2 text-sm sm:text-base md:text-lg uppercase tracking-wide text-black transition-all duration-300 hover:pr-10 sm:hover:pr-12"
          >
            <span className="relative z-10">COMPLETAR FORMULARIO</span>
            <span className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <Image
                src="/images/conversacion.png"
                alt="Formulario"
                width={18}
                height={18}
                className="sm:w-5 sm:h-5 object-contain"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}