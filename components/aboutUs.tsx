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
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById("contacto")
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="quienes-somos" className="bg-white px-4 sm:px-6">
      <div className="mx-auto max-w-[1100px] mt-20 sm:mt-16 md:mt-8 lg:mt-0">
        <h2 className={`mb-6 lg:mb-0 text-2xl md:text-3xl font-abel font-bold text-dark ${abel.variable}`}>QUIENES SOMOS</h2>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20 items-center">
          <div className={`space-y-4 md:space-y-6 text-justify text-sm text-medium leading-relaxed ${openSans.variable} font-open-sans`}>
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
              href="#contacto"
              onClick={scrollToContact}
              className="group relative inline-block overflow-hidden rounded-sm bg-primary px-3 md:px-4 py-2 text-base md:text-lg uppercase tracking-wide text-black transition-all duration-300 hover:pr-10 md:hover:pr-12"
            >
              <span className="relative z-10">CONTÁCTENOS</span>
              <span className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <Image
                  src="/images/conversacion.png"
                  alt="Contacto"
                  width={18}
                  height={18}
                  className="object-contain md:w-5 md:h-5"
                />
              </span>
            </Link>
          </div>

          <div className="relative flex justify-center lg:justify-end order-last">
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px] lg:h-[550px] lg:w-[550px]">
              <Image src="/images/aboutUsImg.png" alt="Equipo trabajando" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}