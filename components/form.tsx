"use client"

import Image from "next/image"
import localFont from "next/font/local"

const abel = localFont({
  src: "../public/fonts/Abel-Regular.ttf",
  variable: "--font-abel",
})

const openSans = localFont({
  src: "../public/fonts/OpenSans-Regular.ttf",
  variable: "--font-open-sans",
})

export default function AyudaEconomica() {
  return (
      <section id="ayuda-economica" className="relative h-[600px]">
        <Image 
          src="/images/formImg.jpg" 
          alt="Ayuda Económica" 
          fill 
          className="object-cover" 
          style={{ objectPosition: 'center 0%' }}
          priority 
        />
        <div className="absolute inset-0" />

        <div className="absolute inset-0 flex items-center justify-end px-6">
          <div className="max-w-2xl text-white">
            <h1 className={`mb-6 text-4xl font-bold ${abel.variable} font-abel`}>
              Si estás necesitando una ayuda económica no dudes en contar con nosotros. Completa el formulario y nos
              pondremos en contacto.
            </h1>
            <a
              href="#formulario"
              className="group relative inline-block overflow-hidden rounded-sm bg-primary px-4 py-2 text-lg uppercase tracking-wide text-black transition-all duration-300 hover:pr-12"
            >
              <span className="relative z-10">COMPLETAR FORMULARIO</span>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <Image 
                  src="/images/conversacion.png" 
                  alt="Formulario" 
                  width={20} 
                  height={20}
                  className="object-contain"
                />
              </span>
            </a>
          </div>
        </div>
      </section>
  )
}