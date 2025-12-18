"use client"

import Image from "next/image"
import localFont from "next/font/local"
import { useEffect, useRef, useState } from "react"

const abel = localFont({
  src: "../public/fonts/Abel-Regular.ttf",
  variable: "--font-abel",
})

const openSans = localFont({
  src: "../public/fonts/OpenSans-Regular.ttf",
  variable: "--font-open-sans",
})

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [visibleCards])

  return (
    <section id="servicios" className="relative bg-white">
      <div className="mt-10 absolute inset-0 bg-secondary z-0 
                      [clip-path:ellipse(220%_100%_at_50%_100%)]
                      md:[clip-path:ellipse(150%_100%_at_50%_100%)]"
      />

      <div className="relative z-10 px-4 sm:px-6 mt-10  py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className={`mb-8 md:mb-12 lg:mb-16 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-dark ${abel.variable} font-abel`}>
            SERVICIOS PARA AFILIADOS
          </h2>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 px-2 sm:px-4 md:px-8 lg:px-16">
            <div
              ref={(el) => { cardRefs.current[0] = el }}
              className="bg-white/30 rounded-3xl p-4 sm:p-6 text-center flex flex-col h-full"
            >
              <div className={`mx-auto mb-4 sm:mb-6 h-[150px] w-[150px] sm:h-[180px] sm:w-[180px] md:h-[200px] md:w-[200px] overflow-hidden rounded-full transition-all duration-1000 ${visibleCards.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}>
                <Image
                  src="/images/serviceOdonto.webp"
                  alt="Servicio de Odontología"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className={`mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-start text-dark ${abel.variable} font-abel`}>
                SERVICIO DE ODONTOLOGÍA
              </h3>
              <p className={`text-justify text-sm text-medium leading-relaxed ${openSans.variable} font-open-sans`}>
                Nuestro servicio de odontología está diseñado para brindar a nuestros asociados una atención dental
                integral y de calidad. Contamos con un equipo de profesionales altamente capacitados que se encargan de
                realizar desde limpiezas y tratamientos preventivos hasta procedimientos más complejos. Nuestro objetivo
                es garantizar la salud bucal de nuestros asociados y mejorar su calidad de vida a través de una sonrisa
                radiante y saludable.
              </p>
            </div>

            <div
              ref={(el) => { cardRefs.current[1] = el }}
              className="bg-white/30 rounded-3xl p-4 sm:p-6 text-center flex flex-col h-full"
            >
              <div className={`mx-auto mb-4 sm:mb-6 h-[150px] w-[150px] sm:h-[180px] sm:w-[180px] md:h-[200px] md:w-[200px] overflow-hidden rounded-full transition-all duration-1000 delay-150 ${visibleCards.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}>
                <Image
                  src="/images/serviceIntDom.webp"
                  alt="Servicio de Internación Domiciliaria"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className={`mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-start text-dark ${abel.variable} font-abel`}>
                SERVICIO DE INTERNACIÓN DOMICILIARIA
              </h3>
              <p className={`text-justify text-sm text-medium leading-relaxed ${openSans.variable} font-open-sans`}>
                En situaciones en las que nuestros asociados requieren atención médica intensiva, pero prefieren o
                necesitan permanecer en la comodidad de su hogar, ofrecemos el servicio de internación domiciliaria.
                Contamos con un equipo de profesionales médicos y de enfermería altamente capacitados que brindan
                cuidados especializados, monitoreo constante y tratamientos médicos en el entorno familiar. Nuestro
                objetivo es brindar una atención integral y humanizada, permitiendo a nuestros asociados recibir los
                cuidados necesarios en un ambiente familiar y confortable.
              </p>
            </div>

            <div
              ref={(el) => { cardRefs.current[2] = el }}
              className="bg-white/30 rounded-3xl p-4 sm:p-6 text-center flex flex-col h-full"
            >
              <div className={`mx-auto mb-4 sm:mb-6 h-[150px] w-[150px] sm:h-[180px] sm:w-[180px] md:h-[200px] md:w-[200px] overflow-hidden rounded-full transition-all duration-1000 delay-300 ${visibleCards.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}>
                <Image
                  src="/images/serviceSubNac.webp"
                  alt="Servicio de Subsidio de Nacimiento"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className={`mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-start text-dark ${abel.variable} font-abel`}>
                SERVICIO DE SUBSIDIO DE NACIMIENTO
              </h3>
              <p className={`text-justify text-sm text-medium leading-relaxed ${openSans.variable} font-open-sans`}>
                En nuestra mutual, comprendemos que la llegada de un nuevo miembro a la familia es un acontecimiento
                especial y que puede implicar gastos adicionales. Por eso, ofrecemos un servicio de subsidio de
                nacimiento. Mediante este servicio, brindamos un apoyo económico a nuestros asociados que han dado la
                bienvenida a un recién nacido en su hogar. Este subsidio está diseñado para ayudar a cubrir los costos
                asociados con el nacimiento, como gastos médicos, compra de artículos para el bebé y otros gastos
                relacionados. Nuestro objetivo es brindar un respaldo económico que alivie las cargas financieras y
                contribuya a la estabilidad y tranquilidad de nuestros asociados.
              </p>
            </div>

            <div
              ref={(el) => { cardRefs.current[3] = el }}
              className="bg-white/30 rounded-3xl p-4 sm:p-6 text-center flex flex-col h-full"
            >
              <div className={`mx-auto mb-4 sm:mb-6 h-[150px] w-[150px] sm:h-[180px] sm:w-[180px] md:h-[200px] md:w-[200px] overflow-hidden rounded-full transition-all duration-1000 ${visibleCards.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}>
                <Image
                  src="/images/serviceSubFall.webp"
                  alt="Servicio de Subsidio de Fallecimiento"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className={`mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-start text-dark ${abel.variable} font-abel`}>
                SERVICIO DE SUBSIDIO DE FALLECIMIENTO
              </h3>
              <p className={`text-justify text-sm text-medium leading-relaxed ${openSans.variable} font-open-sans`}>
                En momentos de pérdida y duelo, nuestra mutual está presente para brindar apoyo a nuestros asociados y
                sus familias. A través de nuestro servicio de subsidio de fallecimiento, ofrecemos un respaldo económico
                que ayuda a cubrir los gastos relacionados con los servicios funerarios y otros gastos asociados.
                Comprendemos que estos momentos pueden ser difíciles tanto emocional como financieramente, y nuestro
                objetivo es aliviar la carga económica que puede surgir durante este período. Estamos comprometidos en
                brindar el apoyo necesario para que nuestros asociados y sus seres queridos puedan despedirse dignamente
                y honrar la memoria de sus seres queridos de manera adecuada.
              </p>
            </div>

            <div
              ref={(el) => { cardRefs.current[4] = el }}
              className="bg-white/30 rounded-3xl p-4 sm:p-6 text-center flex flex-col h-full"
            >
              <div className={`mx-auto mb-4 sm:mb-6 h-[150px] w-[150px] sm:h-[180px] sm:w-[180px] md:h-[200px] md:w-[200px] overflow-hidden rounded-full transition-all duration-1000 delay-150 ${visibleCards.includes(4) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}>
                <Image
                  src="/images/serviceAseLeg.webp"
                  alt="Servicio de Asesoramiento Legal"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className={`mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-start text-dark ${abel.variable} font-abel`}>
                SERVICIO DE ASESORAMIENTO LEGAL
              </h3>
              <p className={`text-justify text-sm text-medium leading-relaxed ${openSans.variable} font-open-sans`}>
                En nuestra mutual, entendemos la importancia y la complejidad del ámbito legal. Por eso, ofrecemos a
                nuestros asociados un servicio de asesoramiento legal integral. Contamos con un equipo de abogados
                especializados que brindan asesoría y orientación en diversas áreas legales, como derecho laboral,
                derecho de familia y derecho civil. Ya sea que necesites resolver un conflicto legal, realizar trámites
                legales o recibir orientación en aspectos jurídicos, nuestro servicio de asesoramiento legal está aquí
                para apoyarte y proteger tus derechos.
              </p>
            </div>

            <div
              ref={(el) => { cardRefs.current[5] = el }}
              className="bg-white/30 rounded-3xl p-4 sm:p-6 text-center flex flex-col h-full"
            >
              <div className={`mx-auto mb-4 sm:mb-6 h-[150px] w-[150px] sm:h-[180px] sm:w-[180px] md:h-[200px] md:w-[200px] overflow-hidden rounded-full transition-all duration-1000 delay-300 ${visibleCards.includes(5) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}>
                <Image
                  src="/images/serviceAyuEco.webp"
                  alt="Servicio de Ayudas Económicas"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className={`mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-start text-dark ${abel.variable} font-abel`}>
                SERVICIO DE AYUDAS ECONÓMICAS
              </h3>
              <p className={`text-justify text-sm text-medium leading-relaxed ${openSans.variable} font-open-sans`}>
                En nuestra mutual, nos preocupamos por el bienestar económico de nuestros asociados. Por eso, ofrecemos
                un servicio de ayudas económicas diseñado para brindar apoyo en situaciones de dificultad financiera. A
                través de este servicio, nuestros asociados pueden acceder a subsidios, préstamos y asistencia económica
                para afrontar gastos imprevistos, emergencias médicas u otras necesidades financieras urgentes. Nuestro
                objetivo es brindar un respaldo económico que alivie las cargas financieras y contribuya a la
                estabilidad y tranquilidad de nuestros asociados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}