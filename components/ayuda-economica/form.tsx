"use client"

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
    // Aquí puedes agregar la lógica para enviar el formulario
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className={`bg-white py-16 ${abel.variable} ${openSans.variable}`}>
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Columna Izquierda - Información */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-dark font-abel">
                ¿A quién está destinado?
              </h3>
              <p className="text-medium font-open-sans">
                Estas ayudas económicas son <strong>para empleados públicos de la Provincia de Buenos Aires.</strong>
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4 text-dark font-abel">
                ¿Cuánto tarda en acreditarse?
              </h3>
              <p className="text-medium font-open-sans">
                Se te acredita en el día!
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4 text-dark font-abel">
                ¿Cómo cobran la cuota?
              </h3>
              <p className="text-medium font-open-sans">
                Se le cobra directamente del recibo de sueldo
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4 text-dark font-abel">
                ¿Cómo lo solicito?
              </h3>
              <p className="text-medium font-open-sans mb-4">
                Completa el formulario o envianos un Whatsapp al <strong>2214205203</strong>
              </p>
              <a
                href="https://wa.me/5492214205203"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] text-white px-8 py-3 rounded hover:bg-[#20BA5A] transition-colors font-abel text-lg"
              >
                Contactate por Whatsapp
              </a>
            </div>
          </div>

          {/* Columna Derecha - Formulario */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-dark font-abel">
              Datos Personales
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="nombreApellido"
                  placeholder="Nombre y Apellido"
                  required
                  value={formData.nombreApellido}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary font-open-sans"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary font-open-sans"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary font-open-sans"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary font-open-sans"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary font-open-sans"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary font-open-sans"
                />
              </div>

              <h3 className="text-3xl font-bold mt-8 mb-6 text-dark font-abel">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary font-open-sans"
                />
              </div>

              <h3 className="text-3xl font-bold mt-8 mb-6 text-dark font-abel">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary font-open-sans"
                />
              </div>

              <div>
                <textarea
                  name="mensaje"
                  placeholder="Dejenos su mensaje"
                  rows={6}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary resize-none font-open-sans"
                />
              </div>

              <p className="text-sm text-medium font-open-sans">
                Envienos a{" "}
                <a href="mailto:consultas@mutualamarilla.com" className="text-blue-600 underline">
                  consultas@mutualamarilla.com
                </a>{" "}
                el último recibo de sueldo y movimientos bancarios.
              </p>

              <button
                type="submit"
                className="bg-primary text-dark px-8 py-3 rounded font-bold hover:bg-yellow-400 transition-colors font-abel text-lg"
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