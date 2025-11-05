"use client"

import Image from "next/image"

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
            <h1 className="mb-6 text-4xl font-bold leading-tight">
              Si estás necesitando una ayuda económica no dudes en contar con nosotros. Completa el formulario y nos
              pondremos en contacto.
            </h1>
            <a
              href="#formulario"
              className="inline-block bg-[#F4ED4E] px-8 py-3 text-sm font-bold uppercase tracking-wide text-gray-800 hover:bg-[#e8e142] transition-colors"
            >
              COMPLETAR FORMULARIO
            </a>
          </div>
        </div>
      </section>
  )
}