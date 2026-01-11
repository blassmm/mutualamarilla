"use client"

import Image from "next/image"
import localFont from "next/font/local"
import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { sendAyudaEconomicaEmail } from "./actions"

const openSans = localFont({
  src: "../../public/fonts/OpenSans-Regular.ttf",
  variable: "--font-open-sans",
})

const abel = localFont({
  src: "../../public/fonts/Abel-Regular.ttf",
  variable: "--font-abel",
})

const schema = z.object({
  nombreApellido: z.string().min(3, "Mínimo 3 caracteres").max(100, "Máximo 100 caracteres"),
  sexo: z.string().min(1, "Seleccione una opción"),
  dni: z.string().min(7, "DNI inválido").max(10, "DNI inválido"),
  localidad: z.string().min(2, "Mínimo 2 caracteres").max(100, "Máximo 100 caracteres"),
  telefonoCelular: z.string().min(8, "Teléfono inválido").max(20, "Teléfono inválido"),
  email: z.string().email("Email inválido"),
  reparticion: z.string().min(2, "Mínimo 2 caracteres").max(100, "Máximo 100 caracteres"),
  montoSolicitar: z.string().min(1, "Ingrese un monto"),
  mensaje: z.string().max(500, "Máximo 500 caracteres").optional(),
})

type FormData = z.infer<typeof schema>

export function FormularioAyuda() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const result = await sendAyudaEconomicaEmail({
        ...data,
        mensaje: data.mensaje || "",
      })

      if (result.success) {
        setSubmitStatus("success")
        reset()
        // GTM event for conversion tracking
        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({ event: "submit_lead_form" })
        }
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={`bg-white py-8 sm:py-12 md:py-16 ${openSans.variable} ${abel.variable}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 font-open-sans">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2">
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
                onClick={() => window.dataLayer?.push({ event: "JoinChat" })}
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

          <div className="order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-medium mb-6 sm:mb-8 text-dark font-abel">
              Datos Personales
            </h3>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                ¡Formulario enviado correctamente! Nos pondremos en contacto pronto.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                Error al enviar el formulario. Por favor, intente nuevamente.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Nombre y Apellido"
                  {...register("nombreApellido")}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-medium"
                />
                {errors.nombreApellido && (
                  <p className="mt-1 text-sm text-red-500">{errors.nombreApellido.message}</p>
                )}
              </div>

              <div>
                <select
                  {...register("sexo")}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary text-medium"
                >
                  <option value="">Seleccione Sexo</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </select>
                {errors.sexo && (
                  <p className="mt-1 text-sm text-red-500">{errors.sexo.message}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="DNI"
                  {...register("dni")}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-medium"
                />
                {errors.dni && (
                  <p className="mt-1 text-sm text-red-500">{errors.dni.message}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Localidad"
                  {...register("localidad")}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-medium"
                />
                {errors.localidad && (
                  <p className="mt-1 text-sm text-red-500">{errors.localidad.message}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Teléfono Celular"
                  {...register("telefonoCelular")}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-medium"
                />
                {errors.telefonoCelular && (
                  <p className="mt-1 text-sm text-red-500">{errors.telefonoCelular.message}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-medium"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium mt-6 sm:mt-8 mb-4 sm:mb-6 text-dark font-abel">
                Datos Laborales
              </h3>

              <div>
                <input
                  type="text"
                  placeholder="Repartición"
                  {...register("reparticion")}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-medium"
                />
                {errors.reparticion && (
                  <p className="mt-1 text-sm text-red-500">{errors.reparticion.message}</p>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium mt-6 sm:mt-8 mb-4 sm:mb-6 text-dark font-abel">
                Monto a solicitar
              </h3>

              <div>
                <input
                  type="text"
                  placeholder="$1000"
                  {...register("montoSolicitar")}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-medium"
                />
                {errors.montoSolicitar && (
                  <p className="mt-1 text-sm text-red-500">{errors.montoSolicitar.message}</p>
                )}
              </div>

              <div>
                <textarea
                  placeholder="Dejenos su mensaje (opcional)"
                  rows={6}
                  {...register("mensaje")}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-medium"
                />
                {errors.mensaje && (
                  <p className="mt-1 text-sm text-red-500">{errors.mensaje.message}</p>
                )}
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
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-primary text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded hover:bg-yellow-400 transition-colors font-abel text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
