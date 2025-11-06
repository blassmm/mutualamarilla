"use client"

import Image from "next/image"
import localFont from "next/font/local"
import { useState } from "react"

const abel = localFont({
  src: "../public/fonts/Abel-Regular.ttf",
  variable: "--font-abel",
})

const openSans = localFont({
  src: "../public/fonts/OpenSans-Regular.ttf",
  variable: "--font-open-sans",
})

export default function AyudaEconomicaForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className={`mb-8 text-4xl font-bold text-center text-dark ${abel.variable} font-abel`}>
          SOLICITUD DE AYUDA ECONÓMICA
        </h1>
        
        <div className={`mb-8 text-center text-medium ${openSans.variable} font-open-sans`}>
          <p>
            Si estás necesitando una ayuda económica, completa el siguiente formulario y nos pondremos en contacto contigo a la brevedad.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={`space-y-6 ${openSans.variable} font-open-sans`}>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="nombre" className="block mb-2 font-medium text-dark">
                Nombre *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="apellido" className="block mb-2 font-medium text-dark">
                Apellido *
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                required
                value={formData.apellido}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-dark">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block mb-2 font-medium text-dark">
                Teléfono *
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                required
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="mensaje" className="block mb-2 font-medium text-dark">
              Mensaje *
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows={6}
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Por favor, describe tu situación y el tipo de ayuda que necesitas..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="group relative inline-block overflow-hidden rounded-sm bg-primary px-8 py-3 text-lg uppercase tracking-wide text-black transition-all duration-300 hover:pr-16"
            >
              <span className="relative z-10">ENVIAR SOLICITUD</span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <Image 
                  src="/images/conversacion.png" 
                  alt="Enviar" 
                  width={20} 
                  height={20}
                  className="object-contain"
                />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}