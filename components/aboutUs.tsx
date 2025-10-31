"use client"

import Image from "next/image"
import Link from "next/link"

export default function AboutUs() {
    return (
        <section className="bg-white px-6 pb-20 pt-40">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-bold text-gray-800">QUIENES SOMOS</h2>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-6 text-justify text-gray-700 leading-relaxed">
              <p>
                En el año 2000, un grupo de personas visionarias y comprometidas decidió unirse para crear una
                organización que pudiera satisfacer las necesidades de la comunidad. Así nació nuestra{" "}
                <strong>
                  mutual con sede central en la ciudad de La Plata y con alcance en toda la Provincia de Buenos Aires
                </strong>
                , con el propósito de brindar apoyo y protección a nuestros asociados en diferentes áreas de sus vidas.
              </p>

              <p>
                Durante estas dos décadas, hemos trabajado incansablemente para ofrecer servicios de calidad y
                orientados a las necesidades cambiantes de nuestros asociados. Nuestra misión es ser un aliado confiable
                y cercano para todos nuestros asociados. Nos esforzamos por brindarles soluciones efectivas y
                personalizadas en áreas importantes como la salud.
              </p>

              <p>
                Nos enorgullece el impacto positivo que hemos tenido a lo largo de estos 20 años. Cada logro y cada
                testimonio de satisfacción nos motivan a seguir adelante, buscando constantemente nuevas formas de
                mejorar y superar las expectativas.
              </p>

              <Link
                href="/contacto"
                className="inline-block bg-[#F4ED4E] px-8 py-3 text-sm font-bold uppercase tracking-wide text-gray-800 hover:bg-[#e8e142] transition-colors"
              >
                CONTÁCTENOS
              </Link>
            </div>

            <div className="relative">
              <div className="relative h-[400px] w-full">
                <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-[#F4ED4E]" />
                <div className="absolute left-0 top-12 h-[350px] w-[350px] overflow-hidden rounded-full">
                  <Image src="/business-people-working-together-at-office.jpg" alt="Equipo trabajando" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}