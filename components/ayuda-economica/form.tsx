"use client"

import Image from "next/image"
import localFont from "next/font/local"
import { useState } from "react"

const abel = localFont({
  src: "../../public/fonts/Abel-Regular.ttf",
  variable: "--font-abel",
})

const openSans = localFont({
  src: "../../public/fonts/OpenSans-Regular.ttf",
  variable: "--font-open-sans",
})

export function FormularioAyuda() {
  const [formData, setFormData] = useState({
    nombreApellido: "",
    sexo: "",
    dni: "",
    localidad: "",
    telefonoCelular: "",
    email: "",
    reparticion: "",
    montoSolicitar: "",
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
    <section className={`bg-white py-8 sm:py-12 md:py-16 ${openSans.variable}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 font-open-sans">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2">
          {/* Preguntas - Primera columna en desktop (izquierda), segundo en mobile (abajo) */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4 text-dark">
                ¿A quién está destinado?
              </h3>
              <p className="text-sm sm:text-base text-black">
                Estas ayudas económicas son <strong>para empleados públicos de la Provincia de Buenos Aires.</strong>
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-dark font-abel">
                ¿Cuánto tarda en acreditarse?
              </h3>
              <p className="text-sm sm:text-base text-black">
                Se te acredita en el día!
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-dark font-abel">
                ¿Cómo cobran la cuota?
              </h3>
              <p className="text-sm sm:text-base text-black">
                Se le cobra directamente del recibo de sueldo
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-dark font-abel">
                ¿Cómo lo solicito?
              </h3>
              <p className="text-sm sm:text-base text-black mb-4">
                Completa el formulario o envianos un Whatsapp al <strong>2214205203</strong>
              </p>
              <a
                href="https://wa.me/5492214205203"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block overflow-hidden rounded bg-[#25D366] px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg text-white transition-all duration-300 hover:pr-10 sm:hover:pr-12 md:hover:pr-16 font-abel"
              >
                <span className="relative z-10">Contactate por Whatsapp</span>
                <span className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <Image 
                    src="/images/conversacion.png" 
                    alt="WhatsApp" 
                    width={16} 
                    height={16}
                    className="object-contain brightness-0 invert sm:w-5 sm:h-5"
                  />
                </span>
              </a>
            </div>
          </div>

          {/* Formulario - Segunda columna en desktop (derecha), primero en mobile (arriba) */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-medium mb-6 sm:mb-8 text-dark font-abel">
              Datos Personales
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <input
                  type="text"
                  name="nombreApellido"
                  placeholder="Nombre y Apellido"
                  required
                  value={formData.nombreApellido}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-medium"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="sexo"
                  placeholder="Sexo"
                  required
                  value={formData.sexo}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-medium"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="dni"
                  placeholder="DNI"
                  required
                  value={formData.dni}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-medium"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="localidad"
                  placeholder="Localidad"
                  required
                  value={formData.localidad}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-medium"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="telefonoCelular"
                  placeholder="Teléfono Celular"
                  required
                  value={formData.telefonoCelular}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-medium"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-medium"
                />
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium mt-6 sm:mt-8 mb-4 sm:mb-6 text-dark font-abel">
                Datos Laborales
              </h3>

              <div>
                <input
                  type="text"
                  name="reparticion"
                  placeholder="Repartición"
                  required
                  value={formData.reparticion}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-medium"
                />
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium mt-6 sm:mt-8 mb-4 sm:mb-6 text-dark font-abel">
                Monto a solicitar
              </h3>

              <div>
                <input
                  type="text"
                  name="montoSolicitar"
                  placeholder="$1000"
                  required
                  value={formData.montoSolicitar}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-medium"
                />
              </div>

              <div>
                <textarea
                  name="mensaje"
                  placeholder="Dejenos su mensaje"
                  rows={6}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-medium"
                />
              </div>

              <p className="text-xs sm:text-sm text-medium">
                Envienos a{" "}
                <a href="mailto:consultas@mutualamarilla.com" className="text-black underline">
                  consultas@mutualamarilla.com
                </a>{" "}
                el último recibo de sueldo y movimientos bancarios.
              </p>

              <button
                type="submit"
                className="w-full sm:w-auto bg-primary text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded hover:bg-yellow-400 transition-colors font-abel text-base sm:text-lg"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}