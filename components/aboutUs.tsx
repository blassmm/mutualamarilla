"use client"

import Image from "next/image"
import Link from "next/link"
import localFont from "next/font/local"

const abel = localFont({
  src: "../public/fonts/Abel-Regular.ttf",
  variable: "--font-abel",
})

const openSans = localFont({
  src: "../public/fonts/OpenSans-Regular.ttf",
  variable: "--font-open-sans",
})



export default function AboutUs() {
    return (
        <section className="bg-white px-6  ">
        <div className="mx-auto max-w-7xl">
          <h2 className={`mb-4 text-4xl font-abel font-bold text-dark ${abel.variable}`}>QUIENES SOMOS</h2>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div className={`space-y-6 text-justify text-medium leading-relaxed ${openSans.variable} font-open-sans`}>
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
                className="inline-block rounded-sm bg-primary px-4 py-2 text-lg  font-medium uppercase tracking-wide text-black hover:bg-[#e8e142] transition-colors"
              >
                CONTÁCTENOS
              </Link>
            </div>

            <div className="relative flex justify-end">
              <div className="relative h-[550px] w-[550px]">
                <Image src="/images/aboutUsImg.png" alt="Equipo trabajando" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}