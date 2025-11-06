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
      <section className="relative h-[600px]">
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
              className="inline-block rounded-sm bg-primary px-4 py-2 font-[350] text-lg uppercase text-black hover:bg-[#e8e142] transition-colors"
            >
              COMPLETAR FORMULARIO
            </a>
          </div>
        </div>
      </section>
  )
}