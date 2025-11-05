"use client"

import Image from "next/image"

export default function Services() {
  return (
    <section className="relative bg-white ">
      <div className="absolute inset-0 bg-[#fff89e] z-0"
           style={{
             clipPath: 'ellipse(120% 100% at 50% 100%)'
           }}
      />
      
      <div className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-gray-800">SERVICIOS PARA AFILIADOS</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white/30 rounded-2xl p-8 text-center">
              <div className="mx-auto mb-6 h-[200px] w-[200px] overflow-hidden rounded-full">
                <Image
                  src="/images/serviceOdonto.png"
                  alt="Servicio de Odontología"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">SERVICIO DE ODONTOLOGÍA</h3>
              <p className="text-justify text-sm text-gray-700 leading-relaxed">
                Nuestro servicio de odontología está diseñado para brindar a nuestros asociados una atención dental
                integral y de calidad. Contamos con un equipo de profesionales altamente capacitados que se encargan de
                realizar desde limpiezas y tratamientos preventivos hasta procedimientos más complejos. Nuestro objetivo
                es garantizar la salud bucal de nuestros asociados y mejorar su calidad de vida a través de una sonrisa
                radiante y saludable.
              </p>
            </div>

            <div className="bg-white/30 rounded-2xl p-8 text-center">
              <div className="mx-auto mb-6 h-[200px] w-[200px] overflow-hidden rounded-full">
                <Image
                  src="/images/serviceIntDom.png"
                  alt="Servicio de Internación Domiciliaria"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">SERVICIO DE INTERNACIÓN DOMICILIARIA</h3>
              <p className="text-justify text-sm text-gray-700 leading-relaxed">
                En situaciones en las que nuestros asociados requieren atención médica intensiva, pero prefieren o
                necesitan permanecer en la comodidad de su hogar, ofrecemos el servicio de internación domiciliaria.
                Contamos con un equipo de profesionales médicos y de enfermería altamente capacitados que brindan
                cuidados especializados, monitoreo constante y tratamientos médicos en el entorno familiar. Nuestro
                objetivo es brindar una atención integral y humanizada, permitiendo a nuestros asociados recibir los
                cuidados necesarios en un ambiente familiar y confortable.
              </p>
            </div>

            <div className="bg-white/30 rounded-2xl p-8 text-center">
              <div className="mx-auto mb-6 h-[200px] w-[200px] overflow-hidden rounded-full">
                <Image
                  src="/images/serviceSubNac.png"
                  alt="Servicio de Subsidio de Nacimiento"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">SERVICIO DE SUBSIDIO DE NACIMIENTO</h3>
              <p className="text-justify text-sm text-gray-700 leading-relaxed">
                En nuestra mutual, comprendemos que la llegada de un nuevo miembro a la familia es un acontecimiento
                especial y que puede implicar gastos adicionales. Por eso, ofrecemos un servicio de subsidio de
                nacimiento. Mediante este servicio, brindamos un apoyo económico a nuestros asociados que han dado la
                bienvenida a un recién nacido en su hogar. Este subsidio está diseñado para ayudar a cubrir los costos
                asociados con el nacimiento, como gastos médicos, compra de artículos para el bebé y otros gastos
                relacionados. Nuestro objetivo es brindar un respaldo económico que alivie las cargas financieras y
                contribuya a la estabilidad y tranquilidad de nuestros asociados.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="bg-white/30 rounded-2xl p-8 text-center">
              <div className="mx-auto mb-6 h-[200px] w-[200px] overflow-hidden rounded-full">
                <Image
                  src="/images/serviceSubFall.png"
                  alt="Servicio de Subsidio de Fallecimiento"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">SERVICIO DE SUBSIDIO DE FALLECIMIENTO</h3>
              <p className="text-justify text-sm text-gray-700 leading-relaxed">
                En momentos de pérdida y duelo, nuestra mutual está presente para brindar apoyo a nuestros asociados y
                sus familias. A través de nuestro servicio de subsidio de fallecimiento, ofrecemos un respaldo económico
                que ayuda a cubrir los gastos relacionados con los servicios funerarios y otros gastos asociados.
                Comprendemos que estos momentos pueden ser difíciles tanto emocional como financieramente, y nuestro
                objetivo es aliviar la carga económica que puede surgir durante este período. Estamos comprometidos en
                brindar el apoyo necesario para que nuestros asociados y sus seres queridos puedan despedirse dignamente
                y honrar la memoria de sus seres queridos de manera adecuada.
              </p>
            </div>

            <div className="bg-white/30 rounded-2xl p-8 text-center">
              <div className="mx-auto mb-6 h-[200px] w-[200px] overflow-hidden rounded-full">
                <Image
                  src="/images/serviceAseLeg.png"
                  alt="Servicio de Asesoramiento Legal"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">SERVICIO DE ASESORAMIENTO LEGAL</h3>
              <p className="text-justify text-sm text-gray-700 leading-relaxed">
                En nuestra mutual, entendemos la importancia y la complejidad del ámbito legal. Por eso, ofrecemos a
                nuestros asociados un servicio de asesoramiento legal integral. Contamos con un equipo de abogados
                especializados que brindan asesoría y orientación en diversas áreas legales, como derecho laboral,
                derecho de familia y derecho civil. Ya sea que necesites resolver un conflicto legal, realizar trámites
                legales o recibir orientación en aspectos jurídicos, nuestro servicio de asesoramiento legal está aquí
                para apoyarte y proteger tus derechos.
              </p>
            </div>

            <div className="bg-white/30 rounded-2xl p-8 text-center">
              <div className="mx-auto mb-6 h-[200px] w-[200px] overflow-hidden rounded-full">
                <Image
                  src="/images/serviceAyuEco.png"
                  alt="Servicio de Ayudas Económicas"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">SERVICIO DE AYUDAS ECONÓMICAS</h3>
              <p className="text-justify text-sm text-gray-700 leading-relaxed">
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